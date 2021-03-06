import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: true,
  ssr: false,
  // target: 'server',
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - whitelabel',
    title: 'whitelabel',
    htmlAttrs: {
      lang: 'pt_br',
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
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      { path: '~/components/apiconsumed', extensions: ['vue'] },
      { path: '~/components/help', extensions: ['vue'] },
      { path: '~/components/login', extensions: ['vue'] },
      { path: '~/components/register', extensions: ['vue'] },
      { path: '~/components/headeres', extensions: ['vue'] },
      { path: '~/components/footeres', extensions: ['vue'] },
      { path: '~/components/home', extensions: ['vue'] },
      { path: '~/components/usuario', extensions: ['vue'] },
      { path: '~/components/thema', extensions: ['vue'] },
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://vite.nuxtjs.org/
    'nuxt-vite',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  axios :{
    baseURL: process.env.VUE_APP_API_URL

  },
  vite :{

  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
