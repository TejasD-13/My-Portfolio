import React from "react";
import CertificateGallery from "../sections/CertificateGallery";

const AcademicsPage = () => {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Academics
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 border-l border-white/10 space-y-10">
        <TimelineItem
          date="2023 – 2027"
          title="B.Tech in Computer Engineering"
          place="Vishwakarma Institute of Information Technology, Pune"
          desc="Current CGPA: 8.92 / 10."
        />

        <TimelineItem
          date="2023"
          title="MHT-CET (Common Entrance Test)"
          place="Maharashtra State Board"
          desc="Secured: 98.85 percentile."
        />

        <TimelineItem
          date="2021 – 2023"
          title="Higher Secondary Education (HSC)"
          place="Shri Mhalsakant Junior College, Akurdi, Pune"
          desc="Secured: 84.85%, PCM"
        />

        <TimelineItem
          date="2020 – 2021"
          title="Secondary School (SSC)"
          place="St. Joseph Bethany Convent School, Dehuroad, Pune"
          desc="Secured: 87.20%"
        />
      </div>

      <CertificateGallery />
    </div>
  );
};

const TimelineItem = ({ date, title, place, desc }) => (
  <div className="relative">
    {/* Timeline Dot */}
    <span
      className="
        absolute
        -left-[41px]
        top-1.5
        h-4
        w-4
        rounded-full
        bg-[#ffdb70]
        shadow-[0_0_12px_rgba(255,219,112,0.6)]
      "
    />

    {/* Date */}
    <span className="text-xs text-[#ffdb70] font-mono tracking-wide mb-1 block">
      {date}
    </span>

    {/* Content Card */}
    <div
      className="
        bg-[#1e1e1f]
        border border-[#2f2f2f]
        rounded-xl
        p-5
        transition-all
        hover:border-[#ffdb70]/50
        hover:shadow-[0_0_25px_rgba(255,219,112,0.12)]
      "
    >
      <h3 className="text-lg font-semibold text-white mb-1">
        {title}
      </h3>

      <div className="text-sm text-gray-400 mb-2">
        {place}
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export default AcademicsPage;
