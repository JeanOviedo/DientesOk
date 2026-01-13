'use client'
import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
    label: string
    value: number
}

export function ProgressBar({ label, value }: ProgressBarProps) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simple animation delay
        const timer = setTimeout(() => setProgress(value), 500)
        return () => clearTimeout(timer)
    }, [value])

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="font-medium text-secondary">{label}</span>
                <span className="font-bold text-primary">{value}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}
