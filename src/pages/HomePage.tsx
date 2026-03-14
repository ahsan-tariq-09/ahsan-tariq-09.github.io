import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'
import ProjectCard from '../components/ProjectCard'

export default function HomePage() {
  const featuredProjects = siteData.projects.filter((project) => project.featured)

  return (
    <div className="page-stack">
      <section className="hero">
        <p className="eyebrow">Hey there, I’m {siteData.name} 👋</p>
        <h1>{siteData.headline}</h1>
        <p className="hero-text">{siteData.intro}</p>

        <div className="hero-actions">
          <Link to="/projects" className="button primary">
            View Projects
          </Link>
          <Link to="/blog" className="button secondary">
            Read Blog
          </Link>
        </div>
      </section>

      <section>
        <h2>Languages & Tools</h2>
        <div className="grid three">
          {siteData.skills.map((skill) => (
            <article className="card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>What I’m Working On</h2>
        <div className="card">
          <ul className="clean-list">
            {siteData.currentWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Current Goals</h2>
        <div className="card">
          <ul className="clean-list">
            {siteData.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="section-row">
          <h2>Featured Projects</h2>
          <Link to="/projects">See all</Link>
        </div>

        <div className="grid two">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2>Connect</h2>
        <div className="card">
          <ul className="contact-list">
            {siteData.contacts.map((contact) => (
              <li key={contact.label}>
                <strong>{contact.label}:</strong>{' '}
                <a href={contact.url} target="_blank" rel="noreferrer">
                  {contact.url.replace('mailto:', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}