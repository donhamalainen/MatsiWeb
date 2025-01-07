import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        ChillaxMedium: ["var(--chillax-medium)", "Arial", "sans-serif"],
        ChillaxSemibold: ["var(--chillax-semibold)", "Arial", "sans-serif"],
        GeneralSansRegular: [
          "var(--generalsans-regular)",
          "Arial",
          "sans-serif",
        ],
        GeneralSansMedium: ["var(--generalsans-medium)", "Arial", "sans-serif"],
        GeneralSansSemibold: [
          "var(--generalsans-semibold)",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
