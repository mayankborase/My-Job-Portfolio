import React from "react";
import { ArrowDown, Download, Mail, ExternalLink, Code2, Sparkles, MapPin, CheckCircle2, Droplets } from "lucide-react";
import { profileData } from "../data/profile";
import { heroFloatingBadges } from "../data/skills";
import { TechIcon } from "./TechIcon";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status availability badge with liquid aura */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-xl transition-all shadow-sm group hover:border-blue-400"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-main)",
                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)"
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-400" />
              </span>
              <span className="tracking-wide">Open to Internships & Software Opportunities</span>
            </div>

            <div
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-xl text-blue-600 dark:text-cyan-400"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)"
              }}
            >
              <Droplets className="w-3 h-3 text-cyan-500" />
              <span>Liquid Theme</span>
            </div>
          </div>

          {/* Small greeting */}
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-1.5 flex items-center gap-2">
            <span>Hi, I'm</span>
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-transparent" />
          </p>

          {/* Large Main Heading with Liquid Light Sheen */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 transition-colors"
            style={{ color: "var(--text-main)" }}
          >
            {profileData.name}
          </h1>

          {/* Subtitle Role with Liquid Gradient */}
          <h2 className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 mb-5 leading-snug">
            {profileData.heroSubtitle}
          </h2>

          {/* Short introduction description */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {profileData.heroDescription}
          </p>

          {/* Action Buttons with Liquid Light Refraction */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white liquid-btn-glow rounded-xl flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto shadow-lg"
            >
              <span>View My Projects</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={() => scrollTo("resume")}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold liquid-btn-glass rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:border-blue-400 w-full sm:w-auto"
              style={{
                color: "var(--text-main)"
              }}
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-3.5 text-sm sm:text-base font-semibold rounded-xl border border-transparent hover:border-blue-500/40 hover:bg-blue-500/10 flex items-center justify-center gap-2 cursor-pointer transition-all hover:text-blue-600 w-full sm:w-auto"
              style={{
                color: "var(--text-secondary)"
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Location & Key Focus Indicator */}
          <div
            className="mt-10 pt-6 border-t w-full flex flex-wrap items-center gap-6 text-xs sm:text-sm"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--text-secondary)"
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="font-medium">{profileData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-500 shrink-0" />
              <span className="font-medium">Java · Python · React · Android · AI/ML</span>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Showcase with Caustic Light Rings */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
            {/* Ambient Caustic Pulsing Halo */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-60 dark:opacity-70 transition-opacity animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(6,182,212,0.3) 45%, transparent 75%)"
              }}
              aria-hidden="true"
            />

            {/* Concentric Liquid Light Rings */}
            <div
              className="absolute inset-1 sm:inset-3 rounded-full border border-cyan-400/30 dark:border-cyan-400/40 animate-[spin_40s_linear_infinite]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-blue-400/40 dark:border-blue-400/50 animate-[spin_25s_linear_infinite_reverse]"
              aria-hidden="true"
            />

            {/* Central Liquid Glass Container */}
            <div
              className="relative z-10 w-64 sm:w-76 md:w-80 h-64 sm:h-76 md:h-80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center backdrop-blur-2xl border transition-all group liquid-card"
            >
              {/* Top Accent Bar with Specular Light */}
              <div
                className="w-full flex items-center justify-between pb-3 border-b text-xs"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span className="font-mono text-blue-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                  ~/mayank/dev
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                </span>
              </div>

              {/* Developer Visual Icon & Avatar with Liquid Light Reflection */}
              <div className="flex flex-col items-center my-auto">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 mb-4 ring-2 ring-white/40 transition-transform group-hover:scale-105">
                  <Code2 className="w-10 h-10 sm:w-12 sm:h-12" />
                  <span className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-md pointer-events-none" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl" style={{ color: "var(--text-main)" }}>
                  Mayank Borase
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                  Data Science Engineering & AI
                </p>
              </div>

              {/* Bottom Quick Metric / Specifier */}
              <div
                className="w-full pt-3 border-t grid grid-cols-2 text-center text-xs font-medium"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
              >
                <div>
                  <span className="block font-bold text-sm" style={{ color: "var(--text-main)" }}>
                    6+
                  </span>
                  <span>Projects</span>
                </div>
                <div>
                  <span className="block font-bold text-sm" style={{ color: "var(--text-main)" }}>
                    B.E.
                  </span>
                  <span>Student</span>
                </div>
              </div>
            </div>

            {/* Subtle Floating Tech Badges with Liquid Buoyancy */}
            {/* Top Left: Java */}
            <div
              className="absolute -top-3 left-4 sm:-left-4 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-semibold animate-float-1 cursor-default hover:scale-110 transition-transform shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-main)",
                boxShadow: "var(--card-shadow)"
              }}
            >
              <TechIcon name="Coffee" className="w-4 h-4 text-amber-500" />
              <span>Java</span>
            </div>

            {/* Top Right: Python */}
            <div
              className="absolute -top-2 right-4 sm:-right-4 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-semibold animate-float-2 cursor-default hover:scale-110 transition-transform shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-main)",
                boxShadow: "var(--card-shadow)"
              }}
            >
              <TechIcon name="Terminal" className="w-4 h-4 text-blue-500" />
              <span>Python</span>
            </div>

            {/* Middle Right: React */}
            <div
              className="absolute top-1/2 -right-6 sm:-right-8 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-semibold animate-float-3 cursor-default hover:scale-110 transition-transform shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-main)",
                boxShadow: "var(--card-shadow)"
              }}
            >
              <TechIcon name="Atom" className="w-4 h-4 text-cyan-500" />
              <span>React</span>
            </div>

            {/* Bottom Left: Android */}
            <div
              className="absolute bottom-4 -left-4 sm:-left-6 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-semibold animate-float-2 cursor-default hover:scale-110 transition-transform shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-main)",
                boxShadow: "var(--card-shadow)"
              }}
            >
              <TechIcon name="Smartphone" className="w-4 h-4 text-emerald-500" />
              <span>Android</span>
            </div>

            {/* Bottom Right: AI */}
            <div
              className="absolute -bottom-3 right-8 sm:right-6 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-semibold animate-float-1 cursor-default hover:scale-110 transition-transform shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)",
                color: "var(--text-main)",
                boxShadow: "var(--card-shadow)"
              }}
            >
              <TechIcon name="BrainCircuit" className="w-4 h-4 text-indigo-500" />
              <span>AI / ML</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle indicator for scrolling down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
          Explore Portfolio
        </span>
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll to About section"
          className="p-1 rounded-full text-blue-500 cursor-pointer animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
