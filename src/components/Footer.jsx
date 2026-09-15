import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — built with React &
          Tailwind.
        </p>
        <p className="font-mono text-xs text-muted">
          Designed & coded from {profile.location}.
        </p>
      </div>
    </footer>
  );
}
