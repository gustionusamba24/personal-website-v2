import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[70vh] max-w-7xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Resume
        </h1>
      </main>
      <Footer />
    </>
  );
}
