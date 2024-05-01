import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-gradient-0.2": "rgba(255, 255, 255, 0.2)",
        "gray-gradient-0.1": "rgba(255, 255, 255, 0.10)",
        "gray-gradient-0.3": "rgba(255, 255, 255, 0.30)",
        "black-gradient-0.3": "rgba(0, 0, 0, 0.20)",
        "black-gradient-0.5": "rgba(0, 0, 0, 0.05)",
        "gray-light": "#DCDCDC",
        "red-brand": "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
