import React from 'react'

import Card from 'components/shared/layouts/card'
import FaLink from 'components/shared/icons/faLink'

import styles from './projectCard.scss'

export type Project = {
  name: string
  description: string
  technologies: string[]
  github?: string
  outboundLink?: string
}

const ProjectCard = ({ name, description, github, outboundLink }: Project) => (
  <Card className={styles.container}>
    <p className={styles.projectName}>{name}</p>
    <p className={styles.info}>{description}</p>
    {github && <FaLink brandIcon='github' href={github} newTab />}
    {outboundLink && <FaLink icon='external-link' href={outboundLink} newTab />}
  </Card>
)

export default ProjectCard
