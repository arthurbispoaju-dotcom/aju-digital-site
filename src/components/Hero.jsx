import Ecosystem from './Ecosystem'
import ParticleField from './ParticleField'
import { Container } from './ui'
import { IconArrow, IconWhatsApp } from './icons'
import { whatsappLink } from '../config'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-10">
      {/* Iluminação cinematográfica */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_72%_48%,rgba(255,106,0,.22),transparent_70%)]" />
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-orange/10 blur-[140px]" />
        <div className="light-columns absolute inset-0 animate-beam" />
        <div className="grid-lines absolute inset-0" />
        {/* horizonte orbital */}
        <div className="absolute -bottom-[62vw] left-1/2 h-[90vw] w-[160vw] -translate-x-1/2 rounded-[50%] border-t border-orange/40 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,.18),transparent_45%)] shadow-[0_-30px_120px_-20px_rgba(255,106,0,.35)] sm:-bottom-[70vw]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>
      <ParticleField />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="relative z-10 text-center lg:text-left">
          <p className="eyebrow max-sm:tracking-[0.18em] max-sm:before:hidden animate-[fade-up_1s_ease-out_both]">Tecnologia · Automação · Criatividade</p>
          <h1 id="hero-title" className="mt-6 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[3.9rem] xl:text-[4.5rem]">
            <span className="block text-fade">Transformamos ideias em</span>
            <span className="text-gradient-anim">experiências digitais.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0">
            Desenvolvemos sites profissionais, softwares sob medida, automações inteligentes e apresentações estratégicas para empresas que desejam crescer, inovar e se destacar.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#solucoes" className="btn btn-primary group w-full sm:w-auto">
              Conheça nossas soluções
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">
              <IconWhatsApp className="h-4 w-4 text-orange-glow" />
              Fale com a Aju Digital
            </a>
          </div>

          <ul className="mt-12 hidden flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45 sm:flex sm:justify-center lg:justify-start">
            {['Sites', 'Software sob medida', 'Automações com IA', 'Apresentações'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-orange" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[640px]">
          <Ecosystem />
        </div>
      </Container>

      <a href="#solucoes" aria-label="Rolar para as soluções" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white/70 lg:flex">
        Role
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-4 animate-[scroll-line_2s_ease-in-out_infinite] bg-orange-glow" />
        </span>
      </a>
    </section>
  )
}
