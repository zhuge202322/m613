import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Strategic Sourcing",
      description: "Beyond simple matchmaking. We identify manufacturers that meet your exact technical specs, negotiating 'local' pricing terms through our established China network.",
    },
    {
      title: "Factory Verification",
      description: "Eliminate the risk of 'phantom factories'. Our local team performs on-site audits to validate production capacity, labor conditions, and financial stability.",
    },
    {
      title: "Quality Assurance",
      description: "Boots on the ground. We enforce strict AQL standards with raw material checks, in-line inspections, and final pre-shipment audits to ensure zero defects.",
    },
    {
      title: "Logistics & Compliance",
      description: "Seamless import experience. As a WA-registered entity, we navigate customs, tariffs, and freight, delivering directly to your U.S. warehouse (DDP).",
    },
    {
      title: "Supply Chain Management",
      description: "For high-volume partners, we act as your dedicated overseas office, managing production schedules, inventory flow, and supplier relationships long-term.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-navy">Core Capabilities</h2>
          <div className="w-20 h-1 bg-gold mb-6"></div>
          <p className="text-gray-500 max-w-2xl text-lg">
            We bridge the gap between American business standards and Chinese manufacturing reality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card p-10 bg-white group hover:-translate-y-1 duration-300">
              <h4 className="text-xl font-bold mb-4 text-navy group-hover:text-gold transition-colors">{service.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-navy p-10 flex flex-col justify-center items-start text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Have a specific product?</h4>
            <p className="text-sm text-gray-400 mb-8 relative z-10 leading-relaxed">
              Send us your specs. We'll provide a preliminary feasibility report within 48 hours.
            </p>
            <Link href="/contact" className="btn-primary bg-gold text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-navy relative z-10">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
