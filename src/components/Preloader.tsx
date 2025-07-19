import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl animate-pulse-glow">
              <Leaf className="h-12 w-12 text-primary-foreground animate-pulse" />
            </div>
            {/* Rotating Ring */}
            <div className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-2xl animate-spin"></div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in-up">
          Ejefarms
        </h1>
        <p className="text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Empowering Progress, Cultivating Futures
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-muted-foreground mt-2">{progress}%</div>
        </div>

        {/* Palm Oil Dots Animation */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};