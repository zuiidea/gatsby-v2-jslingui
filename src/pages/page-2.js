import React from 'react'
import { Link } from 'gatsby'
import { Trans, withI18n } from '@lingui/react'

import Layout from '../components/layout'

const SecondPage = ({ i18n }) => (
  <Layout>
    <h1>
      <Trans>Hi from the second page</Trans>
    </h1>
    <p>
      <Trans>Welcome to page 2</Trans>
    </p>
    <Link to={i18n.t`/`}>
      <Trans>Go back to the homepage</Trans>
    </Link>
  </Layout>
)

export default withI18n()(SecondPage)
