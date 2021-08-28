import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'components/pages/homePage'
import NotFoundPage from 'components/pages/notFoundPage'

const AuthenticatedRouter = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default AuthenticatedRouter
