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
        <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Casos de <span className="text-cyan-500">Éxito</span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                            Transformamos ideas en plataformas digitales de alto rendimiento. Soluciones probadas en el mercado global.
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
                            className="group relative bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
                        >
                            {/* Project Image Container */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[4/3] overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                />

                                {/* Overlay with info */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-full">
                                        <div className="flex flex-wrap gap-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {project.tags.slice(0, 2).map((tag, tIndex) => (
                                                <span key={tIndex} className="px-3 py-1 bg-cyan-500 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h4 className="text-2xl font-black text-white mb-2">{project.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/* View Project Footer */}
                            <div className="p-8 pt-0">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between group/link text-white/50 hover:text-cyan-500 transition-colors pt-6 border-t border-white/5"
                                >
                                    <span className="font-bold text-sm uppercase tracking-widest">Ver Sitio Real</span>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-500 group-hover/link:text-slate-950 transition-all">
                                        <ExternalLink size={18} />
                                    </div>
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
