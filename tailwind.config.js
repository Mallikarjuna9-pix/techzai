/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#070b17',
        'dark-card': '#0f172a',
        'violet-glow': '#8b5cf6',
        'cyan-glow': '#22d3ee',
      },
      fontSize: {
        '5xl': ['3rem', '1.2'],
        '4xl': ['2.25rem', '1.2'],
      },
      fontWeight: {
        black: '900',
      },
    },
  },
  plugins: [],
};

export default config;
