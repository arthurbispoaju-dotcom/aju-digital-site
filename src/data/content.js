import { IconAutomation, IconBrowser, IconCode, IconSlides } from '../components/icons'

export const SOLUTIONS = [
  {
    id: 'sites',
    n: '01',
    tag: 'Criação de sites',
    Icon: IconBrowser,
    title: 'Sua presença digital começa aqui.',
    description:
      'Criamos sites modernos, responsivos e estratégicos que valorizam sua marca, apresentam seus serviços e conectam sua empresa aos clientes.',
    services: ['Sites institucionais', 'Landing pages', 'Sites profissionais', 'Páginas de vendas', 'Redesign de sites'],
    cta: 'Conheça nossos projetos',
    filter: 'sites',
    page: '/criacao-de-sites-aracaju/',
    pageLabel: 'Criação de sites em Aracaju',
  },
  {
    id: 'software',
    n: '02',
    tag: 'Desenvolvimento de software',
    Icon: IconCode,
    title: 'Sistemas sob medida para o seu negócio.',
    description:
      'Desenvolvemos softwares e sistemas web personalizados que organizam processos, centralizam informações e acompanham o crescimento da sua empresa.',
    services: [
      'Sistemas web sob medida',
      'Painéis e dashboards de gestão',
      'Ferramentas internas para equipes',
      'Integrações com APIs e CRMs',
      'Manutenção e evolução de sistemas',
    ],
    cta: 'Veja um sistema em ação',
    filter: 'software',
    page: '/dashboards-para-empresas/',
    pageLabel: 'Dashboards para empresas',
  },
  {
    id: 'automacoes',
    n: '03',
    tag: 'Automações e IA',
    Icon: IconAutomation,
    title: 'Menos tarefas manuais. Mais eficiência.',
    description:
      'Desenvolvemos automações inteligentes para otimizar processos, melhorar o atendimento e aumentar a produtividade da sua empresa.',
    services: [
      'Automação de atendimento pelo WhatsApp',
      'Fluxos automatizados',
      'Integração entre sistemas',
      'Assistentes com inteligência artificial',
      'Automação de processos empresariais',
    ],
    cta: 'Descubra as possibilidades',
    filter: 'automacoes',
    page: '/automacao-de-processos/',
    pageLabel: 'Automação de processos',
  },
  {
    id: 'apresentacoes',
    n: '04',
    tag: 'Apresentações profissionais',
    Icon: IconSlides,
    title: 'Apresente suas ideias com impacto.',
    description:
      'Transformamos informações em apresentações profissionais, organizadas e visualmente sofisticadas, fortalecendo sua comunicação e transmitindo credibilidade.',
    services: [
      'Apresentações corporativas',
      'Apresentações comerciais',
      'Apresentações institucionais',
      'Pitch decks',
      'Redesign e organização de slides',
    ],
    cta: 'Veja nossas possibilidades',
    filter: 'apresentacoes',
  },
]

export const PROCESS = [
  { n: '01', title: 'Diagnóstico', text: 'Entendemos suas necessidades e objetivos.' },
  { n: '02', title: 'Planejamento', text: 'Definimos a melhor estratégia para o projeto.' },
  { n: '03', title: 'Desenvolvimento', text: 'Transformamos o planejamento em uma solução profissional.' },
  { n: '04', title: 'Entrega', text: 'Apresentamos o resultado e orientamos sobre sua utilização.' },
]

export const SERVICE_OPTIONS = ['Criação de sites', 'Dashboards', 'Desenvolvimento de software', 'Automações', 'Apresentações profissionais', 'Outros projetos']
