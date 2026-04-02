import Link from 'next/link';

export default function AboutBentoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="mb-12 flex items-center gap-4 text-3xl font-extrabold tracking-tight text-zinc-900">
        <span className="h-1 w-12 bg-orange-700"></span>
        About Me
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded border border-zinc-200 bg-white p-10 shadow-sm transition-shadow hover:shadow-md md:col-span-2">
          <p className="mb-6 text-lg leading-relaxed text-zinc-600">
            As a developer, I craft the solution through digital approaches. My
            approach transforms concepts into functional and purposeful digital
            products that seamlessly integrate technology. Leveraging the AI as
            a tool for a structured planning and development process that still
            paying attention to quality.
          </p>
        </div>

        <div className="flex flex-col justify-between bg-zinc-100 p-8">
          <div>
            <h3 className="mb-4 text-xl font-bold text-zinc-900">Connect</h3>
            <p className="mb-8 text-sm text-zinc-600">
              Follow my journey across the digital landscape.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="#"
              className="group flex items-center justify-between rounded bg-white p-3 transition-colors hover:bg-orange-700"
            >
              <span className="font-medium text-zinc-900 group-hover:text-white">
                LinkedIn
              </span>
              <span className="text-zinc-900 group-hover:text-white">↗</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between rounded bg-white p-3 transition-colors hover:bg-orange-700"
            >
              <span className="font-medium text-zinc-900 group-hover:text-white">
                GitHub
              </span>
              <span className="text-zinc-900 group-hover:text-white">↗</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between rounded bg-white p-3 transition-colors hover:bg-orange-700"
            >
              <span className="font-medium text-zinc-900 group-hover:text-white">
                Twitter
              </span>
              <span className="text-zinc-900 group-hover:text-white">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
