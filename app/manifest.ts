import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: process.env.SALES_PAGE_COURSE_NAME || "Curso de IA",
    short_name: "CursoIA",
    description: "Domine a Inteligência Artificial com nosso curso avançado.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a", // Cor de fundo para o splash screen
    theme_color: "#1a1a1a", // Cor do tema para a barra de status
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
