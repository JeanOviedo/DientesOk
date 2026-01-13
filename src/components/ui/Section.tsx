import React from 'react'

interface SectionProps {
    id?: string
    className?: string
    children: React.ReactNode
    background?: 'white' | 'gray' | 'marketing'
}

export function Section({ id, className = '', children, background = 'white' }: SectionProps) {
    const bgClasses = {
        white: 'bg-white',
        gray: 'bg-slate-50',
        marketing: 'bg-gradient-to-br from-slate-50 to-blue-50/30'
    }

    return (
        <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    )
}
