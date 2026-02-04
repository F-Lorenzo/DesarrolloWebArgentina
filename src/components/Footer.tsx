import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-center py-4">
            <img src="/logo.png" alt="Desarrollo web argentina logo" className="h-[150px] w-auto object-contain" />
          </div>

          <p className="text-background/70 text-sm text-center">
            © {new Date().getFullYear()} Desarrollo Web Argentina. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Términos
            </a>
            <Link
              to="/politica-de-privacidad"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
