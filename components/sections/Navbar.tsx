"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Tv } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 border border-white/10 glass-card rounded-2xl px-4 md:px-8">
      <div className="container mx-auto h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary neon-glow transition-all duration-500 group-hover:scale-110 bg-primary/20">
            <Tv className="text-primary w-6 h-6 animate-pulse" />
          </div>
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary">
            {siteConfig.name.split(' ')[0]} <span className="text-white">{siteConfig.name.split(' ')[1]}</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">Benefícios</Link>
          <Link href="#planos" className="text-sm font-medium hover:text-primary transition-colors">Planos</Link>
          <Link href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={siteConfig.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-white/70 hover:text-primary transition-colors hidden xs:flex"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <Button asChild variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-white neon-glow rounded-full px-6">
            <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank">
              Teste Grátis
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
