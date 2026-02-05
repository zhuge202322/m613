import PageHeader from "@/app/components/PageHeader";
import Services from "@/app/components/Services";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-End Supply Chain Management"
      />
      <Services />
      <Footer />
    </main>
  );
}
