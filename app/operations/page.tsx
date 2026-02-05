import PageHeader from "@/app/components/PageHeader";
import Operate from "@/app/components/Operate";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Global Operations" 
        subtitle="U.S. Strategy & China Execution"
      />
      <Operate />
      <Footer />
    </main>
  );
}
