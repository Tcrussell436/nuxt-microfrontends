// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue"
  ],
  css: [
    join(currentDir, './assets/css/base.scss')
  ],
  primevue: {
    options: {
      unstyled: true
    },
    components:{
      exclude: ["Editor", "Chart"]
    },
    importPT: { as: "Aura", from: "@tcrussell436/primevue-presets/aura"}
  },
  compatibilityDate: "2024-07-13"
})
