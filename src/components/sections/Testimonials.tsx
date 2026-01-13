import { Section } from '@/components/ui/Section'
import { Star, Quote } from 'lucide-react'
import data from '@/data/mockData.json'

export function Testimonials() {
    const { title, list } = data.testimonials

    return (
        <Section id="testimonials" background="gray">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-secondary mb-4">{title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {list.map((item, idx) => (
                    <div key={idx} className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex gap-1 text-amber-400 mb-6">
                            {[...Array(item.stars)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-slate-600 mb-8 italic relative z-10 text-balance leading-relaxed">
                            "{item.text}"
                            <Quote className="absolute -top-4 -left-2 text-primary/10 -z-10 rotate-180" size={60} />
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100/50">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                            />
                            <div>
                                <h4 className="font-bold text-secondary text-sm">{item.name}</h4>
                                <p className="text-xs text-slate-400 font-medium">{item.time}</p>
                            </div>

                            {/* Google Logo Mock */}
                            <div className="ml-auto w-8 h-8 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-sm">
                                <span className="font-bold text-[14px] text-slate-500">G</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
