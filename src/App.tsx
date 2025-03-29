
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor'; // Import the CustomCursor component

function App() {
    return (
        <div className="bg-black min-h-screen">
            <CustomCursor /> {/* Add the CustomCursor component here */}
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