import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Scale, TrendingUp, RefreshCw, Banknote, Handshake, ShieldAlert,
  Layers, Compass, Cog, AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Core Expertise — Vicks Vickneswaran" },
      { name: "description", content: "Governance, transformation, restructuring, M&A, capital structuring and crisis management — disciplines deployed in the boardroom." },
      { property: "og:title", content: "Core Expertise — Vicks Vickneswaran" },
      { property: "og:description", content: "Boardroom-grade disciplines: governance, transformation, restructuring, M&A and more." },
    ],
  }),
  component: ExpertisePage,
});

const items = [
  { icon: Scale, t: "Corporate Governance", d: "Board effectiveness, audit committee leadership, regulatory standing and stakeholder trust." },
  { icon: TrendingUp, t: "Business Transformation", d: "Re-architecting operating models, organizational design and performance frameworks." },
  { icon: RefreshCw, t: "Turnaround Strategy", d: "Stabilization, cash discipline and operational reset for under-performing enterprises." },
  { icon: Banknote, t: "Financial Restructuring", d: "Debt reorganization, lender negotiation and balance sheet repair." },
  { icon: Handshake, t: "M&A Advisory", d: "Acquisition strategy, due diligence oversight and post-merger integration." },
  { icon: ShieldAlert, t: "Risk Management", d: "Enterprise risk frameworks, internal controls and compliance posture." },
  { icon: Layers, t: "Capital Structuring", d: "Optimizing capital stack, refinancing and access to growth capital." },
  { icon: Compass, t: "Strategic Leadership", d: "Translating board intent into executable management agendas." },
  { icon: Cog, t: "Operational Optimization", d: "Working capital reset, receivables discipline and margin recovery." },
  { icon: AlertTriangle, t: "Crisis Management", d: "Decisive intervention during liquidity, governance or reputational stress." },
];

function ExpertisePage() {
  return (
    <section className="py-24">
      <div className="container-exec">
        <SectionHeader
          eyebrow="Core Expertise"
          title="Disciplines deployed in the boardroom."
          intro="Each capability is grounded in operating experience — earned across CFO, COO, board and advisory mandates."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-exec p-8"
            >
              <it.icon className="text-[color:var(--gold)]" size={22} />
              <div className="mt-6 font-display text-2xl">{it.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-3 gap-6">
          {[
            { t: "Board Advisor", d: "Independent counsel to chairs, committees and CEOs on strategy, risk and governance." },
            { t: "Fractional Executive", d: "Embedded COO/CFO leadership during transformation, succession or interim need." },
            { t: "Transformation Consultant", d: "Programmatic restructuring of operations, finance and capital." },
          ].map((r) => (
            <div key={r.t} className="border-t border-[color:var(--gold)]/40 pt-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Engagement Mode</div>
              <div className="mt-3 font-display text-2xl">{r.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
