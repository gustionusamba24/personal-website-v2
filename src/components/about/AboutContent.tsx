import Image from 'next/image';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16">
          <h1 className="mb-2 text-[3.5rem] leading-tight font-extrabold tracking-tight text-zinc-900">
            About Me
          </h1>
          <div className="h-2 w-24 bg-gradient-to-r from-orange-700 to-orange-500"></div>
        </header>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-lg bg-zinc-100">
              <Image
                src="/gustio-nusamba.webp"
                width={1000}
                height={1250}
                alt="Gustio Nusamba"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-orange-700/10 mix-blend-multiply"></div>
            </div>

            <div className="mt-8 border-l-4 border-orange-700 bg-zinc-100 p-6">
              <p className="mb-2 text-xs font-bold tracking-widest text-orange-700 uppercase">
                Current Focus
              </p>
              <p className="leading-relaxed text-zinc-600">
                Full-stack development, distributed systems architecture, and
                refining the Kinetic Monolith design philosophy.
              </p>
            </div>
          </section>

          <section className="max-w-2xl lg:col-span-7">
            <div className="space-y-8 text-zinc-600">
              <article>
                <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                  The Pivot
                </h2>
                <p className="mb-6 text-lg leading-relaxed">
                  Coming from a non-Computer Science background wasn&apos;t an
                  obstacle; it was a unique vantage point. My journey began with
                  a curiosity about how the digital tools we use daily are
                  constructed. This curiosity quickly evolved into a dedicated
                  pursuit of engineering excellence.
                </p>
              </article>

              <article>
                <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                  The Realization
                </h2>
                <p className="mb-6 text-lg leading-relaxed">
                  The turning point arrived when I stopped viewing code as just
                  syntax and started seeing it as{' '}
                  <span className="font-semibold text-orange-700">
                    architecture
                  </span>
                  . My deep dive into data structures and algorithms wasn&apos;t
                  just an academic exercise. It was a revelation about
                  efficiency, memory, and the raw mechanics of logic that govern
                  every interaction in the cloud.
                </p>
              </article>

              <div className="my-12 h-px w-full bg-zinc-200"></div>

              <article>
                <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                  The Apprenticeship
                </h2>
                <p className="mb-6 text-lg leading-relaxed">
                  My growth was accelerated during a rigorous apprenticeship
                  where I was forced to confront complex legacy systems and
                  high-scale infrastructure. It was here that I learned the
                  value of the Kinetic Monolith, the idea that software should
                  be robust and stable like a stone pillar, yet fluid and fast
                  like a high-speed data stream.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, I build with the intent of creating lasting digital
                  infrastructure. Whether it&apos;s a sleek UI or a robust
                  backend service, my work is defined by precision, clarity, and
                  an unwavering commitment to the craft of engineering.
                </p>
              </article>

              <div className="mt-12 flex gap-4">
                <Link
                  href="mailto:hello@example.com"
                  className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition-all hover:opacity-90"
                >
                  <span>✉</span>
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="rounded-lg border border-zinc-300 px-6 py-3 font-bold text-orange-700 transition-all hover:bg-zinc-100"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
