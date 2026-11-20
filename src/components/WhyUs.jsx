import { Container, Reveal, SectionHeading, SpotlightCard } from './ui'
import { IconBolt, IconChip, IconCustom, IconDesign, IconEye, IconPin, IconTarget } from './icons'
import { CONTACT } from '../config'

const ITEMS = [
  { Icon: IconCustom, title: 'Desenvolvimento personalizado', text: 'Cada projeto nasce do zero, pensado para a sua realidade.' },
  { Icon: IconDesign, title: 'Design moderno e profissional', text: 'Visual atual, limpo e coerente com a sua marca.' },
  { Icon: IconChip, title: 'Tecnologia aplicada aos negócios', text: 'Ferramentas escolhidas pelo resultado que entregam, não pela moda.' },
  { Icon: IconTarget, title: 'Soluções alinhadas ao cliente', text: 'Primeiro entendemos o processo; depois escolhemos a ferramenta.' },
  { Icon: IconEye, title: 'Comunicação visual estratégica', text: 'Informação organizada para ser entendida e lembrada.' },
  { Icon: IconBolt, title: 'Foco em eficiência e experiência', text: 'Menos atrito para a sua equipe e para quem chega até você.' },
]

export default function WhyUs() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-orange/10 blur-[150px]" />
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="sobre-title" eyebrow="Por que a AJU Digital" title="Não entregamos apenas projetos. Criamos soluções." />
          <Reveal delay={120} className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              A AJU Digital ajuda empresas e profissionais a fortalecer sua presença digital, automatizar processos e melhorar sua comunicação por meio de soluções tecnológicas e criativas.
            </p>
            <p>
              Nascemos em Aracaju, com experiência prática em Salesforce, automação com N8N e Make, desenvolvimento de sistemas web e apresentações interativas, e atendemos clientes de Sergipe, de todo o Brasil e do exterior.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-wrap gap-2">
            {['Salesforce', 'N8N', 'Make', 'APIs', 'HTML · CSS · JavaScript', 'Inteligência artificial'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/70">{t}</span>
            ))}
          </Reveal>
          <Reveal delay={260} className="mt-8 inline-flex items-center gap-2 text-sm text-white/55">
            <IconPin className="h-4 w-4 text-orange" /> {CONTACT.city} · atendimento em todo o Brasil
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {ITEMS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 100 + Math.floor(i / 2) * 60}>
              <SpotlightCard className="h-full p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-glow transition-all duration-500 group-hover:border-orange/50 group-hover:shadow-[0_0_24px_-4px_rgba(255,106,0,.7)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-xs text-white/25">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                <span aria-hidden className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-orange to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
