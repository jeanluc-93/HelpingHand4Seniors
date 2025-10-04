import TopBanner from "@/components/TopBanner";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Services from "@/components/Services";
import AreasOfOperation from "@/components/AreasOfOperation";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Hero />
      <Biography />
      <Services />
      <AreasOfOperation />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
