import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F6F2",
        ink: "#060B14",
        graphite: "#0C1322",
        muted: "#5B6472",
        faint: "#9AA1AD",
        line: "#E5E2D9",
        linedark: "#1C2536",
        accent: {
          DEFAULT: "#2B6BFF",
          deep: "#1A4FD6",
          soft: "#E4EBFF",
        },
        positive: "#1FA96B",
        negative: "#D64545",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        card: "0.75rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6,11,20,0.05), 0 16px 40px -24px rgba(6,11,20,0.25)",
        pop: "0 32px 80px -24px rgba(6,11,20,0.45)",
      },
      maxWidth: {
        shell: "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
