import { Building2, TreePine, Users, Train } from "lucide-react";

const OverviewSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Villa-Style Living",
      description: "Spacious balconies, no shared walls, just 4 units per floor with 4 elevators in each tower.",
    },
    {
      icon: TreePine,
      title: "Nature Connect",
      description: "80% open space, 40% green space and 3500+ trees in a sprawling integrated township.",
    },
    {
      icon: Users,
      title: "World-Class Clubhouse",
      description: "2.5 lakh+ sft clubhouse with gyms, pools, spa, and courts for pickleball, tennis & squash.",
    },
    {
      icon: Train,
      title: "Prime Location",
      description: "Just 500m from upcoming Muthanallur Metro Station, near Wipro, Cisco & top schools.",
    },
  ];

  return (
    <section id="overview" className="py-20 md:py-32 section-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest">
            Welcome to District 25
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Where Work Meets Play, Art Thrives & Nature Blossoms
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            District 25 is our take on The SoHo Life - a sprawling, integrated township that brings one of the world's finest neighbourhood concepts right here in the Garden City. An address whose true value will be felt for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-luxury rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg forest-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Phase 3 - Exclusive Launch
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-6">
            Spacious 3 BHK & 4 BHK ultra-luxury apartments designed with all the perks of villa living in a skyrise setting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>1845 - 2497 sft</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Premium Specifications</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Vastu Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
