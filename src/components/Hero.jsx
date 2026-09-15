import { motion } from "framer-motion";
import { profile, now } from "../data/content";
import GridBackground from "./ui/GridBackground";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20"
    >
      <GridBackground />

      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* left: intro */}
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fade}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-850/60 px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] text-muted">
              Available for internships & collaboration
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="text-signal">.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-3 font-mono text-base text-signal sm:text-lg"
          >
            {profile.role}{" "}
            <span className="text-muted">// {profile.focus}</span>
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="mt-4 max-w-xl leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fade}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="rounded-lg bg-signal px-5 py-3 font-mono text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-ink-700 px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-signal/60 hover:text-signal"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* right: "current focus" terminal card */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fade}
          className="lg:col-span-5"
        >
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-ink-600" />
              <span className="h-3 w-3 rounded-full bg-ink-600" />
              <span className="h-3 w-3 rounded-full bg-signal/60" />
              <span className="ml-2 font-mono text-xs text-muted">
                current_focus.json
              </span>
            </div>
            <div className="space-y-3 p-5 font-mono text-sm leading-relaxed">
              <Line k="role" v={`"${now.title}"`} />
              <Line k="org" v={`"${now.org}"`} />
              <Line k="period" v={`"${now.period}"`} />
              <div>
                <span className="text-muted">"stack"</span>
                <span className="text-paper">: [</span>
                <div className="flex flex-wrap gap-1.5 py-2 pl-4">
                  {now.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-paper">]</span>
              </div>
            </div>
          </div>
          <p className="mt-4 pl-1 font-mono text-xs text-muted">
            <span className="text-signal">▹</span> {profile.location}
          </p>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-muted md:block"
      >
        scroll ↓
      </a>
    </section>
  );
}

function Line({ k, v }) {
  return (
    <div>
      <span className="text-muted">"{k}"</span>
      <span className="text-paper">: </span>
      <span className="text-signal-bright">{v}</span>
    </div>
  );
}
