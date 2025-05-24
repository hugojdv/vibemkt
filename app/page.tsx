import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Target, Bot, FileText, MessageSquare } from "lucide-react"

export default function VibeMarketingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">Vibe Marketing</div>
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            Login
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 Sistema Automatizado com IA</Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Finalmente, um sistema que transforma qualquer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            empresário ou autônomo
          </span>{" "}
          em um verdadeiro mestre do marketing digital
        </h1>

        <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
          Sem precisar de equipe, experiência ou longas horas de aprendizado. Entregue conteúdos prontos, campanhas
          inteligentes e vendas diárias no piloto automático.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg"
          >
            Quero Começar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
          >
            Ver Demonstração
          </Button>
        </div>

        <p className="text-sm text-slate-500">(mesmo que você não saiba nada de design ou copywriting)</p>
      </section>

      {/* AI Assistants Carousel */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">📌 Carrossel das IAs e Assistentes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: "IA de Copywriting", desc: "Cria textos persuasivos automaticamente" },
            { icon: FileText, title: "IA de Conteúdo", desc: "Gera posts e carrosséis profissionais" },
            { icon: MessageSquare, title: "IA de Funis", desc: "Constrói sequências de vendas completas" },
          ].map((item, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What is Vibe Marketing */}
      <section className="bg-white/50 backdrop-blur py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">O Que é o Vibe Marketing?</h2>

            <p className="text-lg text-slate-600 mb-8 text-center">
              O Vibe Marketing é mais do que um sistema – é a revolução que coloca um time completo de marketing na
              palma da sua mão.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Imagine ter acesso a:</h3>
                <ul className="space-y-3">
                  {[
                    "Templates prontos",
                    "Agentes de IA que criam conteúdos automaticamente",
                    "Fluxo validado para atrair seguidores e transformá-los em clientes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Com o Vibe Marketing, você:</h3>
                <ul className="space-y-3">
                  {[
                    "Automatiza até 80% do seu marketing",
                    "Economiza horas de trabalho por semana",
                    "Se concentra no que realmente importa: fazer seu negócio crescer",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          O Que Você Vai Receber no Vibe Marketing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Templates prontos", desc: "Copy, carrossel, reels, big idea, landing page, funis de vendas" },
            { title: "Agentes inteligentes de IA", desc: "Crie conteúdos automaticamente com comandos simples" },
            { title: "Cursos mensais exclusivos", desc: "Aulas práticas sobre marketing e IA" },
            { title: "Comunidade VIP", desc: "Para troca de experiências e networking" },
            { title: "Suporte dedicado", desc: "Atendimento rápido e especializado" },
            { title: "Atualizações contínuas", desc: "Sempre com materiais atualizados e tendências do mercado" },
          ].map((item, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Para Quem é Ideal?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Empresários e autônomos sem orçamento para equipe de marketing",
              "PMEs que precisam gerar mais resultados com menos recursos",
              "Infoprodutores que querem escalar e automatizar seu marketing",
              "Agências digitais e locais buscando aumentar a eficiência",
              "Estrategistas e lançadores que precisam de conteúdos e funis prontos",
              "Copywriters e redatores que querem alavancar sua produtividade com IA",
            ].map((item, index) => (
              <Card key={index} className="border-blue-100 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-slate-700">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">A Fórmula Que Já Gerou Mais de 50 Milhões de Reais</h2>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-2xl mb-8">
            <p className="text-xl mb-4">
              Eu sou <strong>Hugo Torres</strong>, estrategista de Marketing & Growth
            </p>
            <p className="text-lg opacity-90">
              O Vibe Marketing é fruto de anos testando, validando e aplicando estratégias reais no mercado. Essas
              técnicas e processos já geraram mais de 50 milhões de reais em faturamento.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/50 backdrop-blur py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            O Que Estão Falando Sobre o Vibe Marketing?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Eu perdia muito tempo tentando criar posts, e nada dava resultado. O Vibe mudou tudo, agora tenho um fluxo pronto e leads diários.",
              "Antes, eu achava que era impossível vender no Instagram sem gastar muito. O Vibe Marketing me provou o contrário.",
              "Já gastei muito com agências que prometiam mundos. O Vibe me mostrou como fazer do jeito certo e barato.",
            ].map((testimonial, index) => (
              <Card key={index} className="border-blue-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic">"{testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Acesso Anual</h2>

          <Card className="border-2 border-blue-200 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-sm text-slate-500 line-through mb-2">De R$ 997</div>
                <div className="text-5xl font-bold text-slate-800 mb-2">R$ 197</div>
                <div className="text-blue-600 font-semibold">Acesso Anual Completo</div>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "Acesso a todos os treinamentos mensais",
                  "Acesso a todos os templates",
                  "Acesso aos agentes de IA",
                  "Swipe file de copy",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 text-lg"
              >
                Garantir Meu Acesso Agora
              </Button>

              <p className="text-sm text-slate-500 mt-4">Garantia de 7 dias ou seu dinheiro de volta</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Vibe Marketing</div>
          <p className="text-slate-400 mb-6">Transformando empresários em mestres do marketing digital</p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
