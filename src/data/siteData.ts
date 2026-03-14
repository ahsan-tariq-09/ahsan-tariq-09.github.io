import type { SiteData } from '../components/types'

export const siteData: SiteData = {
  name: 'Ahsan Tariq',
  headline: 'Computer Science student building software, systems, and useful tools.',
  intro:
    'I’m a Computer Science student exploring the intersection of software development and creative problem solving.',

  skills: [
    {
      name: 'Java',
      description: 'Building strong foundations in object-oriented programming.',
    },
    {
      name: 'Python',
      description: 'Scripting, experimenting, and automating.',
    },
    {
      name: 'TypeScript + React',
      description: 'Building fast, scalable front-end interfaces with clean, type-safe components.',
    },
  ],

  currentWork: [
    'Java projects from coursework and beyond.',
    'Exploring functional programming with Haskell to broaden my perspective.',
    'Small experiments with Python for quick ideas and automation.',
    'Building problem-solving skills through coding challenges and competitions.',
    'Learning JavaScript and React.js for web development to work on the Knox Makerspace server.',
    'Working on a website to help freshmen with career and course navigation at Knox College.',
  ],

  goals: [
    'Strengthen mastery of Java, Python, TypeScript/React, and C++, with a focus on writing cleaner, scalable code.',
    'Build deeper fluency in Haskell and apply functional-programming patterns to real project architectures.',
    'Develop and deploy real systems: the Knox Makerspace server, Freshman guidance website, and KG-RAG Physio Chatbot.',
    'Contribute to open-source or faculty-led research projects to sharpen engineering and collaboration skills.',
  ],

  projects: [
    {
      title: 'NeurIPS Code Golf',
      description:
        'Concise problem-solving in Python for ARC-AGI benchmark tasks, focused on solving problems with the fewest possible characters.',
      tech: ['Python', 'ARC-AGI'],
      githubUrl:
        'https://github.com/ahsan-500mbps/neurips-2025-google-code-golf-championship',
      featured: true,
    },
    {
      title: 'KG-RAG Physio Chatbot',
      description:
        'Design and implementation of a Knowledge-Graph-Enhanced Retrieval-Augmented Chatbot System for physical therapy.',
      tech: ['Python', 'RAG', 'Knowledge Graphs'],
      githubUrl:
        'https://github.com/ahsan-500mbps/KG-RAG-Physio-Chatbot',
      featured: true,
    },
    {
      title: 'Knox Makerspace Server',
      description:
        'Learning web development and systems work while contributing to Knox Makerspace-related infrastructure.',
      tech: ['React', 'TypeScript', 'Web Development'],
    },
    {
      title: 'Freshman Guidance Website',
      description:
        'A website to help freshmen with career and course navigation and guidance at Knox College.',
      tech: ['React', 'TypeScript', 'Planning'],
    },
  ],

  blogPosts: [
    {
      slug: 'first-post',
      title: 'Why I’m Building This Site',
      date: '2026-03-14',
      summary:
        'A short intro to why I wanted a portfolio site with a blog and project gallery.',
      tags: ['portfolio', 'react', 'typescript'],
    },
    {
      slug: 'building-in-public',
      title: 'Building in Public as a CS Student',
      date: '2026-03-14',
      summary:
        'Why documenting projects publicly is useful when you are still learning.',
      tags: ['career', 'projects', 'learning'],
    },
  ],

  contacts: [
    { label: 'Email', url: 'mailto:atariq@knox.edu' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/ahsan-09-tariq/' },
    { label: 'GitHub', url: 'https://github.com/ahsan-tariq-09' },
  ],
}