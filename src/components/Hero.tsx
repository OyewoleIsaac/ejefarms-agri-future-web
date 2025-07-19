import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern palm oil plantation with advanced technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
          Empowering Progress,<br />
          <span className="text-accent">Cultivating Futures</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Sustainable Palm Oil Production & Revolutionary Agri-Tech Marketplace
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            <Play className="mr-2 h-5 w-5" /> Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center p-4 bg-background/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-4xl font-bold text-accent">180+</div>
            <div className="text-xs md:text-sm opacity-80">Clients Served</div>
          </div>
          <div className="text-center p-4 bg-background/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-4xl font-bold text-accent">24</div>
            <div className="text-xs md:text-sm opacity-80">Hectare Plantation</div>
          </div>
          <div className="text-center p-4 bg-background/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-4xl font-bold text-accent">25</div>
            <div className="text-xs md:text-sm opacity-80">Ongoing Projects</div>
          </div>
          <div className="text-center p-4 bg-background/10 rounded-xl backdrop-blur-sm">
            <div className="text-2xl md:text-4xl font-bold text-accent">$25K</div>
            <div className="text-xs md:text-sm opacity-80">Pre-seed Funding</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};