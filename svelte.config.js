import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// this are the culprits, if both are enabled service worker registration code is not injected
		hydrate: false,
		router: false,
	}
};

export default config;
