require("dotenv").config();
export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'buy-here',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap" },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap" },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    loading: {
        color: 'yellow',
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/vue-swal', {
        src: '~/plugins/flutterwave',
        ssr: false
    }, ],

    axios: {
        baseURL: process.env.STRAPI_URL
    },

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/strapi',
        '@nuxtjs/apollo',
        '@nuxtjs/dotenv',
        '@nuxtjs/axios',
    ],

    strapi: {
        entities: ['categories', 'products', 'subscribers', ],
        url: process.env.STRAPI_URL || 'http://localhost:1337',
    },

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.GRAPHQL_URL || 'http://localHost:1337/graphql',
            }
        }
    },

    pwa: {
        meta: {
            title: 'BUY HERE',
            author: 'Matthew',
        },
        manifest: {
            name: 'BUY-HERE',
            short_name: 'BUY-HERE',
            lang: 'en',
            display: 'standalone',
        },
        workbox: {
            runtimeCaching: [{
                    urlPattern: 'https://fonts.googleapis.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                },
                {
                    urlPattern: 'https://fonts.gstatic.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                },
                {
                    urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
                }
            ]
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {

    }
}