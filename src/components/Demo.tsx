import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const examples = [
    {
        title: "E-commerce API",
        prompt: "Build a REST API for an e-commerce site with products, cart, and Stripe payments",
        stack: "Express + MongoDB",
        time: "3.2s",
        code: `const app = await clawbud.generate({
  prompt: "REST API for e-commerce",
  stack: ["node", "express", "mongodb"],
  features: ["cart", "stripe-payments"]
});`
    },
    {
        title: "Real-time Chat",
        prompt: "Create a chat app with Socket.io, React, and user authentication",
        stack: "React + Socket.io",
        time: "4.1s",
        code: `const chatApp = await clawbud.generate({
  prompt: "Real-time chat with Auth",
  frontend: "react",
  backend: "socket.io",
  auth: "supabase"
});`
    },
    {
        title: "AI Dashboard",
        prompt: "Generate a dashboard to visualize OpenAI API usage with charts",
        stack: "Next.js + Tailwind",
        time: "2.8s",
        code: `const dashboard = await clawbud.generate({
  prompt: "AI Usage Analytics",
  framework: "next.js",
  ui: "tailwind-charts",
  api: ["openai"]
});`
    }
];

export const Demo: React.FC = () => {
    const [activeExample, setActiveExample] = useState(examples[0]);
    const { ref, inView, variants } = useScrollAnimation();

    return (
        <section id="demo" className="section-padding bg-clawbud-bg relative">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Watch <span className="gradient-text">Clawbud</span> in Action
                    </h2>
                    <p className="text-white/60">
                        From prompt to production in seconds. See how the agent handles complex requirements effortlessly.
                    </p>
                </div>

                <motion.div
                    ref={ref as any}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    className="grid lg:grid-cols-5 gap-8"
                >
                    {/* List of examples */}
                    <div className="lg:col-span-2 space-y-4">
                        {examples.map((example) => (
                            <button
                                key={example.title}
                                onClick={() => setActiveExample(example)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeExample.title === example.title
                                        ? 'bg-clawbud-cyan/5 border-clawbud-cyan/30 ring-1 ring-clawbud-cyan/20'
                                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className={`font-bold transition-colors ${activeExample.title === example.title ? 'text-clawbud-cyan' : 'text-white/80'
                                        }`}>
                                        {example.title}
                                    </h3>
                                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{example.time}</div>
                                </div>
                                <p className="text-xs text-white/40 leading-relaxed truncate">{example.prompt}</p>

                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-[10px] text-white/60 font-mono">
                                        <Code size={12} className="text-clawbud-purple" />
                                        {example.stack}
                                    </div>
                                </div>
                            </button>
                        ))}

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-clawbud-cyan/10 to-transparent border border-clawbud-cyan/10 mt-8">
                            <h4 className="text-sm font-bold mb-2">Ready to build your own?</h4>
                            <p className="text-xs text-white/40 mb-4">Start generating today with our free beta.</p>
                            <a href="#download" className="text-clawbud-cyan text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Download Now <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Interactive Preview Container */}
                    <div className="lg:col-span-3">
                        <div className="glass-card h-full flex flex-col overflow-hidden min-h-[400px]">
                            <div className="bg-white/[0.03] border-b border-white/5 p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                    <div className="w-3 h-3 rounded-full bg-white/10" />
                                    <span className="ml-4 text-[10px] text-white/30 font-mono uppercase tracking-widest">{activeExample.title}.ts</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/40 text-xs">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    LIVE GENERATION
                                </div>
                            </div>

                            <div className="flex-1 p-8 font-mono text-sm overflow-hidden relative">
                                <div className="absolute top-8 left-8 right-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                    <pre className="text-white/80 whitespace-pre-wrap">
                                        <code className="text-clawbud-cyan">{activeExample.code}</code>
                                    </pre>
                                </div>

                                {/* Visual result mockup */}
                                <div className="mt-12 opacity-40 group hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2 text-xs text-white/40 mb-4 bg-white/5 w-fit px-3 py-1 rounded-full">
                                        <CheckCircle size={14} className="text-clawbud-cyan" />
                                        Compilation successful
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-20 rounded-xl bg-white/5 animate-pulse" />
                                        <div className="h-20 rounded-xl bg-white/5 animate-pulse delay-75" />
                                        <div className="h-32 col-span-2 rounded-xl bg-white/5 animate-pulse delay-150" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/[0.03] border-t border-white/5 p-4 flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-clawbud-cyan/20 flex items-center justify-center">
                                    <Play size={14} className="text-clawbud-cyan" />
                                </div>
                                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        key={activeExample.title}
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 3 }}
                                        className="h-full bg-clawbud-cyan"
                                    />
                                </div>
                                <div className="text-[10px] font-bold text-white/30 uppercase">AGENT_SYNC</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
