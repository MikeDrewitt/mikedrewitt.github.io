import React from 'react'

import PageWrapper from 'components/shared/layouts/pageWrapper'
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

const email = 'mailto:mikedrewitt@gmail.com'
const resume = 'https://mikedrewitt.github.io/documents/Drewitt_2021.pdf'
const github = 'https://github.com/MikeDrewitt'
const linkedin = 'https://www.linkedin.com/in/michaeldrewitt/'

const HomePage = () => (
  <PageWrapper className={styles.center}>
    <h1>Hello! I am Michael Drewitt</h1>

    <h2>About</h2>
    <div className={styles.row}>
      <p className={styles.text}>
        I am a full stack web developer who is passionate about building cool applications. I understand the application
        building proccess from database to users, and most things in between. I'm familiar with both scrum and kanban
        work flows; I've been in customer calls; am comfortable describing requirements to anyone; and never back down
        from any technical challenge.
        <br />
        I'm always open to chat, so feel free to reach out via any of the below social medias and/or email.
      </p>
    </div>

    <h2>Info</h2>
    <div className={styles.row}>
      <FaLink brandIcon='github' href={github} linkClass={styles.text} newTab>
        Github
      </FaLink>
      <FaLink brandIcon='linkedin' href={linkedin} linkClass={styles.text} newTab>
        LinkedIn
      </FaLink>
      <FaLink regularIcon='paper-plane' href={email} linkClass={styles.text} newTab>
        Email
      </FaLink>
      <FaLink regularIcon='file-pdf' href={resume} linkClass={styles.text} newTab>
        Resume
      </FaLink>
    </div>

    <h2>Projects</h2>
    <div className={`${styles.row} ${styles.projects}`}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </div>

    <h2>Frameworks</h2>
    <div className={styles.row}>
      <div className={styles.chips}>
        <Card>React/ Redux</Card>
        <Card>Node/ Express</Card>
        <Card>.NET/ Entity Framework</Card>
        <Card>Python/ Django REST Framework</Card>
        <Card>Postgres/ MS SQL</Card>
      </div>
    </div>
  </PageWrapper>
)

export default HomePage
