import Link from 'next/link';

import ProjectCard from '@/components/projects/ProjectCard';
import ProjectsBanner from '@/components/projects/ProjectsBanner';
import { projects } from '@/data/projects';

export default function ProjectsContent() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      <ProjectsBanner />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <section className="kinetic-gradient mt-32 rounded-xl p-12 text-white">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">
              Have a technical challenge?
            </h2>
            <p className="max-w-md opacity-90">
              I&apos;m currently available for full-stack development projects.
            </p>
          </div>
          <Link
            href="/about"
            className="text-primary hover:bg-surface-container-lowest rounded-lg bg-white px-8 py-4 font-bold shadow-xl transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
