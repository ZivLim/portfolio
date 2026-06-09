import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import MoreProjects from './components/MoreProjects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <FeaturedProjects />
        <MoreProjects />
        <Divider />
        <Experience />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
