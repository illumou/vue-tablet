/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_color_main: 'rgba(var(--background_main))',
        background_color_child: 'rgba(var(--background_child))',
        text_color: 'rgba(var(--text))',
        text2_color: 'rgba(var(--text2))',
        link_color: 'rgba(var(--link))',
      }
    },
  },
  plugins: [],
}

