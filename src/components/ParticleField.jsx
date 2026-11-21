import { useEffect, useRef } from 'react'

/**
 * Partículas tecnológicas em canvas: leves, pausam fora da tela
 * e respeitam "reduzir movimento" do sistema.
 */
export default function ParticleField({ density = 1, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, dpr = 1, raf = 0, running = true
    let particles = []
    // celular/tablet: menos partículas, sem brilho e resolução 1x (economiza GPU no iPhone)
    const lite = window.matchMedia('(hover: none), (max-width: 1023px)').matches
    let lastW = 0
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      // no iPhone a barra do navegador some/aparece ao rolar e dispara 'resize': só refaz se a largura mudar
      if (lastW && Math.abs(r.width - lastW) < 1) return
      lastW = r.width
      dpr = lite ? 1 : Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(110, (w * h) / 14000) * density * (lite ? 0.45 : 1))
      particles = Array.from({ length: count }, () => spawn(true))
    }
    const spawn = (anywhere) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      r: Math.random() * 1.6 + 0.3,
      vy: -(Math.random() * 0.25 + 0.05),
      vx: (Math.random() - 0.5) * 0.12,
      a: Math.random() * 0.6 + 0.15,
      hot: Math.random() < 0.55,
      tw: Math.random() * Math.PI * 2,
    })

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.tw += 0.03
        // leve repulsão do cursor
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 12000) { p.x += dx * 0.004; p.y += dy * 0.004 }
        if (p.y < -10 || p.x < -10 || p.x > w + 10) particles[i] = spawn(false)
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.hot ? `rgba(255,140,50,${alpha})` : `rgba(255,255,255,${alpha * 0.7})`
        ctx.shadowBlur = p.hot && !lite ? 8 : 0
        ctx.shadowColor = 'rgba(255,106,0,.9)'
        ctx.fill()
      }
      // conexões sutis entre partículas próximas
      ctx.shadowBlur = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = dx * dx + dy * dy
          if (d < 5200) {
            ctx.strokeStyle = `rgba(255,140,50,${0.12 * (1 - d / 5200)})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      if (running && !reduce) raf = requestAnimationFrame(draw)
    }

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting
      cancelAnimationFrame(raf)
      if (running) raf = requestAnimationFrame(draw)
    })

    resize()
    draw()
    io.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [density])

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />
}
