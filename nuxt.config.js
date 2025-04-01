import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // Set the base URL for GitHub Pages
  app: {
    baseURL: '/cascadesite.github.io/',
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt-themes/docus'
  ],
  content: {
    // Content module configuration
    navigation: {
      fields: ['slug', 'title']
    },
    highlight: {
      theme: 'github-dark'
    }
  },
  tailwindcss: {
    // TailwindCSS module configuration
    jit: true,
    exposeConfig: false,
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#1DA1F2',
            secondary: '#14171A',
            accent: '#657786'
          }
        }
      }
    }
  },
  docus: {
    // Docus theme configuration
    title: 'Cascade',
    description: 'A Game Website Made With Nuxt And Docus',
    image: '',
    socialLinks: {
      github: 'https://github.com/cascadesite/cascadesite.github.io'
    },
    header: {
      logo: true,
      links: [
        { name: 'Home', href: '/' },
        { name: 'Games', href: '/games' }
      ]
    },
    footer: {
      text: '© 2025 Cascade. All rights reserved.'
    }
  }
})