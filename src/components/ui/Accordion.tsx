'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface AccordionItemProps {
    question: string
    answer: string
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-secondary text-lg">{question}</span>
                {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-slate-500 leading-relaxed text-sm md:text-base pr-8">
                    {answer}
                </p>
            </div>
        </div>
    )
}

interface AccordionProps {
    items: { question: string, answer: string }[]
}

export function Accordion({ items }: AccordionProps) {
    return (
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 border border-slate-100">
            {items.map((item, idx) => (
                <AccordionItem key={idx} {...item} />
            ))}
        </div>
    )
}
