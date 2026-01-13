import { Section } from '@/components/ui/Section'
import { Users, Cpu, ShieldCheck } from 'lucide-react'
import data from '@/data/mockData.json'

export function Benefits() {
    const { benefits } = data

    const IconMap = {
        Users: Users,
        Cpu: Cpu,
        ShieldCheck: ShieldCheck
    }

    return (
        <Section id="benefits" className="relative -mt-10 z-20 pt-0">
            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((item, idx) => {
                    const Icon = IconMap[item.icon as keyof typeof IconMap]
                    return (
                        <div
                            key={idx}
                            className="bg-white/80 backdrop-blur border border-white p-8 rounded-2xl shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500" />

                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform">
                                <Icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm relative z-10">
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
