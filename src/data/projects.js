import despacho from '../assets/despacho.webp'
import pesv from '../assets/pesv.webp'
import nr11 from '../assets/nr11.webp'

/**
 * PORTFÓLIO
 * ---------
 * Para adicionar um projeto real, copie um objeto e ajuste os campos:
 *
 *  category : 'sites' | 'software' | 'automacoes' | 'apresentacoes'
 *  status   : 'real' (entregue) | 'conceitual' (demonstração visual)
 *  mockup   : 'laptop' | 'phone' | 'slide' | 'dashboard'
 *  image    : imagem importada de src/assets (opcional; sem imagem, o mockup usa a ilustração `demo`)
 *  demo     : ilustração usada quando não há imagem: 'landing' | 'mh' | 'chat' | 'flow' | 'kpi'
 *  link     : URL pública (opcional)
 *
 * Projetos reais abaixo vêm do portfólio público de Arthur Bispo (github.com/arthurbispoaju-dotcom/Portfolio).
 */
export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'sites', label: 'Sites desenvolvidos' },
  { id: 'software', label: 'Softwares desenvolvidos' },
  { id: 'automacoes', label: 'Automações implementadas' },
  { id: 'apresentacoes', label: 'Apresentações profissionais' },
]

export const PROJECTS = [
  {
    id: 'mh-producoes',
    category: 'sites',
    status: 'real',
    title: 'MH Produções Audiovisual',
    client: 'Produtora · Aracaju (SE)',
    description: 'Site institucional responsivo para uma produtora de eventos, filmagem, fotografia e transmissões ao vivo, publicado em domínio próprio.',
    tags: ['Site institucional', 'Responsivo'],
    mockup: 'laptop',
    demo: 'mh',
    url: 'mhproducoesaju.com.br',
    link: 'https://mhproducoesaju.com.br/',
    linkLabel: 'Visitar site',
  },
  {
    id: 'despacho',
    category: 'software',
    status: 'real',
    title: 'Despacho · Gestão de demandas',
    client: 'Uso interno · Gabinete público (SE)',
    description: 'Sistema web que substituiu o controle manual de ofícios: painel de prazos, kanban, protocolo automático e histórico de andamentos.',
    tags: ['Sistema web', 'Gestão de processos'],
    mockup: 'laptop',
    image: despacho,
    url: 'despacho',
    link: 'https://arthurbispoaju-dotcom.github.io/Portfolio/despacho.html',
    linkLabel: 'Abrir demonstração',
  },
  {
    id: 'pesv',
    category: 'apresentacoes',
    status: 'real',
    title: 'Inducción PESV · Colômbia',
    client: 'Consultoria SST · Colômbia',
    description: 'Apresentação interativa em espanhol com 10 telas, identidade de sinalização viária e cada exigência ligada à norma de origem.',
    tags: ['Apresentação interativa', 'Internacional'],
    mockup: 'slide',
    image: pesv,
    link: 'https://arthurbispoaju-dotcom.github.io/Portfolio/pesv-colombia.html',
    linkLabel: 'Ver apresentação',
  },
  {
    id: 'nr11',
    category: 'apresentacoes',
    status: 'real',
    title: 'Transpaleteira Elétrica · NR 11',
    client: 'Treinamento de segurança do trabalho',
    description: 'Treinamento obrigatório transformado em 40 telas navegáveis, com identidade visual inspirada em sinalização industrial.',
    tags: ['Treinamento', '40 telas'],
    mockup: 'slide',
    image: nr11,
    note: 'Demonstração disponível sob pedido',
  },
  {
    id: 'conceito-whatsapp',
    category: 'automacoes',
    status: 'conceitual',
    title: 'Atendimento automático no WhatsApp',
    client: 'Projeto conceitual',
    description: 'Demonstração de um assistente com IA que responde dúvidas, qualifica o contato e registra o pedido de orçamento automaticamente.',
    tags: ['WhatsApp', 'Assistente com IA'],
    mockup: 'phone',
    demo: 'chat',
  },
  {
    id: 'conceito-integracao',
    category: 'automacoes',
    status: 'conceitual',
    title: 'Integração entre sistemas',
    client: 'Projeto conceitual',
    description: 'Fluxo que conecta formulário, planilha, CRM e e-mail, eliminando o copiar e colar entre ferramentas.',
    tags: ['N8N · Make', 'Integrações'],
    mockup: 'dashboard',
    demo: 'flow',
    screenTitle: 'Fluxo de integração',
  },
  {
    id: 'conceito-painel',
    category: 'software',
    status: 'conceitual',
    title: 'Painel de gestão sob medida',
    client: 'Projeto conceitual',
    description: 'Demonstração de um sistema com indicadores, pedidos e equipe em uma única tela, acessível do computador ou do celular.',
    tags: ['Dashboard', 'Sistema web'],
    mockup: 'dashboard',
    demo: 'kpi',
    screenTitle: 'Painel de gestão',
  },
  {
    id: 'conceito-landing',
    category: 'sites',
    status: 'conceitual',
    title: 'Landing page de alta conversão',
    client: 'Projeto conceitual',
    description: 'Estrutura de página de vendas com proposta clara, prova de valor e chamada para ação em destaque, do desktop ao celular.',
    tags: ['Landing page', 'Conversão'],
    mockup: 'laptop',
    demo: 'landing',
    url: 'suamarca.com.br',
  },
]
