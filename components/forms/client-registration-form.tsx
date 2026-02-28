"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { SERVICE_OPTIONS, PROPERTY_TYPE_OPTIONS } from "@/lib/constants";
import { ServiceType } from "@/lib/types";

const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phoneNumber: z.string().min(7, "Please enter a valid phone number"),
    serviceRequired: z.enum(["buy", "sell", "rent", "property-management"]),
    propertyType: z.enum([
      "villa",
      "townhouse",
      "apartment",
      "land",
      "commercial",
    ]),
    budgetRange: z.string().optional(),
    preferredAreas: z.string().optional(),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const needsAreas =
      data.serviceRequired === "buy" ||
      data.serviceRequired === "sell" ||
      data.serviceRequired === "rent";
    if (needsAreas && !data.preferredAreas?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Preferred areas is required",
        path: ["preferredAreas"],
      });
    }
  });

type FormValues = z.infer<typeof formSchema>;

interface ClientRegistrationFormProps {
  defaultService?: ServiceType;
  isServiceLocked?: boolean;
}

export function ClientRegistrationForm({
  defaultService,
  isServiceLocked = false,
}: ClientRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      serviceRequired:
        defaultService
          ? (defaultService as "buy" | "sell" | "rent" | "property-management")
          : undefined,
      propertyType: undefined,
      budgetRange: "",
      preferredAreas: "",
      message: "",
    },
  });

  const selectedService = form.watch("serviceRequired");
  const isBudgetDisabled = selectedService === "property-management";
  const isPreferredAreasRequired =
    selectedService === "buy" || selectedService === "sell" || selectedService === "rent";

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit registration");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to submit registration. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-green-900">
          Registration Successful!
        </h3>
        <p className="mb-6 text-green-800">
          Thank you for registering with Apex Iconic. One of our advisors will
          contact you shortly to discuss your property requirements.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
        >
          Submit Another Registration
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Controller
        name="fullName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="John Smith"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="john@example.com"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="+971 50 123 4567"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Controller
          name="serviceRequired"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Service Required</FieldLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isServiceLocked}
              >
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {isServiceLocked && (
                <FieldDescription>
                  Service is pre-selected based on your inquiry
                </FieldDescription>
              )}
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="propertyType"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Property Type</FieldLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                >
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </div>

      <Controller
        name="budgetRange"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Budget Range</FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="AED 100,000 - AED 300,000"
              disabled={isBudgetDisabled}
              aria-invalid={fieldState.invalid}
            />
            {isBudgetDisabled && (
              <FieldDescription>
                Budget range is not applicable for Property Management services
              </FieldDescription>
            )}
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <Controller
        name="preferredAreas"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Preferred Areas
              {!isPreferredAreasRequired && (
                <span className="ml-1 text-xs font-normal text-muted-foreground">
                  (Optional)
                </span>
              )}
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="e.g., Dubai Marina, Downtown Dubai, Palm Jumeirah"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Message / Requirements{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (Optional)
              </span>
            </FieldLabel>
            <Textarea
              {...field}
              id={field.name}
              placeholder="Share any additional details or specific requirements..."
              className="min-h-[120px]"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register & Speak With an Advisor"}
      </Button>
    </form>
  );
}
