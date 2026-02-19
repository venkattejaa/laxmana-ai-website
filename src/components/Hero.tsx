import React from 'react';
import { motion } from 'framer-motion';
import { Github, Zap, Cpu, Monitor } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

export const Hero: React.FC = () => {
    const { ref: tokRef, count: tokCount } = useCountUp(2000);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 z-0 h-full w-full bg-clawbud-bg">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-clawbud-cyan/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-clawbud-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-clawbud-cyan mb-6">
                        <span className="w-2 h-2 rounded-full bg-clawbud-cyan animate-pulse" />
                        V3.0.0 Now Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                        Your AI <br />
                        <span className="gradient-text">Development</span> <br />
                        Companion
                    </h1>

                    <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                        Build complete applications with voice or text. 2000+ tokens/sec.
                        Your API keys, your machine, your code. Open source and privacy-first.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="#download" className="btn-primary flex items-center gap-2">
                            <Zap size={20} fill="currentColor" />
                            Download Free
                        </a>
                        <a href="https://github.com" target="_blank" className="btn-secondary flex items-center gap-2">
                            <Github size={20} />
                            View on GitHub
                        </a>
                    </div>

                    <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
                        <div ref={tokRef as any}>
                            <div className="text-2xl font-bold">{tokCount}+</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Tokens / Sec</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Open Source</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">3</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">Platforms</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="glass-card p-4 aspect-square max-w-lg mx-auto relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-clawbud-cyan/5 to-clawbud-purple/5" />
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <div className="ml-auto text-[10px] text-white/20 font-mono tracking-widest">CLAWBUD TERMINAL</div>
                            </div>
                            <div className="flex-1 font-mono text-sm space-y-2 text-white/80">
                                <div className="text-clawbud-cyan">$ clawbud create "ecommerce-app"</div>
                                <div className="text-white/40">{'>'} Analyzing prompt...</div>
                                <div className="text-white/40">{'>'} Generating React frontend (Vite)...</div>
                                <div className="text-white/40">{'>'} Crafting Node.js backend...</div>
                                <div className="text-white/40">{'>'} Setting up Stripe integration...</div>
                                <div className="pt-4 animate-pulse">
                                    <span className="px-2 py-0.5 bg-clawbud-cyan/20 text-clawbud-cyan rounded text-xs">BUILDING... 87%</span>
                                </div>
                            </div>
                            <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Cpu className="text-clawbud-purple" size={20} />
                                    <div>
                                        <div className="text-[10px] text-white/40 uppercase">Inference Engine</div>
                                        <div className="text-xs font-bold">CEREBRAS-FAST</div>
                                    </div>
                                </div>
                                <Zap className="text-clawbud-cyan animate-glow-pulse" size={20} />
                            </div>
                        </div>
                    </div>
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 glass-card p-3 flex items-center gap-3 border-clawbud-cyan/20"
                    >
                        <div className="w-8 h-8 rounded-full bg-clawbud-cyan/20 flex items-center justify-center">
                            <Monitor size={16} className="text-clawbud-cyan" />
                        </div>
                        <div className="text-[10px] font-bold">CROSS PLATFORM</div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
