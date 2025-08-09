import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css" // Importa os estilos globais do shadcn/ui e Tailwind CSS

const inter = Inter({ subsets: ["latin"] })

// Acessa as variáveis de ambiente no lado do servidor
const courseName = process.env.SALES_PAGE_COURSE_NAME || "Curso de Inteligência Artificial Avançada"
const faviconUrl = process.env.SALES_PAGE_FAVICON_URL || "/placeholder.svg?height=32&width=32"

export const metadata: Metadata = {
  title: courseName,
  description:
    "Domine a Inteligência Artificial: Do básico ao avançado com projetos práticos e mentoria especializada.",
  icons: {
    icon: faviconUrl,
  },
  // Outros metadados podem ser adicionados aqui
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Passa as variáveis de ambiente para os componentes filhos, se necessário
  // Ou os componentes filhos podem acessá-las diretamente se forem Server Components
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
