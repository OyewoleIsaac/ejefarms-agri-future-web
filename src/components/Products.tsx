import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Droplets, ShoppingCart } from "lucide-react";

export const Products = () => {
  const products = [
    {
      icon: Droplets,
      title: "Crude Palm Oil",
      description: "High-quality, sustainably produced crude palm oil for food industry applications",
      features: ["Premium quality", "Sustainable sourcing", "Full traceability", "Bulk quantities"]
    },
    {
      icon: Leaf,
      title: "Palm Kernel Oil",
      description: "Refined palm kernel oil for cosmetics, personal care, and specialty food products",
      features: ["Cosmetic grade", "Food grade options", "Custom processing", "Quality assured"]
    },
    {
      icon: Zap,
      title: "Palm Kernel Cake",
      description: "Nutritious animal feed and organic fertilizer from palm kernel processing",
      features: ["High protein content", "Organic fertilizer", "Sustainable feed", "Cost-effective"]
    },
    {
      icon: ShoppingCart,
      title: "Agri-Tech Platform",
      description: "Blockchain-powered marketplace connecting farmers, processors, and buyers",
      features: ["Transparent trading", "Price discovery", "Quality verification", "Direct access"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Product <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From premium palm oil products to cutting-edge agricultural technology platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {products.map((product, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 border-border/50 group hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 group-hover:shadow-medium transition-all">
                  <product.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Opportunity */}
        <div className="bg-gradient-earth rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-accent-foreground">
            Massive Market Opportunity
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-accent-foreground mb-2">$77B</div>
              <div className="text-accent-foreground/80">Global Market (2025)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-foreground mb-2">$115B</div>
              <div className="text-accent-foreground/80">Projected (2033)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-foreground mb-2">400K+</div>
              <div className="text-accent-foreground/80">MT Annual Demand Gap</div>
            </div>
          </div>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            Nigeria's unmet demand creates unprecedented opportunities for sustainable, technology-driven palm oil production
          </p>
        </div>
      </div>
    </section>
  );
};