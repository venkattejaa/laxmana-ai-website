import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Mic, Shield, Bot, Monitor } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "2000+ tokens/sec with Cerebras inference. Ship full-stack apps in seconds.",
        color: "cyan"
    },
    {
        icon: Cpu,
        title: "Multi-Provider",
        description: "Bring your own keys. Support for Cerebras, Groq, OpenAI, and Local Ollama.",
        color: "purple"
    },
    {
        icon: Mic,
        title: "Voice Control",
        description: "Hands-free coding. Describe your vision and watch the agent build it.",
        color: "cyan"
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "Your code stays on your machine. Local AI ensures absolute data privacy.",
        color: "purple"
    },
    {
        icon: Bot,
        title: "Agent Architecture",
        description: "Beyond code generation. The agent plans, tests, and deploys autonomously.",
        color: "cyan"
    },
    {
        icon: Monitor,
        title: "Cross-Platform",
        description: "Optimized native experience for Windows, macOS, and Linux systems.",
        color: "purple"
    }
];

export const Features: React.FC = () => {
    const { ref, inView, variants } = useScrollAnimation();

    return (
        <section id="features" className="section-padding bg-clawbud-bg-secondary relative">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Everything You Need to <br /><span className="gradient-text">Ship Faster</span>
                    </h2>
                    <p className="text-white/60">
                        Clawbud handles the heavy lifting so you can focus on creativity.
                        From prompt to production, we've got you covered.
                    </p>
                </div>

                <motion.div
                    ref={ref as any}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            variants={variants}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 group overflow-hidden relative"
                        >
                            <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${feature.color === 'cyan' ? 'bg-clawbud-cyan/10 text-clawbud-cyan' : 'bg-clawbud-purple/10 text-clawbud-purple'
                                }`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed mb-4">
                                {feature.description}
                            </p>

                            {/* Subtle hover background decoration */}
                            <div className={`absolute -right-4 -bottom-4 w-32 h-32 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full ${feature.color === 'cyan' ? 'bg-clawbud-cyan' : 'bg-clawbud-purple'
                                }`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
