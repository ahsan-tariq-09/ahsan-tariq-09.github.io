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

export interface SocialLink {
  label: 'Email' | 'GitHub' | 'LinkedIn'
  url: string
  value: string
  ariaLabel: string
}

export interface SiteData {
  name: string
  headline: string
  intro: string
  skills: Skill[]
  currentWorkParagraph: string
  goals: string[]
  projects: Project[]
  contacts: SocialLink[]
  
}