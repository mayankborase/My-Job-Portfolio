import React, { useState, useEffect } from "react";
import { Sun, Moon, Sparkles, ArrowUp, Droplet } from "lucide-react";

interface LiquidThemeDockProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  lightEffectsEnabled: boolean;
  setLightEffectsEnabled: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const LiquidThemeDock: React.FC<LiquidThemeDockProps> = ({
  darkMode,
  setDarkMode,
  lightEffectsEnabled,
  setLightEffectsEnabled
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Liquid Floating Control Pill */}
      <div
        className="flex items-center gap-1.5 p-1.5 rounded-2xl border backdrop-blur-2xl shadow-xl transition-all"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-card)",
          boxShadow: "0 12px 35px -8px rgba(15, 23, 42, 0.18), inset 0 1px 2px 0 rgba(255, 255, 255, 0.6)"
        }}
      >
        {/* Liquid Indicator Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold text-blue-600 dark:text-cyan-400">
          <Droplet className="w-3.5 h-3.5 text-cyan-500 fill-cyan-400/30" />
          <span>Liquid UI</span>
        </div>

        <div className="hidden sm:block w-px h-5 bg-slate-300 dark:bg-slate-700" />

        {/* Light / Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            !darkMode
              ? "bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-md shadow-amber-500/30"
              : "hover:bg-white/10 text-slate-300"
          }`}
          title="Toggle Light Theme with Liquid Light Effect"
        >
          <Sun className="w-3.5 h-3.5" />
          <span className="text-[11px]">Light</span>
        </button>

        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            darkMode
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
              : "hover:bg-slate-200/60 text-slate-600"
          }`}
          title="Toggle Liquid Deep Dark Theme"
        >
          <Moon className="w-3.5 h-3.5" />
          <span className="text-[11px]">Deep</span>
        </button>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700" />

        {/* Light Effects Shimmer Toggle */}
        <button
          onClick={() => setLightEffectsEnabled((prev) => !prev)}
          aria-label={lightEffectsEnabled ? "Mute liquid caustics" : "Enable liquid caustics"}
          title={lightEffectsEnabled ? "Light Caustic Effects: Active" : "Light Caustic Effects: Off"}
          className={`p-1.5 rounded-xl transition-all cursor-pointer ${
            lightEffectsEnabled
              ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-400/40"
              : "text-slate-400 hover:text-slate-600 border border-transparent"
          }`}
        >
          <Sparkles className={`w-4 h-4 ${lightEffectsEnabled ? "animate-pulse" : ""}`} />
        </button>
      </div>

      {/* Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 rounded-2xl liquid-btn-glow text-white shadow-lg cursor-pointer transition-all hover:scale-110 flex items-center justify-center animate-fadeIn"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
