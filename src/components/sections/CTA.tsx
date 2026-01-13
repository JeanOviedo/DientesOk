import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import data from '@/data/mockData.json'

export function CTA() {
    const { cta, button } = data.footer.contact

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Aurora Background */}
            <div className="absolute inset-0 bg-secondary">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 animate-float" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tighter text-balance drop-shadow-lg">
                    {cta}
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button variant="white" size="lg" className="min-w-[220px] text-lg shadow-2xl shadow-white/10 h-16 rounded-full">
                        {button}
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white min-w-[220px] text-lg h-16 rounded-full backdrop-blur-sm">
                        Llamar ahora
                    </Button>
                </div>
            </div>
        </section>
    )
}
