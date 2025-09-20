export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border rounded-xl bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
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
                className="mr-2 text-primary"
              >
                <path d="M2 12h10M12 2v20M22 12h-10" />
              </svg>
              Frontend Development
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-1/2">HTML/CSS</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">JavaScript</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">React</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">Next.js</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">Tailwind CSS</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-border rounded-xl bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
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
                className="mr-2 text-primary"
              >
                <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                <line x1="8" y1="16" x2="8.01" y2="16" />
                <line x1="8" y1="20" x2="8.01" y2="20" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
                <line x1="12" y1="22" x2="12.01" y2="22" />
                <line x1="16" y1="16" x2="16.01" y2="16" />
                <line x1="16" y1="20" x2="16.01" y2="20" />
              </svg>
              Backend Development
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-1/2">Node.js</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">Express</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">MongoDB</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">SQL</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">API Development</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-border rounded-xl bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
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
                className="mr-2 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
              </svg>
              Tools & Others
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-1/2">Git/GitHub</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">Responsive Design</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">UI/UX Basics</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">TypeScript</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-1/2">Testing</span>
                <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
