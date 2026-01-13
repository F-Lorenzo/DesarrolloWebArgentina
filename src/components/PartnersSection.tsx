import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Tienda Nube", logo: "/tiendanube-logo.png" },
    { name: "WooCommerce", logo: "/woocommerce-logo.png" },
    { name: "Shopify", logo: "/shopify-logo.png" },
  ];

  return (
    <section className="py-12 bg-primary">
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
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;


