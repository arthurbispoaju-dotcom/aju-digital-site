import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { whatsappLink } from './config'
import { IconWhatsApp } from './components/icons'
import ServicePage from './components/ServicePage'
import NotFound from './components/NotFound'
import { SERVICES } from './data/services'

/** Normaliza o caminho: sempre com barra no fim (/pagina/). */
export const normalizePath = (p = '/') => (p.endsWith('/') ? p : `${p}/`)

/** Rotas pré-renderizadas no build (o 404 é gerado à parte). */
export const ROUTES = ['/', ...SERVICES.map((s) => s.path)]

function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhyUs />
      <Portfolio />
      <Process />
      <CallToAction />
      <Contact />
    </>
  )
}

export default function App({ path = '/' }) {
  const p = normalizePath(path)
  const isHome = p === '/'
  const service = SERVICES.find((s) => s.path === p)
  const base = isHome ? '' : '/'
  const page = isHome ? <Home /> : service ? <ServicePage service={service} others={SERVICES.filter((s) => s !== service)} /> : <NotFound />

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:text-black">
        Pular para o conteúdo
      </a>
      <Navbar base={base} ctaHref={isHome || service ? '#contato' : '/#contato'} />
      <main id="conteudo" className="overflow-x-clip">
        {page}
      </main>
      <Footer base={base} />

      {/* WhatsApp flutuante */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a AJU Digital no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-orange-glow to-orange text-black shadow-[0_10px_40px_-6px_rgba(255,106,0,.8)] transition-transform hover:scale-110"
      >
        <IconWhatsApp className="h-6 w-6" />
      </a>
    </>
  )
}
