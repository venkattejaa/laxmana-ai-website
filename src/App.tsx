import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { OpenSourceBanner } from './components/sections/OpenSourceBanner';
import { Features } from './components/sections/Features';
import { Demo } from './components/sections/Demo';
import { Architecture } from './components/sections/Architecture';
import { GitHubStatsDisplay } from './components/ui/GitHubStats';
import { Contributors } from './components/sections/Contributors';
import { Roadmap } from './components/sections/Roadmap';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />

      <main>
        <Hero />
        <OpenSourceBanner />
        <Features />
        <Demo />
        <Architecture />

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-bg-secondary/30 pointer-events-none" />
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Community <span className="gradient-text">Traction</span></h2>
              <p className="text-text-secondary text-lg">Real-time metrics from our GitHub repository.</p>
            </div>
            <GitHubStatsDisplay />
          </div>
        </section>

        <Contributors />
        <Roadmap />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
