export interface NavLink {
  label: string;
  href: string;
}

export interface BottomNavLink extends NavLink {
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

// Main Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
];

// Bottom Navigation Links for Mobile
export const BOTTOM_NAV_LINKS: BottomNavLink[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Projects', href: '/projects', icon: 'work' },
  { label: 'Resume', href: '/resume', icon: 'description' },
  { label: 'About', href: '/about', icon: 'person' },
];

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/gustio-nusamba/' },
  { name: 'GitHub', url: 'https://github.com/gustionusamba24' },
  { name: 'Instagram', url: 'https://www.instagram.com/gustiosmb/' },
  { name: 'Medium', url: 'https://medium.com/@gustio.n' },
];
