

interface SectionTitleProps {
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    className?: string
}

export function SectionTitle({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
    const alignClass = align === 'center' ? 'text-center' : 'text-left'

    return (
        <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
            {subtitle && (
                <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary">
                {title}
            </h2>
            <div className={`mt-4 w-24 h-1.5 bg-primary rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
        </div>
    )
}
