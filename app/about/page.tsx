import PageHeader from "@/app/components/PageHeader";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="About Okiee" 
        subtitle="Bridging Markets Since 2008"
      />
      
      {/* 公司故事部分 */}
      <section className="py-20 px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">From Factory Floor to Global Brand</h2>
            <div className="w-20 h-1 bg-gold"></div>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                The story of Okiee begins not in a boardroom, but on the factory floors of Guangdong. Established in 2008 as <strong>Royal Import & Export Co., Ltd.</strong>, we spent over 15 years mastering the intricacies of Chinese manufacturing, quality control, and logistics.
              </p>
              <p>
                We saw a gap in the market: U.S. businesses desperately needed reliable manufacturing partners but struggled with communication barriers, quality inconsistencies, and lack of accountability.
              </p>
              <p>
                <strong>Enter Okiee.</strong>
              </p>
              <p>
                Incorporated in the <strong>State of Washington</strong>, Okiee Inc. was formed to be the bridge. We combine the legal protection and communication standards of a U.S. corporation with the on-the-ground execution power of our veteran team in China.
              </p>
            </div>
            
            {/* 证书/资质信息展示区域 - 模拟证书的高级感 */}
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-navy"></div>
                <h3 className="text-navy font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-2xl">🏛️</span> Corporate Verification
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Entity Name</p>
                        <p className="font-semibold text-navy">OKIEE INC</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Jurisdiction</p>
                        <p className="font-semibold text-navy">State of Washington, USA</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">UBI Number</p>
                        <p className="font-semibold text-navy">605 847 941</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Status</p>
                        <p className="font-semibold text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-600"></span> Active
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full bg-gray-100 hidden md:flex items-center justify-center p-8">
            <div className="relative w-full h-full shadow-2xl border border-gray-200 bg-white">
                <Image 
                    src="/img/01.png"
                    alt="OKIEE INC Articles of Incorporation"
                    fill
                    className="object-contain p-4"
                />
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值条 */}
      <section className="bg-navy py-16 text-white">
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
                <div className="text-4xl text-gold mb-4 font-serif italic">15+</div>
                <div className="text-sm font-bold uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="p-4 border-l border-r border-white/10">
                <div className="text-4xl text-gold mb-4 font-serif italic">100%</div>
                <div className="text-sm font-bold uppercase tracking-widest">Verified Suppliers</div>
            </div>
            <div className="p-4">
                <div className="text-4xl text-gold mb-4 font-serif italic">WA</div>
                <div className="text-sm font-bold uppercase tracking-widest">Incorporated Entity</div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
