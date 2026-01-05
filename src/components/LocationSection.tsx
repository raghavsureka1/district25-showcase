import { MapPin, Train, Building2, GraduationCap, Plane } from "lucide-react";

const LocationSection = () => {
  const nearbyPlaces = [
    { icon: Train, name: "Muthanallur Metro Station", distance: "500m" },
    { icon: Building2, name: "Wipro SEZ", distance: "2 km" },
    { icon: GraduationCap, name: "Oakridge International School", distance: "1.5 km" },
    { icon: GraduationCap, name: "TISB", distance: "2 km" },
    { icon: Building2, name: "Electronic City", distance: "8 km" },
    { icon: Plane, name: "Kempegowda International Airport", distance: "45 km" },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-widest">
              Strategic Location
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              An Enviable Address in SWIFT City
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              District 25 is strategically located in Bangalore's proposed SWIFT City, an area of rapid development. Located a hop away from major IT hubs and just 500 meters from the upcoming Muthanallur Metro Station.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <place.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{place.name}</div>
                    <div className="text-xs text-muted-foreground">{place.distance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <MapPin className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">
                Off Sarjapur Road
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Near Muthanallur Cross, Chandapura-Dommasandra Road, Bangalore
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-display font-bold text-gold">15</div>
                  <div className="text-sm text-primary-foreground/80">mins to Wipro</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-display font-bold text-gold">20</div>
                  <div className="text-sm text-primary-foreground/80">mins to E-City</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
