import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      period: '2009 - 2022',
      institution: 'Musaeus College',
      description: 'Primary and Secondary Education',
      details: 'Completed comprehensive primary and secondary education, building a strong academic foundation.'
    },
    {
      period: '2023 - 2027',
      institution: 'University of Westminster, UK',
      description: 'Undergraduate Studies (In Progress)',
      details: 'Currently pursuing undergraduate studies, focusing on developing advanced technical skills and practical knowledge.'
    },
    {
      period: '2020 - 2021',
      institution: 'British Computer Society, UK',
      details: 'Completed BCS Level 4 Certificate in IT offered by the British Computer Society of UK.'
    },
    {
      period: '2024 - ',
      institution: 'Chartered Institute of Management Accountants (CIMA)',
      description: 'Reading',
      details: 'Currently reading for the Certificate Level of CIMA as a part time student'
    }
  ];

  return (
      <section id="education" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
              className="text-4xl sm:text-6xl font-tomorrow mb-16 font-light text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            Education Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line (hidden on small screens) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-800" />

            {/* Education items */}
            {educationData.map((item, index) => (
                <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Content */}
                  <div
                      className={`w-full md:w-5/12 ${
                          index % 2 === 0 ? 'md:text-right text-left' : 'md:text-left text-left'
                      }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-tektur mb-2">{item.institution}</h3>
                    <p className="text-neutral-400 mb-1 font-tektur">{item.period}</p>
                    {item.description && (
                        <p className="text-lg text-neutral-300 mb-2 font-tomorrow">{item.description}</p>
                    )}
                    <p className="text-neutral-400 text-base md:text-lg font-quantico">{item.details}</p>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-800 rounded-full border-2 border-neutral-700 hidden md:block" />

                  {/* Spacer for layout on large screens */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Education;
