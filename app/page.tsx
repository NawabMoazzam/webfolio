"use client";

import Navbar from '@/components/navbar'
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
