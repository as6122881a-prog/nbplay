import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, Star, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold animate-fade-in-up">
            <Star className="w-4 h-4 fill-current" />
            {siteConfig.name.toUpperCase()} PREMIUM #1
          </div>
          
          <a 
            href={siteConfig.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold hover:scale-105 transition-transform animate-bounce neon-glow-accent"
          >
            <Instagram className="w-4 h-4" />
            SIGA O {siteConfig.owner.split('.')[1]?.trim().toUpperCase() || siteConfig.owner.toUpperCase()} NO INSTAGRAM
          </a>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Entretenimento <span className="text-primary italic text-glow">Ultra HD</span> Sem Interrupções
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Acesse a maior grade de conteúdos do mundo em qualquer dispositivo. Estabilidade premium e suporte VIP para você maratonar sem estresse.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Button size="lg" className="h-14 px-8 text-lg font-bold neon-glow w-full sm:w-auto bg-primary hover:bg-primary/90" asChild>
            <a href="#planos">Escolher Meu Plano</a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold w-full sm:w-auto border-white/10 hover:bg-white/5" asChild>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá, vi o site e quero um teste grátis no NB Play!")}`} target="_blank">
              Solicitar Teste Grátis
            </a>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-primary w-5 h-5" />
            Suporte Humanizado
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-primary w-5 h-5" />
            Conteúdo Atualizado
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-primary w-5 h-5" />
            Acesso Instantâneo
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
    </section>
  );
}
