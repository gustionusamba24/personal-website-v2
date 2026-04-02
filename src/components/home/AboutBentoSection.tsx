import Image from 'next/image';
import Link from 'next/link';

export default function AboutBentoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="text-on-surface mb-12 flex items-center gap-4 text-3xl font-extrabold tracking-tight">
        <span className="bg-primary h-1 w-12"></span>
        About Me
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="border-outline-variant/10 bg-surface-container-lowest rounded border p-10 shadow-sm transition-shadow hover:shadow-md md:col-span-2">
          <p className="text-on-surface-variant mb-6 text-lg leading-relaxed">
            As a developer, I craft the solution through digital approaches. My
            approach transforms concepts into functional and purposeful digital
            products that seamlessly integrate technology. Leveraging the AI as
            a tool for a structured planning and development process that still
            paying attention to quality.
          </p>
        </div>

        <div className="bg-surface-container-low flex flex-col justify-between p-8">
          <div>
            <h3 className="text-on-surface mb-4 text-xl font-bold">Connect</h3>
            <p className="text-on-surface-variant mb-8 text-sm">
              Follow my journey across the digital space.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="#"
              className="bg-surface-container-lowest group hover:bg-primary flex items-center justify-between rounded p-3 transition-colors"
            >
              <span className="font-medium group-hover:text-white">
                LinkedIn
              </span>
              <span className="material-symbols-outlined group-hover:text-white">
                north_east
              </span>
            </Link>
            <Link
              href="#"
              className="bg-surface-container-lowest group hover:bg-primary flex items-center justify-between rounded p-3 transition-colors"
            >
              <span className="font-medium group-hover:text-white">GitHub</span>
              <span className="material-symbols-outlined group-hover:text-white">
                code
              </span>
            </Link>
            <Link
              href="#"
              className="bg-surface-container-lowest group hover:bg-primary flex items-center justify-between rounded p-3 transition-colors"
            >
              <span className="font-medium group-hover:text-white">
                Twitter
              </span>
              <span className="material-symbols-outlined group-hover:text-white">
                link
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
