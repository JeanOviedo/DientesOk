'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import data from '@/data/mockData.json'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

    const { menu, cta } = data.navbar

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled
                ? 'bg-white/70 backdrop-blur-xl shadow-glass border-white/20 py-2'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    < Link href="/" className="flex items-center gap-2 group z-50" >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d="M19 11.5a7.5 7.5 0 1 1-15 0c0-5.5 3.5-9.5 7.5-9.5s7.5 4 7.5 9.5Z" className="group-hover:animate-pulse-slow" />
                                <path d="M8 12.5c0 1.5 1.5 2.5 4 2.5s4-1 4-2.5" />
                                <path d="M12 2v2" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tighter text-secondary leading-none">
                                Diente<span className="text-primary">Ok</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold group-hover:text-primary transition-colors">
                                Clínica Dental
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menu.map((link) => (
                            <div key={link.label} className="relative group">
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                                >
                                    {link.label}
                                    {link.submenu && <ChevronDown size={14} />}
                                </Link>

                                {/* Dropdown */}
                                {link.submenu && (
                                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-2">
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Button variant="outline" size="sm" className="hidden xl:inline-flex">
                            {cta.label}
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg lg:hidden flex flex-col p-4 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
                    {menu.map((link) => (
                        <div key={link.label} className="border-b border-slate-50 last:border-0">
                            {link.submenu ? (
                                <div>
                                    <button
                                        onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                                        className="flex items-center justify-between w-full py-3 text-lg font-medium text-slate-600"
                                    >
                                        {link.label}
                                        <ChevronDown size={18} className={`transition-transform ${activeSubmenu === link.label ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeSubmenu === link.label && (
                                        <div className="pl-4 pb-3 space-y-2 bg-slate-50/50 rounded-lg mb-2">
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block py-2 text-slate-500 hover:text-primary"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="block py-3 text-lg font-medium text-slate-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="mt-6">
                        <Button fullWidth variant="primary">
                            {cta.label}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
