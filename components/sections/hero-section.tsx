"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <Image 
          src="/hero1.jpeg" 
          alt="Dubai Skyline" 
          fill 
          className="object-cover object-center brightness-[0.85]" 
          priority 
        />
      </div>
      
      {/* Gradient Overlay for Text Readability and Aesthetic */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/80 -z-10" />
      
      {/* Subtle Blue Tint Overlay to match reference vibe */}
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay -z-10" />

      <div className="container max-w-5xl z-10 relative flex flex-col items-center animate-in fade-in duration-1000 slide-in-from-bottom-10">
        
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-widest uppercase">
            Premium Real Estate Advisory
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-5xl font-light tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] drop-shadow-sm">
          Where property <br className="hidden sm:block" />
          investment feels{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-white to-blue-200">
            effortless
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-gray-200 leading-relaxed font-light drop-shadow-md">
          Dubai real estate doesn't need to feel complicated. Experience clear advice, 
          professional execution, and seamless support from start to finish.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full sm:w-auto">
          <Button 
            size="lg" 
            className="group relative overflow-hidden rounded-full bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-semibold shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5" 
            asChild
          >
            <Link href="/register" className="flex items-center gap-2">
              Register With Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-white/30 bg-white/5 backdrop-blur-sm px-8 py-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white hover:border-white/50 shadow-lg transition-all hover:-translate-y-0.5"
            asChild
          >
            <Link href="/register?service=buy">Speak With an Advisor</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/70">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
