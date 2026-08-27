/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F2E7",
        card: "#FFFDF8",
        ink: "#1C1B18",
        signal: "#E8592C",
        line: "#DFD8C8",
        dash: "#CDC6B5",
        muted: "#A39C8B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};