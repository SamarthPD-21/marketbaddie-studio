import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const items = [
  { label: "Work", to: "/projects" },
  { label: "Design", to: "/design" },
  { label: "Content", to: "/content" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-canvas/70 backdrop-blur-xl border-b border-hairline/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="display text-2xl md:text-[28px] tracking-tight">
            Market<span className="italic-display">Baddie</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <li key={it.to}>
              <Link
                to={it.to}
                className="relative px-4 py-2 text-sm text-ink/80 hover:text-ink transition-colors"
              >
                {it.label}
                {pathname === it.to && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-hairline bg-canvas"
        >
          <div className="container-x py-6 flex flex-col gap-4">
            {items.map((it) => (
              <Link key={it.to} to={it.to} onClick={() => setOpen(false)} className="text-2xl display">
                {it.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit rounded-full bg-ink text-canvas px-5 py-3 text-sm">
              Start a project →
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
