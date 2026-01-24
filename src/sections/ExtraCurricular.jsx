import React from "react";
import I2IOC from "../assets/i2i0c.jpg";

const ExtraCurricular = () => {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Extra Curricular
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </div>

      {/* Card */}
      <div
        className="
          flex
          items-center
          gap-5
          bg-[#1e1e1f]
          border
          border-[#2f2f2f]
          rounded-xl
          p-5
          transition-all
          hover:border-[#ffdb70]/50
          hover:shadow-[0_0_25px_rgba(255,219,112,0.12)]
        "
      >
        {/* Circular Logo */}
        <div
          className="
            w-16
            h-16
            rounded-full
            overflow-hidden
            border
            border-[#2f2f2f]
            flex
            items-center
            justify-center
            bg-white
          "
        >
          <img
            src={I2IOC}
            alt="I2IOC - Training and Placement Cell, VIT Pune"
            className="w-4/5 h-4/5 object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Outreach Secretary
          </h3>
          <p className="text-sm text-gray-400">
            I2IOC – Training and Placement Cell, VIT Pune
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricular;
