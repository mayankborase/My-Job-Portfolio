import React from "react";
import { profileData } from "../data/profile";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer
      className="border-t pt-14 pb-8 px-4 sm:px-6 lg:px-8 transition-colors backdrop-blur-2xl"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b" style={{ borderColor: "var(--border-subtle)" }}>
          {/* Brand & Motto */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-2.5 mb-3 group">
              <span className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/30 transition-transform group-hover:scale-105">
                MB
                <span className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-sm pointer-events-none" />
              </span>
              <span className="font-bold text-lg" style={{ color: "var(--text-main)" }}>
                {profileData.name}
              </span>
            </a>
            <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 mb-2">
              Building projects. Learning technology. Solving problems.
            </p>
            <p className="text-xs sm:text-sm max-w-md leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Computer Engineering student dedicated to high-performance web applications, native Android software, and intelligent machine learning solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3 md:text-right">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl border backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-main)"
                  }}
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl border backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-main)"
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl border backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-main)"
                  }}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all hover:border-cyan-400 hover:scale-105 cursor-pointer backdrop-blur-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                color: "var(--text-secondary)"
              }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs gap-3" style={{ color: "var(--text-secondary)" }}>
          <p>© 2026 {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
