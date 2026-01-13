import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, User } from 'lucide-react'
import data from '@/data/mockData.json'

export function About() {
    const { title, description, metrics, images } = data.about

    return (
        <Section id="about" className="overflow-visible">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

                {/* Composition Image Layer */}
                <div className="relative">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 via-teal-100/30 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow" />

                    {/* Main Image */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white z-10 aspect-[4/5] lg:aspect-[3/4]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={images[0]}
                            alt="Equipo Médico DienteOk"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                        />
                    </div>

                    {/* Secondary Image - Floating */}
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block animate-float" style={{ animationDelay: '1s' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={images[1]}
                            alt="Instalaciones Modernas"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Glass Stats Card */}
                    <div className="absolute top-10 -right-10 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-glass border border-white/50 z-30 max-w-[240px] animate-float" style={{ animationDelay: '2s' }}>
                        <div className="space-y-6">
                            {metrics.slice(0, 2).map((metric, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-800 leading-none mb-1">{metric.value}</p>
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{metric.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Layer */}
                <div className="relative">
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-400/10 rounded-full blur-xl -z-10" />

                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Nosotros
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-secondary mb-8 leading-[1.1]">
                        Transformamos sonrisas con
                        <span className="text-gradient block mt-2">pasión y tecnología.</span>
                    </h2>

                    <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed text-balance">
                        <p>{description}</p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {['Tecnología 3D', 'Materiales Premium', 'Atención 24/7', 'Garantía Escrita'].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-slate-700 font-medium bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle2 className="text-teal-500" size={20} />
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="shadow-xl shadow-primary/20">
                            Conoce al Equipo
                        </Button>
                        <Button variant="ghost" size="lg">
                            Ver Instalaciones
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
