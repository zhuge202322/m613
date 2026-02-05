import PageHeader from "@/app/components/PageHeader";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Start Your Sourcing Roadmap"
      />
      <Contact />
      <Footer />
    </main>
  );
}
