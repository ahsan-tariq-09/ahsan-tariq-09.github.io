// This is just a template file for siteData.ts . Please copy this to siteData.ts in src/data/ and fill in the relevant information.

import type { SiteData } from '../types'

export const siteData: SiteData = {
  name: 'Your Name',

  headline:
    'Computer Science student building software, embedded systems, and useful tools.',

  intro:
    'Short introduction about yourself.',

  skills: [
    { name: 'Python', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'C', level: 'Beginner' },
  ],

  currentWorkParagraph:
    'Describe what you are currently working on.',

  goals: [
    'Example goal one',
    'Example goal two',
  ],

  projects: [
    {
      title: 'Example Project',
      description: 'Short project description.',
      tech: ['TypeScript'],
      githubUrl: 'https://github.com/example',
      featured: true,
    },
  ],

  contacts: [
    {
      label: 'Email',
      value: 'example@email.com',
      href: 'mailto:example@email.com',
    },
  ],
}