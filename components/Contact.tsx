import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { veerData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
          05. Contact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          I&apos;m open to new opportunities, collaborations, and interesting projects.
          Feel free to reach out!
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: Mail,
              label: "Email",
              value: veerData.email,
              href: `mailto:${veerData.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: veerData.phone,
              href: `tel:${veerData.phone}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Stoney Creek, ON",
              href: "#",
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center gap-3 card-hover text-center"
            >
              <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                <Icon size={20} className="text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">{label}</p>
                <p className="text-text text-sm font-medium break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center">
          {[
            { icon: Github, href: veerData.github, label: "GitHub" },
            { icon: Linkedin, href: veerData.linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-xl text-text-secondary hover:text-accent-light hover:border-accent/50 transition-all duration-200 text-sm font-medium"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
