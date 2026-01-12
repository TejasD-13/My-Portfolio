import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/projects", label: "Projects" },
  { path: "/academics", label: "Academics" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden lg:block absolute top-0 right-0 bg-[#2a2a2a]/95 backdrop-blur-md border-l border-b border-white/10 rounded-bl-2xl px-6 py-4 z-50">
        <ul className="flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === "/"}>
                {({ isActive }) => (
                  <span
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "text-[#ffdb70] bg-white/5 shadow-[0_0_20px_rgba(255,219,112,0.35)]"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[95%] max-w-md bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl z-50 px-3 py-2">
        <ul className="flex items-center justify-between">
          {navItems.map((item) => (
            <li key={item.path} className="flex-1">
              <NavLink to={item.path} end={item.path === "/"}>
                {({ isActive }) => (
                  <div
                    className={`
                      flex flex-col items-center justify-center py-2 rounded-xl
                      transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "text-[#ffdb70] bg-white/5"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    <span className="text-xs font-medium">{item.label}</span>
                    <span
                      className={`
                        mt-1 h-1 w-1 rounded-full transition-all
                        ${isActive ? "bg-[#ffdb70]" : "bg-transparent"}
                      `}
                    />
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
