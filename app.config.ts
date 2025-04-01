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