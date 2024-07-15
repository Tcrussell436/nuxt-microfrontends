export default defineAppConfig({
  primevueLayer: {
    preset: 'aura'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    primevueLayer?: {
      /** Project name */
      preset?: 'aura' | 'lara'
    }
  }
}
