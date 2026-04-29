import { ExternalLink, Smartphone, Globe, Layers } from "lucide-react";
import { veerData } from "@/lib/data";

const typeIcon = {
  "Mobile App": Smartphone,
  "Web App": Globe,
  "Full Stack": Layers,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            04. Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
            Featured Work
          </h2>
          <div className="h-1 w-16 bg-accent rounded mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {veerData.projects.map((project) => {
            const Icon =
              typeIcon[project.type as keyof typeof typeIcon] || Globe;
            return (
              <div
                key={project.name}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col card-hover group"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20">
                    <Icon size={20} className="text-accent-light" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-text-secondary bg-surface px-2 py-1 rounded-md border border-border">
                      {project.type}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-text-secondary hover:text-accent-light transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                {/* Name & Description */}
                <h3 className="font-display font-bold text-lg text-text mb-2 group-hover:text-accent-light transition-colors">
                  {project.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-surface border border-border text-xs font-mono text-text-secondary rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
