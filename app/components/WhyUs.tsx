export default function WhyUs() {
  const reasons = [
    {
      id: "01",
      title: "Established Roots",
      description: "Built upon Royal Import & Export Co., Ltd (Est. 2008), bringing over a decade of verified supply chain infrastructure.",
    },
    {
      id: "02",
      title: "Local Execution",
      description: "Our experienced China-based team manages audits, quality control, and logistics directly at the source.",
    },
    {
      id: "03",
      title: "U.S. Standard",
      description: "Specifically designed for the U.S. market, ensuring compliance, quality standards, and seamless communication.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-16">
          {reasons.map((reason) => (
            <div key={reason.id} className="space-y-4">
              <span className="text-4xl font-serif text-gray-200">{reason.id}</span>
              <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
