import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonHref: string;
}

interface PricingSectionProps {
  tiers: PricingTier[];
}

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <Card className={cn(
      "relative rounded-lg border-zinc-200 dark:border-zinc-800",
      tier.highlighted && "border-2 border-primary"
    )}>
      {tier.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform -mt-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium uppercase">
          Popular
        </div>
      )}
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="text-3xl font-bold">
          {tier.price}
        </div>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={tier.buttonHref}>{tier.buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection: React.FC<PricingSectionProps> = ({ tiers }) => {
  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-50">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;