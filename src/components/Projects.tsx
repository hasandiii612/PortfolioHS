
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BrightKids - App',
      description: `A child-friendly mobile application designed to teach good manners and life skills through AI-generated stories, interactive quizzes, and engaging animations. The app personalizes storytelling based on children's interests and features real-time Text-to-Speech (TTS) narration with voice variations. The project follows an Agile development process, ensuring a seamless and immersive learning experience for children aged 3-7 years.`,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Python (Flask)', 'Flutter', 'Firebase'],
      githubUrl: 'https://github.com/hasandiii612'
    },
    {
      title: 'Real Time Ticketing System',
      description: `Designed and implemented a multi-threaded ticketing system using Java (Spring Boot) to simulate and handle the Producer-Consumer problem. Ensured synchronized ticket distribution with priority-based retrieval, vendor variations, and periodic ticket statistics reporting.`,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
      technologies: ['Java (Spring Boot)', 'React.js'],
      githubUrl: 'https://github.com/hasandiii612'
    },
    {
      title: 'DizBot',
      description: `Developed Dizbot, an AI-powered Discord bot with a web dashboard. Users can log in via Discord OAuth2, manage bot commands, automate moderation, and fetch real-time server stats. The bot handles chat automation, meme generation, and API-powered interactions using a Flask backend.`,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Python', 'React.js'],
      githubUrl: 'https://github.com/hasandiii612'
    },

    {
      title: 'Reflekt [Ongoing]',
      description: `A web-based journaling platform with AI-powered sentiment analysis, secure
authentication, and intuitive CRUD operations. Built with a React-based UI`,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Python', 'React.js'],
      githubUrl: 'https://github.com/hasandiii612'
    },

    {
      title: 'Krafted',
      description: `A high- fidelity mobile prototype developed, to bridge the gap between the local artisans and the global market to sell their products online.Key Features include,
 Clean, user-friendly mobile UI, Seamless user flow for artisans to showcase products.

 `,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Figma'],
      githubUrl: 'https://github.com/hasandiii612'
    },

    {
      title: 'BrightKids - Marketing Website',
      description: `A high- fidelity mobile prototype developed, to bridge the gap between the local artisans and the global market to sell their products online.Key Features include,
 Clean, user-friendly mobile UI, Seamless user flow for artisans to showcase products.

 `,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Figma'],
      githubUrl: 'https://github.com/hasandiii612'
    },


    {
      title: 'Plane Seat Management System',
      description: `Developed Dizbot, an AI-powered Discord bot with a web dashboard. Users can log in via Discord OAuth2, manage bot commands, automate moderation, and fetch real-time server stats. The bot handles chat automation, meme generation, and API-powered interactions using a Flask backend.`,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Python', 'React.js'],
      githubUrl: 'https://github.com/hasandiii612'
    },
    {
      title: 'Beyond Books',
      description: `Developed Dizbot, an AI-powered Discord bot with a web dashboard. Users can log in via Discord OAuth2, manage bot commands, automate moderation, and fetch real-time server stats. The bot handles chat automation, meme generation, and API-powered interactions using a Flask backend.`,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Python', 'React.js'],
      githubUrl: 'https://github.com/hasandiii612'
    },

    {
      title: 'Progression System for University Students',
      description: `Developed Dizbot, an AI-powered Discord bot with a web dashboard. Users can log in via Discord OAuth2, manage bot commands, automate moderation, and fetch real-time server stats. The bot handles chat automation, meme generation, and API-powered interactions using a Flask backend.`,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      technologies: ['Python', 'React.js'],
      githubUrl: 'https://github.com/hasandiii612'
    }




  ];

  return (
      <section id="projects" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
              className="text-4xl sm:text-5xl font-serif mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto">
            <div className="flex gap-6 w-max">
              {projects.map((project, index) => (
                  <motion.div
                      key={index}
                      className="bg-neutral-900 rounded-lg overflow-hidden w-[350px] flex-shrink-0 shadow-md"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <div className="p-5 flex flex-col h-full">
                      <h3 className="text-xl font-serif mb-3">{project.title}</h3>
                      <p className="text-neutral-400 text-sm mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>

                      <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm mt-auto"
                      >
                        <Github size={18} />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Projects;
