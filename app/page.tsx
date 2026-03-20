import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroAnimation from "./components/IntroAnimation";
import WhyUs from "./components/WhyUs";
import Principle from "./components/Principle";
import Journey from "./components/Journey";
import CoreCapabilities from "./components/CoreCapabilities";
import Team from "./components/Team";
import Office from "./components/Office";
import Services from "./components/Services";
import Operate from "./components/Operate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <IntroAnimation />
      <Navbar />
      <Hero />
      <WhyUs />
      <Principle />
      <Journey />
      <CoreCapabilities />
      <Team />
      <Office />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
