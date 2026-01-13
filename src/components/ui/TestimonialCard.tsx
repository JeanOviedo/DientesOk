import React from 'react'
import { Star } from 'lucide-react'
import { Card } from './Card'

interface TestimonialCardProps {
    name: string
    text: string
    stars?: number
    date: string
    image?: string
}

export function TestimonialCard({ name, text, stars = 5, date, image }: TestimonialCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < stars ? "currentColor" : "none"} className={i < stars ? "" : "text-slate-300"} />
                ))}
                {/* Google-like logo/icon could go here */}
            </div>

            <p className="text-slate-600 mb-6 flex-grow leading-relaxed italic">"{text}"</p>

            <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-lg">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-secondary text-sm">{name}</h4>
                    <span className="text-slate-400 text-xs block">{date}</span>
                </div>
            </div>
        </Card>
    )
}
