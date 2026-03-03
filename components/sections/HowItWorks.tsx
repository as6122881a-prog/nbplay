import { MessageSquare, CreditCard, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Chama no WhatsApp",
    description: "Tire suas dúvidas e escolha o melhor plano para você."
  },
  {
    icon: CreditCard,
    title: "Faça seu Pagamento",
    description: "Escolha seu plano e pague via PIX com liberação imediata."
  },
  {
    icon: PlayCircle,
    title: "Assista onde quiser",
    description: "Receba seus dados de acesso e comece a maratonar agora!"
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Começar é Muito Fácil</h2>
          <p className="text-muted-foreground">Em menos de 5 minutos você já estará assistindo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-background border-2 border-primary rounded-full flex items-center justify-center mb-6 neon-glow relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <step.icon className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}