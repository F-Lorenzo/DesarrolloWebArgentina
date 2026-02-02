import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Code, Palette, Settings, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-02-28T23:59:59").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
                Promoción Limitada - Verano 2026
              </span>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-block bg-gradient-to-br from-primary-foreground/15 via-primary-foreground/10 to-transparent backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20 shadow-2xl">
                <div className="text-center mb-3">
                  <span className="text-primary-foreground/90 text-xs font-bold uppercase tracking-widest">
                    ⏰ La oferta termina en
                  </span>
                </div>
                <div className="flex gap-3 justify-center">
                  {[
                    { value: timeLeft.days, label: "Días" },
                    { value: timeLeft.hours, label: "Horas" },
                    { value: timeLeft.minutes, label: "Min" },
                    { value: timeLeft.seconds, label: "Seg" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-foreground/20 rounded-xl blur-sm animate-pulse" />
                        <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] border border-primary-foreground/30">
                          <motion.div
                            key={item.value}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl font-bold text-primary-foreground tabular-nums"
                          >
                            {String(item.value).padStart(2, "0")}
                          </motion.div>
                        </div>
                      </div>
                      <span className="text-primary-foreground/70 text-xs font-medium mt-2 uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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

      {/* Partners Section */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
        >
          <span className="text-primary-foreground/60 text-sm font-bold uppercase tracking-[0.2em]">Partner oficial:</span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <img
              src="/tiendanube-logo.png"
              alt="Tienda Nube"
              className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 contrast-125 grayscale hover:grayscale-0"
            />
            <img
              src="/woocommerce-logo.png"
              alt="WooCommerce"
              className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 contrast-125 grayscale hover:grayscale-0"
            />
            <img
              src="/shopify-logo.png"
              alt="Shopify"
              className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 contrast-125 grayscale hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
