import { motion } from "framer-motion";
import { interests, profile } from "../data/content";
import SectionLabel from "./ui/SectionLabel";
import { useInView } from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x" ref={ref}>
        <SectionLabel index="01">Who I am</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-2xl font-medium leading-relaxed sm:text-3xl">
              I'm drawn to the{" "}
              <span className="text-signal">invisible half</span> of software —
              the data models, the business logic, the APIs that hold an
              application together.
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                I'm currently studying <strong className="text-paper">
                Teknologi Rekayasa Perangkat Lunak (D4)</strong> at IPB
                University, an applied software-engineering programme. Alongside
                it, I work as a backend developer at PKSPL IPB, where I turn a
                real research domain — the economic valuation of marine
                ecosystems — into a working system.
              </p>
              <p>
                My comfort zone is thinking in terms of{" "}
                <span className="text-paper">
                  entities, relationships and flows
                </span>
                : how data should be shaped, how the pieces connect, and how a
                complex domain becomes something you can query and trust. I also
                enjoy stepping into data and machine learning when a problem
                calls for it.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="card p-6">
              <p className="mono-label mb-4 text-muted">Where I'm heading</p>
              <ul className="space-y-3">
                {interests.map((it, i) => (
                  <li key={it} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-paper">{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-ink-700 pt-5">
                <p className="mono-label mb-2 text-muted">Based in</p>
                <p className="font-mono text-sm text-paper">
                  {profile.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
