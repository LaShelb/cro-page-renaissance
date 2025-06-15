
import React from "react";

export function MYALogo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <a href="/" className={`flex items-center space-x-2 group ${className}`} aria-label="MYA Home">
      {/* Simple checkmark logo to represent accomplishment */}
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="transition-transform group-hover:scale-105 duration-200">
        <defs>
          <linearGradient id="mya-check-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60b2ff"/>
            <stop offset="100%" stopColor="#ffae46"/>
          </linearGradient>
        </defs>
        <path
          d="M8 18.5L14 24L24 10"
          stroke="url(#mya-check-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900"
        style={{
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "0.04em",
          textTransform: "uppercase"
        }}
      >
        <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
          MYA
        </span>
      </span>
    </a>
  );
}
