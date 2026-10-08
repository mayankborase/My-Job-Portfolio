import React from "react";
import { educationData } from "../data/timeline";
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Academic Background
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Foundational computer engineering education, algorithmic theory, and systems engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10">
          {educationData.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot with Liquid Glow */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center transition-transform group-hover:scale-125 shadow-md shadow-cyan-400/40"
                style={{ backgroundColor: "var(--bg-primary)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Education Card */}
              <div
                className="liquid-card p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold border backdrop-blur-md ${
                      item.status === "Currently Pursuing"
                        ? "bg-cyan-500/15 border-cyan-400/40 text-blue-600 dark:text-cyan-300"
                        : "bg-slate-500/10 border-slate-400/20 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item.status}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight mb-1"
                  style={{ color: "var(--text-main)" }}
                >
                  {item.degree}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-cyan-400 mb-2">
                  {item.stream}
                </p>

                <div
                  className="flex flex-wrap items-center gap-4 text-xs sm:text-sm mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>

                {/* Relevant Coursework List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Coursework & Theoretical Areas</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-lg border backdrop-blur-md"
                        style={{
                          backgroundColor: "var(--bg-card)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-main)",
                          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
