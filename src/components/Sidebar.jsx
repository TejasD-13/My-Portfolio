import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Phone,
  Instagram,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import ProfileImage from "../assets/profile.jpg";
import Resume from "../assets/Tejas cv 5.pdf";

/* ROLES */
const roles = [
  "Computer Engineering Student",
  "Full-Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
];

const Sidebar = () => {
  /* TYPING EFFECT STATE */
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* TYPING EFFECT */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <aside className="w-full lg:w-[320px]">
      <div className="
        bg-[#1e1e1f]
        border border-[#383838]
        rounded-[20px]
        p-6 lg:p-8
        shadow-xl
        lg:sticky lg:top-8
      ">
        {/* PROFILE */}
        <div className="flex lg:flex-col items-center gap-4 lg:gap-0 text-center mb-8">
          {/* IMAGE */}
          <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border border-[#ffdb70]/30 shrink-0 lg:mb-4">
            <img
              src={ProfileImage}
              alt="Tejas Divekar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* NAME + ROLE */}
          <div className="flex-1 lg:flex-none text-left lg:text-center">
            {/* NAME WITH LETTER GLOW */}
            <h1 className="flex flex-wrap lg:justify-center gap-[1px] text-xl lg:text-2xl font-bold mb-1">
              {"Tejas Divekar".split("").map((char, index) => (
                <span
                  key={index}
                  className="
                    text-white
                    transition-all duration-300
                    hover:text-[#ffdb70]
                    hover:drop-shadow-[0_0_8px_rgba(255,219,112,0.6)]
                    hover:scale-[1.05]
                    cursor-pointer
                  "
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            {/* TYPING ROLE */}
            <div className="
              h-[26px]
              px-4 py-1.5
              rounded-lg
              bg-[#2a2a2a]
              text-sm
              text-[#ffdb70]
              tracking-wide
              inline-flex items-center justify-center
              shadow-[0_0_15px_rgba(255,219,112,0.2)]
            ">
              {text}
              <span className="animate-pulse ml-[2px]">|</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#ffdb70]/30 to-transparent mb-8" />

        {/* CONTACT */}
        <div className="space-y-4 mb-8">
          <ContactItem
            icon={<Mail size={16} />}
            label="Email"
            value="tejasdivekar9057@gmail.com"
            href="mailto:tejasdivekar9057@gmail.com"
          />
          <ContactItem
            icon={<Phone size={16} />}
            label="Phone"
            value="+91 9067043910"
          />
          <ContactItem
            icon={<MapPin size={16} />}
            label="Location"
            value="Pune, India"
          />
        </div>

        {/* DOWNLOAD */}
        <a
          href={Resume}
          download
          className="
            w-full
            bg-[#ffdb70]
            text-black
            font-semibold
            py-3
            rounded-xl
            flex items-center justify-center gap-2
            shadow-[0_0_30px_rgba(255,219,112,0.45)]
            hover:shadow-[0_0_50px_rgba(255,219,112,0.7)]
            hover:scale-[1.03]
            transition-all
            mb-8
          "
        >
          <Download size={18} />
          Download Resume
        </a>

        {/* SOCIALS */}
        <div className="flex justify-center gap-5">
          <SocialIcon icon={<Github size={18} />} href="https://github.com/TejasD-13" />
          <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/tejas-divekar-068431291/" />
          <SocialIcon icon={<SiLeetcode size={18} />} href="https://leetcode.com/u/Tejas_d13/" />
          <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/tejasdivekar.13/" />
        </div>
      </div>
    </aside>
  );
};

/* SUB COMPONENTS */

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-3">
    <div className="
      w-10 h-10
      bg-[#2a2a2a]
      rounded-lg
      flex items-center justify-center
      text-[#ffdb70]
      shrink-0
      shadow-[0_0_12px_rgba(255,219,112,0.15)]
    ">
      {icon}
    </div>

    <div className="overflow-hidden">
      <div className="text-xs text-gray-500 uppercase tracking-wide">
        {label}
      </div>

      {href ? (
        <a
          href={href}
          className="text-sm text-gray-300 hover:text-[#ffdb70] transition truncate block"
        >
          {value}
        </a>
      ) : (
        <div className="text-sm text-gray-300 truncate">{value}</div>
      )}
    </div>
  </div>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-white/60
      hover:text-[#ffdb70]
      hover:drop-shadow-[0_0_12px_rgba(255,219,112,0.8)]
      hover:scale-110
      transition-all duration-300
    "
  >
    {icon}
  </a>
);

export default Sidebar;
