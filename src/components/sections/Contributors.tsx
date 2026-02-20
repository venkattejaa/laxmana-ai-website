import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Github, Heart, Users, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Contributors: React.FC = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    // Mock contributors list
    const mockContributors = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        avatar: `https://avatars.githubusercontent.com/u/${Math.floor(Math.random() * 10000000)}?v=4`,
    }));

    return (
        <section id="contributors" className="section-padding relative">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Powered by the <span className="gradient-text">Community</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Laxmana AI is built by developers, for developers. Join our growing community of contributors shaping the future of AI development.
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`max-w-4xl mx-auto transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    {/* Creator Spotlight */}
                    <Card className="mb-12 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 border-cyan-400/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">Project Creator</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400/30 relative shrink-0">
                                <img src="https://avatars.githubusercontent.com/u/107062400?v=4" alt="S Venkata Teja Naik" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">S Venkata Teja Naik</h3>
                                <p className="text-cyan-400 font-medium mb-4">Student Developer & Open Source Enthusiast</p>
                                <p className="text-text-secondary mb-6 max-w-lg">
                                    "I built Laxmana AI to make advanced agentic coding accessible to everyone. By keeping it 100% open source, we ensure the community drives the innovation."
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a href="https://github.com/venkattejaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
                                        <Github className="w-5 h-5" /> @venkattejaa
                                    </a>
                                    <a href="https://github.com/sponsors/venkattejaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-oss-green hover:text-green-400 transition-colors">
                                        <Heart className="w-5 h-5" /> Sponsor
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Contributors Grid */}
                    <div className="text-center mb-12">
                        <h4 className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-2">
                            <Users className="w-6 h-6 text-purple-500" /> Top Contributors
                        </h4>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {mockContributors.map((c) => (
                                <a
                                    key={c.id}
                                    href="#"
                                    className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 hover:border-cyan-400 hover:scale-110 transition-all"
                                >
                                    <img src={c.avatar} alt="Contributor" className="w-full h-full object-cover" />
                                </a>
                            ))}
                            <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-text-muted text-sm font-bold bg-white/5">
                                50+
                            </div>
                        </div>

                        <Button variant="secondary" href="https://github.com/venkattejaa/laxmana-ai" external className="mx-auto" icon={ExternalLink}>
                            Become a Contributor
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
