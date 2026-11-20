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

export default function App() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:text-black">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="overflow-x-clip">
        <Hero />
        <Solutions />
        <WhyUs />
        <Portfolio />
        <Process />
        <CallToAction />
        <Contact />
      </main>
      <Footer />

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
