import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icons';

// Multidimensional Pricing Configuration Matrix
const PRICING_MATRIX = {
  starter: {
    name: 'Starter Node',
    baseRate: 29, // base rate in USD monthly
    regionalMultipliers: { USD: 1, EUR: 0.92, INR: 82 },
    desc: 'Perfect for small teams initializing their first edge pipelines.',
    features: [
      'Up to 3 active pipelines',
      '1,000 runs per month',
      '14ms edge processing SLA',
      'Community Slack support',
      'Standard telemetry logs'
    ]
  },
  professional: {
    name: 'Professional Cluster',
    baseRate: 79, // base rate in USD monthly
    regionalMultipliers: { USD: 1, EUR: 0.92, INR: 82 },
    desc: 'Best for growing startups deploying production clusters.',
    features: [
      'Unlimited pipelines',
      '50,000 runs per month',
      'Autonomous smart routing',
      'Priority Discord support',
      'Telemetry terminal stream'
    ],
    popular: true
  },
  enterprise: {
    name: 'Dedicated Mesh',
    baseRate: 199, // base rate in USD monthly
    regionalMultipliers: { USD: 1, EUR: 0.92, INR: 82 },
    desc: 'Designed for enterprise grade safety and scale.',
    features: [
      'Dedicated edge clusters',
      'Unlimited runs',
      'Custom SLAs & redundancy',
      'Dedicated architect support',
      'Zero-knowledge secret vaults'
    ]
  }
};

const SYMBOLS = {
  USD: '$',
  EUR: '€',
  INR: '₹'
};

// Global-level state store to coordinate updates without triggering React parent re-renders
let currentCurrency = 'USD';
let currentBilling = 'monthly'; // 'monthly' or 'annual'
const listeners = new Set();

const subscribe = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const notify = () => {
  listeners.forEach((cb) => cb(currentCurrency, currentBilling));
};

// Isolated Dropdown Selector
function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(currentCurrency);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (curr) => {
    currentCurrency = curr;
    setSelected(curr);
    setIsOpen(false);
    notify();
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 rounded-lg bg-secondary-bg border border-border-neutral/15 font-mono text-sm text-light-surface hover:border-primary-accent transition-colors duration-200 flex items-center space-x-2 focus:outline-none"
      >
        <span>Currency: <strong className="text-primary-accent">{selected}</strong></span>
        <Icon name="chevron-down" className="w-4 h-4 text-light-surface/60" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg bg-secondary-bg border border-border-neutral/15 shadow-xl z-20 overflow-hidden animate-scale-up">
          {Object.keys(SYMBOLS).map((curr) => (
            <button
              key={curr}
              onClick={() => handleSelect(curr)}
              className="w-full text-left px-4 py-2 text-sm font-mono text-light-surface hover:bg-primary-bg hover:text-primary-accent transition-colors duration-150"
            >
              {curr} ({SYMBOLS[curr]})
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Isolated Billing Toggle
function BillingToggle() {
  const [billing, setBilling] = useState(currentBilling);

  const handleToggle = (type) => {
    currentBilling = type;
    setBilling(type);
    notify();
  };

  return (
    <div className="inline-flex rounded-lg bg-secondary-bg/50 p-1 border border-border-neutral/10 font-mono text-xs">
      <button
        onClick={() => handleToggle('monthly')}
        className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
          billing === 'monthly'
            ? 'bg-primary-accent text-primary-bg shadow'
            : 'text-light-surface/60 hover:text-light-surface'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleToggle('annual')}
        className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
          billing === 'annual'
            ? 'bg-primary-accent text-primary-bg shadow'
            : 'text-light-surface/60 hover:text-light-surface'
        }`}
      >
        <span>Annual</span>
        <span className="bg-secondary-accent text-light-surface text-[9px] px-1.5 py-0.5 rounded-full leading-none">
          -20%
        </span>
      </button>
    </div>
  );
}

// Pricing Card Component (Re-render isolated)
function PriceCard({ planId }) {
  const plan = PRICING_MATRIX[planId];
  const priceRef = useRef(null);
  const symbolRef = useRef(null);
  const suffixRef = useRef(null);

  const updateDOM = (curr, bill) => {
    const base = plan.baseRate;
    const multiplier = plan.regionalMultipliers[curr];
    const discount = bill === 'annual' ? 0.8 : 1.0;
    const calculatedPrice = Math.round(base * multiplier * discount);

    if (priceRef.current) priceRef.current.textContent = calculatedPrice.toLocaleString();
    if (symbolRef.current) symbolRef.current.textContent = SYMBOLS[curr];
    if (suffixRef.current) {
      suffixRef.current.textContent = bill === 'annual' ? '/mo, billed annually' : '/mo';
    }
  };

  useEffect(() => {
    // Subscribe to state change notifications
    const unsubscribe = subscribe((curr, bill) => {
      updateDOM(curr, bill);
    });

    // Populate initial pricing values on mount
    updateDOM(currentCurrency, currentBilling);

    return unsubscribe;
  }, [planId]);

  const cardContent = (
    <>
      <div>
        <h3 className="text-xl font-bold font-mono text-light-surface mb-2">{plan.name}</h3>
        <p className="text-xs text-light-surface/65 mb-6 leading-relaxed">{plan.desc}</p>

        {/* Dynamic Pricing Text Block */}
        <div className="flex items-baseline space-x-1.5 mb-8 py-4 border-y border-border-neutral/10 font-mono">
          <span ref={symbolRef} className="text-2xl font-semibold text-primary-accent">
            {SYMBOLS[currentCurrency]}
          </span>
          <span ref={priceRef} className="text-5xl font-black text-light-surface tracking-tight">
            --
          </span>
          <span ref={suffixRef} className="text-xs text-light-surface/50 font-normal">
            /mo
          </span>
        </div>

        {/* Features Checklist */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start space-x-3 text-sm text-light-surface/85">
              <span className="mt-0.5 text-primary-accent bg-secondary-bg/60 p-0.5 rounded border border-border-neutral/10 shrink-0">
                <Icon name="chevron-up-solid" className="w-3.5 h-3.5 rotate-90" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-3.5 rounded-xl font-mono text-sm font-bold transition-all duration-200 ${
          plan.popular
            ? 'bg-primary-accent text-primary-bg hover:bg-secondary-accent hover:text-light-surface shadow-lg shadow-primary-accent/15'
            : 'border border-border-neutral/30 text-light-surface hover:bg-secondary-bg hover:border-primary-accent'
        }`}
      >
        Select Blueprint
      </button>
    </>
  );

  if (plan.popular) {
    return (
      <div className="relative pt-6 lg:scale-105 transition-all duration-300 h-full flex flex-col">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-accent text-primary-bg font-mono font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-primary-bg z-10 shadow-md whitespace-nowrap">
          RECOMMENDED
        </span>
        <div className="p-8 rounded-2xl border flex flex-col justify-between relative overflow-hidden bg-secondary-bg/35 border-primary-accent shadow-xl shadow-primary-accent/5 flex-1">
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl border flex flex-col justify-between relative overflow-hidden bg-secondary-bg/15 border-border-neutral/10 hover:border-primary-accent/40 transition-all duration-300 h-full">
      {cardContent}
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary-bg border-t border-secondary-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="text-primary-accent font-mono text-sm font-bold uppercase tracking-wider mb-3">
              // Scalable Plans
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-light-surface font-mono mb-4">
              Flexible Deployment Rates
            </h2>
            <p className="text-light-surface/75 text-base">
              Calculate costs instantly across regional currencies. Toggle between annual billing (20% discount applied) and monthly billing.
            </p>
          </div>

          {/* Pricing Controls - No Parent State Updates */}
          <div className="flex flex-wrap items-center gap-4">
            <CurrencySelector />
            <BillingToggle />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          <PriceCard planId="starter" />
          <PriceCard planId="professional" />
          <PriceCard planId="enterprise" />
        </div>

      </div>
    </section>
  );
}
