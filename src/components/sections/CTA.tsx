import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Github, BookOpen, Heart } from 'lucide-react';

export const CTA: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary pointer-events-none" />

            {/* Background Mesh */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] hero-mesh opacity-50 pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl glass-card border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Join the <span className="gradient-text">Open Source Revolution</span>
                    </h2>

                    <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                        Star the repo, try the app, or contribute code. Laxmana AI relies on the community to build the ultimate open-source development agent. Every contribution matters.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            variant="primary"
                            href="https://github.com/venkattejaa/laxmana-ai"
                            external
                            icon={Github}
                        >
                            Star on GitHub
                        </Button>

                        <Button
                            variant="secondary"
                            href="https://docs.laxmana-ai.dev"
                            external
                            icon={BookOpen}
                        >
                            Read Docs
                        </Button>

                        <Button
                            variant="oss"
                            href="https://github.com/sponsors/venkattejaa"
                            external
                            icon={Heart}
                        >
                            Sponsor Project
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
