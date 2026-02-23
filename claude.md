# Apex Iconic Frontend Build Spec (Claude Code)

## Goal

Build a polished, production-ready real-estate website for Apex Iconic (Dubai) using Next.js App Router and shadcn components.

Create exactly **2 pages**:
- **Hero page** (landing page)
- **Client registration page**

Use the structure references in `public/structure/`:
- `hero-structure.png`
- `client-registration-page.png`
- `form-headers.png`
- `CTAs.png`
- `meta.png`

## Business Context (from provided structure)

- Company type: Dubai property brokerage and advisory
- Services: buy/sell, rent, property management (and references to villas, townhouses, apartments, land, commercial)
- Core promise: clear professional guidance; smooth end-to-end execution
- Primary conversion intent: qualify serious leads and route them to registration
- Primary CTA: **Register With Us**
- Secondary CTA: **Speak With an Advisor**

Meta description baseline:
`Dubai property brokerage for villas, townhouses, apartments, land and commercial property incl. shops. Buy, sell, rent & manage with expert advisors.`

## Required Routes

- `/` -> Hero page
- `/register` -> Client registration page

## UX and Behavior Requirements

1. Hero page should include service cards for:
   - Buy / Sell
   - Rent
   - Property Management
   - Holiday Home
2. All service cards should navigate to `/register` **except Holiday Home**.
3. CTA buttons:
   - Primary: `Register With Us`
   - Secondary: `Speak With an Advisor`
4. When user reaches `/register` from a service card or CTA, prefill/contextualize the `Service Required` field:
   - Buy / Sell, Rent, Property Management
5. `Service Required` dropdown can be read-only/locked when preselected via query param and user came from CTA/card.
6. Budget field behavior:
   - Enabled for Buy/Sell and Rent
   - Disabled/greyed when Property Management is selected

## Page 1: Hero Page Requirements (`/`)

### Sections

1. **Top hero section**
   - Headline/subtext emphasizing effortless property investment and clear execution
   - Primary + secondary CTA
2. **Our Services**
   - Four service cards (Buy/Sell, Rent, Property Management, Holiday Home)
   - Clear hover/focus states
3. **Our Story**
   - Dubai expertise, long-standing relationships, local neighborhood knowledge
4. **How We Work (4 steps)**
   - Understand needs
   - Curated market shortlist
   - Plan the process
   - Support beyond completion
5. **Secondary CTA strip**
   - “Speak With An Advisor”
6. **Footer/contact block**
   - Company/address/phone/email style block matching provided structure

### Visual Direction

- Premium, editorial-modern real-estate aesthetic
- Strong hierarchy, clean spacing, restrained color palette
- Professional and trustworthy, not playful
- Subtle motion only (hover/entry transitions), no heavy gimmicks

## Page 2: Client Registration Requirements (`/register`)

### Header

- Title: `Register to Work With a Trusted Dubai Property Brokerage`
- Supporting line: indicates professional + confidential handling

### Form Fields

Use shadcn form patterns with proper labels and validation:

1. Full Name (required)
2. Email (required, valid email)
3. Phone Number (required)
4. Service Required (required, Select)
   - Buy / Sell
   - Rent
   - Property Management
5. Property Type (required, Select)
   - Villa
   - Townhouse
   - Apartment
   - Land
   - Commercial
6. Budget Range (text input)
   - Placeholder example: `AED 100,000 - AED 300,000`
   - Disabled when service is Property Management
7. Preferred Areas (required for Buy/Sell + Rent, optional for Property Management)
8. Message / Requirements (textarea)

### Submit CTA

- Button text: `Register & Speak With an Advisor`

### Validation + Feedback

- Inline errors for required fields
- Disable submit while invalid/submitting
- Show success state message on submit
- Keep architecture ready for later API integration

## shadcn Component Requirements

Use shadcn components (add them if missing):
- `Button`
- `Card`
- `Input`
- `Label`
- `Textarea`
- `Select`
- `Form` (with `react-hook-form` + schema validation)
- `Separator`
- `Badge` (optional for service highlights)

If not present, generate via shadcn CLI before implementation.

## Suggested File Structure

```text
app/
  page.tsx
  register/
    page.tsx
components/
  layout/
    site-header.tsx
    site-footer.tsx
  sections/
    hero-section.tsx
    services-section.tsx
    story-section.tsx
    process-section.tsx
    cta-strip.tsx
  forms/
    client-registration-form.tsx
lib/
  constants.ts
  types.ts
```

## Implementation Plan (execute in order)

1. **Scaffold UI primitives**
   - Ensure required shadcn components are installed and importable.
2. **Set shared content/constants**
   - Centralize service options, property types, process steps, contact details in `lib/constants.ts`.
3. **Build Hero page sections**
   - Implement section components and compose in `app/page.tsx`.
4. **Wire CTA navigation**
   - Use query params (example: `/register?service=rent&locked=1`).
5. **Build registration form**
   - Implement schema + controlled form with dynamic rules.
6. **Implement conditional form logic**
   - Lock/prefill service when query param exists.
   - Disable budget for Property Management.
   - Adjust required state for Preferred Areas based on service.
7. **Accessibility pass**
   - Labels, keyboard navigation, focus states, aria-describedby for errors.
8. **Responsive pass**
   - Mobile-first layout; test common breakpoints.
9. **Polish and consistency**
   - Spacing, typography scale, button styles, section rhythm.
10. **Final verification**
    - Test both pages and all CTA/form paths.

## Query Param Contract

Use this route contract when navigating to registration:
- `/register?service=buy-sell&locked=1`
- `/register?service=rent&locked=1`
- `/register?service=property-management&locked=1`

Rules:
- `service` maps to Select option
- `locked=1` means user cannot change `Service Required`
- No lock param => user can edit service freely

## Quality Bar

- Clean, componentized code (no repeated long JSX blocks)
- Type-safe props and constants
- Production-friendly structure
- Consistent use of shadcn primitives
- No placeholder lorem ipsum content
- Content and flow aligned with real-estate lead generation intent

## Done Criteria

- `/` contains all required sections and CTAs
- `/register` includes full form and dynamic behaviors
- Service cards route correctly (Holiday Home excluded from register redirect)
- Validations and success handling work
- Styling is cohesive and professional across both pages
- Build passes and lint is clean
