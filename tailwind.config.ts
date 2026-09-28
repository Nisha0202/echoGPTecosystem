import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-raleway)", "system-ui", "sans-serif"] },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-fg": "var(--accent-fg)",
      },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        pulseDot: { "0%,100%": { opacity: "0.3" }, "50%": { opacity: "1" } },
        drift: { "0%": { transform: "translate(-6%,-4%) scale(1)" }, "100%": { transform: "translate(8%,10%) scale(1.2)" } },
      },
      animation: { pulseDot: "pulseDot 1.2s ease-in-out infinite", drift: "drift 26s ease-in-out infinite alternate" },
    },
  },
  plugins: [],
};
export default config;
