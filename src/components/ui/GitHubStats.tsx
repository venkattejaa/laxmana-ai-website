import React, { useEffect, useState } from 'react';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { useCountUp } from '../../hooks/useCountUp';
import { Card } from './Card';
import { Star, GitFork, Users, Disc } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface StatBoxProps {
    label: string;
    value: number;
    icon: React.ReactNode;
    delay: number;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value, icon, delay }) => {
    const { ref, inView } = useScrollAnimation(0.2);
    const { count, start } = useCountUp(value, 2000, false);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (inView && !started) {
            setTimeout(() => {
                start();
                setStarted(true);
            }, delay);
        }
    }, [inView, started, start, delay]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-4">
            <div className="text-cyan-400 mb-2">{icon}</div>
            <div className="text-3xl font-bold font-mono heading-glow mb-1">
                {count.toLocaleString()}{value > 900 ? '+' : ''}
            </div>
            <div className="text-text-muted text-sm uppercase tracking-wider">{label}</div>
        </div>
    );
};

export const GitHubStatsDisplay: React.FC = () => {
    const stats = useGitHubStats('venkattejaa/laxmana-ai');

    // Fallback stats while loading or if it fails
    const displayStats = stats || {
        stars: 1000,
        forks: 150,
        openIssues: 12,
        contributors: 50,
    };

    return (
        <Card className="w-full max-w-4xl mx-auto bg-bg-tertiary">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5">
                <StatBox
                    label="Stars"
                    value={displayStats.stars}
                    icon={<Star className="w-6 h-6" />}
                    delay={0}
                />
                <StatBox
                    label="Forks"
                    value={displayStats.forks}
                    icon={<GitFork className="w-6 h-6" />}
                    delay={100}
                />
                <StatBox
                    label="Contributors"
                    value={displayStats.contributors}
                    icon={<Users className="w-6 h-6" />}
                    delay={200}
                />
                <StatBox
                    label="Open Issues"
                    value={displayStats.openIssues}
                    icon={<Disc className="w-6 h-6" />}
                    delay={300}
                />
            </div>
        </Card>
    );
};
