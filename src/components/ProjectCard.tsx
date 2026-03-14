import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div className="card-top">
        <h3>{project.title}</h3>
        {project.featured && <span className="badge">Featured</span>}
      </div>

      <p>{project.description}</p>

      <div className="tag-list">
        {project.tech.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="card-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}