import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'BrightKids - App',
            description: `A child-friendly mobile application designed to teach good manners and life skills through AI-generated stories, interactive quizzes, and engaging animations. The app personalizes storytelling based on children's interests and features real-time Text-to-Speech (TTS) narration with voice variations. The project follows an Agile development process, ensuring a seamless and immersive learning experience for children aged 3-7 years.`,
            image: 'brightkids.png',
            technologies: ['Python (Flask)', 'Flutter', 'Firebase'],
            githubUrl: 'https://github.com/hasandiii612',
            liveUrl: 'https://github.com/yohanl3/SDGP_Project.git'
            
        },
        {
            title: 'Real Time Ticketing System',
            description: `Designed and implemented a multi-threaded ticketing system using Java (Spring Boot) to simulate and handle the Producer-Consumer problem. Ensured synchronized ticket distribution with priority-based retrieval, vendor variations, and periodic ticket statistics reporting.`,
            image: 'tickets.png',
            technologies: ['Java (Spring Boot)', 'React.js'],
            githubUrl: 'https://github.com/hasandiii612/TicketingSystem.git'
        },
        {
            title: 'DizBot',
            description: `Developed Dizbot, an AI-powered Discord bot with a web dashboard. Users can log in via Discord OAuth2, manage bot commands, automate moderation, and fetch real-time server stats.`,
            image: 'bot.png',
            technologies: ['Python', 'React.js'],
            githubUrl: 'https://github.com/hasandiii612/DizBot.git'
        },
        {
            title: 'Reflekt [Ongoing]',
            description: `AI-assisted web-based journaling platform that allows users to securely write and manage journal entries. It includes authentication, CRUD operations, and future integration with AI features like sentiment analysis or journaling prompts.`,
            image: 'journal.png',
            technologies: ['Node.js', 'Express.js','React (Vite)', 'Supabase PostgreSQL'],
            githubUrl: 'https://github.com/DinilJayasuriya/Reflekt.git'
        },
        {
            title: 'Krafted',
            description: `Krafted is a digital platform designed to support and empower local artisans, especially those in Sri Lanka, by helping them showcase, manage, and sell their handmade products. The platform bridges the gap between traditional craftsmanship and the digital world, ensuring artisans can reach a broader audience while maintaining control over their creations.`,
            image: 'krafted.png',
            technologies: ['Figma'],
            githubUrl: 'https://github.com/hasandiii612'
        },
        {
            title: 'BrightKids - Marketing Website',
            description: `BrightKids is an AI-powered educational platform designed to make learning joyful, interactive, and personalized for children aged 3 to 7 years. The marketing website serves as the main gateway to attract parents, educators, and investors by showcasing the vision, features, and benefits of the BrightKids app.`,
            image: 'website.png',
            technologies: ['React (Vite)/ Tailwind CSS'],
            githubUrl: 'https://github.com/hasandiii612',
            liveUrl: 'https://www.brightkidsapp.com/'
        },

        {
            title: 'Plane Seat Management System',
            description: `The Plane Seat Management System was built to simulate and manage seat bookings on a flight using Java. The system allows users to view, book, cancel, and manage passenger seat assignments efficiently in a console-based interface.`,
            image: 'plane.png',
            technologies: ['Java'],
            githubUrl: 'https://github.com/hasandiii612'
        },
        {
            title: 'Beyond Books',
            description: `Created a reading companion platform that tracks goals and recommends personalized book suggestions based on reading history.`,
            image: 'book.png',
            technologies: ['Python', 'React.js'],
            githubUrl: 'https://github.com/hasandiii612'
        },
        {
            title: 'Progression System for University Students',
            description: `A console-based Python application that simulates a university progression outcome system, evaluating students based on their module credits and determining whether they:Progress, Progress (module trailer), Do not Progress – Module Retriever (Refer), Exclude
            This system reflects real-world university grading policies based on credit distribution across Pass, Defer, and Fail modules.`,
            image: 'university.png',
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
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 w-max snap-x snap-mandatory">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.liveUrl || '#'}
                                target={project.liveUrl ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="bg-neutral-900 rounded-lg overflow-hidden w-[350px] flex-shrink-0 shadow-md snap-start hover:ring-2 hover:ring-white transition"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Icon Style Image */}
                                <div className="flex justify-center pt-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>

                                {/* Content */}
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
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
