"use client";

import { useState } from "react";
import { clsx } from "clsx";

export default function Principle() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">The Okiee Principles</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Okiee, our work is guided by five principles that shape every partnership and every project.
            <br />
            <span className="font-serif italic text-navy font-bold mt-2 block">With OKIEE, It’s OK.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Principles List with Bracket */}
          <div className="relative pl-10 py-2">
            {/* Golden Bracket SVG */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex items-center">
              <svg 
                viewBox="0 0 20 300" 
                preserveAspectRatio="none" 
                className="h-full w-full text-gold"
                style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.05))" }}
              >
                <path 
                  d="M20,2 C8,2 8,30 8,50 L8,135 C8,145 2,150 2,150 C2,150 8,155 8,165 L8,250 C8,270 8,298 20,298" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="space-y-5 text-2xl md:text-3xl font-bold text-navy font-serif pl-4">
              <div className="flex items-center gap-4 group">
                <span className="text-gold w-6 inline-block transition-transform duration-300 group-hover:scale-110">O</span> 
                <span className="text-navy/80 group-hover:text-navy transition-colors">— Opportunity</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-gold w-6 inline-block transition-transform duration-300 group-hover:scale-110">K</span> 
                <span className="text-navy/80 group-hover:text-navy transition-colors">— Knowledge</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-gold w-6 inline-block transition-transform duration-300 group-hover:scale-110">I</span> 
                <span className="text-navy/80 group-hover:text-navy transition-colors">— Integrity</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-gold w-6 inline-block transition-transform duration-300 group-hover:scale-110">E</span> 
                <span className="text-navy/80 group-hover:text-navy transition-colors">— Efficiency</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-gold w-6 inline-block transition-transform duration-300 group-hover:scale-110">E</span> 
                <span className="text-navy/80 group-hover:text-navy transition-colors">— Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Cards - Minimalist Style */}
          <div className="space-y-6">
            {/* Our Purpose Card */}
            <div className="group relative h-36 bg-white rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden cursor-default transition-all duration-500 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]">
              {/* Default State */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                <h3 className="text-2xl font-bold tracking-[0.15em] uppercase text-navy">Our Purpose</h3>
              </div>
              
              {/* Hover State */}
              <div className="absolute inset-0 bg-navy/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 px-10 text-center">
                <p className="text-navy text-lg font-medium leading-relaxed">
                  Connecting global markets through reliable supply chains.
                </p>
              </div>
              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Our Commitment Card */}
            <div className="group relative h-36 bg-white rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden cursor-default transition-all duration-500 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]">
              {/* Default State */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                <h3 className="text-2xl font-bold tracking-[0.15em] uppercase text-navy">Our Commitment</h3>
              </div>
              
              {/* Hover State */}
              <div className="absolute inset-0 bg-navy/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 px-10 text-center">
                <p className="text-navy text-lg font-medium leading-relaxed">
                  Reliable sourcing, transparent communication, and long-term partnerships.
                </p>
              </div>
              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
