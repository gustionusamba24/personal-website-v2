import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="mx-auto mb-32 max-w-7xl px-6">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-24">
        <div className="order-2 flex-1 md:order-1">
          <h1 className="text-on-surface mb-6 text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
            Hi, I&apos;m <span className="text-primary">Gustio Nusamba</span>
          </h1>

          <p className="text-on-surface-variant mb-10 max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
            Crafting solution through digital approach, AI-assisted development.
            Based on Yogyakarta, Indonesia, bringing ideas to life through code
            and creativity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="bg-primary-container text-on-primary-container flex items-center gap-2 rounded px-8 py-4 text-sm font-bold transition-all hover:opacity-90 active:scale-95"
            >
              View Resume
              <span className="material-symbols-outlined text-lg">
                download
              </span>
            </Link>
            <Link
              href="/about"
              className="border-outline-variant/20 text-on-surface hover:bg-surface-container-low rounded border px-8 py-4 text-sm font-bold transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="order-1 shrink-0 md:order-2">
          <div className="relative">
            <div className="kinetic-gradient absolute inset-0 rounded-full opacity-20 blur-3xl"></div>
            <Image
              src="gustio-nusamba.webp"
              alt="Gustio Nusamba"
              className="relative z-10 h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl md:h-80 md:w-80"
              width={320}
              height={320}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
