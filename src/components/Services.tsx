import { Heart, Users, ShoppingBag, Utensils, Home, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Friendly Visits",
    description: "Regular companionship and meaningful conversations to brighten your loved one's day.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Assistance",
    description: "Help with grocery shopping and running essential errands with care and attention.",
  },
  {
    icon: Utensils,
    title: "Meal Preparation",
    description: "Nutritious meal planning and preparation tailored to dietary needs and preferences.",
  },
  {
    icon: Home,
    title: "Light Housekeeping",
    description: "Maintaining a clean, comfortable, and safe living environment for your loved ones.",
  },
  {
    icon: Stethoscope,
    title: "Medical Appointments",
    description: "Reliable transportation and support for doctor visits and medical appointments.",
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "Compassionate assistance with daily activities while maintaining dignity and independence.",
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services We Provide
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive care solutions designed to support seniors in living 
            comfortably and independently in their own homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
