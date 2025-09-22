"use client";

import Navbar from '@/components/navbar'
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import { cn } from '@/lib/utils';
import { FloatingAnimation } from '@/components/ui/floating-animation'
import { motion } from 'framer-motion'
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen overflow-x-hidden">
        <HeroSection />
        {/* <section className="relative py-20 md:py-32 overflow-hidden">
          <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
          <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] z-0"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Hi, I'm <span className="text-primary">Your Name</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
                  Web Developer & Designer
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="max-w-2xl text-muted-foreground mb-8">
                  I build exceptional and accessible digital experiences for the web.
                  Focused on creating clean, user-friendly, and responsive websites.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button className="relative overflow-hidden group bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-2px] inline-block">
                    View My Work
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
                <button className="relative overflow-hidden group bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium">
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-2px] inline-block">
                    Contact Me
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-gray-300 dark:to-gray-100"></span>
                </button>
              </motion.div>
              
              <FloatingAnimation yOffset={8} duration={3}>
                <div className="flex flex-col items-center">
                  <span className="text-muted-foreground mb-2">Scroll Down</span>
                  <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                  </div>
                </div>
              </FloatingAnimation>
            </div>
        </section> */}
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
