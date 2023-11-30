const path = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		path.join(__dirname, './index.html'),
		path.join(__dirname, './src/**/*.{vue,js,ts,jsx,tsx}')
	],
	theme: {
		extend: {}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
};
