import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to provide your loved ones with the compassionate care they deserve? 
            Contact us today for a friendly consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <Card className="p-8 space-y-8 border-border bg-card/80 backdrop-blur-sm shadow-xl">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a 
                      href="tel:0812099571" 
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      081 209 9571
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:paulagcorreia@proton.me" 
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all"
                    >
                      paulagcorreia@proton.me
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Service Area</p>
                    <p className="text-lg font-semibold text-foreground">Cape Town</p>
                    <p className="text-muted-foreground">Northern Suburbs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Availability</p>
                    <p className="text-lg font-semibold text-foreground">Flexible Hours</p>
                    <p className="text-muted-foreground">Schedule a consultation anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <div className="space-y-6">
            <Card className="p-8 border-border bg-primary/5 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reach out today to discuss how we can provide the care and support 
                your loved ones need. We're here to answer your questions and create 
                a personalized care plan.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = 'tel:0812099571'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Paula Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:paulagcorreia@proton.me'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send an Email
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-border bg-card/80 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Free initial consultation to understand your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized care plan tailored to your situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Flexible scheduling to fit your family's needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ongoing communication and support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
