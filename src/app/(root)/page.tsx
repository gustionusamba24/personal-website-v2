import AboutBentoSection from '@/components/home/AboutBentoSection';
import HeroSection from '@/components/home/HeroSection';

export default function Home() {
  return (
    <main className="pt-32 pb-24">
      <HeroSection />
      <AboutBentoSection />
    </main>
  );
}
