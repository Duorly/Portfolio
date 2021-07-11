export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nebel MASSENGO',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Je suis un développeur Web et Mobile polyvalent avec une bonne connaissance des techniques frontales et algorithmiques, avec plus de 2 ans d’expérience.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'author',
        content: 'Duorli Nebel MASSENGO'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: "/css/styles.css",
        rel: "stylesheet"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "assets/img/favicon.png"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700",
        rel: "stylesheet",
        type: "text/css"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i",
        rel: "stylesheet",
        type: "text/css"
      },
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        rel: "stylesheet",
        type: "text/css"
      }
    ],
    script: [{
      src: "https://use.fontawesome.com/releases/v5.15.3/js/all.js",
      crossorigin: "anonymous"
    }]
  },

  script: [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "/js/scripts.js"
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ {src: '~/plugins/particles.js', mode: 'client'}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    'nuxt-i18n',

    '@nuxtjs/strapi',

    ['wp-nuxt', {
      endpoint: 'https://nebeldev.com/wp-json',
      extensions: true
    }],
  ],

  strapi: {
    url: 'https://strapi-portfoliobackend.herokuapp.com/'
  },

  i18n: {
    locales: [{
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.js'
      },
    ],
    defaultLocale: 'fr',
    langDir: 'langue/',
    strategy: 'prefix_except_default',
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['particles-bg-vue']
  }
}
