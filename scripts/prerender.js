// Roda depois do `vite build` (veja "build" no package.json).
// 1. Coloca o conteúdo do site dentro do dist/index.html, para o Google ler sem JavaScript.
// 2. Gera dist/robots.txt e dist/sitemap.xml com o seu domínio.
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

const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const appHtml = render()

const indexPath = path.join(dist, 'index.html')
const template = fs.readFileSync(indexPath, 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('Marcador <!--app-html--> não encontrado no index.html')
fs.writeFileSync(indexPath, template.replace('<!--app-html-->', appHtml))

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`✓ Pré-renderizado + robots.txt + sitemap.xml para ${siteUrl}`)
