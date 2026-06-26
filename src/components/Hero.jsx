import React from 'react';
import { Icon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-primary-bg">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#114C5A_1px,transparent_1px),linear-gradient(to_bottom,#114C5A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Radiant glow under content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-bg/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-secondary-bg/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-secondary-bg border border-border-neutral/20 text-xs font-mono font-semibold text-primary-accent mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-accent"></span>
            </span>
            <span>V2.4 RELEASE: AGENTIC PIPELINES</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-light-surface leading-[1.1] mb-6 font-mono">
            Automate Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">
              At Light Speed
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-light-surface/75 max-w-xl mb-8 leading-relaxed">
            The next-generation enterprise AI automation platform. Seamlessly connect complex multi-dimensional data streams, construct high-performance pipelines, and execute workflows in milliseconds. Built exclusively for developers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-10">
            <a 
              href="#pricing"
              className="px-8 py-4 rounded-xl bg-primary-accent text-primary-bg font-mono font-bold text-base hover:bg-secondary-accent hover:text-light-surface transition-all duration-200 shadow-xl shadow-primary-accent/15 text-center flex items-center justify-center space-x-2 group"
            >
              <span>Initialize Workspace</span>
              <Icon name="chevron-right" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a 
              href="#features"
              className="px-8 py-4 rounded-xl border border-border-neutral/30 hover:border-primary-accent bg-transparent text-light-surface font-mono font-medium text-base hover:bg-secondary-bg/50 transition-all duration-200 text-center flex items-center justify-center space-x-2"
            >
              <Icon name="search" className="w-4 h-4 text-primary-accent" />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Micro stats banner */}
          <div className="grid grid-cols-3 gap-8 py-6 border-t border-secondary-bg w-full">
            <div>
              <div className="text-2xl font-bold font-mono text-light-surface">99.99%</div>
              <div className="text-xs font-mono text-light-surface/50 uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-primary-accent">&lt; 14ms</div>
              <div className="text-xs font-mono text-light-surface/50 uppercase tracking-wider">Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-secondary-accent">240M+</div>
              <div className="text-xs font-mono text-light-surface/50 uppercase tracking-wider">Jobs Run</div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Console Screen */}
        <div className="lg:col-span-5 w-full animate-scale-up">
          <div className="w-full bg-secondary-bg border border-border-neutral/25 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary-bg/70 border-b border-border-neutral/15">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-secondary-accent/40" />
                <div className="w-3 h-3 rounded-full bg-primary-accent/40" />
                <div className="w-3 h-3 rounded-full bg-border-neutral/40" />
              </div>
              <span className="font-mono text-xs text-light-surface/40 select-none">kronos-agent@edge-08</span>
              <Icon name="link" className="w-4 h-4 text-light-surface/35" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-light-surface/90 space-y-4 overflow-x-auto min-h-[300px]">
              <div>
                <span className="text-primary-accent">$</span> <span className="text-light-surface">npx kronos-init --endpoint edge-us-east</span>
              </div>
              <div className="text-light-surface/65">
                ● Connecting to Kronos Edge Orchestrator... <br />
                ✔ Handshake established (AES-256-GCM) <br />
                ✔ Pulled schema: <span className="text-secondary-accent">pipeline_v2.json</span>
              </div>
              <div>
                <span className="text-primary-accent">$</span> <span className="text-light-surface">kronos deploy --cluster-auto</span>
              </div>
              <div className="p-3 bg-primary-bg/50 rounded border border-border-neutral/10 space-y-1">
                <div className="flex justify-between">
                  <span className="text-light-surface/60">Jobs Deploying:</span>
                  <span className="text-primary-accent font-bold">ACTIVE</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-light-surface/40">⚡ Compute Engine:</span>
                  <span className="text-light-surface/80">K-Edge-Node-08</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-light-surface/40">⚙ Throughput:</span>
                  <span className="text-primary-accent font-bold">14,280 ops/sec</span>
                </div>
              </div>
              <div className="text-primary-accent flex items-center space-x-1 animate-pulse">
                <span>❯ System operational. Awaiting stream...</span>
                <span className="w-2 h-4 bg-primary-accent inline-block" />
              </div>
            </div>

            {/* Terminal Footer Info */}
            <div className="bg-primary-bg/40 px-6 py-3.5 border-t border-border-neutral/15 flex items-center justify-between text-xs text-light-surface/50 font-mono">
              <span className="flex items-center space-x-1.5">
                <Icon name="arrow-path" className="w-3.5 h-3.5 animate-spin-slow text-primary-accent" />
                <span>Synchronized (Edge-US-East)</span>
              </span>
              <span>100% Rust-Core</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
