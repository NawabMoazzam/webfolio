"use client"
import { MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { LoaderCircleIcon } from "lucide-react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
    toast.error(`Caught an Error object: ${error.message}`);
  } else if (typeof error === "string") {
    toast.error(`Caught a string error: ${error}`);
  } else {
    toast.error(`Caught an unknown error: ${error}`);
  }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center animate-in fade-in duration-700">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to
              you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-primary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <Link
                  href={"https://wa.me/+923026889246"}
                  target="_blank"
                  className="text-muted-foreground"
                >
                  +92 3026889246
                </Link>
              </div>
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-primary"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <Link
                  href={"mailto:cnstatus310@gmail.com"}
                  target="_blank"
                  className="text-muted-foreground"
                >
                  cnstatus310@gmail.com
                </Link>
              </div>
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-primary"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <Link
                  href={"https://maps.app.goo.gl/KZjkP3siGoQcCE2k8"}
                  target="_blank"
                  className="text-muted-foreground"
                >
                  Khudian Khas, Kasur, Pakistan
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/NawabMoazzam"
                  target="_blank"
                  className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  aria-label="GitHub"
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
                    className="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/moazzam_nawab_1"
                  target="_blank"
                  className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  aria-label="LinkedIn"
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
                    className="lucide lucide-instagram-icon lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/+923026889246"
                  target="_blank"
                  className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  aria-label="Twitter"
                >
                  <MessageCircleMoreIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  >
                  Name
                </label>
                <input
                  {...register("name", {required: true})}
                  required
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                {...register("email", {required: true})}
                required
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  >
                  Subject
                </label>
                <input
                  {...register("subject", {required: true})}
                  required
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                {...register("message", {required: true})}
                required
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              {!isSubmitting && <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all hover:translate-y-[-2px]"
              >
                Send Message
              </button>}
              {isSubmitting && <button
                disabled
                className="cursor-progress w-full bg-muted text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all"
              >
                <LoaderCircleIcon className="inline mr-2 animate-spin" size={18} />
                Sending ...
              </button>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
