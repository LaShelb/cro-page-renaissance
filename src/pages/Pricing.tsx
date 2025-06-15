
import React from "react";
import { MYALogo } from "@/components/MYALogo";
import { Check, ArrowRight } from "lucide-react";

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
  href: "#"
}, {
  label: "Login",
  href: "#"
}];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with your first goals",
    features: [
      "5 goal breakdowns per month",
      "Basic action plans",
      "Email support",
      "Mobile friendly"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For ambitious individuals ready to achieve more",
    features: [
      "Unlimited goal breakdowns",
      "Advanced action plans",
      "Priority support",
      "Progress tracking",
      "Custom reminders",
      "Export to calendar"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "For teams and organizations working together",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared workspaces",
      "Admin dashboard",
      "Team analytics",
      "Custom integrations",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
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
        <section className="w-full max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center tracking-tight mb-6">
              Simple{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-normal max-w-3xl mx-auto mb-8">
              Choose the plan that fits your ambitions. Start free, upgrade when you're ready to achieve more.
            </p>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-border">
              <span className="text-gray-600">All plans include a 14-day free trial</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border animate-fade-in ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-full font-semibold text-lg transition duration-150 shadow-md hover-scale ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What happens to my data if I cancel?</h3>
                <p className="text-gray-600">Your data remains accessible for 30 days after cancellation, giving you time to export or reactivate.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there a limit on team members?</h3>
                <p className="text-gray-600">The Team plan includes up to 10 members. Need more? Contact us for custom enterprise pricing.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8 border border-border animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to achieve your goals?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join thousands who've turned their dreams into actionable plans with MYA.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-150 shadow-md hover-scale"
            >
              Start Your Free Trial
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
