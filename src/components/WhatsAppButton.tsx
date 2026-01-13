import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isTyping, setIsTyping] = useState(true);
    const phoneNumber = "+5491100000000"; // Reemplazar con el número real
    const message = "Hola! Tengo una duda sobre los servicios de Desarrollo Web Argentina, ¿me podrán ayudar?";

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setShowTooltip(true);
            const typingTimer = setTimeout(() => {
                setIsTyping(false);
            }, 2500);
            return () => clearTimeout(typingTimer);
        }, 3000);
        return () => clearTimeout(showTimer);
    }, []);

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="pointer-events-auto relative group"
                    >
                        <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 pr-10 min-w-[200px] max-w-[240px]">
                            <button
                                onClick={() => setShowTooltip(false)}
                                className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Cerrar tooltip"
                            >
                                <X size={14} />
                            </button>
                            {isTyping ? (
                                <div className="flex gap-1 items-center justify-start py-1">
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                </div>
                            ) : (
                                <p className="text-sm font-bold text-slate-800 leading-snug animate-in fade-in duration-500">
                                    ¿Tienes alguna duda o puedo ayudarte con algo? 👋
                                </p>
                            )}
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                className="pointer-events-auto w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow duration-300"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle size={32} fill="currentColor" />
            </motion.button>
        </div>
    );
};

export default WhatsAppButton;
