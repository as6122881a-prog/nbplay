import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blog-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Artigo não encontrado' };

  return {
    title: `${post.title} | Blog NB Play`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <article className="py-20 bg-background/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-8 hover:bg-primary/10">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            
            <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('pt-BR', { dateStyle: 'long' })}</time>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" /> Compartilhar
              </Button>
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Gostou do conteúdo?</h2>
            <p className="text-muted-foreground mb-6">
              Experimente o NB Play hoje mesmo e comprove a qualidade que mencionamos no artigo.
            </p>
            <Button size="lg" className="neon-glow" asChild>
              <Link href="/planos">Conhecer Planos Premium</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
