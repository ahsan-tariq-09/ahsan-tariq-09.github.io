import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'
import ProjectCard from '../components/ProjectCard'

export default function HomePage() {
  const featuredProjects = siteData.projects.filter((project) => project.featured)

  return (
    <div className="page-stack">
      <section className="hero">
        <h1 className="hero-name">Hi there, I’m Ahsan Tariq 👋</h1>
        <h2 className="hero-subtitle">
          Computer Science student building software, embedded systems, and useful tools.
        </h2>
        <p className="hero-text">{siteData.intro}</p>

        <div className="hero-actions">
          <Link to="/projects" className="button primary">
            View Projects
          </Link>
        </div>
      </section>

      <section>
        <h2>Languages &amp; Tools</h2>
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
          <p className="section-paragraph">{siteData.currentWorkParagraph}</p>
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
        <h2>Featured Projects</h2>
        <div className="grid two">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}