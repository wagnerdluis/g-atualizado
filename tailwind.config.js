/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#DAA520',
        gray: '#E5E5EA',
        navy: '#010133'
      },
      animation: {
        'scroll': 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'text-[#DAA520]',
    'text-[#E5E5EA]',
    'text-[#010133]',
    'bg-[#DAA520]',
    'bg-[#E5E5EA]',
    'bg-[#010133]',
    'bg-[#DAA520]/10',
    'bg-[#E5E5EA]/10',
    'bg-[#010133]/10',
    'bg-[#DAA520]/20',
    'bg-[#E5E5EA]/20',
    'bg-[#010133]/20',
    'bg-[#DAA520]/30',
    'bg-[#E5E5EA]/30',
    'bg-[#010133]/30',
    'border-[#DAA520]',
    'border-[#E5E5EA]',
    'border-[#010133]',
    'border-[#DAA520]/10',
    'border-[#E5E5EA]/10',
    'border-[#010133]/10',
    'border-[#DAA520]/20',
    'border-[#E5E5EA]/20',
    'border-[#010133]/20',
    'border-[#DAA520]/30',
    'border-[#E5E5EA]/30',
    'border-[#010133]/30',
    'hover:bg-[#B8941C]',
    'hover:bg-[#000829]'
  ]
};