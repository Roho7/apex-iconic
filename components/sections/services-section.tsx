import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import Image from "next/image";

const imageMap: Record<string, string> = {
  buy: "/buy.webp",
  sell: "/sell.jpeg",
  rent: "/rent.jpeg",
  "property-management": "/property-management.jpeg",
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
          const card = (
            <div
              className={`group relative overflow-hidden rounded-2xl aspect-3/4 transition-all ${
                service.linkToRegister
                  ? "cursor-pointer"
                  : "opacity-75"
              }`}
            >
              <Image
                src={imageMap[service.id] || "/placeholder.webp"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2 transition-opacity duration-300 group-hover:opacity-100 opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
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
