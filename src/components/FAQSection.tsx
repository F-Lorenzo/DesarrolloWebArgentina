import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "¿Cuánto tiempo toma desarrollar una tienda online?",
        answer: "Depende de la complejidad, pero una tienda estándar con Tiendanube o Shopify suele estar lista en 7 a 15 días hábiles. Una landing page profesional puede estar lista en solo 3 a 5 días."
    },
    {
        question: "¿La web será de mi propiedad?",
        answer: "¡Totalmente! Una vez finalizado el proyecto, te entregamos todos los accesos y la propiedad absoluta de la plataforma. Nosotros te ayudamos con la configuración inicial."
    },
    {
        question: "¿Ofrecen soporte post-lanzamiento?",
        answer: "Sí, todos nuestros proyectos incluyen 30 días de soporte técnico gratuito para asegurar que todo funcione a la perfección y resolver cualquier duda inicial."
    },
    {
        question: "¿Necesito conocimientos técnicos para gestionar mi tienda?",
        answer: "Para nada. Utilizamos plataformas intuitivas y te brindamos una capacitación básica para que puedas cargar productos, cambiar precios y gestionar pedidos sin depender de nadie."
    },
    {
        question: "¿Trabajan con clientes fuera de Argentina?",
        answer: "Sí, actualmente trabajamos con clientes en toda Latinoamérica, principalmente en Argentina y México, adaptando las pasarelas de pago y envíos a cada región."
    }
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">FAQ</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            Preguntas Frecuentes
                        </h3>
                        <p className="text-slate-600 text-lg mb-8">
                            ¿Tienes alguna duda sobre tu próximo proyecto? Aquí respondemos las consultas más comunes. Si no encuentras lo que buscas, contáctanos y te asesoramos sin cargo.
                        </p>
                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <p className="text-slate-900 font-bold mb-2">¿Aún tienes dudas?</p>
                            <p className="text-slate-600 text-sm mb-4">Estamos para ayudarte a digitalizar tu negocio.</p>
                            <button
                                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Hablá con un experto &rarr;
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-6 md:p-10 rounded-3xl"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                                    <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary transition-colors text-lg py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
