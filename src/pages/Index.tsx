import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyWebSection from "@/components/WhyWebSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <WhyWebSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
