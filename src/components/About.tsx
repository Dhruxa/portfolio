import  { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Coffee } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="relative py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-lg text-gray-300 mb-6">
              I am a Java Full Stack Developer experienced in building scalable and secure web applications using 
              Spring Boot, Hibernate, JSP, HTML, CSS, JavaScript, and MySQL. My expertise includes RESTful API design 
              and frontend development with JSP or React.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Code />, title: "Frontend Development", text: "Creating responsive and interactive user interfaces" },
                { icon: <Server />, title: "Backend Solutions", text: "Building robust server-side applications" },
                { icon: <Database />, title: "Database Design", text: "Optimizing data structures and queries" },
                { icon: <Coffee />, title: "Java Expertise", text: "Core Java and enterprise frameworks" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="glassy rounded-lg p-4 text-center"
                >
                  <div className="flex justify-center mb-3 text-indigo-400">
                    {item.icon}
                  </div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-50 blur-lg"></div>
              <div className="relative glassy rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxzcGFjZSUyMGdhbGF4eSUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODUxNDcyNnww&ixlib=rb-4.1.0" 
                  alt="Space-themed background" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-t from-gray-900/90 to-gray-900/40">
                  <h3 className="text-2xl font-bold mb-4 text-white">Expertise</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span>Full Stack Java Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span>Spring Boot & Hibernate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span>RESTful API Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span>Database Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span>DevOps & Cloud Deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  