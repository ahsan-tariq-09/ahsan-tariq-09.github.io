import type { SiteData } from '../types'

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

  currentWorkParagraph:
  'I’m currently working across coursework, personal projects, and practical web development. That includes Java projects from class and beyond, exploring functional programming with Haskell to broaden how I think about software design, and running small Python experiments for automation and rapid prototyping. I’m also sharpening my problem-solving through coding challenges, learning JavaScript and React for web development work connected to the Knox Makerspace server, and building a website to help freshmen navigate courses, careers, and academic planning at Knox College.',

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
      tech: ['Python', 'ARC-AGI', 'Code Golf'],
      githubUrl:
        'https://github.com/ahsan-tariq-09/neurips-2025-google-code-golf-championship',
      featured: true,
    },
    {
      title: 'KG-RAG Physio Chatbot',
      description:
        'Design and implementation of a Knowledge-Graph-Enhanced Retrieval-Augmented Chatbot System for physical therapy.',
      tech: ['Python', 'RAG Pipeline', 'Knowledge Graphs'],
      githubUrl:
        'https://github.com/ahsan-tariq-09/KG-RAG-Physio-Chatbot',
      featured: true,
    },
    {
      title: 'MIPS Assembly Simulator',
      description:
        'This project runs a subset of MIPS assembly directly from .asm files with labels and basic .data support.',
      tech: ['C', 'MIPS Assembly'],
      githubUrl:
        'https://github.com/ahsan-tariq-09/MIPS-Simulator',
      featured: true,
    },
    {
      title: 'Freshman Guidance Website',
      description:
        'A website to help freshmen with career and course navigation and guidance at Knox College. (WORK IN PROGRESS)',
      tech: ['React', 'TypeScript', 'Python FastAPI'],
    },
    {
      title: 'chronos-watches',
      description:
        'Chronos Watches is a full-stack luxury watch catalogue with a FastAPI backend and a React + TypeScript frontend. It includes product browsing, filtering, cart functionality, and an admin inventory panel backed by a local JSON file. The Project is currently in development and the website has not been deployed, I have added screenshots in meantime to show how it would look like.',
      tech: ['Web Development', 'TypeScript-react', 'Python-FastAPI'],
      githubUrl:
        'https://github.com/ahsan-tariq-09/chronos-watches',
    },
  ],

  contacts: [
    {
      label: 'Email',
      url: 'mailto:atariq@knox.edu',
      value: 'atariq@knox.edu',
      ariaLabel: 'Email Ahsan Tariq',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ahsan-tariq-09',
      value: 'ahsan-tariq-09',
      ariaLabel: 'GitHub profile',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ahsan-09-tariq/',
      value: 'Ahsan Tariq',
      ariaLabel: 'LinkedIn profile',
    },
  ],
}