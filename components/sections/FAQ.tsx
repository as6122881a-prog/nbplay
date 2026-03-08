import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é IPTV?",
    answer: "IPTV (Internet Protocol Television) é uma tecnologia moderna que permite a transmissão de sinais de TV via internet banda larga. Diferente da TV a cabo tradicional, o IPTV oferece alta qualidade de imagem (até 4K) e som sem a necessidade de antenas, cabos coaxiais ou instalações complexas. Tudo o que você precisa é de uma conexão estável com a internet."
  },
  {
    question: "IPTV é legal?",
    answer: "Sim, a tecnologia IPTV em si é totalmente legal e utilizada em todo o mundo para distribuição de conteúdo via internet. O NB Play foca em oferecer a melhor experiência tecnológica para gerenciamento e reprodução de streams, garantindo estabilidade e qualidade superior para seus usuários."
  },
  {
    question: "Como funciona IPTV na Smart TV?",
    answer: "É muito simples! Na sua Smart TV (Samsung, LG, Android TV), basta baixar um aplicativo compatível na loja de apps (como IPTV Smarters, SSIPTV, Duplex Play, etc). Após instalar, você insere os dados de acesso (usuário e senha) que nossa equipe envia imediatamente após a assinatura. Em poucos minutos você tem acesso a todo o conteúdo."
  },
  {
    question: "Qual a melhor IPTV do Brasil?",
    answer: "O NB Play é amplamente reconhecido como a melhor opção do mercado brasileiro atualmente. Nos destacamos pela infraestrutura de servidores dedicados que garantem 99.9% de estabilidade (anti-travamento), qualidade de imagem 4K real, e um suporte técnico humanizado e rápido via WhatsApp. Além disso, nossa grade de filmes e séries é atualizada diariamente."
  },
  {
    question: "Precisa de internet muito rápida?",
    answer: "Recomendamos uma internet de pelo menos 10 Mega para canais SD/HD e 30 Mega ou mais para desfrutar da qualidade 4K e Full HD sem interrupções. O mais importante é a estabilidade da conexão (preferencialmente via cabo de rede para TV Box/Smart TV)."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">Tudo o que você precisa saber sobre o melhor IPTV do Brasil.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card border-white/5 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-bold hover:no-underline hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}