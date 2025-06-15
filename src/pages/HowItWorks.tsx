
import React from "react";
import { MYALogo } from "@/components/MYALogo";
import { ArrowRight, Target, Zap, CheckCircle } from "lucide-react";

const NAV_LINKS = [{
  label: "Home",
  href: "/"
}, {
  label: "How it Works",
  href: "/how-it-works"
}, {
  label: "Pricing",
  href: "#"
}, {
  label: "About",
  href: "#"
}, {
  label: "Login",
  href: "#"
}];

const steps = [
  {
    icon: Target,
    title: "Tell MYA Your Goal",
    description: "Simply type what you want to achieve. Whether it's running a marathon, starting a business, or learning a new skill - MYA understands your ambitions.",
    example: "I want to learn Spanish"
  },
  {
    icon: Zap,
    title: "Get Your Action Plan",
    description: "MYA instantly breaks down your goal into clear, actionable steps. No more wondering where to start or what to do next.",
    example: "• Download Duolingo app\n• Practice 15 minutes daily\n• Join Spanish conversation group\n• Watch Spanish Netflix shows"
  },
  {
    icon: CheckCircle,
    title: "Take Action Today",
    description: "Start with the first step immediately. Each action is designed to be doable right now, building momentum toward your bigger goal.",
    example: "Ready to begin? Download Duolingo and complete your first lesson!"
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-[radial-gradient(circle_at_50%_0%,#f9fafb_0%,#bdd6fa_55%,#ffcac5_80%,#ff884d_100%)] transition-bg duration-300">
      {/* Header/Nav */}
      <header className="w-full flex items-center justify-between px-8 lg:px-16 py-6 z-20 relative">
        <div className="flex items-center gap-8">
          <MYALogo size={32} />
          <nav className="hidden md:flex gap-7 ml-14">
            {NAV_LINKS.map(link => (
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

      {/* Main content */}
      <main className="flex flex-col flex-1 items-center justify-start pt-12 pb-6 relative px-4">
        <section className="w-full max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center tracking-tight mb-6">
              How{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                MYA
              </span>{" "}
              Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-normal max-w-3xl mx-auto">
              Transform any goal into actionable steps in seconds. No planning paralysis, no overwhelming research — just clear actions you can take today.
            </p>
          </div>

          {/* Steps Section */}
          <div className="space-y-16 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">
                      Example
                    </div>
                    <div className="text-gray-800 whitespace-pre-line font-medium">
                      {step.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-border animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to turn your goals into action?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join thousands who've already started achieving more with MYA.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-150 shadow-md hover-scale"
            >
              Get Started Free
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
