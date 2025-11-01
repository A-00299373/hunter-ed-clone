import { Users, Calendar, TrendingUp, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2000+",
    label: "Students Trained",
  },
  {
    icon: Calendar,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Pass Rate Support",
  },
  {
    icon: Star,
    value: "5★",
    label: "Student Rating",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
