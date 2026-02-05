import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-0 items-center">
        {/* Left Content */}
        <div className="space-y-10 pr-12 z-10">
          <div className="inline-block px-3 py-1 border border-gold text-gold text-xs font-bold tracking-widest uppercase">
            Since 2008
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-navy">
              Precision Sourcing.<br />
              <span className="text-gray-300">Proven Execution.</span>
            </h1>
          </div>
          <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
            Connecting U.S. businesses with verified China supply chains through institutional-grade expertise and on-the-ground management.
          </p>
          <div className="pt-4">
            <Link
              href="#contact"
              className="btn-primary text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative pl-4">
          <div className="w-full aspect-square md:aspect-[4/3] bg-gray-100 relative overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200"
              alt="Supply Chain Port"
              fill
              className="object-cover"
              priority
            />
            {/* Experience Card */}
            <div className="absolute bottom-10 left-0 bg-white p-10 shadow-2xl transform -translate-x-1/4 hidden md:block border-l-4 border-gold z-20">
              <p className="text-4xl font-bold mb-1 text-navy">15+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold leading-none">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
