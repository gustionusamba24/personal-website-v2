import { Education, EmploymentType, Experience } from '@/types/definition';

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Laboratory and Course Assistant for Database Systems',
    employment_type: EmploymentType.PART_TIME,
    time_period: 'Sep 2021 - Feb 2022',
    company: 'Universitas Amikom Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    location_type: 'On-site',
    description: [
      {
        id: 1,
        text: 'Assisted in conducting laboratory sessions and providing support for database systems coursework.',
      },
      {
        id: 2,
        text: 'Helped students understand and apply database concepts through hands-on exercises.',
      },
    ],
  },
  {
    id: 2,
    title: 'Front-end Engineer Student',
    employment_type: EmploymentType.APPRENTICESHIP,
    time_period: 'Feb 2022 - Jul 2022',
    company: 'Ruang Guru',
    location: 'Jakarta Selatan, Indonesia',
    location_type: 'Remote',
    description: [
      {
        id: 1,
        text: 'Participated in a front-end engineering apprenticeship program, gaining practical experience in web development and user interface design.',
      },
      {
        id: 2,
        text: 'Collaborated with team members to develop and maintain web applications.',
      },
    ],
  },
  {
    id: 3,
    title: 'Laboratory and Course Assistant for Database Programming',
    employment_type: EmploymentType.PART_TIME,
    time_period: 'Mar 2022 - Aug 2022',
    company: 'Universitas Amikom Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    location_type: 'On-site',
    description: [
      {
        id: 1,
        text: 'Assisted in conducting laboratory sessions and providing support for database programming coursework.',
      },
      {
        id: 2,
        text: 'Helped students understand and apply advanced database concepts through hands-on exercises.',
      },
    ],
  },
  {
    id: 4,
    title: 'Laboratory and Course Assistant for Web Programming',
    employment_type: EmploymentType.PART_TIME,
    time_period: 'Mar 2022 - Aug 2022',
    company: 'Universitas Amikom Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    location_type: 'On-site',
    description: [
      {
        id: 1,
        text: 'Assisted in conducting laboratory sessions and providing support for web programming coursework.',
      },
      {
        id: 2,
        text: 'Helped students understand and apply web development concepts through hands-on exercises.',
      },
      {
        id: 3,
        text: 'Assessed and graded students’ assignments and projects, providing constructive feedback to help them improve their skills.',
      },
    ],
  },
  {
    id: 5,
    title: 'Back-end Engineer Student',
    employment_type: EmploymentType.APPRENTICESHIP,
    time_period: 'Aug 2022 - Dec 2022',
    company: 'Hacktiv8',
    location: 'Jakarta Selatan, Indonesia',
    location_type: 'Remote',
    description: [
      {
        id: 1,
        text: 'Participated in a back-end engineering apprenticeship program, gaining practical experience in server-side development and database management.',
      },
      {
        id: 2,
        text: 'Collaborated with team members to develop and maintain back-end services and APIs.',
      },
    ],
  },
  {
    id: 6,
    title: 'Web Developer',
    employment_type: EmploymentType.FREELANCE,
    time_period: 'Dec 2025 - Present',
    company: 'Sido Makmur Welding Workshop',
    location: 'Yogyakarta, Indonesia',
    location_type: 'On-site',
    description: [
      {
        id: 1,
        text: 'Created a responsive and fast website for Sido Makmur Welding Workshop using Next.js and Tailwind CSS to help them reach more customers. The site features their company profile, services, portfolio, and contact info, ensuring a seamless experience on any device.',
      },
      {
        id: 2,
        text: 'Optimized the website for performance and SEO, resulting in improved search engine rankings and increased traffic.',
      },
      {
        id: 3,
        text: 'Provided ongoing maintenance and updates to ensure the website remains secure and up-to-date with the latest web technologies.',
      },
    ],
  },
];

export const educations: Education[] = [
  {
    id: 1,
    school: 'Universitas Amikom Yogyakarta',
    degree: 'Bachelor of Computer Science',
    major: 'Informatics Engineering',
    time_period: '2019 - 2023',
    description: [
      {
        id: 1,
        text: 'Graduated with a GPA of 3.93/4.00, demonstrating strong academic performance and a solid understanding of computer science principles.',
      },
      {
        id: 2,
        text: 'Gained comprehensive knowledge in various areas of computer science, including programming, algorithms, data structures, databases, clean code and design pattern, object-oriented programming, and artificial intelligence.',
      },
    ],
  },
];
