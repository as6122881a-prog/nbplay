import { Navbar } from "@/components/sections/Navbar";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes - FAQ | NB Play TV",
  description: "Tire suas dúvidas sobre IPTV: Como funciona, se é legal, qual a velocidade de internet necessária e muito mais.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="pt-10">
        <FAQ />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
