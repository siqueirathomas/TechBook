
const authStyles = `
#techbook-auth-overlay {
  position: fixed; inset: 0; z-index: 99999;
  display: flex; align-items: center; justify-content: center;
  padding: 20px; overflow-y: auto;
  background: #0b1120; color: #e5e7eb;
  font-family: system-ui, sans-serif;
}
#techbook-auth-card {
  width: 100%; max-width: 410px; padding: 28px;
  border: 1px solid #293449; border-radius: 18px;
  background: #111a2b; box-sizing: border-box;
}
#techbook-auth-card h1 { margin: 0 0 8px; font-size: 26px; }
#techbook-auth-card p { color: #aab6ca; line-height: 1.5; }
#techbook-auth-card label { display: block; margin-top: 14px; }
#techbook-auth-card input {
  width: 100%; box-sizing: border-box; margin-top: 6px;
  padding: 12px; border: 1px solid #35435c;
  border-radius: 9px; background: #0b1120; color: white;
}
#techbook-auth-card button {
  width: 100%; margin-top: 14px; padding: 12px;
  border: 0; border-radius: 9px; cursor: pointer;
  background: #6d7cff; color: white; font-weight: 700;
}
#techbook-auth-card .secondary {
  background: transparent; border: 1px solid #35435c;
}
#techbook-auth-message { overflow-wrap: anywhere; }
#techbook-recovery-result {
  display: none; padding: 12px; margin-top: 12px;
  border: 1px solid #6d7cff; border-radius: 9px;
  overflow-wrap: anywhere;
}
`;

const authStyleElement = document.createElement("style");
authStyleElement.textContent = authStyles;
document.head.appendChild(authStyleElement);

const authOverlay = document.createElement("div");
authOverlay.id = "techbook-auth-overlay";
authOverlay.innerHTML = `
  <section id="techbook-auth-card">
    <h1>TechBook</h1>
    <p>Seu espaço de estudos em tecnologia.</p>

    <div id="techbook-auth-forms">
      <form id="tb-login-form">
        <h2>Entrar</h2>
        <label>Nome de usuário
          <input name="username" minlength="3" maxlength="30"
            pattern="[A-Za-z0-9_]{3,30}" autocomplete="username" required>
        </label>
        <label>Senha
          <input name="password" type="password" minlength="10"
            maxlength="128" autocomplete="current-password" required>
        </label>
        <button type="submit">Entrar na conta</button>
        <button type="button" class="secondary" id="tb-show-register">
          Criar conta
        </button>
        <button type="button" class="secondary" id="tb-show-recover">
          Esqueci minha senha
        </button>
      </form>

      <form id="tb-register-form" hidden>
        <h2>Criar conta</h2>
        <p>Use um nome de usuário e uma senha com pelo menos 10 caracteres.</p>
        <label>Nome de usuário
          <input name="username" minlength="3" maxlength="30"
            pattern="[A-Za-z0-9_]{3,30}" autocomplete="username" required>
        </label>
        <label>Senha
          <input name="password" type="password" minlength="10"
            maxlength="128" autocomplete="new-password" required>
        </label>
        <button type="submit">Criar minha conta</button>
        <button type="button" class="secondary" data-back>Voltar</button>
      </form>

      <form id="tb-recover-form" hidden>
        <h2>Recuperar senha</h2>
        <label>Nome de usuário
          <input name="username" minlength="3" maxlength="30"
            autocomplete="username" required>
        </label>
        <label>Código de recuperação
          <input name="recovery_code" autocomplete="off" required>
        </label>
        <label>Nova senha
          <input name="new_password" type="password" minlength="10"
            maxlength="128" autocomplete="new-password" required>
        </label>
        <button type="submit">Redefinir senha</button>
        <button type="button" class="secondary" data-back>Voltar</button>
      </form>
    </div>

    <div id="techbook-auth-message" role="status" aria-live="polite"></div>
    <div id="techbook-recovery-result">
      <strong>Guarde seu código de recuperação!</strong>
      <p id="tb-recovery-code"></p>
      <button type="button" id="tb-copy-recovery">Copiar código</button>
    </div>
  </section>
`;
document.body.appendChild(authOverlay);

const tbForms = {
  login: document.getElementById("tb-login-form"),
  register: document.getElementById("tb-register-form"),
  recover: document.getElementById("tb-recover-form")
};

const tbMessage = document.getElementById("techbook-auth-message");
const tbRecoveryResult = document.getElementById("techbook-recovery-result");
const tbRecoveryCode = document.getElementById("tb-recovery-code");

function tbShowForm(name) {
  Object.entries(tbForms).forEach(([key, form]) => {
    form.hidden = key !== name;
  });
  tbMessage.textContent = "";
  tbRecoveryResult.style.display = "none";
}

document.getElementById("tb-show-register").onclick =
  () => tbShowForm("register");
document.getElementById("tb-show-recover").onclick =
  () => tbShowForm("recover");

document.querySelectorAll("[data-back]").forEach(button => {
  button.onclick = () => tbShowForm("login");
});

async function tbAuthRequest(payload) {
  const response = await fetch(TECHBOOK_AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_PUBLISHABLE_KEY
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Não foi possível concluir a operação.");
  }

  return result;
}

function tbShowRecoveryCode(code) {
  tbRecoveryCode.textContent = code;
  tbRecoveryResult.style.display = "block";
}

document.getElementById("tb-copy-recovery").onclick = async () => {
  try {
    await navigator.clipboard.writeText(tbRecoveryCode.textContent);
    tbMessage.textContent = "Código copiado. Guarde-o em local seguro.";
  } catch {
    tbMessage.textContent = "Selecione e copie o código manualmente.";
  }
};

tbForms.register.addEventListener("submit", async event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const button = event.submitter;
  button.disabled = true;
  tbMessage.textContent = "Criando sua conta...";

  try {
    const result = await tbAuthRequest({
      action: "register",
      username: form.get("username"),
      password: form.get("password")
    });

    tbMessage.textContent = result.message;
    tbShowRecoveryCode(result.recovery_code);
  } catch (error) {
    tbMessage.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});

tbForms.login.addEventListener("submit", async event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const button = event.submitter;
  button.disabled = true;
  tbMessage.textContent = "Entrando...";

  try {
    const result = await tbAuthRequest({
      action: "login",
      username: form.get("username"),
      password: form.get("password")
    });

    const { error } = await window.techbookSupabase.auth.setSession({
      access_token: result.access_token,
      refresh_token: result.refresh_token
    });

    if (error) throw error;

    tbMessage.textContent = "Login realizado!";
    authOverlay.remove();
    window.dispatchEvent(new Event("techbook:authenticated"));
  } catch (error) {
    tbMessage.textContent = error.message || "Não foi possível entrar.";
  } finally {
    button.disabled = false;
  }
});

tbForms.recover.addEventListener("submit", async event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const button = event.submitter;
  button.disabled = true;
  tbMessage.textContent = "Verificando código...";

  try {
    const result = await tbAuthRequest({
      action: "recover",
      username: form.get("username"),
      recovery_code: form.get("recovery_code"),
      new_password: form.get("new_password")
    });

    tbMessage.textContent = result.message;
    tbShowRecoveryCode(result.recovery_code);
  } catch (error) {
    tbMessage.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
  
(() => {
  document.addEventListener("click", async (event) => {
    const botaoSair = event.target.closest("#techbook-logout");

    if (!botaoSair) return;

    if (!window.techbookSupabase) {
      alert("O serviço de conta não está disponível.");
      return;
    }

    if (!confirm("Deseja realmente sair da sua conta?")) {
      return;
    }

    botaoSair.disabled = true;

    try {
      const { error } = await window.techbookSupabase.auth.signOut();

      if (error) {
        throw error;
      }

      window.location.reload();
    } catch (error) {
      console.error("Erro ao sair da conta:", error);

      alert("Não foi possível sair da conta. Tente novamente.");

      botaoSair.disabled = false;
    }
  });
})();

