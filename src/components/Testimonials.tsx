import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Margaret S.",
    location: "Durbanville",
    text: "Paula has been an absolute blessing to our family. She treats my mother with such kindness and respect. We couldn't ask for better care.",
    rating: 5,
  },
  {
    name: "John M.",
    location: "Bellville",
    text: "My father looks forward to Paula's visits every week. She's not just a caregiver – she's become a true friend to him. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    location: "Brackenfell",
    text: "Professional, reliable, and genuinely caring. Paula goes above and beyond to make sure my grandmother is comfortable and happy. We're so grateful.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Families Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from families who trust Helping Hand for their loved ones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-border bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div className="flex gap-1 justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-primary text-lg">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
