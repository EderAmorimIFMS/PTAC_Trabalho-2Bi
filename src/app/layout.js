import './globals.css'

export const metadata = {
  title: 'Trabalho PTAC',
  description: 'Trabalho da diciplina de PROGRAMAÇÃO E TECNOLOGIAS PARA APLICAÇÕES CLIENTE.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
