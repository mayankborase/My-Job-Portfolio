import React from "react";
import { profileData } from "../data/profile";
import { TechIcon } from "./TechIcon";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Get To Know Me
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Main Content Layout */}
        <div
          className="liquid-card p-6 sm:p-10 lg:p-12 mb-10 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-slate-200"
              >
                Passionate about building practical software solutions.
              </h3>

              <div
                className="space-y-4 text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {profileData.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Interests List */}
              <div className="mt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-3">
                  Core Engineering Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {profileData.about.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl border backdrop-blur-md transition-all hover:scale-105 cursor-default"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-main)",
                        boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information Cards (Liquid Frosted Glass) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.about.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between group"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-card)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400 mb-3 transition-transform group-hover:scale-110">
                    <TechIcon name={card.iconName} className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-400 dark:text-slate-500">
                      {card.title}
                    </span>
                    <h4
                      className="text-base font-bold mb-1 leading-snug group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors"
                      style={{ color: "var(--text-main)" }}
                    >
                      {card.value}
                    </h4>
                    {card.description && (
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
