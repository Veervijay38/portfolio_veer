import { MapPin, Calendar } from "lucide-react";
import { veerData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            03. Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
            Work History
          </h2>
          <div className="h-1 w-16 bg-accent rounded mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {veerData.experience.map((job, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Dot */}
                <div className="absolute left-0 md:left-6 top-6 w-4 h-4 rounded-full bg-accent border-2 border-bg hidden md:block" />

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text">
                        {job.role}
                      </h3>
                      <p className="text-accent-light font-medium mt-1">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 md:items-end text-sm text-text-secondary">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
