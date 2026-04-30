import { motion, useMotionValue, useScroll, useTransform, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  images: string[];
  heading?: React.ReactNode;
  eyebrow?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  itemAspect?: string; // e.g. "aspect-[4/5]"
  speed?: number; // seconds per slide
}

const PremiumCarousel = ({
  images,
  heading,
  eyebrow,
  description,
  ctaLabel,
  ctaHref,
  itemAspect = "aspect-[4/5]",
  speed = 4,
}: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const total = images.length;

  // parallax on scroll (background drifts slower than foreground)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const fgY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const slideWidth = () => {
    const el = trackRef.current?.querySelector<HTMLDivElement>("[data-slide]");
    return el ? el.getBoundingClientRect().width + 24 : 0;
  };

  const goTo = (i: number) => {
    const next = (i + total) % total;
    setIndex(next);
    const w = slideWidth();
    animate(x, -w * next, { duration: 1, ease: [0.16, 1, 0.3, 1] });
  };

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => goTo(index + 1), speed * 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, speed]);

  return (
    <section ref={wrapRef} className="py-24 md:py-40 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            {eyebrow && (
              <motion.p
                style={{ y: bgY }}
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4"
              >
                {eyebrow}
              </motion.p>
            )}
            <h2 className="display text-5xl md:text-7xl leading-[0.95] max-w-[16ch]">{heading}</h2>
          </div>
          {description && <p className="text-ink/60 max-w-sm leading-relaxed">{description}</p>}
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -slideWidth() * (total - 1), right: 0 }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            const w = slideWidth();
            const offset = info.offset.x;
            if (Math.abs(offset) > w * 0.18) {
              goTo(index + (offset < 0 ? 1 : -1));
            } else {
              animate(x, -w * index, { duration: 0.6, ease: [0.16, 1, 0.3, 1] });
            }
          }}
          style={{ x, y: fgY }}
          className="flex gap-6 px-[10vw] md:px-[16vw] cursor-grab active:cursor-grabbing select-none"
        >
          {images.map((src, i) => {
            const active = i === index;
            return (
              <motion.div
                key={i}
                data-slide
                animate={{
                  scale: active ? 1 : 0.88,
                  opacity: active ? 1 : 0.55,
                }}
                whileHover={{ scale: active ? 1.02 : 0.92 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative shrink-0 w-[78vw] md:w-[42vw] lg:w-[36vw] ${itemAspect} rounded-3xl overflow-hidden bg-secondary shadow-elevated`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* controls */}
        <div className="container-x mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-ink" : "w-4 bg-ink/20"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
              className="w-12 h-12 rounded-full border border-hairline flex items-center justify-center hover:bg-ink hover:text-canvas transition"
            >
              ←
            </button>
            <button
              aria-label="Next"
              onClick={() => goTo(index + 1)}
              className="w-12 h-12 rounded-full border border-hairline flex items-center justify-center hover:bg-ink hover:text-canvas transition"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {ctaLabel && ctaHref && (
        <div className="container-x mt-12 flex justify-center">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
          >
            {ctaLabel} <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </section>
  );
};

export default PremiumCarousel;
