import React from "react";
export function MYALogo({
  className = "",
  size = 32
}: {
  className?: string;
  size?: number;
}) {
  return <a href="/" className={`flex items-center space-x-2 group ${className}`} aria-label="MYA Home">
      {/* Simple checkmark logo to represent accomplishment */}
      
      <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900" style={{
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }}>
        <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
          MYA
        </span>
      </span>
    </a>;
}