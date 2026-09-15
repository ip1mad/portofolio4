// Subtle blueprint grid + animated "data node" — a technical motif,
// not a generic gradient blob.
export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(139,151,166,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,151,166,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* corner brackets */}
      <div className="absolute left-6 top-24 hidden h-16 w-16 border-l border-t border-signal/20 md:block" />
      <div className="absolute right-6 top-24 hidden h-16 w-16 border-r border-t border-signal/20 md:block" />
    </div>
  );
}
