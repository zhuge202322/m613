export default function Operate() {
  return (
    <section id="operate" className="border-t border-b border-gray-100">
      <div className="grid md:grid-cols-2">
        <div className="p-16 md:p-24 bg-white flex flex-col justify-center border-r border-gray-100">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4">Front-end</span>
          <h3 className="text-3xl font-bold mb-6 text-navy">U.S. Market Facing</h3>
          <p className="text-gray-500 leading-relaxed mb-8">
            Strategizing, Account Management, and Communication based in the U.S. to ensure your business goals are translated perfectly into the supply chain.
          </p>
          <div className="h-80 w-full overflow-hidden shadow-lg mt-8">
            <img
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800"
              alt="US Bridge"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-700"
            />
          </div>
        </div>
        <div className="p-16 md:p-24 bg-gray-50 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4">Back-end</span>
          <h3 className="text-3xl font-bold mb-6 text-navy">China Execution</h3>
          <p className="text-gray-500 leading-relaxed mb-8">
            The operational engine in China, handling Sourcing, Factory Audit, QC, and Shipping. Real-world execution supported by 15 years of local networking.
          </p>
          <div className="h-80 w-full overflow-hidden shadow-lg mt-8">
            <img
              src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=800"
              alt="China Logistics"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
