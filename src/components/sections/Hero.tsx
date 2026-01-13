import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MapPin, Search, Calendar, ChevronRight, CheckCircle, Star } from 'lucide-react'
import data from '@/data/mockData.json'

export function Hero() {
    const { title, badges, ctaPrimary, search, image } = data.hero

    return (
        <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">

            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent -z-20 rounded-b-[50%]" />
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px] -z-10 animate-float" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div className="max-w-2xl relative z-10">
                        <div className="flex flex-wrap gap-3 mb-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                            {badges.map((badge) => (
                                <span key={badge} className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary-dark flex items-center gap-2 shadow-sm">
                                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle size={12} strokeWidth={3} />
                                    </span>
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary leading-[1.1] mb-8 text-balance animate-in slide-in-from-bottom-6 duration-1000 delay-100 fade-in">
                            {/* Split title for emphasis based on first few words */}
                            <span className="text-secondary">Hasta </span>
                            <span className="text-gradient">20% OFF</span>
                            <br />
                            <span className="text-secondary-light">en tu tratamiento de implantes</span>
                        </h1>

                        <div className="flex flex-wrap gap-4 mb-16 animate-in slide-in-from-bottom-8 duration-1000 delay-200 fade-in">
                            <Button size="lg" className="shadow-2xl shadow-primary/30">
                                {ctaPrimary} <ChevronRight className="ml-1" size={20} />
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-200 text-slate-600 hover:border-primary hover:text-primary">
                                Ver Video
                            </Button>
                        </div>

                        {/* Search Box - Floating Glass Card */}
                        <div className="glass-card p-2 rounded-2xl shadow-xl shadow-slate-200/50 max-w-lg transition-transform hover:scale-[1.02] duration-300 animate-in slide-in-from-bottom-10 duration-1000 delay-300 fade-in">
                            <div className="px-6 py-4 border-b border-slate-100/50">
                                <h3 className="font-semibold text-slate-700 flex items-center gap-2 text-sm uppercase tracking-wider text-primary">
                                    <Search size={16} />
                                    {search.title}
                                </h3>
                            </div>
                            <div className="p-2 flex gap-2">
                                <Button variant="ghost" className="flex-1 justify-start text-slate-500 font-normal bg-slate-50 hover:bg-slate-100">
                                    {search.buttons[0]}
                                </Button>
                                <Button variant="secondary" className="px-6 shadow-lg shadow-slate-900/10">
                                    <MapPin size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Image Composition */}
                    <div className="relative lg:h-[700px] flex items-center justify-center perspective-1000">
                        {/* Main Image Container */}
                        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white/40 backdrop-blur-sm z-10 animate-float">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={image}
                                alt="Tratamiento Dental Premium"
                                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
                            />

                            {/* Glass Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                            {/* Floating Card 1: Review */}
                            <div className="absolute top-12 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-glass border border-white max-w-[180px] animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex gap-1 text-amber-400 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <p className="text-xs font-medium text-slate-700 leading-tight">"Servicio impecable y tecnología punta"</p>
                            </div>

                            {/* Floating Card 2: Appointment */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-glass border border-white min-w-[200px] animate-float" style={{ animationDelay: '2s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-500">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Próxima Disponibilidad</p>
                                        <p className="text-sm font-bold text-slate-800">Hoy, 15:00 hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Blob decoration behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-spin-slow -z-10" style={{ animationDuration: '60s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-teal-400/20 rounded-full animate-spin-slow -z-10" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
