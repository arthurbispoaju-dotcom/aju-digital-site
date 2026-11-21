// Roda depois do `vite build` (veja "build" no package.json).
// 1. Gera o HTML completo de cada página (início, páginas de serviço e 404), para o Google ler sem JavaScript.
// 2. Ajusta título, descrição, link canônico e dados estruturados de cada página.
// 3. Gera dist/robots.txt e dist/sitemap.xml com o seu domínio.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const env = { ...loadEnv('production', root, 'VITE_'), ...process.env }
const siteUrl = (env.VITE_SITE_URL || '').replace(/\/+$/, '')
if (!/^https?:\/\/[^/]+$/.test(siteUrl) || siteUrl.includes('SEU-DOMINIO')) {
  console.error('\n✖ Defina o seu domínio em VITE_SITE_URL no arquivo .env (ex.: https://ajudigital.com.br)\n')
  process.exit(1)
}

const { render, ROUTES, SERVICES } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<div id="root"><!--app-html--></div>')) throw new Error('Marcador <!--app-html--> não encontrado no index.html')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const setMeta = (html, attr, key, value) =>
  html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), `$1${esc(value)}$2`)

/**
 * Monta o HTML de uma página.
 * O conteúdo fica entre <!--email_off--> para o Cloudflare não trocar o e-mail
 * por "[email protected]" (a "proteção de e-mail" quebra o link para quem não roda JavaScript).
 */
function page({ route, title, description, jsonLd = [], noindex = false }) {
  const url = `${siteUrl}${route}`
  let html = template
    .replace('<div id="root"><!--app-html--></div>', () => `<!--email_off--><div id="root">${render(route)}</div><!--/email_off-->`)
    .replace(/<script type="application\/ld\+json">/, '<!--email_off--><script type="application/ld+json">')
    .replace(/(<script type="application\/ld\+json">[\s\S]*?<\/script>)/, '$1<!--/email_off-->')

  if (title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    html = setMeta(html, 'property', 'og:title', title)
  }
  if (description) {
    html = setMeta(html, 'name', 'description', description)
    html = setMeta(html, 'property', 'og:description', description)
  }
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = setMeta(html, 'property', 'og:url', url)
  if (noindex) {
    html = setMeta(html, 'name', 'robots', 'noindex, follow').replace(/\s*<link rel="canonical"[^>]*>/, '')
  }
  if (jsonLd.length) {
    const scripts = jsonLd.map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`).join('\n    ')
    html = html.replace('</head>', `    <!--email_off-->${scripts}<!--/email_off-->\n  </head>`)
  }
  return html
}

function write(route, html) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}

// Início
write('/', page({ route: '/' }))

// Páginas de serviço
for (const s of SERVICES) {
  const url = `${siteUrl}${s.path}`
  write(
    s.path,
    page({
      route: s.path,
      title: s.metaTitle,
      description: s.metaDesc,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.label,
          serviceType: s.label,
          description: s.metaDesc,
          url,
          areaServed: [{ '@type': 'City', name: 'Aracaju' }, { '@type': 'Country', name: 'Brasil' }],
          provider: { '@type': 'ProfessionalService', name: 'AJU Digital', url: `${siteUrl}/` },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteUrl}/` },
            { '@type': 'ListItem', position: 2, name: s.label, item: url },
          ],
        },
      ],
    }),
  )
}

// 404: o Cloudflare Pages usa este arquivo para endereços que não existem (com status 404 de verdade).
fs.writeFileSync(
  path.join(dist, '404.html'),
  page({ route: '/404/', title: 'Página não encontrada · AJU Digital', description: 'Página não encontrada.', noindex: true }),
)

fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>\n    <loc>${siteUrl}${r}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`,
)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`✓ ${ROUTES.length} páginas + 404 pré-renderizadas · robots.txt · sitemap.xml para ${siteUrl}`)
