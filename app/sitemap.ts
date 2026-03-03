import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { blogPosts } from '@/lib/blog-data'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/planos',
    '/sobre',
    '/contato',
    '/faq',
    '/blog',
  ].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...posts]
}
