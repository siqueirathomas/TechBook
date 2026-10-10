
"use strict";

const AREAS = {
  "Hardware": {
    icon: "🧩",
    description: "Componentes físicos, funcionamento do computador, montagem, diagnóstico e manutenção.",
    topics: [
      
{
  title: "Processador (CPU)",
  summary: "Arquitetura, funcionamento, características, compatibilidade, desempenho e diagnóstico de processadores.",
  content: `
    <h3>1. O que é a CPU?</h3>
    <p>A Unidade Central de Processamento (CPU, de Central Processing Unit) é um dos principais componentes de um computador. Ela executa instruções de programas, realiza operações aritméticas e lógicas e coordena parte das atividades necessárias ao funcionamento do sistema.</p>
    <p>Quando um programa é executado, suas instruções e dados são disponibilizados ao processador por meio da hierarquia de memória. A CPU busca instruções, decodifica o que elas solicitam e executa as operações correspondentes.</p>
    <div class="callout">A CPU não trabalha isoladamente: seu desempenho depende também da memória RAM, do armazenamento, da placa-mãe, da refrigeração, da alimentação elétrica e do software.</div>

    <h3>2. Principais funções</h3>
    <ul>
      <li><b>Buscar instruções:</b> obter as próximas instruções que precisam ser executadas.</li>
      <li><b>Decodificar instruções:</b> interpretar qual operação deve ser realizada.</li>
      <li><b>Executar operações:</b> realizar cálculos, comparações, movimentações de dados e outras tarefas.</li>
      <li><b>Controlar o fluxo:</b> determinar a sequência de execução, incluindo desvios e chamadas de procedimentos.</li>
      <li><b>Coordenar transferências:</b> movimentar dados entre registradores, caches, memória e outros componentes.</li>
      <li><b>Tratar interrupções:</b> responder a eventos que exigem atenção do processador e do sistema operacional.</li>
    </ul>

    <h3>3. Arquitetura e microarquitetura</h3>
    <p><b>Arquitetura do conjunto de instruções (ISA):</b> define as instruções que o processador reconhece, os registradores visíveis ao software e outras regras que permitem que programas sejam executados naquela plataforma.</p>
    <p><b>Microarquitetura:</b> é a maneira como o processador foi projetado internamente para implementar essas instruções. Dois processadores podem utilizar a mesma ISA e apresentar desempenhos diferentes por terem microarquiteturas distintas.</p>
    <p><b>x86-64:</b> arquitetura amplamente utilizada em computadores pessoais com processadores Intel e AMD compatíveis.</p>
    <p><b>ARM:</b> família de arquiteturas presente em celulares, dispositivos embarcados, computadores e servidores.</p>
    <p><b>RISC-V:</b> arquitetura de conjunto de instruções aberta, utilizada em projetos educacionais, embarcados e outras aplicações.</p>
    <p>Compatibilidade de software depende da arquitetura, do sistema operacional, das bibliotecas e dos requisitos específicos do programa. A marca do processador, sozinha, não determina essa compatibilidade.</p>

    <h3>4. Núcleos (cores)</h3>
    <p>Um núcleo é uma unidade de processamento capaz de executar instruções. Processadores modernos normalmente possuem vários núcleos, permitindo distribuir o trabalho entre diferentes fluxos de execução.</p>
    <ul>
      <li><b>Dois núcleos:</b> podem atender a várias tarefas, mas possuem menos capacidade de processamento paralelo que modelos maiores em condições comparáveis.</li>
      <li><b>Quatro a seis núcleos:</b> configuração encontrada em muitos computadores domésticos e de uso geral.</li>
      <li><b>Oito ou mais núcleos:</b> pode beneficiar renderização, compilação, virtualização e outras cargas paralelas.</li>
    </ul>
    <p>Esses exemplos não representam uma classificação universal. A geração, a arquitetura, o desempenho por núcleo, o consumo e o tipo de tarefa também importam. Um programa que utiliza principalmente um único núcleo pode não aproveitar todos os núcleos disponíveis.</p>

    <h3>5. Threads e SMT</h3>
    <p>Uma thread é um fluxo de execução de software. O sistema operacional distribui threads entre os recursos de processamento disponíveis.</p>
    <p>Alguns processadores permitem que um núcleo físico mantenha o estado de mais de uma thread de hardware. Essa técnica é chamada de SMT (Simultaneous Multithreading). Na Intel, uma implementação conhecida é o Hyper-Threading.</p>
    <p>Por exemplo, um processador com 6 núcleos e 12 threads pode oferecer 12 processadores lógicos ao sistema operacional. Isso não significa que ele possua 12 núcleos físicos nem que seu desempenho seja exatamente o dobro de um modelo de 6 threads.</p>
    <div class="callout">Núcleos físicos e threads de hardware são conceitos diferentes. O ganho obtido com SMT varia conforme a carga de trabalho.</div>

    <h3>6. Frequência de clock</h3>
    <p>A frequência indica quantos ciclos de clock ocorrem por segundo. Ela é expressa em hertz (Hz), normalmente em gigahertz (GHz).</p>
    <ul>
      <li><b>1 GHz:</b> um bilhão de ciclos por segundo.</li>
      <li><b>Clock base:</b> referência de frequência definida pelo fabricante para condições especificadas de operação.</li>
      <li><b>Clock máximo ou boost:</b> frequência que pode ser alcançada em determinadas condições de carga, temperatura, energia e quantidade de núcleos ativos.</li>
      <li><b>Clock efetivo:</b> frequência observada durante a operação real, que pode variar constantemente.</li>
    </ul>
    <p>Uma frequência maior não garante, isoladamente, maior desempenho. A quantidade de instruções concluídas por ciclo (IPC), a arquitetura, os limites de energia, a memória e a otimização do programa também influenciam o resultado.</p>

    <h3>7. Memória cache: L1, L2 e L3</h3>
    <p>A cache é uma memória de alta velocidade utilizada para manter cópias de dados e instruções que podem ser acessados novamente. Ela reduz a necessidade de buscar informações em memórias mais lentas.</p>
    <ul>
      <li><b>L1:</b> geralmente muito pequena e muito rápida, frequentemente separada em cache de instruções e de dados.</li>
      <li><b>L2:</b> costuma ter capacidade maior que a L1, com latência normalmente superior.</li>
      <li><b>L3:</b> frequentemente maior e compartilhada entre vários núcleos, dependendo do projeto do processador.</li>
    </ul>
    <p>Nem todos os processadores organizam a cache da mesma maneira. Existem diferenças de capacidade, latência, compartilhamento e inclusão de dados entre os níveis.</p>
    <p>Uma cache maior pode beneficiar determinados programas, mas não é uma garantia universal de desempenho superior. O resultado depende da frequência com que o programa reutiliza dados e instruções.</p>

    <h3>8. Registradores e unidades internas</h3>
    <p><b>Registradores:</b> pequenas áreas de armazenamento internas utilizadas para manter dados, endereços, resultados e informações de controle durante a execução.</p>
    <p><b>Unidade lógica e aritmética (ULA/ALU):</b> executa operações matemáticas e lógicas, como adição, comparação e operações booleanas.</p>
    <p><b>Unidade de controle:</b> participa da interpretação das instruções e do controle das operações internas.</p>
    <p><b>Unidades de ponto flutuante (FPU):</b> executam operações numéricas com valores de ponto flutuante.</p>
    <p><b>Unidades vetoriais:</b> podem processar múltiplos valores em uma mesma instrução, conforme as extensões suportadas e o tipo de operação.</p>
    <p><b>Pipeline:</b> técnica que divide a execução de instruções em etapas, permitindo sobrepor partes de diferentes instruções. Desvios, dependências e falhas de cache podem reduzir sua eficiência.</p>

    <h3>9. Processo de fabricação e litografia</h3>
    <p>O processo de fabricação envolve técnicas usadas para produzir os transistores e as interconexões do chip. Os fabricantes divulgam nomes de nós tecnológicos, como 7 nm, 5 nm e 3 nm, entre outros.</p>
    <p>Esses valores comerciais não devem ser interpretados como uma medida única e diretamente comparável de todas as dimensões físicas dos transistores. Processos com nomes semelhantes podem ter características diferentes entre fabricantes.</p>
    <p>O processo de fabricação influencia densidade, consumo, desempenho e custo, mas não determina sozinho a qualidade do processador. Arquitetura, projeto elétrico, frequência e limites térmicos também são relevantes.</p>

    <h3>10. Consumo de energia, TDP e temperatura</h3>
    <p><b>TDP:</b> sigla de Thermal Design Power. É uma especificação térmica definida pelo fabricante para orientar o projeto de refrigeração, mas seu significado e método de cálculo variam entre fabricantes e famílias de produtos.</p>
    <p>O TDP não deve ser tratado automaticamente como o consumo máximo de energia da CPU. O consumo real pode ser menor ou maior conforme a carga, os limites de potência e as configurações utilizadas.</p>
    <p><b>Temperatura:</b> depende da carga de trabalho, da temperatura ambiente, do cooler, do fluxo de ar, da montagem e dos limites definidos para o processador.</p>
    <p><b>Thermal throttling:</b> redução automática do desempenho ou da frequência para controlar a temperatura quando os limites térmicos são atingidos.</p>
    <p><b>Limites de potência:</b> mecanismos que restringem o consumo e podem afetar a frequência sustentada. Nomes e parâmetros específicos variam conforme a plataforma.</p>

    <h3>11. Soquete e compatibilidade com a placa-mãe</h3>
    <p>O soquete é a interface física e elétrica que conecta o processador à placa-mãe. Modelos de processador diferentes podem utilizar soquetes distintos, mesmo pertencendo à mesma marca.</p>
    <p>Antes de instalar ou comprar um processador, confirme:</p>
    <ul>
      <li>O soquete exigido pelo processador e o presente na placa-mãe.</li>
      <li>O modelo e o chipset da placa-mãe.</li>
      <li>A lista oficial de processadores suportados pelo fabricante.</li>
      <li>A versão mínima da BIOS/UEFI exigida.</li>
      <li>Os limites de energia e a capacidade de alimentação da placa-mãe.</li>
      <li>A compatibilidade do cooler, incluindo sistema de fixação e capacidade térmica.</li>
      <li>O suporte de memória RAM e outros requisitos da plataforma.</li>
    </ul>
    <div class="callout">Ter o mesmo soquete não garante compatibilidade completa. Consulte a lista oficial de CPUs suportadas e a versão de BIOS necessária para o modelo exato da placa-mãe.</div>

    <h3>12. Gerações e modelos</h3>
    <p>Fabricantes lançam diferentes famílias e gerações de processadores. Nomes comerciais ajudam a identificar uma linha, mas não substituem a consulta às especificações técnicas.</p>
    <p>Ao comparar modelos, verifique:</p>
    <ul>
      <li>Arquitetura e geração.</li>
      <li>Número de núcleos e threads.</li>
      <li>Frequências base e máximas, considerando as condições de operação.</li>
      <li>Capacidade de cache.</li>
      <li>Consumo, limites de potência e requisitos de refrigeração.</li>
      <li>Memórias suportadas e compatibilidade com a placa-mãe.</li>
      <li>Presença de gráficos integrados e suas capacidades.</li>
      <li>Conjunto de instruções e recursos de virtualização.</li>
      <li>Resultados de testes independentes na tarefa pretendida.</li>
    </ul>
    <p>Não é seguro concluir que todo processador de uma família é melhor que todos os modelos de outra. Compare os modelos exatos e considere a finalidade do computador.</p>

    <h3>13. Gráficos integrados</h3>
    <p>Alguns processadores incluem uma unidade de processamento gráfico integrada (GPU). Ela pode executar tarefas gráficas e permitir a conexão de um monitor, desde que a plataforma ofereça as saídas de vídeo necessárias.</p>
    <p>Outros processadores não possuem gráficos integrados ativos ou disponíveis. Nesses casos, um computador que precisa de saída de vídeo pode exigir uma placa de vídeo dedicada.</p>
    <p>A presença e o desempenho dos gráficos integrados dependem do modelo exato. Não deduza essa característica apenas pela marca ou pelo nome geral da família.</p>

    <h3>14. Recursos de virtualização e instruções</h3>
    <p><b>Virtualização:</b> recursos de hardware podem permitir que hipervisores executem máquinas virtuais com maior eficiência. Exemplos de tecnologias incluem Intel VT-x e AMD-V, mas o suporte efetivo também depende da placa-mãe, do firmware e das configurações.</p>
    <p><b>Extensões de instruções:</b> conjuntos adicionais permitem operações especializadas ou processamento vetorial. A disponibilidade varia conforme o modelo e a arquitetura.</p>
    <p><b>Compatibilidade de software:</b> um programa pode exigir instruções específicas. Um processador que não oferece a extensão exigida pode não executar esse programa ou pode precisar de uma versão alternativa.</p>

    <h3>15. Instalação física do processador</h3>
    <p>A instalação exige cuidado com eletricidade estática, pinos, contatos e sistema de refrigeração. Os procedimentos exatos dependem do soquete e do modelo.</p>
    <ul>
      <li>Desligue o computador e desconecte a alimentação elétrica antes de trabalhar internamente.</li>
      <li>Consulte o manual da placa-mãe e do processador.</li>
      <li>Utilize proteção adequada contra descarga eletrostática e evite tocar nos contatos.</li>
      <li>Alinhe as marcas de orientação e nunca force o encaixe.</li>
      <li>Fixe o cooler conforme as instruções do fabricante.</li>
      <li>Aplique pasta térmica conforme a orientação do sistema de refrigeração; evite excesso ou falta de material.</li>
      <li>Conecte o cooler ao conector apropriado, normalmente identificado como CPU_FAN.</li>
      <li>Após a montagem, verifique se o sistema inicializa e monitore as temperaturas.</li>
    </ul>
    <p>Em processadores com pinos no próprio chip, eles podem ser danificados se houver desalinhamento. Em plataformas com contatos no soquete, os contatos da placa-mãe também exigem cuidado especial.</p>

    <h3>16. Falhas e sintomas relacionados à CPU</h3>
    <p>Problemas que parecem estar relacionados ao processador podem ter outras causas. A CPU raramente deve ser condenada apenas com base em um sintoma isolado.</p>
    <ul>
      <li><b>Computador não liga:</b> verifique tomada, fonte, conectores de alimentação, placa-mãe e possíveis curtos antes de suspeitar da CPU.</li>
      <li><b>Computador liga, mas não apresenta imagem:</b> verifique memória RAM, saída de vídeo, placa de vídeo, alimentação, BIOS e compatibilidade do processador.</li>
      <li><b>Desligamentos inesperados:</b> podem estar relacionados a temperatura, fonte, alimentação da placa-mãe ou instabilidade do sistema.</li>
      <li><b>Desempenho baixo:</b> confira uso da CPU, temperatura, frequência efetiva, processos em segundo plano, memória e limites de potência.</li>
      <li><b>Travamentos ou reinicializações:</b> podem decorrer de memória instável, overclock, firmware, drivers, fonte, placa-mãe ou defeito físico.</li>
      <li><b>Temperatura elevada:</b> verifique montagem do cooler, pasta térmica, ventilação, poeira, bomba do sistema líquido quando aplicável e carga de trabalho.</li>
      <li><b>Erro de inicialização após troca da CPU:</b> confirme compatibilidade, versão de BIOS, instalação e conectores de alimentação.</li>
    </ul>

    <h3>17. Diagnóstico técnico: sequência recomendada</h3>
    <p>Um diagnóstico confiável começa pela coleta de sintomas e pela verificação das causas mais comuns, antes de substituir peças.</p>
    <ol>
      <li><b>Registrar o sintoma:</b> anotar quando ocorre, mensagens de erro, alterações recentes e condições em que o problema aparece.</li>
      <li><b>Verificar conexões:</b> conferir cabos de alimentação, encaixes, cooler e montagem.</li>
      <li><b>Conferir compatibilidade:</b> validar modelo da CPU, placa-mãe e versão da BIOS.</li>
      <li><b>Inspecionar a refrigeração:</b> observar ventiladores, fluxo de ar, poeira e fixação do cooler.</li>
      <li><b>Monitorar parâmetros:</b> consultar temperatura, frequência, utilização e limites de potência com ferramentas confiáveis.</li>
      <li><b>Restaurar configurações padrão:</b> remover overclock e ajustes instáveis, quando apropriado.</li>
      <li><b>Testar outros componentes:</b> avaliar RAM, fonte, placa-mãe e placa de vídeo para isolar a origem.</li>
      <li><b>Executar testes controlados:</b> utilizar ferramentas de diagnóstico adequadas e observar erros, temperatura e estabilidade.</li>
      <li><b>Confirmar antes de substituir:</b> trocar a CPU somente quando houver evidências suficientes ou testes cruzados que sustentem essa conclusão.</li>
    </ol>
    <div class="callout">Faça testes de estabilidade monitorando as temperaturas e interrompa o teste se houver superaquecimento, cheiro de queimado, ruídos anormais ou desligamentos repetidos.</div>

    <h3>18. Overclock e undervolt</h3>
    <p><b>Overclock:</b> operação acima de parâmetros padrão para buscar maior desempenho. Pode elevar consumo, temperatura e instabilidade, além de depender do suporte da CPU, placa-mãe, refrigeração e firmware.</p>
    <p><b>Undervolt:</b> redução da tensão utilizada pelo processador com o objetivo de diminuir consumo ou temperatura. Os resultados variam conforme a unidade e a configuração, e uma tensão muito baixa pode causar erros ou travamentos.</p>
    <p>Alterações de tensão, frequência e limites de potência devem ser feitas gradualmente, com conhecimento dos riscos e testes de estabilidade. Restaurar os valores padrão é uma medida importante durante o diagnóstico de instabilidade.</p>

    <h3>19. Como avaliar o desempenho</h3>
    <p>O desempenho deve ser avaliado conforme o tipo de trabalho executado.</p>
    <ul>
      <li><b>Desempenho por núcleo:</b> importante para programas com pouca paralelização e algumas tarefas interativas.</li>
      <li><b>Desempenho multicore:</b> relevante para renderização, compilação, codificação e cargas que utilizam muitos núcleos.</li>
      <li><b>Latência de memória:</b> pode influenciar aplicações sensíveis ao tempo de acesso aos dados.</li>
      <li><b>Desempenho sustentado:</b> depende da capacidade de manter frequências sem atingir limites térmicos ou elétricos.</li>
      <li><b>Consumo e eficiência:</b> ajudam a avaliar energia utilizada para realizar determinado trabalho.</li>
    </ul>
    <p>Benchmarks são úteis quando representam a aplicação pretendida e são executados em condições comparáveis. Um único resultado sintético não descreve perfeitamente o desempenho em todos os programas.</p>

    <h3>20. Ferramentas úteis para suporte e manutenção</h3>
    <ul>
      <li><b>BIOS/UEFI:</b> consulta informações básicas do sistema e permite verificar configurações de hardware.</li>
      <li><b>Gerenciador de Tarefas:</b> no Windows, mostra utilização da CPU, processos e outras informações de desempenho.</li>
      <li><b>Monitor de Recursos:</b> oferece uma visão mais detalhada da utilização de recursos do Windows.</li>
      <li><b>Visualizadores de hardware:</b> podem apresentar modelo, frequências, temperaturas e sensores, conforme o suporte do equipamento.</li>
      <li><b>Ferramentas de benchmark:</b> ajudam a comparar desempenho em cargas específicas.</li>
      <li><b>Manuais e listas oficiais de compatibilidade:</b> são fontes essenciais para confirmar especificações e suporte de BIOS.</li>
    </ul>
    <p>Utilize ferramentas de fontes confiáveis e baixe programas dos sites oficiais sempre que possível. Leituras de sensores podem variar de acordo com o modelo e a ferramenta utilizada.</p>

    <h3>21. Glossário essencial</h3>
    <ul>
      <li><b>CPU:</b> unidade central de processamento.</li>
      <li><b>ISA:</b> conjunto de instruções reconhecido pela arquitetura.</li>
      <li><b>IPC:</b> instruções concluídas por ciclo, dependendo da definição e da carga utilizada na medição.</li>
      <li><b>Core:</b> núcleo físico de processamento.</li>
      <li><b>Thread:</b> fluxo de execução; o termo também é usado para threads de hardware expostas pela CPU.</li>
      <li><b>Cache:</b> memória rápida que reduz acessos a níveis de memória mais lentos.</li>
      <li><b>Clock:</b> frequência de operação.</li>
      <li><b>TDP:</b> especificação térmica usada no planejamento de refrigeração, conforme a definição do fabricante.</li>
      <li><b>BIOS/UEFI:</b> firmware responsável pela inicialização e configuração básica da plataforma.</li>
      <li><b>Throttling:</b> redução de frequência ou desempenho em resposta a limites térmicos, elétricos ou operacionais.</li>
      <li><b>Benchmark:</b> teste utilizado para medir o desempenho em uma carga específica.</li>
      <li><b>Overclock:</b> operação com frequência acima dos parâmetros padrão.</li>
      <li><b>Undervolt:</b> redução da tensão de operação.</li>
    </ul>

    <h3>22. Referências para consulta</h3>
    <p>Para especificações exatas, compatibilidade e procedimentos, priorize a documentação oficial:</p>
    <ul>
      <li>Intel ARK — especificações oficiais dos produtos Intel.</li>
      <li>AMD — páginas de especificações dos processadores Ryzen e demais famílias.</li>
      <li>Manual e lista de CPUs suportadas pelo fabricante da placa-mãe.</li>
      <li>Documentação oficial do sistema operacional e das ferramentas de diagnóstico utilizadas.</li>
    </ul>
    <p>As especificações variam entre modelos e podem mudar conforme a plataforma. Sempre confira o código completo do processador e a documentação correspondente.</p>`
},

      {
        title: "Placa-mãe",
        summary: "Interliga processador, memória, armazenamento e periféricos.",
        content: `
          <h3>Função</h3>
          <p>A placa-mãe permite a comunicação entre os componentes e distribui conexões e alimentação elétrica para diferentes circuitos.</p>
          <h3>Partes importantes</h3>
          <ul>
            <li><b>Soquete:</b> recebe o processador compatível.</li>
            <li><b>Chipset:</b> participa do gerenciamento de recursos e conexões da plataforma.</li>
            <li><b>Slots DIMM:</b> encaixes para memória RAM.</li>
            <li><b>PCI Express:</b> conexões para placas de vídeo e outras placas de expansão.</li>
            <li><b>SATA e M.2:</b> interfaces usadas por unidades de armazenamento.</li>
            <li><b>VRM:</b> circuito que regula a alimentação do processador.</li>
            <li><b>BIOS/UEFI:</b> firmware de inicialização e configuração do hardware.</li>
          </ul>
          <h3>Formatos</h3>
          <p>ATX, Micro-ATX e Mini-ITX são formatos comuns. O gabinete precisa aceitar o formato da placa e ter espaço para os demais componentes.</p>
          <h3>Diagnóstico</h3>
          <p>Confira conectores de energia, sinais de dano, pinos, capacitores, memória compatível e indicadores de diagnóstico. Um defeito de inicialização não significa automaticamente que a placa-mãe queimou.</p>`
      },
      {
        title: "Memória RAM",
        summary: "Armazena temporariamente dados utilizados pelos programas em execução.",
        content: `
          <h3>Como funciona?</h3>
          <p>A RAM é uma memória volátil: perde seu conteúdo quando o computador é desligado. Ela mantém dados disponíveis rapidamente para o processador.</p>
          <ul>
            <li><b>DDR3, DDR4 e DDR5:</b> gerações diferentes, incompatíveis entre si fisicamente.</li>
            <li><b>Capacidade:</b> medida em GB; influencia a quantidade de programas e dados mantidos simultaneamente.</li>
            <li><b>Frequência e latência:</b> características que afetam o desempenho da memória.</li>
            <li><b>Dual channel:</b> permite maior largura de banda quando a plataforma e a instalação suportam o modo de dois canais.</li>
            <li><b>DIMM e SO-DIMM:</b> formatos comuns para desktops e notebooks, respectivamente.</li>
          </ul>
          <h3>Diagnóstico</h3>
          <p>Falhas de RAM podem causar travamentos, telas azuis e reinicializações. Teste os módulos individualmente e use ferramentas como Diagnóstico de Memória do Windows ou MemTest86.</p>
          <p>Antes de manusear os módulos, desligue o equipamento, retire a alimentação e siga os cuidados contra eletricidade estática.</p>`
      },
      {
        title: "Armazenamento: HD, SSD e NVMe",
        summary: "Diferenças entre unidades magnéticas e unidades de estado sólido.",
        content: `
          <h3>HD</h3>
          <p>Utiliza pratos magnéticos e partes mecânicas. Costuma oferecer grande capacidade por custo menor, mas é mais sensível a impactos e geralmente mais lento.</p>
          <h3>SSD SATA</h3>
          <p>Utiliza memória flash e não possui partes móveis. Pode usar o formato de 2,5 polegadas ou outros formatos compatíveis com a interface SATA.</p>
          <h3>SSD M.2 NVMe</h3>
          <p>M.2 é o formato físico; NVMe é um protocolo de armazenamento normalmente utilizado sobre PCI Express. Nem todo SSD M.2 é NVMe: existem também modelos M.2 SATA.</p>
          <h3>Cuidados e diagnóstico</h3>
          <ul>
            <li>Confira a saúde SMART com ferramentas apropriadas.</li>
            <li>Observe erros de leitura, ruídos anormais em HDs e desconexões.</li>
            <li>Mantenha backups em outro dispositivo ou serviço confiável.</li>
            <li>Se suspeitar de falha física e os dados forem importantes, evite testes repetidos que possam agravar o problema.</li>
          </ul>`
      },
      {
        title: "Fonte de alimentação (PSU)",
        summary: "Converte a energia da tomada em tensões utilizadas pelo computador.",
        content: `
          <p>A fonte fornece energia aos componentes por diferentes linhas elétricas. Sua qualidade e capacidade precisam ser adequadas à configuração.</p>
          <ul>
            <li><b>Potência:</b> deve considerar CPU, GPU, periféricos e margem para picos de consumo.</li>
            <li><b>Conectores:</b> ATX de 24 pinos, EPS para CPU e conectores PCIe ou 12V-2x6 conforme a placa de vídeo.</li>
            <li><b>Eficiência:</b> certificações como 80 PLUS indicam classes de eficiência sob condições específicas; não garantem sozinhas toda a qualidade da fonte.</li>
          </ul>
          <div class="callout warning"><b>Segurança:</b> nunca abra uma fonte de alimentação para tentar repará-la sem qualificação. Seus capacitores podem manter tensões perigosas mesmo depois de desconectada.</div>
          <p>Desligamentos sob carga podem ter várias causas. Faça diagnóstico seguro e não conclua que a fonte é defeituosa apenas pelo sintoma.</p>`
      },
      {
        title: "Placa de vídeo (GPU)",
        summary: "Processa gráficos e acelera determinadas tarefas computacionais.",
        content: `
          <p>A GPU pode estar integrada ao processador ou existir em uma placa dedicada.</p>
          <ul>
            <li><b>VRAM:</b> memória dedicada utilizada pela placa gráfica.</li>
            <li><b>PCI Express:</b> interface comum de conexão com a placa-mãe.</li>
            <li><b>Driver:</b> software que permite ao sistema operacional se comunicar com o hardware.</li>
            <li><b>Refrigeração:</b> dissipador, ventoinhas e fluxo de ar ajudam a controlar a temperatura.</li>
          </ul>
          <p>Problemas gráficos podem decorrer de driver, temperatura, alimentação, cabo, monitor ou defeito físico. Teste uma variável por vez.</p>`
      },
      {
        title: "BIOS e UEFI",
        summary: "Firmware responsável pela inicialização e configuração básica do equipamento.",
        content: `
          <p>O firmware inicializa e verifica componentes, oferece configurações de hardware e inicia o processo de carregamento do sistema operacional.</p>
          <ul>
            <li><b>POST:</b> processo de verificação durante a inicialização.</li>
            <li><b>Boot order:</b> ordem de dispositivos de inicialização.</li>
            <li><b>UEFI:</b> interface moderna de firmware, com suporte a recursos como Secure Boot.</li>
            <li><b>TPM e Secure Boot:</b> recursos relacionados a segurança e integridade do processo de inicialização.</li>
          </ul>
          <p>Atualize o firmware somente com o arquivo correto para o modelo exato da placa e seguindo as instruções do fabricante. Uma interrupção durante a atualização pode inutilizar o equipamento.</p>`
      },
      {
        title: "Montagem e manutenção preventiva",
        summary: "Procedimentos básicos para montagem e conservação de computadores.",
        content: `
          <h3>Antes da montagem</h3>
          <ul>
            <li>Verifique compatibilidade entre CPU, placa-mãe, RAM, gabinete e fonte.</li>
            <li>Separe ferramentas adequadas e trabalhe em superfície segura.</li>
            <li>Desconecte a alimentação e tome precauções contra eletricidade estática.</li>
          </ul>
          <h3>Durante a montagem</h3>
          <ul>
            <li>Instale CPU, cooler, RAM e armazenamento conforme os manuais.</li>
            <li>Conecte os cabos de alimentação necessários.</li>
            <li>Confira os conectores do painel frontal e as ventoinhas.</li>
            <li>Não force componentes ou conectores incompatíveis.</li>
          </ul>
          <h3>Manutenção preventiva</h3>
          <p>Limpe poeira com métodos adequados, confira temperaturas, organize cabos, observe ruídos e mantenha backups. Evite líquidos e não deixe ventoinhas girarem livremente com jatos de ar comprimido.</p>`
      }
    ]
  },

  
"Software": {
  icon: "💿",
  description: "Sistemas operacionais, drivers, aplicativos, instalação, armazenamento lógico, virtualização e diagnóstico de problemas.",
  topics: [
    {
      title: "Sistemas operacionais",
      summary: "Arquitetura, funcionamento, gerenciamento de recursos e diagnóstico de sistemas operacionais.",
      content: `
        <h3>1. O que é um sistema operacional?</h3>
        <p>Um sistema operacional (SO) é o software responsável por administrar os recursos do computador e oferecer uma plataforma para a execução de aplicativos. Ele coordena a comunicação entre hardware, programas e usuários.</p>
        <p>Sem um sistema operacional convencional, seria necessário que cada programa controlasse diretamente grande parte do hardware, tornando o desenvolvimento e a utilização do computador muito mais complexos.</p>

        <h3>2. Principais funções</h3>
        <ul>
          <li><b>Gerenciamento de processos:</b> controla a execução dos programas e distribui tempo de processamento entre eles.</li>
          <li><b>Gerenciamento de memória:</b> distribui memória RAM aos processos e utiliza mecanismos de memória virtual.</li>
          <li><b>Gerenciamento de arquivos:</b> organiza arquivos, pastas, metadados e permissões.</li>
          <li><b>Gerenciamento de dispositivos:</b> coordena o acesso a discos, placas de rede, áudio, vídeo e periféricos.</li>
          <li><b>Segurança:</b> controla autenticação, privilégios, permissões e isolamento entre processos.</li>
          <li><b>Interface com o usuário:</b> oferece ambientes gráficos, terminais e ferramentas administrativas.</li>
          <li><b>Rede:</b> disponibiliza recursos de comunicação, protocolos e serviços de conectividade.</li>
        </ul>

        <h3>3. Kernel e espaço de usuário</h3>
        <p>O <b>kernel</b> é o núcleo do sistema operacional. Ele administra recursos fundamentais e oferece serviços utilizados pelos programas.</p>
        <p>O espaço de usuário é a área na qual a maioria dos aplicativos funciona com privilégios limitados. Essa separação reduz o risco de um programa comum comprometer diretamente o núcleo do sistema.</p>
        <p>Quando um aplicativo precisa executar uma operação protegida, como acessar determinado recurso do sistema, pode utilizar chamadas de sistema (system calls).</p>
        <p>Drivers, serviços e componentes do sistema podem funcionar em diferentes níveis de privilégio, dependendo da arquitetura e da implementação do sistema operacional.</p>

        <h3>4. Processos, threads e serviços</h3>
        <p>Um <b>processo</b> representa um programa em execução, com recursos e espaço de memória próprios. Uma <b>thread</b> é uma unidade de execução dentro de um processo. Um processo pode conter várias threads que compartilham parte de seus recursos.</p>
        <p>Serviços são componentes que executam funções em segundo plano, como fornecer rede, impressão, atualizações ou autenticação. Nem todo processo é um serviço, e nem todo serviço precisa permanecer ativo o tempo inteiro.</p>
        <p>O consumo elevado de CPU pode indicar processamento intenso, um aplicativo travado ou uma tarefa em segundo plano. Consumo elevado de memória pode causar paginação e lentidão, especialmente quando a RAM disponível se torna insuficiente.</p>

        <h3>5. Memória virtual e paginação</h3>
        <p>O sistema operacional utiliza memória virtual para oferecer a cada processo um espaço de endereçamento organizado e protegido. A memória virtual não é simplesmente sinônimo de arquivo de paginação.</p>
        <p>No Windows, o arquivo de paginação pode ajudar a manter dados de memória comprometida quando a RAM física não é suficiente e também participa de mecanismos de despejo de memória em determinadas configurações.</p>
        <p>Quando há muita paginação para o armazenamento, o computador pode ficar lento. Isso não significa automaticamente que o arquivo de paginação deva ser desativado: a configuração precisa considerar a memória disponível e a carga de trabalho.</p>

        <h3>6. Comparação entre sistemas</h3>
        <ul>
          <li><b>Windows:</b> sistema amplamente utilizado em computadores pessoais, jogos, escritórios e ambientes corporativos. Oferece ampla compatibilidade com aplicativos comerciais e periféricos.</li>
          <li><b>GNU/Linux:</b> família de sistemas que utiliza o kernel Linux em conjunto com ferramentas e componentes diversos. Possui distribuições como Ubuntu, Debian, Fedora e Linux Mint.</li>
          <li><b>macOS:</b> sistema operacional da Apple para computadores Mac, integrado ao ecossistema de hardware e software da empresa.</li>
          <li><b>ChromeOS:</b> sistema utilizado em Chromebooks, com integração a serviços on-line e suporte a diferentes tipos de aplicativos conforme o dispositivo.</li>
        </ul>
        <p>Compatibilidade, suporte, requisitos de hardware, disponibilidade de programas, segurança e finalidade de uso são critérios importantes na escolha de um sistema.</p>

        <h3>7. Interfaces: GUI e CLI</h3>
        <p>A interface gráfica (GUI) utiliza janelas, menus, ícones e controles visuais. A interface de linha de comando (CLI) permite interagir com o sistema por meio de comandos escritos.</p>
        <p>No Windows, ferramentas como Prompt de Comando e PowerShell auxiliam na administração. No Linux, terminais permitem executar comandos e scripts de gerenciamento.</p>
        <p>Interfaces gráficas facilitam muitas tarefas, enquanto terminais podem permitir operações mais rápidas, repetíveis e automatizáveis. Comandos administrativos devem ser executados apenas quando sua finalidade e seus efeitos forem compreendidos.</p>

        <h3>8. Ferramentas de diagnóstico do Windows</h3>
        <ul>
          <li><b>Gerenciador de Tarefas:</b> apresenta processos, consumo de recursos e programas de inicialização.</li>
          <li><b>Monitor de Recursos:</b> oferece informações detalhadas sobre CPU, memória, discos e rede.</li>
          <li><b>Visualizador de Eventos:</b> registra eventos de aplicativos, sistema e segurança.</li>
          <li><b>Gerenciador de Dispositivos:</b> mostra dispositivos reconhecidos, estado dos drivers e alguns códigos de erro.</li>
          <li><b>Monitor de Confiabilidade:</b> apresenta um histórico de falhas, instalações e eventos relevantes.</li>
          <li><b>Informações do Sistema:</b> reúne dados sobre hardware, drivers e ambiente do sistema.</li>
          <li><b>Terminal:</b> permite utilizar ferramentas de verificação, rede, arquivos e administração.</li>
        </ul>

        <h3>9. Diagnóstico de lentidão</h3>
        <p>Uma análise consistente começa pela identificação do sintoma e do momento em que ocorre. É importante distinguir lentidão na inicialização, travamentos durante jogos, demora para abrir arquivos e falhas que acontecem apenas em um aplicativo.</p>
        <ol>
          <li>Verificar o consumo de CPU, RAM, disco e GPU.</li>
          <li>Identificar processos que consomem recursos de forma incomum.</li>
          <li>Conferir espaço livre no armazenamento e estado de saúde do dispositivo.</li>
          <li>Examinar aplicativos de inicialização, atualizações recentes e registros de falha.</li>
          <li>Verificar temperaturas e estabilidade quando houver indícios de superaquecimento.</li>
          <li>Testar se o problema persiste em outra conta de usuário ou em um ambiente de inicialização apropriado.</li>
        </ol>
        <p>Evite concluir que o sistema está corrompido apenas porque está lento. A causa pode ser armazenamento degradado, falta de RAM, temperatura excessiva, aplicativo defeituoso ou problema de hardware.</p>
      `
    },
    {
      title: "Drivers e dispositivos",
      summary: "Arquitetura dos drivers, compatibilidade, instalação, atualização e diagnóstico de dispositivos.",
      content: `
        <h3>1. O que é um driver?</h3>
        <p>Um driver é um componente de software que permite ao sistema operacional controlar ou utilizar determinado dispositivo. Ele traduz operações solicitadas pelo sistema em comandos compatíveis com o hardware.</p>
        <p>Placas de vídeo, adaptadores de rede, controladores de armazenamento, impressoras, dispositivos de áudio e chipsets podem depender de drivers específicos.</p>
        <p>Alguns dispositivos funcionam com drivers genéricos fornecidos pelo sistema operacional. Outros precisam de pacotes específicos do fabricante para oferecer todos os recursos ou o desempenho esperado.</p>

        <h3>2. Driver, firmware e aplicativo</h3>
        <ul>
          <li><b>Driver:</b> permite a comunicação entre o sistema operacional e um dispositivo.</li>
          <li><b>Firmware:</b> código incorporado ao próprio dispositivo, responsável por controlar funções de baixo nível.</li>
          <li><b>Aplicativo:</b> programa utilizado para executar tarefas, como editar documentos ou reproduzir áudio.</li>
          <li><b>Utilitário do fabricante:</b> programa que pode oferecer configurações, monitoramento e atualizações adicionais.</li>
        </ul>
        <p>Esses componentes podem trabalhar em conjunto, mas não são equivalentes. Atualizar um aplicativo não significa necessariamente atualizar o firmware ou o driver do dispositivo.</p>

        <h3>3. Tipos comuns de drivers</h3>
        <ul>
          <li><b>Chipset:</b> ajuda o sistema a utilizar corretamente os controladores e recursos da placa-mãe.</li>
          <li><b>Vídeo:</b> habilita funções gráficas, aceleração 3D, gerenciamento de monitores e outros recursos da GPU.</li>
          <li><b>Áudio:</b> gerencia interfaces de entrada e saída de som.</li>
          <li><b>Rede:</b> controla adaptadores Ethernet e Wi-Fi.</li>
          <li><b>Impressora:</b> permite enviar trabalhos de impressão com os recursos compatíveis.</li>
          <li><b>Armazenamento:</b> permite utilizar controladores e dispositivos de armazenamento específicos.</li>
          <li><b>USB e Bluetooth:</b> auxiliam no funcionamento dos controladores e dispositivos correspondentes.</li>
        </ul>

        <h3>4. Como identificar o dispositivo correto</h3>
        <p>Antes de instalar um driver, identifique o modelo do equipamento e a versão do sistema operacional. Em computadores montados, podem ser necessárias informações separadas sobre a placa-mãe e cada componente.</p>
        <p>No Windows, o Gerenciador de Dispositivos mostra os dispositivos reconhecidos. Em propriedades avançadas, identificadores de hardware podem ajudar a localizar um componente que aparece como desconhecido.</p>
        <p>O modelo comercial nem sempre é suficiente: revisões diferentes de um mesmo produto podem utilizar componentes distintos. Confira a revisão da placa e a compatibilidade indicada pelo fabricante.</p>

        <h3>5. Fontes seguras para obter drivers</h3>
        <ol>
          <li>Consulte primeiro a página oficial de suporte do fabricante do computador ou notebook.</li>
          <li>Em computadores montados, consulte também os fabricantes da placa-mãe e dos componentes.</li>
          <li>Utilize o Windows Update quando apropriado.</li>
          <li>Confira a compatibilidade com a versão, arquitetura e edição do sistema operacional.</li>
          <li>Leia as instruções de instalação e reinicialização.</li>
        </ol>
        <p>Evite pacotes de origem desconhecida e ferramentas que instalam vários drivers sem explicar sua procedência. Um driver incorreto pode causar instabilidade, perda de funcionalidades ou falhas de inicialização.</p>

        <h3>6. Atualização e reversão</h3>
        <p>Atualizações podem corrigir falhas, melhorar compatibilidade e resolver vulnerabilidades. Entretanto, uma versão mais recente nem sempre resolve todos os problemas de um computador específico.</p>
        <p>Antes de alterar um driver importante, registre a versão instalada e considere um ponto de restauração quando disponível. Em equipamentos críticos, mantenha um instalador compatível já obtido de fonte confiável.</p>
        <p>A opção de reverter o driver no Gerenciador de Dispositivos pode ajudar quando uma atualização recente provoca falhas. Ela depende da disponibilidade de uma versão anterior armazenada no sistema.</p>

        <h3>7. Diagnóstico no Gerenciador de Dispositivos</h3>
        <p>Um triângulo de alerta pode indicar um problema, mas não revela sozinho sua causa. Abra as propriedades do dispositivo e consulte o estado informado pelo Windows e o código de erro.</p>
        <ul>
          <li><b>Dispositivo desconhecido:</b> o sistema não identificou corretamente o componente ou não encontrou um driver adequado.</li>
          <li><b>Dispositivo desativado:</b> pode ter sido desativado pelo usuário, pelo sistema ou por uma configuração do equipamento.</li>
          <li><b>Falha após atualização:</b> pode indicar incompatibilidade, corrupção do pacote ou conflito com outro componente.</li>
          <li><b>Dispositivo ausente:</b> pode envolver conexão física, alimentação, firmware, configuração ou falha do próprio hardware.</li>
        </ul>
        <p>Desinstalar e detectar novamente o dispositivo pode ajudar em alguns casos, mas não substitui a identificação da causa. Em dispositivos de armazenamento e rede, planeje a intervenção para evitar perda de acesso aos dados ou à conectividade.</p>

        <h3>8. Problemas gráficos e de rede</h3>
        <p>Falhas gráficas podem decorrer de drivers, temperatura, alimentação, memória de vídeo, cabos, monitor ou defeito físico. Artefatos visuais e travamentos não comprovam, isoladamente, que o driver seja a causa.</p>
        <p>Falhas de rede também podem ter origens distintas: driver, cabo, sinal Wi-Fi, roteador, endereço IP, DNS ou provedor. Identificar se o adaptador é reconhecido e se recebe configuração de rede ajuda a separar essas possibilidades.</p>

        <h3>9. Cuidados técnicos</h3>
        <ul>
          <li>Não instale drivers incompatíveis apenas porque o nome do componente parece semelhante.</li>
          <li>Não interrompa atualizações de firmware sem consultar as instruções do fabricante.</li>
          <li>Registre alterações para facilitar a reversão.</li>
          <li>Após a instalação, verifique o funcionamento real do dispositivo e observe se surgiram novos erros.</li>
        </ul>
      `
    },
    {
      title: "Sistemas de arquivos e partições",
      summary: "Organização lógica do armazenamento, tabelas de partição, formatação, permissões e integridade dos dados.",
      content: `
        <h3>1. Como os dados são organizados</h3>
        <p>Um dispositivo de armazenamento fornece espaço físico para gravar informações. O sistema operacional utiliza estruturas lógicas para organizar esse espaço em volumes, sistemas de arquivos, diretórios e arquivos.</p>
        <p>Um disco físico pode conter várias partições, e um volume lógico não corresponde necessariamente a uma partição física simples. Recursos como RAID, volumes dinâmicos e espaços de armazenamento podem acrescentar outra camada de abstração.</p>

        <h3>2. Partições e tabelas de partição</h3>
        <p>Uma partição delimita uma região de um dispositivo de armazenamento. Ela pode receber um sistema de arquivos, ser utilizada para inicialização ou cumprir outra função específica.</p>
        <ul>
          <li><b>MBR:</b> esquema tradicional de particionamento com limitações relacionadas à quantidade de partições e ao endereçamento de discos grandes.</li>
          <li><b>GPT:</b> esquema moderno associado ao UEFI, com suporte a discos grandes e maior flexibilidade no particionamento.</li>
        </ul>
        <p>Em computadores modernos, instalações do Windows normalmente utilizam UEFI e GPT, embora existam equipamentos e instalações legadas que utilizem BIOS e MBR.</p>

        <h3>3. Principais sistemas de arquivos</h3>
        <ul>
          <li><b>NTFS:</b> amplamente utilizado no Windows. Oferece permissões de acesso, diário de metadados e suporte a arquivos e volumes grandes.</li>
          <li><b>FAT32:</b> possui ampla compatibilidade com diferentes equipamentos, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte.</li>
          <li><b>exFAT:</b> comum em cartões de memória e unidades removíveis, com suporte a arquivos grandes e boa compatibilidade entre sistemas.</li>
          <li><b>ext4:</b> utilizado em muitas distribuições Linux, com recursos de journaling e gerenciamento de metadados.</li>
          <li><b>APFS:</b> sistema de arquivos moderno da Apple, utilizado em versões atuais de seus sistemas compatíveis.</li>
        </ul>
        <p>A escolha depende do sistema operacional, do dispositivo, dos requisitos de compatibilidade e do uso previsto. Não existe um único sistema de arquivos ideal para todos os cenários.</p>

        <h3>4. Formatação e seus efeitos</h3>
        <p>Formatar um volume prepara estruturas para um sistema de arquivos. A formatação rápida normalmente recria informações essenciais sem verificar integralmente cada setor do dispositivo. Outros tipos de formatação podem executar verificações adicionais.</p>
        <p>Formatar uma unidade pode tornar os dados anteriores inacessíveis pelos meios comuns. Em certas situações, parte dos dados pode continuar recuperável, mas isso não é garantido.</p>
        <p><b>Antes de formatar:</b> confirme a unidade correta, faça backup dos dados importantes e verifique se não se trata de uma partição de recuperação ou inicialização necessária.</p>

        <h3>5. Permissões e propriedade</h3>
        <p>As permissões determinam quais usuários ou grupos podem ler, modificar ou executar arquivos. No NTFS, listas de controle de acesso permitem regras detalhadas. Em sistemas Unix e Linux, permissões tradicionais incluem leitura, escrita e execução para proprietário, grupo e outros usuários, além de mecanismos mais avançados.</p>
        <p>Uma mensagem de acesso negado não significa necessariamente que o arquivo esteja corrompido. Pode haver restrições de permissão, propriedade, criptografia ou bloqueios de segurança.</p>
        <p>Alterar permissões indiscriminadamente, especialmente em pastas do sistema, pode comprometer a segurança ou impedir o funcionamento de aplicativos.</p>

        <h3>6. Espaço livre e espaço ocupado</h3>
        <p>O espaço exibido pelo sistema depende do tamanho dos arquivos, metadados, arquivos ocultos, dados temporários e recursos de recuperação. Diferenças entre o tamanho total e a soma aparente dos arquivos podem ter várias explicações.</p>
        <p>No Windows, o Explorador de Arquivos permite consultar o espaço disponível. Ferramentas de análise de armazenamento ajudam a localizar diretórios grandes, inclusive arquivos de cache e dados de aplicativos.</p>
        <p>Não exclua manualmente arquivos desconhecidos apenas porque ocupam muito espaço. Identifique sua finalidade e prefira os recursos de limpeza do sistema ou do aplicativo responsável.</p>

        <h3>7. Verificação e reparo</h3>
        <p>O Windows oferece ferramentas para examinar sistemas de arquivos. O comando <code>chkdsk</code> pode verificar volumes e, conforme os parâmetros utilizados, tentar corrigir problemas encontrados.</p>
        <p>Exemplo de verificação sem solicitar reparo explícito:</p>
        <p><code>chkdsk C:</code></p>
        <p>O uso de opções de reparo pode modificar estruturas do sistema de arquivos. Em discos com sinais de falha física ou dados insubstituíveis, priorize a cópia ou imagem dos dados antes de executar operações intensivas de reparo.</p>

        <h3>8. SSD, HDD e integridade</h3>
        <p>HDDs utilizam componentes mecânicos e podem apresentar ruídos anormais, setores defeituosos e lentidão associada ao desgaste. SSDs utilizam memória flash e possuem características diferentes de desempenho, desgaste e gerenciamento interno.</p>
        <p>O estado SMART e as ferramentas do fabricante podem fornecer indicadores de saúde, mas nenhum indicador isolado garante que um dispositivo esteja livre de falhas.</p>
        <p>Em caso de desconexões frequentes, erros de leitura, arquivos corrompidos ou ruídos mecânicos, evite continuar gravando dados desnecessariamente. O backup é prioritário.</p>

        <h3>9. Recuperação de dados</h3>
        <p>Quando arquivos são apagados, a possibilidade de recuperação depende do sistema de arquivos, das operações realizadas posteriormente e das características do dispositivo.</p>
        <p>Em SSDs, o recurso TRIM pode tornar a recuperação de dados excluídos mais difícil. Em qualquer tipo de unidade, gravar novos dados no mesmo dispositivo pode sobrescrever informações recuperáveis.</p>
        <ul>
          <li>Interrompa gravações desnecessárias na unidade afetada.</li>
          <li>Salve arquivos recuperados em outro dispositivo.</li>
          <li>Quando os dados forem críticos, considere criar uma imagem da unidade antes de tentar reparos.</li>
          <li>Não confunda corrigir o sistema de arquivos com recuperar o conteúdo original dos arquivos.</li>
        </ul>
      `
    },
    {
      title: "Instalação e recuperação do Windows",
      summary: "Requisitos, mídia de instalação, particionamento, inicialização, reparo e recuperação do sistema.",
      content: `
        <h3>1. Preparação para instalação</h3>
        <p>Uma instalação do Windows deve começar com a identificação do computador, dos requisitos do sistema e do objetivo da intervenção. Reinstalar pode resolver determinados problemas de software, mas não corrige defeitos físicos de memória, armazenamento, placa-mãe ou alimentação.</p>
        <p>Antes de iniciar, verifique:</p>
        <ul>
          <li>Compatibilidade do hardware e requisitos da versão escolhida.</li>
          <li>Backup de documentos, fotos, projetos, configurações e demais dados importantes.</li>
          <li>Disponibilidade de credenciais e meios legítimos de ativação.</li>
          <li>Drivers necessários, principalmente de rede e armazenamento, quando aplicável.</li>
          <li>Configuração de inicialização, como UEFI e modo de armazenamento.</li>
          <li>Chaves de recuperação de criptografia, caso o dispositivo utilize BitLocker ou recurso semelhante.</li>
        </ul>

        <h3>2. Obtenção da mídia</h3>
        <p>Utilize as ferramentas e imagens de instalação disponibilizadas oficialmente pela Microsoft. A mídia pode ser criada em um pendrive compatível, respeitando os requisitos da ferramenta.</p>
        <p>A criação de uma mídia inicializável normalmente apaga o conteúdo do pendrive selecionado. Confirme a unidade antes de iniciar e mantenha cópia dos arquivos que estejam nela.</p>
        <p>Imagens modificadas de origem desconhecida podem incluir alterações não documentadas, programas indesejados ou componentes maliciosos.</p>

        <h3>3. Inicialização pelo pendrive</h3>
        <p>O menu de inicialização do computador permite selecionar o dispositivo de instalação. A tecla utilizada varia conforme o fabricante e o modelo.</p>
        <p>UEFI e BIOS são interfaces de firmware que participam da inicialização do computador. Em equipamentos modernos, o UEFI é predominante e pode trabalhar com Secure Boot para verificar componentes de inicialização autorizados.</p>
        <p>Se o pendrive não aparecer, confira sua criação, a porta USB, o menu de inicialização e as configurações de firmware. Não altere configurações de segurança ou modo de armazenamento sem entender os efeitos sobre a instalação existente.</p>

        <h3>4. Particionamento e instalação</h3>
        <p>Durante a instalação, o assistente apresenta os discos e volumes disponíveis. É fundamental identificar corretamente o dispositivo de destino, especialmente quando há mais de um SSD ou HDD instalado.</p>
        <p>Excluir, formatar ou recriar partições pode apagar dados e estruturas de inicialização. Em computadores com múltiplos discos, desconectar unidades não necessárias durante uma instalação pode reduzir o risco de selecionar o disco errado, quando isso for viável e seguro.</p>
        <p>Após a instalação, configure a região, a conta de usuário, as opções de privacidade e as configurações de segurança conforme as necessidades do proprietário.</p>

        <h3>5. Atualizações e drivers após a instalação</h3>
        <ol>
          <li>Conecte-se a uma rede confiável.</li>
          <li>Instale atualizações apropriadas do sistema operacional.</li>
          <li>Verifique os dispositivos no Gerenciador de Dispositivos.</li>
          <li>Instale drivers ausentes ou inadequados a partir de fontes confiáveis.</li>
          <li>Confirme o funcionamento de áudio, vídeo, rede, USB e armazenamento.</li>
          <li>Verifique ativação, proteção de segurança e espaço disponível.</li>
          <li>Reinicie quando necessário e confira se os problemas iniciais foram resolvidos.</li>
        </ol>
        <p>Não é necessário instalar indiscriminadamente todos os utilitários oferecidos pelo fabricante. Prefira componentes relevantes para o equipamento e para o uso previsto.</p>

        <h3>6. Ambiente de Recuperação do Windows</h3>
        <p>O Ambiente de Recuperação do Windows (Windows RE) oferece opções para lidar com falhas de inicialização e outros problemas. Entre as ferramentas disponíveis, conforme a situação, estão Reparo de Inicialização, Restauração do Sistema, configurações de inicialização e recuperação por imagem.</p>
        <p>Algumas operações podem solicitar credenciais ou uma chave de recuperação. Se a unidade estiver criptografada, essa chave pode ser necessária para acessar os dados.</p>

        <h3>7. Modo de Segurança</h3>
        <p>O Modo de Segurança inicia o Windows com um conjunto limitado de drivers e serviços. Ele pode ajudar a investigar falhas relacionadas a aplicativos, drivers ou componentes carregados durante a inicialização normal.</p>
        <p>Se o problema não ocorrer nesse ambiente, isso fornece uma pista, mas não identifica automaticamente o responsável. Drivers, serviços e aplicativos precisam ser avaliados de forma controlada.</p>

        <h3>8. Verificação de arquivos do sistema</h3>
        <p>O Verificador de Arquivos do Sistema (SFC) verifica a integridade de arquivos protegidos do Windows e pode reparar arquivos quando há componentes corretos disponíveis.</p>
        <p>Comando:</p>
        <p><code>sfc /scannow</code></p>
        <p>O DISM oferece ferramentas de manutenção da imagem do Windows. Em versões compatíveis, uma sequência frequentemente utilizada para reparar a imagem e depois verificar os arquivos do sistema é:</p>
        <p><code>DISM /Online /Cleanup-Image /RestoreHealth</code></p>
        <p><code>sfc /scannow</code></p>
        <p>Esses comandos exigem um terminal com privilégios administrativos. O resultado deve ser lido antes de decidir a próxima ação. Eles não recuperam automaticamente arquivos pessoais apagados nem resolvem defeitos físicos do computador.</p>

        <h3>9. Restauração, redefinição e reinstalação</h3>
        <ul>
          <li><b>Restauração do Sistema:</b> pode reverter determinadas configurações, drivers e componentes do sistema para um estado anterior, quando há um ponto disponível.</li>
          <li><b>Redefinir este PC:</b> reinstala o Windows utilizando as opções disponíveis, com possibilidade de preservar ou remover arquivos pessoais conforme a escolha. Mesmo ao escolher preservar arquivos, faça backup antes.</li>
          <li><b>Reinstalação limpa:</b> instala o sistema novamente e pode envolver a remoção de partições ou dados do disco de destino.</li>
        </ul>
        <p>Esses procedimentos têm efeitos diferentes. Escolha a alternativa menos destrutiva que seja adequada ao problema e confirme os backups antes de operações irreversíveis.</p>

        <h3>10. Falhas de inicialização</h3>
        <p>Um computador pode falhar antes do logotipo do sistema, durante o carregamento do Windows ou depois de apresentar a tela de login. O estágio em que a falha ocorre ajuda a orientar a investigação.</p>
        <ul>
          <li><b>Sem sinal de energia:</b> investigar tomada, cabo, fonte, conexões e componentes básicos.</li>
          <li><b>Não encontra dispositivo de inicialização:</b> verificar reconhecimento do disco, prioridade de boot e estrutura de inicialização.</li>
          <li><b>Reinicia durante o carregamento:</b> considerar falha de sistema, driver, armazenamento, memória ou alimentação.</li>
          <li><b>Tela azul:</b> registrar o código de parada e investigar alterações recentes, drivers, memória e armazenamento.</li>
        </ul>
        <p>O objetivo do diagnóstico é encontrar a causa provável antes de reinstalar. Uma reinstalação prematura pode apagar dados e esconder evidências úteis para descobrir o defeito.</p>
      `
    },
    {
      title: "Virtualização",
      summary: "Máquinas virtuais, hipervisores, recursos de hardware, redes virtuais e ambientes isolados.",
      content: `
        <h3>1. Conceito de virtualização</h3>
        <p>Virtualização é uma técnica que permite representar recursos computacionais por meio de uma camada de software. Ela possibilita executar sistemas operacionais e ambientes isolados utilizando o mesmo computador físico.</p>
        <p>Uma máquina virtual (VM) possui recursos virtuais, como CPU, memória, armazenamento e adaptadores de rede. O sistema operacional instalado nela é chamado de sistema convidado; o sistema físico é o hospedeiro.</p>

        <h3>2. Hipervisores</h3>
        <p>O hipervisor administra as máquinas virtuais e distribui os recursos físicos disponíveis.</p>
        <ul>
          <li><b>Tipo 1:</b> executa diretamente sobre a plataforma física, como ocorre em várias soluções de virtualização de servidores.</li>
          <li><b>Tipo 2:</b> funciona como um aplicativo sobre um sistema operacional hospedeiro, como em configurações comuns de laboratório doméstico.</li>
        </ul>
        <p>A classificação descreve a arquitetura geral; detalhes de implementação variam conforme a plataforma.</p>

        <h3>3. Ferramentas conhecidas</h3>
        <ul>
          <li><b>Oracle VirtualBox:</b> ferramenta de virtualização utilizada em computadores pessoais e laboratórios.</li>
          <li><b>Hyper-V:</b> plataforma de virtualização da Microsoft, disponível em edições e configurações compatíveis do Windows.</li>
          <li><b>VMware:</b> família de produtos e tecnologias de virtualização para diferentes cenários.</li>
          <li><b>KVM:</b> tecnologia de virtualização integrada ao kernel Linux e utilizada com ferramentas de gerenciamento compatíveis.</li>
        </ul>
        <p>Os recursos, licenças, sistemas convidados suportados e requisitos variam conforme o produto e sua versão.</p>

        <h3>4. Virtualização por hardware</h3>
        <p>Processadores modernos podem oferecer extensões que auxiliam na execução de máquinas virtuais. Na Intel, a tecnologia é conhecida como Intel VT-x; na AMD, como AMD-V.</p>
        <p>O suporte precisa existir no processador e estar habilitado conforme a configuração do firmware. A disponibilidade de recursos adicionais, como virtualização de dispositivos de entrada e saída, depende do equipamento e do hipervisor.</p>
        <p>A virtualização pode coexistir com outros recursos do sistema, mas algumas configurações e produtos podem disputar o uso de determinadas funcionalidades. Antes de alterar configurações, identifique a necessidade do aplicativo.</p>

        <h3>5. CPU, RAM e armazenamento</h3>
        <p>Uma máquina virtual consome parte dos recursos do computador físico. A quantidade de memória atribuída à VM precisa ser suficiente para o sistema convidado, sem deixar o hospedeiro sem recursos adequados.</p>
        <p>Atribuir mais núcleos virtuais não garante maior desempenho. A CPU física, a quantidade de tarefas simultâneas, a memória disponível e o armazenamento influenciam o resultado.</p>
        <p>Discos virtuais podem ocupar um tamanho fixo ou crescer conforme os dados são gravados, dependendo do formato e da configuração. O espaço máximo configurado não corresponde necessariamente ao espaço já ocupado no disco físico.</p>

        <h3>6. Tipos de rede virtual</h3>
        <ul>
          <li><b>NAT:</b> permite que a VM utilize uma conexão compartilhada do hospedeiro, com limitações para conexões recebidas conforme a configuração.</li>
          <li><b>Bridge:</b> conecta a VM à rede como um dispositivo separado, quando a infraestrutura e a configuração permitem.</li>
          <li><b>Rede interna ou privada:</b> permite comunicação entre máquinas virtuais selecionadas sem necessariamente expô-las diretamente à rede física.</li>
          <li><b>Host-only:</b> estabelece uma rede entre o hospedeiro e as máquinas virtuais, conforme os recursos do produto.</li>
        </ul>
        <p>Esses modos são úteis para estudar endereçamento IP, serviços de rede e comunicação entre sistemas. A exposição da VM depende do modo de rede, das regras de firewall e das configurações do ambiente.</p>

        <h3>7. Snapshots e backups</h3>
        <p>Um snapshot registra o estado de uma máquina virtual em determinado momento, podendo incluir o estado do disco e, em alguns produtos, o estado da memória.</p>
        <p>Snapshots facilitam testes e reversões, mas podem consumir armazenamento e depender de uma cadeia de arquivos. Não substituem backups independentes, principalmente se os arquivos da VM estiverem no mesmo disco físico.</p>
        <p>Antes de alterar uma VM importante, verifique o espaço disponível, a integridade do disco virtual e a possibilidade de recuperar os dados por meio de uma cópia separada.</p>

        <h3>8. Imagens ISO e sistemas convidados</h3>
        <p>Uma imagem ISO pode conter os arquivos necessários para instalar um sistema operacional. O hipervisor pode utilizar essa imagem como mídia virtual de inicialização.</p>
        <p>Obtenha imagens de fontes oficiais ou confiáveis e confira os requisitos do sistema convidado. Algumas versões de sistemas operacionais possuem exigências específicas de segurança, memória, armazenamento ou firmware virtual.</p>

        <h3>9. Virtualização e containers</h3>
        <p>Máquinas virtuais normalmente executam um sistema operacional convidado com seu próprio kernel. Containers isolam aplicativos e dependências utilizando mecanismos do sistema operacional subjacente, compartilhando o kernel compatível.</p>
        <p>Containers geralmente são mais leves para distribuir aplicações, enquanto máquinas virtuais podem oferecer maior separação entre sistemas operacionais diferentes. A escolha depende da necessidade de isolamento, compatibilidade, desempenho e gerenciamento.</p>

        <h3>10. Segurança e diagnóstico</h3>
        <ul>
          <li>Mantenha o hipervisor e os sistemas convidados atualizados.</li>
          <li>Evite compartilhar pastas, dispositivos USB e credenciais sem necessidade.</li>
          <li>Não execute amostras suspeitas em uma VM acreditando que o isolamento seja uma garantia absoluta.</li>
          <li>Investigue lentidão considerando CPU, RAM, espaço em disco e recursos do hospedeiro.</li>
          <li>Em falhas de inicialização, verifique a imagem ISO, a ordem de boot, o firmware virtual e os recursos atribuídos.</li>
          <li>Para problemas de conectividade, examine o modo de rede, o endereço IP e as regras de firewall.</li>
        </ul>
        <p>Uma VM bem configurada é útil para testes, aprendizado e desenvolvimento, mas sua segurança depende de atualizações, isolamento e administração adequada.</p>
      `
    },
    {
      title: "Aplicativos e dependências",
      summary: "Instalação, atualização, compatibilidade, bibliotecas, processos e resolução de falhas em programas.",
      content: `
        <h3>1. O que é um aplicativo?</h3>
        <p>Um aplicativo é um programa destinado a realizar tarefas específicas, como edição de documentos, navegação na internet, reprodução de mídia, comunicação ou desenvolvimento de software.</p>
        <p>Um aplicativo depende de vários componentes do ambiente: sistema operacional, permissões, bibliotecas, serviços, espaço de armazenamento e, em alguns casos, conexão com a internet ou hardware específico.</p>

        <h3>2. Formas de distribuição</h3>
        <ul>
          <li><b>Instaladores tradicionais:</b> podem copiar arquivos, registrar componentes, criar atalhos e configurar serviços.</li>
          <li><b>Lojas de aplicativos:</b> oferecem mecanismos de distribuição e atualização integrados ao sistema.</li>
          <li><b>Aplicativos portáteis:</b> podem funcionar sem instalação convencional, embora ainda dependam de permissões e componentes do sistema.</li>
          <li><b>Gerenciadores de pacotes:</b> instalam e atualizam programas a partir de repositórios, especialmente comuns em distribuições Linux.</li>
          <li><b>Aplicativos web:</b> funcionam em navegadores e podem depender de serviços remotos.</li>
        </ul>
        <p>A forma de distribuição influencia atualização, permissões, localização dos dados e procedimentos de remoção.</p>

        <h3>3. Dependências e bibliotecas</h3>
        <p>Uma dependência é um componente necessário para que um programa funcione. Pode ser uma biblioteca, um runtime, um serviço, um driver ou outro programa.</p>
        <p>Aplicativos Windows podem depender de componentes como o .NET, Visual C++ Redistributable ou runtimes específicos. Programas Java normalmente dependem de uma versão compatível da JVM. Aplicações Python podem depender de pacotes instalados em um ambiente específico.</p>
        <p>Uma mensagem de DLL ausente ou runtime incompatível pode indicar que uma dependência não está instalada, está danificada ou não corresponde à arquitetura exigida pelo programa. Baixar DLLs avulsas de sites desconhecidos não é uma solução segura.</p>

        <h3>4. Arquitetura e compatibilidade</h3>
        <p>Programas podem ser compilados para arquiteturas diferentes, como x86 e x64. A compatibilidade depende do sistema operacional e das camadas de suporte disponíveis.</p>
        <p>Um aplicativo de 32 bits pode funcionar em muitos sistemas Windows de 64 bits, mas o inverso não é geralmente possível sem uma camada específica de compatibilidade. O suporte a aplicações de 32 bits varia conforme a versão e a plataforma.</p>
        <p>Confira os requisitos do programa, a versão do sistema operacional, as dependências e os componentes necessários antes de concluir que existe uma falha no computador.</p>

        <h3>5. Instalação e desinstalação</h3>
        <p>Durante a instalação, um programa pode criar diretórios, atalhos, entradas de configuração, serviços e tarefas agendadas. A remoção pode não excluir arquivos pessoais ou configurações mantidas em pastas de usuário.</p>
        <p>Prefira a opção de desinstalação fornecida pelo sistema ou pelo próprio aplicativo. Após remover um programa, verifique se dados que precisam ser preservados foram copiados e se há componentes compartilhados com outros programas.</p>
        <p>Apagar manualmente a pasta de instalação não equivale a uma desinstalação completa e pode deixar configurações ou componentes registrados no sistema.</p>

        <h3>6. Atualizações</h3>
        <p>Atualizações podem corrigir vulnerabilidades, erros e incompatibilidades, além de acrescentar recursos. Antes de atualizar aplicativos críticos, confira os requisitos, as notas de versão e a possibilidade de recuperar dados.</p>
        <p>Em ambientes profissionais, a atualização controlada permite testar compatibilidade antes de distribuir uma versão para todos os computadores. A manutenção de versões antigas deve considerar os riscos de segurança associados à falta de suporte.</p>

        <h3>7. Aplicativos que não abrem</h3>
        <p>Quando um aplicativo não inicia, a investigação deve começar pelo sintoma exato e pelas mudanças recentes.</p>
        <ol>
          <li>Verifique se o processo aparece no Gerenciador de Tarefas.</li>
          <li>Consulte mensagens de erro e registros do aplicativo ou do Windows.</li>
          <li>Confira requisitos, atualizações, permissões e dependências.</li>
          <li>Verifique se o problema ocorre apenas em uma conta de usuário.</li>
          <li>Considere reparo ou reinstalação utilizando fontes oficiais.</li>
          <li>Se houver dados importantes do aplicativo, faça backup antes de remover configurações ou reinstalar.</li>
        </ol>
        <p>Executar um programa como administrador pode ajudar em alguns casos específicos, mas não deve ser a primeira solução automática. Isso amplia os privilégios concedidos ao programa.</p>

        <h3>8. Consumo excessivo de recursos</h3>
        <p>Um programa pode consumir muita CPU durante cálculos, conversões, indexação ou outras tarefas legítimas. Consumo elevado e persistente também pode indicar um loop, vazamento de memória ou comportamento indesejado.</p>
        <p>Observe o comportamento ao longo do tempo, a memória utilizada, as operações de disco e a atividade de rede. Compare os sintomas com a função esperada do programa antes de encerrar processos ou excluir arquivos.</p>

        <h3>9. Aplicativos em segundo plano e inicialização</h3>
        <p>Alguns programas iniciam junto com o sistema para disponibilizar sincronização, notificações, atualizações ou outros recursos. Muitos aplicativos desnecessários na inicialização podem aumentar o tempo de boot e o consumo de memória.</p>
        <p>No Windows, a guia de aplicativos de inicialização do Gerenciador de Tarefas permite avaliar e desativar determinados itens. Antes de desabilitar algo, identifique sua finalidade e evite remover componentes necessários à segurança, aos drivers ou ao funcionamento do equipamento.</p>

        <h3>10. Segurança de software</h3>
        <ul>
          <li>Obtenha programas de sites oficiais ou repositórios confiáveis.</li>
          <li>Confira editor, assinatura digital e alertas de segurança quando disponíveis.</li>
          <li>Evite executáveis desconhecidos e instaladores que agrupam ofertas não solicitadas.</li>
          <li>Mantenha aplicativos e dependências atualizados.</li>
          <li>Conceda somente as permissões necessárias.</li>
          <li>Em ambiente corporativo, respeite licenças e políticas de instalação.</li>
        </ul>
        <p>Um programa instalado pode acessar os recursos permitidos pela conta e pelo sistema. A procedência, a atualização e as permissões são partes essenciais da segurança do software.</p>
      `
    },
    {
      title: "Inicialização, serviços e logs",
      summary: "Sequência de inicialização, serviços em segundo plano, registros de eventos e investigação de falhas.",
      content: `
        <h3>1. Sequência de inicialização</h3>
        <p>Ao ligar o computador, o firmware realiza verificações e procura um dispositivo inicializável. Em sistemas UEFI, a inicialização pode utilizar entradas registradas no firmware para localizar o carregador do sistema.</p>
        <p>O carregador inicia os componentes necessários para que o kernel e o restante do sistema operacional sejam carregados. Depois disso, o sistema inicia serviços, prepara a sessão e disponibiliza a interface ao usuário.</p>
        <p>O processo varia entre sistemas operacionais, mas compreender as etapas ajuda a distinguir uma falha de hardware, de firmware, do carregador ou do próprio sistema.</p>

        <h3>2. Diferenças entre inicialização e login</h3>
        <p>Uma falha antes de o sistema operacional começar a carregar pode apontar para o dispositivo de boot, o firmware ou problemas físicos. Uma falha durante o carregamento pode envolver arquivos do sistema, drivers ou armazenamento.</p>
        <p>Quando o sistema chega à tela de login, mas falha após a autenticação, as causas podem estar relacionadas ao perfil do usuário, aplicativos de inicialização, serviços ou componentes da interface.</p>
        <p>O momento exato do erro é uma informação importante para registrar antes de realizar alterações.</p>

        <h3>3. Serviços do Windows</h3>
        <p>Serviços executam funções de segundo plano, como rede, impressão, atualização e gerenciamento de dispositivos. Alguns são iniciados automaticamente; outros iniciam quando necessários ou sob condições específicas.</p>
        <p>O console de serviços permite consultar o estado, o tipo de inicialização e as dependências de cada serviço. Desativar um serviço sem conhecer sua função pode causar falhas em outros componentes.</p>
        <p>Ao investigar um serviço defeituoso, registre seu nome, o erro apresentado, as dependências e as mudanças recentes. Faça alterações controladas e reversíveis.</p>

        <h3>4. Logs e registros de eventos</h3>
        <p>Logs são registros produzidos por aplicativos, serviços e pelo sistema operacional. Podem incluir horários, níveis de severidade, identificadores de evento e informações sobre falhas.</p>
        <p>No Windows, o Visualizador de Eventos organiza registros em categorias como Aplicativo, Sistema e Segurança. Nem todo aviso representa um problema real, e um erro registrado nem sempre é a causa principal da falha percebida.</p>
        <p>Para interpretar um evento, correlacione o horário, a origem, o identificador e a descrição com o sintoma observado. Eventos anteriores ao problema podem ser mais relevantes do que mensagens geradas como consequência do travamento.</p>

        <h3>5. Inicialização limpa</h3>
        <p>Uma inicialização limpa do Windows utiliza uma configuração controlada de serviços e aplicativos de inicialização para investigar conflitos. Ela pode ajudar a determinar se um componente adicional está relacionado ao problema.</p>
        <p>O procedimento deve ser realizado com cuidado para não desativar permanentemente componentes importantes. Registre as configurações originais e reative os itens gradualmente para identificar o responsável.</p>

        <h3>6. Gerenciamento de aplicativos de inicialização</h3>
        <p>Aplicativos configurados para iniciar automaticamente podem usar CPU, memória, disco e rede durante o boot ou ao longo da sessão.</p>
        <p>O Gerenciador de Tarefas permite consultar o impacto de alguns desses aplicativos. Desabilitar um item de inicialização não necessariamente desinstala o programa nem impede sua execução manual.</p>
        <p>Ferramentas avançadas podem revelar tarefas agendadas e outros mecanismos de inicialização. Utilize-as com cautela, especialmente em computadores corporativos.</p>

        <h3>7. Investigação de falhas recorrentes</h3>
        <ol>
          <li>Registre o sintoma e o horário aproximado.</li>
          <li>Identifique se a falha ocorre antes do login, durante o login ou após abrir um aplicativo.</li>
          <li>Consulte os registros relevantes.</li>
          <li>Compare a falha com atualizações, instalações ou alterações recentes.</li>
          <li>Teste uma hipótese por vez.</li>
          <li>Documente o resultado e reverta alterações que não ajudem.</li>
        </ol>
        <p>Uma sequência de diagnóstico bem documentada reduz tentativas aleatórias e facilita explicar a intervenção para o usuário ou para outro técnico.</p>

        <h3>8. Documentação técnica</h3>
        <p>O registro de manutenção deve conter data, equipamento, usuário ou setor conforme as regras de privacidade aplicáveis, sintoma, verificações realizadas, alterações, resultado e pendências.</p>
        <p>Evite registrar senhas, chaves privadas ou outros segredos nos relatórios. Quando necessário, inclua identificadores técnicos e evidências suficientes para reproduzir ou compreender o diagnóstico, sem expor dados pessoais desnecessários.</p>
      `
    }
  ]
},


  
"Suporte e manutenção": {
  icon: "🛠️",
  description: "Ferramentas de técnico, diagnóstico, recuperação de dados, manutenção preventiva e corretiva e atendimento profissional.",
  topics: [
    {
      title: "Diagnóstico de hardware",
      summary: "Métodos, ferramentas e critérios para investigar falhas de processador, memória, armazenamento, placa-mãe e refrigeração.",
      content: `
        <h3>1. Fundamentos do diagnóstico</h3>
        <p>Diagnosticar hardware é identificar a causa provável de um problema por meio de observação, medições e testes controlados. Um sintoma isolado raramente comprova qual componente está defeituoso.</p>
        <p>Um computador lento, por exemplo, pode apresentar falta de memória RAM, armazenamento degradado, temperatura excessiva, processos em segundo plano ou problemas de software. A investigação deve separar essas possibilidades antes da substituição de peças.</p>
        <p>O procedimento técnico começa com a coleta dos sintomas, a identificação do equipamento, o histórico de alterações e a definição de testes que possam confirmar ou descartar hipóteses.</p>

        <h3>2. Ferramentas de identificação e monitoramento</h3>
        <ul>
          <li><b>CPU-Z:</b> apresenta informações sobre processador, placa-mãe, memória e outros componentes compatíveis. É útil para identificar modelos e configurações.</li>
          <li><b>HWiNFO:</b> reúne informações detalhadas de hardware e leituras de sensores disponíveis, como temperaturas, frequências, tensões e velocidade de ventoinhas.</li>
          <li><b>CrystalDiskInfo:</b> apresenta informações SMART e indicadores de saúde de unidades de armazenamento compatíveis.</li>
          <li><b>CrystalDiskMark:</b> mede o desempenho de leitura e gravação em condições de teste. Os resultados variam conforme a unidade, a conexão e a configuração.</li>
          <li><b>MemTest86:</b> testa a memória RAM a partir de uma mídia inicializável.</li>
          <li><b>OCCT:</b> oferece testes de estabilidade para diferentes componentes e monitoramento de sensores.</li>
          <li><b>GPU-Z:</b> apresenta informações sobre a placa de vídeo, memória gráfica, frequências e recursos suportados.</li>
          <li><b>Gerenciador de Tarefas:</b> permite observar a utilização de CPU, RAM, disco e GPU durante o uso normal.</li>
        </ul>
        <p>Obtenha as ferramentas de fontes oficiais e confirme sua compatibilidade com o sistema. Leituras de sensores podem estar ausentes ou incorretas em determinados equipamentos.</p>

        <h3>3. Diagnóstico de processador</h3>
        <p>O processador executa instruções e coordena operações de processamento. Problemas relacionados à CPU podem aparecer como travamentos, reinicializações, desempenho reduzido ou desligamentos durante cargas elevadas.</p>
        <p>O diagnóstico deve considerar temperatura, frequência de operação, consumo, refrigeração, alimentação elétrica e comportamento sob carga.</p>
        <ul>
          <li>Verifique se o cooler está instalado corretamente e se a ventoinha funciona.</li>
          <li>Observe as temperaturas em repouso e durante uma carga apropriada.</li>
          <li>Confira se o processador reduz a frequência por temperatura ou limites de potência.</li>
          <li>Investigue erros de estabilidade e eventos registrados pelo sistema.</li>
        </ul>
        <p>Uma temperatura elevada precisa ser interpretada de acordo com o modelo e os limites do fabricante. Não existe um único valor universal para todos os processadores.</p>

        <h3>4. Diagnóstico de memória RAM</h3>
        <p>Defeitos ou instabilidade de memória podem causar telas azuis, reinicializações, erros em aplicativos, corrupção de dados e falhas durante a inicialização.</p>
        <p>O primeiro passo é verificar se a capacidade instalada corresponde à reconhecida pelo sistema e se os módulos são compatíveis com a placa-mãe.</p>
        <ol>
          <li>Desligue o computador e desconecte a alimentação antes de manusear os módulos.</li>
          <li>Verifique encaixe, contatos e possíveis sinais de dano.</li>
          <li>Consulte o manual da placa-mãe para identificar os slots recomendados.</li>
          <li>Execute um teste de memória inicializável quando houver suspeita de instabilidade.</li>
          <li>Se houver erros, teste módulos e slots individualmente, respeitando as recomendações do fabricante.</li>
        </ol>
        <p>Um teste sem erros reduz a suspeita de falha de memória, mas não garante que o sistema seja estável em todas as condições. Instabilidade também pode envolver controlador de memória, placa-mãe, configurações de frequência ou alimentação.</p>

        <h3>5. Diagnóstico de HDD e SSD</h3>
        <p>O armazenamento pode causar lentidão, congelamentos, falhas de leitura, arquivos corrompidos e problemas de inicialização.</p>
        <p>Em HDDs, ruídos mecânicos incomuns, setores defeituosos e desconexões recorrentes podem indicar problemas sérios. Em SSDs, falhas de leitura, erros de gravação, desgaste e desaparecimento da unidade exigem investigação.</p>
        <ul>
          <li>Verifique o reconhecimento da unidade no firmware e no sistema operacional.</li>
          <li>Consulte indicadores SMART e ferramentas oficiais do fabricante.</li>
          <li>Observe erros de entrada e saída nos registros do sistema.</li>
          <li>Verifique cabos SATA, conectores de alimentação e encaixe M.2, conforme o dispositivo.</li>
          <li>Compare o desempenho com o comportamento esperado para a unidade e a interface.</li>
        </ul>
        <p>Indicadores SMART não garantem que o disco esteja saudável, e um resultado aparentemente normal não exclui defeitos. Se os dados forem importantes e houver sinais de falha física, priorize a recuperação segura em vez de executar repetidamente testes de carga.</p>

        <h3>6. Temperatura e refrigeração</h3>
        <p>O sistema de refrigeração transfere calor do processador, da GPU e de outros componentes para o ambiente. Poeira, ventoinhas defeituosas, fluxo de ar inadequado e instalação incorreta do dissipador podem reduzir a capacidade de resfriamento.</p>
        <p>Quando um componente atinge limites térmicos, pode reduzir automaticamente o desempenho. Esse comportamento é conhecido como limitação térmica ou thermal throttling.</p>
        <p>Confira a rotação das ventoinhas, a entrada e saída de ar do gabinete, a fixação dos dissipadores e a presença de obstruções. A substituição da pasta térmica deve ser feita quando necessária e de acordo com o procedimento adequado ao componente.</p>

        <h3>7. Placa-mãe, fonte e alimentação</h3>
        <p>Falhas de alimentação podem provocar desligamentos, reinicializações, ausência de inicialização ou instabilidade sob carga. Uma fonte com potência nominal suficiente também pode apresentar defeitos, conectores inadequados ou problemas de qualidade.</p>
        <p>Inspecione visualmente cabos, conectores e componentes com o equipamento desconectado. Não abra fontes de alimentação: seus componentes internos podem manter tensões perigosas mesmo após serem desligadas.</p>
        <p>Na placa-mãe, verifique sinais visíveis de dano, encaixe de conectores, códigos de diagnóstico e compatibilidade dos componentes. Capacitores visualmente normais não garantem o funcionamento correto da placa.</p>

        <h3>8. Testes de estabilidade</h3>
        <p>Ferramentas de carga podem ajudar a identificar falhas que só aparecem quando CPU, GPU ou memória são exigidas. Entretanto, esses testes elevam consumo e temperatura e podem agravar problemas existentes.</p>
        <p>Antes de iniciar um teste, confirme a refrigeração, a estabilidade básica do equipamento e a importância dos dados armazenados. Monitore os sensores e interrompa o procedimento diante de temperaturas excessivas, ruídos incomuns, cheiro de queimado ou desligamentos inesperados.</p>
        <p>Um travamento durante um teste não comprova, sozinho, que o componente submetido à carga seja o responsável. Fonte, placa-mãe, memória, refrigeração e software podem participar da falha.</p>

        <h3>9. Diagnóstico por eliminação</h3>
        <p>O diagnóstico por eliminação consiste em alterar uma variável por vez e observar se o comportamento muda.</p>
        <ol>
          <li>Registre a configuração original e o sintoma.</li>
          <li>Verifique conexões, alimentação e montagem.</li>
          <li>Remova periféricos não essenciais quando isso for seguro e pertinente.</li>
          <li>Teste componentes compatíveis conhecidos como funcionais, quando disponíveis.</li>
          <li>Repita o teste que reproduzia a falha.</li>
          <li>Documente os resultados e reverta alterações que não contribuíram para o diagnóstico.</li>
        </ol>
        <p>A substituição aleatória de peças aumenta custos e pode introduzir novos problemas. Um bom diagnóstico deve ser fundamentado em evidências reproduzíveis.</p>
      `
    },
    {
      title: "Pendrive de manutenção",
      summary: "Planejamento, criação, segurança e utilização de mídias inicializáveis para suporte e recuperação.",
      content: `
        <h3>1. Finalidade do pendrive técnico</h3>
        <p>Um pendrive de manutenção é uma mídia removível preparada para iniciar ferramentas de instalação, diagnóstico, recuperação e manutenção. Ele pode ajudar quando o sistema operacional instalado não inicializa ou quando determinadas verificações precisam ser realizadas fora dele.</p>
        <p>Uma mídia técnica pode conter instaladores oficiais do Windows, distribuições Linux, utilitários de diagnóstico e ferramentas de recuperação compatíveis com o equipamento.</p>

        <h3>2. Planejamento da mídia</h3>
        <p>Antes de preparar a unidade, defina quais tarefas ela deverá realizar. Uma mídia destinada à instalação do Windows possui necessidades diferentes de uma mídia usada para análise de hardware ou recuperação de arquivos.</p>
        <ul>
          <li>Escolha um pendrive confiável, com capacidade adequada.</li>
          <li>Reserve espaço para imagens e ferramentas necessárias.</li>
          <li>Mantenha os arquivos de trabalho e os backups em outra unidade quando possível.</li>
          <li>Identifique claramente as mídias de instalação e de armazenamento de dados.</li>
          <li>Teste a inicialização antes de depender da mídia em um atendimento.</li>
        </ul>

        <h3>3. Ferramentas para criar mídia inicializável</h3>
        <ul>
          <li><b>Rufus:</b> ferramenta para criar unidades USB inicializáveis a partir de imagens compatíveis.</li>
          <li><b>Media Creation Tool:</b> ferramenta oficial da Microsoft para obter ou criar mídia de instalação de versões compatíveis do Windows.</li>
          <li><b>Ventoy:</b> ferramenta que permite preparar uma unidade USB para iniciar diferentes imagens ISO compatíveis.</li>
          <li><b>Ferramentas oficiais de distribuições Linux:</b> podem oferecer métodos próprios para gravar suas imagens em USB.</li>
        </ul>
        <p>As opções de inicialização, os sistemas de arquivos e os recursos suportados variam conforme a ferramenta e o equipamento. Utilize documentação oficial e versões confiáveis.</p>

        <h3>4. Imagens ISO e integridade</h3>
        <p>Uma imagem ISO é um arquivo que representa o conteúdo de uma mídia óptica ou uma estrutura de instalação. Imagens inicializáveis podem conter um sistema operacional ou um ambiente de manutenção.</p>
        <p>Quando o fornecedor publica um hash de verificação, comparar esse valor com o arquivo obtido ajuda a detectar alterações ou corrupção durante a transferência.</p>
        <p>Um hash coincidente confirma a correspondência com o arquivo de referência consultado, mas a confiança na origem também depende de obter a imagem e o valor de verificação de um canal legítimo.</p>

        <h3>5. UEFI, BIOS e Secure Boot</h3>
        <p>O firmware do computador determina como os dispositivos inicializáveis são identificados e executados. Sistemas modernos geralmente utilizam UEFI, enquanto computadores antigos podem utilizar BIOS tradicional.</p>
        <p>Secure Boot ajuda a impedir a execução de determinados componentes de inicialização não autorizados. Algumas mídias são compatíveis com esse recurso e outras podem exigir configurações específicas.</p>
        <p>Não desative Secure Boot automaticamente para fazer uma mídia funcionar. Primeiro, verifique se existe uma versão compatível ou uma configuração recomendada pelo fornecedor.</p>

        <h3>6. Categorias de ferramentas</h3>
        <ul>
          <li><b>Instalação:</b> mídias oficiais para instalar ou reparar sistemas operacionais.</li>
          <li><b>Diagnóstico de memória:</b> ferramentas inicializáveis para testar a RAM.</li>
          <li><b>Diagnóstico de armazenamento:</b> utilitários para examinar unidades e, quando apropriado, criar imagens.</li>
          <li><b>Recuperação de arquivos:</b> ferramentas destinadas à recuperação lógica de dados.</li>
          <li><b>Ambientes Linux:</b> sistemas que permitem acessar arquivos e executar utilitários sem iniciar o sistema instalado.</li>
          <li><b>Rede:</b> ferramentas de diagnóstico de conectividade, quando disponíveis no ambiente.</li>
        </ul>
        <p>Uma ferramenta de recuperação não deve ser utilizada indiscriminadamente sobre um disco defeituoso. A escolha do procedimento depende da condição física da unidade e da importância dos dados.</p>

        <h3>7. Cuidados ao gravar imagens</h3>
        <div class="callout warning">
          <b>Atenção:</b> criar uma mídia inicializável normalmente apaga ou altera as partições e os arquivos do dispositivo USB selecionado.
        </div>
        <p>Confirme o nome, a capacidade e a letra da unidade antes de iniciar a gravação. Desconecte outras unidades removíveis desnecessárias quando isso ajudar a evitar confusão.</p>
        <p>Não presuma que o pendrive identificado como unidade USB seja sempre o dispositivo correto: confira todos os dados apresentados pela ferramenta.</p>

        <h3>8. Utilização em equipamentos de terceiros</h3>
        <p>Em atendimento técnico, obtenha autorização antes de iniciar outro sistema operacional, acessar arquivos pessoais ou modificar discos. Um ambiente externo pode permitir acesso a dados que não estariam disponíveis em uma sessão normal.</p>
        <p>Respeite criptografia, políticas de segurança e confidencialidade. Não tente contornar controles de acesso sem autorização legítima.</p>
        <p>Após o atendimento, remova dados temporários de clientes da mídia de trabalho conforme o procedimento de segurança adotado.</p>

        <h3>9. Manutenção da mídia</h3>
        <p>Uma mídia de manutenção precisa ser atualizada e testada periodicamente. Ferramentas antigas podem não reconhecer hardware recente, utilizar componentes vulneráveis ou não oferecer suporte aos sistemas atuais.</p>
        <ul>
          <li>Verifique periodicamente a integridade física do pendrive.</li>
          <li>Mantenha cópias das imagens e ferramentas necessárias.</li>
          <li>Atualize as mídias conforme as versões e os requisitos dos fabricantes.</li>
          <li>Identifique o conteúdo e a data da última revisão.</li>
          <li>Não armazene senhas ou chaves de recuperação em texto aberto.</li>
        </ul>
      `
    },
    {
      title: "Recuperação de dados",
      summary: "Princípios de recuperação, exclusão acidental, partições perdidas, imagens de disco e falhas físicas.",
      content: `
        <h3>1. Como a recuperação funciona</h3>
        <p>Quando um arquivo é apagado, o sistema de arquivos pode marcar o espaço associado como disponível para reutilização. O conteúdo anterior pode permanecer no dispositivo por algum tempo, mas não há garantia de que será recuperável.</p>
        <p>Novas gravações podem sobrescrever partes dos dados antigos. Por isso, continuar usando a unidade afetada reduz as chances de sucesso em muitos cenários.</p>
        <p>Recuperar arquivos não é o mesmo que reparar um sistema de arquivos. Um procedimento pode restaurar o acesso à unidade sem recuperar os arquivos excluídos, ou recuperar arquivos sem reconstruir a estrutura original de pastas.</p>

        <h3>2. Primeiras medidas</h3>
        <ol>
          <li>Identifique qual unidade ou partição contém os dados perdidos.</li>
          <li>Interrompa gravações desnecessárias no dispositivo afetado.</li>
          <li>Verifique se existe uma cópia em backup, nuvem, histórico de arquivos ou lixeira.</li>
          <li>Avalie se a unidade apresenta sinais de falha física.</li>
          <li>Escolha um método de recuperação adequado ao tipo de perda.</li>
        </ol>
        <p>Se os dados forem insubstituíveis, avalie o risco antes de realizar qualquer intervenção. Em algumas situações, encaminhar o dispositivo a um serviço especializado é mais seguro do que insistir em tentativas caseiras.</p>

        <h3>3. Recuperação lógica e física</h3>
        <p><b>Recuperação lógica</b> envolve situações como exclusão acidental, formatação ou perda de estruturas de partição, quando a unidade continua funcionando fisicamente.</p>
        <p><b>Recuperação física</b> envolve defeitos nos componentes, problemas mecânicos, falhas eletrônicas ou danos que impedem o funcionamento normal do dispositivo.</p>
        <p>Ferramentas de software são apropriadas principalmente para cenários lógicos. Elas não conseguem resolver todos os defeitos físicos. Abrir um HDD fora de ambiente apropriado pode agravar os danos.</p>

        <h3>4. Ferramentas conhecidas</h3>
        <ul>
          <li><b>Recuva:</b> pode recuperar alguns arquivos excluídos em situações compatíveis.</li>
          <li><b>PhotoRec:</b> recupera arquivos por meio de análise de conteúdo, podendo perder nomes e estrutura original de diretórios.</li>
          <li><b>TestDisk:</b> oferece recursos para analisar e recuperar determinadas estruturas de partição e problemas relacionados à inicialização.</li>
          <li><b>Windows File Recovery:</b> utilitário da Microsoft para tentar recuperar arquivos em cenários compatíveis.</li>
          <li><b>GNU ddrescue:</b> ferramenta utilizada em ambientes compatíveis para criar cópias de unidades com erros de leitura, com estratégias voltadas à recuperação de dados acessíveis.</li>
        </ul>
        <p>As ferramentas possuem objetivos diferentes. Consulte a documentação e confirme a unidade de origem e o destino antes de iniciar qualquer operação.</p>

        <h3>5. Imagem de disco</h3>
        <p>Uma imagem de disco é uma representação dos dados de uma unidade ou de uma área selecionada. Em recuperação, trabalhar sobre uma imagem pode preservar o dispositivo original e permitir novas tentativas sem repetir todas as operações na fonte.</p>
        <p>Quando uma unidade apresenta falhas de leitura, a criação da imagem deve priorizar os dados acessíveis e utilizar uma ferramenta adequada ao cenário. Uma cópia convencional de arquivos pode falhar diante de erros graves.</p>
        <p>A imagem e os arquivos recuperados devem ser armazenados em outro dispositivo com espaço suficiente. Nunca utilize como destino a mesma unidade de origem se isso puder sobrescrever dados necessários.</p>

        <h3>6. Diferenças entre HDD e SSD</h3>
        <p>Em HDDs, dados podem permanecer fisicamente gravados até que sejam sobrescritos, mas setores defeituosos e danos mecânicos podem impedir sua leitura.</p>
        <p>Em SSDs, o recurso TRIM informa ao dispositivo que determinados blocos não precisam mais preservar os dados antigos. O controlador pode limpar esses blocos, tornando a recuperação posterior muito difícil ou inviável.</p>
        <p>A recuperação depende do modelo, do sistema de arquivos, do controlador, do estado da unidade e das operações realizadas após a perda. Não prometa sucesso apenas porque um programa consegue identificar o dispositivo.</p>

        <h3>7. Partições perdidas e formatação</h3>
        <p>Uma partição pode deixar de aparecer por corrupção de metadados, alteração da tabela de partição, falha do dispositivo ou mudança de configuração.</p>
        <p>Antes de tentar reconstruir a tabela de partição, registre a situação atual e, quando apropriado, crie uma imagem. Gravar uma estrutura incorreta pode dificultar ainda mais a recuperação.</p>
        <p>Uma formatação rápida não garante que todos os dados antigos tenham sido fisicamente sobrescritos. Entretanto, o resultado da recuperação depende de diversos fatores, e não deve ser considerado garantido.</p>

        <h3>8. Criptografia e recuperação</h3>
        <p>Se a unidade utiliza BitLocker ou outra forma de criptografia, os dados podem exigir uma chave ou credencial válida para serem acessados. A recuperação dos setores físicos não equivale a descriptografar os arquivos.</p>
        <p>Preserve as chaves de recuperação e evite alterações que possam tornar a unidade inacessível. A assistência técnica deve respeitar a autorização do proprietário e os controles de acesso.</p>

        <h3>9. Quando interromper as tentativas</h3>
        <ul>
          <li>HDD com ruídos mecânicos incomuns.</li>
          <li>Unidade que desaparece repetidamente do sistema.</li>
          <li>Falhas crescentes de leitura ou desconexões constantes.</li>
          <li>Dados únicos ou de alto valor que não podem ser substituídos.</li>
          <li>Unidade que aquece de forma anormal ou apresenta sinais de dano físico.</li>
        </ul>
        <p>Nesses cenários, novas tentativas podem agravar a condição do dispositivo. A decisão deve considerar a importância dos dados e o risco de perda definitiva.</p>

        <h3>10. Comunicação com o cliente</h3>
        <p>Explique que a recuperação depende do estado do dispositivo e que não existe garantia universal de resultado. Diferencie diagnóstico, tentativa de recuperação e confirmação de integridade dos arquivos.</p>
        <p>Preserve a confidencialidade dos dados, solicite autorização antes de acessar conteúdos pessoais e mantenha os arquivos recuperados em um destino acordado com o proprietário.</p>
      `
    },
    {
      title: "Backup e clonagem",
      summary: "Estratégias de cópia de segurança, imagens de sistema, clonagem de discos e testes de restauração.",
      content: `
        <h3>1. O que é backup?</h3>
        <p>Backup é uma cópia de dados mantida para permitir sua recuperação após exclusão acidental, falha de hardware, corrupção, roubo, desastre ou incidente de segurança.</p>
        <p>Uma cópia só é realmente útil quando pode ser restaurada. A existência de arquivos em outro local não garante que estejam completos, atualizados ou utilizáveis.</p>

        <h3>2. Tipos de backup</h3>
        <ul>
          <li><b>Backup de arquivos:</b> copia documentos, imagens, projetos e outros dados selecionados.</li>
          <li><b>Imagem de sistema:</b> registra volumes ou estruturas necessárias para uma recuperação mais abrangente do sistema.</li>
          <li><b>Backup completo:</b> copia o conjunto de dados definido para aquela operação.</li>
          <li><b>Backup incremental:</b> copia alterações desde o último backup realizado conforme a cadeia utilizada pela ferramenta.</li>
          <li><b>Backup diferencial:</b> copia alterações desde o último backup completo de referência.</li>
        </ul>
        <p>Backups incrementais podem economizar espaço, mas a restauração pode depender de uma cadeia de cópias. O backup diferencial tende a exigir a cópia completa de referência e o diferencial correspondente.</p>

        <h3>3. Estratégia 3-2-1</h3>
        <p>A regra 3-2-1 recomenda manter três cópias dos dados, incluindo a original, em dois tipos de mídia e com uma cópia fora do local principal.</p>
        <p>O princípio reduz o risco de que uma única falha física, roubo ou desastre elimine todas as cópias.</p>
        <p>Para melhorar a proteção contra ransomware, considere também uma cópia offline ou imutável, protegida contra alterações indevidas. Uma pasta sincronizada não é necessariamente um backup independente: exclusões e alterações maliciosas podem ser propagadas.</p>

        <h3>4. O que deve ser incluído</h3>
        <ul>
          <li>Documentos, fotos, vídeos e arquivos de trabalho.</li>
          <li>Projetos de programação e seus arquivos de configuração importantes.</li>
          <li>Dados locais de aplicativos que não sejam sincronizados automaticamente.</li>
          <li>Configurações necessárias para restaurar o ambiente de trabalho.</li>
          <li>Informações de recuperação e licenciamento, armazenadas com segurança.</li>
        </ul>
        <p>Cache, arquivos temporários e instaladores podem não precisar de backup se puderem ser obtidos novamente. A decisão depende do valor do conteúdo e do tempo necessário para reconstruí-lo.</p>

        <h3>5. Clonagem de disco</h3>
        <p>Clonagem é a cópia do conteúdo de uma unidade para outra, normalmente com o objetivo de migrar um sistema ou substituir um dispositivo. Dependendo da ferramenta, a operação pode copiar partições, tabelas de partição, carregadores de inicialização e dados.</p>
        <p>Uma clonagem de disco para disco pode sobrescrever o destino. Confirme cuidadosamente qual unidade é a origem e qual é o destino.</p>
        <p>O destino precisa ter capacidade adequada ao conteúdo e às estruturas copiadas. Em migrações de HDD para SSD, pode ser necessário ajustar partições para aproveitar a capacidade disponível.</p>

        <h3>6. Clonagem não é o mesmo que backup</h3>
        <p>Um clone normalmente representa o estado de uma unidade em determinado momento. Se os arquivos forem apagados ou corrompidos antes da clonagem, o problema pode ser copiado para o destino.</p>
        <p>Se o clone permanecer conectado e acessível, também pode ser afetado por malware, exclusões acidentais ou problemas elétricos. Por isso, clonagem e backup cumprem funções diferentes e podem ser utilizados em conjunto.</p>

        <h3>7. Ferramentas e cuidados</h3>
        <p>Ferramentas de imagem e clonagem, como Clonezilla e utilitários dos fabricantes de SSDs, podem ser úteis em cenários compatíveis. A disponibilidade de recursos e os requisitos variam conforme a versão.</p>
        <p>Antes de executar a operação, confira a documentação, a compatibilidade do sistema, a capacidade do destino e o tipo de clonagem. Em equipamentos criptografados, verifique também as exigências relacionadas ao BitLocker e às chaves de recuperação.</p>

        <h3>8. Testes de restauração</h3>
        <p>Testar a restauração é essencial para verificar se os dados podem ser recuperados e se a documentação do procedimento está correta.</p>
        <ul>
          <li>Abra arquivos restaurados e verifique se estão íntegros.</li>
          <li>Confira se a cópia contém os diretórios esperados.</li>
          <li>Valide permissões e dependências importantes.</li>
          <li>Em imagens de sistema, teste o procedimento de recuperação em ambiente apropriado.</li>
          <li>Registre data, escopo, resultado e eventuais limitações.</li>
        </ul>

        <h3>9. Frequência e retenção</h3>
        <p>A frequência depende de quanto trabalho pode ser perdido sem causar prejuízo. Um projeto alterado diariamente pode exigir backups mais frequentes do que arquivos estáticos.</p>
        <p>A retenção define por quanto tempo as cópias serão mantidas. Ela deve considerar espaço, requisitos legais ou contratuais e a necessidade de recuperar versões anteriores.</p>

        <h3>10. Privacidade e segurança</h3>
        <p>Backups podem conter informações pessoais e empresariais. Utilize controles de acesso, criptografia quando apropriado e armazenamento protegido.</p>
        <p>Em atendimento técnico, confirme a autorização para copiar dados de clientes, informe o destino da cópia e elimine cópias temporárias conforme o acordo e as regras aplicáveis.</p>
      `
    },
    {
      title: "Ferramentas do Windows",
      summary: "Utilitários nativos para análise de processos, dispositivos, armazenamento, eventos, arquivos e integridade do sistema.",
      content: `
        <h3>1. Gerenciador de Tarefas</h3>
        <p>O Gerenciador de Tarefas mostra processos em execução, consumo de recursos, aplicativos de inicialização e informações de desempenho.</p>
        <p>Ele ajuda a identificar processos que consomem muita CPU, memória, disco ou GPU. Um consumo elevado deve ser interpretado conforme a atividade do programa: atualizações, renderização e jogos podem utilizar muitos recursos de forma legítima.</p>
        <p>Encerrar um processo pode causar perda de trabalho não salvo. Antes de finalizá-lo, identifique sua função e verifique se há uma alternativa mais segura.</p>

        <h3>2. Gerenciador de Dispositivos</h3>
        <p>Apresenta os dispositivos detectados pelo Windows e permite consultar o estado dos drivers, suas propriedades e determinados códigos de erro.</p>
        <p>É útil quando áudio, vídeo, rede, USB ou outro componente não funciona como esperado. Entretanto, a ausência de um alerta não comprova que o hardware esteja totalmente funcional.</p>
        <p>Atualizações e desinstalações de drivers devem ser realizadas de maneira controlada, utilizando pacotes compatíveis e mantendo uma forma de reversão quando possível.</p>

        <h3>3. Gerenciamento de Disco</h3>
        <p>Permite visualizar discos, partições, volumes, sistemas de arquivos e letras de unidade. Algumas operações permitem criar, formatar, reduzir, ampliar ou excluir volumes.</p>
        <div class="callout warning">
          Alterações de partição podem causar perda de dados ou impedir a inicialização do sistema. Identifique o disco correto e faça backup antes de operações destrutivas.
        </div>
        <p>Um disco que aparece como não inicializado ou não alocado não deve ser formatado automaticamente se contiver dados importantes. Primeiro, determine se se trata de uma unidade nova ou de uma unidade que perdeu sua estrutura de partições.</p>

        <h3>4. Visualizador de Eventos</h3>
        <p>O Visualizador de Eventos reúne registros de aplicativos, serviços, sistema e segurança. Os eventos podem conter horário, origem, categoria, identificador e descrição.</p>
        <p>Ao investigar uma falha, correlacione os eventos com o momento em que o problema ocorreu. Não conclua que todo evento de nível crítico seja a causa principal: alguns registros podem ser consequência de uma falha anterior.</p>

        <h3>5. Monitor de Recursos</h3>
        <p>O Monitor de Recursos oferece uma visão detalhada da atividade de CPU, memória, disco e rede. Ele pode ajudar a descobrir quais processos estão utilizando recursos ou acessando arquivos.</p>
        <p>É útil quando o Gerenciador de Tarefas não fornece detalhes suficientes para explicar a lentidão. A análise deve considerar o comportamento ao longo do tempo, e não apenas uma leitura instantânea.</p>

        <h3>6. Diagnóstico de Memória do Windows</h3>
        <p>A ferramenta Diagnóstico de Memória do Windows reinicia o computador para executar verificações na RAM. O resultado pode ser consultado nos registros do sistema após o teste.</p>
        <p>Se houver erros, investigue módulos, slots, compatibilidade e configurações. Um teste bem-sucedido não elimina todas as possibilidades de instabilidade intermitente.</p>

        <h3>7. Verificação de arquivos do sistema</h3>
        <p>O comando <code>sfc /scannow</code> verifica arquivos protegidos do Windows e tenta reparar problemas detectados quando existem recursos adequados disponíveis.</p>
        <p>O DISM permite realizar operações de manutenção da imagem do sistema. Em versões compatíveis, o comando abaixo pode ser utilizado para tentar restaurar a integridade da imagem on-line:</p>
        <p><code>DISM /Online /Cleanup-Image /RestoreHealth</code></p>
        <p>Os comandos devem ser executados em um terminal com privilégios administrativos. Leia as mensagens e os resultados antes de decidir se é necessário realizar outras ações.</p>

        <h3>8. Verificação de disco</h3>
        <p>A ferramenta <code>chkdsk</code> examina estruturas do sistema de arquivos e pode, conforme os parâmetros utilizados, tentar corrigir erros.</p>
        <p>Uma verificação básica pode ser iniciada com:</p>
        <p><code>chkdsk C:</code></p>
        <p>Opções de reparo alteram estruturas do volume. Em uma unidade que apresenta sinais de falha física, priorize a preservação dos dados antes de executar operações intensivas.</p>

        <h3>9. Informações do Sistema e DirectX</h3>
        <p>A ferramenta Informações do Sistema, acessível por <code>msinfo32</code>, apresenta dados sobre componentes, recursos, ambiente e configuração do Windows.</p>
        <p>A ferramenta de diagnóstico do DirectX, acessível por <code>dxdiag</code>, reúne informações relacionadas a gráficos, áudio e componentes DirectX. Ela pode ajudar na investigação de problemas em jogos e aplicativos multimídia.</p>
        <p>Essas ferramentas fornecem informações úteis, mas não substituem testes físicos quando há suspeita de defeito no hardware.</p>

        <h3>10. Limpeza e armazenamento</h3>
        <p>As configurações de armazenamento do Windows permitem examinar categorias de espaço ocupado e identificar arquivos que podem ser removidos. A Limpeza de Disco também oferece opções para remover determinados dados temporários.</p>
        <p>Antes de excluir conteúdo, verifique sua finalidade. Arquivos temporários podem ser necessários para uma operação em andamento, e pastas de recuperação podem conter dados úteis.</p>
        <p>Não apague indiscriminadamente diretórios do Windows, dados de programas ou arquivos de sistema para liberar espaço. Utilize as ferramentas apropriadas e mantenha backup dos dados importantes.</p>

        <h3>11. Prompt de Comando e PowerShell</h3>
        <p>O Prompt de Comando e o PowerShell permitem executar comandos administrativos e tarefas automatizadas. O PowerShell também oferece recursos de gerenciamento de objetos e scripts.</p>
        <p>Ferramentas de rede, listagem de arquivos, informações de sistema e verificação podem ajudar no suporte. Antes de executar um comando encontrado na internet, compreenda o que ele modifica, quais privilégios exige e se pode apagar dados.</p>

        <h3>12. Escolha da ferramenta adequada</h3>
        <p>Utilize a ferramenta que corresponde à pergunta técnica. Para identificar um processo, consulte o Gerenciador de Tarefas; para investigar um dispositivo, utilize o Gerenciador de Dispositivos; para examinar partições, utilize o Gerenciamento de Disco; para investigar falhas registradas, consulte os eventos.</p>
        <p>A combinação de ferramentas e a comparação de resultados fornecem uma base mais confiável para o diagnóstico do que depender de uma única mensagem ou indicador.</p>
      `
    },
    {
      title: "Atendimento técnico e documentação",
      summary: "Abertura de chamados, comunicação com clientes, inventário, autorização, diagnóstico e registro de serviços.",
      content: `
        <h3>1. Organização do atendimento</h3>
        <p>O atendimento técnico envolve entender o problema, identificar o equipamento, avaliar riscos, executar testes e comunicar os resultados. Uma boa organização reduz retrabalho e ajuda a preservar os dados e o patrimônio do cliente.</p>
        <p>O processo deve começar com uma descrição clara do sintoma, sem assumir imediatamente que a causa já é conhecida.</p>

        <h3>2. Abertura de chamado</h3>
        <p>Um chamado registra uma solicitação de suporte e permite acompanhar seu andamento.</p>
        <ul>
          <li>Data e horário do atendimento.</li>
          <li>Identificação do equipamento ou patrimônio, quando aplicável.</li>
          <li>Descrição do problema relatado.</li>
          <li>Condições em que o problema ocorre.</li>
          <li>Impacto sobre o trabalho ou a utilização do equipamento.</li>
          <li>Prioridade e prazo acordados, conforme o serviço.</li>
        </ul>
        <p>Registre os fatos relatados pelo usuário separadamente das conclusões técnicas. Por exemplo, “o usuário informa que o computador reinicia ao abrir um jogo” é diferente de “a fonte está defeituosa”.</p>

        <h3>3. Entrevista técnica</h3>
        <p>Perguntas objetivas ajudam a entender o contexto da falha: quando começou, se ocorre sempre, quais mensagens aparecem, se houve atualização recente e se o equipamento sofreu queda, contato com líquido ou alteração de hardware.</p>
        <p>Evite perguntas acusatórias ou pressupostos sobre a causa. O objetivo é coletar informações que permitam reproduzir o sintoma e orientar os testes.</p>

        <h3>4. Inventário do equipamento</h3>
        <p>O inventário registra a configuração e a identificação dos equipamentos administrados. Pode incluir fabricante, modelo, número de série, processador, RAM, armazenamento, sistema operacional e periféricos relevantes.</p>
        <p>Em empresas, o número de patrimônio e o histórico de manutenção ajudam a controlar localização, responsabilidade e intervenções realizadas.</p>
        <p>Registre apenas os dados necessários para a finalidade do serviço e proteja informações que possam identificar pessoas ou revelar configurações sensíveis.</p>

        <h3>5. Autorização e limites de atuação</h3>
        <p>Antes de reinstalar um sistema, formatar uma unidade, acessar arquivos pessoais, substituir peças ou executar operações que possam apagar dados, explique o procedimento e obtenha autorização adequada.</p>
        <p>Confirme também quais arquivos precisam ser preservados e se existe backup. Não considere a autorização para consertar um computador como autorização irrestrita para examinar todos os dados nele armazenados.</p>
        <p>Em ambientes corporativos, siga as políticas de acesso, segurança e aprovação definidas pela organização.</p>

        <h3>6. Método de diagnóstico</h3>
        <ol>
          <li>Registrar o sintoma e as circunstâncias relatadas.</li>
          <li>Identificar o equipamento e as alterações recentes.</li>
          <li>Realizar verificações iniciais de baixo risco.</li>
          <li>Definir hipóteses e selecionar testes relevantes.</li>
          <li>Modificar uma variável por vez quando possível.</li>
          <li>Registrar resultados e comparar com o comportamento esperado.</li>
          <li>Explicar a causa provável, as limitações e as opções de solução.</li>
        </ol>
        <p>Quando a causa não puder ser confirmada, documente essa incerteza. Um relatório tecnicamente correto diferencia evidências observadas, hipóteses e conclusões.</p>

        <h3>7. Orçamento e comunicação</h3>
        <p>Antes de realizar um reparo com custos adicionais, informe quais serviços serão executados, o valor previsto, possíveis despesas com peças e os riscos relevantes.</p>
        <p>Se o diagnóstico exigir uma intervenção diferente da inicialmente autorizada, explique a mudança e solicite aprovação. Evite prometer resultados que dependam do estado de componentes ou de fatores ainda desconhecidos.</p>

        <h3>8. Relatório de serviço</h3>
        <p>Um relatório de atendimento deve ser compreensível para outro técnico e para o cliente.</p>
        <ul>
          <li>Problema informado.</li>
          <li>Estado inicial do equipamento.</li>
          <li>Testes e ferramentas utilizados.</li>
          <li>Resultados observados.</li>
          <li>Alterações e reparos realizados.</li>
          <li>Peças substituídas, quando houver.</li>
          <li>Testes finais e limitações remanescentes.</li>
          <li>Recomendações e pendências.</li>
        </ul>
        <p>Evite registrar senhas, tokens, chaves privadas ou outros segredos em texto aberto. Guarde documentos de atendimento em local com acesso controlado.</p>

        <h3>9. Testes após o reparo</h3>
        <p>Após a intervenção, confirme se o sintoma original foi resolvido e se as funções relacionadas continuam operacionais.</p>
        <p>Conforme o serviço, isso pode incluir inicialização, rede, áudio, vídeo, USB, armazenamento, temperatura, estabilidade e execução do aplicativo afetado.</p>
        <p>Não informe que um defeito foi totalmente resolvido se apenas uma parte do funcionamento foi testada. Descreva o escopo da verificação realizada.</p>

        <h3>10. Entrega e encerramento</h3>
        <p>Na entrega, explique o serviço executado, as peças substituídas, os testes realizados e eventuais limitações. Confirme com o cliente os acessórios e componentes entregues.</p>
        <p>Registre a data de conclusão, as recomendações e os termos de garantia aplicáveis ao serviço. Não prometa cobertura que não esteja prevista nas condições acordadas.</p>

        <h3>11. Privacidade e segurança</h3>
        <p>Dados pessoais e empresariais devem ser acessados apenas na medida necessária ao atendimento autorizado. Sempre que possível, solicite ao cliente que faça login ou execute operações que exijam suas credenciais sem revelá-las ao técnico.</p>
        <p>Evite copiar dados para dispositivos pessoais ou serviços não autorizados. Cópias temporárias de trabalho devem ser protegidas e removidas conforme o procedimento combinado.</p>
        <p>O técnico também deve manter seus próprios equipamentos de trabalho atualizados e evitar conectar mídias desconhecidas a ambientes críticos sem avaliação de segurança.</p>

        <h3>12. Ética e postura profissional</h3>
        <p>Um profissional confiável explica os problemas em linguagem compreensível, respeita a privacidade, documenta as intervenções e reconhece quando precisa de ferramentas ou conhecimento adicional.</p>
        <p>Não substitua peças sem justificativa, não oculte riscos e não atribua certeza a uma hipótese ainda não confirmada. A qualidade do suporte depende tanto da competência técnica quanto da responsabilidade no atendimento.</p>
      `
    }
  ]
},


  
"Redes": {
  icon: "🌐",
  description: "Comunicação entre dispositivos, endereçamento IP, equipamentos, protocolos e diagnóstico.",
  topics: [
    {
      title: "Fundamentos de redes de computadores",
      summary: "Conceitos essenciais, tipos de rede, topologias e formas de comunicação.",
      content: `
        <h3>O que é uma rede de computadores?</h3>
        <p>Uma rede de computadores é um conjunto de dispositivos interconectados que podem trocar informações e compartilhar recursos, como arquivos, impressoras, serviços, conexão com a Internet e sistemas internos.</p>

        <h3>Principais componentes</h3>
        <ul>
          <li><b>Dispositivos finais:</b> computadores, celulares, impressoras, servidores e câmeras IP.</li>
          <li><b>Meios de transmissão:</b> cabos de cobre, fibra óptica e ondas de rádio.</li>
          <li><b>Equipamentos de interconexão:</b> switches, roteadores e pontos de acesso.</li>
          <li><b>Protocolos:</b> regras que definem como os dados são transmitidos e interpretados.</li>
          <li><b>Serviços de rede:</b> DNS, DHCP, compartilhamento de arquivos, autenticação e outros.</li>
        </ul>

        <h3>Tipos de rede por alcance</h3>
        <ul>
          <li><b>PAN:</b> rede pessoal de curto alcance, como conexões Bluetooth.</li>
          <li><b>LAN:</b> rede local, normalmente presente em uma residência, escritório ou laboratório.</li>
          <li><b>WLAN:</b> rede local sem fio, geralmente baseada em Wi-Fi.</li>
          <li><b>MAN:</b> rede que interliga locais em uma área metropolitana.</li>
          <li><b>WAN:</b> rede de longa distância que pode conectar cidades, países e continentes.</li>
        </ul>

        <h3>Topologias</h3>
        <p>A topologia representa a organização física ou lógica de uma rede.</p>
        <ul>
          <li><b>Estrela:</b> os dispositivos se conectam a um ponto central, como um switch.</li>
          <li><b>Barramento:</b> os dispositivos compartilham um meio principal de comunicação.</li>
          <li><b>Anel:</b> os dispositivos formam um circuito lógico ou físico.</li>
          <li><b>Malha:</b> existem múltiplos caminhos possíveis entre os nós.</li>
          <li><b>Híbrida:</b> combina características de diferentes topologias.</li>
        </ul>
        <p>A topologia em estrela é comum em redes Ethernet modernas. A falha de um cabo individual normalmente afeta apenas o dispositivo conectado, enquanto uma falha no equipamento central pode afetar vários dispositivos.</p>

        <h3>Largura de banda, throughput e latência</h3>
        <ul>
          <li><b>Largura de banda:</b> capacidade nominal de transmissão de um enlace.</li>
          <li><b>Throughput:</b> quantidade de dados efetivamente transferida por unidade de tempo.</li>
          <li><b>Latência:</b> tempo necessário para os dados percorrerem um caminho.</li>
          <li><b>Jitter:</b> variação da latência entre pacotes.</li>
          <li><b>Perda de pacotes:</b> proporção de pacotes que não chegam ao destino.</li>
        </ul>
        <p>Uma conexão pode ter alta largura de banda e, mesmo assim, apresentar lentidão em chamadas de vídeo ou jogos se houver latência elevada, jitter ou perda de pacotes.</p>`
    },
    {
      title: "Modelo OSI e TCP/IP",
      summary: "Camadas, encapsulamento e análise sistemática de falhas de comunicação.",
      content: `
        <h3>Modelo OSI</h3>
        <p>O modelo OSI divide conceitualmente a comunicação de rede em sete camadas. Ele ajuda profissionais a organizar o diagnóstico e compreender quais funções participam da transmissão.</p>
        <ol>
          <li><b>Física:</b> sinais elétricos, ópticos ou de rádio, cabos, conectores e características físicas do enlace.</li>
          <li><b>Enlace de dados:</b> comunicação no enlace local, quadros, endereços MAC e mecanismos de acesso ao meio.</li>
          <li><b>Rede:</b> endereçamento lógico e encaminhamento de pacotes entre redes, como ocorre com IP.</li>
          <li><b>Transporte:</b> comunicação entre processos, portas e mecanismos como TCP e UDP.</li>
          <li><b>Sessão:</b> organização e controle de diálogos entre aplicações.</li>
          <li><b>Apresentação:</b> representação, codificação, compressão e transformação de dados.</li>
          <li><b>Aplicação:</b> protocolos e serviços utilizados diretamente pelas aplicações.</li>
        </ol>

        <h3>Modelo TCP/IP</h3>
        <p>O modelo TCP/IP representa a arquitetura prática de comunicação da Internet. Uma divisão comum utiliza quatro camadas:</p>
        <ul>
          <li><b>Acesso à rede:</b> transmissão no enlace local, Ethernet e Wi-Fi.</li>
          <li><b>Internet:</b> IP e encaminhamento entre redes.</li>
          <li><b>Transporte:</b> TCP, UDP e comunicação entre aplicações.</li>
          <li><b>Aplicação:</b> HTTP, HTTPS, DNS, DHCP, SMTP, SSH e outros protocolos.</li>
        </ul>

        <h3>Encapsulamento</h3>
        <p>Quando uma aplicação envia dados, cada camada acrescenta informações de controle conforme necessário. Em uma representação simplificada, os dados da aplicação são transportados em um segmento TCP ou datagrama UDP, dentro de um pacote IP e, em seguida, de um quadro do enlace.</p>
        <p>No destino, o processo inverso, chamado desencapsulamento, permite que os dados cheguem à aplicação correta.</p>

        <h3>Como isso ajuda no suporte?</h3>
        <p>Se um computador não tem conexão, o técnico pode verificar primeiro o cabo ou Wi-Fi, depois o enlace local, a configuração IP, o roteamento, a resolução DNS e, por fim, o serviço da aplicação. Essa ordem é uma referência de diagnóstico, não uma regra absoluta.</p>`
    },
    {
      title: "Endereço IP, máscara, sub-rede e gateway",
      summary: "Endereçamento IPv4 e IPv6, prefixos de rede e comunicação entre sub-redes.",
      content: `
        <h3>O que é um endereço IP?</h3>
        <p>O endereço IP identifica uma interface de rede no contexto de uma rede IP. Ele permite que os pacotes sejam encaminhados ao destino. Um dispositivo pode possuir vários endereços ou interfaces.</p>

        <h3>IPv4</h3>
        <p>O IPv4 utiliza 32 bits, normalmente escritos como quatro números decimais separados por pontos. Por exemplo: <code>192.168.1.10</code>.</p>
        <p>O endereço possui uma parte associada à rede e outra à interface dentro dessa rede. A divisão depende da máscara ou do comprimento do prefixo.</p>

        <h3>Máscara e prefixo CIDR</h3>
        <p>O prefixo indica quantos bits pertencem à parte de rede. O prefixo <code>/24</code> corresponde à máscara <code>255.255.255.0</code>.</p>
        <p>Em uma rede <code>192.168.1.0/24</code>, o endereço <code>192.168.1.10</code> está dentro da sub-rede. A rede possui 256 combinações de endereços; na sub-rede IPv4 convencional, normalmente 254 são utilizáveis para hosts.</p>
        <p>Essa regra de endereços utilizáveis não se aplica da mesma forma a todos os prefixos, como <code>/31</code> e <code>/32</code>.</p>

        <h3>Endereços privados IPv4</h3>
        <ul>
          <li><code>10.0.0.0/8</code> — faixa privada de 10.0.0.0 a 10.255.255.255.</li>
          <li><code>172.16.0.0/12</code> — faixa privada de 172.16.0.0 a 172.31.255.255.</li>
          <li><code>192.168.0.0/16</code> — faixa privada de 192.168.0.0 a 192.168.255.255.</li>
        </ul>
        <p>Esses endereços são utilizados em redes internas e não são encaminhados diretamente pela Internet pública como endereços globais.</p>

        <h3>Outros endereços importantes</h3>
        <ul>
          <li><code>127.0.0.1</code>: endereço de loopback IPv4, utilizado para testar a pilha de rede local.</li>
          <li><code>169.254.0.0/16</code>: faixa IPv4 de link-local; um endereço dessa faixa pode indicar que o computador não recebeu uma configuração DHCP, embora existam outros motivos possíveis.</li>
          <li><code>0.0.0.0</code>: pode representar um endereço não especificado ou, em uma rota, um destino padrão, conforme o contexto.</li>
        </ul>

        <h3>Gateway padrão</h3>
        <p>O gateway padrão é o próximo salto utilizado quando o destino não corresponde a uma rota mais específica conhecida pelo dispositivo. Em redes domésticas, geralmente é o endereço local do roteador.</p>

        <h3>IPv6</h3>
        <p>O IPv6 utiliza endereços de 128 bits, escritos em grupos de valores hexadecimais separados por dois-pontos. Exemplo: <code>2001:db8::10</code>. O prefixo <code>/64</code> é comum em redes locais IPv6, mas não é o único prefixo possível.</p>
        <p>O IPv6 possui endereços globais, link-local e de loopback. O endereço <code>::1</code> é o loopback IPv6. A faixa <code>fe80::/10</code> é reservada para endereços link-local.</p>

        <h3>Como consultar a configuração</h3>
        <p>No Windows, execute <code>ipconfig /all</code> no Prompt de Comando. Confira o endereço, a máscara ou prefixo, o gateway e os servidores DNS. Uma configuração aparentemente correta não garante, sozinha, que o caminho até o destino esteja funcionando.</p>`
    },
    {
      title: "DHCP e DNS",
      summary: "Configuração automática de rede e resolução de nomes de domínio.",
      content: `
        <h3>DHCP</h3>
        <p>O Dynamic Host Configuration Protocol distribui parâmetros de rede automaticamente, como endereço IP, máscara ou prefixo, gateway e servidores DNS.</p>
        <p>Em uma rede IPv4, o processo tradicional de obtenção de uma concessão é frequentemente resumido como DORA:</p>
        <ol>
          <li><b>Discover:</b> o cliente procura um servidor DHCP.</li>
          <li><b>Offer:</b> o servidor oferece uma configuração.</li>
          <li><b>Request:</b> o cliente solicita a configuração oferecida.</li>
          <li><b>Acknowledge:</b> o servidor confirma a concessão.</li>
        </ol>
        <p>Os endereços são normalmente concedidos por um período determinado, chamado tempo de concessão. Reservas DHCP podem associar um dispositivo a um endereço específico com base em sua identificação, frequentemente o endereço MAC.</p>

        <h3>Problemas comuns de DHCP</h3>
        <ul>
          <li>Servidor DHCP indisponível.</li>
          <li>Escopo de endereços esgotado.</li>
          <li>Problemas físicos ou de Wi-Fi que impedem o cliente de alcançar o servidor.</li>
          <li>Configuração incorreta de VLAN ou de retransmissão DHCP.</li>
          <li>Conflito com outro servidor DHCP não autorizado.</li>
        </ul>
        <p>No Windows, <code>ipconfig /release</code> libera a concessão IPv4 atual e <code>ipconfig /renew</code> solicita outra. Esses comandos podem interromper temporariamente a conectividade; use-os de acordo com o diagnóstico.</p>

        <h3>DNS</h3>
        <p>O Domain Name System é um sistema distribuído que permite consultar informações associadas a nomes de domínio. Ele é usado para localizar serviços, incluindo os endereços IP associados a nomes de sites.</p>
        <p>O DNS não se limita a transformar nomes em endereços IP. Ele também possui registros para outros fins.</p>
        <ul>
          <li><b>A:</b> associa um nome a um endereço IPv4.</li>
          <li><b>AAAA:</b> associa um nome a um endereço IPv6.</li>
          <li><b>CNAME:</b> indica um nome canônico para outro nome.</li>
          <li><b>MX:</b> informa servidores responsáveis pelo recebimento de e-mail de um domínio.</li>
          <li><b>NS:</b> identifica servidores DNS autoritativos para uma zona.</li>
          <li><b>TXT:</b> armazena informações textuais usadas em diversas configurações.</li>
          <li><b>PTR:</b> é utilizado em consultas DNS reversas.</li>
        </ul>

        <h3>Diagnóstico de DNS</h3>
        <p>Use <code>nslookup example.com</code> para consultar a resolução de um nome. Para consultar um servidor DNS específico, você pode executar <code>nslookup example.com 1.1.1.1</code>, desde que esse servidor esteja acessível na rede.</p>
        <p>Se um nome não resolve, mas um endereço IP funciona, o DNS é uma hipótese importante. Entretanto, um teste direto por IP pode falhar por outras razões, como HTTPS, certificados, hospedagem virtual ou bloqueios de rede.</p>
        <p>O comando <code>ipconfig /flushdns</code> limpa o cache local de resolução DNS do Windows. Ele não corrige problemas no servidor DNS nem garante que o registro consultado esteja correto.</p>`
    },
    {
      title: "TCP, UDP, portas e protocolos",
      summary: "Como as aplicações estabelecem comunicação através da rede.",
      content: `
        <h3>TCP</h3>
        <p>O Transmission Control Protocol fornece um fluxo de bytes confiável e ordenado entre os pontos de comunicação. Ele utiliza mecanismos como confirmação de recebimento, retransmissão e controle de fluxo. A conexão TCP começa normalmente com um processo conhecido como handshake de três etapas.</p>
        <p>TCP não garante que uma aplicação esteja funcionando corretamente; ele fornece mecanismos de transporte para os dados.</p>

        <h3>UDP</h3>
        <p>O User Datagram Protocol envia datagramas sem estabelecer uma conexão TCP e sem oferecer, por si só, garantia de entrega, ordenação ou retransmissão. É utilizado quando a aplicação se beneficia de baixa sobrecarga ou implementa seus próprios mecanismos de confiabilidade.</p>
        <p>DNS, comunicação em tempo real, jogos e determinados serviços de mídia podem utilizar UDP, dependendo do protocolo e da configuração.</p>

        <h3>Portas de rede</h3>
        <p>As portas TCP e UDP ajudam a identificar os serviços ou processos de destino dentro de um dispositivo. O endereço IP identifica a interface de rede; a porta identifica o ponto de comunicação utilizado pelo serviço.</p>
        <ul>
          <li><b>TCP 20/21:</b> transferência de dados e controle em FTP tradicional.</li>
          <li><b>TCP 22:</b> SSH, acesso remoto seguro por terminal.</li>
          <li><b>TCP 25:</b> SMTP, usado na transferência de e-mail entre servidores.</li>
          <li><b>TCP 53 e UDP 53:</b> DNS, conforme o tipo de consulta e a situação.</li>
          <li><b>UDP 67/68:</b> DHCP para servidor e cliente IPv4, respectivamente.</li>
          <li><b>TCP 80:</b> HTTP tradicional.</li>
          <li><b>TCP 443:</b> HTTPS tradicional; HTTP/3 utiliza QUIC sobre UDP, normalmente na porta 443.</li>
          <li><b>TCP 445:</b> SMB, utilizado para compartilhamento de arquivos e outros recursos Windows.</li>
          <li><b>TCP 3389:</b> porta padrão do Remote Desktop Protocol em configurações comuns.</li>
        </ul>
        <p>Portas padrão podem ser alteradas. Encontrar uma porta aberta não prova que o serviço seja seguro ou esteja funcionando corretamente.</p>

        <h3>Firewall e portas</h3>
        <p>Um firewall aplica regras ao tráfego de rede. As regras podem considerar endereço de origem e destino, protocolo, porta, interface e perfil de rede. Uma conexão pode falhar porque o serviço não está ouvindo, o firewall bloqueia o tráfego ou existe um problema no caminho.</p>
        <p>Não abra portas no roteador sem compreender o serviço exposto, a necessidade de acesso externo e os riscos envolvidos. Prefira soluções seguras de acesso remoto e mantenha os sistemas atualizados.</p>`
    },
    {
      title: "Roteadores, switches, modems e pontos de acesso",
      summary: "Funções dos principais equipamentos de redes domésticas e corporativas.",
      content: `
        <h3>Switch</h3>
        <p>Um switch Ethernet conecta dispositivos em uma rede local. Ele aprende endereços MAC de origem e utiliza sua tabela de encaminhamento para enviar quadros pela porta apropriada.</p>
        <p>Quando ainda não conhece o destino de um quadro unicast, o switch pode encaminhá-lo pelas portas pertinentes da mesma VLAN, exceto a porta de entrada. Quadros de broadcast também são distribuídos dentro do domínio de broadcast correspondente.</p>

        <h3>Roteador</h3>
        <p>Um roteador encaminha pacotes IP entre redes diferentes com base em sua tabela de rotas. Em residências, ele costuma fornecer também funções como DHCP, firewall e tradução de endereços de rede (NAT).</p>
        <p>NAT é frequentemente usado para permitir que vários dispositivos com endereços IPv4 privados compartilhem um endereço IPv4 público. NAT e firewall são funções diferentes, ainda que possam coexistir no mesmo equipamento.</p>

        <h3>Modem e ONT</h3>
        <p>Um modem adapta sinais e protocolos para determinada tecnologia de acesso. Em conexões de fibra óptica, uma ONT faz a interface entre a rede óptica do provedor e a conexão do cliente. O equipamento exato depende da tecnologia fornecida.</p>

        <h3>Ponto de acesso</h3>
        <p>Um ponto de acesso permite que dispositivos sem fio se conectem à rede. Ele pode funcionar integrado a um roteador ou como equipamento separado.</p>

        <h3>VLAN</h3>
        <p>Uma Virtual LAN divide logicamente uma infraestrutura de rede de camada 2 em domínios separados. VLANs podem melhorar a organização e o isolamento entre setores, mas dependem de configuração correta dos switches, portas e, quando necessário, do roteamento entre VLANs.</p>

        <h3>PoE</h3>
        <p>Power over Ethernet permite transportar energia elétrica e dados pelo mesmo cabo Ethernet compatível. É comum em pontos de acesso, telefones IP e câmeras. É necessário verificar a compatibilidade do padrão, da potência e do equipamento alimentador.</p>

        <h3>Quando investigar cada equipamento?</h3>
        <ul>
          <li><b>Switch:</b> verificar alimentação, LEDs de enlace, cabo, VLAN e erros de porta.</li>
          <li><b>Roteador:</b> verificar endereço WAN, tabela de rotas, gateway, DHCP e estado da conexão externa.</li>
          <li><b>Modem ou ONT:</b> observar indicadores de sincronismo ou sinal e consultar o provedor quando necessário.</li>
          <li><b>Ponto de acesso:</b> verificar cobertura, interferência, autenticação, canal e configuração de rede.</li>
        </ul>`
    },
    {
      title: "Wi-Fi e redes sem fio",
      summary: "Bandas, canais, segurança, interferência e causas de sinal fraco.",
      content: `
        <h3>Como funciona o Wi-Fi?</h3>
        <p>Wi-Fi é uma família de tecnologias de rede local sem fio baseada nos padrões IEEE 802.11. Os dispositivos transmitem dados por ondas de rádio e precisam estar dentro de condições adequadas de cobertura e compatibilidade.</p>

        <h3>Bandas de frequência</h3>
        <ul>
          <li><b>2,4 GHz:</b> costuma alcançar distâncias maiores e atravessar obstáculos melhor, mas possui menos espaço de canais e sofre interferência de muitos dispositivos.</li>
          <li><b>5 GHz:</b> oferece mais opções de canais e pode proporcionar maior desempenho, mas a cobertura tende a ser mais sensível a obstáculos.</li>
          <li><b>6 GHz:</b> disponível em equipamentos e regiões compatíveis, oferece espectro adicional, mas sua utilização depende de regulamentação e suporte dos dispositivos.</li>
        </ul>
        <p>O alcance e o desempenho reais dependem da potência, das antenas, dos obstáculos, da interferência, da largura do canal e das capacidades do cliente e do ponto de acesso.</p>

        <h3>Canais e largura de canal</h3>
        <p>Redes Wi-Fi utilizam canais dentro das bandas permitidas. Redes próximas que utilizam canais sobrepostos ou o mesmo canal podem disputar tempo de transmissão. Canais mais largos podem aumentar a taxa máxima, mas também ocupam mais espectro e podem piorar a situação em ambientes congestionados.</p>

        <h3>Segurança</h3>
        <ul>
          <li>Prefira WPA3 quando todos os dispositivos forem compatíveis.</li>
          <li>WPA2-AES continua sendo uma opção comum quando configurado corretamente.</li>
          <li>Evite WEP e protocolos legados inseguros.</li>
          <li>Use senhas fortes e exclusivas para a rede.</li>
          <li>Altere as credenciais administrativas padrão do roteador.</li>
          <li>Mantenha firmware e equipamentos atualizados.</li>
          <li>Considere uma rede de convidados para dispositivos que não precisam acessar recursos internos.</li>
        </ul>

        <h3>Problemas frequentes</h3>
        <ul>
          <li><b>Sinal fraco:</b> distância, paredes, obstáculos ou posicionamento inadequado.</li>
          <li><b>Velocidade baixa:</b> interferência, canal congestionado, enlace limitado ou plano de Internet.</li>
          <li><b>Conecta, mas não navega:</b> investigar DHCP, gateway, DNS, firewall e conexão externa.</li>
          <li><b>Desconexões:</b> investigar interferência, roaming, firmware, economia de energia e estabilidade do equipamento.</li>
        </ul>
        <p>Para avaliar o Wi-Fi, compare a conexão sem fio com um teste por cabo, se possível, e observe se o problema ocorre em um único dispositivo ou em toda a rede.</p>`
    },
    {
      title: "Cabos, conectores e Ethernet",
      summary: "Cabeamento de cobre, fibra óptica, categorias e falhas físicas.",
      content: `
        <h3>Cabo de par trançado</h3>
        <p>Cabos Ethernet de cobre utilizam pares de condutores trançados para reduzir interferências. São comuns em redes locais com conectores 8P8C, frequentemente chamados de RJ45 no uso cotidiano.</p>

        <h3>Categorias comuns</h3>
        <ul>
          <li><b>Cat 5e:</b> suporta Gigabit Ethernet em condições adequadas até o alcance padronizado de um canal de cobre.</li>
          <li><b>Cat 6:</b> suporta Gigabit Ethernet e pode suportar 10 Gigabit Ethernet em distâncias reduzidas, conforme as condições da instalação.</li>
          <li><b>Cat 6A:</b> projetado para suportar 10 Gigabit Ethernet até 100 metros em um canal conforme as especificações.</li>
        </ul>
        <p>Para canais Ethernet de cobre comuns, o comprimento máximo normalmente é de 100 metros, considerando o cabeamento horizontal e os cordões previstos na norma aplicável. A categoria do cabo, a qualidade da instalação e os equipamentos também importam.</p>

        <h3>Fibra óptica</h3>
        <p>A fibra transmite dados utilizando luz. Pode ser monomodo ou multimodo, conforme sua construção e a aplicação. Ela permite enlaces de longa distância e é imune a interferência eletromagnética no meio de transmissão.</p>
        <p>Conectores, transceptores, tipo de fibra, comprimento de onda e orçamento óptico precisam ser compatíveis. A inspeção e a limpeza dos conectores são importantes; nunca olhe diretamente para a extremidade de uma fibra ou transceptor óptico ativo.</p>

        <h3>Defeitos físicos comuns</h3>
        <ul>
          <li>Cabo rompido, dobrado excessivamente ou danificado.</li>
          <li>Conector mal crimpado ou com contatos defeituosos.</li>
          <li>Ordem de fios incorreta ou pares divididos.</li>
          <li>Porta Ethernet danificada ou negociando em velocidade inferior.</li>
          <li>Interferência ou instalação fora das especificações.</li>
        </ul>

        <h3>Ferramentas de teste</h3>
        <p>Um testador básico pode verificar continuidade e sequência dos condutores. Equipamentos de certificação e qualificação avaliam parâmetros mais avançados. Um teste simples de continuidade não garante que o cabo atenderá ao desempenho de uma categoria específica.</p>

        <h3>Duplex e velocidade</h3>
        <p>Ethernet moderna normalmente utiliza autonegociação para determinar velocidade e duplex compatíveis. Configurações incompatíveis podem provocar desempenho ruim ou erros. Verifique as propriedades do adaptador, os indicadores da porta e as estatísticas de erro do equipamento.</p>`
    },
    {
      title: "Comandos do Windows para diagnóstico de rede",
      summary: "Comandos para verificar IP, conectividade, rotas, DNS e conexões.",
      content: `
        <h3>ipconfig</h3>
        <p>Exibe informações de configuração IP do Windows.</p>
        <ul>
          <li><code>ipconfig</code> — mostra informações básicas.</li>
          <li><code>ipconfig /all</code> — mostra detalhes, incluindo DHCP, gateway, DNS e endereço físico.</li>
          <li><code>ipconfig /release</code> — libera concessões IPv4 DHCP.</li>
          <li><code>ipconfig /renew</code> — solicita renovação da configuração IPv4 DHCP.</li>
          <li><code>ipconfig /flushdns</code> — limpa o cache de resolução DNS local.</li>
        </ul>

        <h3>ping</h3>
        <p>Envia solicitações ICMP Echo para testar se há resposta de um destino.</p>
        <ul>
          <li><code>ping 127.0.0.1</code> — testa a pilha IPv4 local.</li>
          <li><code>ping 192.168.1.1</code> — testa o endereço indicado, se ele existir e responder.</li>
          <li><code>ping example.com</code> — testa a resolução do nome e a resposta ICMP do destino.</li>
          <li><code>ping -n 10 192.168.1.1</code> — envia dez solicitações no Windows.</li>
        </ul>
        <p>Ausência de resposta não comprova que o equipamento esteja desligado. O destino ou um firewall pode bloquear ICMP, ou o caminho pode estar indisponível.</p>

        <h3>tracert e pathping</h3>
        <ul>
          <li><code>tracert example.com</code> — tenta identificar os saltos até o destino.</li>
          <li><code>pathping example.com</code> — combina informações de rota com estatísticas de perda ao longo do caminho.</li>
        </ul>
        <p>Alguns roteadores não respondem às sondagens ou limitam essas respostas. Asteriscos em uma rota não significam necessariamente falha de encaminhamento.</p>

        <h3>nslookup</h3>
        <p><code>nslookup example.com</code> consulta o DNS para investigar a resolução de nomes. O resultado ajuda a identificar qual servidor respondeu e quais registros foram retornados.</p>

        <h3>netstat</h3>
        <ul>
          <li><code>netstat -ano</code> — mostra conexões, portas em escuta e identificadores de processos, conforme o estado exibido.</li>
          <li><code>netstat -r</code> — apresenta a tabela de rotas.</li>
        </ul>
        <p>Para relacionar um PID a um processo, use o Gerenciador de Tarefas ou comandos apropriados do Windows. Não encerre processos desconhecidos sem entender sua função.</p>

        <h3>arp</h3>
        <p><code>arp -a</code> exibe entradas do cache ARP IPv4, utilizado para relacionar endereços IP e endereços MAC no enlace local. A ausência de uma entrada pode ser normal quando o destino ainda não foi contatado recentemente.</p>

        <h3>PowerShell</h3>
        <ul>
          <li><code>Test-NetConnection example.com -Port 443</code> — testa a conectividade TCP com a porta indicada.</li>
          <li><code>Get-NetIPConfiguration</code> — apresenta a configuração IP dos adaptadores.</li>
          <li><code>Get-NetAdapter</code> — lista os adaptadores de rede e seus estados.</li>
          <li><code>Resolve-DnsName example.com</code> — consulta registros DNS.</li>
          <li><code>Get-NetRoute</code> — exibe rotas conhecidas pelo sistema.</li>
        </ul>

        <h3>Ordem sugerida de diagnóstico</h3>
        <ol>
          <li>Verifique cabos, LEDs, Wi-Fi e o estado do adaptador.</li>
          <li>Execute <code>ipconfig /all</code> e confira IP, gateway e DNS.</li>
          <li>Teste a pilha local com <code>ping 127.0.0.1</code>.</li>
          <li>Teste o endereço do gateway, se disponível.</li>
          <li>Investigue um destino externo conhecido.</li>
          <li>Teste a resolução DNS com <code>nslookup</code>.</li>
          <li>Se necessário, investigue a rota, a porta e o serviço de destino.</li>
        </ol>
        <p>Essa sequência é um guia inicial. Em ambientes reais, adapte os testes à topologia e às políticas da rede.</p>`
    },
    {
      title: "Segurança e boas práticas de redes",
      summary: "Proteção de equipamentos, segmentação, acesso e manutenção segura.",
      content: `
        <h3>Princípios básicos</h3>
        <ul>
          <li><b>Menor privilégio:</b> conceda apenas o acesso necessário a cada usuário e dispositivo.</li>
          <li><b>Segmentação:</b> separe redes de funcionários, convidados, servidores e dispositivos IoT quando apropriado.</li>
          <li><b>Atualizações:</b> mantenha sistemas, firmware e equipamentos suportados atualizados.</li>
          <li><b>Autenticação:</b> utilize credenciais fortes, exclusivas e mecanismos adicionais quando disponíveis.</li>
          <li><b>Monitoramento:</b> registre eventos relevantes e investigue comportamentos anormais.</li>
          <li><b>Backup:</b> mantenha cópias das configurações e dos dados importantes.</li>
        </ul>

        <h3>Firewall</h3>
        <p>Um firewall controla tráfego com base em regras. As regras devem permitir o que é necessário e bloquear o que não é autorizado. Não desative o firewall como primeira tentativa de resolver um problema de conexão.</p>

        <h3>Gerenciamento de roteadores e switches</h3>
        <p>Altere senhas administrativas padrão, desative serviços de gerenciamento desnecessários, limite a administração à rede apropriada e utilize protocolos de gerenciamento seguros. Evite expor interfaces administrativas diretamente à Internet.</p>

        <h3>Redes públicas e convidados</h3>
        <p>Uma rede de convidados pode limitar o acesso aos dispositivos internos. Em redes públicas, prefira sites HTTPS, mantenha os dispositivos atualizados e evite ignorar alertas de certificados. Uma VPN pode proteger o tráfego até seu ponto de terminação, mas não torna automaticamente seguro todo serviço acessado.</p>

        <h3>Diagnóstico autorizado</h3>
        <p>Execute varreduras, testes de portas e avaliações de segurança somente em redes e dispositivos para os quais você tenha autorização. Em um atendimento técnico, confirme o escopo permitido antes de realizar alterações ou testes que possam interromper serviços.</p>

        <h3>Documentação</h3>
        <p>Registre a topologia, os endereços reservados, as VLANs, os equipamentos, as versões de firmware e as mudanças realizadas. Não coloque senhas, chaves privadas ou outros segredos em documentos de acesso amplo.</p>`
    }
  ]
},


  
"Segurança": {
  icon: "🛡️",
  description: "Proteção de dispositivos, dados, contas, redes e privacidade.",
  topics: [
    {
      title: "Fundamentos de segurança da informação",
      summary: "Princípios, riscos, vulnerabilidades e controles de segurança.",
      content: `
        <h3>O que é segurança da informação?</h3>
        <p>Segurança da informação reúne práticas, processos e tecnologias utilizados para proteger informações contra acesso indevido, alteração não autorizada, perda, destruição e indisponibilidade.</p>

        <h3>Tríade CIA</h3>
        <ul>
          <li><b>Confidencialidade:</b> somente pessoas e sistemas autorizados devem acessar a informação.</li>
          <li><b>Integridade:</b> os dados devem permanecer corretos e protegidos contra alterações indevidas.</li>
          <li><b>Disponibilidade:</b> informações e serviços devem estar acessíveis quando necessários.</li>
        </ul>
        <p>Por exemplo, uma conta invadida pode comprometer a confidencialidade; um arquivo alterado sem autorização compromete a integridade; um ataque que tira um servidor do ar compromete a disponibilidade.</p>

        <h3>Conceitos importantes</h3>
        <ul>
          <li><b>Ameaça:</b> algo capaz de causar dano, como um invasor, malware ou falha física.</li>
          <li><b>Vulnerabilidade:</b> fraqueza que pode ser explorada, como um sistema desatualizado.</li>
          <li><b>Risco:</b> possibilidade de uma ameaça explorar uma vulnerabilidade e causar impacto.</li>
          <li><b>Controle de segurança:</b> medida que reduz a probabilidade ou o impacto de um incidente.</li>
          <li><b>Incidente:</b> evento que compromete ou ameaça a segurança de sistemas ou informações.</li>
          <li><b>Superfície de ataque:</b> conjunto de pontos pelos quais um sistema pode ser atacado.</li>
        </ul>

        <h3>Tipos de controles</h3>
        <ul>
          <li><b>Preventivos:</b> procuram impedir incidentes, como autenticação multifator e restrições de acesso.</li>
          <li><b>Detectivos:</b> ajudam a identificar atividades suspeitas, como logs e alertas.</li>
          <li><b>Corretivos:</b> ajudam a recuperar ou corrigir sistemas após um problema, como aplicar uma correção de segurança.</li>
        </ul>

        <h3>Defesa em profundidade</h3>
        <p>Consiste em utilizar várias camadas de proteção. Um computador pode ter atualizações, firewall, antivírus, contas com permissões limitadas, criptografia e backup. Se uma camada falhar, as outras ainda podem reduzir os danos.</p>

        <h3>Gestão de riscos</h3>
        <p>O nível de proteção deve considerar a importância dos dados, as ameaças relevantes, o custo dos controles e o impacto de uma falha. Nenhuma medida isolada elimina todos os riscos.</p>`
    },
    {
      title: "Malware e ameaças digitais",
      summary: "Tipos de programas maliciosos, sinais de infecção e prevenção.",
      content: `
        <h3>O que é malware?</h3>
        <p>Malware é um termo geral para softwares ou códigos desenvolvidos para executar ações maliciosas, como roubar informações, espionar usuários, danificar arquivos ou obter controle indevido de dispositivos.</p>

        <h3>Principais tipos</h3>
        <ul>
          <li><b>Vírus:</b> código que pode se anexar a arquivos ou programas e se propagar quando é executado.</li>
          <li><b>Worm:</b> malware capaz de se espalhar automaticamente entre sistemas, frequentemente por redes ou vulnerabilidades.</li>
          <li><b>Trojan:</b> apresenta-se como um programa ou arquivo legítimo para enganar o usuário.</li>
          <li><b>Ransomware:</b> pode criptografar arquivos e exigir pagamento para tentar impedir ou reverter o acesso.</li>
          <li><b>Spyware:</b> coleta informações sem autorização adequada.</li>
          <li><b>Keylogger:</b> registra teclas digitadas ou outras entradas para capturar informações.</li>
          <li><b>Rootkit:</b> procura ocultar componentes maliciosos ou manter acesso privilegiado.</li>
          <li><b>Adware malicioso:</b> apresenta publicidade abusiva ou pode direcionar o usuário a conteúdos perigosos.</li>
          <li><b>Bot:</b> dispositivo comprometido que pode ser controlado remotamente como parte de uma rede de bots.</li>
          <li><b>Backdoor:</b> mecanismo que permite contornar os meios normais de autenticação ou acesso.</li>
        </ul>

        <h3>Como o malware chega ao computador?</h3>
        <ul>
          <li>Anexos ou links maliciosos recebidos por e-mail e mensagens.</li>
          <li>Programas piratas, cracks, ativadores e instaladores adulterados.</li>
          <li>Downloads de sites não confiáveis.</li>
          <li>Exploração de sistemas e aplicativos desatualizados.</li>
          <li>Dispositivos removíveis contaminados.</li>
          <li>Extensões de navegador ou aplicativos com comportamento malicioso.</li>
        </ul>

        <h3>Sinais que merecem investigação</h3>
        <ul>
          <li>Alertas inesperados de segurança.</li>
          <li>Processos desconhecidos consumindo recursos continuamente.</li>
          <li>Alterações não autorizadas em configurações ou contas.</li>
          <li>Extensões, programas ou tarefas agendadas desconhecidas.</li>
          <li>Arquivos que deixam de abrir ou apresentam nomes e extensões alterados.</li>
          <li>Conexões ou tráfego de rede incompatíveis com o uso normal.</li>
        </ul>
        <p>Um único sintoma não comprova infecção. Problemas de desempenho também podem ser causados por falhas de hardware, programas legítimos ou configurações incorretas.</p>

        <h3>Prevenção</h3>
        <ul>
          <li>Mantenha o sistema operacional e os aplicativos atualizados.</li>
          <li>Utilize uma solução de segurança confiável e mantenha a proteção ativa.</li>
          <li>Baixe programas de fontes oficiais.</li>
          <li>Evite executar arquivos desconhecidos com privilégios administrativos.</li>
          <li>Mantenha backups separados do computador principal.</li>
          <li>Ative a exibição das extensões de arquivo no Windows para facilitar a identificação de nomes enganosos.</li>
        </ul>`
    },
    {
      title: "Engenharia social, phishing e golpes",
      summary: "Como identificar tentativas de manipulação e roubo de credenciais.",
      content: `
        <h3>Engenharia social</h3>
        <p>Engenharia social é a manipulação de pessoas para obter informações, dinheiro, acesso ou ações que beneficiem um atacante. Em vez de explorar apenas uma falha técnica, o golpista explora confiança, urgência, medo, curiosidade ou autoridade aparente.</p>

        <h3>Principais modalidades</h3>
        <ul>
          <li><b>Phishing:</b> mensagens ou páginas falsas que tentam roubar credenciais ou induzir ações.</li>
          <li><b>Spear phishing:</b> ataque direcionado a uma pessoa ou organização específica.</li>
          <li><b>Smishing:</b> golpe por SMS ou mensagens de texto.</li>
          <li><b>Vishing:</b> golpe realizado por ligação de voz.</li>
          <li><b>Pretexting:</b> criação de uma história falsa para justificar uma solicitação.</li>
          <li><b>Falso suporte técnico:</b> alguém se passa por técnico ou empresa para obter acesso ou dinheiro.</li>
          <li><b>Impersonação:</b> falsificação da identidade de uma pessoa, empresa ou instituição.</li>
        </ul>

        <h3>Sinais de alerta</h3>
        <ul>
          <li>Mensagens que exigem ação imediata sob ameaça de bloqueio.</li>
          <li>Pedidos de senhas, códigos de autenticação ou chaves de recuperação.</li>
          <li>Links com domínios diferentes do site oficial.</li>
          <li>Anexos inesperados ou arquivos que solicitam a ativação de macros.</li>
          <li>Solicitações incomuns de pagamento, transferência ou alteração de dados bancários.</li>
          <li>Pedidos de instalação de ferramentas de acesso remoto sem justificativa verificável.</li>
        </ul>

        <h3>Como verificar uma mensagem</h3>
        <ol>
          <li>Não clique no link imediatamente.</li>
          <li>Confira cuidadosamente o domínio do remetente e o endereço de destino.</li>
          <li>Entre no serviço digitando o endereço conhecido no navegador ou usando o aplicativo oficial.</li>
          <li>Confirme solicitações incomuns por um canal independente e já conhecido.</li>
          <li>Não forneça códigos de autenticação nem aprove solicitações que você não iniciou.</li>
          <li>Reporte a mensagem suspeita à organização responsável, quando aplicável.</li>
        </ol>

        <h3>Se você informou uma senha em uma página falsa</h3>
        <p>Utilizando um dispositivo considerado seguro, altere a senha comprometida e qualquer outra senha reutilizada. Encerre sessões ativas, revise os métodos de recuperação e ative autenticação multifator. Se houver dados bancários envolvidos, contate a instituição financeira pelos canais oficiais.</p>
        <p>Autenticação multifator reduz riscos, mas códigos temporários e notificações de aprovação também podem ser alvo de golpes. Métodos resistentes a phishing, como passkeys e chaves de segurança FIDO2, oferecem proteção adicional quando suportados.</p>`
    },
    {
      title: "Firewall e proteção de rede",
      summary: "Regras de tráfego, portas, roteadores e redução da exposição.",
      content: `
        <h3>O que é um firewall?</h3>
        <p>Um firewall aplica regras para permitir, bloquear ou registrar tráfego de rede. Pode funcionar no computador, no roteador, em um servidor ou em um equipamento dedicado.</p>

        <h3>Tipos de firewall</h3>
        <ul>
          <li><b>Firewall de host:</b> protege um dispositivo individual, como o Firewall do Microsoft Defender.</li>
          <li><b>Firewall de rede:</b> controla o tráfego entre redes ou segmentos.</li>
          <li><b>Stateful firewall:</b> considera o estado das conexões ao aplicar regras.</li>
          <li><b>Firewall de aplicação ou proxy:</b> pode inspecionar ou intermediar comunicações em nível de aplicação.</li>
          <li><b>NGFW:</b> firewall de próxima geração, que pode combinar controle de aplicações e recursos adicionais de inspeção.</li>
        </ul>

        <h3>Portas e serviços</h3>
        <p>Serviços de rede utilizam portas para receber conexões. Uma porta aberta pode ser necessária para o funcionamento de um serviço, mas também pode aumentar a superfície de ataque se o serviço estiver exposto indevidamente.</p>
        <p>O objetivo não é bloquear tudo indiscriminadamente, mas permitir o tráfego necessário conforme a função do equipamento e a política de segurança.</p>

        <h3>Boas práticas</h3>
        <ul>
          <li>Mantenha o firewall ativado.</li>
          <li>Permita somente os aplicativos e serviços necessários.</li>
          <li>Evite expor interfaces administrativas diretamente à Internet.</li>
          <li>Desative serviços e portas que não são necessários.</li>
          <li>Altere as credenciais administrativas padrão dos equipamentos.</li>
          <li>Mantenha o firmware do roteador atualizado.</li>
          <li>Separe redes de convidados e dispositivos IoT quando possível.</li>
          <li>Registre as alterações feitas nas regras de segurança.</li>
        </ul>

        <h3>Firewall do Windows</h3>
        <p>O Firewall do Microsoft Defender pode ser consultado em Segurança do Windows e nas configurações avançadas do firewall. As regras podem variar conforme o perfil de rede: domínio, privado ou público.</p>
        <p>Para diagnosticar um bloqueio, verifique o perfil ativo, as regras de entrada e saída, o serviço de destino e os registros disponíveis. Evite desativar toda a proteção apenas para testar uma aplicação.</p>

        <h3>NAT não é sinônimo de firewall</h3>
        <p>NAT altera informações de endereços ou portas durante o encaminhamento de tráfego. Firewalls aplicam políticas de segurança. Um roteador doméstico frequentemente utiliza os dois recursos, mas eles têm funções distintas.</p>`
    },
    {
      title: "Senhas, autenticação e controle de acesso",
      summary: "Credenciais, autenticação multifator, contas e princípio do menor privilégio.",
      content: `
        <h3>Senhas fortes</h3>
        <p>Uma senha longa e exclusiva para cada serviço reduz o impacto de vazamentos. Frases-senha compostas por várias palavras podem ser fáceis de memorizar e difíceis de adivinhar quando escolhidas adequadamente.</p>
        <ul>
          <li>Não reutilize a mesma senha em serviços diferentes.</li>
          <li>Evite informações públicas ou previsíveis, como datas de nascimento.</li>
          <li>Utilize um gerenciador de senhas confiável.</li>
          <li>Troque senhas quando houver suspeita de comprometimento ou quando o serviço exigir uma mudança por motivo justificado.</li>
          <li>Nunca envie senhas em mensagens nem as armazene em arquivos desprotegidos.</li>
        </ul>

        <h3>Autenticação, autorização e auditoria</h3>
        <ul>
          <li><b>Autenticação:</b> verifica a identidade declarada de um usuário ou sistema.</li>
          <li><b>Autorização:</b> determina quais recursos e operações essa identidade pode utilizar.</li>
          <li><b>Auditoria:</b> registra e permite analisar atividades relevantes.</li>
        </ul>
        <p>Estar autenticado não significa ter permissão para acessar todos os dados. As permissões devem corresponder à função e à necessidade do usuário.</p>

        <h3>Autenticação multifator</h3>
        <p>A autenticação multifator exige dois ou mais fatores de categorias diferentes:</p>
        <ul>
          <li><b>Conhecimento:</b> algo que a pessoa sabe, como uma senha.</li>
          <li><b>Posse:</b> algo que possui, como uma chave de segurança ou dispositivo autenticador.</li>
          <li><b>Inerência:</b> uma característica biométrica, como impressão digital.</li>
        </ul>
        <p>Duas senhas diferentes continuam pertencendo à mesma categoria de fator e, por si só, não constituem autenticação multifator.</p>

        <h3>Gerenciadores de senhas e passkeys</h3>
        <p>Um gerenciador pode gerar, armazenar e preencher senhas exclusivas. Proteja-o com uma senha mestra forte e com os recursos de autenticação e recuperação oferecidos pelo serviço.</p>
        <p>Passkeys utilizam criptografia de chave pública para autenticar o usuário em serviços compatíveis. Em geral, são mais resistentes a phishing do que senhas tradicionais, porque a autenticação está vinculada ao serviço correto.</p>

        <h3>Menor privilégio</h3>
        <p>Conceda apenas as permissões necessárias para executar cada tarefa. No Windows, uma conta administrativa pode alterar configurações críticas e instalar software para o sistema. Para o uso diário, uma conta padrão reduz o impacto de determinadas ações maliciosas.</p>

        <h3>Recuperação de conta</h3>
        <p>Mantenha atualizados os e-mails e telefones de recuperação. Guarde códigos de recuperação em local seguro e revise os dispositivos, sessões e aplicativos conectados. A recuperação deve ser protegida, pois um método de recuperação fraco pode comprometer até uma conta com senha forte.</p>`
    },
    {
      title: "Criptografia, certificados e proteção de dados",
      summary: "Confidencialidade, integridade, hashes, chaves e conexões seguras.",
      content: `
        <h3>O que é criptografia?</h3>
        <p>Criptografia transforma dados legíveis em uma forma protegida, utilizando algoritmos e chaves. Seu objetivo pode incluir confidencialidade e, em protocolos apropriados, contribuir para a autenticação e a integridade da comunicação.</p>

        <h3>Criptografia simétrica</h3>
        <p>Utiliza a mesma chave secreta para cifrar e decifrar dados. É eficiente para grandes volumes de informação, mas a chave precisa ser protegida e compartilhada de maneira segura.</p>

        <h3>Criptografia assimétrica</h3>
        <p>Utiliza um par de chaves matematicamente relacionadas: uma pública e outra privada. A chave pública pode ser distribuída; a privada deve permanecer sob controle do proprietário. Sistemas reais frequentemente combinam criptografia assimétrica e simétrica.</p>

        <h3>Hash criptográfico</h3>
        <p>Uma função hash produz um resumo de tamanho definido a partir de dados de entrada. Hashes criptográficos, como SHA-256, são usados para verificar integridade e em diversos mecanismos de segurança.</p>
        <p>Um hash comum não é criptografia reversível e não deve ser confundido com uma senha protegida. Para armazenar senhas, sistemas bem projetados utilizam funções específicas de derivação de chave, como Argon2id, scrypt ou PBKDF2, com parâmetros apropriados e salt individual.</p>

        <h3>Assinatura digital</h3>
        <p>Uma assinatura digital permite verificar se os dados correspondem a uma assinatura criada com a chave privada associada. Quando o sistema é corretamente implementado e a chave pública está vinculada à identidade correta, ela ajuda a verificar autenticidade e integridade.</p>

        <h3>HTTPS e certificados digitais</h3>
        <p>HTTPS utiliza TLS para proteger a comunicação HTTP. Certificados digitais ajudam o cliente a verificar a identidade do servidor conforme a cadeia de confiança configurada.</p>
        <p>O ícone de conexão segura não garante que o site seja honesto: um site de phishing também pode utilizar HTTPS. Confira o domínio e o contexto antes de fornecer informações.</p>

        <h3>Criptografia de disco</h3>
        <p>O BitLocker e outras tecnologias de criptografia de volume ajudam a proteger dados armazenados caso o dispositivo seja perdido ou acessado sem autorização. A proteção depende da configuração e da gestão segura das chaves de recuperação.</p>
        <p>Criptografia não substitui backup. Se os dados forem apagados, danificados ou se as chaves forem perdidas, ainda poderá haver perda de acesso.</p>`
    },
    {
      title: "Permissões, privacidade e segurança no Windows",
      summary: "Contas, permissões de arquivos, aplicativos e proteção de informações.",
      content: `
        <h3>Contas e privilégios</h3>
        <p>O Windows permite utilizar contas padrão e administrativas. A conta padrão limita diversas alterações no sistema; a conta administrativa possui privilégios maiores e deve ser usada com cuidado.</p>

        <h3>Permissões de arquivos e pastas</h3>
        <p>As permissões NTFS controlam ações como leitura, gravação, modificação e acesso a arquivos e diretórios. Permissões explícitas e herdadas podem interagir, e configurações incorretas podem impedir o funcionamento de programas ou expor informações.</p>
        <p>Antes de alterar permissões, identifique o caminho, o proprietário, a finalidade da pasta e o efeito esperado. Evite conceder controle total a todos os usuários como solução genérica.</p>

        <h3>UAC</h3>
        <p>O Controle de Conta de Usuário (UAC) solicita confirmação ou credenciais quando uma operação precisa de elevação de privilégios. Ele ajuda a reduzir alterações não autorizadas, mas não substitui outras camadas de proteção.</p>

        <h3>Microsoft Defender e Segurança do Windows</h3>
        <p>A Segurança do Windows reúne áreas de proteção que podem incluir antivírus, firewall, controle de aplicativos e navegador e outras funcionalidades, conforme a versão e a configuração do sistema.</p>
        <p>É importante verificar se a proteção está ativa, se as definições estão atualizadas e se existem alertas que precisam de atenção. Evite instalar várias soluções antivírus com proteção em tempo real simultânea sem verificar a compatibilidade.</p>

        <h3>Atualizações</h3>
        <p>Atualizações corrigem vulnerabilidades e erros. Sistemas sem suporte deixam de receber determinadas correções e podem apresentar maior exposição a ameaças conhecidas. Antes de atualizações importantes em ambientes de produção, planeje backup e recuperação.</p>

        <h3>Privacidade</h3>
        <ul>
          <li>Revise as permissões de câmera, microfone, localização e arquivos.</li>
          <li>Instale programas somente de fontes confiáveis.</li>
          <li>Remova aplicativos que não são mais necessários.</li>
          <li>Bloqueie a sessão quando se afastar do computador.</li>
          <li>Evite compartilhar informações pessoais em capturas de tela, relatórios e chamados técnicos.</li>
          <li>Use bloqueio de tela e criptografia quando apropriado.</li>
        </ul>

        <h3>Ferramentas administrativas</h3>
        <p>O Visualizador de Eventos pode ajudar a investigar falhas e alertas. O Gerenciador de Tarefas permite analisar processos e consumo de recursos. O Gerenciador de Dispositivos apresenta o estado dos componentes e drivers.</p>
        <p>Um evento isolado nem sempre representa um ataque. Correlacione horários, processos, alterações e outros registros antes de concluir que houve comprometimento.</p>`
    },
    {
      title: "Backup e recuperação de dados",
      summary: "Estratégias de cópia, restauração e proteção contra perda de dados.",
      content: `
        <h3>Por que o backup é importante?</h3>
        <p>Backup é uma cópia dos dados mantida para recuperação após exclusão acidental, falha de hardware, corrupção, roubo ou incidente de segurança. Sincronização e armazenamento redundante podem ajudar, mas não substituem necessariamente um backup independente.</p>

        <h3>Tipos de backup</h3>
        <ul>
          <li><b>Completo:</b> copia o conjunto de dados selecionado.</li>
          <li><b>Incremental:</b> copia as alterações desde o backup anterior considerado pelo método.</li>
          <li><b>Diferencial:</b> copia as alterações desde o último backup completo.</li>
          <li><b>Imagem de sistema:</b> pode capturar volumes e componentes necessários para recuperar um ambiente inteiro, conforme a ferramenta.</li>
        </ul>

        <h3>Regra 3-2-1</h3>
        <p>Uma recomendação tradicional é manter três cópias dos dados, em dois tipos de mídia, com uma cópia fora do local principal. Para proteção contra ransomware, também é importante ter cópias offline ou imutáveis, protegidas contra alteração e exclusão.</p>

        <h3>Boas práticas</h3>
        <ul>
          <li>Automatize os backups e monitore se foram concluídos.</li>
          <li>Proteja as cópias com controles de acesso e criptografia quando apropriado.</li>
          <li>Mantenha pelo menos uma cópia separada do sistema principal.</li>
          <li>Defina quanto tempo os backups devem ser mantidos.</li>
          <li>Teste a restauração regularmente.</li>
          <li>Documente onde estão os backups e quem pode recuperá-los.</li>
        </ul>

        <h3>RPO e RTO</h3>
        <ul>
          <li><b>RPO:</b> perda máxima de dados que a organização considera aceitável, expressa em tempo.</li>
          <li><b>RTO:</b> tempo-alvo para recuperar um serviço após uma interrupção.</li>
        </ul>
        <p>Esses objetivos ajudam a definir a frequência dos backups e os recursos necessários para a recuperação.</p>

        <h3>Restauração após ransomware</h3>
        <p>Não conecte imediatamente o backup ao computador comprometido. Primeiro investigue e contenha o incidente, identifique a causa, prepare um ambiente confiável e verifique a integridade das cópias. Restaure somente quando houver segurança razoável de que o problema não será reintroduzido.</p>
        <p>O pagamento de resgate não garante a recuperação dos arquivos e pode não impedir a exposição de dados roubados.</p>`
    },
    {
      title: "Resposta a incidentes de segurança",
      summary: "Identificação, contenção, investigação, recuperação e documentação.",
      content: `
        <h3>O que é um incidente?</h3>
        <p>Um incidente de segurança é um evento que compromete ou ameaça a confidencialidade, integridade ou disponibilidade de dados, sistemas ou serviços. Exemplos incluem malware, conta invadida, vazamento de dados, acesso indevido e perda de um dispositivo.</p>

        <h3>Etapas gerais de resposta</h3>
        <ol>
          <li><b>Preparação:</b> defina responsáveis, contatos, ferramentas, backups e procedimentos.</li>
          <li><b>Identificação e análise:</b> confirme o que ocorreu, os sistemas afetados e a gravidade provável.</li>
          <li><b>Contenção:</b> limite a propagação e impeça que o incidente continue causando danos.</li>
          <li><b>Erradicação:</b> remova a causa e os componentes maliciosos quando isso puder ser feito com segurança.</li>
          <li><b>Recuperação:</b> restaure os sistemas de forma controlada e monitore se o problema retorna.</li>
          <li><b>Lições aprendidas:</b> documente a causa, as ações tomadas e as melhorias necessárias.</li>
        </ol>

        <h3>Primeiras medidas diante de suspeita de malware</h3>
        <ul>
          <li>Registre o horário, os sintomas e as alterações observadas.</li>
          <li>Se houver risco de propagação, desconecte o dispositivo da rede conforme o procedimento aplicável.</li>
          <li>Não conecte backups ao equipamento suspeito.</li>
          <li>Não apague arquivos, logs ou evidências indiscriminadamente.</li>
          <li>Evite usar o equipamento comprometido para trocar senhas ou acessar contas importantes.</li>
          <li>Comunique o responsável pela segurança ou suporte, conforme a organização.</li>
        </ul>

        <h3>Preservação de evidências</h3>
        <p>Em incidentes relevantes, logs, registros de horário, alertas e cópias forenses podem ajudar a entender a origem e a extensão do problema. Alterações feitas durante a investigação podem modificar evidências; siga procedimentos adequados e solicite apoio especializado quando necessário.</p>

        <h3>Contas comprometidas</h3>
        <p>Utilize um dispositivo confiável para redefinir credenciais, revogar sessões e tokens quando possível, revisar métodos de recuperação e verificar regras de encaminhamento de e-mail ou aplicativos conectados. Se a conta tiver acesso administrativo, investigue também os sistemas que ela pode ter alcançado.</p>

        <h3>Ambientes corporativos</h3>
        <p>Siga o plano de resposta da organização, preserve registros e informe os responsáveis. Dependendo do incidente, podem existir obrigações legais, contratuais ou regulatórias de comunicação. Não divulgue dados de clientes ou funcionários sem autorização.</p>`
    },
    {
      title: "Ferramentas e comandos de segurança",
      summary: "Recursos do Windows para verificar proteção, processos e configurações.",
      content: `
        <h3>Segurança do Windows</h3>
        <p>Abra Segurança do Windows pelo menu Iniciar. Conforme a edição e a configuração, é possível verificar a proteção contra vírus e ameaças, o firewall, o controle de aplicativos e navegador e outros recursos.</p>

        <h3>Verificação com Microsoft Defender</h3>
        <p>Nas opções de proteção contra vírus e ameaças, escolha o tipo de verificação apropriado. Uma verificação completa analisa uma área mais ampla do sistema. A verificação offline pode ajudar em determinados casos, pois reinicia o computador para examinar o sistema em um ambiente separado.</p>
        <p>Não execute ferramentas de remoção aleatórias encontradas em sites desconhecidos. Para incidentes graves, considere suporte especializado e preservação de evidências.</p>

        <h3>Gerenciador de Tarefas</h3>
        <p>Use <code>Ctrl + Shift + Esc</code> para abrir o Gerenciador de Tarefas. Verifique processos, consumo de CPU, memória, disco e rede. O nome de um processo, sozinho, não prova que ele seja malicioso.</p>

        <h3>Visualizador de Eventos</h3>
        <p>Execute <code>eventvwr.msc</code> para abrir o Visualizador de Eventos. Os logs de Sistema, Aplicativo e Segurança podem conter informações úteis, conforme a auditoria habilitada e as permissões do usuário.</p>

        <h3>Verificar o estado do firewall</h3>
        <p>No PowerShell, o comando <code>Get-NetFirewallProfile</code> permite consultar a configuração dos perfis do firewall do Windows. Para inspecionar regras, existem comandos como <code>Get-NetFirewallRule</code>. A disponibilidade e os resultados dependem das permissões e da configuração do sistema.</p>

        <h3>Consultar serviços e programas de inicialização</h3>
        <p>O Gerenciador de Tarefas apresenta aplicativos de inicialização e processos. O console de serviços, acessível por <code>services.msc</code>, permite consultar serviços instalados. Não desative serviços desconhecidos sem verificar sua finalidade e dependências.</p>

        <h3>Verificar integridade do Windows</h3>
        <p>Os comandos <code>sfc /scannow</code> e <code>DISM /Online /Cleanup-Image /RestoreHealth</code> ajudam a verificar ou reparar arquivos e componentes do Windows. Eles não são ferramentas específicas de detecção de malware e não substituem uma investigação de segurança.</p>

        <h3>Princípio de segurança ao usar ferramentas</h3>
        <p>Execute comandos administrativos apenas quando necessário, confira cuidadosamente o comando antes de executá-lo e compreenda seus efeitos. Ferramentas legítimas podem causar perda de dados ou interrupções se forem usadas incorretamente.</p>`
    },
    {
      title: "Segurança em suporte e manutenção técnica",
      summary: "Atendimento autorizado, proteção de dados e práticas responsáveis.",
      content: `
        <h3>Autorização e escopo</h3>
        <p>Antes de acessar um computador, conta ou rede de outra pessoa, confirme a autorização e o objetivo do atendimento. Acesso técnico não concede automaticamente permissão para consultar arquivos pessoais, mensagens, fotografias ou senhas.</p>

        <h3>Proteção de dados do cliente</h3>
        <ul>
          <li>Solicite somente os dados necessários ao serviço.</li>
          <li>Evite copiar arquivos pessoais sem autorização explícita.</li>
          <li>Não solicite nem registre senhas em texto aberto.</li>
          <li>Proteja mídias de backup e arquivos temporários criados durante o atendimento.</li>
          <li>Apague cópias de trabalho quando deixarem de ser necessárias, conforme o acordo e as obrigações aplicáveis.</li>
          <li>Não publique capturas de tela com informações pessoais ou identificadores do cliente.</li>
        </ul>

        <h3>Manutenção de computadores</h3>
        <p>Antes de formatar, reinstalar o sistema, alterar partições ou realizar procedimentos de recuperação, identifique os dados importantes e combine o que será feito com o proprietário. Sempre que possível, verifique o backup e sua possibilidade de restauração.</p>

        <h3>Acesso remoto</h3>
        <p>Utilize ferramentas legítimas e autorizadas, explique ao cliente o que será acessado e encerre a sessão ao concluir o serviço. Não deixe ferramentas de acesso remoto habilitadas sem necessidade, especialmente com senhas fracas ou sem autenticação multifator.</p>

        <h3>Registro do atendimento</h3>
        <p>Documente o problema informado, os testes realizados, as alterações autorizadas, os resultados e as recomendações. Guarde os registros em local com acesso restrito e evite incluir segredos desnecessários.</p>

        <h3>Ética profissional</h3>
        <p>Um técnico deve preservar a confidencialidade, agir dentro de sua competência, comunicar riscos e não acessar informações sem autorização. Quando houver suspeita de crime, fraude ou vazamento de dados, preserve os registros pertinentes e oriente o responsável a procurar os canais adequados.</p>`
    }
  ]
},


  
  "Programação": {
    icon: "💻",
    description: "Linguagens, lógica, desenvolvimento de software, bancos de dados e ferramentas.",
    topics: [
      {
        title: "Lógica de programação",
        summary: "Fundamentos para compreender e construir algoritmos em qualquer linguagem.",
        content: `
          <h3>O que é programação?</h3>
          <p>Programar é escrever instruções que um computador consegue interpretar e executar. Essas instruções podem realizar cálculos, processar informações, controlar dispositivos e automatizar tarefas.</p>

          <h3>Algoritmos</h3>
          <p>Um algoritmo é uma sequência organizada de passos para resolver um problema ou realizar uma tarefa. Ele pode ser descrito em linguagem natural, pseudocódigo ou fluxograma antes de ser implementado em uma linguagem de programação.</p>

          <h3>Variáveis e constantes</h3>
          <p>Uma variável é um nome associado a um valor utilizado pelo programa. Dependendo da linguagem, esse valor pode ser alterado durante a execução. Uma constante representa um valor que não deve ser modificado depois de definido, conforme as regras da linguagem.</p>

          <h3>Tipos de dados</h3>
          <ul>
            <li><b>Inteiro:</b> números sem parte decimal, como 10 e -3.</li>
            <li><b>Ponto flutuante:</b> números que representam valores fracionários, como 3.14.</li>
            <li><b>Texto (string):</b> sequências de caracteres, como "TechBook".</li>
            <li><b>Booleano:</b> valor lógico verdadeiro ou falso.</li>
            <li><b>Tipos compostos:</b> estruturas que agrupam valores, como listas, vetores, objetos e registros.</li>
          </ul>

          <h3>Operadores</h3>
          <p>Operadores permitem executar operações matemáticas, comparar valores e combinar condições. Entre os exemplos estão adição, subtração, multiplicação, divisão, igualdade, diferença, maior que, menor que, AND e OR. Os símbolos e as regras variam entre linguagens.</p>

          <h3>Estruturas de controle</h3>
          <ul>
            <li><b>Sequência:</b> executa instruções em uma ordem definida.</li>
            <li><b>Condição:</b> escolhe caminhos de execução com base em uma expressão, como em if e else.</li>
            <li><b>Repetição:</b> executa instruções várias vezes, usando estruturas como for e while.</li>
            <li><b>Desvio de fluxo:</b> instruções como break, continue e return alteram a continuidade da execução.</li>
          </ul>

          <h3>Funções</h3>
          <p>Funções agrupam instruções para realizar uma tarefa específica. Podem receber parâmetros, processar informações e devolver um resultado. A reutilização de funções reduz duplicação e facilita a manutenção.</p>

          <h3>Entrada e saída</h3>
          <p>A entrada permite receber informações, como dados digitados pelo usuário ou lidos de um arquivo. A saída apresenta resultados, grava informações ou envia dados para outro componente.</p>

          <h3>Erros e depuração</h3>
          <ul>
            <li><b>Sintaxe:</b> o código desrespeita as regras da linguagem.</li>
            <li><b>Execução:</b> um problema ocorre enquanto o programa está funcionando.</li>
            <li><b>Lógica:</b> o programa executa, mas produz um resultado incorreto.</li>
          </ul>
          <p>Para investigar erros, leia a mensagem completa, identifique a linha indicada, observe os valores envolvidos e verifique as hipóteses uma de cada vez. Um depurador permite acompanhar a execução, definir pontos de interrupção e inspecionar variáveis.</p>

          <h3>Complexidade e eficiência</h3>
          <p>A análise de algoritmos estuda o consumo de tempo e memória. A notação Big O descreve como esse consumo cresce conforme aumenta o volume de dados. Algoritmos mais simples nem sempre são os mais eficientes para grandes quantidades de informação.</p>`
      },
      {
        title: "Orientação a objetos",
        summary: "Classes, objetos, encapsulamento, herança, polimorfismo e composição.",
        content: `
          <h3>Conceito</h3>
          <p>Programação orientada a objetos (POO) é um paradigma que organiza o software em objetos que possuem dados e comportamentos. É utilizado em linguagens como Java, C#, C++ e Python, embora cada linguagem tenha suas próprias regras.</p>

          <h3>Classes e objetos</h3>
          <p>Uma classe define a estrutura e os comportamentos de determinado tipo de objeto. Um objeto é uma instância dessa classe, com seus próprios valores de estado.</p>

          <h3>Atributos e métodos</h3>
          <ul>
            <li><b>Atributos:</b> representam dados ou características de um objeto.</li>
            <li><b>Métodos:</b> definem operações e comportamentos associados a uma classe ou objeto.</li>
            <li><b>Construtores:</b> são mecanismos usados para inicializar objetos, com funcionamento específico em cada linguagem.</li>
          </ul>

          <h3>Encapsulamento</h3>
          <p>Consiste em organizar os dados e comportamentos de uma unidade e controlar como seu estado interno pode ser acessado ou alterado. Modificadores de acesso, métodos e propriedades ajudam a estabelecer essas regras.</p>

          <h3>Abstração</h3>
          <p>Abstrair significa destacar as características relevantes de um problema e esconder detalhes que não precisam ser conhecidos por quem utiliza determinado componente.</p>

          <h3>Herança</h3>
          <p>Permite definir uma classe com base em outra, reutilizando ou especializando comportamentos. Deve ser usada quando existe uma relação conceitual adequada entre os tipos, e não apenas para evitar repetir código.</p>

          <h3>Polimorfismo</h3>
          <p>Permite que diferentes tipos sejam utilizados por meio de uma interface ou contrato comum, mantendo implementações específicas. Isso facilita a criação de componentes extensíveis e reduz dependências desnecessárias.</p>

          <h3>Composição</h3>
          <p>É a construção de objetos complexos a partir de outros objetos. Em muitos projetos, a composição oferece maior flexibilidade do que uma hierarquia extensa de herança.</p>

          <h3>Interfaces e classes abstratas</h3>
          <p>Interfaces definem contratos de comportamento. Classes abstratas podem oferecer uma estrutura compartilhada e deixar algumas operações para as classes derivadas. A disponibilidade e as regras desses recursos dependem da linguagem.</p>

          <h3>Quando utilizar POO</h3>
          <p>É útil quando o domínio possui entidades, estados e responsabilidades que precisam ser organizados. Scripts pequenos, cálculos simples e transformações de dados podem ser resolvidos com funções e estruturas mais simples.</p>`
      },
      {
        title: "Git e GitHub",
        summary: "Histórico de alterações, versionamento, repositórios e colaboração.",
        content: `
          <h3>Git e GitHub são diferentes</h3>
          <p>Git é um sistema distribuído de controle de versões que registra alterações nos arquivos de um projeto. GitHub é uma plataforma de hospedagem de repositórios Git, com recursos de colaboração, revisão de código e automação.</p>

          <h3>Conceitos principais</h3>
          <ul>
            <li><b>Repositório:</b> contém arquivos e histórico de versões.</li>
            <li><b>Working tree:</b> arquivos do projeto no estado atual de trabalho.</li>
            <li><b>Staging area:</b> área que reúne as alterações selecionadas para o próximo commit.</li>
            <li><b>Commit:</b> registro de um conjunto de alterações no histórico.</li>
            <li><b>Branch:</b> linha de desenvolvimento independente.</li>
            <li><b>Merge:</b> integração de históricos ou alterações de branches.</li>
            <li><b>Remote:</b> referência a um repositório remoto, como um hospedado no GitHub.</li>
          </ul>

          <h3>Comandos frequentes</h3>
          <ul>
            <li><code>git init</code> — inicializa um repositório.</li>
            <li><code>git clone URL</code> — copia um repositório existente.</li>
            <li><code>git status</code> — mostra alterações e o estado dos arquivos.</li>
            <li><code>git add arquivo</code> — prepara um arquivo para o próximo commit.</li>
            <li><code>git add .</code> — prepara alterações no diretório atual e seus subdiretórios, respeitando as regras do Git.</li>
            <li><code>git commit -m "mensagem"</code> — registra as alterações preparadas.</li>
            <li><code>git log</code> — exibe o histórico de commits.</li>
            <li><code>git diff</code> — mostra diferenças entre versões ou estados dos arquivos.</li>
            <li><code>git branch</code> — lista branches locais.</li>
            <li><code>git switch nome</code> — muda para uma branch existente.</li>
            <li><code>git switch -c nome</code> — cria uma branch e muda para ela.</li>
            <li><code>git merge nome</code> — integra a branch indicada à branch atual.</li>
            <li><code>git pull</code> — busca e integra alterações remotas conforme a configuração.</li>
            <li><code>git push</code> — envia commits para o repositório remoto.</li>
          </ul>

          <h3>README e .gitignore</h3>
          <p>O README apresenta o objetivo do projeto, os requisitos e as instruções de uso. O arquivo .gitignore especifica arquivos e diretórios que o Git deve ignorar, como caches, arquivos temporários e configurações locais.</p>

          <h3>Conflitos</h3>
          <p>Um conflito pode ocorrer quando alterações incompatíveis precisam ser integradas. É necessário analisar os trechos conflitantes, decidir qual conteúdo deve permanecer e concluir a integração. Não aceite mudanças automaticamente sem verificar o resultado.</p>

          <h3>Boas práticas e segurança</h3>
          <ul>
            <li>Faça commits pequenos, com mensagens claras.</li>
            <li>Confira <code>git status</code> e <code>git diff</code> antes de registrar alterações.</li>
            <li>Não publique senhas, tokens, chaves privadas ou dados pessoais.</li>
            <li>Utilize .gitignore para evitar arquivos desnecessários, lembrando que ele não remove arquivos já rastreados.</li>
            <li>Antes de executar comandos destrutivos, confira quais arquivos e alterações serão afetados.</li>
          </ul>`
      },
      {
        title: "Estruturas de dados",
        summary: "Formas de organizar, armazenar e acessar informações.",
        content: `
          <h3>Conceito</h3>
          <p>Estruturas de dados organizam informações para facilitar operações como consulta, inserção, remoção, atualização e ordenação. A escolha depende do tipo de problema, do volume de dados e das operações mais frequentes.</p>

          <h3>Vetores e listas</h3>
          <p>Vetores geralmente armazenam elementos em posições indexadas e podem ter tamanho fixo ou características específicas conforme a linguagem. Listas dinâmicas permitem modificar a quantidade de elementos com mais flexibilidade.</p>

          <h3>Matrizes</h3>
          <p>São estruturas com duas ou mais dimensões, frequentemente usadas para representar tabelas, grades, imagens e dados organizados por linhas e colunas.</p>

          <h3>Pilhas</h3>
          <p>Seguem o princípio LIFO: o último elemento inserido é o primeiro a ser removido. São úteis para chamadas de funções, histórico de operações e mecanismos de desfazer.</p>

          <h3>Filas</h3>
          <p>Seguem o princípio FIFO: o primeiro elemento inserido é o primeiro a ser removido. São utilizadas em filas de processamento, tarefas agendadas e sistemas de atendimento.</p>

          <h3>Conjuntos e mapas</h3>
          <p>Conjuntos armazenam elementos distintos de acordo com as regras de igualdade da linguagem. Mapas associam chaves a valores e facilitam a recuperação de informações por uma chave.</p>

          <h3>Árvores e grafos</h3>
          <p>Árvores representam relações hierárquicas, como diretórios e estruturas de busca. Grafos representam conexões entre entidades, como rotas, redes de computadores e relações entre páginas.</p>

          <h3>Critérios de escolha</h3>
          <p>Considere a frequência de consultas, inserções e remoções, a necessidade de preservar a ordem, o uso de memória e as garantias oferecidas pela implementação. Uma estrutura adequada pode simplificar o código e melhorar o desempenho.</p>`
      },
      {
        title: "Bancos de dados e SQL",
        summary: "Persistência, modelagem de dados e consultas a bancos relacionais.",
        content: `
          <h3>O que é um banco de dados?</h3>
          <p>É um sistema organizado para armazenar, consultar e administrar informações. Um sistema gerenciador de banco de dados (SGBD) oferece mecanismos para acesso, integridade, concorrência e recuperação dos dados.</p>

          <h3>Bancos relacionais</h3>
          <p>Organizam os dados em tabelas compostas por linhas e colunas. Chaves primárias identificam registros; chaves estrangeiras representam relacionamentos entre tabelas.</p>

          <h3>SQL</h3>
          <p>SQL é uma linguagem utilizada principalmente para definir estruturas, consultar e modificar dados em bancos relacionais. Os recursos disponíveis podem variar entre PostgreSQL, MySQL, SQL Server, SQLite e outros sistemas.</p>

          <h3>Comandos comuns</h3>
          <ul>
            <li><code>SELECT</code> — consulta dados.</li>
            <li><code>INSERT</code> — insere registros.</li>
            <li><code>UPDATE</code> — modifica registros existentes.</li>
            <li><code>DELETE</code> — remove registros.</li>
            <li><code>CREATE TABLE</code> — cria uma tabela.</li>
            <li><code>ALTER TABLE</code> — altera a estrutura de uma tabela.</li>
          </ul>

          <h3>Relacionamentos e normalização</h3>
          <p>Relacionamentos conectam dados relacionados entre tabelas. A normalização organiza as informações para reduzir redundâncias e anomalias de atualização, de acordo com as necessidades do sistema.</p>

          <h3>Índices e transações</h3>
          <p>Índices podem acelerar consultas, mas ocupam espaço e aumentam o custo de algumas alterações. Transações agrupam operações que precisam ser tratadas como uma unidade. Em sistemas relacionais, as propriedades ACID descrevem garantias de atomicidade, consistência, isolamento e durabilidade.</p>

          <h3>Segurança</h3>
          <p>Utilize parâmetros em consultas construídas a partir de dados externos para reduzir o risco de injeção SQL. Aplique permissões mínimas, proteja credenciais e mantenha cópias de segurança testadas.</p>`
      },
      {
        title: "APIs e comunicação entre sistemas",
        summary: "Como aplicações trocam dados e disponibilizam funcionalidades.",
        content: `
          <h3>O que é uma API?</h3>
          <p>Uma interface de programação de aplicações (API) define como um software pode solicitar funcionalidades ou dados de outro componente. APIs podem ser locais, disponibilizadas por bibliotecas ou acessadas pela rede.</p>

          <h3>HTTP e HTTPS</h3>
          <p>HTTP é um protocolo utilizado para comunicação na Web. HTTPS protege essa comunicação por meio de TLS, ajudando a garantir confidencialidade e integridade dos dados transmitidos e a autenticar o servidor conforme os certificados utilizados.</p>

          <h3>Métodos HTTP</h3>
          <ul>
            <li><b>GET:</b> solicita a representação de um recurso.</li>
            <li><b>POST:</b> envia dados para processamento ou criação de recursos, conforme a API.</li>
            <li><b>PUT:</b> normalmente substitui ou cria a representação de um recurso.</li>
            <li><b>PATCH:</b> aplica alterações parciais a um recurso.</li>
            <li><b>DELETE:</b> solicita a remoção de um recurso.</li>
          </ul>

          <h3>Status HTTP</h3>
          <ul>
            <li><b>200:</b> solicitação concluída com sucesso.</li>
            <li><b>201:</b> recurso criado.</li>
            <li><b>400:</b> solicitação inválida.</li>
            <li><b>401:</b> autenticação necessária ou inválida.</li>
            <li><b>403:</b> acesso proibido.</li>
            <li><b>404:</b> recurso não encontrado.</li>
            <li><b>500:</b> erro interno do servidor.</li>
          </ul>

          <h3>JSON</h3>
          <p>JSON é um formato textual muito usado para intercambiar dados. Suporta objetos, listas, strings, números, valores booleanos e null. A aplicação deve validar os dados recebidos antes de utilizá-los.</p>

          <h3>Autenticação e autorização</h3>
          <p>Autenticação verifica a identidade de quem solicita acesso. Autorização determina quais ações essa identidade pode realizar. Uma API deve validar permissões no servidor, mesmo que a interface esconda funcionalidades.</p>

          <h3>Tratamento de falhas</h3>
          <p>Uma integração precisa considerar tempo limite, indisponibilidade, respostas inválidas, limites de requisições e tentativas repetidas. Repetir uma operação indiscriminadamente pode causar duplicação de efeitos; a estratégia deve considerar o tipo de solicitação.</p>`
      },
      {
        title: "Arquitetura, organização e qualidade de código",
        summary: "Como estruturar projetos para facilitar manutenção, testes e evolução.",
        content: `
          <h3>Separação de responsabilidades</h3>
          <p>Um projeto bem organizado separa componentes com funções distintas. Em uma aplicação Web, por exemplo, apresentação, regras de negócio e acesso a dados podem ter responsabilidades diferentes.</p>

          <h3>Módulos</h3>
          <p>Módulos dividem o código em partes com interfaces definidas. Isso facilita a reutilização, a compreensão e a manutenção. Evite criar dependências circulares e módulos que concentrem responsabilidades sem relação entre si.</p>

          <h3>Coesão e acoplamento</h3>
          <p>Coesão descreve o quanto as responsabilidades de um componente estão relacionadas. Acoplamento descreve o nível de dependência entre componentes. Em geral, é desejável alta coesão e dependências explícitas e controladas.</p>

          <h3>Legibilidade</h3>
          <p>Nomes claros, funções com objetivos definidos, formatação consistente e comentários úteis tornam o código mais fácil de compreender. Comentários devem explicar decisões ou contextos que não sejam evidentes, e não apenas repetir a instrução escrita.</p>

          <h3>Tratamento de erros</h3>
          <p>Falhas previsíveis devem ser tratadas de maneira adequada, com mensagens úteis e sem expor informações confidenciais. Não esconda erros importantes silenciosamente nem suponha que operações externas sempre terão sucesso.</p>

          <h3>Testes de software</h3>
          <ul>
            <li><b>Teste unitário:</b> verifica uma unidade pequena, como uma função.</li>
            <li><b>Teste de integração:</b> verifica a interação entre componentes.</li>
            <li><b>Teste de ponta a ponta:</b> verifica um fluxo completo da aplicação.</li>
            <li><b>Regressão:</b> verifica se mudanças introduziram falhas em funcionalidades existentes.</li>
          </ul>

          <h3>Documentação e manutenção</h3>
          <p>Registre como configurar, executar e utilizar o projeto, além de requisitos importantes e decisões técnicas. Antes de modificar código existente, compreenda sua estrutura, identifique dependências e mantenha uma forma de recuperar a versão anterior.</p>`
      },
      {
        title: "Segurança no desenvolvimento",
        summary: "Práticas para reduzir vulnerabilidades e proteger dados e aplicações.",
        content: `
          <h3>Validação de entrada</h3>
          <p>Dados recebidos de usuários, arquivos, APIs e bancos externos devem ser tratados como não confiáveis. Valide formato, tamanho, tipo e limites esperados no ponto apropriado do sistema.</p>

          <h3>Injeção de comandos e consultas</h3>
          <p>Evite concatenar diretamente dados externos em comandos SQL ou comandos do sistema operacional. Prefira consultas parametrizadas e APIs seguras. Quando necessário executar processos externos, use argumentos separados e permissões limitadas.</p>

          <h3>Autenticação e autorização</h3>
          <p>Verifique a identidade do usuário e as permissões em cada operação protegida. Não confie somente em controles da interface, como botões ocultos ou páginas inacessíveis pelo menu.</p>

          <h3>Senhas e segredos</h3>
          <p>Senhas de usuários devem ser armazenadas com funções específicas de derivação de senha, como Argon2id, scrypt ou bcrypt, com parâmetros adequados. Chaves de API e outros segredos não devem ser gravados diretamente no código ou enviados ao repositório.</p>

          <h3>Dados pessoais</h3>
          <p>Armazene apenas os dados necessários para a finalidade do sistema. Restrinja o acesso, evite registrar informações sensíveis nos logs e estabeleça procedimentos de retenção e exclusão adequados.</p>

          <h3>Dependências</h3>
          <p>Bibliotecas externas podem conter falhas ou receber atualizações importantes. Mantenha dependências sob controle, avalie a origem dos pacotes e aplique atualizações de segurança de forma planejada.</p>

          <h3>Erros e logs</h3>
          <p>Mensagens exibidas ao usuário devem ser úteis sem revelar caminhos internos, credenciais ou detalhes de infraestrutura. Logs devem ajudar no diagnóstico e na auditoria, sem armazenar segredos desnecessários.</p>

          <h3>Princípio do menor privilégio</h3>
          <p>Conceda a cada usuário, processo e serviço apenas as permissões necessárias. Combine isso com atualizações, backups, revisão de código e testes de segurança proporcionais ao risco da aplicação.</p>`
      }
    ]
  }
};


const LANGUAGES = [
  { name: "Java", key: "java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", kind: "Aplicações e backend" },
  { name: "Python", key: "python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", kind: "Automação e dados" },
  { name: "JavaScript", key: "javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", kind: "Web e aplicações" },
  { name: "HTML", key: "html", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", kind: "Estrutura de páginas" },
  { name: "CSS", key: "css", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", kind: "Estilo e layout" },
  { name: "C", key: "c", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", kind: "Programação de sistemas" },
  { name: "C++", key: "cpp", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", kind: "Software de alto desempenho" },
  { name: "C#", key: "csharp", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", kind: "Aplicações .NET" },
  { name: "PHP", key: "php", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", kind: "Desenvolvimento web" },
  { name: "SQL", key: "sql", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", kind: "Bancos de dados" },
  { name: "Kotlin", key: "kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", kind: "Aplicativos Android" },
  { name: "TypeScript", key: "typescript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", kind: "JavaScript tipado" },
  { name: "Go", key: "go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", kind: "Serviços e backend" },
  { name: "Rust", key: "rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg", kind: "Sistemas e segurança" },
  { name: "Bash", key: "bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", kind: "Automação no terminal" },
  { name: "PowerShell", key: "powershell", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg", kind: "Administração Windows" }
];

const LANGUAGE_TOPICS = [
  {
    title: "Sintaxe, variáveis e tipos",
    text: `SINTAXE
Sintaxe é o conjunto de regras que determina como as instruções devem ser escritas em uma linguagem. Um código pode ter uma lógica correta e ainda assim falhar se desrespeitar essas regras.

VARIÁVEIS
Variáveis são nomes associados a valores utilizados durante a execução de um programa. Podem representar nomes, idades, preços, resultados e outras informações. As regras de declaração variam conforme a linguagem.

CONSTANTES
Constantes representam valores que não devem ser reatribuídos depois de definidos, conforme as regras da linguagem. São úteis para configurações e informações que precisam permanecer estáveis.

TIPOS DE DADOS
• Inteiro: números inteiros, como 10 e -5.
• Ponto flutuante: números com parte fracionária, como 3.14.
• Texto: sequências de caracteres, como "TechBook".
• Booleano: valores lógicos verdadeiro e falso.
• Tipos compostos: estruturas que agrupam dados, como listas, objetos e mapas.

TIPAGEM ESTÁTICA E DINÂMICA
Na tipagem estática, os tipos são verificados principalmente durante a compilação ou análise do programa. Na tipagem dinâmica, são verificados durante a execução. Existem diferenças entre inferência de tipos, declaração explícita e conversões.

CONVERSÃO DE TIPOS
Converter um valor significa transformá-lo de um tipo para outro. Por exemplo, transformar um texto numérico em número. Nem toda conversão é válida ou preserva o valor original.

ESCOPO E TEMPO DE VIDA
Escopo define onde um nome pode ser acessado no código. Tempo de vida indica por quanto tempo um valor ou objeto permanece disponível.` 
  },
  {
    title: "Operadores e expressões",
    text: `EXPRESSÕES
Uma expressão combina valores, variáveis, chamadas e operadores para produzir um resultado numérico, textual, lógico ou de outro tipo.

OPERADORES ARITMÉTICOS
São utilizados em cálculos: adição, subtração, multiplicação, divisão e resto da divisão. O comportamento da divisão entre inteiros e da divisão por zero varia conforme a linguagem.

OPERADORES DE COMPARAÇÃO
Comparam valores usando relações como igualdade, diferença, maior que e menor que. Muitas comparações produzem um resultado verdadeiro ou falso.

OPERADORES LÓGICOS
AND representa uma condição em que as partes precisam ser verdadeiras. OR permite que pelo menos uma parte seja verdadeira. NOT inverte um valor lógico. Os símbolos utilizados dependem da linguagem.

ATRIBUIÇÃO
A atribuição associa ou atualiza um valor em uma variável. Não deve ser confundida com a comparação de igualdade.

PRECEDÊNCIA E ASSOCIATIVIDADE
Precedência define quais operações são avaliadas primeiro. Associatividade determina como operações de mesma precedência são agrupadas. Parênteses ajudam a deixar a intenção explícita.

CURTO-CIRCUITO
Em algumas expressões lógicas, a avaliação termina assim que o resultado pode ser determinado. Esse comportamento pode afetar a execução de funções presentes na expressão.

PRECISÃO NUMÉRICA
Números de ponto flutuante podem apresentar pequenas diferenças de representação. Para valores monetários, considere tipos decimais ou números inteiros em unidades mínimas, conforme os requisitos do sistema.`
  },
  {
    title: "Condições e repetição",
    text: `ESTRUTURAS CONDICIONAIS
Condições permitem escolher qual parte do programa será executada. Estruturas como if, else, switch e match selecionam caminhos conforme as regras de cada linguagem.

CONDIÇÕES COMPOSTAS
É possível combinar verificações com operadores lógicos. Organize as condições para que sejam fáceis de compreender e evite expressões excessivamente longas.

LAÇOS DE REPETIÇÃO
• for: percorre intervalos, coleções ou executa repetições controladas.
• while: repete enquanto uma condição for verdadeira.
• do-while: nas linguagens que oferecem essa estrutura, verifica a condição depois da primeira execução.
• Laços por coleção: percorrem elementos de listas, vetores e outras coleções.

CONTADORES E ACUMULADORES
Um contador acompanha quantidades ou repetições. Um acumulador reúne resultados progressivamente, como uma soma. A inicialização e a atualização precisam estar corretas.

CONTROLE DO FLUXO
break pode interromper um laço. continue pode avançar para a próxima repetição. return encerra uma função e pode devolver um resultado. A disponibilidade varia conforme a linguagem.

LAÇOS INFINITOS
Um laço infinito acontece quando a condição de encerramento nunca é alcançada ou quando a repetição foi projetada para continuar. Em programas interativos, isso pode ser intencional, mas deve existir uma forma adequada de encerrar o processo.

LEGIBILIDADE E EFICIÊNCIA
Verifique os limites dos índices, as condições de parada e as alterações feitas durante a repetição. Em coleções grandes, considere o custo das operações realizadas a cada ciclo.`
  },
  {
    title: "Funções e organização",
    text: `O QUE É UMA FUNÇÃO?
Uma função agrupa instruções que executam uma tarefa identificável. Ela pode receber dados, realizar operações e devolver um resultado.

PARÂMETROS E ARGUMENTOS
Parâmetros são os nomes definidos na declaração da função. Argumentos são os valores fornecidos quando ela é chamada. Algumas linguagens oferecem parâmetros opcionais, nomeados ou com valores padrão.

RETORNO
O retorno entrega um resultado ao código que chamou a função ou encerra sua execução. Uma função também pode executar uma ação sem devolver um valor útil.

ESCOPO LOCAL E GLOBAL
Variáveis locais são acessíveis dentro de determinado contexto. Variáveis globais ou de módulo podem ser acessadas em regiões mais amplas. O excesso de estado global dificulta a compreensão e os testes.

MODULARIZAÇÃO
Separar o código em funções e módulos divide problemas grandes em partes menores. Cada componente deve ter uma responsabilidade compreensível e uma interface clara.

RECURSÃO
Uma função recursiva chama a si mesma, diretamente ou por meio de outras funções. Ela precisa de uma condição de encerramento e de um avanço em direção a essa condição para evitar chamadas intermináveis.

BIBLIOTECAS E APIs
Bibliotecas fornecem funcionalidades reutilizáveis, como manipulação de textos, datas, arquivos e redes. Uma API define como essas funcionalidades podem ser utilizadas. Consulte a documentação para conhecer parâmetros, retornos e limitações.

RESPONSABILIDADE ÚNICA
Prefira funções com objetivos claros e resultados previsíveis. Funções que misturam muitas tarefas independentes são mais difíceis de compreender, testar e modificar.`
  },
  {
    title: "Estruturas de dados",
    text: `FINALIDADE
Estruturas de dados organizam informações para facilitar seu armazenamento e processamento. A escolha influencia a clareza do código, o uso de memória e o desempenho.

ARRAYS E VETORES
Armazenam elementos em posições indexadas. Podem ter tamanho fixo ou permitir redimensionamento, dependendo da linguagem. É importante respeitar os limites válidos dos índices.

LISTAS
Representam sequências de elementos e podem oferecer operações para inserir, remover, localizar e percorrer valores. O custo dessas operações depende da implementação.

PILHAS E FILAS
Pilhas seguem LIFO: o último elemento inserido é o primeiro removido. Filas seguem FIFO: o primeiro elemento inserido é o primeiro removido. São utilizadas em históricos e processamento de tarefas.

CONJUNTOS
Representam coleções de elementos distintos. São úteis para eliminar duplicatas e verificar se um elemento está presente.

MAPAS E DICIONÁRIOS
Associam chaves a valores. Permitem consultar informações por uma chave, como localizar um cadastro por identificador. A ordem dos elementos depende da implementação.

ÁRVORES E GRAFOS
Árvores representam relações hierárquicas e aparecem em sistemas de arquivos e estruturas de busca. Grafos representam entidades conectadas, como rotas, redes e relacionamentos.

COMPLEXIDADE
A notação Big O descreve como o custo de um algoritmo cresce conforme aumenta a entrada. Uma operação rápida em uma coleção pequena pode se tornar cara em uma coleção grande.`
  },
  {
    title: "Erros e depuração",
    text: `ERRO DE SINTAXE
Ocorre quando o código não respeita as regras da linguagem. Parênteses ausentes, delimitadores incorretos e estruturas incompletas são exemplos comuns.

ERRO DE EXECUÇÃO
Acontece durante a execução do programa. Pode ser provocado por acesso inválido, arquivo ausente, falha de comunicação ou dado inesperado.

ERRO LÓGICO
O programa executa, mas o resultado não corresponde ao esperado. Para encontrar a causa, verifique a lógica, os dados e as condições utilizadas.

LEITURA DE MENSAGENS
Leia a mensagem completa e identifique o tipo de erro, a localização indicada e a sequência de chamadas, quando disponível. A causa pode estar em uma linha anterior àquela em que o problema foi detectado.

DEPURADOR
Um depurador permite pausar o programa, executar instruções passo a passo e inspecionar variáveis. Breakpoints e a pilha de chamadas ajudam a entender o fluxo de execução.

REPRODUÇÃO DO PROBLEMA
Determine quais condições fazem o erro acontecer. Um caso reproduzível facilita a investigação e permite verificar se a correção resolveu a causa.

REGISTRO DE EVENTOS
Logs registram acontecimentos relevantes durante a execução. Evite registrar senhas, tokens ou informações pessoais desnecessárias.

CORREÇÃO CONTROLADA
Altere uma hipótese por vez e verifique o resultado. Mudanças grandes e simultâneas dificultam identificar a causa. O controle de versões ajuda a comparar alterações e recuperar estados anteriores.`
  },
  {
    title: "Arquivos, bibliotecas e projetos",
    text: `ORGANIZAÇÃO DE ARQUIVOS
Projetos podem separar código-fonte, testes, documentação, configurações, recursos e arquivos gerados. Uma estrutura consistente facilita a manutenção.

LEITURA E GRAVAÇÃO
Programas podem ler e escrever arquivos de texto, dados estruturados e arquivos binários. É importante definir caminhos corretamente, escolher a codificação e tratar problemas de permissão, espaço ou arquivos ausentes.

GERENCIAMENTO DE ARQUIVOS
Operações de gravação podem substituir dados ou acrescentar conteúdo. Antes de modificar arquivos importantes, avalie o risco de perda e a necessidade de cópias de segurança.

BIBLIOTECAS E DEPENDÊNCIAS
Bibliotecas oferecem recursos desenvolvidos por terceiros ou pela própria equipe. Verifique a compatibilidade, a origem e a documentação das dependências utilizadas.

GERENCIADORES DE PACOTES
Ferramentas instalam bibliotecas, resolvem dependências e podem registrar versões. Exemplos: npm no ecossistema JavaScript e pip no Python.

AMBIENTES DE DESENVOLVIMENTO
Um projeto pode depender de uma versão específica da linguagem, ferramentas externas e variáveis de ambiente. Registrar os requisitos ajuda a reproduzir o ambiente em outro computador.

CONFIGURAÇÕES E SEGREDOS
Configurações podem variar entre desenvolvimento, teste e produção. Credenciais e chaves privadas não devem ser incorporadas diretamente ao código versionado.

DOCUMENTAÇÃO
Um README útil informa o objetivo do projeto, os requisitos, a instalação, a execução e os principais comandos. Registre também limitações conhecidas e procedimentos de manutenção.`
  },
  {
    title: "Boas práticas e segurança",
    text: `LEGIBILIDADE
Utilize nomes descritivos, formatação consistente e funções com responsabilidades claras. Código fácil de ler reduz o tempo necessário para investigar erros.

VALIDAÇÃO DE DADOS
Dados recebidos de usuários, arquivos, formulários ou serviços externos não devem ser considerados confiáveis automaticamente. Verifique formato, tamanho, tipo e limites.

TRATAMENTO DE ERROS
Trate falhas previsíveis de forma apropriada. Mensagens destinadas ao usuário devem ser compreensíveis, e detalhes técnicos devem ser registrados sem expor segredos.

TESTES
Testes ajudam a verificar o comportamento esperado. Testes unitários verificam componentes isolados; testes de integração verificam a comunicação entre componentes; testes de ponta a ponta verificam fluxos completos.

CONTROLE DE VERSÕES
Git acompanha alterações, permite revisar diferenças e recuperar versões anteriores. Commits pequenos e mensagens claras facilitam a compreensão do histórico.

SEGURANÇA DE CREDENCIAIS
Nunca coloque senhas, tokens, chaves privadas ou credenciais em repositórios públicos. Se um segredo for exposto, revogue ou substitua a credencial e avalie o histórico.

INJEÇÃO DE CÓDIGO
Evite construir comandos SQL ou comandos do sistema por concatenação de dados externos. Utilize consultas parametrizadas, interfaces seguras e permissões limitadas.

DEPENDÊNCIAS E ATUALIZAÇÕES
Bibliotecas podem apresentar vulnerabilidades. Mantenha as dependências sob controle e avalie compatibilidade e segurança antes de atualizar.

PRIVACIDADE
Recolha e armazene somente os dados necessários. Restrinja o acesso e evite incluir informações pessoais desnecessárias em logs ou arquivos públicos.

MANUTENÇÃO CONTÍNUA
Revise o código, mantenha a documentação atualizada e verifique se as alterações não quebraram funcionalidades existentes.`
  },
  {
    title: "Compilação, interpretação e execução",
    text: `CÓDIGO-FONTE
É o conjunto de instruções escrito pelo desenvolvedor. A linguagem e o ambiente utilizam mecanismos específicos para traduzir e executar essas instruções.

COMPILAÇÃO
Um compilador traduz código para outra representação, como código de máquina ou código intermediário. A compilação pode identificar erros antes da execução e gerar arquivos utilizados posteriormente.

INTERPRETAÇÃO
Um interpretador executa instruções a partir de uma representação do programa. Muitas linguagens combinam interpretação, compilação intermediária e compilação durante a execução.

MÁQUINA VIRTUAL E RUNTIME
Uma máquina virtual executa uma representação intermediária sob regras próprias. Um runtime fornece recursos necessários durante a execução, como bibliotecas e gerenciamento de memória.

BIBLIOTECAS E LIGAÇÃO
Programas podem utilizar bibliotecas externas ou componentes compartilhados. O processo de ligação resolve referências entre partes do programa, durante a compilação ou em tempo de execução.

MEMÓRIA
Durante a execução, o programa utiliza memória para armazenar valores, objetos e informações de controle. Algumas linguagens exigem gerenciamento explícito; outras utilizam mecanismos automáticos, como coleta de lixo.

AMBIENTE E PLATAFORMA
O comportamento de um programa pode depender do sistema operacional, da arquitetura do processador, das versões das bibliotecas e das variáveis de ambiente. Identificar essas dependências ajuda a diagnosticar problemas.`
  },
  {
    title: "Programação Web e arquitetura cliente-servidor",
    text: `CLIENTE E SERVIDOR
O cliente solicita recursos ou operações, e o servidor processa as solicitações. Um navegador pode atuar como cliente de uma aplicação Web.

FRONT-END
É a parte da aplicação com a qual o usuário interage. Na Web, HTML estrutura o conteúdo, CSS define a apresentação e JavaScript implementa comportamentos e interações.

BACK-END
É a parte responsável por regras de negócio, autenticação, acesso a dados e comunicação com outros serviços. Pode ser desenvolvida em diferentes linguagens e frameworks.

REQUISIÇÕES E RESPOSTAS
Aplicações Web utilizam protocolos como HTTP para trocar informações. Uma requisição pode conter método, caminho e cabeçalhos; a resposta inclui um status e pode conter conteúdo.

ESTADO E SESSÕES
HTTP não mantém, por si só, um estado permanente entre requisições. Sistemas podem utilizar sessões, cookies, tokens ou armazenamento no cliente, cada qual com características e riscos diferentes.

ARMAZENAMENTO
Dados podem ficar no navegador, em um servidor, em arquivos ou em bancos de dados. O local adequado depende da sensibilidade, da persistência, da sincronização e do controle de acesso.

RESPONSABILIDADES DO SERVIDOR
O servidor deve validar os dados recebidos, aplicar regras de negócio e verificar permissões. Não é seguro confiar apenas nas validações executadas no navegador.

DESEMPENHO E DISPONIBILIDADE
O tempo de resposta depende do processamento, da rede, do banco de dados e de serviços externos. Monitoramento, tratamento de falhas e cache bem planejado podem melhorar a confiabilidade.`
  }
];

function escapeHTML(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatTopicText(text) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map(block => {
      const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
      let html = "";

      const first = lines[0];
      if (first === first.toUpperCase() && !first.startsWith("•") && first.length < 60) {
        html += `<h4 class="topic-subtitle">${escapeHTML(first)}</h4>`;
        lines.shift();
      }

      const bullets = lines.filter(l => l.startsWith("•"));
      const normal = lines.filter(l => !l.startsWith("•"));

      if (normal.length) {
        html += `<p class="topic-text">${escapeHTML(normal.join(" "))}</p>`;
      }
      if (bullets.length) {
        html += `<ul class="topic-list">${bullets
          .map(b => `<li>${escapeHTML(b.replace("•", "").trim())}</li>`)
          .join("")}</ul>`;
      }
      return html;
    })
    .join("");
}

const STORAGE_KEY = "techbook-cadernos-v1";
const SETTINGS_KEY = "techbook-settings-v1";

const DEFAULT_SETTINGS = {
  theme: "dark",
  font: "15",
  compact: false,
  showReference: true,
  confirmDelete: true
};

let settings = { ...DEFAULT_SETTINGS, ...loadJSON(SETTINGS_KEY, {}) };
let notes = loadJSON(STORAGE_KEY, []);
let currentView = "home";
let currentArea = "";
let currentLanguage = "";
let previousView = "home";
let searchQuery = "";
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const pageContent = $("#pageContent");


function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error("Não foi possível ler os dados:", error);
    return fallback;
  }
}



function saveNotes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

    if (window.techbookSync) {
      window.techbookSync.queueSync();
    }

    return true;
  } catch (error) {
    showToast("Não foi possível salvar. Verifique o espaço disponível no navegador.");
    return false;
  }
}



function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    applySettings();
    return true;
  } catch (error) {
    showToast("Não foi possível salvar as configurações.");
    return false;
  }
}


function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function applySettings() {
  document.body.classList.toggle("light-theme", settings.theme === "light");
  document.body.classList.toggle("compact", Boolean(settings.compact));
  document.documentElement.style.setProperty("--font-size", `${Number(settings.font) || 15}px`);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function updateBreadcrumb(text) {
  $("#breadcrumbCurrent").textContent = text;
}

function setActiveNav() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const activeView = item.dataset.view === currentView && !currentArea;
    const activeArea = item.dataset.area === currentArea;
    item.classList.toggle("active", activeView || activeArea);
  });
}

function navigate(view) {
  currentView = view;
  currentArea = "";
  currentLanguage = "";
  $("#sidebar").classList.remove("open");
  render();
}

function openArea(area) {
  if (!AREAS[area]) return;
  previousView = currentView;
  currentView = "area";
  currentArea = area;
  currentLanguage = "";
  $("#sidebar").classList.remove("open");
  render();
}

function openLanguage(language) {
  previousView = currentView;
  currentView = "language";
  currentArea = "Programação";
  currentLanguage = language;
  render();
}

function goBack() {
  if (currentView === "topic" && currentArea) {
    currentView = currentArea === "Programação" && currentLanguage ? "language" : "area";
  } else if (currentView === "language") {
    currentView = "area";
    currentLanguage = "";
  } else {
    currentView = "home";
    currentArea = "";
  }
  render();
}

function createSeedNotes() {
  if (notes.length) return;

  Object.entries(AREAS).forEach(([area, data]) => {
    data.topics.forEach((topic) => {
      notes.push({
        id: `ref-${area}-${topic.title}`.replace(/[^a-zA-Z0-9-]/g, "-"),
        title: topic.title,
        area,
        language: "",
        type: "referencia",
        content: topic.content,
        favorite: false,
        updatedAt: new Date().toISOString()
      });
    });
  });

  saveNotes();
}

function countReferences(area) {
  return notes.filter((note) => note.area === area && note.type === "referencia").length;
}

function countPersonalNotes() {
  return notes.filter((note) => note.type !== "referencia").length;
}

function render() {
  applySettings();
  setActiveNav();

  if (currentView === "home") {
    updateBreadcrumb("Visão geral");
    renderHome();
  } else if (currentView === "area") {
    updateBreadcrumb(currentArea);
    renderArea(currentArea);
  } else if (currentView === "language") {
    updateBreadcrumb(currentLanguage);
    renderLanguage(currentLanguage);
  } else if (currentView === "topic") {
    updateBreadcrumb("Leitura");
    renderTopic();
  } else if (currentView === "notes") {
    updateBreadcrumb("Minhas anotações");
    renderNotes(notes.filter((note) => note.type !== "referencia"), "Minhas anotações");
  } else if (currentView === "favorites") {
    updateBreadcrumb("Favoritos");
    renderNotes(notes.filter((note) => note.favorite), "Favoritos");
  } else if (currentView === "search") {
    updateBreadcrumb("Pesquisa");
    renderSearchResults();
  } else if (currentView === "settings") {
    updateBreadcrumb("Configurações");
    renderSettings();
  }
}

function renderHome() {
  const personalCount = countPersonalNotes();
  const totalReferences = notes.filter((note) => note.type === "referencia").length;

  pageContent.innerHTML = `
    <section class="hero">
      <span class="eyebrow">SEU ESPAÇO DE APRENDIZADO</span>
      <h1>Seu conhecimento, organizado.</h1>
      <p>Uma biblioteca técnica para consultar conceitos importantes de tecnologia e manter, em separado, suas anotações de cursos, livros e estudos.</p>
      <div class="hero-actions">
        <button class="primary-btn" data-action="new-note">＋ Nova anotação</button>
        <button class="secondary-btn" data-view="notes">Abrir meu caderno →</button>
      </div>
    </section>

    <div class="stats-grid">
      <div class="stat-card"><strong>${Object.keys(AREAS).length}</strong><span>Áreas de tecnologia</span></div>
      <div class="stat-card"><strong>${totalReferences}</strong><span>Materiais de referência</span></div>
      <div class="stat-card"><strong>${personalCount}</strong><span>Anotações pessoais</span></div>
    </div>

    <div class="section-heading"><h2>Explore as áreas</h2><small>Biblioteca técnica</small></div>
    <div class="area-grid">
      ${Object.entries(AREAS).map(([name, area]) => `
        <button class="area-card" data-area="${escapeHTML(name)}">
          <div class="area-icon">${area.icon}</div>
          <h3>${escapeHTML(name)}</h3>
          <p>${escapeHTML(area.description)}</p>
          <span class="card-meta">${countReferences(name)} tópicos de referência</span>
          <span class="card-arrow">→</span>
        </button>`).join("")}
    </div>

    <div class="section-heading"><h2>Programação por linguagem</h2><small>${LANGUAGES.length} tecnologias</small></div>
    <div class="language-grid">
      ${LANGUAGES.slice(0, 8).map(languageCard).join("")}
    </div>
    <p style="margin-top:15px"><button class="text-link" data-area="Programação">Ver todas as linguagens →</button></p>

    <div class="section-heading"><h2>Continue seus estudos</h2><small>Seus registros</small></div>
    ${renderRecentNotes()}
  `;
}

function languageCard(language) {
  return `
    <button class="language-card" data-language="${escapeHTML(language.name)}">
      <span class="language-logo">
        <img src="${escapeHTML(language.logo)}" alt="Logo ${escapeHTML(language.name)}"
          loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='💻'">
      </span>
      <span><strong>${escapeHTML(language.name)}</strong><small>${escapeHTML(language.kind)}</small></span>
    </button>`;
}

function renderRecentNotes() {
  const recent = notes.filter((note) => note.type !== "referencia")
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 3);

  if (!recent.length) {
    return `<div class="empty-state"><span>📘</span><h3>Seu caderno está pronto</h3><p>Crie anotações sobre o que estiver aprendendo em livros e cursos.</p><button class="primary-btn" data-action="new-note">Criar primeira anotação</button></div>`;
  }
  return `<div class="notes-grid">${recent.map(noteCard).join("")}</div>`;
}

function renderArea(areaName) {
  const area = AREAS[areaName];
  if (!area) return navigate("home");

  const isProgramming = areaName === "Programação";

  pageContent.innerHTML = `
    <div class="page-intro">
      <span class="eyebrow">BIBLIOTECA TÉCNICA</span>
      <h1>${area.icon} ${escapeHTML(areaName)}</h1>
      <p>${escapeHTML(area.description)}</p>
    </div>
    ${isProgramming ? `
      <div class="section-heading"><h2>Linguagens e tecnologias</h2><small>Selecione para estudar</small></div>
      <div class="language-grid">${LANGUAGES.map(languageCard).join("")}</div>
      <div class="section-heading"><h2>Fundamentos gerais</h2><small>Conceitos comuns</small></div>
    ` : ""}
    <div class="section-heading"><h2>Conteúdo de referência</h2><small>${area.topics.length} tópicos principais</small></div>
    <div class="content-grid">
      ${area.topics.map((topic, index) => `
        <article class="topic-card">
          <span class="eyebrow">TÓPICO ${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHTML(topic.title)}</h3>
          <p>${escapeHTML(topic.summary)}</p>
          <button data-topic="${index}" data-area-topic="${escapeHTML(areaName)}">Ler conteúdo completo →</button>
        </article>`).join("")}
    </div>
    ${isProgramming ? `
      <div class="section-heading"><h2>Fundamentos de programação</h2></div>
      <div class="content-grid">
        ${LANGUAGE_TOPICS.map((topic, index) => `
          <article class="topic-card">
            <h3>${escapeHTML(topic.title)}</h3>
            <div class="topic-body">${formatTopicText(topic.text)}</div>
            <button data-general-topic="${index}">Ler fundamento →</button>
          </article>`).join("")}
      </div>
    ` : ""}
    <div class="section-heading"><h2>Suas anotações nesta área</h2><button class="primary-btn" data-action="new-note" data-note-area="${escapeHTML(areaName)}">＋ Nova anotação</button></div>
    <div class="notes-grid">
      ${notes.filter((note) => note.area === areaName && note.type !== "referencia").map(noteCard).join("") || `<div class="empty-state"><span>📝</span><h3>Nenhuma anotação pessoal ainda</h3><p>Use este espaço para registrar o que aprender em seus cursos e livros.</p></div>`}
    </div>
  `;
}

function renderLanguage(name) {
  const language = LANGUAGES.find((item) => item.name === name);
  if (!language) return navigate("home");

  const content = getLanguageContent(name);

  // Organiza cada fundamento em subtítulos e parágrafos.
  function formatTopicText(text) {
  const lines = text.trim().split(/\r?\n/);
  const sections = [];
  let currentTitle = "";
  let currentBody = [];

  const knownTitles = new Set([
    "SINTAXE",
    "VARIÁVEIS",
    "CONSTANTES",
    "TIPOS DE DADOS",
    "TIPAGEM ESTÁTICA E DINÂMICA",
    "CONVERSÃO DE TIPOS",
    "ESCOPO E TEMPO DE VIDA",
    "EXPRESSÕES",
    "OPERADORES ARITMÉTICOS",
    "OPERADORES DE COMPARAÇÃO",
    "OPERADORES LÓGICOS",
    "ATRIBUIÇÃO",
    "PRECEDÊNCIA E ASSOCIATIVIDADE",
    "CURTO-CIRCUITO",
    "PRECISÃO NUMÉRICA",
    "ESTRUTURAS CONDICIONAIS",
    "CONDIÇÕES COMPOSTAS",
    "LAÇOS DE REPETIÇÃO",
    "CONTADORES E ACUMULADORES",
    "CONTROLE DO FLUXO",
    "LAÇOS INFINITOS",
    "LEGIBILIDADE E EFICIÊNCIA",
    "O QUE É UMA FUNÇÃO?",
    "PARÂMETROS E ARGUMENTOS",
    "RETORNO",
    "ESCOPO LOCAL E GLOBAL",
    "MODULARIZAÇÃO",
    "RECURSÃO",
    "BIBLIOTECAS E APIS",
    "RESPONSABILIDADE ÚNICA",
    "FINALIDADE",
    "ARRAYS E VETORES",
    "LISTAS",
    "PILHAS E FILAS",
    "CONJUNTOS",
    "MAPAS E DICIONÁRIOS",
    "ÁRVORES E GRAFOS",
    "COMPLEXIDADE",
    "ERRO DE SINTAXE",
    "ERRO DE EXECUÇÃO",
    "ERRO LÓGICO",
    "LEITURA DE MENSAGENS",
    "DEPURADOR",
    "REPRODUÇÃO DO PROBLEMA",
    "REGISTRO DE EVENTOS",
    "CORREÇÃO CONTROLADA",
    "ORGANIZAÇÃO DE ARQUIVOS",
    "LEITURA E GRAVAÇÃO",
    "GERENCIAMENTO DE ARQUIVOS",
    "BIBLIOTECAS E DEPENDÊNCIAS",
    "GERENCIADORES DE PACOTES",
    "AMBIENTES DE DESENVOLVIMENTO",
    "CONFIGURAÇÕES E SEGREDOS",
    "DOCUMENTAÇÃO",
    "VALIDAÇÃO DE DADOS",
    "TRATAMENTO DE ERROS",
    "TESTES",
    "CONTROLE DE VERSÕES",
    "SEGURANÇA DE CREDENCIAIS",
    "INJEÇÃO DE CÓDIGO",
    "DEPENDÊNCIAS E ATUALIZAÇÕES",
    "PRIVACIDADE",
    "MANUTENÇÃO CONTÍNUA",
    "CÓDIGO-FONTE",
    "COMPILAÇÃO",
    "INTERPRETAÇÃO",
    "MÁQUINA VIRTUAL E RUNTIME",
    "BIBLIOTECAS E LIGAÇÃO",
    "MEMÓRIA",
    "AMBIENTE E PLATAFORMA",
    "CLIENTE E SERVIDOR",
    "FRONT-END",
    "BACK-END",
    "REQUISIÇÕES E RESPOSTAS",
    "ESTADO E SESSÕES",
    "ARMAZENAMENTO",
    "RESPONSABILIDADES DO SERVIDOR",
    "DESEMPENHO E DISPONIBILIDADE"
  ]);

  function saveSection() {
    if (currentTitle) {
      sections.push({
        title: currentTitle,
        body: currentBody.join(" ").trim()
      });
    }
  }

    for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const normalized = trimmed.toLocaleUpperCase("pt-BR");

    const matchedTitle = [...knownTitles].find((title) =>
      normalized === title ||
      normalized.startsWith(title + " ") ||
      normalized.startsWith(title + ":")
    );

    if (matchedTitle) {
      saveSection();
      currentTitle = matchedTitle;

      const remainingText = trimmed
        .slice(matchedTitle.length)
        .replace(/^[:\s-]+/, "")
        .trim();

      currentBody = remainingText ? [remainingText] : [];
    } else {
      currentBody.push(trimmed);
    }
  }

  saveSection();

  return sections.map((section) => `
    <section class="topic-section">
      <h4>${escapeHTML(section.title)}</h4>
      <p>${escapeHTML(section.body)}</p>
    </section>
  `).join("");
}

  pageContent.innerHTML = `
    <div class="page-intro">
      <button class="text-link" data-area="Programação">
        ← Todas as linguagens
      </button>

      <div style="display:flex;align-items:center;gap:15px;margin-top:16px">
        <span class="language-logo" style="width:65px;height:65px;flex-basis:65px">
          <img
            src="${escapeHTML(language.logo)}"
            alt="Logo ${escapeHTML(name)}"
            onerror="this.style.display='none';this.parentElement.textContent='💻'"
          >
        </span>

        <div>
          <span class="eyebrow">GUIA DE ESTUDO</span>
          <h1>${escapeHTML(name)}</h1>
          <p>${escapeHTML(language.kind)}</p>
        </div>
      </div>
    </div>

    <article class="article-card">
      <h2>Sobre ${escapeHTML(name)}</h2>
      ${content.intro}

      <h3>Onde é utilizada?</h3>
      ${content.uses}

      <h3>Primeiros conceitos</h3>
      <p>
        Estude variáveis, tipos, operadores, condições, repetições,
        funções e tratamento de erros. Depois avance para estruturas
        de dados, bibliotecas, testes e projetos organizados.
      </p>

      <h3>Documentação oficial</h3>
      <p>${content.docs}</p>

      <div class="callout">
        A documentação é a fonte mais confiável para conferir sintaxe,
        recursos e mudanças de versão. Exemplos podem variar conforme
        a versão utilizada.
      </div>
    </article>

    <div class="section-heading">
      <h2>Fundamentos de programação</h2>
    </div>

    <div class="content-grid">
      ${LANGUAGE_TOPICS.map((topic) => `
        <article class="topic-card">
          <h3>${escapeHTML(topic.title)}</h3>
          <div class="topic-content">
            ${formatTopicText(topic.text)}
          </div>
        </article>
      `).join("")}
    </div>

    <div class="section-heading">
      <h2>Anotações sobre ${escapeHTML(name)}</h2>

      <button
        class="primary-btn"
        data-action="new-note"
        data-note-area="Programação"
        data-note-language="${escapeHTML(name)}"
      >
        ＋ Nova anotação
      </button>
    </div>

    <div class="notes-grid">
      ${notes.filter((note) =>
        note.area === "Programação" &&
        note.language === name &&
        note.type !== "referencia"
      ).map(noteCard).join("") || `
        <div class="empty-state">
          <span>📝</span>
          <h3>Suas anotações aparecerão aqui</h3>
          <p>
            Registre o que estiver aprendendo sobre ${escapeHTML(name)}.
          </p>
        </div>
      `}
    </div>
  `;
}

function getLanguageContent(name) {
  const data = {
    Java: {
      intro: "<p>Java é uma linguagem de programação de propósito geral, fortemente tipada e orientada a objetos. O código normalmente é compilado em bytecode executado pela Java Virtual Machine (JVM).</p>",
      uses: "<p>Aplicações corporativas, serviços backend, ferramentas e sistemas que utilizam o ecossistema Java.</p>",
      docs: '<a href="https://dev.java/" target="_blank" rel="noopener noreferrer">dev.java — documentação e recursos oficiais</a>'
    },
    Python: {
      intro: "<p>Python é uma linguagem de alto nível conhecida por sua sintaxe legível. É utilizada em automação, scripts, desenvolvimento web, ciência de dados e inteligência artificial.</p>",
      uses: "<p>Automação de tarefas, processamento de dados, aplicações web e protótipos.</p>",
      docs: '<a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Documentação oficial do Python</a>'
    },
    JavaScript: {
      intro: "<p>JavaScript é uma linguagem central no desenvolvimento web. Executa no navegador e também em ambientes como Node.js.</p>",
      uses: "<p>Interfaces web, aplicações interativas, servidores e ferramentas de desenvolvimento.</p>",
      docs: '<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN — JavaScript</a>'
    },
    HTML: {
      intro: "<p>HTML é uma linguagem de marcação usada para estruturar o conteúdo de páginas web. Não é, por si só, uma linguagem de programação.</p>",
      uses: "<p>Títulos, parágrafos, formulários, links, imagens, tabelas e estrutura semântica de páginas.</p>",
      docs: '<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN — HTML</a>'
    },
    CSS: {
      intro: "<p>CSS descreve a apresentação visual de documentos HTML, incluindo cores, tipografia, espaçamento, layout e adaptação a diferentes telas.</p>",
      uses: "<p>Estilização de páginas, layouts responsivos, animações e componentes de interface.</p>",
      docs: '<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN — CSS</a>'
    },
    C: {
      intro: "<p>C é uma linguagem compilada muito utilizada em programação de sistemas, ferramentas e software de baixo nível.</p>",
      uses: "<p>Sistemas operacionais, firmware, bibliotecas e aplicações que exigem controle de recursos.</p>",
      docs: '<a href="https://en.cppreference.com/w/c.html" target="_blank" rel="noopener noreferrer">Referência da linguagem C</a>'
    },
    "C++": {
      intro: "<p>C++ é uma linguagem compilada multiparadigma que combina recursos de baixo nível e abstrações de alto nível.</p>",
      uses: "<p>Jogos, motores gráficos, aplicações de alto desempenho e software de sistemas.</p>",
      docs: '<a href="https://en.cppreference.com/w/" target="_blank" rel="noopener noreferrer">cppreference — referência de C++</a>'
    },
    "C#": {
      intro: "<p>C# é uma linguagem moderna do ecossistema .NET, com suporte a orientação a objetos e diversos recursos de produtividade.</p>",
      uses: "<p>Aplicações desktop, serviços web, APIs e jogos com ferramentas como Unity.</p>",
      docs: '<a href="https://learn.microsoft.com/pt-br/dotnet/csharp/" target="_blank" rel="noopener noreferrer">Microsoft Learn — C#</a>'
    },
    PHP: {
      intro: "<p>PHP é uma linguagem muito utilizada para desenvolvimento web no servidor, podendo gerar conteúdo dinâmico e acessar bancos de dados.</p>",
      uses: "<p>Sites dinâmicos, sistemas de gerenciamento de conteúdo e aplicações web.</p>",
      docs: '<a href="https://www.php.net/manual/pt_BR/" target="_blank" rel="noopener noreferrer">Manual oficial do PHP</a>'
    },
    SQL: {
      intro: "<p>SQL é uma linguagem utilizada para consultar e manipular dados em bancos de dados relacionais. A sintaxe pode variar entre os sistemas.</p>",
      uses: "<p>Consultas, filtros, junções, inserções, atualizações e definição de estruturas de dados.</p>",
      docs: '<a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">Documentação MySQL</a>'
    },
    Kotlin: {
      intro: "<p>Kotlin é uma linguagem concisa e estaticamente tipada, bastante utilizada no desenvolvimento Android.</p>",
      uses: "<p>Aplicativos Android, serviços backend e aplicações multiplataforma.</p>",
      docs: '<a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer">Documentação oficial do Kotlin</a>'
    },
    TypeScript: {
      intro: "<p>TypeScript adiciona um sistema de tipos ao JavaScript e é convertido para JavaScript para execução nos ambientes compatíveis.</p>",
      uses: "<p>Aplicações web maiores, ferramentas de desenvolvimento e projetos que se beneficiam de tipagem estática.</p>",
      docs: '<a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">Documentação oficial do TypeScript</a>'
    },
    Go: {
      intro: "<p>Go é uma linguagem compilada criada com foco em simplicidade, ferramentas integradas e concorrência.</p>",
      uses: "<p>Serviços de rede, APIs, ferramentas de infraestrutura e aplicações backend.</p>",
      docs: '<a href="https://go.dev/doc/" target="_blank" rel="noopener noreferrer">Documentação oficial do Go</a>'
    },
    Rust: {
      intro: "<p>Rust é uma linguagem de sistemas que enfatiza segurança de memória e controle explícito de recursos.</p>",
      uses: "<p>Ferramentas de sistemas, componentes de infraestrutura e aplicações em que segurança e desempenho são importantes.</p>",
      docs: '<a href="https://www.rust-lang.org/learn" target="_blank" rel="noopener noreferrer">Aprenda Rust — site oficial</a>'
    },
    Bash: {
      intro: "<p>Bash é um interpretador de comandos e linguagem de scripts usada principalmente em ambientes Unix e Linux.</p>",
      uses: "<p>Automação de tarefas, administração de sistemas e execução de sequências de comandos.</p>",
      docs: '<a href="https://www.gnu.org/software/bash/manual/" target="_blank" rel="noopener noreferrer">Manual oficial do Bash</a>'
    },
    PowerShell: {
      intro: "<p>PowerShell é um shell e linguagem de automação que trabalha com objetos e oferece recursos de administração de sistemas.</p>",
      uses: "<p>Automação do Windows, gerenciamento de serviços, arquivos, configurações e infraestrutura.</p>",
      docs: '<a href="https://learn.microsoft.com/pt-br/powershell/" target="_blank" rel="noopener noreferrer">Documentação oficial do PowerShell</a>'
    }
  };

  return data[name] || {
    intro: "<p>Consulte a documentação oficial para conhecer os recursos, a sintaxe e as ferramentas da linguagem.</p>",
    uses: "<p>As aplicações dependem do ecossistema, das bibliotecas e das necessidades do projeto.</p>",
    docs: '<a href="https://developer.mozilla.org/pt-BR/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>'
  };
}

function renderTopic() {
  const topic = currentTopic;
  if (!topic) return navigate("home");

  pageContent.innerHTML = `
    <div class="page-intro">
      <button class="text-link" data-action="back">← Voltar para ${escapeHTML(currentArea || "a biblioteca")}</button>
      <span class="eyebrow" style="margin-top:20px">MATERIAL DE REFERÊNCIA</span>
      <h1>${escapeHTML(topic.title)}</h1>
      <p>${escapeHTML(topic.summary || "")}</p>
    </div>
    <article class="article-card">${topic.content}</article>
    <div class="hero-actions">
      <button class="primary-btn" data-action="new-note" data-note-area="${escapeHTML(currentArea || "Hardware")}">＋ Fazer anotação sobre este assunto</button>
      <button class="secondary-btn" data-action="back">Voltar</button>
    </div>`;
}

let currentTopic = null;

function renderNotes(list, title) {
  pageContent.innerHTML = `
    <div class="page-intro">
      <span class="eyebrow">SEU CONHECIMENTO</span>
      <h1>${escapeHTML(title)}</h1>
      <p>Registros pessoais feitos durante seus estudos. O conteúdo de referência da biblioteca permanece separado.</p>
    </div>
    <div class="section-heading"><h2>${list.length} registro(s)</h2><button class="primary-btn" data-action="new-note">＋ Nova anotação</button></div>
    ${list.length ? `<div class="notes-grid">${list.map(noteCard).join("")}</div>` : `<div class="empty-state"><span>${title === "Favoritos" ? "☆" : "📝"}</span><h3>${title === "Favoritos" ? "Nenhum favorito ainda" : "Nenhuma anotação pessoal"}</h3><p>Crie registros sobre seus cursos, livros e estudos. Eles ficarão salvos neste navegador.</p><button class="primary-btn" data-action="new-note">Criar anotação</button></div>`}
  `;
}

function noteCard(note) {
  return `
    <article class="note-card">
      <div class="note-meta">
        <span class="tag">${escapeHTML(note.area)}</span>
        ${note.language ? `<span class="tag">${escapeHTML(note.language)}</span>` : ""}
        ${note.favorite ? "<span>★ Favorito</span>" : ""}
      </div>

      <h3>${escapeHTML(note.title)}</h3>

      <p>${escapeHTML((note.content || "").replace(/<[^>]*>/g, " ").slice(0, 180))}${(note.content || "").length > 180 ? "…" : ""}</p>

      <div class="note-meta">
        ${escapeHTML(note.type === "referencia" ? "Referência" : "Anotação pessoal")}
        · ${escapeHTML(formatDate(note.updatedAt))}
      </div>

      <div class="note-actions">
        <button data-action="edit-note" data-id="${escapeHTML(note.id)}">Editar</button>
        <button data-action="toggle-favorite" data-id="${escapeHTML(note.id)}">${note.favorite ? "★ Remover favorito" : "☆ Favoritar"}</button>
        <button data-action="delete-note" data-id="${escapeHTML(note.id)}">Excluir</button>
      </div>
    </article>`;
}

function formatDate(value) {
  if (!value) return "Sem data";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Sem data" : date.toLocaleDateString("pt-BR");
}

function renderSearchResults() {
  const query = searchQuery.trim().toLowerCase();
  const foundTopics = [];

  Object.entries(AREAS).forEach(([area, data]) => {
    data.topics.forEach((topic, index) => {
      if (`${area} ${topic.title} ${topic.summary} ${topic.content}`.toLowerCase().includes(query)) {
        foundTopics.push({ area, topic, index });
      }
    });
  });

  const foundNotes = notes.filter((note) =>
    `${note.title} ${note.content} ${note.area} ${note.language || ""}`.toLowerCase().includes(query)
  );

  pageContent.innerHTML = `
    <div class="page-intro"><span class="eyebrow">PESQUISA</span><h1>Resultados da busca</h1><p>Pesquisa por: <b>${escapeHTML(searchQuery)}</b></p></div>
    <div class="section-heading"><h2>Biblioteca técnica (${foundTopics.length})</h2></div>
    ${foundTopics.length ? `<div class="content-grid">${foundTopics.map(({ area, topic, index }) => `<article class="topic-card"><span class="tag">${escapeHTML(area)}</span><h3>${escapeHTML(topic.title)}</h3><p>${escapeHTML(topic.summary)}</p><button data-topic="${index}" data-area-topic="${escapeHTML(area)}">Abrir tópico →</button></article>`).join("")}</div>` : `<p>Nenhum tópico de referência encontrado.</p>`}
    <div class="section-heading"><h2>Anotações e registros (${foundNotes.length})</h2></div>
    ${foundNotes.length ? `<div class="notes-grid">${foundNotes.map(noteCard).join("")}</div>` : `<p>Nenhuma anotação encontrada.</p>`}
  `;
}


function renderSettings() {
  pageContent.innerHTML = `
    <div class="page-intro">
      <span class="eyebrow">PERSONALIZAÇÃO</span>
      <h1>Configurações</h1>
      <p>Ajuste a aparência do TechBook e gerencie seus dados.</p>
    </div>

    <div class="settings-grid">
      <section class="settings-card">
        <h3>🎨 Aparência</h3>
        <p>Personalize a leitura.</p>

        <div class="setting-row">
          <div><strong>Tema</strong><small>Escolha a aparência do aplicativo</small></div>
          <select id="settingTheme">
            <option value="dark" ${settings.theme === "dark" ? "selected" : ""}>Escuro</option>
            <option value="light" ${settings.theme === "light" ? "selected" : ""}>Claro</option>
          </select>
        </div>

        <div class="setting-row">
          <div><strong>Tamanho da fonte</strong><small>Conforto durante a leitura</small></div>
          <select id="settingFont">
            <option value="13" ${settings.font === "13" ? "selected" : ""}>Pequena</option>
            <option value="15" ${settings.font === "15" ? "selected" : ""}>Normal</option>
            <option value="17" ${settings.font === "17" ? "selected" : ""}>Grande</option>
            <option value="19" ${settings.font === "19" ? "selected" : ""}>Muito grande</option>
          </select>
        </div>

        <div class="setting-row">
          <div><strong>Modo compacto</strong><small>Reduz o espaço entre cartões</small></div>
          <label class="switch">
            <input type="checkbox" id="settingCompact" ${settings.compact ? "checked" : ""}>
            <span></span>
          </label>
        </div>
      </section>

      <section class="settings-card">
        <h3>📚 Conteúdo</h3>
        <p>Controle como a biblioteca aparece.</p>

        <div class="setting-row">
          <div><strong>Mostrar materiais de referência</strong><small>Exibir conteúdos técnicos pré-incluídos</small></div>
          <label class="switch">
            <input type="checkbox" id="settingReference" ${settings.showReference ? "checked" : ""}>
            <span></span>
          </label>
        </div>

        <div class="setting-row">
          <div><strong>Confirmar antes de excluir</strong><small>Evita apagar uma anotação por engano</small></div>
          <label class="switch">
            <input type="checkbox" id="settingConfirm" ${settings.confirmDelete ? "checked" : ""}>
            <span></span>
          </label>
        </div>
      </section>

      <section class="settings-card">
        <h3>💾 Seus dados</h3>
        <p>Faça cópias dos seus registros ou transfira-os para outro navegador.</p>

        <div class="setting-row">
          <div><strong>Armazenamento</strong><small>Anotações salvas neste navegador e sincronizadas com sua conta quando conectado</small></div>
          <span class="tag">TechBook</span>
        </div>

        <div class="settings-actions">
          <button class="primary-btn" data-action="export">Exportar backup</button>
          <button class="secondary-btn" data-action="import">Importar backup</button>
        </div>

        <div class="callout">
          O backup inclui suas anotações pessoais e favoritos. Guarde o arquivo em local seguro.
        </div>
      </section>

      <section class="settings-card">
        <h3>👤 Conta</h3>
        <p>Gerencie o acesso ao seu TechBook.</p>

        <div class="setting-row">
          <div><strong>Sessão</strong><small>Encerre o acesso à sua conta neste aplicativo.</small></div>
        </div>

        <div class="settings-actions">
          <button class="secondary-btn" id="techbook-logout" type="button">
            Sair da conta
          </button>
        </div>
      </section>

      <section class="settings-card">
        <h3>ℹ️ Sobre o TechBook</h3>
        <p>O TechBook é um caderno digital de estudo em tecnologia.</p>

        <div class="setting-row">
          <div><strong>Versão</strong><small>Interface e biblioteca técnica</small></div>
          <span>2.0</span>
        </div>

        <div class="callout warning">
          Limpar os dados do navegador pode remover suas anotações locais. Exporte um backup antes de limpar os dados do site.
        </div>
      </section>
    </div>
  `;
}


function openNoteDialog(note = null, defaults = {}) {
  const dialog = $("#noteDialog");
  $("#noteForm").reset();
  $("#noteId").value = note?.id || "";
  $("#noteDialogTitle").textContent = note ? "Editar anotação" : "Nova anotação";
  $("#noteTitle").value = note?.title || "";
  $("#noteArea").value = note?.area || defaults.area || currentArea || "Hardware";
  $("#noteLanguage").value = note?.language || defaults.language || currentLanguage || "";
  $("#noteType").value = note?.type || "pessoal";
  $("#noteContent").value = note?.content || "";
  $("#noteFavorite").checked = Boolean(note?.favorite);

  if (typeof dialog.showModal === "function") dialog.showModal();
  else showToast("Seu navegador não oferece suporte ao formulário de anotação.");
}

function exportBackup() {
  const backup = {
    app: "TechBook",
    version: 2,
    exportedAt: new Date().toISOString(),
    notes,
    settings
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `techbook-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Backup preparado para exportação.");
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const importedNotes = Array.isArray(data) ? data : data.notes;

      if (!Array.isArray(importedNotes)) throw new Error("Formato inválido");

      const validNotes = importedNotes.filter((note) =>
  note &&
  typeof note === "object" &&
  !Array.isArray(note) &&
  typeof note.title === "string" &&
  typeof note.content === "string" &&
  typeof note.area === "string" &&
  (note.id === undefined || typeof note.id === "string") &&
  (note.language === undefined || typeof note.language === "string") &&
  (note.type === undefined || typeof note.type === "string") &&
  (note.favorite === undefined || typeof note.favorite === "boolean") &&
  (note.updatedAt === undefined || typeof note.updatedAt === "string")
);

      const merged = new Map(notes.map((note) => [note.id, note]));
      validNotes.forEach((note, index) => {
        const id = note.id || `import-${Date.now()}-${index}`;
        merged.set(id, { ...note, id });
      });
      notes = Array.from(merged.values());

      if (
  data.settings &&
  typeof data.settings === "object" &&
  !Array.isArray(data.settings)
) {
  const importedSettings = data.settings;
  const safeSettings = { ...settings };

  if (
    typeof importedSettings.theme === "string" &&
    ["dark", "light"].includes(importedSettings.theme)
  ) {
    safeSettings.theme = importedSettings.theme;
  }

  if (
    typeof importedSettings.font === "string" &&
    ["small", "medium", "large"].includes(importedSettings.font)
  ) {
    safeSettings.font = importedSettings.font;
  }

  if (typeof importedSettings.compact === "boolean") {
    safeSettings.compact = importedSettings.compact;
  }

  if (typeof importedSettings.showReference === "boolean") {
    safeSettings.showReference = importedSettings.showReference;
  }

  if (typeof importedSettings.confirmDelete === "boolean") {
    safeSettings.confirmDelete = importedSettings.confirmDelete;
  }

  const previousSettings = settings;
  settings = safeSettings;

  if (!saveSettings()) {
    settings = previousSettings;
    applySettings();
    return;
  }
}

      if (!saveNotes()) return;
      render();
      showToast(`${validNotes.length} anotação(ões) importada(s).`);
    } catch (error) {
      showToast("Não foi possível importar. Confira se o arquivo é um backup válido do TechBook.");
    } finally {
      $("#importFile").value = "";
    }
  };

  reader.onerror = () => showToast("Falha ao ler o arquivo selecionado.");
  reader.readAsText(file);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-view], [data-area], [data-language], .brand");
  if (!target) return;

  if (target.dataset.view) {
    event.preventDefault();
    navigate(target.dataset.view);
    return;
  }

  if (target.dataset.area) {
    openArea(target.dataset.area);
    return;
  }

  if (target.dataset.language) {
    openLanguage(target.dataset.language);
    return;
  }

  if (target.dataset.topic !== undefined) {
    const areaName = target.dataset.areaTopic;
    const index = Number(target.dataset.topic);
    const topic = AREAS[areaName]?.topics[index];
    if (!topic) return;

    currentArea = areaName;
    currentTopic = topic;
    currentView = "topic";
    render();
    return;
  }

  if (target.dataset.generalTopic !== undefined) {
    const topic = LANGUAGE_TOPICS[Number(target.dataset.generalTopic)];
    if (!topic) return;
    currentTopic = {
      title: topic.title,
      summary: topic.text,
      content: `<p>${escapeHTML(topic.text)}</p><p>Esse conceito é aplicável a várias linguagens, embora a sintaxe e os detalhes de implementação variem.</p>`
    };
    currentArea = "Programação";
    currentView = "topic";
    render();
    return;
  }

  const action = target.dataset.action;

  if (action === "new-note" || target.id === "newNoteBtn") {
    openNoteDialog(null, {
      area: target.dataset.noteArea || currentArea,
      language: target.dataset.noteLanguage || currentLanguage
    });
  } else if (action === "back") {
    goBack();
  } else if (action === "edit-note") {
    const note = notes.find((item) => item.id === target.dataset.id);
    if (note) openNoteDialog(note);
  } else if (action === "toggle-favorite") {
    const note = notes.find((item) => item.id === target.dataset.id);
    if (note) {
      note.favorite = !note.favorite;
      note.updatedAt = new Date().toISOString();
      
    if (window.techbookMarkDeleted) {
        window.techbookMarkDeleted(note.id);
    }
    notes = notes.filter((item) => item.id !== note.id);
    saveNotes();

      render();
      showToast(note.favorite ? "Adicionado aos favoritos." : "Removido dos favoritos.");
    }
  
} else if (action === "delete-note") {
  const note = notes.find(
    (item) => String(item.id) === String(target.dataset.id)
  );

  if (
    note &&
    (!settings.confirmDelete ||
      confirm(`Excluir a anotação "${note.title}"? Essa ação não pode ser desfeita.`))
  ) {
    notes = notes.filter(
      (item) => String(item.id) !== String(note.id)
    );

    try {
      if (window.techbookMarkDeleted) {
        window.techbookMarkDeleted(note.id);
      }
    } catch (error) {
      console.error("Erro ao registrar exclusão:", error);
    }

    saveNotes();
    render();
    showToast("Anotação excluída.");
  }
} else if (action === "export") {

  } else if (action === "import") {
    $("#importFile").click();
  }
});

$("#noteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const id = $("#noteId").value;
  const oldNote = notes.find((note) => note.id === id);
  const note = {
    id: id || `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: $("#noteTitle").value.trim(),
    area: $("#noteArea").value,
    language: $("#noteLanguage").value.trim(),
    type: $("#noteType").value,
    content: $("#noteContent").value.trim(),
    favorite: $("#noteFavorite").checked,
    updatedAt: new Date().toISOString()
  };

  if (!note.title || !note.content) {
    showToast("Preencha o título e o conteúdo.");
    return;
  }

  if (oldNote) notes = notes.map((item) => item.id === id ? note : item);
  else notes.unshift(note);

  if (saveNotes()) {
    $("#noteDialog").close();
    render();
    showToast(oldNote ? "Anotação atualizada." : "Anotação salva.");
  }
});

document.querySelectorAll(".close-dialog").forEach((button) => {
  button.addEventListener("click", () => $("#noteDialog").close());
});

$("#noteDialog").addEventListener("click", (event) => {
  if (event.target === $("#noteDialog")) $("#noteDialog").close();
});

$("#globalSearch").addEventListener("input", (event) => {
  searchQuery = event.target.value;
  if (!searchQuery.trim()) {
    if (currentView === "search") navigate("home");
    return;
  }
  currentView = "search";
  currentArea = "";
  currentLanguage = "";
  render();
});

$("#globalSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchQuery = event.target.value;
    currentView = "search";
    render();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    $("#globalSearch").focus();
  }
  if (event.key === "Escape") $("#sidebar").classList.remove("open");
});

$("#topSettingsBtn").addEventListener("click", () => navigate("settings"));
$("#mobileMenuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#importFile").addEventListener("change", (event) => importBackup(event.target.files[0]));

pageContent.addEventListener("change", (event) => {
  const target = event.target;
  if (target.id === "settingTheme") settings.theme = target.value;
  else if (target.id === "settingFont") settings.font = target.value;
  else if (target.id === "settingCompact") settings.compact = target.checked;
  else if (target.id === "settingReference") settings.showReference = target.checked;
  else if (target.id === "settingConfirm") settings.confirmDelete = target.checked;
  else return;

    if (!saveSettings()) return;

  render();
  showToast("Configuração atualizada.");
});

applySettings();
createSeedNotes();
render();
