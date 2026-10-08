import React, { useEffect, useState, useRef } from "react";

interface LiquidBackgroundProps {
  darkMode: boolean;
  lightEffectsEnabled?: boolean;
}

export const LiquidBackground: React.FC<LiquidBackgroundProps> = ({
  darkMode,
  lightEffectsEnabled = true
}) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth spring interpolation for the liquid pointer light
    const updatePosition = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;
      setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      rafRef.current = requestAnimationFrame(updatePosition);
    };

    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovering]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Liquid Caustic Sunlight Rays (God Rays through water) */}
      {lightEffectsEnabled && (
        <>
          <div className="liquid-light-ray-1" />
          <div className="liquid-light-ray-2" />
        </>
      )}

      {/* Caustic Mesh Layer */}
      <div className="absolute inset-0 liquid-caustic-mesh opacity-50 dark:opacity-40 transition-opacity duration-700" />

      {/* Liquid Caustic Ambient Blobs */}
      {/* Blob 1: Luminous Sapphire / Radiant Cyan Orb */}
      <div
        className="liquid-caustic-blob-1 absolute top-[-8%] left-[-8%] w-[58vw] h-[58vw] min-w-[360px] min-h-[360px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[90px] sm:blur-[130px] opacity-60 dark:opacity-40 transition-opacity duration-700"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(37, 99, 235, 0.75) 0%, rgba(6, 182, 212, 0.35) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(96, 165, 250, 0.65) 0%, rgba(6, 182, 212, 0.4) 45%, transparent 70%)"
        }}
      />

      {/* Blob 2: Radiant Iris / Lavender Liquid Light Pool */}
      <div
        className="liquid-caustic-blob-2 absolute top-[30%] right-[-12%] w-[60vw] h-[60vw] min-w-[360px] min-h-[360px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[100px] sm:blur-[140px] opacity-50 dark:opacity-35 transition-opacity duration-700"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(99, 102, 241, 0.65) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, rgba(192, 132, 252, 0.35) 45%, transparent 70%)"
        }}
      />

      {/* Blob 3: Liquid Aqua / Emerald Highlights */}
      <div
        className="liquid-caustic-blob-3 absolute bottom-[-10%] left-[15%] w-[52vw] h-[52vw] min-w-[320px] min-h-[320px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] blur-[90px] sm:blur-[120px] opacity-45 dark:opacity-25 transition-opacity duration-700"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(16, 185, 129, 0.25) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, rgba(52, 211, 153, 0.3) 45%, transparent 70%)"
        }}
      />

      {/* Interactive Liquid Pointer Spotlight with Caustic Ripple Halo */}
      {isHovering && lightEffectsEnabled && (
        <>
          {/* Main Pointer Light Aura */}
          <div
            className="fixed rounded-full blur-[70px] sm:blur-[95px] pointer-events-none transition-opacity duration-300"
            style={{
              width: "520px",
              height: "520px",
              left: `${mousePos.x - 260}px`,
              top: `${mousePos.y - 260}px`,
              opacity: darkMode ? 0.35 : 0.38,
              background: darkMode
                ? "radial-gradient(circle, rgba(96, 165, 250, 0.5) 0%, rgba(6, 182, 212, 0.3) 35%, transparent 70%)"
                : "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(6, 182, 212, 0.3) 35%, rgba(255, 255, 255, 0.6) 65%, transparent 75%)",
              willChange: "transform, left, top"
            }}
          />

          {/* Core Specular Glare Dot */}
          <div
            className="fixed rounded-full blur-[25px] pointer-events-none transition-opacity duration-200"
            style={{
              width: "140px",
              height: "140px",
              left: `${mousePos.x - 70}px`,
              top: `${mousePos.y - 70}px`,
              opacity: darkMode ? 0.25 : 0.35,
              background: darkMode
                ? "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(56, 189, 248, 0.4) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(96, 165, 250, 0.5) 50%, transparent 70%)",
              willChange: "transform, left, top"
            }}
          />
        </>
      )}

      {/* Floating Micro-Bubbles catching the light */}
      {lightEffectsEnabled && (
        <>
          <div className="liquid-bubble w-4 h-4 left-[12%] [animation-delay:0s] [animation-duration:14s]" />
          <div className="liquid-bubble w-2.5 h-2.5 left-[34%] [animation-delay:3s] [animation-duration:18s]" />
          <div className="liquid-bubble w-3.5 h-3.5 left-[58%] [animation-delay:7s] [animation-duration:16s]" />
          <div className="liquid-bubble w-2 h-2 left-[78%] [animation-delay:1.5s] [animation-duration:15s]" />
          <div className="liquid-bubble w-4.5 h-4.5 left-[88%] [animation-delay:5s] [animation-duration:20s]" />
        </>
      )}

      {/* Subtle Liquid Water Caustic Wave Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] dark:opacity-[0.06] tech-grid-bg"
        style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}
      />
    </div>
  );
};
