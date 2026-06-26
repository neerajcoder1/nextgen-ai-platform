import React from 'react';
import { Icon } from './Icons';

export default function CTA() {
  return (
    <section className="py-24 bg-primary-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#114C5A_1px,transparent_1px),linear-gradient(to_bottom,#114C5A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary-bg/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="p-12 md:p-16 rounded-3xl bg-secondary-bg/45 border border-border-neutral/20 text-center relative overflow-hidden backdrop-blur-md">
          {/* Subtle Glow Borders */}
          <div className="absolute top-0 left-0 w-24 h-1 bg-primary-accent" />
          <div className="absolute bottom-0 right-0 w-24 h-1 bg-secondary-accent" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-bg border border-border-neutral/10 text-xs font-mono font-semibold text-primary-accent mb-8">
            <Icon name="cog-8-tooth" className="w-3.5 h-3.5 animate-spin-slow text-primary-accent" />
            <span>DEPLOY IN UNDER 60 SECONDS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-light-surface font-mono tracking-tight mb-6 leading-tight">
            Ready to Orchestrate <br className="hidden sm:inline" />
            Your Edge Nodes?
          </h2>

          {/* Description */}
          <p className="text-base text-light-surface/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get started with free developer credits. Initialize a starter node in minutes or scale to a dedicated edge mesh. Zero setup fee, zero contract.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a 
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-accent text-primary-bg font-mono font-bold text-base hover:bg-secondary-accent hover:text-light-surface transition-all duration-200 shadow-lg shadow-primary-accent/10"
            >
              Initialize Node Free
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border-neutral/30 hover:border-primary-accent bg-transparent text-light-surface font-mono font-medium text-base hover:bg-primary-bg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Icon name="search" className="w-4.5 h-4.5 text-primary-accent" />
              <span>Read Documentation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
