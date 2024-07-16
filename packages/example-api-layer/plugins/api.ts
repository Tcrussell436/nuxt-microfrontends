
export default defineNuxtPlugin((nuxtApp) => {

  // Configure ofetch instance
  const api = $fetch.create({
    baseURL: 'http://localhost:3000',
    //onRequest({ request, options, error }) {
      // configure request, set Authorization header, etc.
    //},
    async onResponseError({ response }) {
      // example unauthorized response
      if (response.status === 401) {
        // Plugin may execute on server so use the nuxtApp's runWithContext function to execute our async behavior
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }

      // Handle other errors. You may have a modal composable you could call open on here.
    }
  })

  return {
    provide: {
      api
    }
  }
})
