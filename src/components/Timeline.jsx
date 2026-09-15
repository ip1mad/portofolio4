import { motion } from "framer-motion";
import { timeline, certifications } from "../data/content";
import SectionLabel from "./ui/SectionLabel";

export default function Timeline() {
  return (
    <section id="path" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionLabel index="04">Path so far</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* timeline */}
          <div className="lg:col-span-8">
            <ol className="relative border-l border-ink-700 pl-8">
              {timeline.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="mb-10 last:mb-0"
                >
                  <span
                    className={`absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                      item.type === "work"
                        ? "border-signal bg-signal/20"
                        : "border-ink-600 bg-ink-900"
                    }`}
                  />
                  <p className="mb-1 font-mono text-xs text-signal">
                    {item.period}
                  </p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.org}</p>
                  {item.detail && (
                    <p className="mt-2 max-w-lg leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  )}
                </motion.li>
              ))}
            </ol>
          </div>

          {/* certifications */}
          <div className="lg:col-span-4">
            <p className="mono-label mb-4 text-muted">Certification</p>
            <div className="space-y-4">
              {certifications.map((c) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card p-5"
                >
                  <p className="font-medium leading-snug">{c.title}</p>
                  <p className="mt-2 font-mono text-xs text-signal">
                    {c.issuer}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {c.date} · {c.meta}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
