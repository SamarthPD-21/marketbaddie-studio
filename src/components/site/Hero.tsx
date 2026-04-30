import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* floating orbs - parallax depth */}
      <motion.div style={{ y: y2 }} className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute bottom-0 -left-40 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />

      <motion.div style={{ opacity, y: y2 }} className="container-x relative z-10 pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-ink/40" />
          MarketBaddie · Creative Studio
        </motion.p>

        <h1 className="display text-[14vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.92] max-w-[16ch]">
          {"Everything your".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.18em]"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            product needs.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="italic-display inline-block text-ink/70"
          >
            In one place.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="text-lg md:text-xl text-ink/70 max-w-md leading-relaxed">
            Apps. Websites. Content. Photo shoots. <br />
            <span className="italic-display text-ink">One studio. Endless craft.</span>
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              See our work <span aria-hidden>→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium hover:bg-ink/5 transition"
            >
              Talk to us
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-ink/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
