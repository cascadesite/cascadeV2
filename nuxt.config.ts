export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxt/devtools',
  ],
  plugins: [
    '~/plugins/components.js',
  ],
  buildModules: ['@nuxt/content'],
  content: {
    markdown: {
      remarkPlugins: [require('remark-vue-component')],
    },
  },
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