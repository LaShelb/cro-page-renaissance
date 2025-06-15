
import React from "react";
import { LovableLogo } from "@/components/LovableLogo";
import { HeroInput } from "@/components/HeroInput";
import { WorkspaceCard } from "@/components/WorkspaceCard";

const NAV_LINKS = [
  { label: "Community", href: "#" },
  { label: "Teams", href: "#" },
  { label: "Learn", href: "#" },
  { label: "Shipped", href: "#" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-[radial-gradient(circle_at_50%_0%,#f9fafb_0%,#bdd6fa_55%,#ffcac5_80%,#ff884d_100%)] transition-bg duration-300">
      {/* Header/Nav */}
      <header className="w-full flex items-center justify-between px-8 lg:px-16 py-6 z-20 relative">
        <div className="flex items-center gap-8">
          <LovableLogo size={32} />
          <nav className="hidden md:flex gap-7 ml-14">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-md font-medium text-gray-700 hover:text-primary hover-scale transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-900 font-semibold text-base tracking-tight shadow-sm border border-purple-200 select-none">
            RAMOS's Lovable
          </div>
        </div>
      </header>

      {/* Main content/hero */}
      <main className="flex flex-col flex-1 items-center justify-center pt-6 md:pt-12 pb-6 relative">
        <section className="w-full flex flex-col items-center py-14">
          <h1 className="text-[2.2rem] md:text-5xl font-extrabold text-gray-900 text-center tracking-tight flex gap-4 items-center mb-3">
            Build something
            {/* Inline small heart */}
            <span>
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="inline align-middle -mt-1">
                <defs>
                  <radialGradient id="lovable-headline-heart" cx="50%" cy="50%" r="90%" fx="60%" fy="30%">
                    <stop offset="0%" stopColor="#ff769b" />
                    <stop offset="50%" stopColor="#fa7858" />
                    <stop offset="100%" stopColor="#ffae46" />
                  </radialGradient>
                </defs>
                <path
                  d="M16 28s-7.447-5.414-11.32-9.573C2.004 16.008 2 13.016 4.167 10.842c2.16-2.166 5.67-2.167 7.83 0l1.67 1.67 1.67-1.67a5.47 5.47 0 017.83 0c2.16 2.174 2.163 5.166.486 7.585C23.447 22.586 16 28 16 28z"
                  fill="url(#lovable-headline-heart)"
                />
              </svg>
            </span>
            Lovable
          </h1>
          <div className="text-lg md:text-2xl text-gray-700 font-normal text-center mb-10">
            Create apps and websites by chatting with AI
          </div>
          <HeroInput />
        </section>
        {/* Workspace card at the bottom */}
        <WorkspaceCard />
      </main>
    </div>
  );
};

export default Index;
