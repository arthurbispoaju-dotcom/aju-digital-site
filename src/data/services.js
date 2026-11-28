import { IconAutomation, IconBrowser, IconCode, IconSlides } from '../components/icons'

/**
 * PÁGINAS DE SERVIÇO
 * ------------------
 * Cada item vira uma página própria (ex.: ajudigital.com.br/criacao-de-sites-aracaju/),
 * pré-renderizada para o Google, com título, descrição e perguntas frequentes próprios.
 *
 *  path        : endereço da página (sempre com barra no início e no fim)
 *  metaTitle   : título que aparece na aba e no Google (até ~60 caracteres)
 *  metaDesc    : descrição que aparece no Google (até ~155 caracteres)
 *  formService : opção já marcada no formulário de contato desta página
 *  projects    : ids de src/data/projects.js exibidos como exemplos
 *  visual      : ilustração do topo: 'site' | 'dashboard' | 'automacao' | 'software' | 'slides'
 */
export const SERVICES = [
  {
    path: '/criacao-de-sites-aracaju/',
    label: 'Criação de sites',
    Icon: IconBrowser,
    visual: 'site',
    metaTitle: 'Criação de Sites em Aracaju · AJU Digital',
    metaDesc:
      'Criação de sites profissionais em Aracaju: institucionais, landing pages e páginas de vendas rápidas, responsivas e preparadas para aparecer no Google.',
    eyebrow: 'Criação de sites · Aracaju (SE)',
    h1: ['Criação de sites profissionais ', 'em Aracaju.'],
    lead:
      'Sites rápidos, bonitos no celular e preparados para o Google, feitos para apresentar sua empresa com clareza e transformar visitas em conversas no WhatsApp.',
    formService: 'Criação de sites',
    whatsapp: 'Olá, AJU Digital! Vim pela página de criação de sites e quero um orçamento.',
    pains: {
      title: 'Seu site deveria trabalhar por você.',
      items: [
        ['Sua empresa não aparece no Google', 'Quem procura pelo seu serviço encontra o concorrente primeiro, ou não encontra nada.'],
        ['O site atual é lento ou quebra no celular', 'A maior parte das visitas chega pelo celular e desiste quando a página demora ou fica desalinhada.'],
        ['O Instagram não basta para passar confiança', 'Clientes maiores querem ver um endereço próprio, com serviços, portfólio e contato organizados.'],
      ],
    },
    deliverables: {
      title: 'O que está incluso',
      items: [
        ['Design sob medida', 'Layout criado para a sua marca, sem cara de modelo pronto.'],
        ['100% responsivo', 'Pensado primeiro para o celular e ajustado para tablet e computador.'],
        ['Preparado para o Google', 'Títulos, descrições, sitemap, dados estruturados e páginas que o Google lê sem dificuldade.'],
        ['Velocidade', 'Código leve e hospedagem em rede global, para a página abrir em segundos.'],
        ['Contato que converte', 'Botão de WhatsApp, formulário que chega no seu e-mail e chamadas para ação claras.'],
        ['Publicação completa', 'Domínio, HTTPS, Google Search Console e métricas de visitas configurados.'],
      ],
    },
    types: ['Sites institucionais', 'Landing pages', 'Páginas de vendas', 'Sites para profissionais liberais', 'Redesign de sites antigos'],
    steps: [
      ['Conversa inicial', 'Entendemos o seu negócio, o público e o que o site precisa resolver.'],
      ['Estrutura e conteúdo', 'Definimos as páginas, os textos e o caminho do visitante até o contato.'],
      ['Design e desenvolvimento', 'Você acompanha o site tomando forma e pede ajustes antes da publicação.'],
      ['Publicação e Google', 'Colocamos no ar no seu domínio e cadastramos o site no Google.'],
    ],
    projects: ['mh-producoes', 'conceito-landing'],
    faq: [
      ['Quanto custa um site?', 'Depende do número de páginas, dos recursos e do conteúdo. Depois de uma conversa rápida enviamos um orçamento fechado, sem compromisso.'],
      ['Em quanto tempo o site fica pronto?', 'O prazo é definido no planejamento, de acordo com o tamanho do projeto, e informado antes de começarmos.'],
      ['O site vai aparecer no Google?', 'Sim. Entregamos o site com a base técnica de SEO pronta e cadastrado no Google Search Console. A posição nas buscas também depende de conteúdo, concorrência e tempo.'],
      ['Preciso já ter domínio e hospedagem?', 'Não. Ajudamos a registrar o domínio (.com.br) e configuramos a hospedagem. Se você já tiver, usamos o que existe.'],
      ['Consigo atualizar o site depois?', 'Sim. Combinamos a forma mais prática para você: ajustes por nossa conta ou áreas que você mesmo edita.'],
      ['Atendem fora de Aracaju?', 'Sim. A AJU Digital fica em Aracaju (SE) e atende empresas de todo o Brasil de forma remota.'],
    ],
  },
  {
    path: '/dashboards-para-empresas/',
    label: 'Dashboards',
    Icon: IconSlides,
    visual: 'dashboard',
    metaTitle: 'Dashboards para Empresas em Aracaju · AJU Digital',
    metaDesc:
      'Dashboards sob medida que reúnem vendas, financeiro e operação em uma tela, com dados atualizados de planilhas, sistemas e CRMs. Atendimento em Aracaju e no Brasil.',
    eyebrow: 'Dashboards e indicadores',
    h1: ['Seus números em uma tela, ', 'atualizados sozinhos.'],
    lead:
      'Criamos dashboards que juntam os dados espalhados em planilhas, sistemas e CRMs e mostram o que importa para decidir, no computador ou no celular.',
    formService: 'Dashboards',
    whatsapp: 'Olá, AJU Digital! Vim pela página de dashboards e quero conversar sobre um painel para a minha empresa.',
    pains: {
      title: 'Decidir no escuro custa caro.',
      items: [
        ['Os dados estão espalhados', 'Uma planilha para vendas, outra para o financeiro, o sistema para a operação, e ninguém vê o todo.'],
        ['Relatórios tomam horas', 'Alguém da equipe passa o fim do mês copiando números para montar um relatório que já nasce desatualizado.'],
        ['Cada pessoa tem um número diferente', 'Sem uma fonte única, a reunião vira discussão sobre qual planilha está certa.'],
      ],
    },
    deliverables: {
      title: 'O que entregamos',
      items: [
        ['Indicadores certos', 'Definimos com você quais números mostrar: faturamento, metas, funil, prazos, produtividade.'],
        ['Integração de dados', 'Conectamos planilhas (Excel, Google Sheets), sistemas, CRMs e APIs em uma base única.'],
        ['Atualização automática', 'Os dados se atualizam sozinhos, sem copiar e colar.'],
        ['Visual claro', 'Gráficos e alertas fáceis de ler, com filtros por período, equipe ou unidade.'],
        ['Acesso de qualquer lugar', 'Painel web que abre no navegador e no celular, com acesso controlado.'],
        ['Evolução contínua', 'Novos indicadores e telas podem ser adicionados conforme a empresa cresce.'],
      ],
    },
    types: ['Painel comercial e de vendas', 'Indicadores financeiros', 'Gestão de demandas e prazos', 'Produtividade de equipes', 'Indicadores de segurança do trabalho (SST)'],
    steps: [
      ['Mapeamento', 'Levantamos onde os dados estão hoje e quais decisões o painel precisa apoiar.'],
      ['Desenho dos indicadores', 'Montamos um rascunho das telas com você antes de programar.'],
      ['Integração e desenvolvimento', 'Conectamos as fontes de dados e construímos o painel.'],
      ['Entrega e treinamento', 'Publicamos, mostramos como usar e ajustamos com o uso real.'],
    ],
    projects: ['despacho', 'conceito-painel'],
    faq: [
      ['Preciso trocar meus sistemas ou planilhas?', 'Não. O dashboard lê os dados de onde eles já estão. Só sugerimos mudanças quando isso realmente facilita.'],
      ['De onde os dados podem vir?', 'Planilhas Excel e Google Sheets, bancos de dados, CRMs, ERPs e qualquer sistema que ofereça exportação ou API.'],
      ['Com que frequência os dados se atualizam?', 'Depende da fonte: pode ser em tempo real, a cada hora ou uma vez por dia. Definimos isso no planejamento.'],
      ['Quem pode ver o painel?', 'Só quem você autorizar. É possível ter acessos diferentes para diretoria, gestores e equipe.'],
      ['Quanto custa um dashboard?', 'Depende da quantidade de fontes de dados e de telas. Depois do mapeamento enviamos um orçamento fechado.'],
    ],
  },
  {
    path: '/automacao-de-processos/',
    label: 'Automação',
    Icon: IconAutomation,
    visual: 'automacao',
    metaTitle: 'Automação de Processos e WhatsApp em Aracaju · AJU Digital',
    metaDesc:
      'Automação de processos e atendimento: integramos WhatsApp, planilhas, CRM e e-mail com N8N, Make e inteligência artificial para eliminar tarefas manuais.',
    eyebrow: 'Automação de processos e IA',
    h1: ['Menos tarefas manuais. ', 'Mais tempo para crescer.'],
    lead:
      'Conectamos as ferramentas que sua empresa já usa para que os dados circulem sozinhos: do primeiro contato no WhatsApp ao registro no CRM, sem copiar e colar.',
    formService: 'Automações',
    whatsapp: 'Olá, AJU Digital! Vim pela página de automação e quero entender o que dá para automatizar na minha empresa.',
    pains: {
      title: 'Sua equipe não deveria ser o "Ctrl+C, Ctrl+V" da empresa.',
      items: [
        ['Copiar dados entre sistemas', 'Pedidos que saem do formulário, vão para a planilha, depois para o CRM, sempre à mão.'],
        ['WhatsApp sem resposta', 'Mensagens chegam fora do horário ou em volume alto e o cliente desiste esperando.'],
        ['Tarefas repetitivas e erros', 'Lembretes, cobranças e relatórios feitos manualmente, com esquecimentos e retrabalho.'],
      ],
    },
    deliverables: {
      title: 'O que podemos automatizar',
      items: [
        ['Atendimento no WhatsApp', 'Respostas automáticas, triagem e coleta de dados do cliente a qualquer hora.'],
        ['Assistentes com IA', 'Assistentes que entendem perguntas, consultam informações da empresa e encaminham para um humano quando precisa.'],
        ['Integração entre sistemas', 'Formulários, planilhas, CRM, e-mail e ERPs trocando dados automaticamente.'],
        ['Fluxos com N8N e Make', 'Rotinas visuais, documentadas e fáceis de ajustar, sem depender de código complexo.'],
        ['Notificações e lembretes', 'Avisos para equipe e clientes sobre prazos, pedidos, pagamentos e agendamentos.'],
        ['Relatórios automáticos', 'Resumos enviados por e-mail ou WhatsApp e dados alimentando seus dashboards.'],
      ],
    },
    types: ['Atendimento e pré-venda', 'Comercial e CRM (inclusive Salesforce)', 'Financeiro e cobranças', 'Operação e backoffice', 'Captação de leads do site'],
    steps: [
      ['Diagnóstico', 'Mapeamos o processo atual e apontamos o que vale automatizar primeiro.'],
      ['Desenho do fluxo', 'Mostramos o fluxo proposto, passo a passo, antes de implementar.'],
      ['Implementação e testes', 'Construímos a automação e testamos com casos reais da sua operação.'],
      ['Acompanhamento', 'Monitoramos as primeiras semanas e ajustamos o que for preciso.'],
    ],
    projects: ['conceito-whatsapp', 'conceito-integracao'],
    faq: [
      ['O que é N8N e Make?', 'São plataformas de automação que conectam aplicativos e sistemas por meio de fluxos visuais. Usamos a que fizer mais sentido para o seu caso.'],
      ['Preciso trocar as ferramentas que já uso?', 'Normalmente não. A automação conecta o que você já usa: WhatsApp, Google, planilhas, CRM, e-mail e outros.'],
      ['O atendimento automático substitui a equipe?', 'Não. Ele responde o que é repetitivo e organiza as informações, para que sua equipe atenda melhor quem realmente precisa de uma pessoa.'],
      ['E se a automação parar de funcionar?', 'Configuramos alertas de falha e entregamos os fluxos documentados. Também oferecemos acompanhamento e manutenção.'],
      ['Quanto custa automatizar um processo?', 'Depende de quantos sistemas estão envolvidos e da complexidade do fluxo. Depois do diagnóstico enviamos um orçamento fechado.'],
    ],
  },
  {
    path: '/desenvolvimento-de-software-aracaju/',
    label: 'Desenvolvimento de software',
    Icon: IconCode,
    visual: 'software',
    metaTitle: 'Desenvolvimento de Software em Aracaju · AJU Digital',
    metaDesc:
      'Desenvolvimento de software e sistemas web sob medida em Aracaju: gestão de processos, painéis, ferramentas internas e integrações com APIs e CRMs.',
    eyebrow: 'Desenvolvimento de software · Aracaju (SE)',
    h1: ['Sistemas sob medida ', 'para o seu negócio.'],
    lead:
      'Desenvolvemos sistemas web feitos para a forma como a sua empresa trabalha: processos organizados, informação em um só lugar e a equipe acompanhando tudo do computador ou do celular.',
    formService: 'Desenvolvimento de software',
    whatsapp: 'Olá, AJU Digital! Vim pela página de desenvolvimento de software e quero conversar sobre um sistema.',
    pains: {
      title: 'Quando a planilha não dá mais conta.',
      items: [
        ['Informação espalhada', 'Dados em planilhas, e-mails, cadernos e conversas de WhatsApp, e ninguém sabe qual versão está certa.'],
        ['Prazos perdidos', 'Sem um lugar central, demandas atrasam porque ninguém viu o vencimento a tempo.'],
        ['Sistemas prontos que não encaixam', 'Ferramentas genéricas obrigam a empresa a mudar o processo, ou cobram por recursos que você não usa.'],
      ],
    },
    deliverables: {
      title: 'O que podemos desenvolver',
      items: [
        ['Sistemas de gestão', 'Cadastros, pedidos, demandas, protocolos e status organizados em um só sistema.'],
        ['Painéis e kanban', 'Visão do que está pendente, em andamento e concluído, com prazos em destaque.'],
        ['Ferramentas internas', 'Aplicações sob medida para tarefas específicas da sua equipe.'],
        ['Integrações', 'Conexão com APIs, CRMs (inclusive Salesforce), planilhas e outros sistemas que você já usa.'],
        ['Acesso de qualquer lugar', 'Sistema web que funciona no navegador do computador e do celular, sem instalar nada.'],
        ['Manutenção e evolução', 'Ajustes, novas funcionalidades e suporte depois da entrega.'],
      ],
    },
    types: ['Gestão de demandas e protocolos', 'Controle de pedidos e clientes', 'Painéis administrativos', 'Ferramentas internas', 'Integrações entre sistemas'],
    steps: [
      ['Diagnóstico', 'Entendemos o processo atual, quem usa o sistema e o que precisa mudar.'],
      ['Desenho das telas', 'Definimos as telas e o caminho de cada usuário antes de programar.'],
      ['Desenvolvimento por etapas', 'Você acompanha e testa partes do sistema enquanto ele é construído.'],
      ['Entrega e treinamento', 'Publicamos o sistema, orientamos a equipe e seguimos com o suporte.'],
    ],
    projects: ['despacho', 'conceito-painel'],
    faq: [
      ['Quanto custa um sistema sob medida?', 'Depende das telas, dos tipos de usuário e das integrações. Depois do diagnóstico enviamos um orçamento fechado, sem compromisso.'],
      ['Qual a diferença para um sistema pronto?', 'O sistema sob medida segue o seu processo, em vez de você se adaptar a ele. Você paga pelo que usa e pode evoluir o sistema quando o negócio crescer.'],
      ['O sistema funciona no celular?', 'Sim. Desenvolvemos sistemas web que funcionam no navegador do computador, do tablet e do celular.'],
      ['Consigo integrar com o que já uso?', 'Na maioria dos casos, sim. Integramos com planilhas, CRMs como o Salesforce, e-mail e outros sistemas que ofereçam API.'],
      ['Atendem fora de Aracaju?', 'Sim. A AJU Digital fica em Aracaju (SE) e desenvolve sistemas para empresas de todo o Brasil, com reuniões online.'],
    ],
  },
  {
    path: '/apresentacoes-profissionais/',
    label: 'Apresentações profissionais',
    Icon: IconSlides,
    visual: 'slides',
    metaTitle: 'Apresentações Profissionais e Pitch Decks · AJU Digital',
    metaDesc:
      'Criação de apresentações corporativas, comerciais, institucionais e pitch decks em Aracaju, com design profissional e conteúdo organizado para convencer.',
    eyebrow: 'Apresentações profissionais',
    h1: ['Apresente suas ideias ', 'com impacto.'],
    lead:
      'Transformamos informações soltas em apresentações organizadas e visualmente sofisticadas, que passam credibilidade em reuniões, propostas, treinamentos e eventos.',
    formService: 'Apresentações profissionais',
    whatsapp: 'Olá, AJU Digital! Vim pela página de apresentações e quero um orçamento.',
    pains: {
      title: 'Um bom serviço merece uma boa apresentação.',
      items: [
        ['Slides com cara de amador', 'Fontes misturadas, texto demais e cores sem padrão fazem um ótimo serviço parecer comum.'],
        ['Mensagem que não fica clara', 'Informação demais por slide e nenhum fio condutor: o cliente termina sem saber o que decidir.'],
        ['Tempo perdido montando slides', 'Horas ajustando caixas de texto que poderiam ir para vender e atender.'],
      ],
    },
    deliverables: {
      title: 'O que está incluso',
      items: [
        ['Roteiro e organização', 'Estruturamos o conteúdo para contar uma história clara do início à decisão.'],
        ['Design com a sua marca', 'Cores, fontes e elementos visuais alinhados à identidade da empresa.'],
        ['Gráficos e diagramas', 'Números e processos transformados em visuais fáceis de entender.'],
        ['Formatos que você usa', 'PowerPoint, Google Slides, PDF ou apresentação interativa no navegador.'],
        ['Modelo editável', 'Arquivo organizado para você atualizar e reaproveitar em novas reuniões.'],
        ['Redesign de slides', 'Reorganizamos e modernizamos apresentações que você já tem.'],
      ],
    },
    types: ['Apresentações corporativas', 'Apresentações comerciais e propostas', 'Apresentações institucionais', 'Pitch decks', 'Treinamentos e integração'],
    steps: [
      ['Briefing', 'Entendemos o objetivo, o público e o que a apresentação precisa provocar.'],
      ['Roteiro', 'Organizamos o conteúdo em uma sequência clara antes do design.'],
      ['Design', 'Criamos os slides com a sua identidade visual, gráficos e imagens.'],
      ['Ajustes e entrega', 'Revisamos com você e entregamos nos formatos combinados.'],
    ],
    projects: ['pesv', 'nr11'],
    faq: [
      ['Quanto custa uma apresentação?', 'Depende do número de slides, do conteúdo pronto e dos gráficos necessários. Enviamos um orçamento fechado depois de entender o projeto.'],
      ['Vocês escrevem o conteúdo?', 'Organizamos e lapidamos o conteúdo que você tem. Quando falta texto, ajudamos a redigir a partir das suas informações.'],
      ['Em qual formato recebo?', 'PowerPoint, Google Slides, PDF ou uma apresentação interativa que abre no navegador, conforme você preferir.'],
      ['Dá para refazer uma apresentação que já tenho?', 'Sim. Fazemos o redesign completo ou apenas a organização e padronização dos slides existentes.'],
      ['Atendem fora de Aracaju?', 'Sim. Atendemos empresas de todo o Brasil e também já fizemos apresentações em espanhol para clientes no exterior.'],
    ],
  },
]

export const servicePath = (label) => SERVICES.find((s) => s.label === label)?.path
