import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAStrip() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to move forward with confidence?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Speak with an advisor and discover how we can support your property goals
        </p>
        <Button size="lg" asChild>
          <Link href="/register?service=buy">Speak With an Advisor</Link>
        </Button>
      </div>
    </section>
  );
}
