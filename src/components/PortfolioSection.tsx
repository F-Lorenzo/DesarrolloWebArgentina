import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";

const projects = [
    {
        title: "Tech Digital Travel",
        category: "Web App / Asistencia al Viajero",
        image: "/portfolio_tech.png",
        link: "https://www.techdigitaltravel.com/",
        tags: ["React", "Búsqueda en Tiempo Real", "E-commerce"],
        description: "Plataforma integral para cotización y contratación de asistencia al viajero con comparativas dinámicas."
    },
    {
        title: "SarfMedia",
        category: "Agencia de Marketing / Video",
        image: "/portfolio_sarf.png",
        link: "https://sarfmedia.com/",
        tags: ["UX/UI Premium", "Portafolio Audiovisual", "SaaS"],
        description: "Sitio web de alto impacto visual para una productora audiovisual en California, enfocado en conversión."
    },
    {
        title: "ECG Studio",
        category: "Plataforma Educativa / Médica",
        image: "/portfolio_electro.png",
        link: "https://electrocardiografiainteractiva.com/",
        tags: ["React Native", "Expo", "Interactividad"],
        description: "Manual interactivo multiplataforma para cardiología con más de 1200 ejercicios de formación profesional."
    }
];

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Casos de Éxito</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            Trayectoria y Resultados Reales
                        </h3>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Descubre cómo transformamos ideas en plataformas digitales de alto rendimiento. Soluciones probadas en el mercado global.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
                        >
                            {/* Image Container */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[4/3] overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="text-white">
                                        <p className="text-sm font-medium text-primary-foreground mb-2 flex items-center gap-2">
                                            <Tag size={14} /> {project.category}
                                        </p>
                                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                    </div>
                                </div>
                            </a>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer"
                                >
                                    Ver Sitio Real <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
