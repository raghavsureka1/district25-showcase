import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: January 2025
            </p>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                Nambiar Developers ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an enquiry for Nambiar District 25.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Information:</strong> Name, phone number, email address, and any other information you provide when filling out our enquiry form.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and time spent on the site.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To respond to your enquiries and provide information about our properties</li>
                <li>To send you marketing communications about our projects (with your consent)</li>
                <li>To improve our website and customer service</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                4. Sharing Your Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p><strong>Nambiar Developers</strong></p>
                <p>Phone: +91 95384 55783</p>
                <p>Email: sales@district25.in</p>
                <p>Address: Off Sarjapur Road, Near Muthanallur Cross, Bangalore</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
