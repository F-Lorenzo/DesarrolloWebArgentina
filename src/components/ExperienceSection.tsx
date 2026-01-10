import { motion } from "framer-motion";
import { Calendar, MapPin, Handshake, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const credentials = [
    {
      icon: Calendar,
      title: "+6 Años de Experiencia",
      description: "Más de media década perfeccionando el arte del desarrollo web.",
    },
    {
      icon: MapPin,
      title: "Presencia Internacional",
      description: "Operamos en Argentina y México, expandiendo horizontes.",
    },
    {
      icon: Handshake,
      title: "Partner Oficial Tienda Nube",
      description: "Certificados como socios oficiales de la plataforma líder.",
    },
    {
      icon: TrendingUp,
      title: "ROI Comprobado",
      description: "Enfocados en generar retorno real para tu inversión.",
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencia y Credenciales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Respaldo y trayectoria que garantizan resultados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <credential.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {credential.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-8 py-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">D</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Digital Boost</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
