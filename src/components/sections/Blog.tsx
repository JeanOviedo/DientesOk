import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Calendar } from 'lucide-react'
import data from '@/data/mockData.json'

export function Blog() {
    const { title, posts } = data.blog

    return (
        <Section id="blog">
            <div className="flex items-end justify-between mb-12 max-w-7xl mx-auto px-4 md:px-0">
                <div>
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Actualidad</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary">{title}</h2>
                </div>
                <Button variant="ghost" className="hidden md:inline-flex text-slate-500">Ver todo el blog</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {posts.map((post, idx) => (
                    <article key={idx} className="group cursor-pointer flex flex-col h-full">
                        <div className="relative h-64 overflow-hidden rounded-[2rem] shadow-lg mb-6">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-md z-20 flex items-center gap-1.5">
                                <Calendar size={12} className="text-primary" />
                                <span>Hace 2 días</span>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 mb-6 flex-1 text-balance leading-relaxed">
                                {post.excerpt}
                            </p>
                            <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline decoration-2 underline-offset-4">
                                Leer artículo completo <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Button variant="outline">Ver todo el blog</Button>
            </div>
        </Section>
    )
}
