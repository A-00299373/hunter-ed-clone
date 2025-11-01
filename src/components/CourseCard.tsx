import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
}

export const CourseCard = ({ title, description, duration, price }: CourseCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-secondary/50">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-5 h-5 text-secondary" />
          <span>Duration</span>
          <span className="ml-auto font-semibold text-foreground">{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <DollarSign className="w-5 h-5 text-secondary" />
          <span>Price</span>
          <span className="ml-auto font-semibold text-foreground">{price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="default" size="lg">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};
