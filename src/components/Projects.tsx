import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
            image: 'Krafted_1.png',
            technologies: ['Figma'],
            figmaUrl: 'https://www.figma.com/proto/XdHiIs41XTMjWocO1ATUfJ/Krafted-Prototype?page-id=0%3A1&node-id=1-273&viewport=-14%2C350%2C0.09&t=JyZKwDKGriRcQh6m-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A273'
        },
        {
            title: 'BrightKids Prototype',
            description: `BrightKids is an AI-powered educational platform designed to make learning joyful, interactive, and personalized for children aged 3 to 7 years. The High-Fidelity Prototype serves designed using Figma, was used to create the Frontend of the App, which serves as the User Interface for the App.`,
            image: 'BK_Pro.png',
            technologies: ['React (Vite)/ Tailwind CSS'],
            figmaUrl: 'https://www.figma.com/proto/5QuWGgCy4vLc4PAwvgTbgQ/BrightKids-High-Fid-Prototype?page-id=0%3A1&node-id=612-325&viewport=231%2C361%2C0.13&t=j4m22qp8m6yoKBc0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1'
        },
        {
            title: 'BrightKids Website',
            description: `BrightKids is an AI-powered educational platform designed to make learning joyful, interactive, and personalized for children aged 3 to 7 years. The marketing website serves as the main gateway to attract parents, educators, and investors by showcasing the vision, features, and benefits of the BrightKids app.`,
            image: 'website.png',
            technologies: ['React (Vite)/ Tailwind CSS'],
            githubUrl: 'https://github.com/hasandiii612',
            liveUrl: 'https://www.brightkidsapp.com/'
        },
        {
            title: 'Plane Seat Manager',
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
            title: 'Student Progression System',
            description: `A console-based Python application that simulates a university progression outcome system, evaluating students based on their module credits and determining whether they:Progress, Progress (module trailer), Do not Progress – Module Retriever (Refer), Exclude
            This system reflects real-world university grading policies based on credit distribution across Pass, Defer, and Fail modules.`,
            image: 'university.png',
            technologies: ['Python', 'React.js'],
            githubUrl: 'https://github.com/hasandiii612'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-black text-white font-quantico ">
            <div className="max-w-8xl mx-auto px-6 ">
                <motion.h2
                    className="text-4xl sm:text-5xl font-tomorrow mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>

                {/* Horizontal Scroll */}
                <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
                    <div className="flex gap-6 w-max snap-x snap-mandatory">
                    {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.liveUrl || '#'}
                                target={project.liveUrl ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="bg-neutral-900 rounded-lg overflow-hidden w-[350px] h-[500px] flex-shrink-0 shadow-md snap-start hover:ring-2 hover:ring-white transition flex flex-col"
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
                                <div className="p-5 flex flex-col flex-grow">
                                    {/* Title with fixed height to ensure consistent spacing */}
                                    <h3 className="text-xl font-tektur mb-4 text-center h-8 flex items-center justify-center">
                                        {project.title}
                                    </h3>

                                    {/* Fixed height container for description to ensure consistent layout */}
                                    <div className="h-56 overflow-y-auto mb-4">
                                        <p className="text-neutral-400 text-sm text-justify">{project.description}</p>
                                    </div>

                                    <div className="mt-auto">
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

                                        <div className="flex flex-wrap gap-4">
                                            {/* Figma link for Krafted and BrightKids Prototype */}
                                            {project.figmaUrl && (
                                                <a
                                                    href={project.figmaUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm"
                                                >
                                                    <ExternalLink size={18} />
                                                    <span>View Figma Prototype</span>
                                                </a>
                                            )}

                                            {/* GitHub link for projects with githubUrl */}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm"
                                                >
                                                    <Github size={18} />
                                                    <span>View on GitHub</span>
                                                </a>
                                            )}

                                            {/* Live website link for BrightKids Marketing Website */}
                                            {project.liveUrl && project.title === 'BrightKids Website' && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm mt-2"
                                                >
                                                    <ExternalLink size={18} />
                                                    <span>Visit Website</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
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

