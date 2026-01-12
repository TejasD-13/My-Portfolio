import React from 'react';
import { Code, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const LeetCodeSection = () => {
    const stats = {
        total: 342,
        easy: 145,
        medium: 158,
        hard: 39,
    };

    const percentage = Math.round((stats.total / 3000) * 100);

    return (
        <section id="leetcode" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-primary text-4xl">.</span> LeetCode Progress
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Progress Ring */}
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center">
                        <div className="relative w-56 h-56 flex items-center justify-center">
                            {/* Outer Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle
                                    cx="112"
                                    cy="112"
                                    r="100"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="12"
                                />
                                <circle
                                    cx="112"
                                    cy="112"
                                    r="100"
                                    fill="none"
                                    stroke="url(#progressGradient)"
                                    strokeWidth="12"
                                    strokeDasharray={`${percentage * 6.28} ${628 - percentage * 6.28}`}
                                    strokeLinecap="round"
                                    className="transition-all duration-1000"
                                />
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#fbbf24" />
                                        <stop offset="100%" stopColor="#f59e0b" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Center Content */}
                            <div className="text-center z-10">
                                <div className="text-5xl font-bold text-white">{stats.total}</div>
                                <div className="text-sm text-gray-400 mt-1">Problems Solved</div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Breakdown */}
                    <div className="flex flex-col gap-4">
                        <StatCard label="Easy" count={stats.easy} color="bg-green-500" />
                        <StatCard label="Medium" count={stats.medium} color="bg-yellow-500" />
                        <StatCard label="Hard" count={stats.hard} color="bg-red-500" />

                        <a
                            href="https://leetcode.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl font-bold text-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            <Code size={18} />
                            <span>View LeetCode Profile</span>
                            <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const StatCard = ({ label, count, color }) => (
    <div className="glass-card p-5 rounded-xl flex items-center justify-between group hover:border-primary/30 transition-colors">
        <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${color}`}></div>
            <div>
                <div className="text-sm text-gray-400">{label}</div>
                <div className="text-2xl font-bold text-white">{count}</div>
            </div>
        </div>
        <Award className="text-gray-600 group-hover:text-primary transition-colors" size={24} />
    </div>
);

export default LeetCodeSection;
