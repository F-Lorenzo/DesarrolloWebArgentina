import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Tienda Nube",
      description: "E-commerce rápido y fácil de administrar",
      features: [
        "Diseño profesional personalizado",
        "Integración con medios de pago",
        "Gestión de inventario",
        "Panel de administración intuitivo",
        "Optimización SEO básica",
        "Soporte técnico inicial",
      ],
      highlight: true,
    },
    {
      title: "WooCommerce & Shopify",
      description: "Tiendas robustas para grandes catálogos",
      features: [
        "Personalización avanzada",
        "Múltiples pasarelas de pago",
        "Gestión de envíos",
        "Plugins y extensiones",
        "Diseño responsive",
        "Capacitación incluida",
      ],
    },
    {
      title: "Software Escalable Personalizado",
      description: "Soluciones a medida para tu negocio",
      features: [
        "Desarrollo 100% personalizado",
        "Arquitectura escalable",
        "Integraciones con APIs",
        "Base de datos optimizada",
        "Panel de control admin",
        "Documentación técnica",
      ],
    },
    {
      title: "Solución 360° Digital",
      description: "Presencia digital completa",
      features: [
        "Web + E-commerce",
        "Estrategia de marketing",
        "Redes sociales",
        "Email marketing",
        "Analytics y reportes",
        "Mantenimiento continuo",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones adaptadas a cada etapa de tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card p-6 md:p-8 rounded-xl border ${
                service.highlight
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
            >
              {service.highlight && (
                <div className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Más Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
