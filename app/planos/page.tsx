import { Navbar } from "@/components/sections/Navbar";
import { Plans } from "@/components/sections/Plans";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos IPTV Premium | Assinatura Mensal, Trimestral e Anual",
  description: "Conheça os melhores planos de IPTV do Brasil. Assine agora e tenha acesso imediato a canais 4K, filmes e séries.",
};

export default function PlanosPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="pt-10">
        <Plans />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
