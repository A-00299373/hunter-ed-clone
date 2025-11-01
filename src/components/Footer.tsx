import { Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-secondary rounded-lg p-2">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">Sudbury Firearms</h3>
                <p className="text-primary-foreground/80 text-xs">Hunter Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Your trusted partner for firearms safety training and hunter education in Sudbury, Ontario.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-primary-foreground/70 hover:text-secondary transition-colors">Courses</a></li>
              <li><a href="#contact" className="text-primary-foreground/70 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="text-primary-foreground/70 hover:text-secondary transition-colors">CFSC</a></li>
              <li><a href="#courses" className="text-primary-foreground/70 hover:text-secondary transition-colors">CRFSC</a></li>
              <li><a href="#courses" className="text-primary-foreground/70 hover:text-secondary transition-colors">Hunter Education</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Sudbury, Ontario</li>
              <li>Canada</li>
              <li className="pt-2">
                <a href="mailto:info@sudburyfirearms.ca" className="hover:text-secondary transition-colors">
                  info@sudburyfirearms.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Sudbury Firearms & Hunter Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
