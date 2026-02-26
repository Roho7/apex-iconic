"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";

const processImages: Record<number, string> = {
  1: "/process-1.jpeg",
  2: "/process-2.jpeg",
  3: "/process-3.jpeg",
  4: "/process-4.jpeg",
};

export function ProcessSection() {
  const [activeItem, setActiveItem] = useState<string>("item-1");

  return (
    <section className="container py-24 lg:py-32">
      <div className="mb-12 max-w-3xl">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          How We Work
        </h2>
        <p className="text-lg text-muted-foreground">
          A client journey designed to keep things clear and controlled through every stage
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 bg-muted">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeItem === `item-${step.number}` ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={processImages[step.number]}
                alt={step.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={(value) => setActiveItem(value || activeItem)}
            className="w-full space-y-4 border-0"
          >
            {PROCESS_STEPS.map((step) => (
              <AccordionItem
                key={step.number}
                value={`item-${step.number}`}
                className="border rounded-2xl px-6 bg-card transition-all hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {step.number}
                    </div>
                    <span className="text-xl font-semibold">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 pl-16 text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
