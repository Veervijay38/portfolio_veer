import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">404</p>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient mb-4">
        Page Not Found
      </h1>
      <p className="text-text-secondary text-lg mb-8">
        Looks like this route doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light rounded-xl text-white font-medium transition-all duration-200"
      >
        ← Back Home
      </Link>
    </div>
  );
}
