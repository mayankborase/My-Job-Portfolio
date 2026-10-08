import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { profileData } from "../data/profile";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
  lightEffectsEnabled?: boolean;
  setLightEffectsEnabled?: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeSection,
  lightEffectsEnabled = true,
  setLightEffectsEnabled
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b py-3 backdrop-blur-2xl shadow-lg"
          : "py-4 sm:py-5 bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
        borderColor: isScrolled ? "var(--border-subtle)" : "transparent"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark with Liquid Glow */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight transition-all hover:opacity-90 group"
          style={{ color: "var(--text-main)" }}
        >
          <span className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/30 ring-1 ring-white/40 transition-transform group-hover:scale-105">
            MB
            <span className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-sm pointer-events-none" />
          </span>
          <span className="font-semibold text-base sm:text-lg">
            Mayank<span className="text-blue-600 font-bold">.dev</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) with Liquid Pill Highlight */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-2xl border backdrop-blur-xl"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-subtle)",
            boxShadow: "inset 0 1px 2px 0 rgba(255, 255, 255, 0.6)"
          }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-blue-500/30"
                    : "hover:text-blue-600 hover:bg-blue-500/10 dark:hover:bg-white/5"
                }`}
                style={{
                  color: isActive ? "#ffffff" : "var(--text-secondary)"
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Theme Toggle & Light Effects & Resume Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light Effects Toggle */}
          {setLightEffectsEnabled && (
            <button
              onClick={() => setLightEffectsEnabled((prev) => !prev)}
              aria-label={lightEffectsEnabled ? "Disable Light Effects" : "Enable Light Effects"}
              title={lightEffectsEnabled ? "Liquid Light Effects: Active (Click to mute)" : "Liquid Light Effects: Off (Click to activate)"}
              className={`p-2 sm:px-2.5 sm:py-2 rounded-xl border backdrop-blur-xl transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                lightEffectsEnabled
                  ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 shadow-sm shadow-cyan-500/20"
                  : "border-slate-300 dark:border-slate-700 opacity-60"
              }`}
              style={{
                backgroundColor: lightEffectsEnabled ? undefined : "var(--bg-card)",
                color: lightEffectsEnabled ? undefined : "var(--text-secondary)"
              }}
            >
              <Sparkles className={`w-4 h-4 ${lightEffectsEnabled ? "text-cyan-500 animate-spin [animation-duration:8s]" : "text-slate-400"}`} />
              <span className="hidden sm:inline">Light Effects</span>
            </button>
          )}

          {/* Theme Toggle Button (Liquid Light vs Liquid Deep) */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? "Switch to Liquid Light Theme" : "Switch to Liquid Deep Theme"}
            title={darkMode ? "Current: Liquid Deep Mode (Click for Liquid Light)" : "Current: Liquid Light Mode (Click for Liquid Deep)"}
            className="px-3 py-2 rounded-xl transition-all border backdrop-blur-xl hover:scale-105 cursor-pointer relative group flex items-center gap-1.5 text-xs font-semibold"
            style={{
              borderColor: "var(--border-card)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)",
              boxShadow: "0 2px 10px -2px rgba(0, 0, 0, 0.05), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6)"
            }}
          >
            {darkMode ? (
              <>
                <Moon className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Liquid Deep</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-500 animate-[spin_16s_linear_infinite]" />
                <span className="hidden sm:inline">Liquid Light</span>
              </>
            )}
            <span className="absolute -inset-1 rounded-xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>

          {/* Quick Resume CTA with Liquid Glow */}
          <a
            href="#resume"
            onClick={(e) => handleNavClick(e, "#resume")}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl liquid-btn-glow whitespace-nowrap transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2.5 rounded-xl border transition-colors backdrop-blur-xl cursor-pointer"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)"
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b px-4 py-4 backdrop-blur-2xl animate-fadeIn"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-subtle)"
          }}
        >
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-blue-600 bg-blue-500/10 font-bold"
                      : ""
                  }`}
                  style={{
                    color: isActive ? undefined : "var(--text-main)"
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm shadow-blue-500"></span>}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t flex flex-col gap-2" style={{ borderColor: "var(--border-subtle)" }}>
              <a
                href="#resume"
                onClick={(e) => handleNavClick(e, "#resume")}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white liquid-btn-glow rounded-xl flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold border rounded-xl flex items-center justify-center gap-2 liquid-btn-glass"
                style={{
                  color: "var(--text-main)"
                }}
              >
                <span>Let's Connect</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
