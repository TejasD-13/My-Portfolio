import React from "react";
import { motion } from "framer-motion";

/* ================= TECH ICONS (LOCAL SVGs) ================= */
import Java from "../assets/tech/Java.svg?react";
import JavaScript from "../assets/tech/JavaScript.svg?react";
import Python from "../assets/tech/Python.svg?react";
import ReactIcon from "../assets/tech/React.svg?react";
import HTML from "../assets/tech/HTML5.svg?react";
import Tailwind from "../assets/tech/Tailwind CSS.svg?react";
import Node from "../assets/tech/NodeJS.svg?react";
import Express from "../assets/tech/Express.svg?react";
import MySQL from "../assets/tech/MySQL.svg?react";
import MongoDB from "../assets/tech/MongoDB.svg?react";
import Pandas from "../assets/tech/Pandas.svg?react";
import NumPy from "../assets/tech/NumPy.svg?react";
import Scikit from "../assets/tech/scikit-learn.svg?react";
import TensorFlow from "../assets/tech/TensorFlow.svg?react";
import GitHub from "../assets/tech/GitHub.svg?react";
import Vercel from "../assets/tech/Vercel.svg?react";
import Figma from "../assets/tech/Figma.svg?react";
import { Brain, Database } from "lucide-react";


/* ================= ASSETS ================= */
import LeetCodeImage from "../assets/leetcode.png";
import LeetCodeHeatmap from "../assets/leetcode_heatmap.png";

const AboutPage = () => {
  const techStack = [
    { name: "Java", Icon: Java },
    { name: "JavaScript", Icon: JavaScript },
    { name: "Python", Icon: Python },

    { name: "React", Icon: ReactIcon },
    { name: "HTML", Icon: HTML },
    { name: "Tailwind CSS", Icon: Tailwind },

    { name: "Node.js", Icon: Node },
    { name: "Express", Icon: Express },

    { name: "MySQL", Icon: MySQL },
    { name: "MongoDB", Icon: MongoDB },

    { name: "Pandas", Icon: Pandas },
    { name: "NumPy", Icon: NumPy },
    { name: "Scikit-learn", Icon: Scikit },
    { name: "TensorFlow", Icon: TensorFlow },
    { name: "NLP", Icon: Brain, color: "#ffdb70", isConcept: true },
   { name: "RAG", Icon: Database, color: "#ffdb70", isConcept: true },

    { name: "GitHub", Icon: GitHub },
    { name: "Vercel", Icon: Vercel },
    { name: "Figma", Icon: Figma },
    
  ];

  return (
    <div className="space-y-20">

      {/* ================= ABOUT ME ================= */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full mb-8" />

        <div className="space-y-5 text-gray-300 leading-relaxed text-[15px] max-w-3xl">
          <p>
            I’m a{" "}
            <span className="text-[#ffdb70] font-medium">
              third-year Computer Engineering student
            </span>{" "}
            with a strong interest in building real-world, production-ready
            software.
          </p>

          <p>
            I have hands-on experience in{" "}
            <span className="text-white font-medium">
              full-stack development and applied artificial intelligence
            </span>
            , including Deep Learning, Natural Language Processing (NLP), and
            Retrieval-Augmented Generation (RAG) systems.
          </p>

          <p>
            Through my projects, I focus on writing{" "}
            <span className="text-white font-medium">
              clean, maintainable, and scalable code
            </span>{" "}
            while following industry best practices.
          </p>

          <p>
            Currently seeking{" "}
            <span className="text-white font-medium border-b-2 border-[#ffdb70]">
              internship opportunities
            </span>{" "}
            where I can learn, contribute, and grow as a software engineer.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {[
            {
              title: "Problem Solver",
              desc: "Strong analytical mindset focused on breaking down complex problems into efficient solutions.",
              emoji: "💡",
            },
            {
              title: "Hands-on Experience",
              desc: "Practical experience with full-stack applications and AI-driven systems.",
              emoji: "🧠",
            },
            {
              title: "Strong Foundation",
              desc: "Solid grasp of computer engineering fundamentals and data structures.",
              emoji: "🎓",
            },
            {
              title: "Growth Mindset",
              desc: "Continuously learning new technologies and improving development practices.",
              emoji: "📈",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="
                bg-[#1e1e1f] border border-[#383838]
                rounded-xl p-6 transition-all
                hover:border-[#ffdb70]/50
                hover:shadow-[0_0_30px_rgba(255,219,112,0.15)]
              "
            >
              <div className="text-[#ffdb70] text-xl mb-3">{card.emoji}</div>
              <h4 className="text-white font-semibold mb-2">
                {card.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-2">
          Technology Stack
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full mb-8" />

        <div className="bg-[#252525] p-6 rounded-2xl border border-white/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="
              grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
              lg:grid-cols-6 xl:grid-cols-7
              gap-6 justify-items-center
            "
          >
            {techStack.map((tech) => (
              <TechIcon key={tech.name} {...tech} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= LEETCODE ================= */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-2">
          LeetCode Progress
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full mb-8" />

        <div className="bg-[#252525] p-6 rounded-2xl border border-white/5 space-y-10">
          <div className="w-full overflow-x-auto">
            <img
              src={LeetCodeHeatmap}
              alt="LeetCode Activity Heatmap"
              className="w-full min-w-[700px] rounded-xl border border-white/5"
            />
          </div>

          <div className="flex justify-center">
            <img
              src={LeetCodeImage}
              alt="LeetCode Stats"
              className="w-full max-w-md rounded-xl border border-white/5"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= TECH ICON COMPONENT ================= */

const TechIcon = ({ name, Icon }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
    whileHover={{ scale: 1.12 }}
    className="
      relative group flex flex-col items-center gap-2
      p-4 rounded-xl bg-[#1e1e1f]
      border border-[#2f2f2f]
      hover:border-[#ffdb70]/50
      hover:shadow-[0_0_25px_rgba(255,219,112,0.15)]
      transition-all w-full max-w-[96px]
    "
  >
    <Icon className="w-8 h-8" />

    <span className="text-xs text-gray-400 group-hover:text-[#ffdb70]">
      {name}
    </span>

    {/* Tooltip */}
    <div
      className="
        absolute -top-9 opacity-0 scale-95
        group-hover:opacity-100 group-hover:scale-100
        transition-all bg-black text-white text-[10px]
        px-2 py-1 rounded-md pointer-events-none
      "
    >
      {name}
    </div>
  </motion.div>
);

export default AboutPage;
