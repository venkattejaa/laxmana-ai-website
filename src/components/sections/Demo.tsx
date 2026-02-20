import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mic, Send, Code, MonitorPlay, Zap, Download, Terminal } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const demoFeatures = [
    {
        title: "Build a website",
        description: "Full stack app generated and deployed",
        action: "Create Web App",
        icon: Code
    },
    {
        title: "Find me a job",
        description: "Searches, ranks, applies automatically",
        action: "Start Search",
        icon: Mic
    },
    {
        title: "Create a video",
        description: "Researches, writes, generates, edits",
        action: "Generate Media",
        icon: MonitorPlay
    }
];

export const Demo: React.FC = () => {
    const { ref, inView } = useScrollAnimation(0.2);
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const handleGenerate = () => {
        if (!prompt) return;
        setIsGenerating(true);
        // Simulate generation
        setTimeout(() => {
            setIsGenerating(false);
            setShowPreview(true);
        }, 2000);
    };

    return (
        <section id="demo" className="section-padding relative bg-bg-secondary/50 border-y border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Universal <span className="gradient-text">User Interface</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        A single input: "Do anything". Watch Laxmana AI break your request into executable steps and stream progress in real-time.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {demoFeatures.map((feature, idx) => (
                        <Card key={idx} className="flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center mb-4 text-cyan-400">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-text-secondary mb-6">{feature.description}</p>
                            <Button variant="secondary" className="w-full mt-auto justify-center">
                                {feature.action}
                            </Button>
                        </Card>
                    ))}
                </div>

                <div
                    ref={ref}
                    className={`grid lg:grid-cols-2 gap-8 items-start transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    {/* Input Side */}
                    <Card className="flex flex-col h-full bg-bg-tertiary">
                        <div className="flex items-center gap-2 mb-4 text-text-muted font-mono text-sm border-b border-white/5 pb-4">
                            <Terminal className="w-4 h-4" /> Prompt Input
                        </div>

                        <textarea
                            className="flex-1 bg-transparent resize-none outline-none text-white placeholder-white/20 min-h-[200px]"
                            placeholder='What do you want me to do? (e.g., "Build a full-stack SaaS", "Find me a new apartment", "Analyze this dataset")'
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />

                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                            <Button variant="secondary" className="px-4 text-text-muted hover:text-cyan-400 border-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/20">
                                <Mic className="w-5 h-5" />
                            </Button>
                            <Button onClick={handleGenerate} className="flex-1 justify-center gap-2" disabled={isGenerating || !prompt}>
                                {isGenerating ? (
                                    <span className="animate-pulse">Generating...</span>
                                ) : (
                                    <>Execute Request <Send className="w-4 h-4 ml-1" /></>
                                )}
                            </Button>
                        </div>
                    </Card>

                    {/* Output Side */}
                    <Card className="flex flex-col h-full min-h-[400px] bg-[#0d1117] border-white/10 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex gap-2">
                                <button className="text-xs text-text-muted hover:text-white px-2 py-1 rounded bg-white/5 flex items-center gap-1 transition-colors">
                                    <MonitorPlay className="w-3 h-3" /> Preview
                                </button>
                                <button className="text-xs text-text-muted hover:text-white px-2 py-1 rounded bg-white/5 flex items-center gap-1 transition-colors">
                                    <Code className="w-3 h-3" /> Code
                                </button>
                            </div>
                        </div>

                        {isGenerating ? (
                            <div className="flex-1 flex flex-col items-center justify-center p-8">
                                <div className="w-16 h-16 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin mb-6" />
                                <p className="text-cyan-400 font-mono animate-pulse">Laxmana AI is thinking...</p>
                            </div>
                        ) : showPreview ? (
                            <div className="flex-1 rounded-lg border border-white/10 bg-white flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Mock generated app */}
                                <div className="absolute top-0 w-full h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4">
                                    <div className="w-full h-6 bg-white rounded shadow-sm flex items-center px-3 text-xs text-gray-500">
                                        https://laxmana-generated-app.local
                                    </div>
                                </div>
                                <div className="text-center p-6 text-gray-800 mt-12">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{prompt || "Your Generated App"}</h1>
                                    <p className="text-gray-600 mb-8 max-w-sm mx-auto">This is a live preview of the application generated by Laxmana AI based on your prompt.</p>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors">Interactive Element</button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-text-muted/50 border-2 border-dashed border-white/5 rounded-xl">
                                <MonitorPlay className="w-16 h-16 mb-4 opacity-50" />
                                <p className="max-w-xs">Enter a prompt and click execute to watch the universal planner execute steps in real-time.</p>
                            </div>
                        )}

                        {showPreview && (
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <Button variant="secondary" className="px-3 py-1.5 text-xs bg-[#161b22] border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-md">
                                    <Download className="w-3 h-3 mr-1" /> Export
                                </Button>
                                <Button className="px-3 py-1.5 text-xs bg-cyan-500 text-black hover:bg-cyan-400 font-semibold shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                                    <Zap className="w-3 h-3 mr-1" /> Deploy
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </Container>
        </section>
    );
};
