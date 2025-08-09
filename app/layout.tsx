import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css" // Importa os estilos globais do shadcn/ui e Tailwind CSS

const inter = Inter({ subsets: ["latin"] })

// Acessa as variáveis de ambiente no lado do servidor
import { requireEnv } from "@/lib/ensure-env"
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const courseName = requireEnv("SALES_PAGE_COURSE_NAME")
  const faviconUrl = requireEnv("SALES_PAGE_FAVICON_URL")
  return {
    title: courseName,
    description:
      "Domine a Inteligência Artificial: Do básico ao avançado com projetos práticos e mentoria especializada.",
    icons: {
      icon: faviconUrl,
    },
    // Outros metadados podem ser adicionados aqui
    generator: 'v0.dev'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
