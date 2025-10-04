import paulaPhoto from "@/assets/paula-photo.jpeg";

const Biography = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={paulaPhoto} 
                  alt="Paula Correia - Professional Senior Caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Meet Paula Correia
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With years of experience in senior care, Paula brings warmth, compassion, 
                and professionalism to every interaction. Her dedication to improving the 
                lives of seniors has made her a trusted companion for families across Cape Town.
              </p>
              
              <p>
                Paula understands that aging comes with unique challenges, and she's committed 
                to providing support that respects dignity while promoting independence. Whether 
                it's helping with daily tasks, providing companionship, or offering a listening 
                ear, Paula treats each person with the care and respect they deserve.
              </p>

              <p>
                Her personalized approach means that every care plan is tailored to individual 
                needs and preferences, ensuring that your loved ones receive exactly the support 
                they need to thrive in their own homes.
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
              <p className="text-foreground font-semibold text-xl mb-2">
                "Caring for seniors isn't just my job – it's my passion."
              </p>
              <p className="text-muted-foreground">
                - Paula Correia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
