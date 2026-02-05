import PageHeader from "@/app/components/PageHeader";
import WhyUs from "@/app/components/WhyUs";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Why Choose OKIEE" 
        subtitle="Precision Sourcing & Proven Execution"
      />
      <WhyUs />
      <Footer />
    </main>
  );
}
