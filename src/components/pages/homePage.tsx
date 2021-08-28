import React from 'react'

import PageWrapper from 'components/shared/layouts/pageWrapper'
import Button from 'components/shared/inputs/button'
import ProjectCard, { Project } from 'components/misc/projectCard'
import Card from 'components/shared/layouts/card'
import FaLink from 'components/shared/icons/faLink'

import styles from './homePage.scss'

const projects: Project[] = [
  {
    name: 'Archidekt',
    // prettier-ignore
    description:'Magic: the Gathering deck building tool. Users can search cards; create and playtest decks; manage collections; and comment on others decks.',
    technologies: ['React', 'Django REST Framework', 'Postgres'],
    outboundLink: 'https://archidekt.com/',
  },
  {
    name: 'Autograder',
    // prettier-ignore
    description: 'An autograding tool for UB Computer Science department. Teachers can create courses and assignments, users can then submit and have their coding projects automatically graded via a custom test runner.',
    technologies: ['React', 'Express', 'Postgres'],
    github: 'https://github.com/UBAutograding',
  },
  {
    name: 'Insight',
    // prettier-ignore
    description: 'I have a big boy job (full time Senior Product Engineer) at Anthology where I work on an analytics application.',
    technologies: ['React', '.NET/ Entity Framework', 'Microsoft SQL', 'Express', 'Elasticsearch'],
    outboundLink: 'https://www.anthology.com/solutions/institutional-and-learning-effectiveness/insight',
  },
]

const github = 'https://github.com/MikeDrewitt'
const linkedin = 'https://www.linkedin.com/in/michaeldrewitt/'

const HomePage = ({}) => (
  <PageWrapper className={styles.center}>
    <h1>Hello! I am Michael Drewitt</h1>
    <p>I am a full stack web developer who is passionate about building cool applications. </p>

    <div className={styles.row}>
      <FaLink brandIcon='github' href={github} className={styles.exteriorLink} newTab />
      <FaLink brandIcon='linkedin' href={linkedin} className={styles.exteriorLink} newTab />
    </div>

    <div className={styles.row}>
      <Button>Resume</Button>
    </div>

    <div className={`${styles.row} ${styles.projects}`}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </div>

    <div className={styles.row}>
      <Card>React</Card>
      <Card>Typescript/ Javascript</Card>
      <Card>Node/ Express</Card>
      <Card>.NET/ Entity</Card>
      <Card>Python/ Django REST Framework</Card>
      <Card>Postgres/ MS SQL</Card>
    </div>
  </PageWrapper>
)

export default HomePage
