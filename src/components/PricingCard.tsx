import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: {
    name: string;
    available: boolean;
  }[];
  ctaText?: string;
  ctaHref?: string;
  isRecommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  ctaText = "Get Started",
  ctaHref = "#",
  isRecommended = false,
}) => {
  return (
    <Card
      className={`relative ${isRecommended ? "border-2 border-primary shadow-lg" : "shadow"} hover:shadow-md transition-shadow duration-200`}
    >
      {isRecommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground py-1 px-3 rounded-full text-sm font-semibold">
          Recommended
        </div>
      )}
      <CardHeader className="space-y-2">
        <h3 className="text-2xl font-semibold text-center">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
        <div className="text-5xl font-bold text-center">{price}</div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.available ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              <span className={feature.available ? "" : "line-through text-muted-foreground"}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;