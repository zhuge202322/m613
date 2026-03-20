export default function WhyUs() {
  const reasons = [
    {
      id: "01",
      title: "OKIEE — With Okiee, It’s OK.",
      description: "At Okiee, our name represents the values that guide how we work with partners around the world.",
    },
    {
      id: "02",
      title: "O — Opportunity",
      description: "We believe every partnership begins with opportunity. Okiee connects global markets and opens new doors for international trade.",
    },
    {
      id: "03",
      title: "K — Knowledge",
      description: "Successful sourcing requires deep understanding of products, markets, and supply chains. Our experience helps clients make informed decisions.",
    },
    {
      id: "04",
      title: "I — Integrity",
      description: "Integrity is the foundation of international business. Trust and transparency are the core of every partnership we build.",
    },
    {
      id: "05",
      title: "E — Efficiency",
      description: "Time is critical in global trade. We focus on efficient sourcing, clear communication, and reliable delivery.",
    },
    {
      id: "06",
      title: "E — Excellence",
      description: "From supplier selection to final delivery, we pursue excellence in every detail.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Philosophy</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 gap-y-16">
          {reasons.map((reason) => (
            <div key={reason.id} className="space-y-4 group">
              <span className="text-4xl font-serif text-gray-200 group-hover:text-gold transition-colors duration-300 select-none">
                {reason.id}
              </span>
              <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed min-h-[4rem]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
