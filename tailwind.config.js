/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006B54",
        dark: "#004D3D",
        medium: "#39866E",
        sage: "#81B3A0",
        light: "#E8F2ED",
        deep: "#163D32",
        offwhite: "#F7F9F7",
        neutral: "#65736D",
        line: "#DCE6E0",
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        rise: "rise .6s cubic-bezier(.2,.7,.2,1) both",
        fade: "fade .2s ease-out both",
      },
    },
  },
  plugins: [],
};
