import { SERVICES } from '../data/services'
import { Container } from './ui'
import { IconArrow } from './icons'

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative flex min-h-[80vh] items-center pt-32 pb-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_30%,rgba(255,106,0,.15),transparent)]" />
      <Container className="text-center">
        <p className="font-display text-7xl font-semibold text-orange/40 sm:text-8xl">404</p>
        <h1 id="nf-title" className="mt-6 text-3xl font-semibold sm:text-4xl">Página não encontrada.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">O endereço pode ter mudado ou não existe mais. Veja abaixo por onde continuar.</p>
        <a href="/" className="btn btn-primary mt-9">
          Ir para o início <IconArrow className="h-4 w-4" />
        </a>
        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {SERVICES.map((s) => (
            <li key={s.path}>
              <a href={s.path} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition hover:border-orange/50 hover:text-white">
                <s.Icon className="h-4 w-4 text-orange-glow" /> {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
