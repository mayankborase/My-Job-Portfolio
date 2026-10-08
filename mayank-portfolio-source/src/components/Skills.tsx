import React, { useState } from "react";
import { skillCategories, SkillCategory, SkillItem } from "../data/skills";
import { TechIcon } from "./TechIcon";
import { Sparkles, Layers, CheckCircle } from "lucide-react";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "languages", label: "Languages" },
    { id: "web", label: "Web Dev" },
    { id: "backend", label: "Backend & DB" },
    { id: "mobile", label: "Mobile / Android" },
    { id: "ai", label: "AI & ML" },
    { id: "tools", label: "Tools" }
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Technical Competencies
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            My Programming Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Foundations in computer science, modern development toolchains, and emerging intelligent systems.
          </p>
        </div>

        {/* Category Filter Tabs with Liquid Pill Design */}
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 p-1.5 rounded-2xl border backdrop-blur-xl max-w-fit mx-auto"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-card)",
            boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30"
                    : "hover:text-blue-600 hover:bg-blue-500/10 dark:hover:bg-white/10"
                }`}
                style={{
                  color: isActive ? "#ffffff" : "var(--text-secondary)"
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="liquid-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Title with Specular Accent */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg" style={{ color: "var(--text-main)" }}>
                      {category.title}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {category.description}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-lg border text-blue-600 dark:text-cyan-400 backdrop-blur-md"
                    style={{
                      borderColor: "var(--border-subtle)",
                      backgroundColor: "var(--bg-card)"
                    }}
                  >
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills List within this Category */}
                <div className="grid grid-cols-1 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl border flex items-center justify-between backdrop-blur-md transition-all duration-200 hover:border-cyan-400/50 hover:bg-blue-50/50 dark:hover:bg-white/5"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-subtle)",
                        boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)"
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                          <TechIcon name={skill.iconName} className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-xs sm:text-sm" style={{ color: "var(--text-main)" }}>
                          {skill.name}
                        </span>
                      </div>

                      {/* Realistic Skill Level Indicator */}
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${
                          skill.level === "Advanced"
                            ? "bg-blue-500/15 border-blue-400/30 text-blue-600 dark:text-cyan-300"
                            : skill.level === "Intermediate"
                            ? "bg-slate-500/10 border-slate-400/20 text-slate-700 dark:text-slate-300"
                            : "bg-slate-500/10 border-slate-400/20 text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
