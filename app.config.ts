export default defineAppConfig({
  docus: {
    title: 'Cascade',
    description: 'A Game Site Made With Nuxt And Docus',
    image: '',
    socials: {
      github: 'https://github.com/cascadesite/cascadesite.github.io'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      title: 'Cascade',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Games', href: '1.games/games' }
      ]
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ],
      text: '© 2025 Cascade. All rights reserved.'
    }
  },
  css: [
    '@fontsource/quicksand'
  ],
  style: {
    body: {
      fontFamily: 'Quicksand, sans-serif'
    }
  }
})