import { Project } from '@/types/definition';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Mini Projects',
    description:
      'An experimental project to learn HTML, CSS, Javascript, and Typescript. The projects are simple and small, but they are a great way to learn the basics of web development.',
    time_period: 'Apr 2025 - May 2025',
    tech_stack: [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'Javascript' },
      { id: 4, name: 'Typescript' },
    ],
    image_url: 'project/mini_project-poster.webp',
    project_url: null,
    repo_url: 'https://github.com/gustionusamba24/mini-projects',
  },
  {
    id: 2,
    name: 'Sido Makmur Welding Workshop',
    description:
      'I have created a responsive and fast website for Sido Makmur Welding Workshop using Next.js and Tailwind CSS to help them reach more customers. The site features their company profile, services, portfolio, and contact info, ensuring a seamless experience on any device.',
    time_period: 'Dec 2025 - Present',
    tech_stack: [
      { id: 1, name: 'Next.js' },
      { id: 2, name: 'Tailwind CSS' },
      { id: 3, name: 'React' },
      { id: 4, name: 'Google Maps API' },
    ],
    image_url: 'project/sido_makmur-poster.webp',
    project_url: 'https://sidomakmurjogja.com/',
    repo_url: null,
  },
];
