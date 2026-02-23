import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-background px-4 py-20 text-center">
      <div className="container max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Where property investment feels effortless.
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Dubai real estate doesn't need to feel complicated. Apex Iconic is built around clear advice,
          professional execution, and long-term support—so buying, renting, selling, and managing property
          feels seamless from start to finish.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/register">Register With Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/register?service=buy-sell">Speak With an Advisor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
