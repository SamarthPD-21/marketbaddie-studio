import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80",
  "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=1400&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
  "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=1400&q=80",
  "https://images.unsplash.com/photo-1505739679850-7adc7faa5e62?w=1400&q=80",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1400&q=80",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400&q=80",
];

const Content = () => (
  <main className="min-h-screen bg-canvas">
    <Navbar />
    <section className="pt-40 pb-12 container-x">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Content</p>
      <h1 className="display text-6xl md:text-8xl leading-[0.9] max-w-[16ch]">
        Photo, motion, <span className="italic-display">and feeling.</span>
      </h1>
    </section>

    <section className="container-x pb-32">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.06 }}
            className="mb-6 break-inside-avoid group"
          >
            <div className="overflow-hidden rounded-3xl bg-secondary shadow-soft">
              <img src={src} alt="" loading="lazy" className="w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
  </main>
);

export default Content;
