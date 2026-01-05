import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Maximize2, BedDouble } from "lucide-react";
import floorPlans from "@/assets/floor-plans.png";

const FloorPlansSection = () => {
  const units = [
    {
      type: "3 BHK + 3T",
      unitType: "Type 11",
      tower: "Phase 1 | Tower 3",
      saleArea: "1845 sft",
      carpetArea: "1250 sft",
    },
    {
      type: "3 BHK + 3T",
      unitType: "Type 3",
      tower: "Phase 1 | Tower 4",
      saleArea: "2007 sft",
      carpetArea: "1310 sft",
    },
    {
      type: "3.5 BHK + 4T",
      unitType: "Type 3",
      tower: "Phase 1 | Tower 1",
      saleArea: "2080 sft",
      carpetArea: "1386 sft",
    },
    {
      type: "4 BHK + 4T",
      unitType: "Type 3",
      tower: "Phase 1 | Tower 2",
      saleArea: "2497 sft",
      carpetArea: "1605 sft",
    },
  ];

  return (
    <section id="floor-plans" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest">
            Unit Configurations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Thoughtfully Designed Spaces
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our range of spacious 3 BHK and 4 BHK apartments, each designed to maximize natural light, ventilation, and luxurious living.
          </p>
        </div>

        {/* Unit Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <BedDouble className="w-5 h-5 text-gold" />
                <span className="font-display text-xl font-bold text-foreground">
                  {unit.type}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unit Type:</span>
                  <span className="font-medium text-foreground">{unit.unitType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tower:</span>
                  <span className="font-medium text-foreground">{unit.tower}</span>
                </div>
                <div className="border-t border-border my-3 pt-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sale Area:</span>
                    <span className="font-semibold text-gold">{unit.saleArea}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-muted-foreground">Carpet Area:</span>
                    <span className="font-medium text-foreground">{unit.carpetArea}</span>
                  </div>
                </div>
              </div>

              <Link to="/enquiry" className="block mt-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-gold/10 group-hover:border-gold/30">
                  Enquire Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Floor Plan Image */}
        <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Detailed Floor Plans
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm">Click to enlarge</span>
            </div>
          </div>
          <img
            src={floorPlans}
            alt="District 25 Unit Plans"
            className="w-full rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
