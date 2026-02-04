import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/90 backdrop-blur-md h-16 shadow-lg"
          : "bg-primary/80 h-24 lg:h-32"
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center h-full">
            <a href="/" className="block relative group transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.png"
                alt="Desarrollo Web Argentina"
                className={cn(
                  "w-auto object-contain transition-all duration-500",
                  isScrolled ? "h-12 lg:h-14" : "h-20 lg:h-28"
                )}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { id: "beneficios", label: "Beneficios" },
              { id: "por-que-web", label: "¿Por qué?" },
              { id: "servicios", label: "Servicios" },
              { id: "experiencia", label: "Experiencia" },
              { id: "portfolio", label: "Portfolio" },
              { id: "faq", label: "FAQ" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-all text-xs font-bold uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary-foreground after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contacto")}
            className={cn(
              "hidden md:flex bg-primary-foreground text-primary hover:bg-white hover:scale-105 transition-all font-bold",
              isScrolled ? "scale-90" : "scale-100"
            )}
          >
            Solicitar Presupuesto
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 bg-primary border-t border-primary-foreground/10 absolute left-0 right-0 top-full shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-6 px-4">
              {[
                { id: "beneficios", label: "Beneficios" },
                { id: "por-que-web", label: "¿Por qué una web?" },
                { id: "servicios", label: "Servicios" },
                { id: "experiencia", label: "Experiencia" },
                { id: "portfolio", label: "Portfolio" },
                { id: "faq", label: "FAQ" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-primary-foreground font-medium text-lg text-left border-b border-primary-foreground/5 pb-2 uppercase tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-primary-foreground text-primary hover:bg-white w-full py-6 text-lg font-bold"
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

