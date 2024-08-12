import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: 'var(--primary-black)',
          grey: 'var(--primary-grey)',
          yellow: 'var(--primary-yellow)',
          purple: 'var(--primary-purple)',
        },
        secondary: {
          pink: 'var(--secondary-pink)',
          orange: 'var(--secondary-orange)',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
