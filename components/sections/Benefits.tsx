import { Tv, Film, Trophy, Smartphone, Zap, Wallet } from "lucide-react";
import { siteConfig } from "@/lib/config";

const benefits = [
  {
    icon: Tv,
    title: "Canais Ao Vivo",
    description: "Milhares de canais abertos e fechados em HD, Full HD e 4K."
  },
  {
    icon: Film,
    title: "Filmes e Séries",
    description: "As maiores bibliotecas de streaming atualizadas semanalmente."
  },
  {
    icon: Trophy,
    title: "Futebol Ao Vivo",
    description: "Premiere, Combate, DAZN e todos os campeonatos exclusivos."
  },
  {
    icon: Smartphone,
    title: "Multi-Dispositivos",
    description: "Assista no celular, tablet, computador ou Smart TV."
  },
  {
    icon: Zap,
    title: "Sem Travamentos",
    description: "Servidores dedicados com tecnologia anti-freeze de ponta."
  },
  {
    icon: Wallet,
    title: "Economia Real",
    description: "Cancele suas assinaturas caras e tenha tudo em um só lugar."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Assistir Futebol Ao Vivo Sem Travar</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Filmes e Séries Atualizados Diariamente com a melhor tecnologia anti-travamento do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 glass-card rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <benefit.icon className="text-primary group-hover:text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
