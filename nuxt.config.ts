// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/grid.stockholm.min.css'
        }
      ]
    },
  },
})
