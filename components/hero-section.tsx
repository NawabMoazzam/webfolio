"use client";

import { Vortex } from "./ui/vortex";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import FloatingAnimation from "./ui/floating-animation";

export default function HeroSection() {
  return (
    // <Vortex>

    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center"
    >
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
        <BackgroundRippleEffect />
        <div className="container mx-auto my-auto px-4 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Hi, I'm <span className="text-violet-600">Nawab Moazzam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Web Developer & Designer
          </h2>
          <p className="max-w-2xl text-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            I create modern, responsive websites with clean and efficient code.
            As a fresher in the industry, I'm passionate about building
            beautiful digital experiences that solve real problems.
          </p>
          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all hover:translate-y-[-2px]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-border hover:bg-secondary px-6 py-3 rounded-lg font-medium transition-all hover:translate-y-[-2px]"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <FloatingAnimation yOffset={8} duration={3}>
            <div className="flex flex-col items-center">
              <span className="text-muted-foreground mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </FloatingAnimation>
        </div>
        {/* </Vortex> */}
      </div>
    </section>
  );
}
