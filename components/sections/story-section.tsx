import Image from "next/image";

export function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-4/5 lg:aspect-3/4 rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image 
              src="/story.jpeg" 
              alt="Dubai Architecture" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Our Story
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground/80">
                Built on long-standing Dubai experience and lasting relationships, Apex Iconic brings deep local
                market knowledge to every client engagement. We've studied the Dubai property landscape comprehensively,
                giving us a grounded understanding of neighborhood trends, pricing dynamics, and what truly matters
                to buyers, tenants, and owners.
              </p>

              <div className="pt-4">
                <h3 className="font-semibold text-xl text-foreground mb-6">Our approach is simple:</h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="pt-1 text-foreground/80">Listen first, advise clearly</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="pt-1 text-foreground/80">Prioritize long-term outcomes over short-term wins</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="pt-1 text-foreground/80">
                      Support clients across the full property lifecycle—buying, renting, and management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
