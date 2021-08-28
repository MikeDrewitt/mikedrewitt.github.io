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
    description: 'Insight is a higher education analytics application that aggregates data from internal and external data sources. Users can then create custom queries and build data visualizations.',
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
    <div className={styles.text}>
      <p>
        I am a full stack web developer who is passionate about building cool applications. I understand the application
        building proccess from database to users, and most things in between. I'm familiar with both scrum and kanban
        work flows; I've been in customer calls; am comfortable describing requirements to anyone; and never back down
        from any technical challenge.
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
        Resumé
      </FaLink>
    </div>

    <h2>Projects</h2>
    <div className={`${styles.row} ${styles.projects}`}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </div>

    <div className={styles.technologies}>
      <div>
        <h2>Frameworks</h2>
        <div className={styles.row}>
          <div className={styles.cards}>
            <Card>React/ Redux</Card>
            <Card>Node/ Express</Card>
            <Card>.NET/ Entity Framework</Card>
            <Card>Python/ Django REST Framework</Card>
            <Card>Postgres/ MS SQL</Card>
          </div>
        </div>
      </div>

      <div>
        <h2>Languages</h2>
        <div className={styles.row}>
          <div className={styles.cards}>
            <Card>Typescript</Card>
            <Card>Javascript</Card>
            <Card>C#</Card>
            <Card>Python</Card>
            <Card>CSS/ SCSS</Card>
            <Card>HTML</Card>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
)

export default HomePage
