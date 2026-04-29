import { veerData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-text-secondary text-sm">
        Built with{" "}
        <span className="text-accent-light font-mono">Next.js 14 + Tailwind</span>{" "}
        by{" "}
        <a
          href={veerData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent-light transition-colors"
        >
          {veerData.name}
        </a>
      </p>
    </footer>
  );
}
