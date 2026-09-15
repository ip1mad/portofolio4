import { motion } from "framer-motion";
import { profile } from "../data/content";
import SectionLabel from "./ui/SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionLabel index="05">Get in touch</SectionLabel>

        <div className="card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="border-b border-ink-700 p-8 sm:p-12 lg:col-span-7 lg:border-b-0 lg:border-r">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              >
                Let's build something,
                <br />
                or just talk shop.
              </motion.h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                I'm open to internships, junior backend roles and student
                collaborations. If you're working on something with interesting
                data or system-design problems, I'd love to hear about it.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-mono text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                Email me →
              </a>
            </div>

            <div className="p-8 sm:p-12 lg:col-span-5">
              <ul className="space-y-6 font-mono text-sm">
                <ContactRow label="email">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-paper hover:text-signal"
                  >
                    {profile.email}
                  </a>
                </ContactRow>
                <ContactRow label="phone">
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-paper hover:text-signal"
                  >
                    {profile.phone}
                  </a>
                </ContactRow>
                <ContactRow label="github">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper hover:text-signal"
                  >
                    @{profile.githubHandle} ↗
                  </a>
                </ContactRow>
                <ContactRow label="location">
                  <span className="text-paper">{profile.location}</span>
                </ContactRow>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }) {
  return (
    <li>
      <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      <div>{children}</div>
    </li>
  );
}
