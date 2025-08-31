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
  // Runtime configuration
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    public: {
      //apiBase: process.env.API_BASE || 'https://api.example.com',
      appUrl: process.env.APP_URL || 'http://localhost:3000',
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleRedirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google'
    }
  },
  // Server-side rendering configuration
  ssr: true,
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
  // Nitro configuration for serverless deployment
  nitro: {
    experimental: {
      wasm: true
    }
  }
})
