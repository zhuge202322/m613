"use client";

import Link from "next/link";
import Image from "next/image";

export default function CoreCapabilities() {
  const capabilities = [
    {
      tag: "BUYERS",
      title: "Your gateway to global markets, powered by trusted sourcing experts.",
      description: "At Okiee, we see every client as a long-term partner. Whether you are launching new products or expanding your supply chain, our experienced team connects you with reliable manufacturers and manages the sourcing process from start to finish. From supplier selection to logistics coordination, we help your business grow across global markets.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=200", 
    },
    {
      tag: "SUPPLIERS",
      title: "A trusted manufacturing network across China",
      description: "Okiee partners with manufacturers across different industries to support global sourcing needs. We help connect reliable suppliers with international buyers, ensuring quality standards, efficient production, and smooth logistics.",
      image: "https://images.unsplash.com/photo-1565514020176-892eb5b3e2a9?auto=format&fit=crop&q=80&w=200",
    },
    {
      tag: "PROJECTS",
      title: "Supporting international procurement projects",
      description: "Okiee assists clients with procurement for large-scale projects across global markets. Our team coordinates sourcing, production, and delivery to ensure projects are supplied efficiently and on schedule.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200",
    },
    {
      tag: "SUPPLY CHAIN",
      title: "Coordinating production and delivery",
      description: "Okiee manages the key steps between sourcing and delivery. From production coordination to logistics planning, our team works with partners to ensure orders move efficiently through the supply chain and reach their destination on schedule.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">CORE CAPABILITIES</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_5px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                {/* Image Decoration */}
                <div className="relative w-20 h-20">
                    <div className="absolute top-0 left-0 w-14 h-14 bg-navy rounded-full group-hover:bg-gold transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
                        <Image 
                            src={item.image} 
                            alt={item.tag}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                
                <span className="text-navy font-bold text-sm tracking-wider uppercase group-hover:text-gold transition-colors duration-300">
                    {item.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <div>
                <Link 
                    href="/contact" 
                    className="inline-block bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-navy hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                    Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
