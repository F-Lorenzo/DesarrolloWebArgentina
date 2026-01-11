import { motion } from "framer-motion";
import { Check, Star, TrendingUp } from "lucide-react";

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
      variant: "default",
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
      variant: "featured",
      badge: "Recomendado",
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
      variant: "default",
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
      variant: "default",
    },
    {
      title: "Optimización Continua de Landing Pages",
      description: "Mejora mensual basada en datos reales de tu web",
      features: [
        "Análisis mensual de datos y comportamiento",
        "Extracción de métricas de tu web actual",
        "Comparación mensual con Tests A/B",
        "Mejora continua de KPIs de conversión",
        "Reportes detallados de rendimiento",
        "Iteración constante para maximizar resultados",
      ],
      variant: "premium",
      badge: "Servicio Mensual",
    },
  ];

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "featured":
        return "border-primary bg-primary/5 shadow-lg shadow-primary/20 ring-2 ring-primary/20";
      case "premium":
        return "border-secondary bg-secondary text-secondary-foreground shadow-xl";
      default:
        return "border-border bg-card";
    }
  };

  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case "featured":
        return "bg-primary text-primary-foreground";
      case "premium":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTextStyles = (variant: string) => {
    return variant === "premium" ? "text-secondary-foreground" : "text-foreground";
  };

  const getDescStyles = (variant: string) => {
    return variant === "premium" ? "text-secondary-foreground/80" : "text-muted-foreground";
  };

  const getCheckStyles = (variant: string) => {
    return variant === "premium" ? "text-primary" : "text-primary";
  };

  return (
    <section id="servicios" className="py-20 bg-background">
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

        <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto pb-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              className={`p-5 rounded-2xl border flex-shrink-0 lg:flex-1 min-w-[260px] transition-all duration-300 ${getVariantStyles(service.variant)}`}
            >
              {service.badge && (
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-3 ${getBadgeStyles(service.variant)}`}
                >
                  {service.variant === "featured" && <Star className="w-3 h-3" />}
                  {service.variant === "premium" && <TrendingUp className="w-3 h-3" />}
                  {service.badge}
                </motion.div>
              )}
              <h3 className={`text-lg font-bold mb-1 ${getTextStyles(service.variant)}`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-4 ${getDescStyles(service.variant)}`}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${getCheckStyles(service.variant)}`} />
                    <span className={`text-sm ${getTextStyles(service.variant)}`}>{feature}</span>
                  </motion.li>
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
