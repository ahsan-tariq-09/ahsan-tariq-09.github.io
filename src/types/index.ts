export type Theme = 'dark' | 'light'

export interface NavLinkItem {
  label: string
  to: string
}

export interface Skill {
  name: string
  description: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
}

export interface SocialLink {
  label: string
  url: string
}

export interface SiteData {
  name: string
  headline: string
  intro: string
  skills: Skill[]
  currentWork: string[]
  goals: string[]
  projects: Project[]
  blogPosts: BlogPostMeta[]
  contacts: SocialLink[]
}