"use client";

import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3",
    title: "Building Exterior",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3",
    title: "Common Area",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3",
    title: "Bedroom",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3",
    title: "Study Room",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
    title: "Kitchen",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3",
    title: "Dining Area",
  },
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out"
              style={{
                backgroundImage: `url(${image.url})`,
                transform: hoveredId === image.id ? "scale(1.1)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-lg font-semibold p-4">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;