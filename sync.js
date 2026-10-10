
(() => {
  const DELETED_KEY = "techbook-deleted-note-ids-v1";
  let timer = null;
  let running = false;
  let pending = false;
  let activeUserId = null;

  function readDeletedIds() {
    try {
      const value = JSON.parse(localStorage.getItem(DELETED_KEY) || "[]");
      return Array.isArray(value) ? value.map(String) : [];
    } catch {
      return [];
    }
  }

  function saveDeletedIds(ids) {
    localStorage.setItem(DELETED_KEY, JSON.stringify([...new Set(ids)]));
  }

  window.techbookMarkDeleted = function (id) {
    if (id == null) return;
    saveDeletedIds([...readDeletedIds(), String(id)]);
  };

  function noteTime(note) {
    const value = note.updatedAt || note.updated_at || note.createdAt || note.created_at;
    const time = value ? Date.parse(value) : 0;
    return Number.isFinite(time) ? time : 0;
  }

  function toLocalNote(row) {
    return {
      id: String(row.client_id),
      title: row.title || "",
      area: row.area || "",
      language: row.language || "",
      type: row.type || "",
      content: row.content || "",
      favorite: Boolean(row.favorite),
      updatedAt: row.updated_at || row.created_at || new Date().toISOString(),
      createdAt: row.created_at || row.updated_at || new Date().toISOString()
    };
  }

  async function getClientAndUser() {
    const client = window.techbookSupabase;
    if (!client) throw new Error("Cliente Supabase não foi inicializado.");

    const { data, error } = await client.auth.getSession();
    if (error) throw error;

    const session = data.session;
    if (!session) return null;

    return { client, userId: session.user.id };
  }

  async function synchronize() {
    if (running) {
      pending = true;
      return;
    }

    running = true;

    try {
      const auth = await getClientAndUser();
      if (!auth) {
        activeUserId = null;
        return;
      }

      const { client, userId } = auth;

      // Não mistura dados entre contas diferentes.
      if (activeUserId !== userId) {
        activeUserId = userId;
      }

      const deletedIds = readDeletedIds();

      // Busca somente as anotações permitidas pelas políticas RLS.
      const { data: remoteRows, error: fetchError } = await client
        .from("notes")
        .select("client_id,title,area,language,type,content,favorite,updated_at,created_at")
        .eq("user_id", userId);

      if (fetchError) throw fetchError;

      const remote = remoteRows || [];

      // Aplica exclusões solicitadas neste dispositivo.
      if (deletedIds.length) {
        const { error: deleteError } = await client
          .from("notes")
          .delete()
          .eq("user_id", userId)
          .in("client_id", deletedIds);

        if (deleteError) throw deleteError;

        saveDeletedIds(
          readDeletedIds().filter(id => !deletedIds.includes(id))
        );
      }

      const deletedSet = new Set(deletedIds);
      const local = Array.isArray(notes) ? notes : [];
      const merged = new Map();

      for (const note of local) {
        if (!note || note.id == null) continue;
        const id = String(note.id);
        if (deletedSet.has(id)) continue;

        merged.set(id, { ...note, id });
      }

      for (const row of remote) {
        if (row.client_id == null) continue;

        const id = String(row.client_id);
        if (deletedSet.has(id)) continue;

        const cloudNote = toLocalNote(row);
        const localNote = merged.get(id);

        if (!localNote || noteTime(cloudNote) > noteTime(localNote)) {
          merged.set(id, cloudNote);
        }
      }

      notes = Array.from(merged.values());

      // Atualiza o armazenamento local sem disparar outro ciclo de sync.
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

      if (typeof render === "function") render();

      if (notes.length) {
        const now = new Date().toISOString();

        const rows = notes.map(note => {
          const timestamp =
            note.updatedAt || note.updated_at ||
            note.createdAt || note.created_at || now;

          return {
            user_id: userId,
            client_id: String(note.id),
            title: String(note.title ?? ""),
            area: String(note.area ?? ""),
            language: String(note.language ?? ""),
            type: String(note.type ?? ""),
            content: String(note.content ?? ""),
            favorite: Boolean(note.favorite),
            updated_at: timestamp,
            created_at: note.createdAt || note.created_at || timestamp
          };
        });

        const { error: upsertError } = await client
          .from("notes")
          .upsert(rows, { onConflict: "user_id,client_id" });

        if (upsertError) throw upsertError;
      }

      console.info("TechBook: sincronização concluída.");
    } catch (error) {
      console.error("TechBook: erro na sincronização:", error);

      if (typeof showToast === "function") {
        showToast("Não foi possível sincronizar. Suas anotações locais foram mantidas.");
      }
    } finally {
      running = false;

      if (pending) {
        pending = false;
        scheduleSync();
      }
    }
  }

  function scheduleSync() {
    clearTimeout(timer);
    timer = setTimeout(synchronize, 700);
  }

  window.techbookSync = {
    queueSync() {
      scheduleSync();
    },
    syncNow: synchronize
  };

  // Sincroniza depois do login.
  window.addEventListener("techbook:authenticated", synchronize);
})();
