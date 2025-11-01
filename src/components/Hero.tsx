import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import heroImage from "@/assets/hero-wilderness.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 text-primary-foreground">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Certified Training Provider</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Your Path to Safe & Responsible{" "}
            <span className="text-secondary">Firearm Ownership</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Expert firearms safety training and hunter education in Sudbury, Ontario. Get certified with Canada's most trusted local training provider.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Book a Course →
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8">
              View Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
