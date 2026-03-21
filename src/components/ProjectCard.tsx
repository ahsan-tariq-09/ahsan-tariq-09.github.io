import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="github-icon"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49
      0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.39-3.37-1.39-.45-1.18-1.11-1.5-1.11-1.5
      -.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85
      .09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.08
      0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75
      0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0
      1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05
      .55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76
      0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92
      0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49
      A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function ProjectPreviewIcon() {
  return (
    <div className="project-preview-icon" aria-hidden="true">
      <span>{'</>'}</span>
    </div>
  )
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card project-card interactive-card">
      <div className="project-header">
        <div className="project-title-wrap">
          <ProjectPreviewIcon />
          <div className="project-title-block">
            <div className="card-top">
              <h3>{project.title}</h3>
              {project.featured && <span className="badge">Featured</span>}
            </div>
          </div>
        </div>
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
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="github-link github-button"
          >
            <GitHubIcon />
            <span>View on GitHub</span>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="live-link"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  )
}