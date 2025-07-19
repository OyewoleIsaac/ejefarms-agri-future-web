import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Brain, Calculator, TrendingUp } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Eje Joseph",
      role: "CEO & Founder",
      icon: User,
      expertise: "Visionary founder with deep expertise in sustainability and agricultural innovation",
      badges: ["Leadership", "Sustainability", "Strategy"]
    },
    {
      name: "Ukwa Joseph",
      role: "Chief Technology Officer",
      icon: Brain,
      expertise: "ICT specialist and agri-AI expert leading blockchain development and technology integration",
      badges: ["AI/ML", "Blockchain", "ICT"]
    },
    {
      name: "Ofoegbu Emmanuel",
      role: "Chief Financial Officer",
      icon: Calculator,
      expertise: "Financial strategist providing insights and oversight for sustainable growth",
      badges: ["Finance", "Investment", "Strategy"]
    },
    {
      name: "Ugwu Raymond",
      role: "Chief Analyst",
      icon: TrendingUp,
      expertise: "Analytics expert driving market intelligence and data-driven decision making",
      badges: ["Analytics", "Market Intelligence", "Data Science"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our <span className="text-primary">Leadership</span> Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced leaders driving innovation in sustainable agriculture and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 border-border/50 group hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 group-hover:shadow-medium transition-all">
                  <member.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.expertise}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Culture */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Mission</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a sustainable future through technology-driven agriculture, creating value for farmers, 
              consumers, and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Innovation</div>
              <div className="text-muted-foreground text-sm">Cutting-edge technology for traditional agriculture</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-2">Sustainability</div>
              <div className="text-muted-foreground text-sm">Environmental responsibility in every operation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">Impact</div>
              <div className="text-muted-foreground text-sm">Creating positive change for communities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};