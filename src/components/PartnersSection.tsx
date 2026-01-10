import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Tienda Nube", logo: "🛒" },
    { name: "WooCommerce", logo: "🛍️" },
    { name: "Shopify", logo: "🏪" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-3xl">{partner.logo}</span>
              <span className="text-xl font-semibold">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
