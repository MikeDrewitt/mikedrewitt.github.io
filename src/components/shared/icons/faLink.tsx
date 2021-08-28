import React from 'react'

import FaIcon, { Props as FaIconProps } from 'components/shared/icons/faIcon'

import styles from './faLink.scss'

type Props = {
  href: string
  newTab?: boolean
  buttonClass?: string
} & FaIconProps

const FaLink = ({ buttonClass = '', href, newTab, ...props }: Props) => (
  <a href={href} className={`${buttonClass} ${styles.anchor}`} target={newTab ? '_blank' : undefined}>
    <FaIcon {...props} />
  </a>
)

export default FaLink
