import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Database, Users, FileText, Music, MessageCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "News Portal Application",
    description: "A comprehensive news portal with role-based access including Admin, Editor, Publisher, and User roles. Features public and private REST APIs with a JSP frontend and DAO-based login system.",
    tech: ["Spring Boot", "JSP", "H2 Database", "REST API", "Authentication"],
    icon: <FileText className="h-10 w-10 text-indigo-400" />,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Complete employee management solution with CRUD operations, pagination, filtering, and an admin panel with secure login.",
    tech: ["Spring Boot", "MySQL", "JSP", "Spring Security", "JPA"],
    icon: <Users className="h-10 w-10 text-green-400" />,
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Blog Application",
    description: "Modern blog platform with token-based authentication using JWT, allowing users to create posts and manage comments securely.",
    tech: ["Spring Boot", "JWT", "PostgreSQL", "REST API", "Spring Security"],
    icon: <Database className="h-10 w-10 text-purple-400" />,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: "Music streaming application with features like playlist creation, music player, and user profiles.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
    icon: <Music className="h-10 w-10 text-green-400" />,
    gradient: "from-green-600 to-emerald-500"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat platform allowing users to communicate in channels or direct messages with media sharing capabilities.",
    tech: ["Spring Boot", "WebSocket", "MongoDB", "React", "JWT"],
    icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
    gradient: "from-blue-600 to-sky-500"
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Here are some of the key projects I've developed, showcasing my skills in
            full-stack Java development and web application architecture.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glassy rounded-xl overflow-hidden"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://github.com/dhruxa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" /> 
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" /> 
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500" 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
  