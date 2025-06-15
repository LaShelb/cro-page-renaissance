
import React from "react";
import { MYALogo } from "@/components/MYALogo";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const NAV_LINKS = [{
  label: "Home",
  href: "/"
}, {
  label: "How it Works",
  href: "/how-it-works"
}, {
  label: "Pricing",
  href: "/pricing"
}, {
  label: "About",
  href: "/about"
}, {
  label: "Login",
  href: "/login"
}];

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "We believe everyone deserves to achieve their goals, no matter how big or small."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Using cutting-edge AI to make goal achievement accessible and actionable for everyone."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive ecosystem where ambitious individuals can thrive together."
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Understanding that behind every goal is a person with dreams, challenges, and potential."
  }
];

const About = () => {
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
              About{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                MYA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-normal max-w-4xl mx-auto mb-8">
              We're on a mission to help ambitious individuals turn their dreams into actionable plans that actually get done.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                MYA was born from a simple observation: most people have incredible goals and dreams, but struggle to break them down into actionable steps. We've all been there—staring at a big ambition, feeling overwhelmed, and not knowing where to start.
              </p>
              <p>
                That's why we created MYA (Make Your Aspirations). Our AI-powered platform doesn't just help you set goals—it transforms them into clear, step-by-step action plans that you can actually follow and complete.
              </p>
              <p>
                Whether you want to start a business, learn a new skill, get in shape, or make any other positive change in your life, MYA is here to guide you from aspiration to achievement.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-border animate-fade-in hover-scale transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Our Mission
            </h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
                To democratize goal achievement by making personalized action planning accessible to everyone.
              </p>
              <p className="text-lg text-gray-600">
                We believe that with the right guidance and structure, anyone can turn their aspirations into reality. MYA is that guidance—your personal AI coach that helps you navigate from where you are to where you want to be.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-border animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to turn your aspirations into action?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join thousands who've already started their journey with MYA.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-150 shadow-md hover-scale"
            >
              Start Your Journey
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
