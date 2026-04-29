import { GraduationCap } from "lucide-react";
import { veerData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            01. About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
            About Me
          </h2>
          <div className="h-1 w-16 bg-accent rounded mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {veerData.bio}
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Currently based in{" "}
              <span className="text-accent-light">{veerData.location}</span>, I
              bring together strong technical foundations with a collaborative
              approach to deliver products that users love.
            </p>

            {/* Education */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <GraduationCap size={18} className="text-accent-light" />
                </div>
                <h4 className="font-semibold text-text">Education</h4>
              </div>
              {veerData.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-text text-sm font-medium">{edu.degree}</p>
                  <p className="text-text-secondary text-xs mt-0.5">
                    {edu.school} · {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 glow-border">
              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-3xl font-display font-bold text-white mx-auto mb-4">
                  VR
                </div>
                <h3 className="font-display font-bold text-xl text-text">
                  {veerData.name}
                </h3>
                <p className="text-accent-light text-sm mt-1">{veerData.title}</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Specialization", value: "React Native & React.js" },
                  { label: "Experience", value: "7+ Years" },
                  { label: "Apps Deployed", value: "10+" },
                  { label: "Status", value: "Open to Work ✓" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-text-secondary text-sm">{label}</span>
                    <span className="text-text text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent rounded-2xl px-4 py-2 text-white text-xs font-mono font-bold shadow-lg shadow-accent/30">
              7+ yrs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
