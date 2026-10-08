import React, { useState } from "react";
import { profileData } from "../data/profile";
import { educationData, experienceTrainingData } from "../data/timeline";
import { ResumeModal } from "./ResumeModal";
import { Download, Eye, GraduationCap, Briefcase, FileText, CheckCircle2 } from "lucide-react";

export const Resume: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    // Open resume preview and trigger print/save as PDF
    setModalOpen(true);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Curriculum Vitae
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            A Summary Of My Resume
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {profileData.resume.summary}
          </p>
        </div>

        {/* Reference Image Inspired Summary Cards (Two Column: Education vs Experience) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Education Summary Card */}
          <div
            className="liquid-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 mb-5 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--text-main)" }}>
                    Education
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Academic Qualification & Field
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl border backdrop-blur-md transition-all hover:border-cyan-400/50"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <span className="text-[11px] font-mono text-cyan-500 dark:text-cyan-400 font-semibold block mb-0.5">
                      {edu.duration}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base" style={{ color: "var(--text-main)" }}>
                      {edu.institution}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600 dark:text-cyan-300 mt-0.5">
                      {edu.degree} · {edu.stream}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-xs flex items-center gap-2" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Accredited Engineering Syllabus in Maharashtra, India</span>
            </div>
          </div>

          {/* Technical Projects & Training Summary Card */}
          <div
            className="liquid-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 mb-5 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--text-main)" }}>
                    Practical Experience
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Software Development & System Projects
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {experienceTrainingData.slice(0, 2).map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-xl border backdrop-blur-md transition-all hover:border-cyan-400/50"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <span className="text-[11px] font-mono text-cyan-500 dark:text-cyan-400 font-semibold block mb-0.5">
                      {exp.type}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base" style={{ color: "var(--text-main)" }}>
                      {exp.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {exp.focusArea}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-xs flex items-center gap-2" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Full-stack, Android, ML, and API system implementations</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row with Liquid Sheen */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleDownload}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white liquid-btn-glow shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base liquid-btn-glass flex items-center gap-2 cursor-pointer transition-all hover:border-cyan-400 hover:text-cyan-400"
            style={{
              color: "var(--text-main)"
            }}
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>View Full Resume</span>
          </button>
        </div>
      </div>

      {/* Interactive Resume Preview Modal */}
      <ResumeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
