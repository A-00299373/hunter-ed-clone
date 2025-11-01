import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Get Certified?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Join thousands of satisfied students who have earned their firearms licenses and hunter education certifications with Sudbury's most trusted training provider.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Book Your Course Today
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8">
              Have Questions?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
