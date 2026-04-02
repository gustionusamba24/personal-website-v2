import type { Experience } from '@/types/definition';

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group relative">
      <div className="mb-2 flex flex-col justify-between md:flex-row md:items-baseline">
        <h4 className="text-on-surface group-hover:text-primary text-xl font-bold transition-colors">
          {experience.title}
        </h4>
        <span className="text-primary text-sm font-semibold uppercase">
          {experience.employment_type} / {experience.time_period}
        </span>
      </div>
      <div className="text-on-surface-variant mb-4 flex items-center space-x-2">
        <span className="text-sm font-bold tracking-tight">
          {experience.company}
        </span>
        <span className="text-outline-variant opacity-40">•</span>
        <span className="text-sm">{experience.location}</span>
        <span className="text-outline-variant opacity-40">•</span>
        <span className="text-sm">{experience.location_type}</span>
      </div>
      <ul className="text-on-surface-variant marker:text-primary list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-[0.75em]">
        {experience.description.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </article>
  );
}
