import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 luxury-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Experience The SoHo Life?
          </h2>
          <p className="text-foreground/80 text-lg mb-8">
            Schedule a site visit today and discover your dream home at District 25 Phase 3. Our experts are ready to guide you through every step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/enquiry">
              <Button variant="hero" size="xl" className="min-w-[200px]">
                <Calendar className="w-5 h-5 mr-2" />
                Book Site Visit
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button 
                variant="outline" 
                size="xl" 
                className="min-w-[200px] border-foreground/30 hover:bg-foreground/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>RERA Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Clear Title</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Bank Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
