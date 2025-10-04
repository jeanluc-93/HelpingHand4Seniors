import { MapPin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const areas = [
  "Bellville",
  "Durbanville",
  "Parow",
  "Brackenfell",
  "Goodwood",
  "Panorama",
  "Kraaifontein",
  "Kuils River",
  "Tygerberg",
  "Stellenbosch",
];

const AreasOfOperation = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Areas We Serve
          </h2>
          <p className="text-xl text-muted-foreground">
            Providing compassionate senior care across Cape Town's Northern Suburbs
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 lg:p-12 border-border bg-card shadow-xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-lg">
              Don't see your area listed?{" "}
              <a 
                href="tel:+27812092571" 
                className="text-primary font-semibold hover:underline"
              >
                Contact us
              </a>
              {" "}to discuss your needs – we may be able to help!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AreasOfOperation;
