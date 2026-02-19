import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Apple, Terminal, CheckCircle2, Download as DownloadIcon, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const platforms = [
    {
        id: 'windows',
        name: 'Windows',
        icon: Monitor,
        version: 'v3.0.0',
        size: '85 MB',
        requirements: ['Windows 10/11', '4GB RAM', '500MB storage'],
        url: '#',
        checksum: 'sha256:a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z'
    },
    {
        id: 'macos',
        name: 'macOS',
        icon: Apple,
        version: 'v3.0.0',
        size: '92 MB',
        requirements: ['macOS 12+', 'Apple Silicon or Intel', '4GB RAM'],
        url: '#',
        checksum: 'sha256:b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z1'
    },
    {
        id: 'linux',
        name: 'Linux',
        icon: Terminal,
        version: 'v3.0.0',
        size: '88 MB',
        requirements: ['Ubuntu 20.04+', '4GB RAM', 'AppImage/DEB'],
        url: '#',
        checksum: 'sha256:c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z12'
    }
];

export const Download: React.FC = () => {
    const [activePlatform, setActivePlatform] = useState(platforms[0]);
    const { ref, inView, variants } = useScrollAnimation();

    return (
        <section id="download" className="section-padding bg-clawbud-bg relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Get <span className="gradient-text">Clawbud</span>
                    </h2>
                    <p className="text-white/60">
                        Available on all major platforms. Native performance, seamless integration.
                    </p>
                </div>

                <motion.div
                    ref={ref as any}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    className="glass-card max-w-4xl mx-auto overflow-hidden"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-white/5 bg-white/[0.02]">
                        {platforms.map((platform) => (
                            <button
                                key={platform.id}
                                onClick={() => setActivePlatform(platform)}
                                className={`flex-1 flex items-center justify-center gap-2 py-6 px-4 transition-all duration-300 border-b-2 ${activePlatform.id === platform.id
                                    ? 'bg-white/[0.04] border-clawbud-cyan text-clawbud-cyan'
                                    : 'border-transparent text-white/40 hover:text-white/60 hover:bg-white/[0.02]'
                                    }`}
                            >
                                <platform.icon size={20} />
                                <span className="font-bold tracking-wide uppercase text-xs">{platform.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-clawbud-cyan/10 text-clawbud-cyan rounded-full text-xs font-bold ring-1 ring-clawbud-cyan/20">
                                    {activePlatform.version}
                                </span>
                                <span className="text-white/40 text-xs font-medium">BETA RELEASE</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Free for Individual Developers</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Experience the fastest AI coding companion for {activePlatform.name}.
                                Native integration with your terminal and file system.
                            </p>

                            <div className="space-y-4 mb-10">
                                {activePlatform.requirements.map((req) => (
                                    <div key={req} className="flex items-center gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={18} className="text-clawbud-cyan" />
                                        {req}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={activePlatform.url} className="btn-primary flex items-center justify-center gap-2 flex-1 group">
                                    <DownloadIcon size={20} className="group-hover:translate-y-1 transition-transform" />
                                    Download for {activePlatform.name}
                                    <span className="text-[10px] opacity-60 ml-1">({activePlatform.size})</span>
                                </a>
                                <a href="https://github.com/venkattejaa/laxmana-ai/releases/latest" className="btn-secondary flex items-center justify-center gap-2">
                                    <Github size={20} />
                                    View Source
                                </a>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center p-6 text-center">
                                <div className="space-y-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <activePlatform.icon size={32} className="text-clawbud-cyan" />
                                    </div>
                                    <div className="text-xs font-mono text-white/40 break-all p-3 bg-white/[0.02] rounded-lg border border-white/5">
                                        {activePlatform.checksum}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">SHA256 CHECKSUM</div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-clawbud-cyan/20 blur-3xl rounded-full" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-clawbud-purple/20 blur-3xl rounded-full" />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-20 text-center">
                    <p className="text-white/40 text-sm mb-6">Join 10,000+ developers building with Clawbud</p>
                    <div className="flex flex-wrap justify-center gap-8 grayscale opacity-40">
                        {/* Placeholder for platform logos / partner logos */}
                        <div className="font-bold text-xl tracking-tighter italic">Cerebras</div>
                        <div className="font-bold text-xl tracking-tighter italic">Vercel</div>
                        <div className="font-bold text-xl tracking-tighter italic">Supabase</div>
                        <div className="font-bold text-xl tracking-tighter italic">Stripe</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
