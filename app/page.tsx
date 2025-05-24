"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, User, Building2, GraduationCap, Users, Rocket, PenTool } from "lucide-react"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function VibeMarketingLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const carouselItems = [
    {
      icon: "✍️",
      title: "Assistente de Copy",
      desc: "Cria textos persuasivos e vendedores automaticamente",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🎬",
      title: "Vibe Reels",
      desc: "Criar reels virais para suas redes sociais",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "📱",
      title: "Vibe Carrossel",
      desc: "Crie carrosséis profissionais para Instagram",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: "💡",
      title: "Vibe Ideia",
      desc: "Criar big ideas que convertem e engajam",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🔄",
      title: "Vibe Funnel",
      desc: "Crie funis de vendas completos e otimizados",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "📧",
      title: "Vibe Mail",
      desc: "Crie emails persuasivos que vendem",
      color: "from-red-500 to-red-600",
    },
    {
      icon: "🌐",
      title: "Vibe Pages",
      desc: "Criar landing pages que convertem visitantes em clientes",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com.br/7m14IRk?coupon=LANCAMENTO", "_blank")
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diffX = startX - currentX
    setTranslateX(-diffX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return

    setIsDragging(false)

    // Determine if swipe was significant enough to change slide
    const threshold = 50

    if (translateX > threshold && currentSlide < carouselItems.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else if (translateX < -threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }

    setTranslateX(0)
  }

  // Mouse handlers for desktop drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const currentX = e.clientX
    const diffX = startX - currentX
    setTranslateX(-diffX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    setIsDragging(false)

    const threshold = 50

    if (translateX > threshold && currentSlide < carouselItems.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else if (translateX < -threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }

    setTranslateX(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Red Banner */}
      <div className="bg-red-500 text-white py-2 px-3 sm:py-3 sm:px-4">
        <div className="container mx-auto text-center">
          <p className="text-xs sm:text-sm md:text-base font-medium leading-tight">
            Tenha um time de marketing completo mais barato que 1 freelancer (condição exclusiva de lançamento)
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-3 py-8 sm:px-4 sm:py-16 text-center">
        <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs sm:text-sm">
          🚀 Sistema Automatizado com IA
        </Badge>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight px-2">
          Finalmente, um sistema que transforma qualquer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            empresário ou autônomo
          </span>{" "}
          em um verdadeiro mestre do marketing digital
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-4xl mx-auto px-2 leading-relaxed">
          Sem precisar de equipe, experiência ou longas horas de aprendizado. Entregue conteúdos prontos, campanhas
          inteligentes e vendas diárias no piloto automático.
        </p>

        <div className="flex justify-center mb-8 sm:mb-12 px-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
            onClick={handleCTAClick}
          >
            Quero Começar Agora
          </Button>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 px-4">
          (mesmo que você não saiba nada de design ou copywriting)
        </p>
      </section>

      {/* AI Assistants Carousel */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Swipeable Carousel */}
          <div className="block sm:hidden">
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX : 0}px))`,
                }}
              >
                {carouselItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur">
                      <CardContent className="p-4 text-center">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-xl mx-auto mb-3 shadow-lg`}
                        >
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-blue-500 scale-125" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Instructions */}
            <p className="text-center text-slate-500 text-xs mt-4">👆 Arraste para o lado ou toque nos pontos</p>
          </div>

          {/* Desktop: Original Carousel with arrows */}
          <div className="hidden sm:block">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 320}px)`,
                }}
              >
                {carouselItems.map((item, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-80 mr-6 border-blue-100 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>

            <button
              onClick={() => setCurrentSlide(Math.min(carouselItems.length - 3, currentSlide + 1))}
              disabled={currentSlide >= carouselItems.length - 3}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>

            {/* Desktop Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(Math.max(1, carouselItems.length - 2))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-blue-500 scale-125" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-6 sm:mt-8 px-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
              onClick={handleCTAClick}
            >
              Quero Começar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* What is Vibe Marketing */}
      <section className="bg-white/50 backdrop-blur py-8 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center px-2">
              O Que é o Vibe Marketing?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 text-center px-2 leading-relaxed">
              O Vibe Marketing é mais do que um sistema – é a revolução que coloca um time completo de marketing na
              palma da sua mão.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="px-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">Imagine ter acesso a:</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Templates prontos",
                    "Agentes de IA que criam conteúdos automaticamente",
                    "Fluxo validado para atrair seguidores e transformá-los em clientes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                  Com o Vibe Marketing, você:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Automatiza até 80% do seu marketing",
                    "Economiza horas de trabalho por semana",
                    "Se concentra no que realmente importa: fazer seu negócio crescer",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
            onClick={handleCTAClick}
          >
            Quero Começar Agora
          </Button>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center px-2">
          O Que Você Vai Receber no Vibe Marketing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: "Templates prontos", desc: "Copy, carrossel, reels, big idea, landing page, funis de vendas" },
            { title: "Agentes inteligentes de IA", desc: "Crie conteúdos automaticamente com comandos simples" },
            { title: "Cursos mensais exclusivos", desc: "Aulas práticas sobre marketing e IA" },
            { title: "Comunidade VIP", desc: "Para troca de experiências e networking" },
            { title: "Suporte dedicado", desc: "Atendimento rápido e especializado" },
            { title: "Atualizações contínuas", desc: "Sempre com materiais atualizados e tendências do mercado" },
          ].map((item, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
            onClick={handleCTAClick}
          >
            Quero Começar Agora
          </Button>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-8 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center px-2">
            Para Quem é:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: User,
                text: "Empresários e autônomos sem orçamento para equipe de marketing",
              },
              {
                icon: Building2,
                text: "PMEs que precisam gerar mais resultados com menos recursos",
              },
              {
                icon: GraduationCap,
                text: "Infoprodutores que querem escalar e automatizar seu marketing",
              },
              {
                icon: Users,
                text: "Agências digitais e locais buscando aumentar a eficiência",
              },
              {
                icon: Rocket,
                text: "Estrategistas e lançadores que precisam de conteúdos e funis prontos",
              },
              {
                icon: PenTool,
                text: "Copywriters e redatores que querem alavancar sua produtividade com IA",
              },
            ].map((item, index) => (
              <Card key={index} className="border-blue-100 bg-white/80 backdrop-blur">
                <CardContent className="p-4 sm:p-6">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4" />
                  <p className="text-slate-700 text-sm sm:text-base">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
            onClick={handleCTAClick}
          >
            Quero Começar Agora
          </Button>
        </div>
      </section>

      {/* Authority Section */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center px-2">
            A Fórmula Que Já Gerou Mais de 50 Milhões de Reais
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative max-w-sm sm:max-w-md">
                <Image
                  src="/images/hugo-torres-50m.png"
                  alt="Hugo Paiva segurando prêmio de 50 milhões"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-lg shadow-lg">
                  50M+ Gerados
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Eu sou <span className="text-yellow-300">Hugo Paiva</span>
                </p>
                <p className="text-base sm:text-lg mb-2 opacity-95">Estrategista de Marketing & Growth</p>
                <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                  O Vibe Marketing é fruto de anos testando, validando e aplicando estratégias reais no mercado. Essas
                  técnicas e processos já geraram mais de 50 milhões de reais em faturamento, aplicadas em negócios
                  reais e com resultados concretos.
                </p>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed px-2">
                Agora, com o Vibe Marketing, você terá acesso a esse mesmo método, que vai transformar a forma como você
                cria e escala seu marketing, de forma simples, automatizada e com a força da inteligência artificial.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
            onClick={handleCTAClick}
          >
            Quero Começar Agora
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/50 backdrop-blur py-8 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center px-2">
            O Que Estão Falando Sobre o Vibe Marketing?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                testimonial:
                  "Eu perdia muito tempo tentando criar posts, e nada dava resultado. O Vibe mudou tudo, agora tenho um fluxo pronto e leads diários.",
                name: "Julio Souza",
              },
              {
                testimonial:
                  "Antes, eu achava que era impossível vender no Instagram sem gastar muito. O Vibe Marketing me provou o contrário.",
                name: "Carolina Reis",
              },
              {
                testimonial:
                  "Já gastei muito com agências que prometiam mundos. O Vibe me mostrou como fazer do jeito certo e barato.",
                name: "Carlos Vieira",
              },
            ].map((item, index) => (
              <Card key={index} className="border-blue-100">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                    "{item.testimonial}"
                  </p>
                  <p className="text-slate-600 font-semibold text-xs sm:text-sm">— {item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto max-w-sm"
            onClick={handleCTAClick}
          >
            Quero Começar Agora
          </Button>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center px-2">
            Acesso Anual
          </h2>

          <Card className="border-2 border-blue-200 shadow-2xl">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-4 sm:mb-6">
                {/* New pricing format with brand colors */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 sm:p-6 rounded-xl mb-3 sm:mb-4">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm mb-1 sm:mb-2">
                      DE <span className="line-through">R$1.971</span> POR APENAS 12X DE
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">R$20,38</div>
                    <div className="text-sm sm:text-base md:text-lg">OU R$197,00 À VISTA</div>
                  </div>
                </div>

                <div className="text-blue-600 font-semibold text-sm sm:text-base">Acesso Anual Completo</div>
              </div>

              <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Acesso a todos os treinamentos mensais (R$ 997)",
                  "Acesso a todos os templates (R$ 297)",
                  "Acesso aos agentes de IA (R$ 497)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 sm:py-4 text-base sm:text-lg"
                onClick={handleCTAClick}
              >
                Garantir Meu Acesso Agora
              </Button>

              <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
                Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
