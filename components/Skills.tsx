import { veerData } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            02. Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
            Tech Stack
          </h2>
          <div className="h-1 w-16 bg-accent rounded mt-4" />
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(veerData.skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <h3 className="font-display font-semibold text-text mb-5 text-lg">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-accent-light text-xs font-mono hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
