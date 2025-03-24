
import { motion } from 'framer-motion';

const Skills = () => {
  const programmingLanguages = [
    { name: 'Python', proficiency: 85 },
    { name: 'React', proficiency: 80 },
    { name: 'Java', proficiency: 85 },
    { name: 'HTML/CSS', proficiency: 90 },
    { name: 'TypeScript', proficiency: 50 }
  ];

  const otherSkills = [
    'React Native',
    'Node.js',
    'Express',
    'Spring Boot',
    'Next.js',
    'MongoDB',
    'MySQL',
    'Git',
    'RESTful API',
    'Firebase'
  ];

  return (
      <section id="skills" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
              className="text-4xl sm:text-5xl font-serif mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>

          <motion.p
              className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            I have experience with a variety of languages, frameworks, and tools. Here are some of my core technical skills:
          </motion.p>

          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6">Core Languages</h3>
            <div className="space-y-4">
              {programmingLanguages.map((skill, index) => (
                  <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-neutral-400">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                          className="h-full bg-neutral-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl mb-6">Other Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-4">
              {otherSkills.map((skill, index) => (
                  <motion.span
                      key={skill}
                      className="px-4 py-2 bg-neutral-800 rounded-lg text-neutral-300 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;
