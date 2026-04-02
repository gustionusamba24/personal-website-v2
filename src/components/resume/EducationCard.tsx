import type { Education } from '@/types/definition';

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="border-outline-variant/10 bg-surface-container-lowest rounded-lg border p-8 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex flex-col justify-between md:flex-row">
        <div>
          <h4 className="text-on-surface text-lg font-bold">
            {education.school}
          </h4>
          <p className="text-primary text-sm font-semibold">
            {education.degree}
          </p>
        </div>
        <div className="mt-2 text-right md:mt-0">
          <p className="text-on-surface-variant text-xs font-bold uppercase">
            {education.time_period}
          </p>
          <p className="text-on-surface-variant text-xs">
            Major: {education.major}
          </p>
        </div>
      </div>
      <ul className="text-on-surface-variant list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-[0.75em] marker:text-(--primary)">
        {education.description.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </article>
  );
}
