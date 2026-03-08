import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Fale Conosco | Suporte Técnico e Vendas NB Play",
  description: "Entre em contato com a equipe do NB Play. Suporte rápido via WhatsApp para dúvidas, assinaturas e renovações.",
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fale Conosco</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe está pronta para te atender. Tire suas dúvidas ou solicite suporte agora mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* Contact Info */}
            <div className="glass-card p-8 rounded-3xl space-y-8">
              <h2 className="text-2xl font-bold mb-6">Canais de Atendimento</h2>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">WhatsApp (Vendas e Suporte)</p>
                  <p className="text-lg font-bold">{siteConfig.whatsappNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Instagram Oficial</p>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">
                    {siteConfig.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Horário de Atendimento</p>
                  <p className="text-lg font-bold">{siteConfig.supportHours}</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-3xl border border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Precisa de ajuda urgente?</h2>
                <p className="text-muted-foreground mb-8">
                  Nosso tempo médio de resposta no WhatsApp é de menos de 5 minutos durante o horário comercial.
                </p>
                <Button size="lg" className="w-full h-14 text-lg font-bold neon-glow" asChild>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Preciso de ajuda com o NB Play.")}`} 
                    target="_blank"
                  >
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
