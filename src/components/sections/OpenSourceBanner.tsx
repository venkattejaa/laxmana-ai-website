import React from 'react';
import { Container } from '../layout/Container';
import { Heart, Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const OpenSourceBanner: React.FC = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    return (
        <section className="py-8 bg-oss-green/10 border-y border-oss-green/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-full bg-gradient-to-l from-oss-green/5 to-transparent pointer-events-none" />

            <Container>
                <div
                    ref={ref}
                    className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-oss-green/20 flex items-center justify-center shrink-0 border border-oss-green/30">
                            <Heart className="w-8 h-8 text-oss-green fill-oss-green" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-oss-green to-cyan-400 bg-clip-text text-transparent mb-1">
                                100% Open Source
                            </h3>
                            <p className="text-text-secondary">MIT Licensed • Community Driven • Free Forever</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                        <a
                            href="https://github.com/venkattejaa/laxmana-ai/blob/main/LICENSE"
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium flex items-center gap-2 flex-1 md:flex-none justify-center"
                            target="_blank" rel="noopener noreferrer"
                        >
                            View License <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                            href="https://github.com/venkattejaa/laxmana-ai/blob/main/CONTRIBUTING.md"
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium flex items-center gap-2 flex-1 md:flex-none justify-center"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Contribute <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="https://github.com/sponsors/venkattejaa"
                            className="px-4 py-2 rounded-lg bg-oss-green/20 border border-oss-green/30 hover:bg-oss-green/30 text-oss-green transition-colors text-sm font-medium flex items-center gap-2 flex-1 md:flex-none justify-center"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Sponsor ❤️
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};
