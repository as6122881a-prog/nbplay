import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { CheckCircle2, Trophy, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Sobre Nós | ${siteConfig.name} - Líder em IPTV no Brasil`,
  description: "Conheça a história e a qualidade do NB Play TV. Somos referência em estabilidade, atendimento e inovação no mercado de IPTV.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Sobre o {siteConfig.name}</h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Transformando a maneira como você assiste TV. Qualidade, estabilidade e compromisso com o entretenimento da sua família.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold italic">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O {siteConfig.name} nasceu com o objetivo de democratizar o acesso ao entretenimento de alta qualidade. Cansados dos preços abusivos das operadoras tradicionais e da instabilidade de serviços amadores, criamos uma infraestrutura robusta capaz de entregar imagem 4K e Full HD sem travamentos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    Tecnologia Anti-Freeze Exclusiva
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    Servidores Dedicados de Alta Performance
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    Atendimento Humanizado de Verdade
                  </li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="p-4">
                    <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-1">{siteConfig.verifiedClients}</h3>
                    <p className="text-sm text-muted-foreground">Clientes Ativos</p>
                  </div>
                  <div className="p-4">
                    <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-1">#1</h3>
                    <p className="text-sm text-muted-foreground">Em Estabilidade</p>
                  </div>
                  <div className="p-4 col-span-2">
                    <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4 fill-yellow-500" />
                    <h3 className="text-3xl font-bold mb-1">5 Estrelas</h3>
                    <p className="text-sm text-muted-foreground">Avaliação Média dos Usuários</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-12 border-t border-white/10">
              <h2 className="text-3xl font-bold mb-8">Pronto para a melhor experiência?</h2>
              <Button size="lg" className="h-14 px-10 text-lg font-bold neon-glow" asChild>
                <a href="/planos">Ver Nossos Planos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
