import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919538455783";
  const message = "Hi, I'm interested in Nambiar District 25 Phase 3. Please share more details.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
