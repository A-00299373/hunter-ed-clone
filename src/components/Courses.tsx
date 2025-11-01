import { CourseCard } from "./CourseCard";

const courses = [
  {
    title: "Canadian Firearms Safety Course (CFSC)",
    description: "Essential training for your Possession and Acquisition Licence (PAL). Learn safe handling, storage, and operation of non-restricted firearms.",
    duration: "8 hours",
    price: "$160",
  },
  {
    title: "Canadian Restricted Firearms Safety Course (CRFSC)",
    description: "Advanced training for restricted firearms. Required for handguns and certain semi-automatic rifles.",
    duration: "8 hours",
    price: "$160",
  },
  {
    title: "Ontario Hunter Education",
    description: "Comprehensive hunter safety and ethics training. Learn wildlife management, hunting regulations, and outdoor survival skills.",
    duration: "9 hours",
    price: "$120",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Training Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified courses designed to meet all your firearms safety and hunter education needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
