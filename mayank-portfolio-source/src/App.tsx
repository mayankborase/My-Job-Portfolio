import React, { useState, useEffect } from "react";
import { LiquidBackground } from "./components/LiquidBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBar } from "./components/MarqueeBar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LiquidThemeDock } from "./components/LiquidThemeDock";

export default function App() {
  // Theme state: Liquid Light mode with light effect active by default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("mayank_portfolio_theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      // Default to Liquid Light Theme with light effect as requested
      return false;
    }
    return false;
  });

  const [lightEffectsEnabled, setLightEffectsEnabled] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("mayank_portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("mayank_portfolio_theme", "light");
    }
  }, [darkMode]);

  // Active section scroll spy
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "education",
      "experience",
      "certifications",
      "resume",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-500 selection:text-white transition-colors duration-400">
      {/* Dynamic Liquid Ambient Light Caustics & Pointer Glow */}
      <LiquidBackground
        darkMode={darkMode}
        lightEffectsEnabled={lightEffectsEnabled}
      />

      {/* Sticky Fixed Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        lightEffectsEnabled={lightEffectsEnabled}
        setLightEffectsEnabled={setLightEffectsEnabled}
      />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* Marquee Engineering Ribbon */}
        <MarqueeBar />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Programming Skills Section */}
        <Skills />

        {/* 4. Projects Showcase & Modal Section */}
        <Projects />

        {/* 5. Education Timeline Section */}
        <Education />

        {/* 6. Experience & Technical Training Section */}
        <Experience />

        {/* 7. Certifications & Achievements Section */}
        <Certifications />

        {/* 8. Resume Summary & Download Section */}
        <Resume />

        {/* 9. Contact & Social Channels Section */}
        <Contact />
      </main>

      {/* Floating Theme & Liquid Light Controls Dock */}
      <LiquidThemeDock
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lightEffectsEnabled={lightEffectsEnabled}
        setLightEffectsEnabled={setLightEffectsEnabled}
      />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
