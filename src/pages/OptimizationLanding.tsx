import { motion } from "framer-motion";
import {
    TrendingUp,
    BarChart3,
    Target,
    RefreshCcw,
    CheckCircle2,
    MousePointer2,
    ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OptimizationLanding = () => {
    const steps = [
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Análisis Profundo",
            description: "Instalamos mapas de calor y grabaciones de sesiones para entender exactamente por qué tus usuarios no compran."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Hipótesis de Mejora",
            description: "Detectamos los puntos de fricción y diseñamos soluciones basadas en principios de psicología de ventas."
        },
        {
            icon: <RefreshCcw className="w-8 h-8" />,
            title: "Tests A/B Constantes",
            description: "Probamos diferentes versiones de tu web en simultáneo para dejar solo la que genera más dinero."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-500/10 blur-[120px] rounded-full opacity-50"></div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                            <TrendingUp size={14} /> Servicio de Alto Rendimiento
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Tu Web, <span className="text-cyan-500">Optimizada</span> Para Vender al Máximo
                        </h1>
                        <motion.div
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-cyan-500/20 border border-cyan-500/30 rounded-2xl p-4 mb-10 inline-block"
                        >
                            <p className="text-cyan-400 font-black text-xl md:text-2xl">
                                🚀 50% OFF - PROMO LANZAMIENTO
                            </p>
                            <p className="text-cyan-500/80 text-sm font-bold">
                                Válido para nuevos clientes hasta el 28 de febrero
                            </p>
                        </motion.div>
                        <p className="text-slate-400 text-xl md:text-2xl mb-12 leading-relaxed">
                            No dejes que el tráfico de tus anuncios se pierda. Aplicamos ciencia de datos y diseño persuasivo para maximizar cada visita.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-black px-10 py-8 rounded-2xl text-xl h-auto">
                                Empezar a Optimizar <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 rounded-[2rem] bg-slate-800/50 border border-white/5 hover:border-cyan-500/30 transition-all group"
                            >
                                <div className="w-16 h-16 bg-cyan-500/10 text-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits List */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                                ¿Por qué invertir en Optimización Mensual?
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Reduce el costo de adquisición de clientes (CAC)",
                                    "Aumenta el retorno de inversión en anuncios (ROAS)",
                                    "Mejora la experiencia de usuario real",
                                    "Decisiones basadas en datos, no en opiniones",
                                    "Mantén tu web siempre por delante de la competencia"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-300 font-bold text-lg">
                                        <CheckCircle2 className="text-cyan-500 shrink-0" size={28} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-cyan-500/20 absolute inset-0 blur-[100px] rounded-full"></div>
                            <div className="bg-slate-800 border border-white/10 p-1 rounded-[2.5rem] relative">
                                <div className="bg-slate-900 p-8 rounded-[2.2rem]">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                        <div className="ml-auto flex items-center gap-2 text-xs text-slate-500 font-bold">
                                            <MousePointer2 size={12} /> Live Hotjar View
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="h-40 bg-slate-800 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center"
                                            >
                                                <div className="w-4 h-4 bg-cyan-500 rounded-full blur-[2px]"></div>
                                            </motion.div>
                                            <span className="relative z-10 text-slate-400 font-black text-sm uppercase tracking-widest">Detectando puntos calientes</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                                                <p className="text-slate-500 text-xs font-bold uppercase mb-2">Checkout Drop</p>
                                                <p className="text-2xl font-black text-red-400">-15%</p>
                                            </div>
                                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                                                <p className="text-slate-500 text-xs font-bold uppercase mb-2">A/B Winner</p>
                                                <p className="text-2xl font-black text-emerald-400">+42%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-cyan-500">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block bg-slate-900/10 border border-slate-900/20 px-6 py-2 rounded-full text-slate-900 font-black text-sm mb-6 uppercase tracking-widest"
                    >
                        Oferta limitada: 50% de Descuento
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 max-w-4xl mx-auto">
                        ¿Listo para multiplicar tus ventas?
                    </h2>
                    <p className="text-slate-900/80 text-xl font-bold mb-12 max-w-2xl mx-auto">
                        Aprovecha el 50% OFF hasta el 28 de febrero. Hablemos hoy mismo y realizaremos un diagnóstico gratuito.
                    </p>
                    <Button
                        onClick={() => window.location.href = "/#contacto"}
                        className="bg-slate-950 hover:bg-black text-white font-black px-12 py-8 rounded-2xl text-2xl h-auto"
                    >
                        Reservar Diagnóstico Gratis
                    </Button>
                </div>
            </section>

            <Footer />
        </div >
    );
};

export default OptimizationLanding;
