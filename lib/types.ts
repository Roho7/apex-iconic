export type ServiceType = "buy" | "sell" | "rent" | "property-management";

export type PropertyType = "villa" | "townhouse" | "apartment" | "land" | "commercial";

export interface Service {
  id: ServiceType;
  title: string;
  description: string;
  icon: string;
  linkToRegister: boolean;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  company: string;
  address: string;
  mapLink: string;
}

export interface ClientRegistrationForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  serviceRequired: ServiceType;
  propertyType: PropertyType;
  budgetRange?: string;
  preferredAreas: string;
  message?: string;
}
