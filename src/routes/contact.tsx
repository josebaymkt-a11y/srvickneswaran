import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vicks Vickneswaran" },
      { name: "description", content: "Engage Vicks Vickneswaran for board appointments, fractional executive mandates and advisory engagements. Based in Dubai, UAE." },
      { property: "og:title", content: "Contact — Vicks Vickneswaran" },
      { property: "og:description", content: "Begin a confidential conversation about board, advisory or transformation mandates." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-24">
      <div className="container-exec grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Contact"
            title="A confidential conversation."
            intro="For board appointments, fractional executive mandates, transformation advisory or strategic counsel."
          />
          <div className="mt-12 space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <Mail size={18} className="text-[color:var(--gold)] mt-1" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</div>
                <a href="mailto:contact@vicksv.com" className="text-foreground hover:text-[color:var(--gold)]">contact@vicksv.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Linkedin size={18} className="text-[color:var(--gold)] mt-1" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">LinkedIn</div>
                <a href="#" className="text-foreground hover:text-[color:var(--gold)]">linkedin.com/in/vicks-vickneswaran</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-[color:var(--gold)] mt-1" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Based</div>
                <div className="text-foreground">Dubai, United Arab Emirates</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 card-exec p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full Name" name="name" />
            <Field label="Organization" name="org" />
            <Field label="Email" name="email" type="email" />
            <Field label="Role / Title" name="role" />
          </div>
          <div className="mt-6">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Inquiry</label>
            <textarea
              required
              rows={5}
              className="mt-3 w-full bg-transparent border-b border-border focus:border-[color:var(--gold)] outline-none py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors"
              placeholder="Briefly outline the mandate, situation or question."
            />
          </div>
          <div className="mt-10 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">All inquiries handled confidentially.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[color:var(--gold)] px-7 py-4 text-[11px] uppercase tracking-[0.3em] text-[color:var(--navy-deep)] hover:bg-[color:var(--gold-soft)] transition-all"
            >
              {sent ? "Received" : "Send Inquiry"} <Send size={14} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full bg-transparent border-b border-border focus:border-[color:var(--gold)] outline-none py-3 text-sm text-foreground transition-colors"
      />
    </div>
  );
}
