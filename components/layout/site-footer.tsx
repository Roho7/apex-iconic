import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-800 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">APEX ICONIC</h3>
            <p className="text-sm text-muted">
              Dubai property brokerage for villas, townhouses, apartments, land and commercial property.
            </p>
            <p className="text-sm text-muted mt-2">
              Buy, sell, rent & manage with expert advisors.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a
                  href={CONTACT_INFO.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {CONTACT_INFO.address}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <p className="text-sm text-muted">{CONTACT_INFO.company}</p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apex Iconic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
