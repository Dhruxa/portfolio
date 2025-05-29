import  { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-stars bg-cover bg-center bg-no-repeat opacity-40"></div>
      
      <div className="section-container flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
            <img 
              src="/dhruva.png" 
              alt="Dhruva Choudhari" 
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-800"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Dhruva Choudhari
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Java Full Stack Developer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href="https://github.com/dhruxa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/dhruvachoudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:dhruva007c@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>Contact Me</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-10"
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
  