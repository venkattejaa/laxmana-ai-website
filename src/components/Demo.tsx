import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, CheckCircle, RefreshCw, Globe, Layout, Send, Mic, Download, ExternalLink, ShoppingCart, BarChart3, Users, CreditCard, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Type-safe workaround for Framer Motion 10 + React 19 conflict
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionH3 = motion.h3 as any;
const MotionButton = motion.button as any;

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const Demo: React.FC = () => {
    const [prompt, setPrompt] = useState('full stack SaaS app');
    const [isExecuting, setIsExecuting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [view, setView] = useState<'preview' | 'code'>('preview');
    const [showResult, setShowResult] = useState(true);
    const { ref, inView } = useScrollAnimation();

    const handleExecute = () => {
        if (isExecuting) return;
        setIsExecuting(true);
        setProgress(0);
        setShowResult(false);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsExecuting(false);
                    setShowResult(true);
                    return 100;
                }
                return prev + Math.random() * 20;
            });
        }, 100);
    };

    const getTemplate = () => {
        const p = prompt.toLowerCase();
        if (p.includes('saas') || p.includes('dashboard') || p.includes('admin')) return 'saas';
        if (p.includes('ecommerce') || p.includes('store') || p.includes('shop')) return 'ecommerce';
        if (p.includes('landing') || p.includes('marketing') || p.includes('portfolio')) return 'landing';
        return 'default';
    };

    const renderPreviewContent = () => {
        const template = getTemplate();

        if (template === 'saas') {
            return (
                <div className="h-full bg-slate-50 flex flex-col font-sans p-0 overflow-hidden text-left">
                    <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs uppercase">LX</div>
                            <span className="font-bold text-slate-800 text-sm">LaxmOS Dashboard</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex overflow-hidden">
                        <div className="w-48 bg-white border-r border-slate-200 p-4 space-y-2 hidden md:block">
                            {[
                                { icon: <BarChart3 size={14} />, label: 'Overview' },
                                { icon: <Users size={14} />, label: 'Customers' },
                                { icon: <CreditCard size={14} />, label: 'Payments' },
                                { icon: <RefreshCw size={14} />, label: 'Settings' }
                            ].map((item, i) => (
                                <div key={i} className={`h-10 rounded-xl ${i === 0 ? 'bg-blue-50 text-blue-600' : 'bg-transparent text-slate-400'} flex items-center px-4 gap-3 cursor-pointer hover:bg-slate-50 transition-colors`}>
                                    {item.icon}
                                    <span className="text-[11px] font-bold">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 p-8 space-y-8 overflow-auto">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">{prompt}</h2>
                                    <p className="text-slate-400 text-xs font-medium">Welcome back, Laxmana Architect.</p>
                                </div>
                                <button className="px-5 py-2.5 bg-blue-600 text-white text-[11px] font-bold rounded-xl uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">Generate Report</button>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { label: 'Total Revenue', value: '$124,592', color: 'text-emerald-600', trend: '+14%' },
                                    { label: 'Active Users', value: '1,284', color: 'text-blue-600', trend: '+5%' },
                                    { label: 'Retention Rate', value: '98.2%', color: 'text-purple-600', trend: '+0.4%' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                                            <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">{stat.trend}</span>
                                        </div>
                                        <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm grow">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="h-5 w-40 bg-slate-100 rounded-full" />
                                    <div className="flex gap-2">
                                        <div className="w-8 h-2 bg-slate-100 rounded-full" />
                                        <div className="w-12 h-2 bg-blue-100 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex gap-6 items-center border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                                                <Layout size={20} />
                                            </div>
                                            <div className="grow space-y-3">
                                                <div className="h-3 bg-slate-100 rounded-full w-2/3" />
                                                <div className="h-2 bg-slate-50 rounded-full w-1/3" />
                                            </div>
                                            <ChevronRight size={16} className="text-slate-200" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (template === 'ecommerce') {
            return (
                <div className="h-full bg-white flex flex-col font-sans p-0 overflow-hidden text-left">
                    <div className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-10 shrink-0 relative z-10">
                        <span className="font-black text-2xl italic text-slate-900 leading-none tracking-tighter uppercase">LaxmStore</span>
                        <div className="flex items-center gap-8 text-[12px] font-black text-slate-400 tracking-widest uppercase">
                            <span className="text-slate-900 border-b-4 border-slate-900 pb-1">Shop</span>
                            <span className="hover:text-slate-900 cursor-pointer transition-colors">Men</span>
                            <span className="hover:text-slate-900 cursor-pointer transition-colors">Women</span>
                            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white ml-4 shadow-xl shadow-slate-900/10 cursor-pointer hover:scale-110 transition-transform">
                                <ShoppingCart size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-10 overflow-auto space-y-12">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">{prompt}</h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">Curated selection of premium essentials, generated by Laxmana AI.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-[3/4] bg-slate-50 rounded-[32px] border border-slate-100 mb-5 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300 group-hover:scale-110 group-hover:text-slate-900 transition-all shadow-sm">
                                            <Layout size={24} />
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6 translate-y-20 group-hover:translate-y-0 transition-transform">
                                            <button className="w-full py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className="space-y-1 px-2">
                                        <div className="text-sm font-black text-slate-900">Essential Piece #{i}</div>
                                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">$ {129 + i * 40}.00</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-slate-900 rounded-[40px] p-16 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <h3 className="text-4xl font-black mb-6 relative z-10 tracking-tight">Stay in the loop</h3>
                            <p className="text-slate-400 mb-10 relative z-10 text-lg">Receive exclusive access to new drops and architectural insights.</p>
                            <div className="flex max-w-md mx-auto gap-3 relative z-10">
                                <input type="text" placeholder="Enter your email" className="grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                                <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (template === 'landing') {
            return (
                <div className="h-full bg-white flex flex-col font-sans p-0 overflow-auto scroll-smooth text-left">
                    <div className="min-h-screen flex flex-col items-center justify-center p-12 text-center relative overflow-hidden shrink-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#f1f5f9_0%,_transparent_70%)] opacity-50" />
                        <motion.span
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 relative z-10 border border-blue-100"
                        >
                            Deployment v1.4.2
                        </motion.span>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-12 relative z-10">
                            {prompt}
                        </h1>
                        <p className="text-slate-500 max-w-2xl text-center text-xl mb-14 leading-relaxed relative z-10 font-medium">
                            Experience the future of digital solutions. Built with precision, performance, and scalability in mind by Laxmana AI.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-5 relative z-10">
                            <button className="px-12 py-6 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-3xl transition-all shadow-2xl shadow-slate-900/30 hover:scale-105 active:scale-95 text-lg">
                                Start Building Now
                            </button>
                            <button className="px-12 py-6 bg-white border border-slate-200 text-slate-900 font-black rounded-3xl transition-all hover:bg-slate-50 text-lg">
                                View Architecture
                            </button>
                        </div>
                    </div>
                    <div className="p-24 grid md:grid-cols-3 gap-16 bg-slate-50 border-t border-slate-100">
                        {[
                            { title: 'AI Optimized', text: 'Leverages DeepSeek R1 for specialized code architecting.' },
                            { title: 'Zero Latency', text: 'Deployed on edge networks with sub-50ms response times.' },
                            { title: 'Scalable by Design', text: 'Horizontal scaling baked into the core infrastructure.' }
                        ].map((feature, i) => (
                            <div key={i} className="space-y-6">
                                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 tracking-tight">{feature.title}</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        // Default / Custom Text
        return (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-white relative overflow-hidden">
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-400/5 blur-[100px] rounded-full" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-400/5 blur-[100px] rounded-full" />

                <MotionH3
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 text-slate-900 tracking-tighter leading-none"
                >
                    {prompt}
                </MotionH3>
                <p className="text-slate-400 max-w-xl mb-16 leading-relaxed text-xl font-medium">
                    This is a live preview of the application generated by Laxmana AI based on your unique vision.
                </p>
                <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-14 py-6 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black rounded-[24px] transition-all shadow-2xl shadow-blue-600/40 text-xl uppercase tracking-widest"
                >
                    Interactive Element
                </MotionButton>

                <div className="absolute bottom-12 flex items-center gap-4 text-[11px] text-slate-300 font-black uppercase tracking-[0.3em]">
                    <span className="w-16 h-px bg-slate-100" />
                    Engine Status: Optimal
                    <span className="w-16 h-px bg-slate-100" />
                </div>
            </div>
        );
    };

    const getMockCode = () => {
        const template = getTemplate();
        if (template === 'saas') {
            return `// Laxmana AI Generated: SaaS Dashboard
import React from 'react';
import { Sidebar, Header, Stats, Chart } from './components';

export const Dashboard = () => {
  return (
    <div className="dashboard-root flex min-h-screen bg-slate-50">
      <Sidebar activeTab="overview" />
      <main className="flex-1 p-8 overflow-y-auto">
        <Header title="${prompt}" />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Stats label="Daily Revenue" value="$42,391" trend="+12%" />
          <Stats label="Active Nodes" value="28" status="stable" />
          <Stats label="Compute Usage" value="64%" trend="-2%" />
        </section>
        <div className="mt-8 bg-white rounded-3xl p-10 shadow-sm border border-slate-200">
          <Chart type="area" data={STREAMS_DATA} />
        </div>
      </main>
    </div>
  );
};`;
        }
        if (template === 'ecommerce') {
            return `// Laxmana AI Generated: E-commerce Store
import React from 'react';
import { Navbar, ProductGrid, Footer } from './ui';

export const Store = () => {
  return (
    <div className="store-container bg-slate-50 font-sans">
      <Navbar logo="LaxmStore" cartCount={2} />
      <header className="hero p-12 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-black tracking-tighter">${prompt}</h1>
        <p className="mt-6 text-slate-500 text-xl">
          Curated premium items for you, architected by Laxmana.
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-10 pb-20">
        <ProductGrid items={PRODUCTS} category="all" />
      </main>
      <Footer />
    </div>
  );
};`;
        }
        if (template === 'landing') {
            return `// Laxmana AI Generated: Marketing Landing Page
import React from 'react';
import { Hero, SplitSection, CTA, Footer } from './marketing';

export const LandingPage = () => {
  return (
    <div className="page-wrapper bg-white">
      <Hero 
        title="${prompt}" 
        subtitle="The future of digital solutions, architected in seconds."
        primaryCTA="Get Started"
      />
      <SplitSection 
        image="/assets/hero-bg.png"
        title="Scale Without Limits"
        description="Built for global performance and zero downtime."
      />
      <CTA title="Ready to transform your business?" />
      <Footer />
    </div>
  );
};`;
        }
        return `// Generated by Laxmana AI
import React from 'react';

export const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-900 p-8 font-sans">
      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
        ${prompt}
      </h1>
      <p className="text-slate-500 max-w-md text-center text-lg mb-10 leading-relaxed">
        This is a live preview of the application generated by Laxmana AI based on your prompt.
      </p>
      <button className="px-8 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-all shadow-md">
        Interactive Element
      </button>
    </div>
  );
};`;
    };

    return (
        <section id="demo" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <MotionH2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Experience the <span className="gradient-text">Power of Choice</span>
                    </MotionH2>
                    <p className="text-white/60 text-lg">
                        Describe what you want to build, and watch Laxmana AI architect, code, and deploy your vision in real-time.
                    </p>
                </div>

                <div
                    ref={ref as any}
                    className="grid lg:grid-cols-12 gap-8 items-start"
                >
                    {/* Controls Side */}
                    <MotionDiv
                        variants={variants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="lg:col-span-12 xl:col-span-5 space-y-6"
                    >
                        <div className="glass-card p-6 min-h-[480px] flex flex-col">
                            <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                                <span className="text-cyan-400">#</span> Prompt Input
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Describe your application..."
                                    className="w-full h-full bg-transparent text-white placeholder:text-white/20 focus:outline-none transition-colors resize-none text-lg leading-relaxed font-sans"
                                />
                            </div>

                            <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
                                <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white/60 transition-all border border-white/10 group">
                                    <Mic size={24} className="group-hover:scale-110 transition-transform" />
                                </button>
                                <button
                                    onClick={handleExecute}
                                    disabled={isExecuting || !prompt.trim()}
                                    className={`flex-1 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${isExecuting
                                            ? 'bg-white/5 text-white/40 cursor-not-allowed'
                                            : 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98]'
                                        }`}
                                >
                                    {isExecuting ? <RefreshCw size={22} className="animate-spin" /> : <>Execute Request <Send size={20} /></>}
                                </button>
                            </div>
                        </div>
                    </MotionDiv>

                    {/* Preview Side */}
                    <MotionDiv
                        variants={variants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <div className="glass-card overflow-hidden flex flex-col h-[520px] shadow-2xl border-white/10 group/browser">
                            {/* Browser-like Header */}
                            <div className="bg-[#12121a] border-b border-white/10 p-4 flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="hidden md:flex items-center gap-2 bg-black/40 px-6 py-2 rounded-lg border border-white/5 text-[11px] font-mono text-white/40 w-[400px]">
                                        <Globe size={14} className="text-white/20" />
                                        https://laxmana-generated-app.local
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl">
                                    <button
                                        onClick={() => setView('preview')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'preview' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'
                                            }`}
                                    >
                                        <Layout size={14} /> Preview
                                    </button>
                                    <button
                                        onClick={() => setView('code')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'code' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'
                                            }`}
                                    >
                                        <Code size={14} /> Code
                                    </button>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 relative bg-white overflow-hidden group/content">
                                <AnimatePresence mode="wait">
                                    {isExecuting ? (
                                        <MotionDiv
                                            key="executing"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center flex-col gap-8 bg-[#0a0a0f]"
                                        >
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-full border-[3px] border-cyan-400/10 animate-spin border-t-cyan-400" />
                                                <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-cyan-400">
                                                    {Math.round(progress)}%
                                                </div>
                                            </div>
                                            <div className="text-center space-y-4">
                                                <div className="font-mono text-cyan-400 text-sm animate-pulse tracking-widest uppercase font-bold">Initializing Engine...</div>
                                                <div className="px-12">
                                                    <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <MotionDiv
                                                            animate={{ width: `${progress}%` }}
                                                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </MotionDiv>
                                    ) : showResult ? (
                                        view === 'preview' ? (
                                            <MotionDiv
                                                key="preview-content"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="h-full relative"
                                            >
                                                {renderPreviewContent()}

                                                {/* Floating Actions like in screenshot */}
                                                <div className="absolute bottom-6 right-6 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                                    <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a25] text-white rounded-lg text-sm font-bold border border-white/5 hover:bg-white/10 transition-all">
                                                        <Download size={14} /> Export
                                                    </button>
                                                    <button className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black rounded-lg text-sm font-black shadow-lg shadow-cyan-400/20 hover:scale-105 transition-all">
                                                        <ExternalLink size={14} /> Deploy
                                                    </button>
                                                </div>
                                            </MotionDiv>
                                        ) : (
                                            <MotionDiv
                                                key="code-content"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="h-full p-8 font-mono text-sm bg-[#0a0a0f] overflow-auto"
                                            >
                                                <pre className="text-white/80 whitespace-pre-wrap">
                                                    <code className="text-cyan-400">{getMockCode()}</code>
                                                </pre>
                                            </MotionDiv>
                                        )
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};
