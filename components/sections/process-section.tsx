import { PROCESS_STEPS } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProcessSection() {
  return (
    <section className="container py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A client journey designed to keep things clear and controlled
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Our process is built around communication, transparency, and professional execution—so you know
          what's happening at every stage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step) => (
          <Card key={step.number} className="relative">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                {step.number}
              </div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{step.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
