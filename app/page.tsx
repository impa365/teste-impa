import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { CheckCircle, Lightbulb, Users, Code, DollarSign, Star } from "lucide-react"

// Acessa as variáveis de ambiente diretamente no Server Component
const courseName = process.env.SALES_PAGE_COURSE_NAME || "Curso de Inteligência Artificial Avançada"
const logoUrl = process.env.SALES_PAGE_LOGO_URL || "/placeholder.svg?height=32&width=32"
const heroImageUrl = process.env.SALES_PAGE_HERO_IMAGE_URL || "/placeholder.svg?height=800&width=1200"

export default function AISalesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoUrl || "/placeholder.svg"}
            alt="Logo do Curso"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-purple-400">{courseName}</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Recursos
          </Link>
          <Link href="#curriculum" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Currículo
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Depoimentos
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Preços
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-purple-400 transition-colors">
            FAQ
          </Link>
        </nav>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <Link href="#enroll">Inscreva-se Agora</Link>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <Image
            src={heroImageUrl || "/placeholder.svg"}
            alt="Fundo de IA"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="absolute inset-0 z-0 opacity-20"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
                  {courseName}
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl text-gray-300 mx-auto lg:mx-0">
                  Domine a Inteligência Artificial do zero ao avançado. Aprenda com projetos práticos, mentores
                  experientes e uma comunidade vibrante.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button
                    asChild
                    className="inline-flex h-12 items-center justify-center rounded-md bg-purple-600 px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-purple-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  >
                    <Link href="#enroll">Comece Sua Jornada IA</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-purple-500 bg-transparent px-8 text-base font-medium text-purple-400 shadow-sm transition-all hover:bg-purple-900/20 hover:text-purple-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  >
                    <Link href="#curriculum">Ver Currículo</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Visualização de IA"
                  className="rounded-xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900 border-t border-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-400 mb-12">
              Por Que Nosso Curso de IA?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="bg-gray-950 border-gray-800 text-gray-50 hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-green-400 mb-4 mx-auto" />
                  <CardTitle className="text-xl font-semibold">Currículo Abrangente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Desde os fundamentos da IA e Machine Learning até tópicos avançados como Deep Learning e NLP.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-950 border-gray-800 text-gray-50 hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-yellow-400 mb-4 mx-auto" />
                  <CardTitle className="text-xl font-semibold">Projetos Práticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Aprenda fazendo! Desenvolva portfólio com projetos reais e desafios do mercado.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-950 border-gray-800 text-gray-50 hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-400 mb-4 mx-auto" />
                  <CardTitle className="text-xl font-semibold">Mentoria Especializada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Receba feedback personalizado de especialistas da indústria e acelere seu aprendizado.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-950 border-gray-800 text-gray-50 hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Code className="h-10 w-10 text-red-400 mb-4 mx-auto" />
                  <CardTitle className="text-xl font-semibold">Ferramentas de Ponta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Trabalhe com as tecnologias mais recentes: TensorFlow, PyTorch, Scikit-learn e mais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="w-full py-16 md:py-24 lg:py-32 bg-black border-t border-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-400 mb-12">
              Nosso Currículo Detalhado
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
              <AccordionItem value="item-1" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Módulo 1: Fundamentos da Inteligência Artificial
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Introdução à IA, história, tipos de IA, ética em IA, matemática para IA (álgebra linear, cálculo,
                  probabilidade).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Módulo 2: Machine Learning Essencial
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Algoritmos de ML (regressão, classificação, clustering), pré-processamento de dados, avaliação de
                  modelos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Módulo 3: Deep Learning e Redes Neurais
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Redes neurais convolucionais (CNNs), redes neurais recorrentes (RNNs), Transformers, frameworks
                  (TensorFlow, PyTorch).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Módulo 4: Processamento de Linguagem Natural (NLP)
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Modelos de linguagem, embeddings, análise de sentimento, chatbots, tradução automática.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Módulo 5: Visão Computacional
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Detecção de objetos, reconhecimento facial, segmentação de imagens, aplicações práticas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Módulo 6: Projetos Avançados e Implementação
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Desenvolvimento de projetos de ponta a ponta, deploy de modelos de IA, otimização e escalabilidade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900 border-t border-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-400 mb-12">
              O Que Nossos Alunos Dizem
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-950 border-gray-800 text-gray-50 p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Avatar do Aluno"
                  className="rounded-full mb-4 border-2 border-purple-500"
                />
                <p className="text-lg italic text-gray-300 mb-4">
                  &quot;Este curso transformou minha carreira! Os projetos práticos são incríveis e a mentoria é de alto
                  nível.&quot;
                </p>
                <p className="font-semibold text-purple-400">- Ana Paula, Desenvolvedora IA</p>
                <div className="flex mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
              </Card>
              <Card className="bg-gray-950 border-gray-800 text-gray-50 p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Avatar do Aluno"
                  className="rounded-full mb-4 border-2 border-purple-500"
                />
                <p className="text-lg italic text-gray-300 mb-4">
                  &quot;A didática é excelente e o suporte da comunidade é um diferencial. Recomendo a todos que querem
                  entrar na área de IA.&quot;
                </p>
                <p className="font-semibold text-purple-400">- João Silva, Cientista de Dados</p>
                <div className="flex mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
              </Card>
              <Card className="bg-gray-950 border-gray-800 text-gray-50 p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Avatar do Aluno"
                  className="rounded-full mb-4 border-2 border-purple-500"
                />
                <p className="text-lg italic text-gray-300 mb-4">
                  &quot;Finalmente um curso de IA que entrega o que promete! Conteúdo atualizado e desafios que
                  realmente te fazem crescer.&quot;
                </p>
                <p className="font-semibold text-purple-400">- Mariana Costa, Engenheira de Software</p>
                <div className="flex mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-black border-t border-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-400 mb-12">
              Escolha Seu Plano
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-gray-950 border-gray-800 text-gray-50 p-6 flex flex-col justify-between hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-300">
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 text-purple-400">Básico</CardTitle>
                  <p className="text-gray-400 mb-6">Acesso aos módulos essenciais de IA.</p>
                  <div className="text-5xl font-bold mb-6 text-white">
                    <DollarSign className="inline-block h-10 w-10 text-green-400" />
                    497
                    <span className="text-xl text-gray-400">/único</span>
                  </div>
                  <ul className="text-left text-gray-300 space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Acesso a 3 Módulos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Projetos Fundamentais
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Suporte por Email
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="#enroll">Começar Básico</Link>
                </Button>
              </Card>
              <Card className="bg-gray-950 border-purple-600 border-2 text-gray-50 p-6 flex flex-col justify-between relative shadow-purple-500/50 shadow-2xl">
                <div className="absolute -top-3 right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Mais Popular
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 text-purple-400">Premium</CardTitle>
                  <p className="text-gray-400 mb-6">Experiência completa com mentoria e projetos avançados.</p>
                  <div className="text-5xl font-bold mb-6 text-white">
                    <DollarSign className="inline-block h-10 w-10 text-green-400" />
                    997
                    <span className="text-xl text-gray-400">/único</span>
                  </div>
                  <ul className="text-left text-gray-300 space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Acesso a Todos os Módulos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Todos os Projetos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Mentoria Individual (3 sessões)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Acesso à Comunidade Exclusiva
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="#enroll">Escolher Premium</Link>
                </Button>
              </Card>
              <Card className="bg-gray-950 border-gray-800 text-gray-50 p-6 flex flex-col justify-between hover:shadow-purple-500/30 hover:shadow-xl transition-shadow duration-300">
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 text-purple-400">Empresarial</CardTitle>
                  <p className="text-gray-400 mb-6">Soluções personalizadas para equipes e empresas.</p>
                  <div className="text-5xl font-bold mb-6 text-white">
                    <DollarSign className="inline-block h-10 w-10 text-green-400" />
                    Sob Consulta
                  </div>
                  <ul className="text-left text-gray-300 space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Todos os Recursos Premium
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Treinamento Personalizado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Suporte Dedicado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" /> Consultoria de Projetos
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="#contact">Fale Conosco</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action / Enrollment */}
        <section
          id="enroll"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-900 border-t border-gray-800 text-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-400 mb-6">
              Pronto para Transformar Seu Futuro?
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
              Junte-se a centenas de alunos que já estão construindo suas carreiras em Inteligência Artificial.
            </p>
            <Button
              asChild
              className="inline-flex h-14 items-center justify-center rounded-md bg-purple-600 px-10 text-lg font-medium text-white shadow-lg transition-all hover:bg-purple-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              <Link href="#pricing">Inscreva-se Agora e Garanta Sua Vaga!</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-black border-t border-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-400 mb-12">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
              <AccordionItem value="faq-1" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Preciso ter conhecimento prévio em programação?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Não! Nosso curso é projetado para iniciantes e avançados. Começamos com os fundamentos e progredimos
                  gradualmente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Qual a duração do curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  O curso é auto-ritmado, permitindo que você aprenda no seu próprio tempo. O acesso é vitalício.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Há certificado de conclusão?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Sim, ao concluir todos os módulos e projetos, você receberá um certificado digital de conclusão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-gray-100 hover:text-purple-300">
                  Como funciona a mentoria individual?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  No plano Premium, você terá sessões de 1 hora com um de nossos mentores especializados para tirar
                  dúvidas e discutir seus projetos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-16 md:py-24 lg:py-32 border-t border-gray-800 bg-gray-950">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-purple-400">
                Receba Novidades e Dicas de IA
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Assine nossa newsletter para ficar por dentro das últimas tendências em Inteligência Artificial e
                ofertas exclusivas.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Assinar
                </Button>
              </form>
              <p className="text-xs text-gray-400">
                Ao assinar, você concorda com nossa{" "}
                <Link href="#" className="underline underline-offset-2 text-purple-400 hover:text-purple-300">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-950 text-gray-400">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} {courseName}. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-purple-400">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-purple-400">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-purple-400">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  )
}
