import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import interior3bhk from "@/assets/interior-3bhk.jpg";
import interior4bhk from "@/assets/interior-4bhk.jpg";
import buildingView1 from "@/assets/building-view-1.jpg";
import buildingView2 from "@/assets/building-view-2.jpg";
import masterPlan from "@/assets/master-plan.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: buildingView1, alt: "District 25 Exterior View", category: "Exterior" },
    { src: interior3bhk, alt: "3 BHK Living Room", category: "3 BHK Interiors" },
    { src: interior4bhk, alt: "4 BHK Living Room", category: "4 BHK Interiors" },
    { src: buildingView2, alt: "Township Amenities View", category: "Amenities" },
    { src: masterPlan, alt: "Master Plan", category: "Master Plan" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest">
            Visual Experience
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Discover Luxury Living
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the elegance of District 25 through our carefully crafted spaces and world-class amenities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large Feature Image */}
          <div
            className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(images[0].src)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium bg-gold/80 px-3 py-1 rounded-full">
                {images[0].category}
              </span>
            </div>
          </div>

          {/* Smaller Images */}
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium bg-gold/80 px-2 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 border-0 bg-transparent">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
