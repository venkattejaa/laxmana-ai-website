import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
    {
        question: "Is Clawbud really free?",
        answer: "The core agent is open source and free forever. You bring your own API keys (Cerebras, Groq, local Ollama) and only pay the provider. We also offer a Pro version for cloud sync and advanced agent features."
    },
    {
        question: "Do I need to know how to code?",
        answer: "Clawbud is designed for developers, but it helps beginners build faster. You can describe what you want in plain English, and it will generate the structure and code for you."
    },
    {
        question: "Is my code secure?",
        answer: "Absolutely. With local hosting, your code NEVER leaves your machine. We don't have access to your workspace or API keys. Your privacy is our top priority."
    },
    {
        question: "What makes it different from Bolt.new?",
        answer: "Clawbud is significantly faster (2000+ tok/sec), supports local hosting for 100% privacy, and lets you use any provider you want with no vendor markup."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { ref, inView, variants } = useScrollAnimation();

    return (
        <section className="section-padding bg-clawbud-bg-secondary relative">
            <div className="container max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="gradient-text">Questions</span></h2>
                    <p className="text-white/60">Everything you need to know about your new AI companion.</p>
                </div>

                <motion.div
                    ref={ref as any}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    className="space-y-4"
                >
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass-card overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 text-left flex items-center justify-between group"
                            >
                                <span className="font-bold text-lg text-white/90 group-hover:text-clawbud-cyan transition-colors">{faq.question}</span>
                                <ChevronDown
                                    className={`text-white/40 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-clawbud-cyan' : ''}`}
                                    size={20}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-2 mx-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
