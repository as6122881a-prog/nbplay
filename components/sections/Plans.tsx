"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { PaymentModal } from "@/components/PaymentModal";
import { siteConfig } from "@/lib/config";

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<typeof siteConfig.plans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPayment = (plan: typeof siteConfig.plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="planos" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Planos IPTV com Melhor Custo Benefício</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Planos oficiais e profissionais. Sem contratos abusivos ou taxas escondidas no {siteConfig.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {siteConfig.plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 hover:translate-y-[-10px] ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-primary/30 to-background border-2 border-primary/50 shadow-2xl scale-105 z-10' 
                  : 'glass-card border-white/5 opacity-90'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 neon-glow">
                  <Sparkles className="w-3 h-3" /> {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary' : 'text-accent'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => openPayment(plan)}
                className={`w-full h-12 text-lg font-bold ${
                  plan.highlight ? 'neon-glow' : 'variant-outline'
                }`}
                variant={plan.highlight ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        plan={selectedPlan} 
      />
    </section>
  );
}
