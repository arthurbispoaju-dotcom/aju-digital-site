// Usado só no build: gera o HTML do site para o Google ler sem depender de JavaScript.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(<App />)
}
