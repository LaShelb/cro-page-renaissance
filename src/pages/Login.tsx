
import React, { useState } from "react";
import { MYALogo } from "@/components/MYALogo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Form submitted:", { email, password, isLogin });
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-[radial-gradient(circle_at_50%_0%,#f9fafb_0%,#bdd6fa_55%,#ffcac5_80%,#ff884d_100%)] transition-bg duration-300">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 lg:px-16 py-6 z-20 relative">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 hover-scale transition">
            <MYALogo size={32} />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-md font-medium text-gray-700 hover:text-primary transition">
            Back to Home
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col flex-1 items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Login/Signup Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? "Welcome back" : "Create account"}
              </h1>
              <p className="text-gray-600">
                {isLogin 
                  ? "Sign in to continue your journey with MYA" 
                  : "Start your goal achievement journey today"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-primary hover:text-primary/90 transition">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold hover-scale"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight size={20} />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-primary hover:text-primary/90 font-medium transition"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            {/* Social login options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
                  <span>Google</span>
                </button>
                <button className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition">
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Join thousands who are already achieving their goals with MYA
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <span>✓ Free to start</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
