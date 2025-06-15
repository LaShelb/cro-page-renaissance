
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GoalCustomizationForm } from "./GoalCustomizationForm";

export function HeroInput() {
  const [goal, setGoal] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim()) {
      setShowForm(true);
    }
  };

  const handleFormComplete = (data: { frequency: string; days: string[] }) => {
    console.log("Goal plan created:", { goal, ...data });
    setIsSubmitted(true);
    // Here you would typically send this data to your backend or handle it as needed
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-border text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Your plan is ready!</h2>
          <p className="text-lg text-gray-600">
            We've created a personalized plan to help you achieve your goal. 
            Time to get started!
          </p>
        </div>
      </div>
    );
  }

  if (showForm) {
    return <GoalCustomizationForm goal={goal} onComplete={handleFormComplete} />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative mb-4">
        <Input
          type="text"
          placeholder="I want to run a marathon, start a business, learn piano..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full h-16 text-lg px-6 pr-20 rounded-full border-2 border-gray-300 bg-white shadow-lg focus:border-primary focus:ring-0 focus:shadow-xl transition-all duration-300"
        />
        <Button 
          type="submit" 
          disabled={!goal.trim()}
          className="absolute right-2 top-2 h-12 w-12 p-0 rounded-full bg-gray-600 hover:bg-gray-700 transition-colors"
          size="icon"
        >
          <ArrowRight size={20} className="text-white" />
        </Button>
      </form>
      <p className="text-center text-gray-500 text-sm">
        Tell us your goal and we'll create an actionable plan for you
      </p>
    </div>
  );
}
