import type { Config } from 'tailwindcss'

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  colors: {
    kohi: {
      main: '#634832',
      light: '#D9D9D9',
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'system-ui'],
        mono: ['Fira Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
