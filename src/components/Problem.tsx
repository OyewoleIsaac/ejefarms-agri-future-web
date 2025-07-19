import { AlertTriangle, TrendingDown, Users } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Massive Import Dependency",
      description: "Nigeria imports over 400,000 MT of palm oil annually—local demand far exceeds supply.",
      stat: "400,000 MT"
    },
    {
      icon: Users,
      title: "Outdated Farming Techniques",
      description: "Smallholder farmers use low-yield techniques and lack direct market access.",
      stat: "Low Yields"
    },
    {
      icon: AlertTriangle,
      title: "Sustainability Crisis",
      description: "Unsustainable production methods, poor traceability, and missed revenue opportunities.",
      stat: "Poor Quality"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Challenge We're <span className="text-primary">Solving</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nigeria's palm oil industry faces critical challenges that limit growth and sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 border border-border/50 group hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-2xl mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              
              <div className="text-2xl font-bold text-destructive mb-2">{problem.stat}</div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-destructive mb-4">The Bottom Line</h3>
            <p className="text-lg text-muted-foreground">
              Nigeria's unmet demand creates a massive opportunity for sustainable, technology-driven solutions. 
              The time for innovation is now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};