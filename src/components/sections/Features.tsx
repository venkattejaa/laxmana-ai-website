import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Zap, Cpu, Mic, Shield, Bot, GitBranch, Cloud, Puzzle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: '2000+ tokens/sec with Cerebras inference',
        badge: 'Core',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: Cpu,
        title: 'Multi-Provider AI',
        description: 'Use Cerebras, Groq, OpenAI, or local Ollama',
        badge: 'Core',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        icon: Mic,
        title: 'Voice Control',
        description: 'STT/TTS with advanced noise suppression',
        badge: 'Core',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: Shield,
        title: 'Privacy First',
        description: 'Local-first, your code never leaves your machine',
        badge: 'Core',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        icon: Bot,
        title: 'Agent Architecture',
        description: 'Plans, codes, tests, and deploys autonomously',
        badge: 'Core',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: GitBranch,
        title: 'Git Integration',
        description: 'Auto-commit, PR creation, and automated code review',
        badge: 'Core',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        icon: Cloud,
        title: 'One-Click Deploy',
        description: 'Deploy instantly to Vercel, Railway, AWS, or Docker',
        badge: 'Core',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: Puzzle,
        title: 'Plugin System',
        description: 'Extend capabilities with community-built plugins',
        badge: 'Beta',
        color: 'text-oss-green',
        bg: 'bg-oss-green/10'
    }
];

export const Features: React.FC = () => {
    const { ref, inView } = useScrollAnimation(0.1);

    return (
        <section id="features" className="section-padding relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

            <Container>
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Everything you need to <br className="hidden md:block" />
                        <span className="gradient-text">build next-gen apps</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Laxmana AI combines frontier models, local-first architecture, and an advanced agentic system to write production code at unprecedented speeds.
                    </p>
                </div>

                <div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={feature.title}
                                className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.bg} ${feature.color} border border-current/20`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${feature.badge === 'Beta' ? 'bg-oss-green/20 text-oss-green border border-oss-green/30' : 'bg-white/5 text-text-secondary border border-white/10'}`}>
                                        {feature.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white/90">{feature.title}</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </section >
    );
};
