import React from 'react';
import { Container } from '../layout/Container';
import { Shield, Activity, Brain } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const architectureLayers = [
    {
        layer: "Financial Protection",
        components: ["Approval Required", "Spend Limits", "Balance Checking"],
        color: "cyan",
        icon: Shield,
        delay: 0
    },
    {
        layer: "Communication Guard",
        components: ["Draft Mode", "Rate Limiting", "Recipient Allowlist"],
        color: "purple",
        icon: Activity,
        delay: 100
    },
    {
        layer: "Data Integrity",
        components: ["No Mass Deletion", "Confirmation Prompts", "Backup Verification"],
        color: "cyan",
        icon: Shield,
        delay: 200
    },
    {
        layer: "Audit & Compliance",
        components: ["Immutable Logs", "Action Tracking", "Privacy Filters"],
        color: "purple",
        icon: Brain,
        delay: 300
    }
];

export const Architecture: React.FC = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    return (
        <section id="architecture" className="section-padding relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-bg-secondary to-transparent pointer-events-none" />

            <Container>
                <div className="text-center mb-20 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Safety</span> First
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        A powerful agent requires equally powerful guardrails. Laxmana AI is built from the ground up to keep you in control of sensitive actions.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Vertical joining line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

                    <div
                        ref={ref}
                        className="flex flex-col gap-8 md:gap-12"
                    >
                        {architectureLayers.map((layer, index) => {
                            const Icon = layer.icon;
                            const isEven = index % 2 === 0;
                            const colorClass = layer.color === 'cyan' ? 'text-cyan-400 bg-cyan-400' : 'text-purple-500 bg-purple-500';
                            const borderClass = layer.color === 'cyan' ? 'border-cyan-400/30' : 'border-purple-500/30';
                            const shadowClass = layer.color === 'cyan' ? 'shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'shadow-[0_0_30px_rgba(168,85,247,0.15)]';

                            return (
                                <div
                                    key={layer.layer}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                        }`}
                                    style={{ transitionDelay: `${layer.delay}ms` }}
                                >
                                    {/* Left content or empty spacer */}
                                    <div className={`w-full md:w-1/2 ${!isEven ? 'md:text-right' : 'order-last md:order-first'}`}>
                                        <div className={`p-8 rounded-2xl bg-bg-card backdrop-blur-xl border ${borderClass} ${shadowClass} relative`}>
                                            <div className={`absolute top-1/2 ${!isEven ? '-left-8' : '-right-8'} w-8 h-px bg-white/20 -translate-y-1/2 hidden md:block`} />

                                            <div className={`flex items-center gap-4 mb-6 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass.replace('text-', 'bg-').split(' ')[0]}/20 border ${borderClass}`}>
                                                    <Icon className={`w-6 h-6 ${colorClass.split(' ')[0]}`} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">{layer.layer}</h3>
                                            </div>

                                            <div className={`flex flex-wrap gap-3 ${!isEven ? 'md:justify-end' : ''}`}>
                                                {layer.components.map(comp => (
                                                    <span key={comp} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
                                                        {comp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Node */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-bg-secondary border-4 border-white/5 items-center justify-center shadow-xl z-10">
                                        <div className={`w-8 h-8 rounded-full ${colorClass.split(' ')[1]} animate-pulse opacity-80`} />
                                    </div>

                                    {/* Right content or empty spacer */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left hidden md:block' : 'hidden md:block'}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section >
    );
};
