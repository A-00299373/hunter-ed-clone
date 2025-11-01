import { Award, Users, Calendar, BookOpen, CheckCircle, TrendingUp } from "lucide-react";
import instructorImage from "@/assets/instructor-training.jpg";

const features = [
  {
    icon: Award,
    text: "Certified instructors with extensive field experience",
  },
  {
    icon: Users,
    text: "Hands-on training with real firearms and equipment",
  },
  {
    icon: Users,
    text: "Small class sizes for personalized attention",
  },
  {
    icon: Calendar,
    text: "Flexible scheduling including weekend courses",
  },
  {
    icon: BookOpen,
    text: "Comprehensive course materials included",
  },
  {
    icon: TrendingUp,
    text: "Test preparation and exam support",
  },
];

export const Features = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Sudbury Firearms & Hunter Education?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a training provider — we're your local partners in building safe, responsible outdoor traditions that last a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-lg pt-2">{feature.text}</p>
                </div>
              ))}
              
              <div className="pt-6">
                <a href="#about" className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2 transition-colors">
                  Learn About Our Team →
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={instructorImage} 
                alt="Instructor teaching firearms safety" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border-2 border-secondary/20">
                <div className="text-5xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Student satisfaction with<br />hands-on training approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
