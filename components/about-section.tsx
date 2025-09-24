import React from "react";
import Image from "next/image";
import { FloatingAnimation } from "./ui/floating-animation";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FloatingAnimation yOffset={15} duration={3}>
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="aspect-square relative rounded-xl overflow-hidden border border-border shadow-xl">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div> */}
                <div className="flex items-center justify-center h-full bg-muted/50">
                  {/* <span className="text-muted-foreground">Your Photo</span> */}
                  <Image
                    src="/profile.jpg"
                    alt="Profile Photo"
                    width={3480}
                    height={3480}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </FloatingAnimation>
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-200">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a passionate web developer with a strong foundation in modern
              web technologies. Recently graduated with a degree in Computer
              Science, I&apos;m eager to apply my skills and knowledge to create
              impactful digital solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development started with a curiosity about how
              websites work, which led me to explore various technologies and
              frameworks. I enjoy the process of turning ideas into functional
              and visually appealing websites.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge
                className="px-3 py-1 rounded-full text-sm"
                variant="secondary"
              >
                <BadgeCheckIcon />
                Problem Solver
              </Badge>
              <Badge
                className="px-3 py-1 bg-secondary rounded-full text-sm"
                variant="secondary"
              >
                <BadgeCheckIcon />
                Detail-Oriented
              </Badge>
              <Badge
                className="px-3 py-1 bg-secondary rounded-full text-sm"
                variant="secondary"
              >
                <BadgeCheckIcon />
                Fast Learner
              </Badge>
              <Badge
                className="px-3 py-1 bg-secondary rounded-full text-sm"
                variant="secondary"
              >
                <BadgeCheckIcon />
                Team Player
              </Badge>
            </div>
            <Link
              href="/resume.pdf"
              download={true}
            >
              <Button className="mt-8 hover:translate-y-[-2px]">Download CV</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
