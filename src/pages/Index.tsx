
import React from "react";
import { MYAHeader } from "@/components/MYAHeader";
import { MYAActionInput } from "@/components/MYAActionInput";

const headline = (
  <>
    <span className="block font-light text-lg md:text-2xl text-gray-500 leading-tight mb-1">
      People don&apos;t lack motivation,
    </span>
    <span
      className="font-black text-3xl md:text-5xl text-gray-900 tracking-tighter"
      style={{ letterSpacing: "-.03em" }}
    >
      They lack a <span className="text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 bg-clip-text">clear path to action</span>
    </span>
  </>
);

const subtext = (
  <div className="text-base md:text-lg text-gray-600 mt-5 max-w-xl mx-auto font-normal">
    <b>MYA</b> turns any idea, project, or intention into a concrete step-by-step plan – instantly.<br className="hidden md:inline" />
    No sign-up. No friction. Just describe your next goal and MYA breaks it into real actions, right now.
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 transition-bg duration-300 font-sans">
      <MYAHeader />
      <main className="flex flex-col flex-1 px-3 py-2 items-center justify-center mt-2 md:mt-6">
        <section className="w-full flex flex-col items-center gap-2 py-12 md:py-24">
          <h1 className="mb-3">{headline}</h1>
          {subtext}
          <div className="mt-10 md:mt-14 w-full flex flex-col items-center gap-3">
            <MYAActionInput />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
