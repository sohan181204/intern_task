// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',   // all components & pages
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#b8005a',
      },
      boxShadow: {
        'soft-pink': '0 6px 24px #e1cce2',
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
