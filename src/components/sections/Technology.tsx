import { Section } from '@/components/ui/Section'
import data from '@/data/mockData.json'

export function Technology() {
    const { title, items, image } = data.technology

    return (
        <Section id="technology" className="bg-slate-50/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

                <div className="order-2 lg:order-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        Innovación
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 leading-tight">
                        {title}
                    </h2>

                    <div className="space-y-6">
                        {items.map((item, idx) => (
                            <div key={idx} className="bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between mb-3">
                                    <span className="font-semibold text-slate-700">{item.label}</span>
                                    <span className="text-primary font-bold">{item.percentage}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out relative"
                                        style={{ width: `${item.percentage}%` }}
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative group perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-teal-400/20 rounded-[2.5rem] transform rotate-3 scale-105 blur-2xl opacity-60" />

                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-white/50 z-10">
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent z-20" />

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image}
                            alt="Tecnología Dental Avanzada"
                            className="w-full h-full object-cover aspect-square transition-transform duration-[1.5s] group-hover:scale-110"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg border border-white/50 z-30 flex gap-3 items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-bold text-slate-800">Equipamiento 2025</span>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    )
}
