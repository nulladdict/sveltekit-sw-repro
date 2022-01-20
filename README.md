# Rerpo case for a sveltekit issue

See https://github.com/sveltejs/kit/issues/3432 for details

## Steps to reproduce:

- `npm i && npm build`, open the `build/index.html` file, see no registration code in head
- change `router` or `hydrate` to `true`, rebuild and check the output again, the registration is there
