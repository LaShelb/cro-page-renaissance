
import React from "react";
import { MYALogo } from "@/components/MYALogo";
import { HeroInput } from "@/components/HeroInput";
import { WorkspaceCard } from "@/components/WorkspaceCard";

const NAV_LINKS = [
  { label: "How it Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Login", href: "#" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-[radial-gradient(circle_at_50%_0%,#f9fafb_0%,#bdd6fa_55%,#ffcac5_80%,#ff884d_100%)] transition-bg duration-300">
      {/* Header/Nav */}
      <header className="w-full flex items-center justify-between px-8 lg:px-16 py-6 z-20 relative">
        <div className="flex items-center gap-8">
          <MYALogo size={32} />
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
          <div className="rounded-full px-4 py-2 bg-blue-100 text-blue-900 font-semibold text-base tracking-tight shadow-sm border border-blue-200 select-none">
            Your goals, in action — with MYA
          </div>
        </div>
      </header>

      {/* Main content/hero */}
      <main className="flex flex-col flex-1 items-center justify-center pt-6 md:pt-12 pb-6 relative">
        <section className="w-full flex flex-col items-center py-14">
          <h1 className="text-[2.2rem] md:text-5xl font-extrabold text-gray-900 text-center tracking-tight flex gap-4 items-center mb-3">
            <span>
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                MYA
              </span>
            </span>
            helps you achieve more — starting now.
          </h1>
          <div className="max-w-xl text-lg md:text-2xl text-gray-700 font-normal text-center mb-10">
            Turn your ideas and goals into clear, actionable plans.<br />
            <span className="text-gray-500 font-medium italic">
              People don’t lack motivation, just a path to action.
            </span>
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
