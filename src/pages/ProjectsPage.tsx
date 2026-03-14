import { siteData } from '../data/siteData'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <section>
        <p className="eyebrow">Project Gallery</p>
        <h1>Projects</h1>
        <p className="section-text">
          A collection of things I’m building, learning from, or actively improving.
        </p>
      </section>

      <section className="grid two">
        {siteData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  )
}