
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface GoalCustomizationFormProps {
  goal: string;
  onComplete: (data: { frequency: string; days: string[] }) => void;
}

export const GoalCustomizationForm = ({ goal, onComplete }: GoalCustomizationFormProps) => {
  const [frequency, setFrequency] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const frequencyOptions = [
    { value: "1-2", label: "1-2" },
    { value: "3-4", label: "3-4" },
    { value: "5+", label: "5+" }
  ];

  const dayOptions = [
    { value: "Mon", label: "Mon" },
    { value: "Tue", label: "Tue" },
    { value: "Wed", label: "Wed" },
    { value: "Thu", label: "Thu" },
    { value: "Fri", label: "Fri" },
    { value: "Sat", label: "Sat" },
    { value: "Sun", label: "Sun" }
  ];

  const handleFrequencySelect = (value: string) => {
    setFrequency(value);
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleDayToggle = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleComplete = () => {
    onComplete({ frequency, days: selectedDays });
  };

  const extractActivityFromGoal = (goal: string) => {
    // Simple extraction - you could make this more sophisticated
    const lowerGoal = goal.toLowerCase();
    if (lowerGoal.includes('run') || lowerGoal.includes('marathon')) return 'running';
    if (lowerGoal.includes('gym') || lowerGoal.includes('workout')) return 'working out';
    if (lowerGoal.includes('read')) return 'reading';
    if (lowerGoal.includes('learn') || lowerGoal.includes('study')) return 'learning';
    if (lowerGoal.includes('meditat')) return 'meditation';
    if (lowerGoal.includes('cook')) return 'cooking';
    return 'this';
  };

  const activity = extractActivityFromGoal(goal);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
      {currentStep === 1 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's make it real!</h2>
          <p className="text-lg text-gray-600 mb-8">
            How many days per week can you dedicate to <span className="font-semibold text-primary">{activity}</span>?
          </p>
          
          <div className="flex justify-center gap-4">
            {frequencyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleFrequencySelect(option.value)}
                className="px-8 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-medium text-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 hover-scale"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Perfect!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Which days work best for you?
          </p>
          
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {dayOptions.map((day) => (
              <button
                key={day.value}
                onClick={() => handleDayToggle(day.value)}
                className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-200 hover-scale ${
                  selectedDays.includes(day.value)
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-primary hover:bg-primary/5'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleComplete}
              disabled={selectedDays.length === 0}
              className="px-8 py-3 text-lg font-semibold hover-scale"
            >
              Create My Plan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
