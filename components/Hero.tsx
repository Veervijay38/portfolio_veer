"use client";

import { Github, Linkedin, Mail, ArrowDown, ExternalLink, DownloadIcon } from "lucide-react";
import { veerData } from "@/lib/data";
import { useRef } from "react";
import Lottie from "lottie-react";
import heroAnim from "@/assets/programming.json";
import { Typewriter } from "react-simple-typewriter";



export default function Hero() {

  const lottieRef = useRef<any>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-glow pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />


      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-fit max-w-10xl mx-auto">
        {/* ----- LEFT SIDE – TEXT ----- */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          {/* Badge */}
          <div className="inline-flex mt-10 items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent-light text-xs font-mono tracking-widest mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="font-display font-bold leading-tight mb-1 animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="block text-text-secondary text-lg font-sans font-light tracking-widest uppercase mb-1">
              Hi, I&apos;m
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl text-gradient">
              {veerData.shortName}
            </span>
            <span className="block text-3xl md:text-5xl text-text mt-1">
              Rana
            </span>
          </h1>

          {/* Title */}
          <div
            className="flex items-center justify-center md:justify-start gap-3 mb-5 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <div className="h-px w-12 bg-border" />
            <p className="font-mono text-accent-light text-sm tracking-wider">
              <Typewriter
                words={veerData.typewriterWords}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                loop={10}
                delaySpeed={500}
              />
            </p>
            {/* <div className="h-px w-12 bg-border" /> */}
          </div>

          {/* Bio */}
          <p
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed mb-5 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {veerData.shortBio}
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {veerData.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-border rounded-xl p-4"
              >
                <div className="text-2xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-5 animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            {/* <div className="flex gap-3 justify-center">
              {[
                { icon: ExternalLink, href: "#projecys", label: "Projects" },

                { icon: DownloadIcon, href: "/Janki-Rana-Resume.pdf", label: "Resume", },
                { icon: Mail, href:"#contact", label: "Get In Touch" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-6 py-3 bg-accent hover:bg-accent-light rounded-xl text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                  aria-label={label}
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div> */}
            <a
              href="#projects"
              className="inline-flex items-center gap-1 px-6 py-3 bg-accent hover:bg-accent-light rounded-xl text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              View Projects
              <ExternalLink size={16} />
            </a>
            <a
              href="/Veervijaysinh_Rana_CV.pdf"
              className="inline-flex items-center gap-1 px-6 py-3 bg-accent hover:bg-accent-light rounded-xl text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Resume
              <DownloadIcon size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-6 py-3 bg-surface border border-border hover:border-accent/50 rounded-xl text-text font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
              <Mail size={16} />
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex gap-4 justify-center md:justify-start animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {[
              { icon: Github, href: veerData.github, label: "GitHub" },
              { icon: Linkedin, href: veerData.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${veerData.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface border border-border hover:border-accent/50 text-text-secondary hover:text-accent-light transition-all duration-200 hover:-translate-y-1"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ----- RIGHT SIDE – Lottie animation ----- */}
        <div className="flex-1 hidden md:block w-full max-w-md">
          {/* The Lottie component will keep its intrinsic aspect‑ratio */}
          <Lottie
            lottieRef={lottieRef}
            animationData={heroAnim}
            loop
            className="w-full h-auto"
            onMouseEnter={() => lottieRef.current?.pause()}
            onMouseLeave={() => lottieRef.current?.play()}

          />
        </div>
      </div>


      <div className="absolute bottom-2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary animate-float">
        <span className="text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
