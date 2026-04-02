import Image from 'next/image';
import Link from 'next/link';

type ProjectItem = {
  title: string;
  description: string;
  period: string;
  stack: string;
  image: string;
};

const projects: ProjectItem[] = [
  {
    title: 'Nexus Infrastructure Core',
    description:
      'A distributed systems manager for edge computing nodes, implementing real-time health monitoring and automated failover protocols for mission-critical deployments.',
    period: 'Jan 2023 - May 2023',
    stack: 'Go, Kubernetes, Redis, Prometheus',
    image: '',
  },
  {
    title: 'Kinetic Analytics Engine',
    description:
      'High-throughput data processing pipeline capable of analyzing millions of events per second with sub-millisecond latency for fintech compliance.',
    period: 'Aug 2023 - Dec 2023',
    stack: 'Rust, Apache Kafka, PostgreSQL',
    image: '',
  },
  {
    title: 'Monolith OS Interface',
    description:
      'A conceptual operating system interface focused on minimal distractions, featuring a custom-built tiling window manager and terminal emulator.',
    period: 'Mar 2024 - Present',
    stack: 'TypeScript, React, Electron, C++',
    image: '',
  },
  {
    title: 'Ether Relay Protocol',
    description:
      'An encrypted peer-to-peer communication protocol designed for low-bandwidth environments, utilizing custom compression algorithms and onion routing.',
    period: 'June 2022 - Dec 2022',
    stack: 'C, Python, OpenSSL, Docker',
    image: '',
  },
];

export default function ProjectsContent() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      <header className="mb-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-bold tracking-widest text-orange-700 uppercase">
              Portfolio Archive
            </span>
            <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-zinc-900 md:text-6xl">
              The Project I&apos;ve Completed
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              A curated selection of technical infrastructure, web applications,
              and architectural experiments built with a focus on performance
              and clean code.
            </p>
          </div>

          <div className="mb-2 flex gap-4">
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            >
              Let&apos;s talk
              <span className="text-sm">→</span>
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-orange-700 transition-all hover:bg-zinc-100 active:scale-95"
            >
              Email me
            </Link>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden bg-white"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-zinc-600">
                  <Link
                    href="#"
                    aria-label="Repository"
                    className="transition-colors hover:text-orange-700"
                  >
                    {'</>'}
                  </Link>
                  <Link
                    href="#"
                    aria-label="Live Preview"
                    className="transition-colors hover:text-orange-700"
                  >
                    ↗
                  </Link>
                </div>
              </div>

              <p className="mb-8 leading-relaxed text-zinc-600">
                {project.description}
              </p>

              <div className="mt-auto overflow-hidden rounded-lg bg-zinc-100">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-zinc-300/60">
                    <tr>
                      <td className="w-1/3 px-4 py-3 font-semibold text-zinc-500">
                        Time Period
                      </td>
                      <td className="px-4 py-3 text-zinc-900">
                        {project.period}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-zinc-500">
                        Tech Stack
                      </td>
                      <td className="px-4 py-3 text-zinc-900">
                        {project.stack}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-32 rounded-xl bg-gradient-to-br from-orange-700 to-orange-500 p-12 text-white">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">
              Have a technical challenge?
            </h2>
            <p className="max-w-md opacity-90">
              I&apos;m currently available for freelance architectural
              consultations and full-stack development projects.
            </p>
          </div>
          <Link
            href="/about"
            className="rounded-lg bg-white px-8 py-4 font-bold text-orange-700 shadow-xl transition-colors hover:bg-zinc-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
