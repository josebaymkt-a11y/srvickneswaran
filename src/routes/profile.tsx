import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import portrait from "@/assets/vicks-portrait.jpg";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Executive Profile — Vicks Vickneswaran" },
      { name: "description", content: "Board advisor, transformation leader, former COO & CFO with four decades of international executive experience." },
      { property: "og:title", content: "Executive Profile — Vicks Vickneswaran" },
      { property: "og:description", content: "Board advisor and transformation leader with four decades of executive experience." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div>
      <section className="py-24">
        <div className="container-exec grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5]">
              <div className="absolute -inset-3 border border-[color:var(--gold)]/40" />
              <img src={portrait} alt="Vicks Vickneswaran" className="relative h-full w-full object-cover grayscale-[15%]" />
            </div>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex justify-between border-b border-border/60 pb-2"><span className="uppercase tracking-[0.25em] text-[10px] text-[color:var(--gold)]">Based</span><span>Dubai, UAE</span></div>
              <div className="flex justify-between border-b border-border/60 pb-2"><span className="uppercase tracking-[0.25em] text-[10px] text-[color:var(--gold)]">Tenure</span><span>40+ Years</span></div>
              <div className="border-b border-border/60 pb-2"><div className="uppercase tracking-[0.25em] text-[10px] text-[color:var(--gold)]">Focus</div><div className="mt-2 text-right text-xs leading-relaxed">Board advisory, executive director and consultant director on a fractional basis — supporting company owners and management boards.</div></div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Executive Profile"
              title="Vicks Vickneswaran"
              intro="Board advisor, transformation leader, fractional executive — known for stabilizing complex organizations and unlocking enterprise value."
            />

            <div className="mt-12 space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Vicks brings four decades of international leadership shaped across
                diversified conglomerates, listed enterprises, and infrastructure-led
                groups. His career has been defined by complex restructurings,
                multi-jurisdictional operations, and the disciplined application of
                governance under pressure.
              </p>
              <p>
                He has held the offices of Chief Executive Officer, Chief Operating
                Officer and Chief Financial Officer across organizations operating in
                the UAE, Singapore, Indonesia and Sri Lanka — and now applies that
                experience as a board advisor and fractional executive to organizations
                navigating transformation, turnaround or capital reorganization.
              </p>
              <p>
                His perspective is operational as much as financial. Boards rely on him
                to translate strategy into execution, to confront under-performance with
                clarity, and to leave organizations measurably stronger than he found
                them.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {[
                { t: "Boardroom Posture", d: "Independent judgement, governance discipline, and the calm authority complex situations require." },
                { t: "Operating Lens", d: "Functional command across finance, operations, risk, and capital — earned in the seat, not the seminar." },
                { t: "Stakeholder Trust", d: "A track record with shareholders, lenders, regulators and management teams across four jurisdictions." },
                { t: "Transformation Mandate", d: "Brought in to stabilize, restructure, optimize and scale — and to leave durable institutional capability behind." },
              ].map((b) => (
                <div key={b.t} className="card-exec p-7">
                  <div className="font-display text-xl">{b.t}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
