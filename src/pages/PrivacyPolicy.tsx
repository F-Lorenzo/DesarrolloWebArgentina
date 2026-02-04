import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />
            <main className="container mx-auto px-4 pt-40 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-foreground">Política de Privacidad</h1>

                    <div className="space-y-8 text-slate-300">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">1. Información que Recopilamos</h2>
                            <p>
                                En Desarrollo Web Argentina, nos tomamos muy en serio su privacidad. Recopilamos información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono y detalles del proyecto cuando se comunica con nosotros a través de nuestro formulario de contacto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">2. Uso de la Información</h2>
                            <p>
                                Utilizamos la información recopilada para:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Responder a sus consultas y proporcionar presupuestos.</li>
                                <li>Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web.</li>
                                <li>Enviar comunicaciones relevantes relacionadas con su proyecto.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">3. Protección de Datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la alteración, divulgación o destrucción. No vendemos ni compartimos su información con terceros, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">4. Cookies y Tecnologías de Seguimiento</h2>
                            <p>
                                Utilizamos cookies para mejorar la navegación en nuestro sitio y analizar el tráfico. También utilizamos el Pixel de Meta para entender cómo interactúan los usuarios con nuestra web y optimizar nuestras campañas de marketing. Puede configurar su navegador para rechazar todas las cookies, aunque esto podría afectar la funcionalidad del sitio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">5. Sus Derechos</h2>
                            <p>
                                Usted tiene derecho a acceder, rectificar o eliminar su información personal de nuestra base de datos. Para ejercer estos derechos, puede enviarnos un correo electrónico a través de nuestro formulario de contacto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-white">6. Cambios en esta Política</h2>
                            <p>
                                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página con la fecha de la última actualización.
                            </p>
                        </section>

                        <p className="pt-8 text-slate-500 italic">
                            Última actualización: Febrero 2026
                        </p>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
