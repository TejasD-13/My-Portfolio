import React from "react";
import { Github, ExternalLink } from "lucide-react";

import imgCluster from "../assets/Projects/AI-img-cluster.png";
import Wanderlust from "../assets/Projects/Wanderlust.png";
import ResumeBuilder from "../assets/Projects/resumebuilder.png";
import RAGPDF from "../assets/Projects/PDF-RAG.png";
import WeatherApp from "../assets/Projects/WeatherApp.png";
import MovieRecommender from "../assets/Projects/MovieRecommendation.png";
import Netflix from "../assets/Projects/Netflix.png";

const ProjectsPage = () => {
  return (
    <div>
      {/* ================= INDUSTRY & CLIENT PROJECTS ================= */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-white mb-2">
          Industry & Client Projects
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full mb-6" />

        <p className="text-gray-400 max-w-2xl leading-relaxed mb-10">
          Professional projects developed for industry and paid clients,
          focused on real-world requirements, scalability, and
          production-quality code.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <IndustryProjectCard
            title="AI RAG Development"
            company="Forbes Marshall"
            duration="March 2025"
            mode="Remote"
            role="AI / Full-Stack Developer"
            points={[
              "Built an end-to-end RAG pipeline using Gemini API and LangChain for accurate product Q&A.",
              "Integrated Quadrant vector store with custom embeddings for semantic retrieval.",
              "Developed a React-based chat UI supporting Excel uploads and real-time querying.",
              "Optimized chunking and retrieval for large datasets (15k+ rows), improving relevance by 40%.",
              "Automated document preprocessing and vector indexing using n8n workflows.",
            ]}
          />

          <IndustryProjectCard
            title="Community Portal Platform"
            company="Enroll Engineer"
            duration="Client Project"
            mode="Remote"
            role="Frontend Developer"
            points={[
              "Built a role-based community management platform for a paid client.",
              "Led frontend architecture using React, TypeScript, Tailwind CSS, and Zustand.",
              "Implemented responsive UI and scalable client-side state management.",
              "Developed dashboards for announcements, student directories, and messaging.",
            ]}
          />
        </div>
      </div>

      {/* ================= PERSONAL PROJECTS ================= */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-white mb-2">
          Personal Projects
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full mb-6" />

        <p className="text-gray-400 max-w-2xl leading-relaxed mb-12">
          Selected projects showcasing my experience in full-stack development,
          AI systems, and practical problem-solving through real-world applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <PersonalProjectCard
            title="Resume Builder – AI Powered Platform"
            image={ResumeBuilder}
            description="A smart resume creation platform that helps users build ATS-optimized resumes with real-time previews and AI assistance."
            tech={[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
            ]}
            points={[
              "Built a resume creation platform with professional templates.",
              "Integrated AI-based summary rephrasing and keyword suggestions.",
              "Implemented ATS score analysis for job matching.",
              "Added real-time preview, PDF export, and authentication.",
            ]}
            github="https://github.com/TejasD-13/Resume-Builder"
            demo="https://brand-verse-resume-builder-git-main-tejas-projects-eb29239f.vercel.app/"
          />

          <PersonalProjectCard
            title="AI-Powered Face Recognition & Clustering System"
            image={imgCluster}
            description="An automated photo organization system using deep learning for face recognition and intelligent clustering."
            tech={[
              "Python",
              "DeepFace",
              "OpenCV",
              "HDBSCAN",
              "scikit-learn",
              "NumPy",
              "Pandas",
            ]}
            points={[
              "Generated facial embeddings using DeepFace models.",
              "Applied PCA and HDBSCAN for unsupervised clustering.",
              "Automatically separated individual and group photos.",
              "Achieved 80%+ face recovery with optimized thresholds.",
            ]}
            github="https://github.com/TejasD-13/AI-Powered-Face-Recognition-Clustering-System"
          />

          <PersonalProjectCard
            title="WanderLust – Hotel Booking Web App"
            image={Wanderlust}
            description="A full-stack hotel booking platform with role-based authentication and admin workflows."
            tech={[
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Bootstrap",
            ]}
            points={[
              "Built a hotel listing and booking platform.",
              "Implemented User, Manager, and Admin roles.",
              "Developed admin-controlled listing approvals.",
            ]}
            github="https://github.com/TejasD-13/WanderLust2"
            demo="https://drive.google.com/file/d/1tVAupnLiE2oNRlqleU8iGUXuy4JyOzwl/view"
          />

          <PersonalProjectCard
            title="RAG PDF Chat – LLM Powered Document Assistant"
            image={RAGPDF}
            description="An intelligent document assistant enabling PDF-based question answering using local LLMs."
            tech={[
              "FastAPI",
              "Python",
              "Ollama",
              "ChromaDB",
              "LangChain",
              "React.js",
            ]}
            points={[
              "Built a full RAG pipeline with chunking and vector storage.",
              "Used Ollama for local LLM inference ensuring privacy.",
              "Enabled PDF uploads and contextual querying.",
            ]}
            github="https://github.com/TejasD-13/RAG-PDF"
          />

          <PersonalProjectCard
            title="Weather App – Real-Time Dashboard"
            image={WeatherApp}
            description="A modern weather dashboard showing real-time conditions with dynamic visuals."
            tech={[
              "React (Vite)",
              "Tailwind CSS",
              "OpenWeather API",
            ]}
            points={[
              "Implemented live weather search with city suggestions.",
              "Displayed temperature, humidity, wind, and sunrise/sunset.",
              "Added dynamic UI based on weather and time.",
            ]}
            github="https://github.com/TejasD-13/Weather-App"
            demo="https://weather-app-ztdp-fj3t5dcf7-tejas-projects-eb29239f.vercel.app"
          />

          <PersonalProjectCard
            title="Netflix-Style Streaming Frontend"
            image={Netflix}
            description="A Netflix-inspired frontend focused on component reuse and authentication."
            tech={[
              "React",
              "Vite",
              "Firebase Auth",
              "CSS",
            ]}
            points={[
              "Developed reusable UI components.",
              "Integrated Firebase authentication with env config.",
              "Implemented responsive card grid and media player.",
            ]}
            github="https://github.com/TejasD-13/Netflix-clone"
            demo="https://netflix-clone-blond-two-17.vercel.app/"
          />

          <PersonalProjectCard
            title="Movie Recommender System"
            image={MovieRecommender}
            description="A content-based movie recommendation system with poster fetching."
            tech={[
              "Python",
              "Streamlit",
              "Pandas",
              "NumPy",
              "TMDB API",
            ]}
            points={[
              "Vectorized movie metadata and computed cosine similarity.",
              "Recommended top movies using similarity matrix.",
              "Fetched posters dynamically via TMDB API.",
            ]}
            github="https://github.com/TejasD-13/Movie-Recommender-System"
          />
        </div>
      </div>
    </div>
  );
};

/* ================= INDUSTRY PROJECT CARD ================= */

const IndustryProjectCard = ({ title, company, duration, mode, role, points }) => (
  <div className="bg-[#1e1e1f] border border-[#2f2f2f] rounded-2xl p-6 hover:border-[#ffdb70]/50 transition-all">
    <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
    <div className="text-sm text-gray-400 mb-2">
      <span className="text-[#ffdb70]">{company}</span> • {duration} • {mode}
    </div>
    <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#ffdb70]/10 text-[#ffdb70] mb-4">
      {role}
    </span>
    <ul className="space-y-2 text-sm text-gray-300">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-[#ffdb70]">•</span>
          {p}
        </li>
      ))}
    </ul>
  </div>
);

/* ================= PERSONAL PROJECT CARD ================= */

const PersonalProjectCard = ({
  title,
  image,
  description,
  tech,
  points,
  github,
  demo,
}) => (
  <div className="bg-[#1e1e1f] border border-[#2f2f2f] rounded-2xl overflow-hidden hover:border-[#ffdb70]/50 transition-all">
    {image && (
      <img src={image} alt={title} className="w-full h-52 object-cover" />
    )}

    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <ul className="space-y-2 text-sm text-gray-300 mb-4">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[#ffdb70]">•</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#ffdb70]">
            <Github size={16} />
            View Code
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#ffdb70]">
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectsPage;
