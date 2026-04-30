import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <h2 className="display text-5xl md:text-7xl leading-[0.95]">
              Let's make <span className="italic-display">something</span><br />worth watching.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start a project <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Studio</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projects" className="hover:text-ink/60 transition">Work</Link></li>
              <li><Link to="/design" className="hover:text-ink/60 transition">Design</Link></li>
              <li><Link to="/content" className="hover:text-ink/60 transition">Content</Link></li>
              <li><Link to="/contact" className="hover:text-ink/60 transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-ink/60 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-ink/60 transition">Twitter / X</a></li>
              <li><a href="#" className="hover:text-ink/60 transition">Dribbble</a></li>
              <li><a href="mailto:hello@marketbaddie.com" className="hover:text-ink/60 transition">hello@marketbaddie.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MarketBaddie Studio. All rights reserved.</p>
          <p className="display text-base text-ink/60">Built with intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
