import  { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    {
      name: "Backend",
      skills: ["Java", "Spring Boot", "Hibernate", "Spring Data JPA", "JUnit", "Mockito", "Gradle", "Maven"]
    },
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "JSP", "React", "Responsive Design"]
    },
    {
      name: "Database",
      skills: ["MySQL", "PostgreSQL", "H2", "SQL", "Database Design", "ORM"]
    },
    {
      name: "Tools & DevOps",
      skills: ["Git", "Postman", "IntelliJ IDEA", "VSCode", "Eclipse", "AWS", "Heroku", "CI/CD"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            My technical toolkit is built around Java and related technologies, with a focus on building 
            scalable and maintainable full-stack applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glassy rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-400">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="skill-item"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glassy rounded-xl p-6 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Experience Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: "Java", level: 90 },
              { name: "Spring Boot", level: 85 },
              { name: "Database Management", level: 80 },
              { name: "Frontend Development", level: 75 }
            ].map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full animate-pulse-slow"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  