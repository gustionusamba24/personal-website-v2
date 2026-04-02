import EducationCard from '@/components/resume/EducationCard';
import ExperienceCard from '@/components/resume/ExperienceCard';
import ResumeBanner from '@/components/resume/ResumeBanner';
import { educations, experiences } from '@/data/resume';

export default function ResumeContent() {
  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);
  const sortedEducations = [...educations].sort((a, b) => b.id - a.id);

  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      <ResumeBanner />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <section className="space-y-20 md:col-span-8">
          <div>
            <div className="mb-10 flex items-center space-x-4">
              <h2 className="text-on-surface text-2xl font-extrabold tracking-tight">
                EXPERIENCE
              </h2>
              <div className="border-outline-variant h-px grow border opacity-20"></div>
            </div>

            <div className="space-y-16">
              {sortedExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 flex items-center space-x-4">
              <h2 className="text-on-surface text-2xl font-extrabold tracking-tight">
                EDUCATION
              </h2>
              <div className="border-outline-variant h-px grow border opacity-20"></div>
            </div>

            <div className="space-y-12">
              {sortedEducations.map((education) => (
                <EducationCard key={education.id} education={education} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
