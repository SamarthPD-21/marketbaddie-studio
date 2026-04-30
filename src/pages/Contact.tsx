import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const services = ["Product", "Design", "Content", "Everything"];
const budgets = ["< $10k", "$10k–$25k", "$25k–$50k", "$50k+"];

const Contact = () => {
  const [service, setService] = useState("Everything");
  const [budget, setBudget] = useState("$25k–$50k");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within 24h.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <section className="pt-40 pb-20 container-x">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="display text-6xl md:text-[10vw] leading-[0.9] max-w-[18ch]"
        >
          Tell us what <span className="italic-display">you're building.</span>
        </motion.h1>
      </section>

      <section className="container-x pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-10"
        >
          <Field label="Your name" name="name" placeholder="Ada Lovelace" required />
          <Field label="Email" name="email" type="email" placeholder="ada@studio.com" required />
          <Field label="Company" name="company" placeholder="Optional" />

          <div>
            <Label>What do you need?</Label>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((s) => (
                <Chip key={s} active={service === s} onClick={() => setService(s)}>{s}</Chip>
              ))}
            </div>
          </div>

          <div>
            <Label>Budget</Label>
            <div className="flex flex-wrap gap-2 mt-3">
              {budgets.map((b) => (
                <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>{b}</Chip>
              ))}
            </div>
          </div>

          <div>
            <Label>Project details</Label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="A few sentences about what you're working on…"
              className="mt-3 w-full bg-transparent border-b border-hairline pb-3 text-lg outline-none focus:border-ink transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-7 py-4 text-sm font-medium hover:opacity-90 transition"
          >
            Send message <span aria-hidden>→</span>
          </button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5 lg:pl-10 space-y-12"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Email</p>
            <a href="mailto:hello@marketbaddie.com" className="display text-3xl md:text-4xl story-link">hello@marketbaddie.com</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Studio</p>
            <p className="display text-2xl">Remote-first<br /><span className="italic-display">Bombay · Berlin · NYC</span></p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Response time</p>
            <p className="text-ink/70">We reply to every serious enquiry within 24 hours.</p>
          </div>
          <div className="rounded-3xl border border-hairline p-8 bg-canvas-elevated">
            <p className="display text-2xl mb-2">Prefer a call?</p>
            <p className="text-ink/60 text-sm">Book a 20-minute intro. No pitch, just questions.</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-hairline hover:decoration-ink">
              Book a slot →
            </a>
          </div>
        </motion.aside>
      </section>

      <Footer />
    </main>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{children}</label>
);

const Field = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <Label>{label}</Label>
    <input
      {...props}
      className="mt-3 w-full bg-transparent border-b border-hairline pb-3 text-lg outline-none focus:border-ink transition placeholder:text-ink/30"
    />
  </div>
);

const Chip = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm border transition ${
      active ? "bg-ink text-canvas border-ink" : "border-hairline text-ink/70 hover:border-ink"
    }`}
  >
    {children}
  </button>
);

export default Contact;
