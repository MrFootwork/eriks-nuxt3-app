import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(VueGtag, {
		property: {
			id: 'G-S1HC5SF85R',
		},
	})
	trackRouter(useRouter())
})
