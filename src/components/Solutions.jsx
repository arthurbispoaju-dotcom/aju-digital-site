import { SOLUTIONS } from '../data/content'
import { Container, Reveal, SectionHeading, SpotlightCard } from './ui'
import { IconArrow, IconCheck } from './icons'

export const filterPortfolio = (filter) => window.dispatchEvent(new CustomEvent('portfolio:filter', { detail: filter }))

export default function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="solucoes-title"
            eyebrow="Nossas soluções"
            title="Inteligência digital para impulsionar seus projetos."
          />
          <Reveal delay={150} className="max-w-sm text-muted lg:pb-2">
            Quatro frentes que se complementam: presença digital, sistemas sob medida, eficiência operacional e comunicação de impacto.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:gap-6">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 120}>
              <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-orange/30 bg-gradient-to-br from-orange/25 to-orange/5 text-orange-glow shadow-[0_0_30px_-6px_rgba(255,106,0,.6)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                    <s.Icon className="h-7 w-7" />
                  </div>
                  <span className="font-display text-6xl font-semibold leading-none text-white/[0.05] transition-colors duration-500 group-hover:text-orange/20">{s.n}</span>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-orange-glow">{s.tag}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.description}</p>

                <ul className="mt-7 space-y-3 border-t border-white/[0.06] pt-6">
                  {s.services.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#projetos"
                  onClick={() => filterPortfolio(s.filter)}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white transition-colors hover:text-orange-glow"
                >
                  {s.cta}
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-black">
                    <IconArrow className="h-4 w-4" />
                  </span>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
