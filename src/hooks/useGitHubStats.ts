import { useState, useEffect } from 'react';

interface GitHubStats {
    stars: number;
    forks: number;
    openIssues: number;
    contributors: number;
    latestRelease: string;
}

export function useGitHubStats(repo: string): GitHubStats | null {
    const [stats, setStats] = useState<GitHubStats | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [repoRes, contribRes, releaseRes] = await Promise.all([
                    fetch(`https://api.github.com/repos/${repo}`),
                    fetch(`https://api.github.com/repos/${repo}/contributors?per_page=1`),
                    fetch(`https://api.github.com/repos/${repo}/releases/latest`)
                ]);

                const repoData = await repoRes.json();
                const contribData = await contribRes.json();
                const releaseData = releaseRes.ok ? await releaseRes.json() : null;

                setStats({
                    stars: repoData.stargazers_count || 0,
                    forks: repoData.forks_count || 0,
                    openIssues: repoData.open_issues_count || 0,
                    contributors: Array.isArray(contribData) ? contribData.length : 0,
                    latestRelease: releaseData?.tag_name || 'v0.0.0'
                });
            } catch (error) {
                console.error('Failed to fetch GitHub stats:', error);
            }
        };

        fetchStats();
        const interval = setInterval(fetchStats, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [repo]);

    return stats;
}
