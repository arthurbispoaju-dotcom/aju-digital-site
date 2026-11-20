import Logo from './Logo'
import { CONTACT, NAV, SOCIALS, whatsappLink } from '../config'
import { IconGitHub, IconInstagram, IconLinkedIn, IconMail, IconWhatsApp } from './icons'
import { Container } from './ui'
import { filterPortfolio } from './Solutions'

const SERVICES = [
  { label: 'Criação de sites', filter: 'sites' },
  { label: 'Desenvolvimento de software', filter: 'software' },
  { label: 'Automações', filter: 'automacoes' },
  { label: 'Apresentações profissionais', filter: 'apresentacoes' },
]

export default function Footer() {
  const socials = [
    ['WhatsApp', whatsappLink(), IconWhatsApp],
    ['E-mail', `mailto:${CONTACT.email}`, IconMail],
    ['LinkedIn', SOCIALS.linkedin, IconLinkedIn],
    ['GitHub', SOCIALS.github, IconGitHub],
    ['Instagram', SOCIALS.instagram, IconInstagram],
  ].filter(([, url]) => url)

  return (
    <footer className="relative mt-10 border-t border-white/[0.06] bg-[#060606]">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo size="lg" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">Transformamos ideias em experiências digitais.</p>
          <div className="mt-6 flex gap-2">
            {socials.map(([name, url, Icon]) => (
              <a key={name} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={name} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-orange/50 hover:text-orange-glow">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="font-display text-sm font-semibold text-white">Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-muted transition hover:text-orange-glow">{n.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Serviços</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.label}><a href="#projetos" onClick={() => filterPortfolio(s.filter)} className="text-muted transition hover:text-orange-glow">{s.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Contato</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-orange-glow">{CONTACT.whatsappDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="break-all transition hover:text-orange-glow">{CONTACT.email}</a></li>
            <li>{CONTACT.city}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/[0.05]">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/35 sm:flex-row">
          <p suppressHydrationWarning>© {new Date().getFullYear()} AJU Digital. Todos os direitos reservados.</p>
          <p>Tecnologia · Automação · Criatividade</p>
        </Container>
      </div>
    </footer>
  )
}
