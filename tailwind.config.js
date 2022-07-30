/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui')
	],
	darkMode: 'class',
	// daisyUI config (optional)
	daisyui: {
		styled: true,
		themes: ["garden", "dark"],
		base: true,
		utils: true,
		logs: false,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	},
}
