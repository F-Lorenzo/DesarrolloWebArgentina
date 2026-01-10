import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Code, Palette, Settings, Users, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingIcons = [
    { Icon: ShoppingCart, delay: 0, position: "top-[10%] left-[5%]" },
    { Icon: Code, delay: 0.5, position: "top-[30%] right-[8%]" },
    { Icon: Palette, delay: 1, position: "bottom-[40%] left-[10%]" },
    { Icon: Settings, delay: 1.5, position: "top-[15%] right-[15%]" },
    { Icon: Users, delay: 2, position: "bottom-[25%] right-[5%]" },
    { Icon: Zap, delay: 2.5, position: "bottom-[15%] left-[20%]" },
  ];

  return (
    <section className="relative min-h-screen gradient-hero pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
              <span className="text-primary-foreground text-sm font-medium">
                Promoción Limitada - Verano 2025
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Aprovecha el Verano<br />
              <span className="text-primary-foreground/90">Gánale a tu Competencia</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Desarrollamos tu web o e-commerce profesional en tiempo récord. 
              Soluciones digitales que impulsan tu negocio al siguiente nivel.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
            >
              Solicitar Presupuesto
            </Button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">+6</div>
                <div className="text-primary-foreground/70 text-sm">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">3</div>
                <div className="text-primary-foreground/70 text-sm">Días</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">360°</div>
                <div className="text-primary-foreground/70 text-sm">Digital</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Floating Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Circle */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary-foreground/30 animate-spin-slow" />
              
              {/* Inner circle */}
              <div className="absolute inset-4 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary-foreground">+100</div>
                  <div className="text-primary-foreground/80 text-lg">Proyectos Exitosos</div>
                </div>
              </div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, position }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + delay * 0.2 }}
                  className={`absolute ${position} w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center shadow-lg animate-float`}
                  style={{ animationDelay: `${delay}s` }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
