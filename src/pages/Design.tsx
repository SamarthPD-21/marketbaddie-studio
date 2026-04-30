import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { motion } from "framer-motion";

const items = Array.from({ length: 9 }).map((_, i) => ({
  src: [
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80",
    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
  ][i],
  title: ["Lumen", "Atlas", "Halo", "Nova", "Orbit", "Pulse", "Veil", "Form", "Echo"][i],
  type: ["UI System", "Mobile", "Web", "Brand", "Product", "Design Ops", "Marketing", "Web", "App"][i],
}));

const Design = () => (
  <main className="min-h-screen bg-canvas">
    <Navbar />
    <section className="pt-40 pb-12 container-x">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Design</p>
      <h1 className="display text-6xl md:text-8xl leading-[0.9] max-w-[16ch]">
        Systems, surfaces, <span className="italic-display">and small details.</span>
      </h1>
    </section>

    <section className="container-x pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary shadow-soft group-hover:shadow-elevated transition-shadow duration-700">
              <img src={it.src} alt={it.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="display text-2xl">{it.title}</h3>
              <span className="text-xs text-muted-foreground">{it.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
  </main>
);

export default Design;
