import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Shield,
  DollarSign,
  BarChart3,
  Swords,
  Cog,
  TrendingUp,
  Megaphone,
  Heart,
  Trophy,
  Target,
  PiggyBank,
} from "lucide-react";

const WhyWebSection = () => {
  const reasons = [
    { icon: Globe, title: "Alcance Global 24/7", description: "Tu negocio disponible en todo el mundo, siempre." },
    { icon: Shield, title: "Credibilidad y Confianza", description: "Una web profesional genera confianza instantánea." },
    { icon: DollarSign, title: "Costos Reducidos", description: "Menor inversión que un local físico tradicional." },
    { icon: BarChart3, title: "Datos y Analytics", description: "Conoce a tu audiencia con métricas precisas." },
    { icon: Swords, title: "Competitividad", description: "Mantente a la par o adelante de tu competencia." },
    { icon: Cog, title: "Automatización", description: "Procesos automatizados que ahorran tiempo." },
    { icon: TrendingUp, title: "Escalabilidad Infinita", description: "Crece sin límites de espacio físico." },
    { icon: Megaphone, title: "Marketing Digital", description: "Potencia tus campañas de publicidad online." },
    { icon: Heart, title: "Experiencia del Cliente", description: "Brinda una experiencia de compra excepcional." },
    { icon: Trophy, title: "Ventaja Competitiva", description: "Diferénciate con una presencia digital única." },
    { icon: Target, title: "Medible y Optimizable", description: "Ajusta tu estrategia basándote en datos reales." },
    { icon: PiggyBank, title: "Inversión con Retorno", description: "Tu web genera ingresos continuamente." },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="por-que-web" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué construir una web o e-commerce?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            12 razones contundentes para digitalizar tu negocio hoy
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-xs">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-turquoise rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            ¿Listo para dar el salto digital?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            No esperes más. Tu competencia ya está online.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Comenzar Ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWebSection;
