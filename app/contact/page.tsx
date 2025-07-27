"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import FloatingElement from "@/components/floating-element";
import ScrollSection from "@/components/scroll-section";

// FAQ data
const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full range of creative services including branding, art direction, photography, web design, and campaign development. Basically, if it's visual and needs to slap, we've got you covered.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Each project is unique, so we create custom quotes based on your specific needs. We work with clients of all sizes, from startups to established brands. Slide into our DMs with your project details, and we'll hit you back with a quote.",
  },
  {
    question: "What is your typical process?",
    answer:
      "Our process typically includes discovery, concept development, design exploration, refinement, and implementation. We keep it collaborative throughout, making sure you're vibing with the direction at every stage.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A branding project might take 4-6 weeks, while a full campaign could take 2-3 months. We'll give you a realistic timeline during our initial consultation.",
  },
  {
    question: "Do you work with clients outside of New York?",
    answer:
      "We work with clients globally. While we're based in NYC, we've collaborated with brands from Tokyo to Berlin. Distance is just a number in the digital age.",
  },
];

export default function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
        });
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <main className="pt-24 pb-16" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 relative inline-block">
              <span className="absolute -top-8 -left-4 text-xs border border-white/50 px-2 py-1 rotate-12">
                CONTACT
              </span>
              LINK UP
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500"></span>
            </h1>
            <div className="w-full h-[1px] bg-white/20 my-8"></div>
            <p className="text-xl md:text-2xl max-w-2xl text-white/70">
              Ready to create something that breaks the internet? Slide into our
              DMs and let's make it happen.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <FloatingElement
            xFactor={30}
            rotateFactor={10}
            className="absolute top-[20%] right-[5%] w-40 h-40 border border-white/10 rotate-45 z-0"
          />
          <FloatingElement
            xFactor={-20}
            yFactor={15}
            className="absolute bottom-[10%] left-[5%] w-24 h-24 border border-white/10 -rotate-12 z-0"
          />
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative"
            >
              <FloatingElement
                yFactor={20}
                xFactor={-15}
                className="absolute -top-12 -left-12 text-[120px] font-bold text-white/5 pointer-events-none select-none"
              >
                LINK
              </FloatingElement>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
                SLIDE INTO OUR DMS
                <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500"></span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label
                      htmlFor="name"
                      className="absolute top-0 left-0 text-sm font-medium transform -translate-y-1/2 bg-black px-2 ml-4 transition-all group-focus-within:text-red-500"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-transparent border border-white/30 focus:border-red-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className="absolute top-0 left-0 text-sm font-medium transform -translate-y-1/2 bg-black px-2 ml-4 transition-all group-focus-within:text-red-500"
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-transparent border border-white/30 focus:border-red-500 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="subject"
                    className="absolute top-0 left-0 text-sm font-medium transform -translate-y-1/2 bg-black px-2 ml-4 transition-all group-focus-within:text-red-500"
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-transparent border border-white/30 focus:border-red-500 outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative group">
                  <label
                    htmlFor="budget"
                    className="absolute top-0 left-0 text-sm font-medium transform -translate-y-1/2 bg-black px-2 ml-4 transition-all group-focus-within:text-red-500"
                  >
                    BUDGET RANGE
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-black border border-white/30 focus:border-red-500 outline-none transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    <option value="$1K-$5K">$1K-$5K</option>
                    <option value="$5K-$10K">$5K-$10K</option>
                    <option value="$10K-$25K">$10K-$25K</option>
                    <option value="$25K+">$25K+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-white/50" />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="absolute top-0 left-0 text-sm font-medium transform -translate-y-1/2 bg-black px-2 ml-4 transition-all group-focus-within:text-red-500"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-4 bg-transparent border border-white/30 focus:border-red-500 outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 rounded-none py-6 px-12 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formStatus === "submitting"
                        ? "SENDING..."
                        : formStatus === "success"
                        ? "SENT!"
                        : "SEND IT"}
                      {formStatus === "idle" && (
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      )}
                    </span>
                    <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </Button>

                  <div className="text-sm text-gray-400 flex-1">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="underline hover:text-white">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </form>

              <FloatingElement
                yFactor={-20}
                xFactor={15}
                rotateFactor={180}
                className="absolute -bottom-12 -right-12 text-[120px] font-bold text-white/5 pointer-events-none select-none"
              >
                UP
              </FloatingElement>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 lg:sticky top-24 self-start"
            >
              <div className="border border-white/20 p-6 relative">
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 -translate-y-1/2 translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-mono">EST.2025</span>
                </div>

                <h3
                  className="text-2xl font-bold mb-6 glitch-text"
                  data-text="GET IN TOUCH"
                >
                  GET IN TOUCH
                </h3>

                <p className="text-xl mb-8 border-l-4 border-red-500 pl-4">
                  We're always down to chat about new projects, collabs, or just
                  to vibe. Hit us up through any of these channels.
                </p>

                <div className="space-y-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:hello@monolithcrew.com"
                      className="text-lg hover:text-red-500 transition-colors flex items-center group"
                    >
                      hello@monolithcrew.com
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Phone
                    </span>
                    <a
                      href="tel:+12125551234"
                      className="text-lg hover:text-red-500 transition-colors flex items-center group"
                    >
                      +1 (212) 555-1234
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Social
                    </span>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="#"
                        className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Location
                    </span>
                    <p className="text-lg flex items-start">
                      <MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                      <span>
                        123 Creative St, SoHo
                        <br />
                        New York, NY 10013
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <h4 className="text-sm uppercase tracking-wider mb-4">
                    Working Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-xs text-gray-400">Mon-Fri</span>
                      <p>10:00 - 19:00</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Sat-Sun</span>
                      <p>By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ScrollSection className="py-16 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              FAQ
              <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500"></span>
            </h2>
            <p className="text-lg text-white/70">
              Got questions? We've got answers. If you don't see what you're
              looking for, just hit us up.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="border border-white/20"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  {activeAccordion === index ? (
                    <ChevronUp className="h-5 w-5 text-red-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-white/70">{faq.answer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection className="py-16 md:py-24 bg-red-500 text-black relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              LET'S CREATE SOMETHING ICONIC
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-black/80">
              Ready to break the internet together? The collab szn is now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@monolithcrew.com"
                className="inline-flex items-center bg-black text-white hover:bg-gray-900 rounded-none py-6 px-8 text-lg font-bold"
              >
                <Mail className="mr-2 h-5 w-5" />
                EMAIL US
              </a>
              <a
                href="tel:+12125551234"
                className="inline-flex items-center bg-black text-white hover:bg-gray-900 rounded-none py-6 px-8 text-lg font-bold"
              >
                <Phone className="mr-2 h-5 w-5" />
                CALL US
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <FloatingElement
          xFactor={40}
          yFactor={20}
          ctor={20}
          className="absolute top-[20%] right-[5%] w-32 h-32 border-2 border-black/20 rotate-45 z-0"
        />
        <FloatingElement
          xFactor={-30}
          yFactor={15}
          className="absolute bottom-[20%] left-[5%] w-48 h-48 border-2 border-black/20 -rotate-12 z-0"
        />
      </ScrollSection>
    </main>
  );
}
