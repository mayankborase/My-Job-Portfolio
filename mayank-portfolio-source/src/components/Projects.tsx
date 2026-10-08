import React, { useState } from "react";
import { projectsData, ProjectItem } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterTabs = ["All", "AI / ML", "Android / Mobile", "Web Development"];

  // Filter projects based on category
  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  // If not showAll, show 3 projects
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Selected Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            My Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Hands-on software systems spanning AI assistance, native Android applications, computer vision, and web platforms.
          </p>
        </div>

        {/* Category Filters with Liquid Pill Container */}
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 p-1.5 rounded-2xl border backdrop-blur-xl max-w-fit mx-auto"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-card)",
            boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setSelectedFilter(tab);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30"
                    : "hover:text-blue-500 hover:bg-white/5"
                }`}
                style={{
                  color: isActive ? "#ffffff" : "var(--text-secondary)"
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* View All Projects / Show Less Button */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white liquid-btn-glow shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <span>{showAll ? "Show Less" : "View All Projects"}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
