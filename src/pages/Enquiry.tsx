import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import buildingView from "@/assets/building-view-2.jpg";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit mobile number" }),
  unitType: z.string().min(1, { message: "Please select a unit type" }),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      mobile: "",
      unitType: "",
    },
  });

  const unitType = watch("unitType");

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      const unitLabel = unitOptions.find(opt => opt.value === data.unitType)?.label || data.unitType;
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
          to: "pranavarabu@gmail.com",
          subject: "New Enquiry - Nambiar District 25",
          from_name: data.name,
          name: data.name,
          mobile: `+91 ${data.mobile}`,
          unit_type: unitLabel,
          message: `New enquiry from ${data.name}\n\nMobile: +91 ${data.mobile}\nInterested Unit: ${unitLabel}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "Our team will contact you within 24 hours.",
        });
      } else {
        throw new Error(result.message || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at +91 95384 55783",
        variant: "destructive",
      });
    }
  };

  const unitOptions = [
    { value: "3bhk-1845", label: "3 BHK - 1845 sft (Type 11)" },
    { value: "3bhk-2007", label: "3 BHK - 2007 sft (Type 3)" },
    { value: "3.5bhk-2080", label: "3.5 BHK - 2080 sft (Type 3)" },
    { value: "4bhk-2497", label: "4 BHK - 2497 sft (Type 3)" },
    { value: "not-sure", label: "Not Sure - Need Guidance" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Thank You for Your Interest!
            </h1>
            <p className="text-muted-foreground mb-8">
              Your enquiry has been successfully submitted. Our sales team will contact you within 24 hours to assist you with your dream home at District 25.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-12 xl:px-20 bg-background">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Link to="/" className="block mb-8">
          <img src={logo} alt="Nambiar District 25" className="h-12" />
        </Link>

        <div className="max-w-md">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Register Your Interest
          </h1>
          <p className="text-muted-foreground mb-8">
            Fill in your details below and our team will reach out to schedule a site visit for District 25 Phase 3.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name")}
                className="h-12"
              />
              {errors.name && (
                <p className="text-destructive text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground font-medium">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                  +91
                </span>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="9876543210"
                  {...register("mobile")}
                  className="h-12 rounded-l-none"
                  maxLength={10}
                />
              </div>
              {errors.mobile && (
                <p className="text-destructive text-sm">{errors.mobile.message}</p>
              )}
            </div>

            {/* Unit Type Field */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Interested Unit Type <span className="text-destructive">*</span>
              </Label>
              <Select
                value={unitType}
                onValueChange={(value) => setValue("unitType", value, { shouldValidate: true })}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select preferred unit type" />
                </SelectTrigger>
                <SelectContent>
                  {unitOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.unitType && (
                <p className="text-destructive text-sm">{errors.unitType.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Enquiry
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            By submitting this form, you agree to receive calls and messages from Nambiar Developers regarding District 25.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative">
        <img
          src={buildingView}
          alt="District 25 Township"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-12 left-12 right-12 text-cream">
          <h2 className="font-display text-3xl font-bold mb-4">
            Phase 3 Now Open
          </h2>
          <p className="text-cream/90 mb-6 max-w-md">
            Spacious 3 & 4 BHK ultra-luxury apartments starting from 1845 sft. Experience villa-style living in a skyrise setting.
          </p>
          <div className="flex gap-6">
            <div>
              <div className="text-2xl font-display font-bold text-gold">100+</div>
              <div className="text-sm text-cream/70">Amenities</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-gold">80%</div>
              <div className="text-sm text-cream/70">Open Space</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-gold">4</div>
              <div className="text-sm text-cream/70">Units/Floor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
