// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}'],
  plugins: [],
};
