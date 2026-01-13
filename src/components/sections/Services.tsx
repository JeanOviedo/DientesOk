import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Drill, Smile, Sparkles, Crown, PenTool, Activity, ArrowRight } from 'lucide-react'
import data from '@/data/mockData.json'

export function Services() {
    const { title, items } = data.services

    // Icon map to string keys
    const IconMap: Record<string, any> = {
        Drill, Smile, Sparkles, Crown, PenTool, Activity
    }

    return (
        <Section id="services" background="marketing">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Tratamientos</span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">{title}</h2>
                <div className="w-20 h-1.5 bg-primary/20 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => {
                    const Icon = IconMap[item.icon] || Activity
                    return (
                        <div
                            key={idx}
                            className="group glass-card p-8 rounded-[2rem] hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-50/80 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 mb-6 text-sm leading-relaxed text-balance">
                                    {item.desc}
                                </p>

                                <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary group-hover:pl-2 transition-all p-0 h-auto font-medium">
                                    Ver Detalles <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
