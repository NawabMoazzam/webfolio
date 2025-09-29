"use client";

import { Badge } from "./ui/badge";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const Projects = [
    {
      image: "/password-manager.png",
      title: "Secure Password Manager",
      desc: "A modern, secure password manager built with Next.js and Clerk authentication. This application helps users safely store and manage their passwords and credit card information with robust encryption.",
      tags: ["Next.js", "Typescript", "Tailwind CSS", "Clerk"],
      web_url: "https://nawabvault.vercel.app",
      source_url: "https://github.com/NawabMoazzam/password-manager",
    },
    {
      image: "/",
      title: "E-commerce Website",
      desc: "A responsive e-commerce platform built with React and Node.js. Features include product listings, cart functionality, and user authentication.",
      tags: ["Next.js", "Typescript", "Tailwind CSS", "Clerk"],
      web_url: "#",
      source_url: "#",
    },
    {
      image: "/",
      title: "Task Management App",
      desc: "A productivity app that helps users organize tasks and track progress. Includes features like task categories, due dates, and progress tracking.",
      tags: ["Next.js", "Typescript", "Tailwind CSS", "Clerk"],
      web_url: "#",
      source_url: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700 hover:-translate-1 h-full"
            >
              <div className="aspect-video relative bg-muted flex items-center justify-center">
                <div className="absolute inset-0"></div>
                <Image
                  src={project.image}
                  fill
                  alt="Project Screenshot"
                  className="w-auto h-auto p-2 rounded-t-[22px] grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="px-2 py-1 bg-secondary text-xs rounded-full"
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={project.web_url}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform"
                  >
                    View Demo
                  </Link>
                  <Link
                    href={project.source_url}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
