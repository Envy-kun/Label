/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      colors: {
        base: {
          950: '#070A10',
          900: '#0B0F17',
          800: '#101623',
          700: '#161D2E',
          600: '#1E2740',
        },
        line: {
          DEFAULT: '#1F2B40',
          soft: '#182236',
        },
        ink: {
          100: '#EAF0F8',
          300: '#B7C3D9',
          500: '#7C8CA8',
          700: '#4C5A76',
        },
        signal: {
          cyan: '#3FD9E8',
          blue: '#4C7CF0',
          green: '#33C97F',
          amber: '#E8AA3F',
          red: '#E85C5C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,217,232,0.15), 0 0 24px rgba(63,217,232,0.08)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(63,217,232,0.35)' },
          '70%': { boxShadow: '0 0 0 12px rgba(63,217,232,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(63,217,232,0)' },
        },
      },
      animation: {
        scanline: 'scanline 2.2s linear infinite',
        pulseRing: 'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
