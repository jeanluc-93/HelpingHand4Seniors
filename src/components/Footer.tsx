import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8" fill="currentColor" />
              <div>
                <h3 className="text-xl font-bold">Helping Hand</h3>
                <p className="text-sm opacity-90">for Seniors</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Compassionate care that feels like family. Making everyday life 
              easier and more enjoyable for your loved ones.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <a 
                href="tel:0812099571" 
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>081 209 9571</span>
              </a>
              <a 
                href="mailto:paulagcorreia@proton.me" 
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>paulagcorreia@proton.me</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cape Town, Northern Suburbs</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Friendly Visits & Companionship</li>
              <li>• Shopping Assistance</li>
              <li>• Meal Preparation</li>
              <li>• Light Housekeeping</li>
              <li>• Medical Appointments</li>
              <li>• Personal Care Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>© {currentYear} Helping Hand for Seniors. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Providing compassionate care in Cape Town's Northern Suburbs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
