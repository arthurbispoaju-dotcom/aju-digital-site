// Usado só no build: gera o HTML de cada página para o Google ler sem depender de JavaScript.
import { renderToString } from 'react-dom/server'
import App, { ROUTES } from './App.jsx'
import { SERVICES } from './data/services'

export { ROUTES, SERVICES }

export function render(path = '/') {
  return renderToString(<App path={path} />)
}
