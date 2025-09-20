import Image from "next/image";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
              Hi, I'm <span className="text-primary">Nawab Moazzam</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Web Developer & Designer
            </h2>
            <p className="max-w-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              I create modern, responsive websites with clean and efficient code. 
              As a fresher in the industry, I'm passionate about building beautiful 
              digital experiences that solve real problems.
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
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down" className="animate-in fade-in duration-1000 delay-1000">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-muted-foreground"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <div className="aspect-square relative rounded-xl overflow-hidden border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <div className="flex items-center justify-center h-full bg-muted/50">
                    <span className="text-muted-foreground">Your Photo</span>
                  </div>
                </div>
              </div>
              <div className="animate-in fade-in slide-in-from-right duration-700 delay-200">
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground mb-6">
                  I'm a passionate web developer with a strong foundation in modern web technologies.
                  Recently graduated with a degree in Computer Science, I'm eager to apply my skills
                  and knowledge to create impactful digital solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  My journey in web development started with a curiosity about how websites work,
                  which led me to explore various technologies and frameworks. I enjoy the process
                  of turning ideas into functional and visually appealing websites.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Problem Solver</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Detail-Oriented</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Fast Learner</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Team Player</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-border rounded-xl bg-card hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M2 12h10M12 2v20M22 12h-10"/></svg>
                  Frontend Development
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1/2">HTML/CSS</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">JavaScript</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">React</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">Next.js</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">Tailwind CSS</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-border rounded-xl bg-card hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>
                  Backend Development
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1/2">Node.js</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">Express</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">MongoDB</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">SQL</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">API Development</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-border rounded-xl bg-card hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>
                  Tools & Others
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1/2">Git/GitHub</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">Responsive Design</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">UI/UX Basics</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">TypeScript</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/2">Testing</span>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700">
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
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">Node.js</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">MongoDB</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">View Demo</a>
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">Source Code</a>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700 delay-200">
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
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">Next.js</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">TypeScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">Prisma</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">View Demo</a>
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">Source Code</a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all group animate-in fade-in slide-in-from-bottom duration-700 delay-400">
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
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">JavaScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">API Integration</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">CSS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-full">HTML</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">View Demo</a>
                    <a href="#" className="text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform">Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently looking for new opportunities. Whether you have a question
                  or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span className="text-muted-foreground">+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span className="text-muted-foreground">yourname@example.com</span>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span className="text-muted-foreground">Your City, Country</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="animate-in fade-in slide-in-from-right duration-700">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all hover:translate-y-[-2px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center animate-in fade-in duration-700">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block">About</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
