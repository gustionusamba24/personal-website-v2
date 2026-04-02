import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/types/definition';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = `/${project.image_url}`;
  const techStack = project.tech_stack
    .map((technology) => technology.name)
    .join(', ');

  return (
    <article className="bg-surface-container-lowest group border-outline-variant flex flex-col overflow-hidden rounded-2xl border">
      <div className="bg-surface-container-high relative aspect-4/3 w-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-on-surface text-2xl font-bold tracking-tight">
            {project.name}
          </h3>
          <div className="text-on-surface-variant flex gap-3">
            {project.repo_url ? (
              <Link
                href={project.repo_url}
                aria-label="Repository"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">code</span>
              </Link>
            ) : null}
            {project.project_url ? (
              <Link
                href={project.project_url}
                aria-label="Live Preview"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">open_in_new</span>
              </Link>
            ) : null}
          </div>
        </div>

        <p className="text-on-surface-variant mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="bg-surface-container-low mt-auto overflow-hidden rounded-lg">
          <table className="w-full border-separate border-spacing-0 text-sm">
            <tbody>
              <tr>
                <td
                  className="text-on-surface-variant w-1/3 border-b px-4 py-3 font-semibold"
                  style={{ borderColor: 'rgba(221, 193, 176, 0.35)' }}
                >
                  Time Period
                </td>
                <td
                  className="text-on-surface border-b px-4 py-3"
                  style={{ borderColor: 'rgba(221, 193, 176, 0.35)' }}
                >
                  {project.time_period}
                </td>
              </tr>
              <tr>
                <td className="text-on-surface-variant px-4 py-3 font-semibold">
                  Tech Stack
                </td>
                <td className="text-on-surface px-4 py-3">{techStack}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
