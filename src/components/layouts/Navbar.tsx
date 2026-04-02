'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BOTTOM_NAV_LINKS, NAV_LINKS } from '@/constants/route';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 z-50 hidden w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md md:block">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-zinc-900"
          >
            Gustio Nusamba
          </Link>

          <div className="ml-auto flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`border-b-2 pb-1 text-sm font-medium tracking-tight transition-colors ${
                    isActive
                      ? 'border-orange-600 text-orange-600'
                      : 'border-transparent text-zinc-600 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 z-50 w-full border-t border-zinc-200/80 bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-4">
          {BOTTOM_NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-orange-600'
                    : 'text-zinc-600 hover:text-orange-600'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
