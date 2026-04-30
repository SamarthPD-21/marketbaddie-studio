import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const mocks = [
  { src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80", title: "Lumen — Banking app", tilt: -6 },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", title: "Nova — Analytics dashboard", tilt: 4 },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", title: "Atlas — CRM redesign", tilt: -3 },
  { src: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80", title: "Halo — Wellness OS", tilt: 5 },
];

const DesignSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="py-24 md:py-40 border-t border-hairline bg-canvas-elevated/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Design</p>
            <h2 className="display text-5xl md:text-7xl leading-[0.95] max-w-[14ch]">
              Interfaces that <span className="italic-display">feel obvious.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-sm leading-relaxed">
            Considered systems. Pixel-precise execution. Motion that earns its place.
          </p>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {mocks.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, rotate: 0, scale: 1.01 }}
              style={{ rotate: m.tilt }}
              className={`group relative ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-secondary shadow-elevated transition-shadow duration-700 group-hover:shadow-glow">
                <img src={m.src} alt={m.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-canvas text-sm">{m.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a
            href="/design"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium hover:bg-ink hover:text-canvas transition"
          >
            Explore designs <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
