"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Team() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3D Transformations based on scroll progress
  // Rotate the entire container to reveal items as we scroll
  // 5 members, 45 deg apart. Last member is at index 4 * 45 = 180 deg.
  // To bring the last member to front (0 deg), we need to rotate container by -180 deg.
  const spiralRotate = useTransform(scrollYProgress, [0, 1], [0, -180]);
  
  // Move the container up to simulate ascending the stairs
  // We need to move enough to see the last item which is at the bottom
  const spiralY = useTransform(scrollYProgress, [0, 1], ["10%", "-75%"]);

  const teamMembers = [
    { id: 1, image: "/img/01.jpg", name: "Visionary 1", role: "Leadership" },
    { id: 2, image: "/img/02.jpg", name: "Visionary 2", role: "Operations" },
    { id: 3, image: "/img/03.jpg", name: "Visionary 3", role: "Sourcing" },
    { id: 4, image: "/img/04.jpg", name: "Visionary 4", role: "Logistics" },
    { id: 5, image: "/img/05.jpg", name: "Visionary 5", role: "Quality Control" },
  ];

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-gray-50">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-container">
        
        {/* Header Content */}
        <div className="absolute top-12 md:top-24 z-20 text-center w-full px-6 pointer-events-none">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">The Team Behind Okiee</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-lg mx-auto font-sans">
                Ascend the spiral of creativity. Meet the masters behind the masterpieces.
            </p>
        </div>

        {/* 3D Scene Container */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1500px" }}>
            <motion.div 
                style={{ 
                    rotateY: spiralRotate, 
                    y: spiralY,
                    transformStyle: "preserve-3d" 
                }}
                className="relative w-full h-full flex items-center justify-center mt-20 md:mt-0"
            >
                {teamMembers.map((member, index) => {
                    // Calculate position for each step of the spiral
                    const angle = index * 45; // Reduced angle for tighter spiral (was 60)
                    const yOffset = index * 170; // Reduced vertical distance (was 180)
                    const radius = 550; // Increased radius for larger cards (was 450)

                    return (
                        <div 
                            key={member.id}
                            className="absolute top-1/2 left-1/2 w-[400px] aspect-[3/4] -ml-[200px] -mt-[260px]"
                            style={{
                                transform: `translateY(${yOffset}px) rotateY(${angle}deg) translateZ(${radius}px)`,
                                // backfaceVisibility: "hidden" // Keep visible for 3D feel
                            }}
                        >
                            <div className="w-full h-full bg-white p-6 shadow-2xl border border-gray-100 transform transition-transform hover:scale-105 duration-500">
                                <div className="relative w-full h-[82%] overflow-hidden bg-white">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        fill 
                                        className="object-contain transition-all duration-700" 
                                    />
                                </div>
                                <div className="pt-6 text-center">
                                    <h4 className="font-serif text-3xl text-navy">{member.name}</h4>
                                    <p className="text-sm font-bold tracking-[0.2em] uppercase text-gold mt-2">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
