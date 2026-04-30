import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Product",
    desc: "Apps, websites, systems engineered with care.",
    tags: ["iOS", "Web", "SaaS"],
  },
  {
    n: "02",
    title: "Design",
    desc: "UI/UX, brand systems, motion in Figma & Framer.",
    tags: ["Figma", "Framer", "Webflow"],
  },
  {
    n: "03",
    title: "Content",
    desc: "Photography, reels, campaigns that stop the scroll.",
    tags: ["Photo", "Reels", "Campaigns"],
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-40 border-t border-hairline">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What we do</p>
            <h2 className="display text-5xl md:text-7xl max-w-[14ch] leading-[0.95]">
              Three crafts. <span className="italic-display">One studio.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-sm leading-relaxed">
            We build the product, design the surface, and create the content that brings it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative bg-canvas p-8 md:p-10 min-h-[360px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-canvas-elevated"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-widest text-muted-foreground">{s.n}</span>
                <motion.span
                  className="block w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
                />
              </div>

              <div>
                <h3 className="display text-5xl md:text-6xl mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                  {s.title}
                </h3>
                <p className="text-ink/60 leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-hairline text-ink/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
