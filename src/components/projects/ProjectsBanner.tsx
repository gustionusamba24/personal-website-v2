import Link from 'next/link';

export default function ProjectsBanner() {
  return (
    <header className="mb-20">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h1 className="text-on-surface text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
            The Project I&apos;ve Completed
          </h1>
          <p className="text-on-surface-variant mt-6 max-w-xl text-lg leading-relaxed">
            A curated selection of web applications.
          </p>
        </div>

        <div className="mb-2 flex gap-4">
          <Link
            href="/about"
            className="bg-primary-container text-on-primary-container flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all hover:opacity-90 active:scale-95"
          >
            Let&apos;s talk
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="border-outline/20 text-primary hover:bg-surface-container-low rounded-lg border px-6 py-3 font-semibold transition-all active:scale-95"
          >
            Email me
          </Link>
        </div>
      </div>
    </header>
  );
}
