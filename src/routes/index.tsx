import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Quote } from "lucide-react";
import portrait from "@/assets/vicks-portrait.jpg";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vicks Vickneswaran — Board Advisor & Transformation Leader" },
      { name: "description", content: "Board-level executive bringing 40+ years of restructuring, governance and enterprise value creation across global markets." },
      { property: "og:title", content: "Vicks Vickneswaran — Board Advisor & Transformation Leader" },
      { property: "og:description", content: "Board appointments, fractional executive mandates and advisory engagements." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: HomePage,
});

const expertise = [
  "Corporate Governance",
  "Business Transformation",
  "Turnaround Strategy",
  "Financial Restructuring",
  "M&A Advisory",
  "Risk Management",
  "Capital Structuring",
  "Strategic Leadership",
  "Operational Optimization",
  "Crisis Management",
];

const credentials = ["FCCA", "FCPA", "CGMA", "FCA Singapore", "FCMA", "UAECA", "MSc Accounting & Finance"];

const geos = [
  { code: "UAE", label: "United Arab Emirates", note: "Diversified conglomerate leadership" },
  { code: "SGP", label: "Singapore", note: "Capital structuring & governance" },
  { code: "IDN", label: "Indonesia", note: "Infrastructure & restructuring" },
  { code: "LKA", label: "Sri Lanka", note: "Public listings & turnaround" },
];

const testimonials = [
  {
    quote: "A board presence of unusual gravity. Vicks restored confidence with creditors and a clear path to value within months.",
    author: "Group Chairman",
    role: "Diversified Holding Group",
  },
  {
    quote: "The rare executive who pairs financial discipline with operational instinct. Our restructuring would not have closed without him.",
    author: "Chief Executive Officer",
    role: "Industrial Sector",
  },
  {
    quote: "Strategic, calm under pressure, and uncompromising on governance. Exactly what a complex transformation requires.",
    author: "Audit Committee Chair",
    role: "Listed Group",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-exec relative grid lg:grid-cols-12 gap-12 py-24 lg:py-36 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">Board · Advisory · Transformation</span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Board Advisor.
              <br />
              <span className="text-[color:var(--gold)]">Transformation</span> &
              <br />
              Turnaround Leader.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              40+ years of international leadership delivering corporate restructuring,
              financial transformation, governance oversight and enterprise value
              creation across diversified global organisations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/profile"
                className="inline-flex items-center gap-3 bg-[color:var(--gold)] px-7 py-4 text-[11px] uppercase tracking-[0.3em] text-[color:var(--navy-deep)] hover:bg-[color:var(--gold-soft)] transition-all"
              >
                View Executive Profile <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border px-7 py-4 text-[11px] uppercase tracking-[0.3em] text-foreground hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-all"
              >
                Contact
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { k: "40+", v: "Years Leadership" },
                { k: "4", v: "Global Markets" },
                { k: "90%", v: "Receivables Reduction" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-[color:var(--gold)]">{s.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 border border-[color:var(--gold)]/40" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 border border-[color:var(--gold)]" />
              <img
                src={portrait}
                alt="Vicks Vickneswaran — board advisor and transformation leader"
                className="relative h-full w-full object-cover grayscale-[15%]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-[color:var(--navy-deep)]/40 to-transparent h-32" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="py-28 border-t border-border/40">
        <div className="container-exec grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Executive Summary"
              title="A board-level operator built for complexity."
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 text-muted-foreground leading-relaxed space-y-5 text-base md:text-lg"
          >
            <p>
              Vicks Vickneswaran is a board-level executive and transformation advisor
              with four decades of international leadership across diversified
              conglomerates, listed groups, and sovereign-adjacent enterprises.
            </p>
            <p>
              His mandates span corporate restructuring, turnaround strategy, M&A,
              governance oversight, financial transformation, and fractional executive
              leadership — with hands-on experience across the <span className="text-foreground">UAE, Singapore, Indonesia and Sri Lanka</span>.
            </p>
            <p>
              Boards engage him to stabilize, restructure, optimize and scale —
              translating strategy into measurable enterprise value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="py-28 border-t border-border/40">
        <div className="container-exec">
          <SectionHeader
            eyebrow="Core Expertise"
            title="Disciplines deployed in the boardroom."
            intro="Capabilities developed across four decades of executive mandates and advisory engagements."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/40">
            {expertise.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-[color:var(--navy-deep)] p-8 hover:bg-card transition-colors group"
              >
                <div className="text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 font-display text-xl leading-tight group-hover:text-[color:var(--gold)] transition-colors">
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)] hover:gap-4 transition-all"
            >
              Explore expertise <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* GLOBAL EXPERIENCE */}
      <section className="py-28 border-t border-border/40">
        <div className="container-exec">
          <SectionHeader
            eyebrow="Global Experience"
            title="Mandates across four geographies."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {geos.map((g, i) => (
              <motion.div
                key={g.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-exec p-8"
              >
                <Globe2 size={20} className="text-[color:var(--gold)]" />
                <div className="mt-6 font-display text-3xl">{g.code}</div>
                <div className="mt-1 text-sm text-foreground">{g.label}</div>
                <div className="mt-4 text-xs text-muted-foreground leading-relaxed">{g.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-28 border-t border-border/40">
        <div className="container-exec">
          <SectionHeader
            eyebrow="Credentials"
            title="Professional standing."
            intro="Globally recognized accreditations across accounting, finance and governance."
          />
          <div className="mt-14 flex flex-wrap gap-3">
            {credentials.map((c) => (
              <div
                key={c}
                className="border border-[color:var(--gold)]/40 px-6 py-4 text-xs uppercase tracking-[0.3em] text-foreground hover:bg-[color:var(--gold)] hover:text-[color:var(--navy-deep)] transition-colors"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 border-t border-border/40">
        <div className="container-exec">
          <SectionHeader
            eyebrow="Executive Impact"
            title="In the words of those who served alongside."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-exec p-8 flex flex-col"
              >
                <Quote size={24} className="text-[color:var(--gold)]" />
                <p className="mt-6 text-base leading-relaxed text-foreground/90 font-display italic">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-border/60">
                  <div className="text-sm text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">{t.role}</div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-border/40">
        <div className="container-exec">
          <div className="relative overflow-hidden border border-[color:var(--gold)]/30 p-12 md:p-20 text-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{ background: "var(--gradient-radial-gold)" }}
            />
            <div className="relative">
              <span className="eyebrow justify-center">Engage</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl max-w-2xl mx-auto">
                Boards, investors and executive committees seeking transformation.
              </h2>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[color:var(--navy-deep)] hover:bg-[color:var(--gold-soft)] transition-all"
              >
                Begin a Conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
