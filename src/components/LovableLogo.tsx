
import React from "react";

export function LovableLogo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <a href="/" className={`flex items-center space-x-2 group ${className}`} aria-label="Lovable Home">
      {/* Heart icon with gradient */}
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="transition-transform group-hover:scale-105 duration-200">
        <defs>
          <radialGradient id="lovable-heart-gradient" cx="50%" cy="50%" r="90%" fx="60%" fy="30%">
            <stop offset="0%" stopColor="#ff769b" />
            <stop offset="50%" stopColor="#fa7858" />
            <stop offset="100%" stopColor="#ffae46" />
          </radialGradient>
        </defs>
        <path
          d="M16 28s-7.447-5.414-11.32-9.573C2.004 16.008 2 13.016 4.167 10.842c2.16-2.166 5.67-2.167 7.83 0l1.67 1.67 1.67-1.67a5.47 5.47 0 017.83 0c2.16 2.174 2.163 5.166.486 7.585C23.447 22.586 16 28 16 28z"
          fill="url(#lovable-heart-gradient)"
        />
      </svg>
      <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
        Lovable
      </span>
    </a>
  );
}
