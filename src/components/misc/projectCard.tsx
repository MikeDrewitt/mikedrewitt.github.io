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

const ProjectCard = ({ name, description, technologies, github, outboundLink }: Project) => (
  <Card className={styles.container}>
    <p className={styles.projectName}>{name}</p>
    <p className={styles.description}>{description}</p>
    <div className={styles.tags}>
      {technologies.map((tech, index) => (
        <span key={index} className={styles.tag}>
          {tech}
        </span>
      ))}
    </div>
    {github && <FaLink brandIcon='github' href={github} newTab />}
    {outboundLink && <FaLink icon='external-link' href={outboundLink} newTab />}
  </Card>
)

export default ProjectCard
