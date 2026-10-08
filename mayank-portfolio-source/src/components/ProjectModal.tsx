import React, { useEffect } from "react";
import { X, Github, ExternalLink, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { ProjectItem } from "../data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto backdrop-blur-2xl transition-all"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col backdrop-blur-2xl"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-card)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 2px 0 rgba(255, 255, 255, 0.25)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Close Button */}
        <div
          className="p-4 sm:p-5 border-b flex items-center justify-between z-10 sticky top-0 backdrop-blur-2xl"
          style={{
            borderColor: "var(--border-subtle)",
            backgroundColor: "var(--bg-card)"
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-500 dark:text-cyan-400 border border-blue-400/30">
              {project.category}
            </span>
            <h2 id="modal-title" className="text-lg sm:text-xl font-bold truncate max-w-sm sm:max-w-md" style={{ color: "var(--text-main)" }}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl border transition-all hover:scale-105 hover:border-cyan-400 cursor-pointer backdrop-blur-md"
            style={{
              borderColor: "var(--border-card)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-secondary)"
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Project Visual Banner */}
          <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: "var(--border-subtle)" }}>
            <ProjectThumbnail
              projectId={project.id}
              title={project.title}
              category={project.category}
            />
          </div>

          {/* Objective & Problem Statement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="p-4.5 rounded-2xl border backdrop-blur-xl flex flex-col justify-start"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="flex items-center gap-2 mb-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.details.problemStatement}
              </p>
            </div>

            <div
              className="p-4.5 rounded-2xl border backdrop-blur-xl flex flex-col justify-start"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="flex items-center gap-2 mb-2 text-blue-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4 shrink-0" />
                <span>Project Objective</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.details.objective}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-500 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features & Architecture</span>
            </h3>
            <ul className="space-y-2">
              {project.details.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl border backdrop-blur-xl text-xs sm:text-sm flex items-start gap-2.5 transition-colors"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-main)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-500 dark:text-cyan-400 mb-3">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.details.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl border backdrop-blur-md"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-main)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Engineering Challenges Overcome</span>
            </h3>
            <ul className="space-y-2">
              {project.details.challenges.map((ch, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl border backdrop-blur-xl text-xs sm:text-sm flex items-start gap-2.5"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-secondary)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>Future Improvements & Roadmap</span>
            </h3>
            <ul className="space-y-2">
              {project.details.futureImprovements.map((imp, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl border backdrop-blur-xl text-xs sm:text-sm flex items-start gap-2.5"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-secondary)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div
          className="p-4 sm:p-5 border-t flex flex-wrap items-center justify-between gap-3 sticky bottom-0 backdrop-blur-2xl"
          style={{
            borderColor: "var(--border-subtle)",
            backgroundColor: "var(--bg-card)"
          }}
        >
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border backdrop-blur-md flex items-center gap-2 hover:border-cyan-400 transition-colors"
                style={{
                  borderColor: "var(--border-card)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)"
                }}
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl liquid-btn-glow flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border cursor-pointer hover:border-cyan-400 transition-colors backdrop-blur-md"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-secondary)"
            }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
