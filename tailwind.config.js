const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.fuchsia,
        success: colors.emerald,
        dark: colors.slate[900],
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
