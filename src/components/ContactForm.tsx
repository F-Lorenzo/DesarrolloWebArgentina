import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Ambient Brand Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#056e6e]/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#056e6e]/10 border border-[#056e6e]/20 rounded-full text-[#056e6e] text-sm font-bold uppercase tracking-wider mb-6">
              Hablemos hoy
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              ¿Listo para <span className="text-cyan-500">empezar?</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas para un diagnóstico gratuito.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-white font-bold ml-1">Nombre Completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Tu nombre"
                  className="bg-slate-950/50 border-white/10 text-white h-12 rounded-xl focus:border-[#056e6e] transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-white font-bold ml-1">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="tu@email.com"
                  className="bg-slate-950/50 border-white/10 text-white h-12 rounded-xl focus:border-[#056e6e] transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-white font-bold ml-1">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+54 11 1234-5678"
                  className="bg-slate-950/50 border-white/10 text-white h-12 rounded-xl focus:border-[#056e6e] transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="company" className="text-white font-bold ml-1">Empresa / Negocio</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Nombre de tu empresa"
                  className="bg-slate-950/50 border-white/10 text-white h-12 rounded-xl focus:border-[#056e6e] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <Label htmlFor="service" className="text-white font-bold ml-1">Servicio de interés *</Label>
              <Select
                required
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="bg-slate-950/50 border-white/10 text-white h-12 rounded-xl focus:ring-[#056e6e]">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-white rounded-xl">
                  <SelectItem value="tiendanube">Tienda Nube</SelectItem>
                  <SelectItem value="woocommerce">WooCommerce</SelectItem>
                  <SelectItem value="shopify">Shopify</SelectItem>
                  <SelectItem value="seo-local">SEO Local (Google Maps)</SelectItem>
                  <SelectItem value="software">Software Personalizado</SelectItem>
                  <SelectItem value="360">Solución 360° Digital</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 mt-8">
              <Label htmlFor="message" className="text-white font-bold ml-1">Mensaje *</Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={5}
                className="bg-slate-950/50 border-white/10 text-white rounded-xl focus:border-[#056e6e] transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full mt-10 bg-[#056e6e] hover:bg-[#045a5a] text-white font-black py-8 rounded-2xl text-xl transition-all shadow-lg shadow-[#056e6e]/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  Enviando Solicitud...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-6 w-6" />
                  Enviar Solicitud
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
