import React from 'react';
import { Icon } from './Icons';

export default function Features() {
  const features = [
    {
      icon: 'cog-8-tooth',
      title: 'Autonomous Execution',
      desc: 'Self-healing workflows that dynamically adapt to schema changes. Kronos monitors your endpoints and updates structures automatically.',
      metric: '0ms Downtime'
    },
    {
      icon: 'arrow-path',
      title: 'Real-Time Syncing',
      desc: 'Instantly sync and stream records across global networks. Leverage multi-threaded architecture with lock-free concurrency queues.',
      metric: '14.2M req/s'
    },
    {
      icon: 'chart-pie',
      title: 'Advanced Analytics',
      desc: 'Visualize pipeline bottlenecks, memory footprint, and query execution times with deep telemetry charts and raw JSON exports.',
      metric: 'Micro-logs'
    }
  ];

  return (
    <section id="features" className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-primary-accent font-mono text-sm font-bold uppercase tracking-wider mb-3">
            // Core Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-surface font-mono mb-4">
            Engineered for Extreme Performance
          </h2>
          <p className="text-light-surface/75 text-base sm:text-lg">
            Say goodbye to clunky enterprise integration suites. Kronos provides light-weight, highly-optimized pipelines built on a developer-first control plane.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={feat.title}
              className="p-8 rounded-2xl bg-secondary-bg/30 border border-border-neutral/15 hover:border-primary-accent/40 hover:bg-secondary-bg/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-secondary-bg border border-border-neutral/10 flex items-center justify-center text-primary-accent mb-6 group-hover:scale-105 transition-transform duration-200">
                  <Icon name={feat.icon} className="w-6 h-6" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-mono text-light-surface mb-3">
                  {feat.title}
                </h3>
                
                {/* Desc */}
                <p className="text-sm text-light-surface/70 leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              {/* Card Footer Metric */}
              <div className="pt-4 border-t border-border-neutral/10 flex items-center justify-between font-mono text-xs">
                <span className="text-light-surface/40 uppercase">Benchmark</span>
                <span className="text-secondary-accent font-semibold">{feat.metric}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
