import React from 'react';
import { Icon } from './Icons';

export default function SocialProof() {
  const companies = [
    { name: 'Vercel', code: '// VRC_EDGE' },
    { name: 'Stripe', code: '// STR_GATE' },
    { name: 'Supabase', code: '// SPB_DATA' },
    { name: 'Cloudflare', code: '// CF_PROXY' },
    { name: 'Docker', code: '// DK_CONTAIN' },
    { name: 'Prisma', code: '// PRSM_ORM' },
  ];

  return (
    <section className="py-12 border-y border-secondary-bg/60 bg-primary-bg/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-2 shrink-0">
          <Icon name="link-solid" className="w-5 h-5 text-primary-accent" />
          <span className="font-mono text-xs uppercase tracking-wider text-light-surface/40 font-semibold">
            Orchestrating pipelines for
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-6 items-center w-full">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex flex-col items-center lg:items-end justify-center group cursor-pointer"
            >
              <span className="font-mono text-sm font-bold text-light-surface/75 group-hover:text-primary-accent transition-colors duration-150">
                {company.name}
              </span>
              <span className="font-mono text-[10px] text-light-surface/30 group-hover:text-secondary-accent transition-colors duration-150">
                {company.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
