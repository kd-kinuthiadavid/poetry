/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pr-black": "#281E02",
      "pr-orange": "#E5968E",
      "pr-white": "#FFFFFF",
    },
    extend: {
      lineHeight: {
        md: "44px",
      },
    },
  },
  plugins: [],
};
