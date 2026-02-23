import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { Home, Key, Building, Palmtree } from "lucide-react";

const iconMap = {
  home: Home,
  key: Key,
  building: Building,
  palmtree: Palmtree,
};

export function ServicesSection() {
  return (
    <section id="services" className="container py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Comprehensive property solutions tailored to your investment needs
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          const card = (
            <Card
              className={`h-full transition-all ${
                service.linkToRegister
                  ? "cursor-pointer hover:shadow-lg hover:border-primary/50"
                  : "opacity-75"
              }`}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          );

          return service.linkToRegister ? (
            <Link key={service.id} href={`/register?service=${service.id}&locked=1`}>
              {card}
            </Link>
          ) : (
            <div key={service.id}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
