
import React from "react";
import { MYALogo } from "@/components/MYALogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const phases = [
  {
    id: 1,
    title: "Define the Foundation",
    duration: "1 month",
    month: "September",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-900",
    titleColor: "text-blue-700"
  },
  {
    id: 2,
    title: "Build Core Skills", 
    duration: "2 months",
    month: "October",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-900",
    titleColor: "text-green-700"
  },
  {
    id: 3,
    title: "Advanced Practice",
    duration: "4 months", 
    month: "December",
    color: "bg-orange-50 border-orange-200",
    textColor: "text-orange-900",
    titleColor: "text-orange-700"
  }
];

const GlobalTimeline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-white">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 lg:px-16 py-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </Button>
          <MYALogo size={32} />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A structured path to achieve your goal
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Calendar size={16} />
              <span className="text-sm">8 months timeline</span>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Timeline Overview</h2>
              <p className="text-gray-500 text-sm">Click to edit phases • Adjust duration • Add new phases</p>
            </div>

            {/* Phase Cards */}
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Phase Card */}
                  <div className={`${phase.color} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer`}>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-medium ${phase.textColor} px-3 py-1 rounded-full bg-white/50`}>
                            Phase {phase.id}
                          </span>
                          <span className="text-sm text-gray-600">{phase.duration}</span>
                        </div>
                        <h3 className={`text-2xl font-bold ${phase.titleColor}`}>
                          {phase.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors">
                            <ArrowLeft size={14} className="text-gray-600" />
                          </button>
                          <span className={`text-lg font-bold ${phase.textColor}`}>{phase.id}</span>
                          <button className="w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors">
                            <ArrowLeft size={14} className="text-gray-600 rotate-180" />
                          </button>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors">
                          <span className="text-red-600 text-sm">×</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Month Labels */}
                  <div className="flex justify-center mt-4">
                    <span className="text-sm font-medium text-gray-500">{phase.month}</span>
                  </div>

                  {/* Connector Line */}
                  {index < phases.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-px h-8 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}

              {/* Add Phase Button */}
              <div className="flex justify-center pt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Plus size={20} />
                  Add Phase
                </Button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/")}
              className="px-8 py-3 rounded-xl font-semibold"
            >
              Back to Home
            </Button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-xl font-semibold"
            >
              Let's Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlobalTimeline;
