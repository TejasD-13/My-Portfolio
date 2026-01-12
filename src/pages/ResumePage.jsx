import React from "react";
import Resume from "../assets/Tejas cv 5.pdf";

const ResumePage = () => {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Resume
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <a
          href={Resume}
          download
          className="
            inline-flex
            items-center
            gap-2
            bg-[#ffdb70]
            text-black
            font-semibold
            px-8
            py-3
            rounded-xl
            shadow-[0_0_30px_rgba(255,219,112,0.4)]
            hover:shadow-[0_0_45px_rgba(255,219,112,0.65)]
            hover:scale-[1.03]
            transition-all
          "
        >
          📄 Download Resume
        </a>
      </div>

      {/* Resume Viewer (opens below button) */}
      <div
        className="
          bg-[#252525]
          rounded-2xl
          border border-white/5
          overflow-hidden
          shadow-lg
        "
      >
        <iframe
          src={Resume}
          title="Resume PDF"
          className="w-full h-[85vh]"
        />
      </div>
    </div>
  );
};

export default ResumePage;
