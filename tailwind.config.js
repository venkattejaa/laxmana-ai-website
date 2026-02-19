/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0f',
                'bg-secondary': '#12121a',
                'bg-tertiary': '#1a1a25',
                'bg-card': 'rgba(255, 255, 255, 0.03)',
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                    glow: 'rgba(34, 211, 238, 0.5)',
                },
                purple: {
                    500: '#a855f7',
                    glow: 'rgba(168, 85, 247, 0.4)',
                },
                oss: {
                    green: '#3fb950',
                    glow: 'rgba(63, 185, 80, 0.4)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f172a 100%)',
                'gradient-cyan-purple': 'linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)',
                'gradient-oss': 'linear-gradient(135deg, #3fb950 0%, #22d3ee 100%)',
            }
        },
    },
    plugins: [],
}
