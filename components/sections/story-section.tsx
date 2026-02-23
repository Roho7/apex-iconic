export function StorySection() {
  return (
    <section id="story" className="bg-muted/50 py-20">
      <div className="container max-w-4xl">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Built on long-standing Dubai experience and lasting relationships, Apex Iconic brings deep local
            market knowledge to every client engagement. We've studied the Dubai property landscape for years,
            giving us a grounded understanding of neighborhood trends, pricing dynamics, and what truly matters
            to buyers, tenants, and owners.
          </p>

          <p className="font-medium text-foreground">Our approach is simple:</p>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>Listen first, advise clearly</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>Prioritize long-term outcomes over short-term wins</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                Support clients across the full property lifecycle—buying, renting, and management
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
