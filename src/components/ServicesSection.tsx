import { motion } from "framer-motion";
import { Check, Star, TrendingUp, ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Tienda Nube",
      description: "E-commerce rápido y fácil de administrar",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Diseño profesional personalizado",
        "Integración con medios de pago",
        "Gestión de inventario",
        "Panel intuitivo",
      ],
      color: "bg-sky-500",
      lightColor: "bg-sky-50",
      textColor: "text-sky-600",
      variant: "default",
    },
    {
      title: "WooCommerce & Shopify",
      description: "Tiendas robustas para grandes catálogos",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Personalización avanzada",
        "Plugins y extensiones",
        "Gestión de envíos complejos",
        "Capacitación incluida",
      ],
      color: "bg-violet-600",
      lightColor: "bg-violet-50",
      textColor: "text-violet-600",
      variant: "featured",
      badge: "Recomendado",
    },
    {
      title: "Software Custom",
      description: "Soluciones a medida para tu negocio",
      icon: <Rocket className="w-6 h-6" />,
      features: [
        "Desarrollo 100% a medida",
        "Arquitectura escalable",
        "Integraciones con APIs",
        "Panel Control Admin",
      ],
      color: "bg-slate-800",
      lightColor: "bg-slate-50",
      textColor: "text-slate-800",
      variant: "default",
    },
  ];

  const optimizationService = {
    title: "Optimización Continua de Landing Pages",
    description: "No solo creamos tu web, la hacemos vender más cada mes mediante análisis de datos y tests A/B.",
    features: [
      "Análisis mensual de comportamiento (Heatmaps)",
      "Tests A/B constantes sobre elementos clave",
      "Mejora de tasa de conversión (CRO)",
      "Reportes de ROI y rendimiento detallados",
    ],
    color: "bg-cyan-500",
    lightColor: "bg-cyan-50",
    textColor: "text-cyan-600",
  };

  return (
    <section id="servicios" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Estrategias que Impulsan tu Negocio
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Desde la creación de tu primera tienda hasta el escalamiento basado en datos reales.
          </p>
        </motion.div>

        {/* Proyectos Core */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group`}
            >
              {service.badge && (
                <span className="absolute -top-4 left-8 px-4 py-1 bg-violet-600 text-white text-xs font-bold rounded-full shadow-lg">
                  {service.badge}
                </span>
              )}

              <div className={`w-14 h-14 ${service.lightColor} ${service.textColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">{service.title}</h4>
              <p className="text-slate-600 mb-6 font-medium">{service.description}</p>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                    <div className={`w-5 h-5 ${service.lightColor} ${service.textColor} rounded-full flex items-center justify-center`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`h-1.5 w-12 ${service.color} rounded-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Special Featured Service - Optimization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Discount Badge */}
          <div className="absolute top-8 right-8 z-20">
            <motion.div
              initial={{ rotate: 12, scale: 0 }}
              whileInView={{ rotate: -12, scale: 1 }}
              className="bg-cyan-500 text-slate-900 font-black px-6 py-2 rounded-xl shadow-2xl border-2 border-white/20 text-sm md:text-base"
            >
              50% OFF <span className="text-[10px] block opacity-80">PROMO LANZAMIENTO</span>
            </motion.div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-[100px] -ml-48 -mb-48 rounded-full opacity-50"></div>

          <div className="relative grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <TrendingUp size={14} /> Servicio Mensual Premium
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                {optimizationService.title}
              </h4>
              <p className="text-cyan-500/80 font-bold mb-6 flex items-center gap-2">
                <Star size={16} fill="currentColor" /> ¡50% de descuento hasta el 28 de febrero!
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {optimizationService.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {optimizationService.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                    <div className="w-6 h-6 bg-cyan-500/20 text-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate("/servicios/optimizacion")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-black px-8 py-7 rounded-2xl text-lg group h-auto"
                >
                  Ver Detalles de Mejora <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-7 rounded-2xl text-lg h-auto"
                >
                  Consultar Presupuesto
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="bg-gradient-to-br from-cyan-500/20 to-transparent p-1 rounded-3xl backdrop-blur-sm border border-white/5">
                <div className="bg-slate-800/50 p-8 rounded-[1.4rem]">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-slate-400 text-sm font-bold">Conversión Mensual</span>
                    <span className="text-emerald-400 font-black flex items-center gap-1">+24% <TrendingUp size={14} /></span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-slate-700 w-full rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "30%" }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-cyan-500"
                      ></motion.div>
                    </div>
                    <div className="h-2 bg-slate-700 w-full rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "20%" }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-primary"
                      ></motion.div>
                    </div>
                    <div className="h-2 bg-slate-700 w-4/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "10%" }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        className="h-full bg-emerald-500"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
