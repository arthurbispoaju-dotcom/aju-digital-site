// Dados comerciais da AJU Digital — edite aqui e o site inteiro se atualiza.

export const CONTACT = {
  whatsappNumber: '5579996302389', // só dígitos, com DDI 55 + DDD
  whatsappDisplay: '(79) 99630-2389',
  email: 'arthurbispoaju@icloud.com',
  city: 'Aracaju (SE)',
}

// Redes sociais: deixe a URL vazia para esconder o ícone.
export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/arthurbisposalesforce/',
  github: 'https://github.com/arthurbispoaju-dotcom',
  instagram: 'https://www.instagram.com/ajudigital__/',
}

// Recebimento do formulário de contato.
// Usa o FormSubmit (gratuito, sem servidor): https://formsubmit.co
// No PRIMEIRO envio, o FormSubmit manda um e-mail de ativação para o endereço abaixo.
// Depois de clicar em "Activate Form", todas as mensagens chegam nesse e-mail.
// Para usar outro serviço (Formspree, Getform, API própria), troque o endpoint.
export const FORM = {
  endpoint: `https://formsubmit.co/ajax/${CONTACT.email}`,
}

export const whatsappLink = (message = 'Olá, AJU Digital! Gostaria de conversar sobre um projeto.') =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]
