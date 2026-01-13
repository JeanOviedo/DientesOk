import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    noPadding?: boolean
}

export function Card({ children, className = '', noPadding = false }: CardProps) {
    return (
        <div className={`bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group ${className}`}>
            <div className={noPadding ? '' : 'p-6 md:p-8'}>
                {children}
            </div>
        </div>
    )
}

interface ServiceCardProps {
    title: string
    description: string
    image?: string // Path to image
    icon?: React.ReactNode
    ctaText?: string
    onClick?: () => void
}

export function ServiceCard({ title, description, image, icon, ctaText = 'Ver Servicio', onClick }: ServiceCardProps) {
    return (
        <Card className="h-full flex flex-col pointer-events-none md:pointer-events-auto" noPadding> {/* pointer-events to handle drag restrictions naturally if needed, but restrictions are global. */}
            {image && (
                <div className="h-48 overflow-hidden relative">
                    {/* In a real app use custom image component or Next Image. Using simple img tag for template speed but respecting Next.js. I'll use simple div with bg or img tag. */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                        draggable={false}
                    />
                </div>
            )}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    {icon && <div className="text-primary mb-4">{icon}</div>}
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">{description}</p>
                </div>

                <div className="mt-auto pt-4">
                    <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        {ctaText} <span className="text-lg">→</span>
                    </span>
                </div>
            </div>
        </Card>
    )
}
