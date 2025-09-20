export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
          Hi, I'm <span className="text-primary">Nawab Moazzam</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          Web Developer & Designer
        </h2>
        <p className="max-w-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
          I create modern, responsive websites with clean and efficient code. As
          a fresher in the industry, I'm passionate about building beautiful
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
        <a
          href="#about"
          aria-label="Scroll down"
          className="animate-in fade-in duration-1000 delay-1000"
        >
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
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
