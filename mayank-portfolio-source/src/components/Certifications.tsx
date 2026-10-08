import React from "react";
import { certificationsData } from "../data/timeline";
import { Award, ExternalLink, CheckCircle, ShieldCheck } from "lucide-react";

export const Certifications: React.FC = () => {
  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Skill Verifications
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            Certifications & Training
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Verified coursework, skill benchmarks, and technical milestones.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="liquid-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-lg border border-cyan-400/30 text-blue-500 dark:text-cyan-400 backdrop-blur-md">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg mb-1 leading-snug" style={{ color: "var(--text-main)" }}>
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm mb-3 text-blue-600 dark:text-cyan-400 font-semibold">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="mb-4 text-xs font-mono flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}

                {/* Skills Covered */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-0.5 rounded-md border backdrop-blur-md"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-secondary)",
                        boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Action */}
              <div className="pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 text-xs font-semibold rounded-xl border backdrop-blur-md flex items-center justify-center gap-1.5 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-[1.02]"
                    style={{
                      borderColor: "var(--border-card)",
                      backgroundColor: "var(--bg-card)",
                      color: "var(--text-main)"
                    }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 text-center block">
                    Verified Coursework
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
