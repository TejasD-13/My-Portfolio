import React, { useState } from "react";

// Import sketch images
import sketch1 from "../assets/Sketches/ShivajiMaharaj.png";
import sketch2 from "../assets/Sketches/MummyPapa.jpeg";
import sketch3 from "../assets/Sketches/Ganpati.png";
import sketch4 from "../assets/Sketches/RadhaKrishna.png";
import sketch5 from "../assets/Sketches/Krishna.png";
import sketch6 from "../assets/Sketches/Mahadev.png";
import sketch7 from "../assets/Sketches/Hanuman.png";

const sketches = [
  sketch1,
  sketch2,
  sketch3,
  sketch4,
  sketch5,
  sketch6,
  sketch7,
];

const HobbyPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Hobbies</h1>
        <p className="text-gray-400 mt-2">
          A collection of my hand-drawn sketches.
        </p>
      </div>

      {/* Sketch Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sketches.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="
              bg-[#111] border border-gray-800 rounded-xl overflow-hidden
              cursor-pointer transition-all duration-300
              hover:border-[#ffdb70]
              hover:shadow-[0_0_25px_rgba(255,219,112,0.35)]
            "
          >
            <img
              src={image}
              alt={`Sketch ${index + 1}`}
              className="
                w-full h-64 object-cover
                transition-transform duration-300
                hover:scale-105
              "
            />
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 z-[999]
            bg-black/80 backdrop-blur-md
            flex items-center justify-center
            px-4
          "
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed Sketch"
            className="
              max-h-[90vh] max-w-[90vw]
              rounded-xl
              border border-[#ffdb70]
              shadow-[0_0_40px_rgba(255,219,112,0.5)]
              transition-all duration-300
            "
          />
        </div>
      )}
    </section>
  );
};

export default HobbyPage;
