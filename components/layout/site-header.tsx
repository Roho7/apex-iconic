import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Apex Iconic"
            width={100}
            height={100}
          />
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/#services">Services</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#story">Our Story</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/register">Register With Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
