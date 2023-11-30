import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        "gray-light": "#DCDCDC",
        "red": "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
