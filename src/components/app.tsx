import React, { useEffect } from 'react'
import { Router as ReactRouter } from 'react-router-dom'

import Router from 'components/router'

import history from 'services/history.service'

import { initializeTheme } from 'utils/theme.utils'

const App = () => {
  useEffect(() => {
    initializeTheme() // Sets the default state for darkMode
  }, [])

  return (
    <ReactRouter history={history}>
      <Router />
    </ReactRouter>
  )
}

export default App
