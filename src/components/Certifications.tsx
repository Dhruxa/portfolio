import  { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Database, Code, BarChart } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      id: 1,
      title: "Full Stack Java Developer Certification",
      organization: "JSpiders – Basavanagudi, Bangalore",
      skills: [
        "Core Java: OOP, Collections, Exception Handling, Java 8 (Streams, Lambdas)",
        "Advanced Java: JDBC, Servlets, JSP, MVC Architecture",
        "Web Technologies: HTML, CSS, JavaScript, Bootstrap, JSP, JSTL",
        "Frameworks: Hibernate ORM (Annotation & XML Config)",
        "Database: MySQL – CRUD operations, joins, subqueries",
        "Build Tool: Gradle – Build configuration, WAR packaging",
        "Project Work: End-to-end full stack applications using Servlets, JSP, Hibernate, and MySQL"
      ],
      icon: <Code className="h-12 w-12 text-indigo-400" />,
      color: "border-indigo-500"
    },
    {
      id: 2,
      title: "Data Analyst Certification",
      organization: "Edulyt India (Online)",
      skills: [
        "Excel (advanced formulas, pivot tables, data wrangling)",
        "SQL (joins, filtering, aggregation, subqueries)",
        "Python (Pandas, NumPy, Matplotlib, Seaborn)",
        "Power BI & Tableau for dashboard creation",
        "Statistics: Descriptive analysis, correlation, hypothesis testing",
        "Projects: Sales Dashboard (Power BI), Customer Retention Analysis (Python), HR Attrition Report (Excel + SQL)"
      ],
      icon: <BarChart className="h-12 w-12 text-green-400" />,
      color: "border-green-500"
    }
  ];

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
    <section id="certifications" className="py-20 bg-gray-900/50">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Professional certifications that have enhanced my knowledge and skills
            in software development and data analysis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className={`glassy rounded-xl p-6 border-l-4 ${cert.color}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gray-800">
                  {cert.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-indigo-400 mb-4 flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    {cert.organization}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-300">Key Skills & Topics:</h4>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      {cert.skills.map((skill, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-2"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
  