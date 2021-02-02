const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Django REST Framework',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/django-rest/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */
  theme: 'antdocs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/disoftw',
    editLinks: false,
    logo: 'https://www.aaaimx.org/software/logo.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Intro',
        link: '/intro/'
      },
      {
        text: 'REST Framework',
        link: '/rest-framework/'
      },
      // {
      //   text: 'Storages',
      //   link: '/storages/'
      // },
      {
        text: 'Glosario',
        link: '/glossary/'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          title: 'Intro',
          collapsable: false,
          children: ['', 'projects', 'models', 'auth']
        }
      ],
      '/rest-framework/': [
        {
          title: 'REST Framework',
          collapsable: false,
          children: [
            '',
            'serializers',
            'viewsets',
            'security',
            'db',
            'advanced'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
