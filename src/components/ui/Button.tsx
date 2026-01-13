import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
    size?: 'sm' | 'md' | 'lg'
    fullWidth?: boolean
}

export function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    ...props
}: ButtonProps) {

    const baseStyles = "relative overflow-hidden inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"

    // Shine effect element to be added inside
    const shineElement = (
        <span className="absolute inset-0 block w-full h-full opacity-0 group-hover:opacity-20 transition-opacity overflow-hidden pointer-events-none">
            <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shine skew-x-[-20deg]" />
        </span>
    )

    const variants = {
        primary: "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 border border-transparent group",
        secondary: "bg-secondary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 group",
        outline: "border-2 border-primary text-primary hover:bg-primary/5 hover:border-primary-dark group",
        ghost: "text-slate-600 hover:bg-slate-100/50 hover:text-primary backdrop-blur-sm",
        white: "bg-white text-primary shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-0.5 border border-slate-100 group"
    }

    const sizes = {
        sm: "h-9 px-4 text-sm font-semibold tracking-wide",
        md: "h-12 px-8 text-base font-semibold tracking-wide",
        lg: "h-14 px-10 text-lg font-bold tracking-wide"
    }

    const width = fullWidth ? "w-full" : ""

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`

    return (
        <button className={classes} {...props}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {/* Add shine only to solid buttons for that premium glass reflection */}
            {(variant === 'primary' || variant === 'white') && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            )}
        </button>
    )
}
