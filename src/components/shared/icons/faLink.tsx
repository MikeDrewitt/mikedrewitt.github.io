import React from 'react'

import FaIcon, { Props as FaIconProps } from 'components/shared/icons/faIcon'

import styles from './faLink.scss'

type Props = {
  href: string
  newTab?: boolean
  linkClass?: string
  children?: React.ReactNode
} & FaIconProps

const FaLink = ({ linkClass = '', className = '', children = null, href, newTab, ...props }: Props) => (
  <a href={href} className={`${linkClass} ${styles.anchor}`} target={newTab ? '_blank' : undefined}>
    <FaIcon {...props} className={`${children ? styles.spacing : ''} ${styles.icon} ${className}`} />
    {children}
  </a>
)

export default FaLink
