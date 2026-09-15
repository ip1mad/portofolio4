import { motion } from "framer-motion";
import { stack } from "../data/content";
import SectionLabel from "./ui/SectionLabel";

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionLabel index="03">Toolkit</SectionLabel>

        <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          The tools I reach for — grouped the way I actually think about them.
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {stack.map((cat, i) => (
            <motion.div
              key={cat.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card p-6 ${
                cat.primary ? "border-signal/40 bg-signal/[0.04]" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="mono-label text-muted">{cat.group}</p>
                {cat.primary && (
                  <span className="font-mono text-[11px] text-signal">
                    primary
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-md border px-3 py-1.5 font-mono text-sm transition-colors ${
                      cat.primary
                        ? "border-signal/30 text-paper hover:bg-signal/10"
                        : "border-ink-700 text-muted hover:border-signal/50 hover:text-signal"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
