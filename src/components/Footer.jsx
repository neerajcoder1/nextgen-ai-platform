import React from 'react';
import { Icon } from './Icons';
import CopyButton from './CopyButton';

export default function Footer() {
  const footerSections = [
    {
      title: 'Nodes',
      links: [
        { label: 'Edge Nodes', href: '#features' },
        { label: 'Smart Router', href: '#bento' },
        { label: 'Secret Vaults', href: '#bento' },
        { label: 'Telemetry Server', href: '#features' }
      ]
    },
    {
      title: 'Orchestration',
      links: [
        { label: 'Pricing Matrix', href: '#pricing' },
        { label: 'Telemetry Stream', href: '#features' },
        { label: 'API Endpoints', href: '#bento' },
        { label: 'Service Level SLA', href: '#pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Systems', href: '#' },
        { label: 'Systems Status', href: '#' },
        { label: 'Security Audits', href: '#' },
        { label: 'Open Source', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-primary-bg border-t border-secondary-bg/60 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Left Side: Logo & Description */}
        <div className="md:col-span-5 space-y-6 text-left">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="bg-primary-accent text-primary-bg p-2 rounded-lg transition-transform duration-200 group-hover:scale-105">
              <Icon name="cube-16-solid" className="w-6 h-6" />
            </div>
            <span className="font-mono text-xl font-bold tracking-tight text-light-surface">
              KRONOS<span className="text-primary-accent">.AI</span>
            </span>
          </a>
          <p className="text-sm text-light-surface/65 leading-relaxed max-w-sm">
            Autonomous event-driven pipeline execution engine. Designed and engineered for modern distributed development architectures.
          </p>
          <div className="font-mono text-xs text-light-surface/40 flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-accent animate-pulse" />
            <span>All systems operational at edge-08</span>
          </div>
          <div className="pt-2 space-y-3 max-w-sm">
            <div className="flex items-center justify-between bg-secondary-bg/15 p-2.5 rounded-lg border border-border-neutral/10 gap-4 font-mono text-xs text-light-surface/75">
              <span className="truncate">ops@kronos.ai</span>
              <CopyButton text="ops@kronos.ai" label="Copy support email" />
            </div>
            <div className="flex items-center justify-between bg-secondary-bg/15 p-2.5 rounded-lg border border-border-neutral/10 gap-4 font-mono text-xs text-light-surface/75">
              <span className="truncate text-light-surface/60">github.com/neerajcoder1/nextgen-ai-platform</span>
              <CopyButton text="https://github.com/neerajcoder1/nextgen-ai-platform" label="Copy GitHub repository link" />
            </div>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerSections.map((sec) => (
            <div key={sec.title} className="text-left">
              <h4 className="font-mono text-xs font-bold text-light-surface/45 uppercase tracking-wider mb-4">
                {sec.title}
              </h4>
              <ul className="space-y-3">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-light-surface/75 hover:text-primary-accent transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border-neutral/10 flex flex-col md:flex-row items-center justify-between text-xs text-light-surface/40 font-mono gap-4">
        <span>© {new Date().getFullYear()} Kronos Automation. Licensed under MIT.</span>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary-accent transition-colors duration-150">Privacy Policy</a>
          <a href="#" className="hover:text-primary-accent transition-colors duration-150">Terms of Service</a>
          <a href="#" className="hover:text-primary-accent transition-colors duration-150">Security.txt</a>
        </div>
      </div>
    </footer>
  );
}
