import { ShieldCheck, Clock, Headphones } from "lucide-react";

export function TrustBar() {
  return (
    <div className="bg-primary/5 border-y border-primary/10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-20">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-primary w-6 h-6" />
            <span className="font-bold text-sm tracking-wide">ESTABILIDADE 99.9%</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary w-6 h-6" />
            <span className="font-bold text-sm tracking-wide">LIBERAÇÃO IMEDIATA</span>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="text-primary w-6 h-6" />
            <span className="font-bold text-sm tracking-wide">SUPORTE DIÁRIO</span>
          </div>
        </div>
      </div>
    </div>
  );
}