import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/sora'
import '@fontsource-variable/manrope'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
)

// No site publicado o HTML já vem pré-renderizado (bom para o Google): só "ativamos" ele.
// No `npm run dev` a div vem vazia e o React monta tudo do zero.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
