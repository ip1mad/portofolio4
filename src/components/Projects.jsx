import { projects } from "../data/content";
import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionLabel index="02">Selected work</SectionLabel>

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Systems I've helped design and build.
          </h2>
          <p className="font-mono text-xs text-muted">
            {projects.length} projects · tap a card to expand
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
