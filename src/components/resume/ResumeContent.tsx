import Link from 'next/link';

type ExperienceItem = {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
};

type EducationItem = {
  institution: string;
  credential: string;
  period: string;
  subtitle: string;
  description: string;
};

const competencies = [
  'Cloud Architecture',
  'Product Engineering',
  'Fullstack React',
  'DevOps',
  'Strategic UI/UX',
];

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    period: 'Full-Time / 2021 - PRESENT',
    company: 'Kinetic Solutions',
    location: 'Remote, Global',
    description:
      'Leading the development of enterprise-grade cloud infrastructure visualization tools. Architected a real-time data streaming pipeline reducing dashboard latency by 45%. Orchestrating a cross-functional team of 8 developers using a proprietary monolith framework.',
  },
  {
    title: 'Lead Frontend Developer',
    period: 'Contract / 2019 - 2021',
    company: 'Monolith Design Labs',
    location: 'Jakarta, ID',
    description:
      'Spearheaded the complete redesign of a financial services portal serving over 2M users. Implemented a custom design system based on Material Design 3, increasing design-to-development handoff efficiency by 60%.',
  },
  {
    title: 'Full Stack Developer',
    period: 'Full-Time / 2017 - 2019',
    company: 'Vortex Creative',
    location: 'Surabaya, ID',
    description:
      'Developed and maintained scalable web applications for high-growth startups. Expertly handled both backend Node.js logic and complex React frontend state management.',
  },
];

const education: EducationItem[] = [
  {
    institution: 'University of Technology',
    credential: 'Bachelor of Computer Science',
    period: '2013 - 2017',
    subtitle: 'Major: Software Engineering',
    description:
      'Focused on algorithmic efficiency, database normalization, and distributed systems. Graduated with honors (GPA 3.8/4.0). Active member of the Competitive Programming Team.',
  },
  {
    institution: 'Design Innovation Institute',
    credential: 'Professional Certificate',
    period: '2018',
    subtitle: 'Advanced Interaction Design',
    description:
      'Specialized training in user psychology, ergonomic interface systems, and technical documentation for design systems.',
  },
];

export default function ResumeContent() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <header className="mb-20">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-zinc-900 md:text-7xl">
          Work and Experience
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <section className="space-y-20 md:col-span-8">
          <div>
            <div className="mb-10 flex items-center space-x-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                EXPERIENCE
              </h2>
              <div className="h-px flex-grow bg-zinc-300 opacity-50"></div>
            </div>

            <div className="space-y-16">
              {experiences.map((item) => (
                <article key={item.title} className="group relative">
                  <div className="mb-2 flex flex-col justify-between md:flex-row md:items-baseline">
                    <h4 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-orange-700">
                      {item.title}
                    </h4>
                    <span className="text-sm font-semibold text-orange-700 uppercase">
                      {item.period}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center space-x-2 text-zinc-600">
                    <span className="text-sm font-bold tracking-tight">
                      {item.company}
                    </span>
                    <span className="opacity-40">•</span>
                    <span className="text-sm">{item.location}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 flex items-center space-x-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                EDUCATION
              </h2>
              <div className="h-px flex-grow bg-zinc-300 opacity-50"></div>
            </div>

            <div className="space-y-12">
              {education.map((item) => (
                <article
                  key={item.institution}
                  className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex flex-col justify-between md:flex-row">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900">
                        {item.institution}
                      </h4>
                      <p className="text-sm font-semibold text-orange-700">
                        {item.credential}
                      </p>
                    </div>
                    <div className="mt-2 text-right md:mt-0">
                      <p className="text-xs font-bold text-zinc-500 uppercase">
                        {item.period}
                      </p>
                      <p className="text-xs text-zinc-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
