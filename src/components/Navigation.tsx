import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-secondary rounded-lg p-2">
              <Award className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="text-primary-foreground font-bold text-lg leading-none">Sudbury Firearms</h1>
              <p className="text-primary-foreground/80 text-xs">Hunter Education</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">Home</a>
            <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">About Us</a>
            <a href="#courses" className="text-primary-foreground hover:text-secondary transition-colors">Courses</a>
            <a href="#faq" className="text-primary-foreground hover:text-secondary transition-colors">FAQ</a>
            <a href="#testimonials" className="text-primary-foreground hover:text-secondary transition-colors">Testimonials</a>
            <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors">Contact</a>
          </div>

          <Button variant="secondary" size="lg">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
