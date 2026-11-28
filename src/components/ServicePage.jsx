import { PROJECTS } from '../data/projects'
import { whatsappLink } from '../config'
import { Container, Reveal, SectionHeading, SpotlightCard } from './ui'
import { Dashboard, DemoFlow, DemoKPI, DemoLanding, Laptop, SlideFrame } from './Mockups'
import { IconArrow, IconArrowUpRight, IconCheck, IconWhatsApp } from './icons'
import ParticleField from './ParticleField'
import Contact from './Contact'

function HeroVisual({ type }) {
  if (type === 'dashboard') return <Dashboard title="Painel de indicadores"><DemoKPI /></Dashboard>
  if (type === 'automacao') return <Dashboard title="Fluxo automatizado"><DemoFlow /></Dashboard>
  if (type === 'software') {
    const img = PROJECTS.find((p) => p.id === 'despacho')?.image
    return <Laptop url="sistema.suaempresa.com.br"><img src={img} alt="Tela do sistema Despacho, desenvolvido pela AJU Digital" width="960" height="540" className="h-full w-full object-cover object-top" /></Laptop>
  }
  if (type === 'slides') {
    const img = PROJECTS.find((p) => p.id === 'pesv')?.image
    return <SlideFrame><img src={img} alt="Apresentação interativa PESV, criada pela AJU Digital" width="960" height="540" className="h-full w-full object-cover object-top" /></SlideFrame>
  }
  return <Laptop url="ajudigital.com.br"><DemoLanding /></Laptop>
}

function Breadcrumb({ label }) {
  return (
    <nav aria-label="Você está em" className="text-xs text-white/45">
      <ol className="flex items-center gap-2">
        <li><a href="/" className="transition hover:text-orange-glow">Início</a></li>
        <li aria-hidden>/</li>
        <li aria-current="page" className="text-white/70">{label}</li>
      </ol>
    </nav>
  )
}

export default function ServicePage({ service: s, others }) {
  const projects = s.projects.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean)

  return (
    <>
      {/* Topo */}
      <section id="inicio" aria-labelledby="servico-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[70%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(255,106,0,.22),transparent)]" />
          <div className="grid-lines absolute inset-0 opacity-50" />
        </div>
        <ParticleField density={0.5} />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumb label={s.label} />
            <span className="eyebrow mt-8">{s.eyebrow}</span>
            <h1 id="servico-title" className="mt-6 text-[2.5rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4rem]">
              <span className="text-fade">{s.h1[0]}</span>
              <span className="text-gradient">{s.h1[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{s.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(s.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
                <IconWhatsApp className="h-5 w-5" /> Falar no WhatsApp
              </a>
              <a href="#contato" className="btn btn-ghost w-full sm:w-auto">
                Pedir orçamento <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-orange/10 blur-3xl" />
            <HeroVisual type={s.visual} />
          </div>
        </Container>
      </section>

      {/* Problemas */}
      <section aria-labelledby="dores-title" className="relative py-20 sm:py-28">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
        <Container>
          <SectionHeading id="dores-title" eyebrow="Por que investir" title={s.pains.title} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {s.pains.items.map(([title, text], i) => (
              <Reveal as="li" key={title} delay={i * 90}>
                <SpotlightCard tilt={false} className="h-full p-7">
                  <span className="font-display text-4xl font-semibold text-orange/30">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Entregáveis */}
      <section aria-labelledby="entrega-title" className="relative py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading id="entrega-title" eyebrow="A solução" title={s.deliverables.title} />
              <Reveal delay={120} className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-glow">Ideal para</p>
                <ul className="mt-4 space-y-3">
                  {s.types.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-white/80">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange" /> {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {s.deliverables.items.map(([title, text], i) => (
                <Reveal as="li" key={title} delay={(i % 2) * 90}>
                  <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                    <s.Icon className="h-6 w-6 text-orange-glow" />
                    <h3 className="mt-4 font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section aria-labelledby="etapas-title" className="relative py-20 sm:py-28">
        <Container>
          <SectionHeading id="etapas-title" eyebrow="Como funciona" title="Do primeiro contato à entrega." align="center" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map(([title, text], i) => (
              <Reveal as="li" key={title} delay={i * 90} className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-orange/40 font-display text-sm font-semibold text-orange-glow">0{i + 1}</span>
                <h3 className="mt-5 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Exemplos */}
      {projects.length > 0 && (
        <section aria-labelledby="exemplos-title" className="relative py-20 sm:py-28">
          <Container>
            <SectionHeading id="exemplos-title" eyebrow="Exemplos" title="Veja na prática." intro="Projetos conceituais estão sempre identificados." />
            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal as="li" key={p.id} delay={i * 90}>
                  <SpotlightCard tilt={false} className="flex h-full flex-col p-7">
                    <span className={`w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${p.status === 'real' ? 'border-orange/50 text-orange-glow' : 'border-white/15 text-white/60'}`}>
                      {p.status === 'real' ? 'Projeto entregue' : 'Projeto conceitual'}
                    </span>
                    <p className="mt-5 text-xs text-white/55">{p.client}</p>
                    <h3 className="mt-1.5 text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.description}</p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-white transition-colors hover:text-orange-glow">
                        {p.linkLabel} <IconArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">(abre em nova aba)</span>
                      </a>
                    )}
                  </SpotlightCard>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-8">
              <a href="/#projetos" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-orange-glow">
                Ver o portfólio completo <IconArrow className="h-4 w-4" />
              </a>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Perguntas frequentes */}
      <section aria-labelledby="faq-title" className="relative py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading id="faq-title" eyebrow="Dúvidas" title="Perguntas frequentes" align="center" />
          <div className="mt-12 space-y-3">
            {s.faq.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] open:border-orange/40 open:bg-orange/[0.04]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-white [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base">{q}</h3>
                  <span aria-hidden className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-orange-glow transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Outros serviços */}
      <section aria-labelledby="outros-title" className="relative py-16">
        <Container>
          <h2 id="outros-title" className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Outros serviços</h2>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
            {others.map((o) => (
              <li key={o.path}>
                <a href={o.path} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition hover:border-orange/50 hover:text-white">
                  <o.Icon className="h-4 w-4 text-orange-glow" /> {o.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#solucoes" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition hover:border-orange/50 hover:text-white">
                Todas as soluções <IconArrow className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <Contact defaultService={s.formService} />
    </>
  )
}
