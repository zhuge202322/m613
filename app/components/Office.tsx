"use client";

import Image from "next/image";

export default function Office() {
  const images = [
    "/img/b1.jpg",
    "/img/b2.jpg",
    "/img/b3.jpg",
    "/img/b4.jpg",
    "/img/b5.jpg",
  ];

  // Duplicate for infinite scroll effect (x3 to be safe on wide screens)
  const displayImages = [...images, ...images, ...images];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Our Office</h2>
        <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A glimpse into where innovation happens.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-8 animate-scroll whitespace-nowrap py-8 hover:pause w-max">
           {displayImages.map((src, index) => (
             <div 
               key={index} 
               className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
             >
                <Image
                  src={src}
                  alt={`Office Environment ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
             </div>
           ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
