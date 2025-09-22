"use client"

import { Badge } from "./ui/badge"
import { BackgroundGradient } from "./ui/background-gradient"

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <BackgroundGradient className="rounded-[22px] overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700 hover:-translate-1">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
                  <p className="text-muted-foreground mb-4">
                    A responsive e-commerce platform built with React and Node.js.
                    Features include product listings, cart functionality, and user authentication.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">React</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">Node.js</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">MongoDB</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">Tailwind</Badge>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">View Demo</a>
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">Source Code</a>
                  </div>
                </div>
              </BackgroundGradient>
              {/* <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700">
              </div> */}
              
              {/* Project 2 */}
              <BackgroundGradient className="rounded-[22px] overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700 hover:-translate-1">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                  <p className="text-muted-foreground mb-4">
                    A productivity app that helps users organize tasks and track progress.
                    Includes features like task categories, due dates, and progress tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">Next.js</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">TypeScript</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">Prisma</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">Tailwind</Badge>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">View Demo</a>
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">Source Code</a>
                  </div>
                </div>
              </BackgroundGradient>
              
              {/* Project 3 */}
              <BackgroundGradient className="rounded-[22px] overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700 hover:-translate-1">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    A weather application that provides real-time weather data and forecasts.
                    Users can search for locations and view detailed weather information.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">JavaScript</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">API Integration</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">CSS</Badge>
                    <Badge className="px-2 py-1 bg-secondary text-xs rounded-full" variant="secondary">HTML</Badge>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">View Demo</a>
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">Source Code</a>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </div>
        </section>
    )
}