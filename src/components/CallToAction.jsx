import ParticleField from './ParticleField'
import { Container, Reveal } from './ui'
import { IconWhatsApp } from './icons'
import { whatsappLink } from '../config'
import symbol from '../assets/simbolo-gradiente.png'

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-ink px-6 py-20 text-center sm:px-12 sm:py-28">
            {/* iluminação */}
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-full h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,.55),rgba(255,106,0,.12)_40%,transparent_65%)]" />
              <div className="absolute left-1/2 top-[78%] h-[120%] w-[140%] -translate-x-1/2 rounded-[50%] border-t border-orange-glow/70 shadow-[0_-20px_80px_-10px_rgba(255,106,0,.6)]" />
              <div className="light-columns absolute inset-0 animate-beam opacity-70" />
              <div className="grid-lines absolute inset-0" />
            </div>
            <ParticleField density={0.6} />
            <img src={symbol} alt="" aria-hidden className="pointer-events-none absolute -right-10 -top-10 w-56 rotate-12 opacity-[0.07] sm:w-72" />

            <div className="relative">
              <span className="eyebrow justify-center">Vamos começar</span>
              <h2 id="cta-title" className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                <span className="text-fade">Seu próximo projeto pode </span>
                <span className="text-gradient">começar agora.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-white/65 sm:text-lg">
                Conte com a Aju Digital para transformar suas ideias em soluções digitais profissionais.
              </p>
              <a
                href={whatsappLink('Olá, AJU Digital! Vim pelo site e quero conversar sobre um projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group mt-10 !px-8 !py-4 text-base"
              >
                <span aria-hidden className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange/30 [animation-duration:2.6s]" />
                <IconWhatsApp className="h-5 w-5" />
                Vamos conversar?
              </a>
              <p className="mt-4 text-xs text-white/40">Atendimento direto pelo WhatsApp comercial</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
