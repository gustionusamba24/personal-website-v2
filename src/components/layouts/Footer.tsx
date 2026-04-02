import Link from 'next/link';

import { SOCIAL_LINKS } from '@/constants/route';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 md:flex-row">
        <p className="mb-4 text-[14px] font-normal text-zinc-500 md:mb-0">
          Gustio Nusamba © 2026.
        </p>
        <div className="flex gap-8">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] font-normal text-zinc-500 transition-all duration-200 hover:text-orange-600 hover:underline hover:underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
