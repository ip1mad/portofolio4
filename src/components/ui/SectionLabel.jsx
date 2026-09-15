export default function SectionLabel({ index, children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="mono-label">
        {index ? `${index} / ` : ""}
        {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-signal/40 to-transparent" />
    </div>
  );
}
