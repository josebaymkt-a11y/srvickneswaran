import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </motion.div>
  );
}
