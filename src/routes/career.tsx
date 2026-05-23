import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career Highlights — Vicks Vickneswaran" },
      { name: "description", content: "Four decades across Al Rostamani Group, Corporate Consultants Consortium, HVA Group, Chiyoda / Audex and international advisory mandates." },
      { property: "og:title", content: "Career Highlights — Vicks Vickneswaran" },
      { property: "og:description", content: "Measurable transformation outcomes across diversified global enterprises." },
    ],
  }),
  component: CareerPage,
});

const timeline = [
  {
    org: "Al Rostamani Group",
    role: "Senior Executive Leadership · UAE",
    points: [
      "Led financial transformation across a diversified UAE conglomerate.",
      "Drove governance and capital discipline across multiple operating divisions.",
      "Stabilized balance sheets and reset working capital frameworks.",
    ],
  },
  {
    org: "Corporate Consultants Consortium",
    role: "Advisory Principal · International",
    points: [
      "Advised boards and shareholders on restructuring and M&A.",
      "Counsel on governance, capital structuring and organizational reset.",
      "Cross-border mandates spanning UAE, Singapore and South Asia.",
    ],
  },
  {
    org: "HVA Group",
    role: "Group Finance & Operations Director · Sri Lanka & Region",
    points: [
      "Led group-wide operational transformation across multi-sector portfolio.",
      "Restored receivables discipline — achieving a 90% reduction in aged receivables.",
      "Capital optimization and refinancing across operating subsidiaries.",
      "Prepared the group for public listing.",
    ],
  },
  {
    org: "Chiyoda Group / Audex",
    role: "Executive Leadership · Sri Lanka & International",
    points: [
      "Negotiated and executed hydropower and infrastructure contracts.",
      "Built executive capability across finance, operations and governance.",
    ],
  },
  {
    org: "International Advisory Roles",
    role: "Board Advisor · Fractional Executive",
    points: [
      "Engaged by boards and investors across four jurisdictions.",
      "Mandates spanning turnaround, transformation and value creation.",
      "Independent governance and audit committee counsel.",
    ],
  },
];

const metrics = [
  { k: "90%", v: "Receivables Reduction", n: "Group-wide working capital reset" },
  { k: "1", v: "Successful Public Listing", n: "End-to-end capital markets execution" },
  { k: "Multi", v: "Sector Operational Leadership", n: "Industrial, infrastructure, services" },
  { k: "$$", v: "Capital Optimization", n: "Refinancing & balance sheet repair" },
];

const rolesHeld = [
  "Chief Executive Officer",
  "Chief Financial Officer",
  "Chief Operating Officer",
  "Head of Human Resources",
  "General Manager",
];

function CareerPage() {
  return (
    <div>
      <section className="py-24">
        <div className="container-exec">
          <SectionHeader
            eyebrow="Career Highlights"
            title="Four decades. Measurable outcomes."
            intro="A selected record of executive and advisory mandates across diversified global organizations."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
            {metrics.map((m) => (
              <div key={m.v} className="bg-[color:var(--navy-deep)] p-7">
                <div className="font-display text-4xl text-[color:var(--gold)]">{m.k}</div>
                <div className="mt-2 text-sm text-foreground">{m.v}</div>
                <div className="mt-2 text-xs text-muted-foreground">{m.n}</div>
              </div>
            ))}
          </div>

          <div className="mt-24 relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border/60" />
            <div className="space-y-16">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.org}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[color:var(--gold)] ring-4 ring-[color:var(--navy-deep)]" />
                  <div className="pl-10 md:pl-0 md:text-right md:pr-12">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
                      Chapter {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 font-display text-3xl">{t.org}</h3>
                    <div className="mt-2 text-sm text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="pl-10 md:pl-12 mt-4 md:mt-0">
                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      {t.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-2 h-px w-4 bg-[color:var(--gold)] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
