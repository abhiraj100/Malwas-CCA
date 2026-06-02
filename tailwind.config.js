/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          50:  '#fafafa',
          100: '#f4f4f5',
          150: '#ececee',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          750: '#323239',
          800: '#27272a',
          850: '#1f1f22',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp   .55s ease-out forwards',
        'fade-in':   'fadeIn   .4s  ease-out forwards',
        'slide-r':   'slideR   .5s  ease-out forwards',
        'shimmer':   'shimmer  2s   linear   infinite',
        'ticker':    'ticker   22s  linear   infinite',
        'pulse-slow':'pulse    3s   ease-in-out infinite',
        'spin-slow': 'spin     10s  linear   infinite',
      },
      keyframes: {
        fadeUp:  { '0%':{opacity:'0',transform:'translateY(28px)'},'100%':{opacity:'1',transform:'translateY(0)'} },
        fadeIn:  { '0%':{opacity:'0'},'100%':{opacity:'1'} },
        slideR:  { '0%':{opacity:'0',transform:'translateX(-28px)'},'100%':{opacity:'1',transform:'translateX(0)'} },
        shimmer: { '0%':{backgroundPosition:'-200% 0'},'100%':{backgroundPosition:'200% 0'} },
        ticker:  { '0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'} },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'grid-sm': "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
      },
    },
  },
  plugins: [],
}
