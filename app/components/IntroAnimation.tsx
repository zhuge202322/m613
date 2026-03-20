"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleVideoEnded = () => {
    setIsFading(true);
    // Wait for fade out transition
    setTimeout(() => {
      setIsVisible(false);
      setShouldRender(false);
      // Unlock body scroll if needed
      document.body.style.overflow = '';
    }, 800); 
  };

  useEffect(() => {
    // Lock scroll when animation is active
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div 
      className={clsx(
        "fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 flex items-center justify-center",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={handleVideoEnded}
      >
        <source src="/img/kaimen.mp4" type="video/mp4" />
      </video>

      {/* Skip Button */}
      <button
        onClick={handleVideoEnded}
        className="absolute bottom-8 right-8 z-20 text-white/80 border border-white/20 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold tracking-[0.2em] uppercase"
      >
        Skip Intro
      </button>
    </div>
  );
}
