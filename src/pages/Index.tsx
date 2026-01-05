import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import FloorPlansSection from "@/components/FloorPlansSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <AmenitiesSection />
        <GallerySection />
        <FloorPlansSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
