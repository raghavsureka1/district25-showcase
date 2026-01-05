import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import buildingView from "@/assets/building-view-1.jpg";

const HeroSection = () => {
  const scrollToOverview = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={buildingView}
          alt="Nambiar District 25 - Luxury Apartments"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-cream">Phase 3 Now Launching</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 leading-tight">
            The SoHo Life
            <span className="block text-gold-light">Comes to Bengaluru</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/90 mb-4 font-light max-w-2xl mx-auto">
            Villa-Style Skyrise Residences
          </p>

          <div className="flex items-center justify-center gap-2 text-cream/80 mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-base">Off Sarjapur Road, Bangalore</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/enquiry">
              <Button variant="luxury" size="xl">
                Book Site Visit
              </Button>
            </Link>
            <Button
              variant="outline_luxury"
              size="xl"
              onClick={scrollToOverview}
              className="text-cream border-cream/50 hover:bg-cream/10"
            >
              Explore Project
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { value: "3 & 4", label: "BHK Apartments" },
              { value: "80%", label: "Open Space" },
              { value: "61+", label: "Amenities" },
              { value: "4", label: "Units Per Floor" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 border border-cream/20"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-cream/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToOverview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ChevronDown className="w-8 h-8 text-cream/80" />
      </button>
    </section>
  );
};

export default HeroSection;
