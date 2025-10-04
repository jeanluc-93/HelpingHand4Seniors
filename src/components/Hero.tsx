import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Helping Hand for{" "}
                <span className="text-primary">Seniors</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Compassionate care that feels like family.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border space-y-6">
              <h2 className="text-2xl font-semibold text-primary">
                Practical support with a personal touch.
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                From friendly visits and conversations to help with shopping, meals, 
                cleaning, and doctor's visits – I'm here to make everyday life easier 
                and more enjoyable for your loved ones.
              </p>
              
              <div className="pt-4 space-y-4">
                <p className="text-lg font-medium text-foreground">
                  Get in touch today for caring, reliable support.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.location.href = 'tel:0812099571'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:paulagcorreia@proton.me'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Paula</p>
                  <a href="tel:0812099571" className="text-lg font-semibold hover:text-primary transition-colors">
                    081 209 9571
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-foreground">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-semibold">Cape Town</p>
                  <p className="text-sm text-muted-foreground">Northern Suburbs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Compassionate senior care - caregiver with elderly couple"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
