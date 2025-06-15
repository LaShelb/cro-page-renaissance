
import React from "react";

export function MYAHeader() {
  return (
    <header className="w-full flex items-center justify-between px-5 md:px-12 py-6 md:py-8 z-20 relative bg-transparent">
      {/* Logo Typo */}
      <div className="flex items-center">
        <span className="font-black text-2xl md:text-3xl bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent tracking-tight transition-all select-none"
          style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "-0.025em" }}
        >
          MYA
        </span>
      </div>
      {/* Nav CTA */}
      <nav>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white rounded-full font-semibold text-base shadow-xl hover:scale-105 focus-visible:ring focus-visible:ring-orange-300 transition-all duration-200"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
