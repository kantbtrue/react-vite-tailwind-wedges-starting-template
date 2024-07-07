import { wedgesTW } from '@lemonsqueezy/wedges'
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [wedgesTW()],
}

