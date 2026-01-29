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

import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  // JSON-LD Schema Markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Desarrollo Web Argentina",
    "url": "https://www.desarrollowebargentina.com",
    "description": "Expertos en E-commerce, Software a medida y SEO Local para dominar Google Maps.",
    "publisher": {
      "@type": "Organization",
      "name": "Desarrollo Web Argentina",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.desarrollowebargentina.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <WhyWebSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
