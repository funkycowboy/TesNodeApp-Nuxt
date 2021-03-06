export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'asl-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/apollo'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Config specific for Axios client
  axios: {
    baseURL: 'http://147.182.190.4/wp-json/wp/v2',
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://aslbackend.local/graphql',
      },
    },
  },
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
