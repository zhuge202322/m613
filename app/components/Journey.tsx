"use client";

import clsx from "clsx";
import Link from "next/link";

export default function Journey() {
  const milestones = [
    {
      year: "2008",
      description: "Established as Royal Import & Export Co., Ltd. in China.",
    },
    {
      year: "2009",
      description: "Entered the African market, beginning with textile and fabric trading.",
    },
    {
      year: "2012",
      description: "Supported equipment procurement for mining-related projects in Ethiopia.",
    },
    {
      year: "2014",
      description: "Expanded into the Middle East, forming partnerships with companies in Dubai.",
    },
    {
      year: "2018",
      description: "Entered the Russian market, supplying kraft and paperboard products.",
    },
    {
      year: "2020",
      description: "Expanded into Southeast Asia, supporting hospitality projects in Malaysia.",
    },
    {
      year: "2022-2024",
      description: "Supported furniture and fertilizer procurement projects for public sector clients in Ethiopia.",
    },
    {
      year: "2025",
      description: "Okiee established its presence in Washington, D.C.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Journey</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Main Trunk Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={clsx(
                  "relative flex items-center md:justify-between",
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  
                  {/* Center Node Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-gold rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-20"></div>

                  {/* Branch Line (Connecting Trunk to Card) */}
                  <div className={clsx(
                    "hidden md:block absolute top-1/2 w-12 h-0.5 bg-gold/30 z-0",
                    isLeft ? "left-1/2 -translate-x-full origin-right" : "left-1/2 origin-left"
                  )} style={{ width: 'calc(50% - 18rem)' }}></div> 
                  {/* Note: The width calc is dynamic based on card margin, adjusted visually */}

                  {/* Content Wrapper */}
                  <div className={clsx(
                    "pl-20 md:pl-0 w-full md:w-5/12 relative",
                    // For mobile, always padded left. For desktop, handled by flex-row/reverse
                  )}>
                    
                    {/* Horizontal Branch for Mobile */}
                    <div className="md:hidden absolute left-8 top-1/2 w-12 h-0.5 bg-gold/30 -translate-y-1/2"></div>

                    <div className={clsx(
                      "group relative bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t-4 border-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                      isLeft ? "md:text-right" : "md:text-left"
                    )}>
                      
                      {/* Triangle Pointer */}
                      <div className={clsx(
                        "absolute top-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 transform -translate-y-1/2 rotate-45 z-10 hidden md:block",
                        isLeft ? "-right-2 border-l-0 border-b-0" : "-left-2 border-t-0 border-r-0 border-b border-l shadow-none"
                      )}></div>
                      
                      {/* Mobile Triangle Pointer */}
                      <div className="md:hidden absolute top-1/2 -left-2 w-4 h-4 bg-white border-b border-l border-gray-100 transform -translate-y-1/2 rotate-45 z-10"></div>

                      <span className={clsx(
                        "text-5xl font-serif font-bold text-navy/5 absolute top-0 -z-0 select-none",
                        isLeft ? "left-4 md:right-4 md:left-auto" : "left-4"
                      )}>
                        {item.year}
                      </span>

                      <div className="relative z-10">
                        <div className={clsx(
                          "inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-bold rounded-sm mb-3",
                          // isLeft ? "md:float-right md:ml-auto" : ""
                        )}>
                          {item.year}
                        </div>
                        <p className="text-navy/80 text-sm md:text-base leading-relaxed font-medium clear-both">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer for Flex Balance */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-20 flex flex-col items-center relative z-10">
             {/* End Dot on the Timeline */}
             <div className="w-5 h-5 bg-navy rounded-full border-4 border-white shadow-md mb-8 absolute -top-8 left-8 md:left-1/2 transform -translate-x-1/2"></div>
             
             <Link 
               href="/contact" 
               className="group inline-flex items-center gap-4 text-xl md:text-2xl font-serif font-bold text-navy hover:text-gold transition-colors duration-300 px-8 py-4 bg-white rounded-full shadow-sm hover:shadow-md border border-transparent hover:border-gold/30"
             >
               <span>We look forward to building long-term partnerships with you.</span>
               <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-gold">→</span>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
