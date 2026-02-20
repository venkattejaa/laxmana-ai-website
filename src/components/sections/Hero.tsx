import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Github, Download, Star, ChevronDown, Terminal } from 'lucide-react';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const codeSnippet = `> laxmana do
What would you like me to do?
> Build a full stack website
Planning universal agent strategy ⚡
Breaking request into executable steps...
Executing sub-agents in parallel...
✓ Database schema created
✓ Backend API deployed
✓ Frontend React app generated
✓ Successfully deployed to Vercel

Application is now live!`;

export const Hero: React.FC = () => {
    const stats = useGitHubStats('venkattejaa/laxmana-ai');
    const { ref: headerRef, inView: headerInView } = useScrollAnimation(0.1);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(codeSnippet.slice(0, index));
            index++;
            if (index > codeSnippet.length) {
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-mesh section-padding">
            <Container className="relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div ref={headerRef} className={`transition-all duration-1000 transform ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <a href="https://github.com/venkattejaa/laxmana-ai" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6 hover:bg-cyan-400/20 transition-colors">
                            <Star className="w-4 h-4 fill-cyan-400" />
                            {stats?.stars ? `${stats.stars.toLocaleString()}+ Stars on GitHub` : 'Star on GitHub'}
                        </a>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Universal <br />
                            <span className="gradient-text">Agent System</span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
                            Build an AI agent that can literally do anything you ask. Powered by a 20+ Tool Registry, Universal Planner, and robust Execution Engine.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Button href="#download" icon={Download} className="w-full sm:w-auto justify-center">
                                Download Now
                            </Button>
                            <Button variant="secondary" href="https://github.com/venkattejaa/laxmana-ai" external icon={Github} className="w-full sm:w-auto justify-center">
                                View Source
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-8 items-center pt-6 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-bold font-mono text-cyan-400 mb-1">20+</div>
                                <div className="text-sm text-text-muted uppercase tracking-wider">core tools</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold font-mono text-purple-500 mb-1">∞</div>
                                <div className="text-sm text-text-muted uppercase tracking-wider">capabilities</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold font-mono text-oss-green mb-1">100%</div>
                                <div className="text-sm text-text-muted uppercase tracking-wider">autonomous</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
                        {/* Background glowing orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-400/20 blur-[100px] rounded-full animate-glow-pulse pointer-events-none" />

                        {/* Terminal Window */}
                        <div className="w-full max-w-md bg-bg-secondary rounded-xl border border-white/10 shadow-2xl overflow-hidden relative z-10 animate-float">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <div className="flex-1 text-center text-xs text-text-muted flex items-center justify-center gap-1 font-mono">
                                    <Terminal className="w-3 h-3" /> laxmana-cli
                                </div>
                            </div>
                            {/* Window Content */}
                            <div className="p-6 font-mono text-sm leading-relaxed min-h-[250px] relative">
                                <pre className="text-text-secondary whitespace-pre-wrap">
                                    {typedText}
                                    <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse ml-1 align-middle" />
                                </pre>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
                <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-4 h-4 text-cyan-400" />
            </div>
        </section>
    );
};
