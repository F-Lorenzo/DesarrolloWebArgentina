const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-xl">D</span>
            </div>
            <span className="font-semibold">Digital Boost</span>
          </div>
          
          <p className="text-background/70 text-sm text-center">
            © {new Date().getFullYear()} Digital Boost. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
