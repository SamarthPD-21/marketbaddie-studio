import { motion } from "framer-motion";

const logos = ["Lumen", "Atlas", "Halo", "Nova", "Orbit", "Pulse", "Veil", "Form"];

const Marquee = () => {
  return (
    <section className="py-16 border-y border-hairline overflow-hidden">
      <div className="container-x mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by builders</p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap pr-16"
        >
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span key={i} className="display text-5xl md:text-6xl text-ink/30 hover:text-ink transition-colors duration-500">
              {l}
              <span className="italic-display text-ink/20"> ®</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
