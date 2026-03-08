import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog NB Play | Dicas, Tutoriais e Novidades sobre IPTV",
  description: "Fique por dentro do mundo do IPTV. Melhores aplicativos, configurações para evitar travamentos e novidades do NB Play.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog NB Play</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dicas exclusivas para melhorar sua experiência com IPTV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Ler Artigo Completo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
