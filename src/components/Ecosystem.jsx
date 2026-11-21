import { useEffect, useRef } from 'react'
import symbol from '../assets/simbolo-gradiente.png'

/**
 * Composição 3D da primeira dobra: as quatro soluções da AJU Digital
 * (Sites, Software, Automações + IA, Apresentações) orbitando um núcleo,
 * conectadas por linhas de luz. Feita em CSS 3D + SVG: leve e sem WebGL.
 */

const NODES = [
  { key: 'sites', x: 24, y: 17, z: 70, delay: '0s', label: 'Sites', n: '01', Panel: SitesPanel },
  { key: 'software', x: 76, y: 23, z: 30, delay: '-1.6s', label: 'Software', n: '02', Panel: SoftwarePanel },
  { key: 'slides', x: 76, y: 77, z: 100, delay: '-4.6s', label: 'Apresentações', n: '04', Panel: SlidesPanel },
  { key: 'auto', x: 24, y: 72, z: 50, delay: '-3s', label: 'Automações + IA', n: '03', Panel: AutomationPanel },
]
const CORE = { x: 50, y: 48 }

export default function Ecosystem() {
  const sceneRef = useRef(null)

  useEffect(() => {
    const el = sceneRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const loop = () => {
      cx += (tx - cx) * 0.05
      cy += (ty - cy) * 0.05
      el.style.transform = `rotateX(${10 - cy * 7}deg) rotateY(${cx * 10}deg)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const path = (n) => {
    const mx = (n.x + CORE.x) / 2 + (n.y < CORE.y ? 4 : -4)
    const my = (n.y + CORE.y) / 2 + (n.x < CORE.x ? -4 : 4)
    return `M ${CORE.x} ${CORE.y} Q ${mx} ${my} ${n.x} ${n.y}`
  }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[600px] select-none"
      style={{ perspective: '1400px', containerType: 'inline-size' }}
      role="img"
      aria-label="Ilustração: sites, software, automações com IA e apresentações conectados por linhas de luz a um núcleo central da AJU Digital"
    >
      {/* brilho de fundo */}
      <div aria-hidden className="heavy-blur absolute left-1/2 top-[52%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/25 blur-[90px] animate-pulse-glow" />
      {/* versão leve do brilho para celular (gradiente, sem filtro) */}
      <div aria-hidden className="absolute left-1/2 top-[52%] h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,.28),transparent_62%)] glow-lite" />

      <div
        ref={sceneRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg)' }}
      >
        {/* plataforma orbital */}
        <div aria-hidden className="absolute left-1/2 top-[56%] h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(-50%,-50%) rotateX(74deg)', transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 rounded-full border border-orange/25 shadow-[0_0_60px_rgba(255,106,0,.25)_inset]" />
          <div className="absolute inset-[12%] rounded-full border border-dashed border-white/10 animate-spin-slow" />
          <div className="absolute inset-[26%] rounded-full border border-orange/30 animate-spin-rev">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-glow shadow-[0_0_14px_4px_rgba(255,140,50,.8)]" />
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            <span className="absolute left-[6%] top-[22%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,.6)]" />
          </div>
        </div>

        {/* linhas de luz */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden style={{ transform: 'translateZ(20px)' }}>
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffb070" />
              <stop offset="1" stopColor="#ff6a00" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.9" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {/* triângulo do ecossistema */}
          <path d={`M ${NODES.map((n) => `${n.x} ${n.y}`).join(' L ')} Z`} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth=".25" strokeDasharray="1 1.4" />
          {NODES.map((n, i) => (
            <g key={n.key} filter="url(#glow)">
              <path id={`p-${n.key}`} d={path(n)} fill="none" stroke="url(#beam)" strokeOpacity=".35" strokeWidth=".45" />
              <path d={path(n)} fill="none" stroke="url(#beam)" strokeWidth=".55" strokeDasharray="2 6" className="animate-dash" style={{ animationDelay: `${i * -0.7}s` }} />
              <circle r=".9" fill="#fff">
                <animateMotion dur={`${2.6 + i * 0.5}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#p-${n.key}`} />
                </animateMotion>
              </circle>
              <circle r="1.3" fill="#ff8c32" opacity=".7">
                <animateMotion dur={`${2.6 + i * 0.5}s`} begin={`${-1.3 - i * 0.3}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear" repeatCount="indefinite">
                  <mpath href={`#p-${n.key}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </svg>

        {/* núcleo */}
        <div
          className="absolute"
          style={{ left: `${CORE.x}%`, top: `${CORE.y}%`, width: '25%', transform: 'translate(-50%,-50%) translateZ(60px)', transformStyle: 'preserve-3d' }}
        >
          <div className="relative aspect-square w-full animate-float-slow">
            <div className="absolute -inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,.45),transparent_65%)] animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#2a2a2a,#0b0b0b_60%)] shadow-[0_0_0_1px_rgba(255,140,50,.5),0_0_50px_rgba(255,106,0,.55),inset_0_-12px_30px_rgba(255,106,0,.25)]" />
            <div className="absolute -inset-[14%] rounded-full border border-orange/40 border-t-transparent border-l-transparent animate-spin-slow" />
            <div className="absolute -inset-[24%] rounded-full border border-white/10 border-b-transparent animate-spin-rev" />
            <img src={symbol} alt="" className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_14px_rgba(255,106,0,.7)]" />
          </div>
        </div>

        {/* painéis das soluções */}
        {NODES.map(({ key, x, y, z, delay, label, n, Panel }) => (
          <div
            key={key}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%`, width: '40%', transform: `translate(-50%,-50%) translateZ(${z}px)`, transformStyle: 'preserve-3d' }}
          >
            <div className="animate-float" style={{ animationDelay: delay }}>
              <div
                className="glass glow-border overflow-hidden rounded-[1.1em] shadow-[0_30px_60px_-20px_rgba(0,0,0,.9),0_0_40px_-10px_rgba(255,106,0,.35)]"
                style={{ fontSize: 'clamp(6px, 2.05cqw, 12.5px)' }}
              >
                <Panel />
              </div>
              <div className="relative mx-auto mt-[0.6em] flex w-fit items-center justify-center gap-[0.5em] rounded-full border border-white/5 bg-[#0b0b0b]/85 px-[0.8em] py-[0.25em] font-display backdrop-blur" style={{ fontSize: 'clamp(9px, 2.2cqw, 13px)', transform: 'translateZ(1px)' }}>
                <span className="text-orange-glow">{n}</span>
                <span className="text-white/80">{label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Dots() {
  return (
    <div className="flex gap-[0.35em]">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-[0.55em] w-[0.55em] rounded-full bg-white/20" />
      ))}
    </div>
  )
}

function SitesPanel() {
  return (
    <div className="bg-[#0d0d0d]/80">
      <div className="flex items-center gap-[0.8em] border-b border-white/5 px-[0.9em] py-[0.6em]">
        <Dots />
        <div className="flex-1 truncate rounded-full bg-white/5 px-[0.8em] py-[0.15em] text-[0.8em] text-white/40">seusite.com.br</div>
      </div>
      <div className="relative space-y-[0.6em] p-[1em]">
        <div className="absolute right-[0.8em] top-[0.8em] h-[3.4em] w-[3.4em] rounded-full bg-orange/30 blur-[1.2em]" />
        <div className="h-[0.7em] w-[70%] rounded-full bg-white/80" />
        <div className="h-[0.7em] w-[48%] rounded-full bg-gradient-to-r from-orange-glow to-orange" />
        <div className="h-[0.4em] w-[80%] rounded-full bg-white/15" />
        <div className="flex gap-[0.5em] pt-[0.2em]">
          <span className="h-[1.4em] w-[4.5em] rounded-full bg-orange" />
          <span className="h-[1.4em] w-[3.5em] rounded-full border border-white/20" />
        </div>
        <div className="grid grid-cols-3 gap-[0.5em] pt-[0.4em]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-[2.6em] rounded-[0.5em] border border-white/5 bg-white/[0.04]" />
          ))}
        </div>
      </div>
    </div>
  )
}

function SoftwarePanel() {
  const lines = [
    [['text-orange-glow', 'const'], ['text-white/85', ' sistema'], ['text-white/40', ' = '], ['text-sky-300/90', 'criar'], ['text-white/40', '({'],],
    [['pl-[1.2em] text-white/55', 'clientes'], ['text-white/40', ': '], ['text-emerald-300/90', 'true'], ['text-white/40', ',']],
    [['pl-[1.2em] text-white/55', 'painel'], ['text-white/40', ': '], ['text-emerald-300/90', 'true'], ['text-white/40', ',']],
    [['pl-[1.2em] text-white/55', 'relatórios'], ['text-white/40', ': '], ['text-orange-glow', "'auto'"]],
    [['text-white/40', '})']],
  ]
  return (
    <div className="bg-[#0d0d0d]/80">
      <div className="flex items-center gap-[0.6em] border-b border-white/5 px-[0.9em] py-[0.55em] text-[0.78em]">
        <span className="rounded-[0.35em] bg-white/[0.07] px-[0.6em] py-[0.1em] text-white/75">app.js</span>
        <span className="text-white/30">painel.js</span>
      </div>
      <div className="space-y-[0.35em] p-[0.9em] font-mono text-[0.8em] leading-none">
        {lines.map((parts, i) => (
          <div key={i} className="flex items-center gap-[0.7em]">
            <span className="w-[1em] text-right text-white/20">{i + 1}</span>
            <span className="whitespace-nowrap">{parts.map(([c, t], j) => <span key={j} className={c}>{t}</span>)}{i === 3 && <span className="ml-px inline-block h-[1em] w-[0.12em] animate-pulse bg-orange-glow align-middle" />}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/5 px-[0.9em] py-[0.5em] text-[0.75em]">
        <span className="text-white/40">deploy</span>
        <span className="flex items-center gap-[0.35em] text-emerald-400/90"><span className="h-[0.5em] w-[0.5em] rounded-full bg-emerald-400" /> publicado</span>
      </div>
    </div>
  )
}

function AutomationPanel() {
  return (
    <div className="space-y-[0.7em] bg-[#0d0d0d]/80 p-[1em]">
      <div className="flex items-center justify-between text-[0.8em] text-white/50">
        <span>Fluxo ativo</span>
        <span className="flex items-center gap-[0.4em] text-emerald-400/90">
          <span className="h-[0.5em] w-[0.5em] animate-pulse rounded-full bg-emerald-400" /> online
        </span>
      </div>
      <div className="flex items-center gap-[0.4em] text-[0.82em]">
        {['WhatsApp', 'IA', 'CRM'].map((t, i) => (
          <div key={t} className="flex items-center gap-[0.4em]">
            <span className={`rounded-[0.5em] border px-[0.6em] py-[0.35em] ${i === 1 ? 'border-orange/60 bg-orange/15 text-orange-glow' : 'border-white/10 bg-white/5 text-white/80'}`}>{t}</span>
            {i < 2 && <span className="h-px w-[1em] bg-gradient-to-r from-orange to-orange-glow" />}
          </div>
        ))}
      </div>
      <div className="space-y-[0.4em]">
        <div className="w-[78%] rounded-[0.7em] rounded-tl-[0.2em] bg-white/[0.07] px-[0.7em] py-[0.45em] text-[0.8em] text-white/70">Olá! Quero um orçamento.</div>
        <div className="ml-auto w-[70%] rounded-[0.7em] rounded-tr-[0.2em] bg-orange/20 px-[0.7em] py-[0.45em] text-[0.8em] text-orange-glow">
          Claro! Qual serviço? <span className="inline-flex gap-[0.15em] align-middle">{[0, 1, 2].map((i) => <span key={i} className="h-[0.3em] w-[0.3em] animate-bounce rounded-full bg-orange-glow" style={{ animationDelay: `${i * 0.15}s` }} />)}</span>
        </div>
      </div>
    </div>
  )
}

function SlidesPanel() {
  const bars = [38, 55, 46, 72, 90]
  return (
    <div className="bg-[#0d0d0d]/80 p-[1em]">
      <div className="flex items-center justify-between">
        <div className="space-y-[0.35em]">
          <div className="h-[0.55em] w-[5em] rounded-full bg-white/80" />
          <div className="h-[0.35em] w-[3.5em] rounded-full bg-white/20" />
        </div>
        <span className="text-[0.75em] tabular-nums text-white/40">03 / 12</span>
      </div>
      <div className="mt-[0.9em] flex h-[5.2em] items-end gap-[0.45em] border-b border-white/10 pb-px">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 origin-bottom rounded-t-[0.3em] bg-gradient-to-t from-orange to-orange-glow" style={{ height: `${h}%`, opacity: 0.45 + i * 0.13, animation: `pulse-glow ${3 + i * 0.4}s ease-in-out infinite` }} />
        ))}
      </div>
      <div className="mt-[0.7em] flex gap-[0.35em]">
        {[1, 0, 0, 0].map((a, i) => (
          <span key={i} className={`h-[0.3em] rounded-full ${a ? 'w-[1.6em] bg-orange' : 'w-[0.6em] bg-white/15'}`} />
        ))}
      </div>
    </div>
  )
}
