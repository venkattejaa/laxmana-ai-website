import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    const links = {
        product: ['Features', 'Download', 'Pricing', 'Changelog'],
        resources: ['Docs', 'API Ref', 'Tutorials', 'Blog'],
        community: ['GitHub', 'Discord', 'Twitter', 'X'],
        legal: ['Privacy', 'Terms', 'License', 'Security']
    };

    return (
        <footer className="bg-clawbud-bg border-t border-white/5 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-2">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <img src="./logo.png" alt="Clawbud" className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">Claw<span className="text-clawbud-cyan">bud</span></span>
                        </a>
                        <p className="text-white/40 text-sm max-w-xs mb-8 leading-relaxed">
                            Your autonomous AI development companion.
                            Built for speed, privacy, and full control.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-clawbud-cyan hover:border-clawbud-cyan/30 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-clawbud-cyan hover:border-clawbud-cyan/30 transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-clawbud-cyan hover:border-clawbud-cyan/30 transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-white/30 mb-6">Product</h4>
                        <ul className="space-y-4">
                            {links.product.map(l => <li key={l}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>)}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-white/30 mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {links.resources.map(l => <li key={l}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>)}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-white/30 mb-6">Community</h4>
                        <ul className="space-y-4">
                            {links.community.map(l => <li key={l}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>)}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                            Built with <Heart size={14} className="text-clawbud-cyan fill-clawbud-cyan" /> by <strong className="text-white">S Venkata Teja Naik</strong>
                        </div>
                        <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Student • Developer • AI Enthusiast</p>
                    </div>

                    <div className="text-xs text-white/30">
                        © 2025 Clawbud. Open source under MIT License.
                    </div>
                </div>
            </div>
        </footer>
    );
};
