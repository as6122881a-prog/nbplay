import { Instagram, MessageCircle, CheckCircle, Tv } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary/50 bg-primary/10">
                <Tv className="text-primary w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              O melhor serviço de entretenimento digital. Estabilidade premium, qualidade 4K e os melhores conteúdos do mundo selecionados pelo {siteConfig.owner}.
            </p>
            
            <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl mb-6">
              <h5 className="font-bold text-sm mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Perfil Oficial {siteConfig.owner}
              </h5>
              <p className="text-xs text-muted-foreground mb-4">Siga para novidades, promoções e suporte direto.</p>
              <div className="flex gap-4">
                <a 
                  href={siteConfig.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:scale-105 transition-all duration-300 text-white font-bold text-sm group shadow-lg"
                >
                  <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Me Siga no Instagram
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-primary">Links Rápidos</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="#beneficios" className="hover:text-primary transition-colors">Benefícios</Link></li>
              <li><Link href="#planos" className="hover:text-primary transition-colors">Nossos Planos</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-primary">Suporte Oficial</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Suporte
              </a></li>
              <li><a href={siteConfig.instagramUrl} target="_blank" className="hover:text-primary transition-colors">{siteConfig.instagramHandle}</a></li>
              <li>Atendimento VIP</li>
              <li>Das {siteConfig.supportHours}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 {siteConfig.name} | Administrado por {siteConfig.owner}.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
