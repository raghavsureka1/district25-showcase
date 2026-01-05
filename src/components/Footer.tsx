import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img src={logo} alt="Nambiar District 25" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-cream/70 text-sm leading-relaxed max-w-md">
              District 25 by Nambiar Developers brings The SoHo Life to Bengaluru with villa-style skyrise residences off Sarjapur Road. Experience luxury living with 80% open space and 61+ world-class amenities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-cream/70 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#overview" className="text-cream/70 hover:text-gold transition-colors">Overview</a>
              </li>
              <li>
                <a href="/#amenities" className="text-cream/70 hover:text-gold transition-colors">Amenities</a>
              </li>
              <li>
                <a href="/#floor-plans" className="text-cream/70 hover:text-gold transition-colors">Floor Plans</a>
              </li>
              <li>
                <Link to="/enquiry" className="text-cream/70 hover:text-gold transition-colors">Enquire Now</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-cream/70">
                  Off Sarjapur Road, Near Muthanallur Cross, Bangalore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+919876543210" className="text-cream/70 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:sales@district25.in" className="text-cream/70 hover:text-gold transition-colors">
                  sales@district25.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© 2025 Nambiar Developers. All rights reserved.</p>
          <p>RERA No: PRM/KA/RERA/XXXXXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
