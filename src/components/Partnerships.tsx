import { Badge } from "@/components/ui/badge";

export const Partnerships = () => {
  const partners = [
    {
      name: "IBM",
      role: "Blockchain Traceability Partner",
      description: "Powering our supply chain transparency with enterprise blockchain solutions"
    },
    {
      name: "NVIDIA",
      role: "AI for Precision Agriculture",
      description: "Advanced AI computing for crop monitoring and yield optimization"
    },
    {
      name: "AWS",
      role: "Cloud Infrastructure",
      description: "Scalable cloud platform supporting our IoT and data analytics needs"
    },
    {
      name: "Microsoft",
      role: "Technology Partner",
      description: "Enterprise solutions and development tools"
    },
    {
      name: "MongoDB",
      role: "Database Solutions",
      description: "Modern database platform for agricultural data management"
    },
    {
      name: "atlas.ti",
      role: "Analytics Partner",
      description: "Advanced analytics and data visualization tools"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Strategic <span className="text-primary">Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver cutting-edge agricultural technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 border border-border/50 group hover:scale-[1.02]"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{partner.name}</h3>
                <Badge variant="secondary" className="mb-3">{partner.role}</Badge>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Industry <span className="text-primary">Recognition</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">NVIDIA Program</div>
              <div className="text-muted-foreground">Accepted into NVIDIA's Inception Program for AI startups</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="text-2xl font-bold text-secondary mb-2">AWS Program</div>
              <div className="text-muted-foreground">Selected for AWS Activate Program for cloud credits and support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};