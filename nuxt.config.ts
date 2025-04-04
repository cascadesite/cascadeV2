export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
  app: {
    baseURL: '/cascadeV2'
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap' }
    ]
  }
})