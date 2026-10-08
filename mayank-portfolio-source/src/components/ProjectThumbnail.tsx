import React from "react";
import { MessageSquare, Film, BookOpen, Camera, ShieldCheck, Gamepad2, Sparkles, Terminal } from "lucide-react";

interface ProjectThumbnailProps {
  projectId: string;
  title: string;
  category: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ projectId, title, category }) => {
  // Render bespoke graphics for each project
  switch (projectId) {
    case "college-query-chatbot":
      return (
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              FastAPI + React
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          {/* Chat bubbles graphic */}
          <div className="relative z-10 space-y-2 my-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs max-w-[85%] border border-white/10 text-slate-200">
              What are the eligibility criteria for merit scholarships?
            </div>
            <div className="bg-blue-600/70 backdrop-blur-md rounded-2xl rounded-tr-sm px-3.5 py-2 text-xs max-w-[88%] ml-auto border border-blue-400/30 text-white">
              Merit scholarships require a minimum of 8.5 CGPA with applications due by Oct 15.
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 z-10 border-t border-white/10 pt-2">
            <span className="flex items-center gap-1.5 font-medium text-blue-400">
              <MessageSquare className="w-3.5 h-3.5" /> AI Campus Assistant
            </span>
            <span className="font-mono text-[11px]">24/7 Available</span>
          </div>
          {/* Background subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 tech-grid-bg" />
        </div>
      );

    case "filmgen":
      return (
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Native Android · Java
            </span>
            <Film className="w-4 h-4 text-blue-400" />
          </div>
          {/* Visual movie cards row */}
          <div className="relative z-10 flex gap-3 my-auto items-center justify-center">
            <div className="w-20 h-24 rounded-xl bg-blue-800/40 border border-blue-400/30 p-2 flex flex-col justify-between shadow-lg transform -rotate-3">
              <div className="text-[10px] font-bold text-blue-200">Sci-Fi</div>
              <div className="w-6 h-6 rounded-full bg-blue-500/40 mx-auto flex items-center justify-center">▶</div>
              <div className="text-[9px] text-amber-300 text-center font-bold">★ 8.8</div>
            </div>
            <div className="w-24 h-28 rounded-xl bg-blue-600/50 border border-blue-300/40 p-2.5 flex flex-col justify-between shadow-2xl z-10">
              <div className="text-xs font-bold text-white">Trending</div>
              <div className="w-8 h-8 rounded-full bg-white/20 mx-auto flex items-center justify-center text-white">▶</div>
              <div className="text-[10px] text-amber-300 text-center font-bold">★ 9.2 Top Pick</div>
            </div>
            <div className="w-20 h-24 rounded-xl bg-indigo-900/40 border border-indigo-400/30 p-2 flex flex-col justify-between shadow-lg transform rotate-3">
              <div className="text-[10px] font-bold text-indigo-200">Action</div>
              <div className="w-6 h-6 rounded-full bg-indigo-500/40 mx-auto flex items-center justify-center">▶</div>
              <div className="text-[9px] text-amber-300 text-center font-bold">★ 8.5</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 z-10 border-t border-white/10 pt-2">
            <span className="font-medium text-blue-400">Mobile Cinema Curation</span>
            <span className="font-mono text-[11px]">Firebase Sync</span>
          </div>
        </div>
      );

    case "studysync":
      return (
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              PHP + MySQL
            </span>
            <BookOpen className="w-4 h-4 text-cyan-400" />
          </div>
          {/* Study portal dashboard simulation */}
          <div className="relative z-10 space-y-2 my-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold block text-white">Unit 3: Data Structures</span>
                <span className="text-[10px] text-slate-300">Binary Trees & Heap Sort</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300">
                100% Complete
              </span>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold block text-slate-200">Interactive Quiz #4</span>
                <span className="text-[10px] text-slate-400">20 Questions · 25 Mins</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/30 text-blue-300">
                Start Quiz
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 z-10 border-t border-white/10 pt-2">
            <span className="font-medium text-cyan-400">Learning Management Hub</span>
            <span className="font-mono text-[11px]">Resources & Notes</span>
          </div>
        </div>
      );

    case "smart-attendance-system":
      return (
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-900 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              OpenCV + Python
            </span>
            <Camera className="w-4 h-4 text-emerald-400" />
          </div>
          {/* Biometric camera scan graphic */}
          <div className="relative z-10 my-auto flex flex-col items-center">
            <div className="relative w-28 h-24 border-2 border-dashed border-emerald-400/80 rounded-2xl flex items-center justify-center p-2 bg-emerald-950/30 backdrop-blur-sm">
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-400" />
              <div className="text-center">
                <span className="text-xs font-bold text-white block">Face ID Verified</span>
                <span className="text-[10px] text-emerald-300 font-mono">Conf: 98.4%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 z-10 border-t border-white/10 pt-2">
            <span className="font-medium text-emerald-400">Automated Roll Call</span>
            <span className="font-mono text-[11px]">Real-Time Logging</span>
          </div>
        </div>
      );

    case "phishing-detector-ai":
      return (
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950/30 to-blue-950 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Scikit-Learn ML
            </span>
            <ShieldCheck className="w-4 h-4 text-amber-400" />
          </div>
          {/* Cybersecurity threat detector graphic */}
          <div className="relative z-10 my-auto space-y-2">
            <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700 font-mono text-[11px] text-slate-300 flex items-center justify-between">
              <span className="truncate max-w-[170px]">https://secure-login-verify...</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/30 text-rose-300 font-bold">
                PHISHING
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="bg-rose-500 h-2 rounded-full w-[94%]" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>Risk Score: 94/100</span>
              <span className="text-rose-400 font-bold">Suspicious Domain</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 z-10 border-t border-white/10 pt-2">
            <span className="font-medium text-amber-400">Heuristic URL Inspection</span>
            <span className="font-mono text-[11px]">Lexical Classifier</span>
          </div>
        </div>
      );

    case "smart-pc-controller":
    default:
      return (
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/40 to-blue-950 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Sockets · Java Android
            </span>
            <Gamepad2 className="w-4 h-4 text-purple-400" />
          </div>
          {/* Remote PC control trackpad graphic */}
          <div className="relative z-10 my-auto flex items-center justify-center gap-3">
            <div className="w-32 h-20 rounded-xl bg-purple-950/50 border border-purple-400/30 flex flex-col items-center justify-center text-center p-2">
              <span className="text-[10px] font-bold text-purple-200">Virtual Touchpad</span>
              <span className="text-[9px] text-slate-400 mt-1">Tap / Two-Finger Scroll</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-bold border border-white/10 text-center">
                Vol +
              </div>
              <div className="px-2.5 py-1 rounded bg-blue-600/40 text-[10px] font-bold border border-blue-400/30 text-center">
                Next Slide
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 z-10 border-t border-white/10 pt-2">
            <span className="font-medium text-purple-400">Wi-Fi Desktop Control</span>
            <span className="font-mono text-[11px]">Sub-20ms Latency</span>
          </div>
        </div>
      );
  }
};
