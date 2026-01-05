import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#overview", label: "Overview" },
    { href: "/#amenities", label: "Amenities" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#floor-plans", label: "Floor Plans" },
    { href: "/enquiry", label: "Enquire Now" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Nambiar District 25"
            className="h-12 md:h-14 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.slice(0, -1).map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+919538455783"
            className="flex items-center gap-2 text-gold font-semibold hover:text-gold/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 95384 55783
          </a>
          <Link to="/enquiry">
            <Button variant="hero" size="default">
              Enquire Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-xl border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  if (link.href === "/enquiry") {
                    window.location.href = "/enquiry";
                  } else {
                    scrollToSection(link.href);
                  }
                }}
                className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
