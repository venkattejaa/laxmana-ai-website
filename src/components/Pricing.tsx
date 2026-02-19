import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
    {
        name: "Open Source",
        price: 0,
        period: "forever",
        description: "Self-hosted, full control",
        features: [
            "Complete source code access",
            "Self-hosted deployment",
            "Community Discord support",
            "All core agent features",
            "MIT License"
        ],
        cta: "Clone on GitHub",
        ctaLink: "#",
        popular: false
    },
    {
        name: "Pro",
        price: 12,
        period: "month",
        description: "For professional developers",
        features: [
            "Everything in Open Source",
            "Cloud sync across devices",
            "Priority AI model access",
            "Advanced agent capabilities",
            "Plugin marketplace access",
            "Priority email support"
        ],
        cta: "Start Free Trial",
        ctaLink: "#",
        popular: true
    },
    {
        name: "Team",
        price: 39,
        period: "user/month",
        description: "For development teams",
        features: [
            "Everything in Pro",
            "Up to 10 team members",
            "Shared project workspaces",
            "Team admin dashboard",
            "SSO & SAML integration",
            "Dedicated success manager"
        ],
        cta: "Contact Sales",
        ctaLink: "mailto:team@clawbud.dev",
        popular: false
    }
];

export const Pricing: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);
    const { ref, inView, variants } = useScrollAnimation();

    return (
        <section id="pricing" className="section-padding bg-clawbud-bg-secondary relative">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Simple, Transparent <br /><span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="text-white/60 mb-10">
                        Choose the plan that fits your workflow. From individual builders to large teams.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm ${!isYearly ? 'text-white' : 'text-white/40'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-12 h-6 rounded-full bg-white/10 relative p-1 transition-colors"
                        >
                            <div className={`w-4 h-4 rounded-full bg-clawbud-cyan transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm ${isYearly ? 'text-white' : 'text-white/40'}`}>
                            Yearly <span className="text-clawbud-cyan text-[10px] font-bold ml-1">SAVE 20%</span>
                        </span>
                    </div>
                </div>

                <motion.div
                    ref={ref as any}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            variants={variants}
                            transition={{ delay: idx * 0.1 }}
                            className={`glass-card p-8 flex flex-col relative ${plan.popular ? 'border-clawbud-cyan/40 scale-105 shadow-[0_0_50px_rgba(34,211,238,0.1)] z-10' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-clawbud-cyan to-clawbud-purple text-black text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/40 text-sm">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold">${isYearly ? Math.floor(plan.price * 0.8) : plan.price}</span>
                                    <span className="text-white/40 mb-1">/{plan.period === 'forever' ? 'forever' : 'mo'}</span>
                                </div>
                                {isYearly && plan.price > 0 && (
                                    <div className="text-[10px] text-clawbud-cyan font-bold mt-1 uppercase tracking-wider">
                                        Billed annually
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                                        <Check size={18} className="text-clawbud-cyan shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.ctaLink}
                                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300 ${plan.popular
                                        ? 'btn-primary'
                                        : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                {plan.name === 'Open Source' && <Github size={18} />}
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
