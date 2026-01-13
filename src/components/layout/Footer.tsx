import Link from 'next/link'
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, Phone, Clock } from 'lucide-react'
import data from '@/data/mockData.json'

export function Footer() {
    const { text, links, policies, contact } = data.footer

    // Icon mapping helper
    const SocialIcon = ({ type }: { type: string }) => {
        switch (type) {
            case 'facebook': return <Facebook size={20} />;
            case 'instagram': return <Instagram size={20} />;
            case 'youtube': return <Youtube size={20} />;
            default: return <Linkedin size={20} />;
        }
    }

    return (
        <footer className="bg-[#0b1120] text-white pt-24 pb-12 border-t border-slate-800/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M19 11.5a7.5 7.5 0 1 1-15 0c0-5.5 3.5-9.5 7.5-9.5s7.5 4 7.5 9.5Z" />
                                    <path d="M8 12.5c0 1.5 1.5 2.5 4 2.5s4-1 4-2.5" />
                                    <path d="M12 2v2" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                Diente<span className="text-primary">Ok</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-7 mb-8 pr-4">
                            {text}
                        </p>
                        <div className="flex gap-3">
                            {['facebook', 'instagram', 'youtube', 'tiktok'].map((social, i) => (
                                <a key={i} href="#" className="p-3 bg-slate-800/50 rounded-full hover:bg-primary transition-all hover:-translate-y-1 text-slate-300 hover:text-white border border-slate-800 hover:border-primary">
                                    <SocialIcon type={social} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-8 text-white tracking-tight">Navegación</h3>
                        <ul className="space-y-4">
                            {links.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-8 text-white tracking-tight">Contacto</h3>
                        <ul className="space-y-6 text-slate-400 text-sm">
                            <li className="flex gap-4 items-start">
                                <Clock className="text-primary shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="font-medium text-slate-300 mb-1">Horario de Atención</p>
                                    <p>Lun - Sáb: 8:00 AM - 8:00 PM</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail className="text-primary shrink-0" size={20} />
                                <p className="hover:text-white transition-colors cursor-pointer">info@dienteok.com</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone className="text-primary shrink-0" size={20} />
                                <p className="hover:text-white transition-colors cursor-pointer">+34 900 000 000</p>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / CTA */}
                    <div>
                        <h3 className="font-bold text-lg mb-8 text-white tracking-tight">Legal</h3>
                        <ul className="space-y-4 mb-8">
                            {policies.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-500 hover:text-primary transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} DienteOk. Todos los derechos reservados.</p>
                    <p className="flex items-center gap-1">Diseño Premium por <span className="text-slate-400 font-medium">Jean Carlos Oviedo</span></p>
                </div>
            </div>
        </footer>
    )
}
