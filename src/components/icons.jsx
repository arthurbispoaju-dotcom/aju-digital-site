// Ícones de traço fino, desenhados para a identidade da AJU Digital.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

const make = (paths) =>
  function Icon({ className = 'h-6 w-6', ...rest }) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden {...base} {...rest}>
        {paths}
      </svg>
    )
  }

export const IconBrowser = make(<><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 8.5h18M6.5 6.3h.01M9 6.3h.01" /><path d="M7 13h6M7 16h10" /></>)
export const IconAutomation = make(<><circle cx="5.5" cy="6" r="2.2" /><circle cx="18.5" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" /><path d="M7.7 6h8.6M6.6 8l4.3 8M17.4 8l-4.3 8" /></>)
export const IconSlides = make(<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 16v4M8.5 20h7" /><path d="M7 12.5l3-3 2.5 2 4.5-4" /></>)
export const IconArrow = make(<path d="M5 12h14M13 6l6 6-6 6" />)
export const IconArrowUpRight = make(<path d="M7 17L17 7M9 7h8v8" />)
export const IconCheck = make(<path d="M5 12.5l4.2 4.2L19 7" />)
export const IconSpark = make(<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />)
export const IconCustom = make(<><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>)
export const IconDesign = make(<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>)
export const IconChip = make(<><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>)
export const IconTarget = make(<><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r=".6" /></>)
export const IconEye = make(<><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></>)
export const IconBolt = make(<path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />)
export const IconMail = make(<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M4 7l8 6 8-6" /></>)
export const IconPin = make(<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>)
export const IconMenu = make(<path d="M4 7h16M4 12h16M4 17h10" />)
export const IconClose = make(<path d="M6 6l12 12M18 6L6 18" />)
export const IconSearch = make(<><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>)
export const IconCompass = make(<><circle cx="12" cy="12" r="8.5" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></>)
export const IconCode = make(<path d="M8.5 8L4.5 12l4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13" />)
export const IconRocket = make(<><path d="M12 15l-3-3c1.5-4.5 4.8-7.6 10-8.5-.9 5.2-4 8.5-8.5 10z" /><path d="M9 12l-3.5.5L4 15l3.5.5M12 15l-.5 3.5L9 20l-.5-3.5" /><circle cx="14.8" cy="9.2" r="1.3" /></>)

export function IconWhatsApp({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  )
}
export function IconLinkedIn({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
    </svg>
  )
}
export function IconGitHub({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  )
}
export function IconInstagram({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  )
}
