import { Shield, Clock, Smile, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family-Like Care",
    description: "We treat your loved ones with the same care and respect we'd give our own family.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Dependable support you can count on, building long-term relationships based on trust.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Services adapted to your needs and schedule, providing support when it matters most.",
  },
  {
    icon: Smile,
    title: "Compassionate Approach",
    description: "Every interaction is filled with warmth, patience, and genuine care for wellbeing.",
  },
];

import { Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Why Choose Helping Hand?
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Helping Hand for Seniors, we understand that choosing care for your 
              loved ones is one of the most important decisions you'll make. That's why 
              we're committed to providing personalized, compassionate support that 
              respects dignity and promotes independence.
            </p>

            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
              <p className="text-lg text-foreground leading-relaxed italic">
                "My mission is simple: to make everyday life easier, more enjoyable, 
                and more comfortable for seniors and their families. Every person deserves 
                to age with grace, dignity, and the support they need to thrive."
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-primary text-lg">Paula Correia</p>
                <p className="text-muted-foreground">Founder & Caregiver</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
