export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-8 text-navy">Contact Us</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:contact@okieeinc.com" className="font-semibold underline text-navy hover:text-gold transition">contact@okieeinc.com</a>
                  <a href="mailto:admin@okieeinc.com" className="font-semibold underline text-navy hover:text-gold transition">admin@okieeinc.com</a>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Office</p>
                <p className="font-semibold text-navy">
                  U.S. Operations Center<br />
                  Los Angeles, CA
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">China HQ</p>
                <p className="font-semibold text-gray-500">
                  Royal Import & Export Co., Ltd.<br />
                  HaiNing, China
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-xs font-bold uppercase mb-2 text-navy">Name</label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-gold outline-none text-navy"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold uppercase mb-2 text-navy">Company Email</label>
                <input
                  type="email"
                  className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-gold outline-none text-navy"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase mb-2 text-navy">Product Interest</label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-gold outline-none text-navy"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase mb-2 text-navy">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-gold outline-none text-navy"
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-white py-4 font-bold uppercase tracking-[0.2em]"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
