import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingThemeToggle from './components/FloatingThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container w-screen min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <FloatingThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
