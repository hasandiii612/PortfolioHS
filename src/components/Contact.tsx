import { Github, Linkedin } from 'lucide-react';
import contactImage from '../assets/final.jpg';

const Contact = () => {
    return (
        <section id="contact" className="text-white bg-black py-16 px-6 md:px-24">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Text Section */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                        Let&apos;s work <span className="italic">together</span>
                    </h2>
                </div>

                {/* Right Image */}
                <div className="mt-6">
                    <img src={contactImage} alt="Hasandí Seelarathne" />
                </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-10 mt-12 text-sm md:text-base">
                <div className="space-y-8">
                    <div>
                        <p className="text-gray-400 uppercase tracking-widest">Address</p>
                        <p>No. 61 2nd Lane, Ratmalana</p>
                    </div>
                    <div>
                        <p className="text-gray-400 uppercase tracking-widest">Phone</p>
                        <p>(94) 777 814 367</p>
                    </div>
                    <div>
                        <p className="text-gray-400 uppercase tracking-widest">Email</p>
                        <p>hasandi123cs@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-gray-400 uppercase tracking-widest">Connect</p>
                        <div className="flex gap-6 mt-2">
                            <a
                                href="https://github.com/hasandiii612"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hasandi-seelarathne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
