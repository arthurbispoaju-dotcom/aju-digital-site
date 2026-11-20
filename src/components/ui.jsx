import { useEffect, useRef, useState } from 'react'

/** Revela o conteúdo com fade + blur quando entra na tela. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', id }) {
  const center = align === 'center'
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[3.25rem] text-fade">
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base leading-relaxed text-muted sm:text-lg ${center ? 'mx-auto' : ''} max-w-2xl`}>{intro}</p>}
    </Reveal>
  )
}

/** Card com efeito de luz que segue o cursor e leve inclinação 3D. */
export function SpotlightCard({ className = '', children, tilt = true, ...rest }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt && window.matchMedia('(hover: hover)').matches) {
      const rx = ((y / r.height) - 0.5) * -5
      const ry = ((x / r.width) - 0.5) * 6
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group glass glow-border relative overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-500 ease-out hover:shadow-[0_30px_80px_-30px_rgba(255,106,0,.45)] ${className}`}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,120,30,.14), transparent 60%)' }}
      />
      {children}
    </div>
  )
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}
