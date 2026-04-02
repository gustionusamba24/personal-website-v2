import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900"
        >
          Gustio Nusamba
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b-2 border-transparent pb-1 text-sm font-medium tracking-tight text-zinc-600 transition-colors hover:text-orange-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            className="rounded p-2 text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
