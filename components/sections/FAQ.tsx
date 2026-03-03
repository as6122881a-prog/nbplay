import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona em qualquer internet?",
    answer: "Sim! Recomendamos uma conexão de pelo menos 10mbps para conteúdos HD e 25mbps para conteúdos 4K para uma experiência sem travamentos."
  },
  {
    question: "Tem teste grátis?",
    answer: "Sim! Oferecemos um teste de até 6 horas para você conhecer nossa qualidade e estabilidade. Basta chamar no WhatsApp."
  },
  {
    question: "Precisa instalar aplicativo?",
    answer: "Sim, dependendo do dispositivo. Para Smart TVs temos apps como IPTV Smarters, para Android temos app próprio e para computador via navegador ou app player."
  },
  {
    question: "Qual a forma de pagamento?",
    answer: "Aceitamos PIX com liberação automática através do sistema CIBRA, além de Cartão de Crédito via link de pagamento."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">Tudo o que você precisa saber antes de assinar.</p>
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