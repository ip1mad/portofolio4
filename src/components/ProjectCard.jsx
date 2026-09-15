import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(index === 0); // first project open by default
  const accent = project.accent === "amber" ? "text-amber-soft" : "text-signal";
  const accentBorder =
    project.accent === "amber"
      ? "hover:border-amber-soft/50"
      : "hover:border-signal/50";
  const accentBg =
    project.accent === "amber" ? "bg-amber-soft" : "bg-signal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`card overflow-hidden transition-colors ${accentBorder}`}
    >
      {/* header row — always visible */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-5 p-6 text-left sm:p-8"
        aria-expanded={open}
      >
        <span className={`mt-1 font-mono text-sm ${accent}`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-muted">
              {project.year}
            </span>
          </div>
          <p className="mt-1 text-muted">{project.subtitle}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="chip">{project.kind}</span>
            <span className="chip">{project.role}</span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-md border border-ink-700 px-2.5 py-1 font-mono text-[11px] ${accent}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${accentBg}`} />
              {project.status}
            </span>
          </div>
        </div>

        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink-700 font-mono text-lg transition-transform ${
            open ? "rotate-45 text-signal" : "text-muted"
          }`}
        >
          +
        </span>
      </button>

      {/* expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink-700 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-12">
                {/* narrative */}
                <div className="space-y-6 lg:col-span-7">
                  <Block label="Context" accent={accent}>
                    {project.context}
                  </Block>
                  <Block label="What it does" accent={accent}>
                    {project.does}
                  </Block>
                  <div>
                    <p className={`mono-label mb-3 ${accent}`}>My role</p>
                    <ul className="space-y-2.5">
                      {project.contributions.map((c) => (
                        <li key={c} className="flex gap-3 text-muted">
                          <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accentBg}`} />
                          <span className="leading-relaxed">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* technical sidebar */}
                <div className="space-y-6 lg:col-span-5">
                  {/* schema-style concept map */}
                  <div className="card border-ink-700 bg-ink-900/60 p-5">
                    <p className={`mono-label mb-4 ${accent}`}>
                      System concepts
                    </p>
                    <div className="space-y-1.5">
                      {project.concepts.map((c, i) => (
                        <div
                          key={c}
                          className="flex items-center gap-2 font-mono text-xs text-paper/90"
                        >
                          <span className="text-muted">
                            {i === project.concepts.length - 1 ? "└─" : "├─"}
                          </span>
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className={`mono-label mb-3 ${accent}`}>Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.links?.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-ink-700 px-4 py-2 font-mono text-xs hover:border-signal/60 hover:text-signal"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="font-mono text-xs text-muted">
                      ▹ Private / internal project — no public link.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function Block({ label, accent, children }) {
  return (
    <div>
      <p className={`mono-label mb-2 ${accent}`}>{label}</p>
      <p className="leading-relaxed text-paper/90">{children}</p>
    </div>
  );
}
