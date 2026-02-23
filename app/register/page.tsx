"use client";

import { useSearchParams } from "next/navigation";
import { ClientRegistrationForm } from "@/components/forms/client-registration-form";
import { ServiceType } from "@/lib/types";
import { Suspense } from "react";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") as ServiceType | null;
  const lockedParam = searchParams.get("locked");

  const isServiceLocked = lockedParam === "1";
  const defaultService = serviceParam || undefined;

  return (
    <main className="container max-w-3xl py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Register to Work With a Trusted Dubai Property Brokerage
        </h1>
        <p className="text-lg text-muted-foreground">
          Your details are handled professionally and confidentially.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm sm:p-8">
        <ClientRegistrationForm
          defaultService={defaultService}
          isServiceLocked={isServiceLocked}
        />
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          By submitting this form, you consent to Apex Iconic contacting you regarding your property
          requirements. We respect your privacy and handle all information confidentially.
        </p>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="container py-12 text-center">Loading...</div>}>
      <RegistrationContent />
    </Suspense>
  );
}
