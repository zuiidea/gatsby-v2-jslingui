import React from 'react'
import { Link } from 'gatsby'
import { Trans, withI18n } from '@lingui/react'

import Layout from '../components/layout'

const IndexPage = ({ i18n }) => (<Layout>
  <h1>
    <Trans>Hi people</Trans>
  </h1>
  <p>
    <Trans>Welcome to your new Gatsby site.</Trans>
  </p>
  <p>
    <Trans>Now go build something great.</Trans>
  </p>
  <Link to={i18n.t`/page-2`}>
    <Trans>Go to page 2</Trans>
  </Link>
  <div>
    <Link to="/en/">
      <Trans>English</Trans>
    </Link>
    <Link style={{ marginLeft: 20 }} to="/zh/">
      <Trans>Chinese</Trans>
    </Link>
  </div>
</Layout>)

export default withI18n()(IndexPage)
