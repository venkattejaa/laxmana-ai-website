import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { CheckCircle2, Clock, CircleDashed } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const roadmapItems = [
    {
        quarter: "Q1 2025",
        status: "completed",
        title: "Foundation & Core Agent",
        icon: CheckCircle2,
        color: "text-oss-green",
        borderColor: "border-oss-green/30",
        items: [
            "Core agent architecture",
            "Multi-provider AI support (OpenAI, Anthropic, Cerebras)",
            "Voice control (STT/TTS)",
            "Cross-platform desktop app"
        ]
    },
    {
        quarter: "Q2 2025",
        status: "in-progress",
        title: "Ecosystem Expansion",
        icon: Clock,
        color: "text-cyan-400",
        borderColor: "border-cyan-400/50",
        items: [
            "Plugin marketplace & SDK",
            "VS Code extension integration",
            "Mobile companion app (React Native)",
            "Advanced visual debugging tools"
        ]
    },
    {
        quarter: "Q3 2025",
        status: "planned",
        title: "Enterprise & Scale",
        icon: CircleDashed,
        color: "text-text-muted",
        borderColor: "border-white/10",
        items: [
            "Team collaboration features",
            "Managed cloud hosting options",
            "Enterprise RBAC & security",
            "AI model fine-tuning interface"
        ]
    }
];

export const Roadmap: React.FC = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    return (
        <section id="roadmap" className="section-padding bg-bg-secondary/50 border-y border-white/5 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />

            <Container>
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Project <span className="gradient-text">Roadmap</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Our vision for the future of Laxmana AI. We are building in public and prioritize community feedback.
                    </p>
                </div>

                <div
                    ref={ref}
                    className="max-w-5xl mx-auto relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {roadmapItems.map((phase, index) => {
                            const Icon = phase.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={phase.quarter}
                                    className={`relative flex flex-col md:flex-row gap-8 items-start transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    {/* Left (Empty for odd, Content for even) */}
                                    <div className={`w-full md:w-1/2 ${!isEven ? 'md:order-2' : ''}`}>
                                        <Card className={`relative z-10 ${isEven ? 'md:mr-12' : 'md:ml-12'} border-2 ${phase.status === 'in-progress' ? phase.borderColor : 'border-white/5'} bg-bg-tertiary`}>

                                            {/* Connector Line to Center */}
                                            <div className={`hidden md:block absolute top-8 w-12 h-px ${phase.borderColor} ${isEven ? '-right-12' : '-left-12'}`} />

                                            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                                <div>
                                                    <h3 className="text-lg text-text-muted font-mono mb-1">{phase.quarter}</h3>
                                                    <h4 className="text-xl font-bold text-white">{phase.title}</h4>
                                                </div>
                                                <div className={`flex flex-col items-center gap-1 ${phase.color}`}>
                                                    <Icon className="w-6 h-6" />
                                                    <span className="text-xs uppercase font-bold tracking-wider">{phase.status}</span>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {phase.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${phase.status === 'completed' ? 'bg-oss-green' : phase.status === 'in-progress' ? 'bg-cyan-400' : 'bg-white/20'}`} />
                                                        <span className={`${phase.status === 'planned' ? 'text-text-muted' : 'text-text-secondary'}`}>
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>
                                    </div>

                                    {/* Center Node */}
                                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-bg-secondary border-4 border-white/10 z-20 items-center justify-center">
                                        {phase.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                                        {phase.status === 'completed' && <div className="w-2 h-2 rounded-full bg-oss-green" />}
                                    </div>

                                    {/* Right side spacer */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'hidden md:block' : 'hidden'}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};
