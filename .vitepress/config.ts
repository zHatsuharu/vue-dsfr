import { fileURLToPath, URL } from 'url'
import { dirname, resolve } from 'path'

import { defineConfig } from 'vitepress'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'
import { hmrFix } from './plugins/hmrFix.js'

const projectDir = dirname(new URL(import.meta.url).pathname)

const getNormalizedDir = (relativeDir: string) => fileURLToPath(new URL(relativeDir, import.meta.url))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueDsfr",
  description: "Une documentation pour les utilisateurs de VueDsfr",

  cleanUrls: true,
  appearance: { listenToStorageChanges: false }, // handling this in Story.vue itself to avoid flickering

  rewrites: {
    'src/components/:comp/index.md': 'components/:comp.md',
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher...',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            backButtonTitle: 'effacer la recherche',
            displayDetails: 'afficher les détails',
            noResultsText: 'Aucun résultat pour ',
            resetButtonTitle: 'resetButtonTitle',
            footer: {
              selectText: 'aller à ce texte',
              navigateText: 'naviguer dans les résultats',
              closeText: 'fermer'
            }
      }
        },
      }
    },
    outline:{
      level: 2,
      label: 'Sur cette page :',
    },
    logo: '/nouveau-logo-marianne-gouvernement.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Ce document',
        link: '/ce-document',
        items: []
      },
      {
        text: 'Pour commencer',
        link: '/pour-commencer',
        items: []
      },
      {
        text: 'Recettes client',
        link: '/client/',
        items: [
          { text: 'Toaster', link: '/toaster' },
          { text: 'Menu latéral', link: '/client/menu-lateral' },
          { text: 'Menu de navigation', link: '/client/menu-navigation' },
        ]
      },
      {
        text: 'Recettes nuxt',
        link: '/nuxt',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dnum-mi/vue-dsfr' }
    ]
  },
  vite: {
    plugins: [
      whyframe({ defaultSrc: '/_frame', components: [{ name: 'Story' }] }),
      whyframeVue({ include: /\.(vue|md)$/ }),
      hmrFix()
    ],

    resolve: {
      alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) }
    },

    // not needed, just there to prevent reload on cold start
    optimizeDeps: { include: ['@vueuse/core', 'lucide-vue-next'] }
  }
})
