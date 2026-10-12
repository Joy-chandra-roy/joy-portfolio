"use client";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto flex items-center px-5 pb-24 pt-10 md:py-32">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-white">
            <p className="mb-4 text-lg font-medium text-green-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Joy Chandra Roy
            </h1>

            <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
              Professional Web Developer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
              I build modern, responsive and user-friendly websites that help
              businesses grow and stand out online.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600">
                View My Projects
              </button>

              <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image + Wave */}

          {/* Right Image + Play Button */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/images/joy.png"
              alt="Joy Chandra Roy - Web Developer"
              width={700}
              height={800}
              priority
              className="h-auto w-full object-contain"
            />

            {/* Play Video Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Play introduction video"
              className="absolute top-30 left-22   z-20 flex h-16 w-16 md:left-60 md:top-70 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600 cursor-pointer"
            >
              <Play size={20} 
              fill="currentColor"
               className="h-5 w-5 sm:h-6 sm:w-6 md:h-[30px] md:w-[30px]" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full leading-[0]">
        <svg
          className="block h-[140px]  w-full md:h-[250px]"
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 55 C240 100 420 135 650 80 C900 20 1120 120 1440 45 L1440 140 L0 140 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* YouTube Video Popup */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="absolute left-[30%] top-[48%] z-20 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600 cursor-pointer -translate-x-1/2 -translate-y-1/2 sm:left-[30%] sm:top-[48%] md:left-60 md:top-70"
            >
              <X size={24} />
            </button>

            {/* YouTube Video */}
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
                title="Joy Chandra Roy Introduction Video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
