import React from 'react';
import { Container } from './Container';
import { Zap, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const footerSections = {
    product: {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "Download", href: "#download" },
            { label: "Changelog", href: "https://github.com/venkattejaa/laxmana-ai/releases" },
            { label: "Roadmap", href: "#roadmap" }
        ]
    },
    resources: {
        title: "Resources",
        links: [
            { label: "Documentation", href: "https://docs.laxmana-ai.dev" },
            { label: "API Reference", href: "https://docs.laxmana-ai.dev/api" },
            { label: "Tutorials", href: "https://docs.laxmana-ai.dev/tutorials" },
            { label: "Blog", href: "/blog" }
        ]
    },
    community: {
        title: "Community",
        links: [
            { label: "GitHub", href: "https://github.com/venkattejaa/laxmana-ai" },
            { label: "Discord", href: "https://discord.gg/laxmana-ai" },
            { label: "Twitter", href: "https://twitter.com/laxmana_ai" },
            { label: "Contribute", href: "https://github.com/venkattejaa/laxmana-ai/blob/main/CONTRIBUTING.md" }
        ]
    },
    legal: {
        title: "Legal",
        links: [
            { label: "License (MIT)", href: "https://github.com/venkattejaa/laxmana-ai/blob/main/LICENSE" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" }
        ]
    }
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-secondary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 text-xl font-bold mb-6">
                            <Zap className="w-6 h-6 text-cyan-400" />
                            <span className="gradient-text">Laxmana AI</span>
                        </a>
                        <p className="text-text-secondary leading-relaxed mb-6 max-w-sm">
                            Open Source AI Development Agent. Build complete applications with voice or text using multi-provider AI.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/venkattejaa/laxmana-ai" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/laxmana_ai" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerSections).map(([key, section]) => (
                        <div key={key}>
                            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-text-secondary hover:text-cyan-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Prominent Creator Credit */}
                <div className="border-t border-white/10 pt-10 flex flex-col items-center justify-center text-center">
                    <div className="glass-card mb-8 px-8 py-6 w-full max-w-xl mx-auto flex flex-col items-center bg-cyan-400/5 hover:border-cyan-400/30 transition-colors">
                        <p className="flex items-center gap-2 text-lg mb-2 text-white/90">
                            Created with <Heart className="w-5 h-5 text-purple-500 fill-purple-500" /> by
                            <strong className="text-white gradient-text font-bold">S Venkata Teja Naik</strong>
                        </p>
                        <p className="text-text-secondary text-sm mb-4">
                            Student Developer • Open Source Enthusiast
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/venkattejaa" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cyan-400 flex items-center gap-1 text-sm font-medium transition-colors">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                            <span className="text-white/20">•</span>
                            <a href="https://twitter.com/venkattejaa" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cyan-400 flex items-center gap-1 text-sm font-medium transition-colors">
                                <Twitter className="w-4 h-4" /> Twitter
                            </a>
                            <span className="text-white/20">•</span>
                            <a href="https://linkedin.com/in/venkattejaa" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cyan-400 flex items-center gap-1 text-sm font-medium transition-colors">
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full text-text-muted text-xs">
                        <p>© {new Date().getFullYear()} Laxmana AI. Open source under MIT License.</p>
                        <p className="mt-2 md:mt-0">Designed & Built for the Community.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
