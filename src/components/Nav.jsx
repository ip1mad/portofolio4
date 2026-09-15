import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-700 bg-ink-900/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-signal/40 font-mono text-sm text-signal">
            A
          </span>
          <span className="font-mono text-sm text-paper">
            {profile.name}
            <span className="text-signal">.dev</span>
          </span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                  active === n.href
                    ? "text-signal"
                    : "text-muted hover:text-paper"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-md border border-signal/40 px-3 py-2 font-mono text-xs text-signal transition-colors hover:bg-signal/10"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-paper transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-paper transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-paper transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-t border-ink-700 bg-ink-900/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col py-3">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-sm text-muted hover:text-signal"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
