import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Lumen Banking",
    year: "2026",
    tag: "Product · iOS",
    hero: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=80",
    mid: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    sec: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
  },
  {
    name: "Halo Wellness",
    year: "2026",
    tag: "Brand · Web",
    hero: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1400&q=80",
    mid: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
    sec: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80",
  },
  {
    name: "Nova Analytics",
    year: "2025",
    tag: "Product · Web",
    hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80",
    mid: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80",
    sec: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
  },
  {
    name: "Orbit Travel",
    year: "2025",
    tag: "Content · Brand",
    hero: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80",
    mid: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80",
    sec: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=1400&q=80",
  },
  {
    name: "Atlas CRM",
    year: "2025",
    tag: "Product · SaaS",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    mid: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1400&q=80",
    sec: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
  },
  {
    name: "Pulse Music",
    year: "2024",
    tag: "App · iOS",
    hero: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80",
    mid: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
    sec: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <section className="pt-40 pb-16 container-x">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Projects · {projects.length}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="display text-6xl md:text-8xl leading-[0.9] max-w-[18ch]"
        >
          Selected work, <span className="italic-display">in full.</span>
        </motion.h1>
      </section>

      <section className="container-x pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-secondary shadow-soft transition-shadow duration-700 group-hover:shadow-elevated">
                <img src={p.hero} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-1/2 object-cover transition-transform duration-1000 group-hover:scale-[1.04]" />
                <img src={p.mid} alt="" loading="lazy" className="absolute top-1/2 -translate-y-1/2 left-6 right-6 h-1/3 object-cover rounded-2xl shadow-elevated transition-transform duration-1000 group-hover:scale-[1.02]" />
                <img src={p.sec} alt="" loading="lazy" className="absolute bottom-0 left-0 right-0 h-1/3 object-cover transition-transform duration-1000 group-hover:scale-[1.04]" />
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display text-2xl">{p.name}</h3>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="text-sm text-ink/60 mt-1">{p.tag}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
