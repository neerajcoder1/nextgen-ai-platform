/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#172B36',       // Oceanic Noir
        'secondary-bg': '#114C5A',     // Nocturnal Expedition
        'primary-accent': '#FFC801',   // Forsythia
        'secondary-accent': '#FF9932', // Deep Saffron
        'light-surface': '#F1F6F4',    // Arctic Powder
        'border-neutral': '#D9E8E2',   // Mystic Mint
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        'hover': '180ms', // 150-200ms ease-out
        'layout': '350ms', // 300-400ms ease-in-out
      },
    },
  },
  plugins: [],
}
