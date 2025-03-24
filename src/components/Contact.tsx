

const Contact = () => {
    return (
        <section id="contact" className="text-white bg-black py-16 px-6 md:px-24">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Text Section */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-light mb-2">Let's work</h2>
                    <h2 className="italic text-4xl md:text-5xl font-light">together</h2>
                </div>

                <div>
                    <img
                        src="/profile.png"
                        alt="workspace"
                        className="rounded-xl w-full object-cover"
                    />
                </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-10 mt-12 border-t border-gray-700 pt-8 text-sm md:text-base">
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
                </div>
            </div>
        </section>
    );
};

export default Contact;