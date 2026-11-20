/* Mockups de dispositivos em CSS puro: leves, nítidos em qualquer tela. */

export function Laptop({ children, url }) {
  return (
    <div className="mx-auto w-[88%]">
      <div className="rounded-t-[10px] border border-white/15 bg-[#121212] p-[1.6%] shadow-[0_30px_60px_-25px_rgba(0,0,0,.9)]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-black">
          {url && (
            <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 bg-[#0e0e0e]/95 px-2 py-1">
              {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/20" />)}
              <span className="ml-1.5 truncate rounded-full bg-white/5 px-2 text-[9px] text-white/45">{url}</span>
            </div>
          )}
          <div className={`absolute inset-0 ${url ? 'top-[14px]' : ''}`}>{children}</div>
        </div>
      </div>
      <div className="relative mx-[-6%] h-[10px] rounded-b-[12px] bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_14px_24px_-8px_rgba(0,0,0,.9)]">
        <div className="absolute left-1/2 top-0 h-[4px] w-[16%] -translate-x-1/2 rounded-b-md bg-[#0b0b0b]" />
      </div>
    </div>
  )
}

export function Phone({ children }) {
  return (
    <div className="mx-auto w-[27%] min-w-[104px] rounded-[22px] border border-white/15 bg-[#111] p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.95)]">
      <div className="relative aspect-[9/18.5] overflow-hidden rounded-[21px] bg-[#0b0b0b]">
        <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  )
}

export function SlideFrame({ children }) {
  return (
    <div className="mx-auto w-[90%]" style={{ perspective: '900px' }}>
      <div className="origin-bottom transition-transform duration-700 group-hover:[transform:rotateX(0deg)] [transform:rotateX(6deg)]">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-white/15 bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,.95),0_0_50px_-15px_rgba(255,106,0,.4)]">
          {children}
        </div>
      </div>
      <div className="mx-auto mt-3 flex w-[50%] gap-1.5">
        {[1, 0, 0, 0, 0].map((a, i) => (
          <span key={i} className={`h-1 flex-1 rounded-full ${a ? 'bg-orange' : 'bg-white/10'}`} />
        ))}
      </div>
    </div>
  )
}

export function Dashboard({ children, title = 'Fluxo de integração' }) {
  return (
    <div className="mx-auto w-[90%] overflow-hidden rounded-xl border border-white/15 bg-[#0e0e0e] shadow-[0_30px_60px_-25px_rgba(0,0,0,.9)]">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/20" />)}
        <span className="ml-2 text-[9px] text-white/40">{title}</span>
      </div>
      <div className="relative aspect-[16/9]">{children}</div>
    </div>
  )
}

/* ---------- Ilustrações para projetos sem captura de tela ---------- */

export function DemoLanding() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,106,0,.35),#090909_60%)] p-[6%]">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-8 rounded-full bg-white/70" />
        <div className="flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-1 w-5 rounded-full bg-white/20" />)}</div>
      </div>
      <div className="mt-[8%] max-w-[60%] space-y-1.5">
        <div className="h-2.5 w-full rounded-full bg-white/85" />
        <div className="h-2.5 w-3/4 rounded-full bg-gradient-to-r from-orange-glow to-orange" />
        <div className="h-1 w-5/6 rounded-full bg-white/20" />
        <div className="h-1 w-2/3 rounded-full bg-white/20" />
        <div className="flex gap-1.5 pt-1.5"><span className="h-3.5 w-14 rounded-full bg-orange" /><span className="h-3.5 w-10 rounded-full border border-white/25" /></div>
      </div>
      <div className="absolute bottom-[8%] left-[6%] right-[6%] grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => <div key={i} className="h-7 rounded-md border border-white/10 bg-white/[0.05]" />)}
      </div>
      <div className="absolute right-[7%] top-[22%] h-[38%] w-[26%] rounded-xl border border-orange/30 bg-gradient-to-br from-orange/30 to-transparent" />
    </div>
  )
}

export function DemoMH() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,#2a1a0e,#060606_70%)]">
      <div className="absolute inset-[8%] rounded border border-white/15" />
      {[['left-[8%] top-[8%]', 'border-l border-t'], ['right-[8%] top-[8%]', 'border-r border-t'], ['left-[8%] bottom-[8%]', 'border-l border-b'], ['right-[8%] bottom-[8%]', 'border-r border-b']].map(([pos, b]) => (
        <span key={pos} className={`absolute ${pos} h-4 w-4 ${b} border-orange-glow`} />
      ))}
      <div className="absolute left-[12%] top-[13%] flex items-center gap-1.5 text-[8px] font-semibold tracking-widest text-white/70">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> REC
      </div>
      <div className="absolute right-[12%] top-[13%] text-[8px] tracking-widest text-white/50">4K · 60P</div>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">MH Produções</p>
          <p className="mt-1 text-[8px] tracking-[0.35em] text-orange-glow">FILMAGEM · FOTOGRAFIA · AO VIVO</p>
        </div>
      </div>
    </div>
  )
}

export function DemoChat() {
  const msgs = [
    ['in', 'Oi! Vocês fazem sites?'],
    ['out', 'Olá! 👋 Sou o assistente virtual. Fazemos sim! Qual o seu segmento?'],
    ['in', 'Clínica odontológica'],
    ['out', 'Perfeito. Posso agendar uma conversa com a equipe para amanhã?'],
  ]
  return (
    <div className="flex h-full flex-col bg-[#0b0b0b] pt-7 text-[7.5px]">
      <div className="flex items-center gap-2 border-b border-white/5 px-3 pb-2">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-orange-glow to-orange text-[8px] font-bold text-black">IA</span>
        <div>
          <p className="font-semibold text-white">Assistente</p>
          <p className="text-[7.5px] text-emerald-400">online agora</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden p-3">
        {msgs.map(([dir, t], i) => (
          <p key={i} className={`max-w-[82%] rounded-xl px-2.5 py-1.5 leading-snug ${dir === 'in' ? 'rounded-tl-sm bg-white/[0.08] text-white/80' : 'ml-auto rounded-tr-sm bg-orange/20 text-orange-100'}`}>{t}</p>
        ))}
        <div className="flex w-fit gap-1 rounded-xl bg-orange/15 px-2.5 py-2">
          {[0, 1, 2].map((i) => <span key={i} className="h-1 w-1 animate-bounce rounded-full bg-orange-glow" style={{ animationDelay: `${i * 0.15}s` }} />)}
        </div>
      </div>
      <div className="m-2 rounded-full border border-white/10 px-3 py-1.5 text-white/30">Mensagem</div>
    </div>
  )
}

export function DemoFlow() {
  const nodes = [
    { x: 12, y: 30, t: 'Formulário' },
    { x: 40, y: 50, t: 'Automação', hot: true },
    { x: 72, y: 22, t: 'Planilha' },
    { x: 72, y: 50, t: 'CRM' },
    { x: 72, y: 78, t: 'E-mail' },
  ]
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(255,106,0,.18),transparent_60%)]">
      <div className="grid-lines absolute inset-0 opacity-70" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {[[0, 1], [1, 2], [1, 3], [1, 4]].map(([a, b]) => (
          <path key={`${a}${b}`} d={`M ${nodes[a].x + 8} ${nodes[a].y} C ${(nodes[a].x + nodes[b].x) / 2 + 6} ${nodes[a].y}, ${(nodes[a].x + nodes[b].x) / 2 + 2} ${nodes[b].y}, ${nodes[b].x - 8} ${nodes[b].y}`} fill="none" stroke="#ff8c32" strokeWidth=".6" strokeDasharray="2 3" className="animate-dash" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {nodes.map((n) => (
        <div key={n.t} className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border px-2 py-1 text-[9px] ${n.hot ? 'border-orange/60 bg-orange/20 text-orange-glow shadow-[0_0_20px_rgba(255,106,0,.5)]' : 'border-white/15 bg-[#151515] text-white/75'}`} style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          {n.t}
        </div>
      ))}
    </div>
  )
}

export function DemoKPI() {
  const bars = [30, 52, 41, 66, 58, 80, 72]
  return (
    <div className="absolute inset-0 flex gap-[3%] p-[3.5%]">
      <div className="flex w-[14%] flex-col gap-1.5 rounded-md bg-white/[0.03] p-1.5">
        <span className="h-1.5 w-3/4 rounded-full bg-orange" />
        {[0, 1, 2, 3].map((i) => <span key={i} className="h-1 w-full rounded-full bg-white/15" />)}
      </div>
      <div className="flex flex-1 flex-col gap-[4%]">
        <div className="grid grid-cols-3 gap-1.5">
          {[['Pedidos', '128'], ['Em aberto', '14'], ['Equipe', '9']].map(([l, v], i) => (
            <div key={l} className={`rounded-md border px-1.5 py-1 ${i === 0 ? 'border-orange/40 bg-orange/10' : 'border-white/10 bg-white/[0.03]'}`}>
              <p className="text-[6.5px] text-white/45">{l}</p>
              <p className={`font-display text-[11px] font-semibold ${i === 0 ? 'text-orange-glow' : 'text-white'}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1 rounded-md border border-white/5 bg-white/[0.02] p-1.5">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-orange to-orange-glow" style={{ height: `${h}%`, opacity: 0.4 + i * 0.09 }} />
          ))}
        </div>
      </div>
    </div>
  )
}
