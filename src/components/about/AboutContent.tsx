import Image from 'next/image';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h1 className="text-on-surface mb-2 text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="bg-surface-container-low relative overflow-hidden rounded-lg">
              <Image
                src="/gustio-nusamba.webp"
                width={1000}
                height={1250}
                alt="Professional portrait of Gustio Nusamba"
                className="aspect-4/5 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                priority
              />
              <div className="bg-primary/10 absolute inset-0 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="max-w-2xl lg:col-span-7">
            <div className="text-on-surface-variant space-y-8">
              <section>
                <h2 className="text-on-surface mb-4 text-2xl font-bold">
                  My Story
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Becoming a software engineer wasn’t part of the plan. Because,
                  I didn’t know it was an option.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  I grew up in an environment that knew nothing about computers
                  especially computer science. Majoring in informatics was also
                  not an option, because at that moment my parents told me to
                  take that major because of the good career prospects in IT
                  field due to the massive growth of IT field.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  When I was in 2nd semester, I learned about data structures
                  and algorithms. At beginning, it was incredibly confusing and
                  I couldn’t grasp the point why this lesson was necessary.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  I realized that if I didn’t understand this material, it would
                  be hard to continue my studies in the next semester. I was
                  trying to find out about the job prospects for IT majors and I
                  found some that suited me which was web development.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  I started writing HTML and CSS at 4th semester. But even then,
                  it never felt like a path I was supposed to take because I
                  thought it was not deserved to learn. At least, that’s what it
                  looked like from where I was standing.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Until I finally got a good opportunity to get join the
                  apprenticeship program in the 2 big companies. It was a
                  meaningful moment that I could learn and gain the knowledge
                  from the experts.{' '}
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  From there, everything moved quickly, I was taking and being
                  involved in several freelance projects and working across the
                  stack.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  These days, I am expanding skills in data field. The most
                  important thing in IT is being able adapt to growth dan not
                  being limited to just one skill.
                </p>
              </section>

              <div className="mt-12 flex gap-4">
                <Link
                  href="mailto:hello@example.com"
                  className="bg-primary-container text-on-primary-container flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-all hover:opacity-90"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="border-outline/20 text-primary hover:bg-surface-container-low rounded-lg border px-6 py-3 font-bold transition-all"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
