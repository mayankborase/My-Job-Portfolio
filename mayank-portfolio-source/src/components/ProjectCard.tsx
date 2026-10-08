import React from "react";
import { Github, ExternalLink, ArrowUpRight, Info } from "lucide-react";
import { ProjectItem } from "../data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div
      className="liquid-card overflow-hidden flex flex-col justify-between group transition-all duration-300"
    >
      <div>
        {/* Project Visual Thumbnail with Specular Border */}
        <div className="overflow-hidden relative border-b" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="transition-transform duration-500 group-hover:scale-[1.03]">
            <ProjectThumbnail
              projectId={project.id}
              title={project.title}
              category={project.category}
            />
          </div>
          {/* Subtle light sweep reflection */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity" />
        </div>

        {/* Card Content Area */}
        <div className="p-6">
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-2 text-xs">
            <span className="font-bold text-blue-600 dark:text-cyan-400">
              {project.category}
            </span>
            <span
              className="text-[11px] px-2.5 py-0.5 rounded-md font-semibold border backdrop-blur-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                color: "var(--text-secondary)",
                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              {project.badgeLabel}
            </span>
          </div>

          {/* Project Title */}
          <h3
            className="text-xl font-bold tracking-tight mb-2 group-hover:text-blue-500 dark:group-hover:text-cyan-300 transition-colors"
            style={{ color: "var(--text-main)" }}
          >
            {project.title}
          </h3>

          {/* Short Description */}
          <p
            className="text-sm leading-relaxed mb-4 line-clamp-3"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg font-medium border backdrop-blur-md transition-colors group-hover:border-blue-400/40"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-secondary)",
                  boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons (Footer) */}
      <div
        className="px-6 py-4 border-t flex items-center justify-between gap-2 backdrop-blur-xl"
        style={{
          borderColor: "var(--border-subtle)",
          backgroundColor: "var(--bg-card)"
        }}
      >
        {/* Left Side: View Details Modal Trigger */}
        <button
          onClick={() => onOpenDetails(project)}
          className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer py-1.5 transition-colors group/btn"
        >
          <Info className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
          <span>View Details</span>
        </button>

        {/* Right Side: GitHub and Live Demo Links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="p-2 rounded-xl border transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-105"
              style={{
                borderColor: "var(--border-card)",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-main)"
              }}
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl liquid-btn-glow flex items-center gap-1 shadow-sm transition-all"
            >
              <span>Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border transition-colors hover:border-cyan-400 cursor-pointer"
              style={{
                borderColor: "var(--border-card)",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)"
              }}
            >
              Overview
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
