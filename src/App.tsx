import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 dark:bg-gray-950 text-gray-100 relative overflow-hidden">
        <StarField />
        
        <div className="fixed inset-0 bg-space bg-cover bg-center bg-no-repeat opacity-30 z-0" 
             style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        
        <div className="relative z-10">
          <Header />
          
          <main>
            <Hero />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </motion.div>
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
  