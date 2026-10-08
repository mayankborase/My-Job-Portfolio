import React from "react";
import { experienceTrainingData } from "../data/timeline";
import { Code2, Smartphone, BrainCircuit, GitBranch, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  const getIconForType = (id: string) => {
    switch (id) {
      case "train-fullstack":
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case "train-android":
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      case "train-aiml":
        return <BrainCircuit className="w-5 h-5 text-purple-500" />;
      case "train-git":
      default:
        return <GitBranch className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Practical Implementation
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            Experience & Technical Training
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Hands-on technical development projects, deep-dive architectural training, and self-directed software engineering experience.
          </p>
        </div>

        {/* Experience & Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceTrainingData.map((item) => (
            <div
              key={item.id}
              className="liquid-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header with Type Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-md border text-blue-600 dark:text-cyan-300 backdrop-blur-md"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                    {item.duration}
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-2">
                  <div className="p-2.5 rounded-xl border mt-0.5 bg-gradient-to-tr from-blue-600/10 to-cyan-400/10 border-blue-400/30">
                    {getIconForType(item.id)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold" style={{ color: "var(--text-main)" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-500 dark:text-cyan-400 mt-0.5">
                      {item.focusArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-4 mt-3" style={{ color: "var(--text-secondary)" }}>
                  {item.summary}
                </p>

                {/* Key Accomplishments / Highlights */}
                <div className="space-y-2 mb-5">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t flex flex-wrap gap-1.5" style={{ borderColor: "var(--border-subtle)" }}>
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-0.5 rounded-md font-mono border backdrop-blur-md"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-secondary)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
