
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;