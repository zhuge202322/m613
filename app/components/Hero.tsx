import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/img/beijing.mp4" type="video/mp4" />
        </video>
        {/* Overlay - 调亮背景 */}
        <div className="absolute inset-0 bg-navy/30"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 pt-20">
        {/* Content */}
        <div className="max-w-4xl space-y-8">
          <div className="inline-block px-4 py-1.5 border border-gold/50 bg-gold/10 backdrop-blur-sm text-gold text-xs font-bold tracking-widest uppercase rounded-sm">
            Since 2008
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-md">
              Precision Sourcing.<br />
              <span className="text-gray-100">Proven Execution.</span>
            </h1>
          </div>
          
          <p className="text-xl text-white max-w-2xl leading-relaxed font-light drop-shadow-sm">
            Connecting U.S. businesses with verified China supply chains through institutional-grade expertise and on-the-ground management.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="btn-primary text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] inline-block text-center hover:bg-gold hover:text-navy transition-colors duration-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] inline-block text-center text-white border border-white/50 hover:bg-white/10 transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
