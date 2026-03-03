import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CursorGlow } from "@/components/CursorGlow"
import { siteConfig } from '@/lib/config';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#02040a',
};

export const metadata: Metadata = {
  title: {
    default: "NB Play TV – IPTV Premium com Filmes, Séries e Canais Ao Vivo",
    template: `%s | ${siteConfig.name}`
  },
  description: "O melhor IPTV Premium do Brasil. Assista Futebol ao Vivo, Filmes Online e Séries em HD. Tenha acesso a uma Lista IPTV 4K estável, sem travamentos e compatível com todos os dispositivos.",
  keywords: [
    'IPTV Premium', 
    'IPTV Brasil', 
    'Assistir Futebol ao Vivo', 
    'Filmes Online', 
    'Séries HD', 
    'IPTV Estável', 
    'Lista IPTV 4K',
    'NB Play TV',
    'TV Box',
    'Smart TV'
  ],
  authors: [{ name: siteConfig.owner }],
  robots: 'index, follow',
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} - O Futuro do Entretenimento Digital`,
    description: 'Estabilidade garantida e qualidade 4K. Descubra por que somos a escolha número 1 de milhares de clientes.',
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Preview`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden bg-background text-foreground">
        <FirebaseClientProvider>
          <CursorGlow />
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
