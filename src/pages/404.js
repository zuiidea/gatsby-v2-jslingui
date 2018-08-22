import React from 'react'
import { Trans } from '@lingui/react'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>
      <Trans>NOT FOUND</Trans>
    </h1>
    <p>
      <Trans>You just hit a route that doesn&#39;t exist... the sadness.</Trans>
    </p>
  </Layout>
)

export default NotFoundPage
