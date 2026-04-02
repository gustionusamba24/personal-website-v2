import AboutBentoSection from '@/components/home/AboutBentoSection';
import HeroSection from '@/components/home/HeroSection';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <HeroSection />
        <AboutBentoSection />
      </main>
      <Footer />
    </>
  );
}
