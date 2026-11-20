import { useEffect, useRef, useState } from 'react'
import { PROCESS } from '../data/content'
import { Container, Reveal, SectionHeading } from './ui'
import { IconCode, IconCompass, IconRocket, IconSearch } from './icons'

const ICONS = [IconSearch, IconCompass, IconCode, IconRocket]

export default function Process() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  // A linha de progresso acompanha a rolagem da página
  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh * 0.75 - r.top) / (r.height + vh * 0.1)
      setProgress(Math.max(0, Math.min(1, p)))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="processo" aria-labelledby="processo-title" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading id="processo-title" eyebrow="Nosso processo" title="Do planejamento à entrega." align="center" intro="Um caminho claro, com você acompanhando cada etapa." />

        <div ref={ref} className="relative mt-16 lg:mt-20">
          {/* trilho horizontal (desktop) */}
          <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-white/10 lg:block">
            <div className="h-full origin-left bg-gradient-to-r from-orange via-orange-glow to-orange shadow-[0_0_12px_rgba(255,106,0,.9)] transition-transform duration-200" style={{ transform: `scaleX(${progress})` }} />
            <span className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_4px_rgba(255,140,50,.9)] transition-[left] duration-200" style={{ left: `${progress * 100}%` }} />
          </div>
          {/* trilho vertical (mobile) */}
          <div aria-hidden className="absolute bottom-10 left-7 top-7 w-px bg-white/10 lg:hidden">
            <div className="w-full origin-top bg-gradient-to-b from-orange to-orange-glow shadow-[0_0_12px_rgba(255,106,0,.9)]" style={{ height: '100%', transform: `scaleY(${progress})` }} />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((step, i) => {
              const Icon = ICONS[i]
              const active = progress >= i / PROCESS.length + 0.02
              return (
                <Reveal as="li" key={step.n} delay={i * 120} className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
                  <span
                    className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border transition-all duration-700 ${
                      active ? 'border-orange/70 bg-[#1a0f07] text-orange-glow shadow-[0_0_30px_-4px_rgba(255,106,0,.8)]' : 'border-white/10 bg-graphite text-white/40'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="lg:mt-7">
                    <span className={`font-display text-sm transition-colors duration-700 ${active ? 'text-orange-glow' : 'text-white/30'}`}>{step.n}</span>
                    <h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted lg:mx-auto">{step.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
