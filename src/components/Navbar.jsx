import { useEffect, useState } from 'react'
import Logo from './Logo'
import { NAV } from '../config'
import { IconClose, IconMenu } from './icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Destaca o item do menu da seção visível
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Principal"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-500 ${
          scrolled || open ? 'glass shadow-[0_20px_60px_-20px_rgba(0,0,0,.8)]' : 'border border-transparent'
        }`}
      >
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="AJU Digital, ir para o início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === item.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-orange-glow to-transparent transition-opacity ${
                    active === item.href ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contato" className="btn btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Solicitar orçamento
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div aria-hidden onClick={() => setOpen(false)} className={`fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} />
      <div
        id="menu-mobile"
        className={`relative mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e0e]/[0.97] shadow-[0_30px_80px_rgba(0,0,0,.8)] backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-3">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-lg text-white/85 hover:bg-white/5"
              >
                {item.label}
                <span className="text-xs text-orange-glow/70">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="p-2 pt-3">
            <a href="#contato" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Solicitar orçamento
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
