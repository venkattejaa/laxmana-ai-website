import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Activity, Brain, Shield, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
    {
        icon: Wrench,
        title: 'Tool Registry',
        description: '20+ integrated tools including code genesis, web scraping, data parsing, and deployment.',
        badge: 'Core',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: Brain,
        title: 'Universal Planner',
        description: 'Breaks any request into executable steps, parallelizes independent tasks, and handles complex dependencies.',
        badge: 'Core',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        icon: Activity,
        title: 'Execution Engine',
        description: 'Executes tools with real-time monitoring, streaming progress to UI while maintaining context.',
        badge: 'Core',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: Shield,
        title: 'Safety System',
        description: 'Blocks dangerous actions, confirms high-risk operations, and audit logs everything.',
        badge: 'Core',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
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
                        The ultimate <br className="hidden md:block" />
                        <span className="gradient-text">Core Systems</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Laxmana AI combines frontier models, an expansive tool registry, and an advanced universal planner to act as your ultimate personal engineer.
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
