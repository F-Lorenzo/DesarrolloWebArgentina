import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Carolina Méndez",
        role: "Directora de Marketing",
        company: "Tech Digital Travel",
        content: "DWA transformó nuestra plataforma. La velocidad de navegación mejoró un 40% y las reservas directas subieron exponencialmente.",
        rating: 5,
        metrics: "+40% Velocidad"
    },
    {
        name: "Sebastián Rodríguez",
        role: "Fundador",
        company: "SarfMedia",
        content: "Buscábamos un diseño que respirara profesionalismo y lo logramos. El soporte post-lanzamiento es el mejor que hemos tenido.",
        rating: 5,
        metrics: "Diseño Élite"
    },
    {
        name: "Dr. Javier López",
        role: "Director Médico",
        company: "ECG Studio",
        content: "La digitalización de nuestro manual de electrocardiografía fue un reto que DWA resolvió con una UX impecable. Muy recomendados.",
        rating: 5,
        metrics: "UX Impecable"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        Prueba Social
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Lo que dicen <span className="text-cyan-500">nuestros clientes</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        No solo creamos webs, construimos relaciones a largo plazo basadas en resultados medibles y confianza mutua.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-slate-800/50 border border-white/5 p-8 rounded-[2.5rem] relative group hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-cyan-500/10 transition-colors" size={60} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-cyan-500 text-cyan-500" />
                                ))}
                            </div>

                            <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed font-medium">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-500 font-bold text-xl">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-slate-500 text-sm">{t.role} en <span className="text-cyan-500/80">{t.company}</span></p>
                                </div>
                            </div>

                            <div className="mt-4 inline-block px-3 py-1 bg-white/5 rounded-lg text-emerald-400 text-xs font-black uppercase tracking-widest">
                                {t.metrics}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
