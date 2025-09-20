export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center animate-in fade-in duration-700">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nawab Moazzam. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-y-[-2px] inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
