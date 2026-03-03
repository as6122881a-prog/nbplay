"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, Copy, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/config";
import { generatePixPayload } from "@/lib/pix";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
  } | null;
}

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [step, setStep] = useState<'details' | 'processing' | 'pix'>('details');
  const [pixCode, setPixCode] = useState<string>("");

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('details');
      setPixCode("");
    }
  }, [isOpen]);

  const handlePay = () => {
    if (!plan) return;
    
    setStep('processing');
    
    // Gera o payload PIX em tempo real
    try {
      const code = generatePixPayload(
        siteConfig.pixKey,
        siteConfig.owner,
        "RIO BRANCO", // Cidade padrão (Acre)
        plan.price,
        "NBPLAY" + Math.floor(Math.random() * 10000) // TxID único simples
      );
      setPixCode(code);
      
      // Simulando processamento rápido
      setTimeout(() => {
        setStep('pix');
      }, 1500);
    } catch (e) {
      console.error("Erro ao gerar PIX", e);
      toast({
        title: "Erro",
        description: "Não foi possível gerar o código PIX. Tente novamente.",
        variant: "destructive"
      });
      setStep('details');
    }
  };

  const copyPix = () => {
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Copiado!",
      description: "Código PIX Copia e Cola copiado para a área de transferência.",
    });
  };

  const handleFinish = () => {
    // Ao clicar em "Já paguei", envia o comprovante
    const message = encodeURIComponent(
      `Olá! Acabei de realizar o pagamento de ${plan?.price} referente ao plano ${plan?.name}.\n\n` +
      `Estou aguardando a liberação.\n` +
      `Meu comprovante segue em anexo (se houver).`
    );
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!plan) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {step === 'details' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Resumo da Assinatura</DialogTitle>
              <DialogDescription>
                Você está assinando o {plan.name} do {siteConfig.name}.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                <span className="font-medium">{plan.name}</span>
                <span className="text-xl font-bold text-primary">{plan.price}</span>
              </div>
              
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-3 text-xs text-primary">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p>Pagamento via PIX: Liberação Imediata.</p>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Liberação Automática</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Suporte VIP Prioritário</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Transação Segura</li>
              </ul>
            </div>
            <DialogFooter>
              <Button onClick={handlePay} className="w-full h-12 text-lg font-bold neon-glow bg-primary hover:bg-primary/90">
                Gerar PIX de {plan.price}
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'processing' && (
          <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
            <p className="text-lg font-medium">Gerando QR Code...</p>
          </div>
        )}

        {step === 'pix' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Pagamento Gerado
              </DialogTitle>
              <DialogDescription>
                Escaneie o QR Code abaixo ou copie o código "Copia e Cola".
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 flex flex-col items-center space-y-6">
              <div className="bg-white p-4 rounded-xl relative w-56 h-56 shadow-2xl">
                {pixCode && (
                  <Image 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(pixCode)}`} 
                    alt="QR Code Pagamento"
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                )}
              </div>
              <div className="w-full space-y-2">
                 <Button 
                  variant="outline" 
                  onClick={copyPix}
                  className="w-full flex gap-2 border-primary/50 hover:border-primary text-primary"
                >
                  <Copy className="w-4 h-4" /> Copiar Código PIX
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Chave PIX (Celular): <span className="font-mono text-primary">{siteConfig.pixKey}</span>
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleFinish} className="w-full h-12 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white">
                Já paguei! Enviar Comprovante <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
