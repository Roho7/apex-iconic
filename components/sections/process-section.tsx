"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProcessSection() {
  return (
    <section className="container py-24 lg:py-32">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          How We Work
        </h2>
        <p className="text-lg text-muted-foreground">
          A client journey designed to keep things clear and controlled through every stage
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full space-y-4 border-none"
        >
          {PROCESS_STEPS.map((step) => (
            <AccordionItem
              key={step.number}
              value={`item-${step.number}`}
              className="border border-border rounded-2xl h-full px-8 bg-card transition-all hover:shadow-md data-[state=open]:shadow-lg data-[state=open]:border-primary/30 data-[state=open]:bg-accent/5"
            >
              <AccordionTrigger className="hover:no-underline py-8">
                <div className="flex items-center gap-6 text-left w-full">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-xl">
                    {step.number}
                  </div>
                  <span className="text-xl sm:text-2xl font-semibold tracking-tight">{step.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="h-full pt-2 mb-2 pl-20 pr-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {step.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
