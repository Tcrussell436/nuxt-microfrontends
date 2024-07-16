// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: [
    '@tcrussell436/primevue-layer',
    '@tcrussell436/example-api-layer'
  ]
})
