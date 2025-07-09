export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'wedding': "url('/public/images/wedding.jpg')",
			  },
			fontFamily: {
				'Cormorant': ['Cormorant', 'sans-serif'],
				'sans': ['Cormorant', 'sans-serif'],
			},
			fontSize: {
                '5xl': '2.75rem',
                '6xl': '3.50rem',
            },
		},
	},
	plugins: [],
}
