import { Star, Quote, CheckCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig } from "@/lib/config";

const reviews = [
  {
    name: "Ricardo Souza",
    role: "Cliente Premium",
    time: "há 2 meses",
    content: "Finalmente um IPTV que não trava no clássico de domingo! O sinal 4K é limpo e a lista de canais é muito organizada. Vale cada centavo.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1")?.imageUrl
  },
  {
    name: "Amanda Oliveira",
    role: "Cliente Anual",
    time: "há 1 ano",
    content: "O que mais me impressionou foi o suporte. Tive uma dúvida na instalação da minha Smart TV e me responderam em menos de 5 minutos no WhatsApp.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2")?.imageUrl
  },
  {
    name: "Bruno Martins",
    role: "Cliente VIP",
    time: "há 5 meses",
    content: "Assinei o plano anual por causa do custo-benefício. Meus filhos adoram o catálogo de desenhos e eu não perco nenhum jogo do Premiere.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-3")?.imageUrl
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold mb-4">
            <CheckCircle className="w-3 h-3" />
            {siteConfig.verifiedClients.toUpperCase()} CLIENTES SATISFEITOS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Quem Usa, <span className="text-primary">Recomenda</span></h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A {siteConfig.name} é referência em estabilidade. Veja o que dizem nossos assinantes sobre a experiência completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="p-8 glass-card rounded-3xl relative flex flex-col h-full hover:border-primary/50 transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-8 text-primary/5 w-16 h-16 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8 italic flex-grow">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <Avatar className="h-14 w-14 border-2 border-primary/20 p-0.5">
                  <AvatarImage 
                    src={review.image} 
                    alt={review.name} 
                    className="object-cover rounded-full"
                    data-ai-hint="person avatar"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {review.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center" title="Perfil Verificado">
                      <svg viewBox="0 0 24 24" className="w-2 h-2 text-white fill-current">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col text-xs text-muted-foreground">
                    <span>{review.role}</span>
                    <span className="text-primary/60">{review.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
