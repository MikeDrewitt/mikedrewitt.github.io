import React from 'react'

import styles from './card.scss'

type Props = {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className = '' }: Props) => <span className={`${styles.card} ${className}`}>{children}</span>

export default Card
