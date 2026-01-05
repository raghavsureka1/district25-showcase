import { 
  Waves, 
  Dumbbell, 
  TreeDeciduous, 
  Theater, 
  Bike,
  Trophy,
  Baby,
  PawPrint,
  Flower2,
  Music,
  Utensils,
  Sparkles
} from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { icon: Waves, name: "Swimming Pool & Kids Pool" },
    { icon: Dumbbell, name: "Fully Equipped Gym" },
    { icon: Trophy, name: "Tennis & Pickleball Courts" },
    { icon: Theater, name: "Amphitheater" },
    { icon: Bike, name: "4km Jogging & Cycling Track" },
    { icon: TreeDeciduous, name: "Butterfly Garden" },
    { icon: Baby, name: "Kids Play Zone" },
    { icon: PawPrint, name: "Pet Park" },
    { icon: Flower2, name: "Yoga Deck & Spa" },
    { icon: Music, name: "Hobby Centre" },
    { icon: Utensils, name: "Restaurants & Cafes" },
    { icon: Sparkles, name: "Senior's Hall" },
  ];

  return (
    <section id="amenities" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest">
            Live The Complete Life
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            100+ World-Class Amenities
          </h2>
          <p className="text-muted-foreground text-lg">
            From a 2.5 lakh+ sft clubhouse to an endless array of sports facilities, wellness zones, and entertainment spaces - everything you need is within your community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-border hover:border-gold/30"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                <amenity.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-sm font-medium text-foreground">{amenity.name}</span>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background rounded-xl p-6 text-center border border-border">
            <div className="text-4xl font-display font-bold text-gold mb-2">4km</div>
            <div className="text-muted-foreground">Jogging & Cycling Track</div>
          </div>
          <div className="bg-background rounded-xl p-6 text-center border border-border">
            <div className="text-4xl font-display font-bold text-gold mb-2">2.5L+</div>
            <div className="text-muted-foreground">Sft Clubhouse</div>
          </div>
          <div className="bg-background rounded-xl p-6 text-center border border-border">
            <div className="text-4xl font-display font-bold text-gold mb-2">3500+</div>
            <div className="text-muted-foreground">Trees Planted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
