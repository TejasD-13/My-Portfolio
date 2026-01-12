import React from 'react';
import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeSection = () => {
    return (
        <section id="resume" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-primary text-4xl">.</span> Resume
                </h2>

                <div className="glass-card p-10 rounded-2xl text-center border-2 border-white/10 hover:border-primary/30 transition-all">
                    <div className="flex flex-col items-center gap-6">
                        <div className="p-6 bg-primary/10 rounded-full">
                            <FileText size={48} className="text-primary" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Download My Resume</h3>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Get a comprehensive overview of my skills, experience, and education in PDF format.
                            </p>
                        </div>

                        <button className="group mt-4 py-4 px-8 bg-primary text-background font-bold text-lg rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:scale-105">
                            <Download size={20} className="group-hover:animate-bounce" />
                            <span className="uppercase tracking-wider">Download Resume</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ResumeSection;
