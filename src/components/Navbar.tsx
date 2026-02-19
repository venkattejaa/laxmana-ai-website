import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Download', href: '#download' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Docs', href: '#' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <motion.div
                        className="w-10 h-10 rounded-xl bg-clawbud-bg border border-white/10 flex items-center justify-center overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ boxShadow: isScrolled ? '0 0 20px rgba(34, 211, 238, 0.2)' : 'none' }}
                    >
                        <img src="./clawbud_logo.svg" alt="Clawbud" className="w-8 h-8 object-contain" />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight">
                        Claw<span className="text-clawbud-cyan">bud</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-clawbud-cyan transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <a href="#download" className="btn-primary py-2 text-sm !rounded-full">
                        Get Started
                    </a>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-clawbud-bg-secondary border-b border-white/10 p-6 md:hidden"
                    >
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-lg font-medium text-white/70"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <a
                                href="#download"
                                className="btn-primary text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
