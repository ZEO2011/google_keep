/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/*.tsx", "./src/**/*.tsx", "./src/**/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				"main-white": "#f8fafc",
				"main-light-yellow": "#FEEFC3",
			},
		},
	},
	plugins: [],
}
