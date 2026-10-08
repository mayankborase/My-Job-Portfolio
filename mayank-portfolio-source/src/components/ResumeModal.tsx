import React from "react";
import { X, Printer, Download, MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { profileData } from "../data/profile";
import { educationData, experienceTrainingData } from "../data/timeline";
import { skillCategories } from "../data/skills";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Toolbar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base">Resume Preview · {profileData.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl liquid-btn-glow text-white text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-6 text-slate-800 bg-white" id="printable-resume">
          {/* Header */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-base font-semibold text-blue-600 mt-1">
              {profileData.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {profileData.email}
              </span>
              <span>GitHub: {profileData.socials.github}</span>
              <span>LinkedIn: {profileData.socials.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Career Objective & Profile
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {profileData.shortBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-slate-900">{edu.degree}</h3>
                    <span className="text-xs font-medium text-slate-500">{edu.duration}</span>
                  </div>
                  <p className="text-xs font-medium text-blue-600">{edu.institution}, {edu.location}</p>
                  <p className="text-xs text-slate-600 mt-1">{edu.description}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    <strong>Coursework:</strong> {edu.relevantCoursework.slice(0, 5).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Projects & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Technical Projects & Engineering Experience
            </h2>
            <div className="space-y-4">
              {experienceTrainingData.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-slate-900">{exp.title}</h3>
                    <span className="text-xs font-medium text-slate-500">{exp.type}</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5">{exp.summary}</p>
                  <ul className="list-disc list-inside text-xs text-slate-600 mt-1 space-y-0.5">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    Tech: {exp.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
              {skillCategories.map((cat) => (
                <div key={cat.id}>
                  <strong className="text-slate-900">{cat.title}: </strong>
                  <span>{cat.skills.map((s) => s.name).join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
