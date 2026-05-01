// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  nitro: {
    routeRules: {
      // Same-origin proxy to avoid CORS in the browser.
      '/api/**': {
        proxy: 'http://127.0.0.1:8000/api/**',
      },
    },
  },
  runtimeConfig: {
    public: {
      // Django API base, e.g. http://127.0.0.1:8000/api
      // Prefer same-origin by default (proxied by Nitro); can be overridden via env.
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? '/api',
      // Django site base, used for media URLs like /media/...
      djangoBase: process.env.NUXT_PUBLIC_DJANGO_BASE ?? 'http://127.0.0.1:8000',
    },
  },
});
