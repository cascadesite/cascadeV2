export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    baseURL: '/'
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap' }
    ]
  }
})