import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
    {
        quote: "Clawbud generated our entire MVP in a weekend. What would have taken months took hours. The voice control is game-changing.",
        author: "Alex Chen",
        role: "Founder, TechStart",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
        quote: "Finally, an AI coding tool that doesn't lock me in. My API keys, my machine, my code. Privacy is actually respected.",
        author: "Priya Sharma",
        role: "Indie Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
        quote: "The speed is mind-blowing. 2000 tokens per second is not a marketing gimmick; it's a productivity revolution.",
        author: "Marcus Johnson",
        role: "Senior Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    }
];

export const Testimonials: React.FC = () => {
    const { ref, inView, variants } = useScrollAnimation();

    return (
        <section className="section-padding bg-clawbud-bg relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Loved by <br /><span className="gradient-text">Developers</span>
                    </h2>
                    <p className="text-white/60">
                        Hear from the builders who are shipping faster with their new AI companion.
                    </p>
                </div>

                <motion.div
                    ref={ref as any}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.author}
                            variants={variants}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-clawbud-cyan text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-lg text-white/80 leading-relaxed mb-10 font-medium italic">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" />
                                <div>
                                    <h4 className="font-bold text-white">{t.author}</h4>
                                    <p className="text-sm text-white/40">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clawbud-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};
