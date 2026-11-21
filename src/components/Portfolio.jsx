import { useEffect, useMemo, useState } from 'react'
import { CATEGORIES, PROJECTS } from '../data/projects'
import { Container, Reveal, SectionHeading, SpotlightCard } from './ui'
import { Dashboard, DemoChat, DemoFlow, DemoKPI, DemoLanding, DemoMH, Laptop, Phone, SlideFrame } from './Mockups'
import { IconArrowUpRight, IconSpark } from './icons'

const DEMOS = { landing: DemoLanding, mh: DemoMH, chat: DemoChat, flow: DemoFlow, kpi: DemoKPI }

function ProjectVisual({ p }) {
  const Demo = DEMOS[p.demo]
  const img = p.image && (
    <img src={p.image} alt={`Tela do projeto ${p.title}`} loading="lazy" decoding="async" width="960" height="540" className="h-full w-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
  )
  const content = img || (Demo && <Demo />)
  switch (p.mockup) {
    case 'phone':
      return <Phone>{content}</Phone>
    case 'slide':
      return <SlideFrame>{content}</SlideFrame>
    case 'dashboard':
      return <Dashboard title={p.screenTitle}>{content}</Dashboard>
    default:
      return <Laptop url={p.url}>{content}</Laptop>
  }
}

export default function Portfolio() {
  const [filter, setFilter] = useState('todos')

  useEffect(() => {
    const onFilter = (e) => setFilter(e.detail)
    window.addEventListener('portfolio:filter', onFilter)
    return () => window.removeEventListener('portfolio:filter', onFilter)
  }, [])

  const list = useMemo(() => (filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)), [filter])

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-1/3 h-[60%] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,106,0,.08),transparent)]" />
      <Container>
        <SectionHeading
          id="projetos-title"
          eyebrow="Portfólio"
          title="Projetos que transformam ideias em realidade."
          intro="Trabalhos entregues e demonstrações conceituais que mostram como cada solução funciona na prática. Projetos conceituais estão sempre identificados."
        />

        <Reveal delay={100} className="mt-10">
          <div role="tablist" aria-label="Filtrar projetos por categoria" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
            {CATEGORIES.map((c) => {
              const count = c.id === 'todos' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.id).length
              const on = filter === c.id
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="lista-projetos"
                  onClick={() => setFilter(c.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
                    on ? 'border-orange/70 bg-orange/15 text-white shadow-[0_0_30px_-8px_rgba(255,106,0,.7)]' : 'border-white/10 text-white/60 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {c.label}
                  <span className={`rounded-full px-1.5 text-[10px] tabular-nums ${on ? 'bg-orange text-black' : 'bg-white/10 text-white/60'}`}>{count}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <ul id="lista-projetos" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((p, i) => (
            <Reveal as="li" key={`${filter}-${p.id}`} delay={(i % 3) * 90}>
              <SpotlightCard tilt={false} className="flex h-full flex-col">
                <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,106,0,.22),transparent_65%)] px-4 pt-12 pb-5">
                  <div className="grid-lines absolute inset-0 opacity-60" />
                  <div className="relative w-full transition-transform duration-700 group-hover:-translate-y-1.5">
                    <ProjectVisual p={p} />
                  </div>
                  <span
                    className={`absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${
                      p.status === 'real' ? 'border-orange/50 bg-black/50 text-orange-glow' : 'border-white/15 bg-black/50 text-white/60'
                    }`}
                  >
                    {p.status === 'real' ? 'Projeto entregue' : 'Projeto conceitual'}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-white/55">{p.client}</p>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug text-white">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white/[0.05] px-2 py-1 text-[11px] text-white/55">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5 text-sm">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-orange-glow">
                        {p.linkLabel} <IconArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">(abre em nova aba)</span>
                      </a>
                    ) : (
                      <span className="text-white/55">{p.note || 'Demonstração ilustrativa'}</span>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}

          {/* espaço reservado para novos projetos */}
          <Reveal as="li" key={`${filter}-slot`} delay={(list.length % 3) * 90} className={['', 'lg:col-span-2', ''][list.length % 3] + (list.length % 2 ? '' : ' md:col-span-2 lg:col-span-1')}>
            <a href="#contato" className="group flex h-full min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 p-8 text-center transition-all duration-500 hover:border-orange/60 hover:bg-orange/[0.04]">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-orange/40 text-orange-glow transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110">
                <IconSpark className="h-6 w-6" />
              </span>
              <p className="mt-5 font-display text-lg font-semibold text-white">Seu projeto pode estar aqui.</p>
              <p className="mt-2 max-w-[16rem] text-sm text-muted">Conte sua ideia e vamos transformá-la no próximo case da AJU Digital.</p>
              <span className="mt-5 text-sm font-semibold text-orange-glow">Iniciar conversa →</span>
            </a>
          </Reveal>
        </ul>
      </Container>
    </section>
  )
}
