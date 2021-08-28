import React from 'react'
import { Link } from 'react-router-dom'

import DarkModeToggle from 'components/utils/darkModeToggle'

import styles from './globalToolbar.scss'

const GlobalToolbar = () => (
  <div className={styles.bar}>
    <Link to='/' className={styles.header}>
      JS
    </Link>
    <div className={styles.controls}>
      <DarkModeToggle />
    </div>
  </div>
)

export default GlobalToolbar
