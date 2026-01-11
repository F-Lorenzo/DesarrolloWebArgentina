import { motion } from "framer-motion";
import { TrendingUp, Target, Clock, Globe, Code, Award, BarChart3, MousePointerClick } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Ventas",
      description: "Incrementa tus conversiones con una web optimizada para vender.",
    },
    {
      icon: Target,
      title: "Landings que Venden",
      description: "Páginas de aterrizaje diseñadas para maximizar conversiones.",
    },
    {
      icon: Clock,
      title: "Landing en 3 Días",
      description: "Entrega ultra rápida sin sacrificar calidad profesional.",
    },
    {
      icon: Globe,
      title: "Negocio 360° Digital",
      description: "Presencia completa en todos los canales digitales.",
    },
    {
      icon: Code,
      title: "Software Escalable",
      description: "Soluciones que crecen con tu negocio sin límites.",
    },
    {
      icon: Award,
      title: "6+ Años de Experiencia",
      description: "Respaldo de cientos de proyectos exitosos realizados.",
    },
    {
      icon: BarChart3,
      title: "Mejora Continua con Datos",
      description: "Optimización de landing pages basada en métricas reales y comportamiento de usuarios.",
    },
    {
      icon: MousePointerClick,
      title: "UX para Mejores KPIs",
      description: "Experiencia de usuario optimizada para mejorar tasas de conversión y engagement.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios que Transforman tu Negocio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones digitales que generan resultados reales y medibles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card p-4 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border text-center group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
