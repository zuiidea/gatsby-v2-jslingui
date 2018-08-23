/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { I18nProvider } from '@lingui/react'
import { catalogs, langFromPath } from './src/i18n-config'

export const wrapPageElement = ({ element, props }) => {
  const lang = langFromPath(props.location.pathname)
  return (
    <I18nProvider language={lang} catalogs={catalogs}>
      {element}
    </I18nProvider>
  )
}
