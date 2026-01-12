import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Brain, Database } from "lucide-react";

import LeetCodeImage from '../assets/leetcode.png';
import LeetCodeHeatmap from '../assets/leetcode_heatmap.png';

const AboutPage = () => {
    const techStack = [
  // Programming Languages
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },

  // Frontend
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },

  // Databases
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  // Data Science & ML
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },

  // AI Concepts (no official icons → semantic icons)
  { name: "NLP", icon: Brain, color: "#ffdb70" },
  { name: "RAG", icon: Database, color: "#ffdb70" },

  // Tools & Platforms
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];


    return (
        <div className="space-y-10">
           <div>
  {/* Heading */}
  <h2 className="text-3xl font-bold text-white mb-2">
    About Me
  </h2>

  {/* Golden underline */}
  <div className="w-12 h-1 bg-[#ffdb70] rounded-full mb-8"></div>

  {/* Text Content */}
  <div className="space-y-5 text-gray-300 leading-relaxed text-[15px] max-w-3xl">
    <p>
      I’m a{" "}
      <span className="text-[#ffdb70] font-medium">
        third-year Computer Engineering student
      </span>{" "}
      with a strong interest in building real-world, production-ready software.
      My journey in tech is driven by curiosity, problem-solving, and a desire
      to create meaningful solutions through code.
    </p>

    <p>
      I have hands-on experience in{" "}
      <span className="text-white font-medium">
        full-stack development and applied artificial intelligence
      </span>
      , including Deep Learning, Natural Language Processing (NLP), and
      Retrieval-Augmented Generation (RAG) systems. I enjoy working on projects
      that combine solid backend logic with intuitive user interfaces and
      practical AI applications.
    </p>

    <p>
      Through my projects, I’ve developed a strong foundation in writing{" "}
      <span className="text-white font-medium">
        clean, maintainable code
      </span>{" "}
      and following best practices to ensure reliability and performance.
    </p>

    <p>
      Currently, I’m seeking{" "}
      <span className="text-white font-medium border-b-2 border-[#ffdb70]">
        internship opportunities
      </span>{" "}
      where I can contribute my skills, learn from experienced professionals,
      and continue growing as a developer.
    </p>
  </div>

  {/* Feature Cards */}
  <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-6
    mt-12
    max-w-4xl
  ">
    {/* Card 1 */}
    <div className="
      bg-[#1e1e1f]
      border border-[#383838]
      rounded-xl
      p-6
      transition-all
      hover:border-[#ffdb70]/50
      hover:shadow-[0_0_30px_rgba(255,219,112,0.15)]
    ">
      <div className="text-[#ffdb70] text-xl mb-3">💡</div>
      <h4 className="text-white font-semibold mb-2">
        Problem Solver
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        Engineering mindset focused on breaking down complex problems and
        building efficient, practical solutions.
      </p>
    </div>

    {/* Card 2 */}
    <div className="
      bg-[#1e1e1f]
      border border-[#383838]
      rounded-xl
      p-6
      transition-all
      hover:border-[#ffdb70]/50
      hover:shadow-[0_0_30px_rgba(255,219,112,0.15)]
    ">
      <div className="text-[#ffdb70] text-xl mb-3">🧠</div>
      <h4 className="text-white font-semibold mb-2">
        Hands-on Experience
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        Real-world experience in full-stack development and AI systems,
        including Deep Learning, NLP, and RAG pipelines.
      </p>
    </div>

    {/* Card 3 */}
    <div className="
      bg-[#1e1e1f]
      border border-[#383838]
      rounded-xl
      p-6
      transition-all
      hover:border-[#ffdb70]/50
      hover:shadow-[0_0_30px_rgba(255,219,112,0.15)]
    ">
      <div className="text-[#ffdb70] text-xl mb-3">🎓</div>
      <h4 className="text-white font-semibold mb-2">
        Strong Foundation
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        Solid understanding of computer engineering fundamentals, data
        structures, and modern development practices.
      </p>
    </div>

    {/* Card 4 */}
    <div className="
      bg-[#1e1e1f]
      border border-[#383838]
      rounded-xl
      p-6
      transition-all
      hover:border-[#ffdb70]/50
      hover:shadow-[0_0_30px_rgba(255,219,112,0.15)]
    ">
      <div className="text-[#ffdb70] text-xl mb-3">📈</div>
      <h4 className="text-white font-semibold mb-2">
        Growth Mindset
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        Continuously learning new technologies, improving skills, and adapting
        to evolving challenges in tech.
      </p>
    </div>
  </div>
</div>


            {/* Technology Stack */}
            {/* Technology Stack */}
<div className="mt-20">
  {/* Heading */}
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-white mb-2">
      Technology Stack
    </h2>
    <div className="w-12 h-1 bg-[#ffdb70] rounded-full"></div>
  </div>

  <div className="bg-[#252525] p-6 rounded-2xl border border-white/5">
    <div className="
    grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center ">
      {techStack.map((tech) => (
        <TechIcon key={tech.name} {...tech} />
      ))}
    </div>
  </div>
</div>


            {/* LeetCode Progress */}
         {/* LeetCode Progress */}
<div className="mt-20">
  {/* Heading */}
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-white mb-2">
      LeetCode Progress
    </h2>
    <div className="w-12 h-1 bg-[#ffdb70] rounded-full"></div>
  </div>

  <div
    className="
      bg-[#252525]
      p-6
      rounded-2xl
      border border-white/5
      space-y-10
    "
  >
    {/* Heatmap Image */}
    <div className="w-full overflow-x-auto">
      <img
        src={LeetCodeHeatmap}
        alt="LeetCode Activity Heatmap"
        className="
          w-full
          min-w-[700px]
          object-contain
          rounded-xl
          border border-white/5
        "
      />
    </div>

    {/* Stats Section */}
    <div className="flex justify-center items-center">
  <img
    src={LeetCodeImage}
    alt="LeetCode Stats"
    className="
      w-full
      max-w-md
      object-contain
      rounded-xl
      border border-white/5
    "
  />
</div>

  </div>
</div>

        </div>
    );
};

const TechIcon = ({ name, icon: Icon, color }) => (
  <div className="
    flex flex-col items-center gap-2 p-4 rounded-xl
    bg-[#1e1e1f]
    border border-[#2f2f2f]
    hover:border-[#ffdb70]/50
    hover:shadow-[0_0_25px_rgba(255,219,112,0.15)]
    transition-all
    group
    cursor-default
    w-full max-w-[96px]
  ">
    <Icon
      size={30}
      style={{ color }}
      className="group-hover:scale-110 transition-transform"
    />
    <span className="text-xs text-gray-400 group-hover:text-[#ffdb70] transition-colors text-center">
      {name}
    </span>
  </div>
);




export default AboutPage;
