import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-transparent">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6">
        <div className="space-y-8 md:space-y-16">
          <Hero />
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
            <About />
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
            <Projects />
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
