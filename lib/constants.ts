import { Service, ProcessStep, ContactInfo, ServiceType, PropertyType } from "./types";

export const SERVICES: Service[] = [
  {
    id: "buy",
    title: "Buy",
    description: "Expert guidance through buying villas, townhouses, apartments, land, and commercial properties in Dubai's premium markets.",
    icon: "home",
    linkToRegister: true,
  },
  {
    id: "sell",
    title: "Sell",
    description: "Professional assistance in selling your property at the best value with our deep market knowledge and network.",
    icon: "building",
    linkToRegister: true,
  },
  {
    id: "rent",
    title: "Rent",
    description: "Find your ideal rental property with access to curated listings across Dubai's most sought-after neighborhoods.",
    icon: "key",
    linkToRegister: true,
  },
  {
    id: "property-management",
    title: "Property Management",
    description: "Comprehensive property management services ensuring your investment is maintained, rented, and optimized for maximum returns.",
    icon: "building",
    linkToRegister: true,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Understand Your Needs",
    description: "We begin by listening carefully to your budget, timeline, preferred areas, and must-haves to ensure we're fully aligned from day one.",
  },
  {
    number: 2,
    title: "Curated Market Shortlist",
    description: "Leveraging our deep Dubai market knowledge, we provide carefully selected options that match your criteria and investment goals.",
  },
  {
    number: 3,
    title: "Plan the Process",
    description: "We outline clear pricing context, honest recommendations, and a transparent roadmap so you know exactly what to expect at every stage.",
  },
  {
    number: 4,
    title: "Support Beyond Completion",
    description: "From paperwork to handover and ongoing property management, we stay with you through the full lifecycle of your investment.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+971 4 2356878",
  company: "Apex Iconic Real Estate LLC",
  address: "204, Abdulbari Al Hashemi Building, 8 Al Khor Street, Deira, Dubai, UAE",
  mapLink: "https://maps.app.goo.gl/amGGTmcC9W3GjGXCA",
};

export const SERVICE_OPTIONS: { value: ServiceType; label: string }[] = [
  { value: "buy", label: "Buy" },
  { value: "sell", label: "Sell" },
  { value: "rent", label: "Rent" },
  { value: "property-management", label: "Property Management" },
];

export const PROPERTY_TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
  { value: "villa", label: "Villa" },
  { value: "townhouse", label: "Townhouse" },
  { value: "apartment", label: "Apartment" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
];
