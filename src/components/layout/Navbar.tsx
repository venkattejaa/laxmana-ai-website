import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Zap, Github, Download, Menu, X } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

const navLinks: NavLink[] = [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Docs', href: 'https://docs.laxmana-ai.dev', external: true },
];

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 text-xl font-bold">
                        <Zap className="w-6 h-6 text-cyan-400" />
                        <span className="gradient-text">Laxmana AI</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    className="text-text-secondary hover:text-white transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                            <Button
                                variant="secondary"
                                href="https://github.com/venkattejaa/laxmana-ai"
                                external
                                icon={Github}
                            >
                                Star on GitHub
                            </Button>
                            <Button href="#download" icon={Download}>
                                Download
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-text-secondary hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-bg-secondary/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className="text-text-secondary hover:text-white transition-colors block p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                        <Button
                            variant="secondary"
                            href="https://github.com/venkattejaa/laxmana-ai"
                            external
                            icon={Github}
                            className="justify-center"
                        >
                            Star on GitHub
                        </Button>
                        <Button href="#download" icon={Download} className="justify-center">
                            Download
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
