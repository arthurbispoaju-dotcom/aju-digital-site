# AJU Digital · Site institucional

Site institucional em **React 19 + Vite + Tailwind CSS v4**.

## Rodar e publicar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ pronta para publicar
```

Antes do primeiro build, coloque o seu domínio em `VITE_SITE_URL` no arquivo `.env` (ex.: `https://ajudigital.com.br`, sem barra no final).
O build para com um aviso se o domínio não estiver definido.

## SEO (Google)

O `npm run build` faz três coisas além do build normal:

- **Pré-renderiza** o site: o `dist/index.html` já sai com todos os textos, então o Google lê o conteúdo sem precisar rodar JavaScript.
- Gera `dist/robots.txt` e `dist/sitemap.xml` com o seu domínio.
- Preenche o link canônico, a imagem de compartilhamento (WhatsApp/LinkedIn) e os dados da empresa (schema.org) com o endereço completo.

O código fica em `src/entry-server.jsx` e `scripts/prerender.js`.

## Publicar no Cloudflare Pages

1. Suba este projeto para um repositório no GitHub.
2. No Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Build command: `npm run build` · Build output directory: `dist`.
4. Em **Environment variables**, adicione `VITE_SITE_URL` = `https://seudominio.com.br`.
5. Depois do deploy, em **Custom domains**, adicione o seu domínio.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| WhatsApp, e-mail, cidade, redes sociais | `src/config.js` |
| Textos das 4 soluções (sites, software, automações, apresentações) e do processo | `src/data/content.js` |
| Projetos do portfólio | `src/data/projects.js` (instruções no topo do arquivo) |
| Cores, fontes, animações | `src/index.css` (bloco `@theme`) |
| SEO (título, descrição, imagem de compartilhamento) | `index.html` |

O Instagram está vazio em `src/config.js`. Preencha a URL e o ícone aparece sozinho no contato e no rodapé.

## Formulário de contato (configuração necessária)

O formulário envia de verdade pelo **FormSubmit** (gratuito, sem servidor), direto para o e-mail definido em `src/config.js`.

1. Publique o site e envie o formulário uma vez.
2. O FormSubmit manda um e-mail de **ativação** para `arthurbispoaju@icloud.com`. Clique em **Activate Form**.
3. Pronto: as próximas mensagens chegam nesse e-mail, em formato de tabela.

Se o envio falhar, o visitante vê um aviso com atalho para mandar os mesmos dados pelo WhatsApp ou pelo e-mail.
Para usar outro serviço (Formspree, Getform, API própria), troque `FORM.endpoint` em `src/config.js`.

## Estrutura

```
src/
├── App.jsx
├── config.js            # contatos e integrações
├── data/                # conteúdo editável (soluções, processo, projetos)
├── assets/              # logotipo e capas dos projetos (webp otimizado)
└── components/
    ├── Navbar, Hero, Ecosystem (composição 3D), ParticleField (partículas)
    ├── Solutions, WhyUs, Portfolio, Mockups, Process
    ├── CallToAction, Contact, Footer, Logo
    └── ui.jsx (Reveal, SectionHeading, SpotlightCard, Container), icons.jsx
```

## Desempenho e acessibilidade

- Efeitos 3D em CSS + SVG e partículas em canvas: sem WebGL, cerca de 90 KB de JS comprimido.
- As partículas pausam fora da tela. Com "reduzir movimento" ativo no sistema, as animações param.
- Fontes hospedadas no próprio site (Sora e Manrope), sem chamadas ao Google Fonts.
- Link para pular ao conteúdo, foco visível, menus e filtros com ARIA e formulário com mensagens de erro acessíveis.
