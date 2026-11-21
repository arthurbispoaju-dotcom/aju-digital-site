import { useState } from 'react'
import { CONTACT, FORM, SOCIALS, whatsappLink } from '../config'
import { SERVICE_OPTIONS } from '../data/content'
import { Container, Reveal, SectionHeading } from './ui'
import { IconArrow, IconCheck, IconGitHub, IconInstagram, IconLinkedIn, IconMail, IconPin, IconWhatsApp } from './icons'

const EMPTY = { nome: '', empresa: '', email: '', whatsapp: '', servico: '', descricao: '', _honey: '' }

const maskPhone = (v) => {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function validate(v) {
  const e = {}
  if (v.nome.trim().length < 2) e.nome = 'Informe seu nome.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Informe um e-mail válido.'
  if (v.whatsapp.replace(/\D/g, '').length < 10) e.whatsapp = 'Informe o WhatsApp com DDD.'
  if (!v.servico) e.servico = 'Escolha um serviço.'
  if (v.descricao.trim().length < 10) e.descricao = 'Conte um pouco mais sobre o projeto.'
  return e
}

const summary = (v) =>
  `Olá, AJU Digital! Vim pelo site.\n\n*Nome:* ${v.nome}${v.empresa ? `\n*Empresa:* ${v.empresa}` : ''}\n*E-mail:* ${v.email}\n*WhatsApp:* ${v.whatsapp}\n*Serviço:* ${v.servico}\n\n*Projeto:* ${v.descricao}`

export default function Contact({ defaultService = '' }) {
  const initial = { ...EMPTY, servico: defaultService }
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) => {
    const val = k === 'whatsapp' ? maskPhone(e.target.value) : e.target.value
    setValues((s) => ({ ...s, [k]: val }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values._honey) return // robô
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Novo contato pelo site: ${values.servico} · ${values.nome}`,
          _template: 'table',
          _captcha: 'false',
          Nome: values.nome,
          Empresa: values.empresa || '—',
          'E-mail': values.email,
          WhatsApp: values.whatsapp,
          Serviço: values.servico,
          Projeto: values.descricao,
          _replyto: values.email,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error(data.message || 'Falha no envio')
      setStatus('success')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  const contactItems = [
    { Icon: IconWhatsApp, label: 'WhatsApp comercial', value: CONTACT.whatsappDisplay, href: whatsappLink() },
    { Icon: IconMail, label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: IconPin, label: 'Base', value: `${CONTACT.city} · atendimento remoto` },
  ]

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading id="contato-title" eyebrow="Contato" title="Vamos tirar sua ideia do papel." intro="Preencha o formulário com os detalhes do projeto. Retornamos pelo canal que você preferir." />

          <Reveal delay={120} as="ul" className="mt-10 space-y-3">
            {contactItems.map(({ Icon, label, value, href }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <li key={label}>
                  <Tag
                    {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                    className={`group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all ${href ? 'hover:border-orange/40 hover:bg-orange/[0.05]' : ''}`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/45">{label}</span>
                      <span className="block truncate text-sm font-medium text-white">{value}</span>
                    </span>
                    {href && <IconArrow className="ml-auto h-4 w-4 shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-orange-glow" />}
                  </Tag>
                </li>
              )
            })}
          </Reveal>

          <Reveal delay={180} className="mt-8 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">Redes</span>
            {[
              ['LinkedIn', SOCIALS.linkedin, IconLinkedIn],
              ['GitHub', SOCIALS.github, IconGitHub],
              ['Instagram', SOCIALS.instagram, IconInstagram],
            ]
              .filter(([, url]) => url)
              .map(([name, url, Icon]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-orange/50 hover:text-orange-glow">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="glass glow-border relative rounded-3xl p-6 sm:p-9" aria-describedby="form-status">
            {status === 'success' ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center" role="status">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-orange text-black shadow-[0_0_40px_rgba(255,106,0,.7)]">
                  <IconCheck className="h-8 w-8" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">Mensagem enviada!</h3>
                <p className="mt-2 max-w-sm text-muted">Recebemos os detalhes do seu projeto e vamos responder em breve.</p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-ghost mt-8">Enviar outra mensagem</button>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="nome" label="Nome" required error={errors.nome}>
                    <input id="f-nome" className="field" autoComplete="name" value={values.nome} onChange={set('nome')} placeholder="Seu nome" />
                  </Field>
                  <Field id="empresa" label="Empresa">
                    <input id="f-empresa" className="field" autoComplete="organization" value={values.empresa} onChange={set('empresa')} placeholder="Nome da empresa (opcional)" />
                  </Field>
                  <Field id="email" label="E-mail" required error={errors.email}>
                    <input id="f-email" type="email" className="field" autoComplete="email" value={values.email} onChange={set('email')} placeholder="voce@empresa.com.br" />
                  </Field>
                  <Field id="whatsapp" label="WhatsApp" required error={errors.whatsapp}>
                    <input id="f-whatsapp" type="tel" inputMode="tel" className="field" autoComplete="tel" value={values.whatsapp} onChange={set('whatsapp')} placeholder="(79) 90000-0000" />
                  </Field>
                </div>

                <fieldset className="mt-6">
                  <legend className="mb-2.5 text-sm text-white/75">
                    Serviço de interesse <span className="text-orange">*</span>
                  </legend>
                  <div id="f-servico" tabIndex={-1} className="grid grid-cols-2 gap-2.5 outline-none">
                    {SERVICE_OPTIONS.map((opt) => {
                      const on = values.servico === opt
                      return (
                        <label key={opt} className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-3 text-sm transition-all ${on ? 'border-orange/70 bg-orange/10 text-white' : 'border-white/10 text-white/65 hover:border-white/25'}`}>
                          <input type="radio" name="servico" value={opt} checked={on} onChange={set('servico')} className="peer sr-only" />
                          <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border peer-focus-visible:ring-2 peer-focus-visible:ring-orange ${on ? 'border-orange bg-orange' : 'border-white/30'}`}>
                            {on && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                          </span>
                          {opt}
                        </label>
                      )
                    })}
                  </div>
                  {errors.servico && <p className="mt-2 text-xs text-orange-glow">{errors.servico}</p>}
                </fieldset>

                <div className="mt-6">
                  <Field id="descricao" label="Descrição do projeto" required error={errors.descricao}>
                    <textarea id="f-descricao" rows={4} className="field resize-y" value={values.descricao} onChange={set('descricao')} placeholder="Conte o que você precisa, objetivos e prazos." />
                  </Field>
                </div>

                {/* honeypot anti-spam */}
                <input type="text" name="_honey" value={values._honey} onChange={set('_honey')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button type="submit" disabled={status === 'sending'} className="btn btn-primary flex-1 disabled:cursor-wait disabled:opacity-70">
                    {status === 'sending' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" /> Enviando…
                      </>
                    ) : (
                      <>
                        Enviar mensagem <IconArrow className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <a
                    href={whatsappLink(values.nome ? summary(values) : undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <IconWhatsApp className="h-4 w-4 text-orange-glow" /> Falar pelo WhatsApp
                  </a>
                </div>

                <div id="form-status" aria-live="polite" className="mt-4 min-h-5 text-sm">
                  {status === 'error' && (
                    <p className="rounded-xl border border-orange/30 bg-orange/10 p-3 text-orange-100">
                      Não foi possível enviar agora.{' '}
                      <a className="font-semibold underline underline-offset-2" href={whatsappLink(summary(values))} target="_blank" rel="noopener noreferrer">
                        Envie os mesmos dados pelo WhatsApp
                      </a>{' '}
                      ou escreva para <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                    </p>
                  )}
                </div>
                <p className="mt-1 text-xs text-white/35">Seus dados são usados apenas para responder ao seu contato.</p>
              </>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  )
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={`f-${id}`} className="mb-2 block text-sm text-white/75">
        {label} {required && <span className="text-orange">*</span>}
      </label>
      {children}
      {error && (
        <p id={`e-${id}`} className="mt-1.5 text-xs text-orange-glow">
          {error}
        </p>
      )}
    </div>
  )
}
