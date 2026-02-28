"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled || !isHome
          ? "bg-background/80 backdrop-blur-md border-border py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between w-full">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-40">
             {/* Use a white logo version if available for transparent header, or filter/brightness */}
             {/* Assuming logo.png works on dark background or we need to adjust */}
             <Image
              src="/logo.png"
              alt="Apex Iconic"
              fill
              className={cn(
                "object-contain object-[10%_10%] md:object-left transition-all scale-180 ",
                (isScrolled || !isHome) ? "brightness-0 invert-0 dark:invert" : "brightness-0 invert" 
              )}
            />
          </div>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link 
            href="/#services" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              (isScrolled || !isHome) ? "text-foreground" : "text-white/90 hover:text-white"
            )}
          >
            Services
          </Link>
          <Link 
            href="/#story" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary max-md:hidden",
              (isScrolled || !isHome) ? "text-foreground" : "text-white/90 hover:text-white"
            )}
          >
            Our Story
          </Link>
          <Button 
            variant={isScrolled || !isHome ? "default" : "secondary"} 
            className={cn(
              "font-semibold transition-all",
              !isScrolled && isHome && "bg-white text-black hover:bg-white/90"
            )}
            asChild
          >
            <Link href="/register">Register With Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
