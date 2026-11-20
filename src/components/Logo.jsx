import symbol from '../assets/simbolo-gradiente.png'

/** Logotipo AJU DIGITAL: símbolo oficial + nome em texto (nítido em qualquer tamanho). */
export default function Logo({ className = '', size = 'md' }) {
  const s = size === 'lg' ? { img: 'h-10', text: 'text-xl' } : { img: 'h-8 sm:h-9', text: 'text-[17px] sm:text-lg' }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={symbol} alt="" width="400" height="552" className={`${s.img} w-auto drop-shadow-[0_0_10px_rgba(255,106,0,.45)]`} />
      <span className={`font-display ${s.text} leading-none tracking-[0.04em] text-white`}>
        <span className="font-extrabold">AJU</span> <span className="font-light">DIGITAL</span>
      </span>
    </span>
  )
}
