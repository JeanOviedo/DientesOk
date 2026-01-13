import { Section } from '@/components/ui/Section'
import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import data from '@/data/mockData.json'

export function Clinics() {
    const { title, description, images } = data.clinics

    return (
        <Section id="clinics">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Ubicaciones</span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{title}</h2>
                <p className="text-slate-500">{description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {images.map((img, idx) => (
                    <div key={idx} className="group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 aspect-[4/3] transform transition-transform hover:scale-[1.02] duration-500">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={img}
                            alt={`Clínica DienteOk ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white font-bold text-xl mb-1 drop-shadow-md">Clínica Centro {idx + 1}</h3>
                            <div className="flex items-center text-slate-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                                <MapPin size={16} className="mr-2 text-primary" />
                                <span>Av. Principal {100 + idx}, Ciudad</span>
                            </div>
                            <Button size="sm" variant="white" className="w-full opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500 shadow-xl">
                                Ver Detalles
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
