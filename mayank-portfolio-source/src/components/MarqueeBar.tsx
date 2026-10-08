import React from "react";

export const MarqueeBar: React.FC = () => {
  const items = [
    "Computer Engineering",
    "Full-Stack Web Development",
    "Java & Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Native Android Apps",
    "FastAPI & Flask",
    "React & Modern UI",
    "Problem Solving"
  ];

  return (
    <div
      className="w-full border-y py-4 overflow-hidden backdrop-blur-xl transition-colors relative"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)"
      }}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee space-x-10 items-center text-xs sm:text-sm font-bold tracking-wider uppercase">
        {[...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span style={{ color: "var(--text-main)" }} className="whitespace-nowrap flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80" />
              {item}
            </span>
            <span className="text-blue-500 dark:text-cyan-400 font-extrabold select-none opacity-80">▲</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
