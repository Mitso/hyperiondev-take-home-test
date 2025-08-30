/*
 https://nuxt.com/docs/api/configuration/nuxt-config
*/
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Global Style
  css: ['~/assets/css/main.scss'],

  // Modules
  modules: [
    '@nuxtjs/tailwindcss', // Nuxt Tailwind CSS Module https://tailwindcss.nuxtjs.org/tailwindcss/configuration
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Source Code Pro': [400, 500, 600],
      'Montserrat': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'HyperionDev Take-Home Test',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'A take-home test for HyperionDev' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
      ]
    }
  },
})
