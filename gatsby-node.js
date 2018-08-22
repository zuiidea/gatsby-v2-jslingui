/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { languages, defaultLanguage } = require('./src/i18n-config')

exports.onCreateBabelConfig = props => {
  const { actions } = props

  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-class-properties',
  })

  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-object-rest-spread',
  })

  actions.setBabelPlugin({
    name: '@babel/plugin-syntax-dynamic-import',
  })

  actions.setBabelPreset({
    name: '@lingui/babel-preset-react',
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise((resolve, reject) => {
    deletePage(page)
    languages.map(language => {
      const newPage = Object.assign({}, page, {
        originalPath: page.path,
        path: '/' + language + page.path,
        context: {
          lang: language,
        },
      })

      createPage(newPage)
      if (language === defaultLanguage) {
        newPage.path = page.path
        createPage(newPage)
      }
    })

    resolve()
  })
}
