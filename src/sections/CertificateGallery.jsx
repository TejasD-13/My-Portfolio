import React, { useState } from "react";

import Cert1 from "../assets/Certificates/CCNA.png";
import Cert2 from "../assets/Certificates/ML.png";
import Cert3 from "../assets/Certificates/NLP.png";
import Cert4 from "../assets/Certificates/AWS.png";
import Cert5 from "../assets/Certificates/Python.png";

const certificates = [
  { id: 1, img: Cert1, title: "CCNA" },
  { id: 2, img: Cert2, title: "Machine Learning" },
  { id: 3, img: Cert3, title: "NLP" },
  { id: 4, img: Cert4, title: "AWS" },
  { id: 5, img: Cert5, title: "Python" },
];


const CertificateGallery = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="mt-16">
      {/* Heading */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          Certificate Gallery
        </h3>
        <div className="w-10 h-1 bg-[#ffdb70] rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveCert(cert)}
            className="
              cursor-pointer
              bg-[#1e1e1f]
              border border-[#2f2f2f]
              rounded-xl
              overflow-hidden
              transition-all
              hover:border-[#ffdb70]/60
              hover:shadow-[0_0_30px_rgba(255,219,112,0.15)]
            "
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="
                w-full
                h-56
                object-cover
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            px-4
          "
          onClick={() => setActiveCert(null)}
        >
          <div
            className="
              relative
              max-w-4xl
              w-full
              bg-[#1e1e1f]
              rounded-2xl
              p-4
              shadow-[0_0_50px_rgba(0,0,0,0.8)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="
                absolute
                top-3
                right-3
                text-white/70
                hover:text-[#ffdb70]
                text-xl
              "
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={activeCert.img}
              alt={activeCert.title}
              className="
                w-full
                max-h-[80vh]
                object-contain
                rounded-xl
              "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateGallery;
