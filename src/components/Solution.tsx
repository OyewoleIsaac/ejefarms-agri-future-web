import { Button } from "@/components/ui/button";
import { Brain, Shield, BarChart3, ArrowRight } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Smart Oil Palm Farming",
      description: "AI, drones, and IoT sensors provide real-time data for optimized decision-making and maximum yield.",
      features: ["AI-powered analytics", "Drone monitoring", "IoT sensor networks", "Precision agriculture"]
    },
    {
      icon: Shield,
      title: "Blockchain Traceability",
      description: "End-to-end transparency ensuring purity, quality, and sustainability of every batch from farm to consumer.",
      features: ["Full supply chain tracking", "Quality assurance", "Sustainability verification", "Consumer trust"]
    },
    {
      icon: BarChart3,
      title: "Vertically Integrated Model",
      description: "Complete control from our own plantations to retail and B2B sales, maximizing efficiency and quality.",
      features: ["Direct farm control", "Processing facilities", "Distribution network", "Market access"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Innovative</span> Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technology-driven sustainable agriculture that transforms traditional farming into a precision science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 border border-border/50 group hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:shadow-medium transition-all">
                <solution.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technology Integration Visual */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Complete Technology <span className="text-primary">Integration</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From seed to sale, every step is optimized with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">AI-Powered Plantation Management</h4>
                  <p className="text-muted-foreground text-sm">Real-time monitoring and predictive analytics</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Blockchain Supply Chain</h4>
                  <p className="text-muted-foreground text-sm">Transparent tracking from farm to consumer</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Integrated Marketplace</h4>
                  <p className="text-muted-foreground text-sm">Direct access to buyers and farmers</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Explore Our Technology <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};