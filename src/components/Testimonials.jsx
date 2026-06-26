import React from 'react';
import { Icon } from './Icons';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Kronos has revolutionized our event pipeline throughput. We saw latency drop from 120ms to under 14ms on first deployment. It is basically magic.",
      author: "Sarah Jenkins",
      role: "CTO, Fortis Financial",
      project: "FORTIS_CORE_PIPE"
    },
    {
      quote: "The Bento-to-Accordion transitions on the control panel match the sleek speed of the CLI tools. Integrating the autonomous router was a single line config.",
      author: "Devon Chen",
      role: "Lead Systems Architect, VeloLogistics",
      project: "VELO_ROUTING_SYS"
    },
    {
      quote: "Our data schema changes used to break upstream consumers weekly. With the auto-schema mapping nodes, we haven't had a single pipeline reflow in six months.",
      author: "Elena Rostova",
      role: "VP Infrastructure, NeuralLabs",
      project: "NEURAL_MESH_01"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="text-secondary-accent font-mono text-sm font-bold uppercase tracking-wider mb-3">
              // Developer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-light-surface font-mono mb-4">
              Validated by Core Operators
            </h2>
            <p className="text-light-surface/75 text-base sm:text-lg">
              Hear from leading tech teams who have migrated their critical automation workloads to Kronos.
            </p>
          </div>

          {/* Navigation Controls (uses chevron-left and chevron-right) */}
          <div className="flex items-center space-x-3 shrink-0">
            <button 
              className="p-2.5 rounded-lg bg-secondary-bg border border-border-neutral/15 text-light-surface hover:border-primary-accent hover:text-primary-accent transition-colors duration-180 focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <Icon name="chevron-left" className="w-4 h-4" />
            </button>
            <button 
              className="p-2.5 rounded-lg bg-secondary-bg border border-border-neutral/15 text-light-surface hover:border-primary-accent hover:text-primary-accent transition-colors duration-180 focus:outline-none"
              aria-label="Next Testimonial"
            >
              <Icon name="chevron-right" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.author}
              className="p-8 rounded-2xl bg-secondary-bg/25 border border-border-neutral/15 hover:bg-secondary-bg/35 hover:border-primary-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-primary-accent mb-6">
                  <Icon name="link" className="w-8 h-8 text-primary-accent/80" />
                </div>
                
                {/* Quote Text */}
                <p className="text-sm sm:text-base text-light-surface/85 leading-relaxed italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-border-neutral/10 flex flex-col space-y-1.5 font-mono text-xs">
                <span className="text-light-surface font-bold">{rev.author}</span>
                <span className="text-light-surface/65">{rev.role}</span>
                <span className="text-primary-accent font-semibold tracking-wider uppercase text-[10px] mt-1">
                  Node: {rev.project}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
