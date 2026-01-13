'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import data from '@/data/mockData.json'

export function FAQ() {
    const { title, items } = data.faq
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Section id="faq">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    Ayuda
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary">{title}</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {items.map((item, idx) => {
                    const isOpen = openIndex === idx
                    return (
                        <div
                            key={idx}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen
                                    ? 'bg-white shadow-xl shadow-primary/5 border-primary/10 scale-[1.02]'
                                    : 'bg-white/60 hover:bg-white border-white/50 hover:shadow-lg hover:border-white'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-slate-700'}`}>
                                    {item.question}
                                </span>
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
                                        }`}
                                >
                                    <ChevronDown size={18} />
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-slate-500 leading-relaxed text-balance">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

// Icon needed
import { ChevronDown } from 'lucide-react'
