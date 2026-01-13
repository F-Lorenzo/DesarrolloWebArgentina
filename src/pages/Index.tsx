import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyWebSection from "@/components/WhyWebSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <WhyWebSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
