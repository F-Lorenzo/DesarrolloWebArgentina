import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">D</span>
            </div>
            <span className="text-primary-foreground font-semibold text-lg">
              Digital Boost
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("por-que-web")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              ¿Por qué una web?
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Experiencia
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contacto")}
            className="hidden md:flex bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Solicitar Presupuesto
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("por-que-web")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              >
                ¿Por qué una web?
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              >
                Experiencia
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
              >
                Solicitar Presupuesto
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
