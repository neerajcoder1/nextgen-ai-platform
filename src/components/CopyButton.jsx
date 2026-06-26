import React, { useState } from 'react';

export default function CopyButton({ text, label = 'Copy content' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback to execCommand
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed'; // Avoid scrolling to bottom
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-2 py-1 rounded border font-mono text-[10px] font-bold tracking-wider uppercase transition-all duration-180 focus:outline-none focus:ring-1 focus:ring-primary-accent shrink-0 ${
        copied
          ? 'bg-primary-accent text-primary-bg border-primary-accent'
          : 'bg-secondary-bg/80 text-light-surface/70 border-border-neutral/20 hover:border-primary-accent hover:text-primary-accent'
      }`}
      aria-label={copied ? 'Content copied' : label}
      type="button"
    >
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  );
}
