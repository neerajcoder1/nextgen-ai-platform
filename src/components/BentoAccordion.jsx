import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';
import CopyButton from './CopyButton';

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track window resizing to detect mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bentoItems = [
    {
      title: 'Distributed Edge Hubs',
      subtitle: 'PIPELINES AT THE EDGE',
      desc: 'Deploy autonomous nodes at the physical network edge. Minimize round-trip latencies by running heavy computations directly where data is generated.',
      icon: 'cube-16-solid',
      color: 'from-primary-accent/10 to-secondary-accent/5',
      code: 'curl https://api.kronos.ai/v1/edge/deploy -H "Auth: Bearer $KEY"'
    },
    {
      title: 'AI Smart Routing',
      subtitle: 'INTELLIGENT ROUTING',
      desc: 'Let our agentic optimizer decide the best path for your streams. Evaluates network load, tariff variations, and node health dynamically.',
      icon: 'cog-8-tooth',
      color: 'from-secondary-accent/15 to-primary-bg',
      code: 'kronos route --optimize-agentic --dry-run'
    },
    {
      title: 'Secret vaults',
      subtitle: 'AES-256 CONTEXT LOCK',
      desc: 'Secure key vaults with zero-knowledge encryption.',
      icon: 'link-solid',
      color: 'from-primary-bg to-secondary-bg/30',
      code: 'kronos vault lock --zero-trust'
    },
    {
      title: 'Telemetry Terminal',
      subtitle: 'REAL-TIME PROFILER',
      desc: 'Deep inspection tools monitoring memory usage and throughput. Trace logs directly in your dashboard or stream raw logs to your CLI.',
      icon: 'chart-pie',
      color: 'from-secondary-bg/20 to-primary-accent/5',
      code: 'kronos telemetry stream --live -f json'
    }
  ];

  return (
    <section id="bento" className="py-24 bg-secondary-bg/10 border-t border-secondary-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-secondary-accent font-mono text-sm font-bold uppercase tracking-wider mb-3">
            // Smart Platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-surface font-mono mb-4">
            Unified Developer Operations
          </h2>
          <p className="text-light-surface/75 text-base sm:text-lg">
            Hover over elements on desktop to select a focus node, or open panels on mobile. Your selection is automatically preserved.
          </p>
        </div>

        {/* Responsive Layout Transition */}
        {isMobile ? (
          /* Mobile Accordion */
          <div className="space-y-4">
            {bentoItems.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={item.title}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-secondary-bg border-primary-accent shadow-lg shadow-primary-accent/5' 
                      : 'bg-secondary-bg/40 border-border-neutral/10'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${isOpen ? 'bg-primary-accent text-primary-bg' : 'bg-primary-bg text-light-surface/70'}`}>
                        <Icon name={item.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-primary-accent/80 block uppercase tracking-wider">
                          {item.subtitle}
                        </span>
                        <h3 className="font-mono text-base font-bold text-light-surface">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <Icon 
                      name="chevron-down" 
                      className={`w-5 h-5 text-light-surface/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-accent' : ''}`} 
                    />
                  </button>

                  {/* Accordion Content (Smooth Grid Transition) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-border-neutral/10 space-y-4">
                        <p className="text-sm text-light-surface/85 leading-relaxed">
                          {item.desc}
                        </p>
                        
                        {/* Terminal snippet inside mobile accordion */}
                        <div className="p-4 bg-primary-bg rounded-lg border border-border-neutral/15 font-mono text-xs text-light-surface/80">
                          <div className="flex items-center justify-between text-[10px] text-light-surface/40 mb-2 border-b border-border-neutral/10 pb-1.5">
                            <span>CLI Terminal</span>
                            <CopyButton text={item.code} label="Copy terminal snippet" />
                          </div>
                          <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
                            <span className="text-primary-accent shrink-0">$</span>
                            <span className="whitespace-nowrap">{item.code}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop Bento Grid */
          <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
            {bentoItems.map((item, idx) => {
              const isActive = activeIndex === idx;
              
              // Map cards to distinct grid spans
              let gridClass = '';
              if (idx === 0) gridClass = 'col-span-2 row-span-2';
              else if (idx === 1) gridClass = 'col-span-1 row-span-2';
              else if (idx === 2) gridClass = 'col-span-1 row-span-1';
              else if (idx === 3) gridClass = 'col-span-2 row-span-1';

              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ${gridClass} ${
                    isActive 
                      ? 'bg-secondary-bg border-primary-accent shadow-xl shadow-primary-accent/5 -translate-y-1' 
                      : 'bg-secondary-bg/25 border-border-neutral/10 hover:border-primary-accent/40'
                  }`}
                >
                  {/* Subtle Gradient Backglow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 mix-blend-screen pointer-events-none`} />

                  {/* Header info */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-primary-accent font-semibold tracking-wider uppercase">
                        {item.subtitle}
                      </span>
                      <div className={`p-2 rounded-xl border transition-colors duration-200 ${
                        isActive 
                          ? 'bg-primary-accent text-primary-bg border-primary-accent' 
                          : 'bg-primary-bg text-light-surface/65 border-border-neutral/10'
                      }`}>
                        <Icon name={item.icon} className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-mono text-xl font-bold text-light-surface mb-3">
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed transition-colors duration-200 ${
                      isActive ? 'text-light-surface/90' : 'text-light-surface/65'
                    } ${idx === 0 || idx === 1 ? 'max-w-md' : 'max-w-xl'}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* CLI Snippet at the bottom of the card */}
                  <div className="relative z-10 pt-4 border-t border-border-neutral/10 font-mono text-xs flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 overflow-hidden mr-2">
                      <span className="text-light-surface/40 shrink-0">CLI Snippet:</span>
                      <span className="text-light-surface/80 truncate font-semibold">{item.code}</span>
                    </div>
                    <CopyButton text={item.code} label="Copy CLI command" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
