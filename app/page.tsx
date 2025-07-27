"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import ParallaxText from "@/components/parallax-text";
import FloatingElement from "@/components/floating-element";

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for various effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <main>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Main background image with effects */}
          <motion.div
            style={{ y, opacity, scale }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/hero.png"
              alt="Hero Background"
              fill
              className="object-cover object-center brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black"></div>
          </motion.div>

          {/* Decorative elements */}
          <FloatingElement
            xFactor={50}
            rotateFactor={15}
            className="absolute top-[20%] right-[10%] w-32 h-32 border border-white/20"
          >
            <div className="w-full h-full rotate-45"></div>
          </FloatingElement>

          <FloatingElement
            xFactor={-30}
            yFactor={20}
            rotateFactor={-8}
            className="absolute bottom-[30%] left-[5%] w-48 h-48 border border-white/10"
          >
            <div className="w-full h-full -rotate-12"></div>
          </FloatingElement>

          <FloatingElement
            yFactor={40}
            xFactor={-20}
            className="absolute top-[40%] left-[20%] w-64 h-1 bg-white/20 -rotate-45"
          />
        </div>

        {/* Hero content with asymmetrical layout */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col h-full justify-center py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side - Main heading with creative typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-7 relative"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-12 -left-4 text-xs border border-white/50 px-2 py-1 rotate-12">
                  EST.2025
                </div>

                {/* Main heading with creative treatment */}
                <h1 className="text-6xl md:text-[8rem] font-bold leading-none tracking-tighter mb-6">
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      MONO<span className="text-red-500">L</span>ITH
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="flex items-center"
                    >
                      CR
                      <span className="inline-block w-12 h-1 bg-white mx-2"></span>
                      EW
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      SZ
                      <span className="relative inline-block">
                        N
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500"></span>
                      </span>
                    </motion.div>
                  </div>
                </h1>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="h-[2px] bg-white/30 mb-8"
                ></motion.div>
              </div>
            </motion.div>

            {/* Right side - Description and CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-5 md:col-start-8"
            >
              <div className="border-l-4 border-red-500 pl-6 mb-8">
                <p className="text-xl md:text-2xl mb-6">
                  Fits so fire they're living rent-free in your head. No cap.
                </p>
                <p className="text-white/70">
                  Serving main character energy through raw, unfiltered visual
                  language. We're not just designing - we're creating a whole
                  vibe.
                </p>
              </div>

              {/* CTA buttons with creative design */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/projects">
                  <Button className="group relative overflow-hidden bg-transparent border-2 border-white hover:border-red-500 text-white rounded-none text-lg px-8 py-6 w-full sm:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      PEEP THE DRIP
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                    <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden border-2 border-white/50 text-white hover:border-white rounded-none text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      LINK UP
                      <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <ParallaxText baseVelocity={-5}>
            MONOLITH • CREW • STREETWEAR • 2025 •
          </ParallaxText>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter relative inline-block">
              <span className="absolute -top-8 -left-4 text-xs border border-white/50 px-2 py-1 rotate-12">
                02
              </span>
              FEATURED WORK
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500"></span>
            </h2>
            <div className="w-full h-[1px] bg-white/20 my-8"></div>
          </motion.div>

          {/* Featured projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: 1,
                title: "URBAN DECAY",
                category: "LOOKBOOK",
                year: "2025",
                image: "/urbandecay/urban1.png",
              },
              {
                id: 2,
                title: "CONCRETE JUNGLE",
                category: "CAMPAIGN",
                year: "2023",
                image: "/concretejungle/concrete1.png",
              },
              {
                id: 3,
                title: "DIGITAL DYSTOPIA",
                category: "EDITORIAL",
                year: "2025",
                image: "/digitaldystopia/digital1.png",
              },
            ].map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/projects`} className="block">
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <Button className="bg-white text-black hover:bg-gray-200 rounded-none">
                        <span className="flex items-center">
                          VIEW PROJECT
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70">{project.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-none py-6 px-12 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VIEW ALL PROJECTS
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-500 text-black relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              READY TO CREATE SOMETHING FIRE?
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-black/80">
              Let's link up and break the internet together. No cap.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white hover:bg-gray-900 rounded-none py-6 px-12 text-lg font-bold"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <FloatingElement
          xFactor={40}
          yFactor={20}
          className="absolute top-[20%] right-[5%] w-32 h-32 border-2 border-black/20 rotate-45 z-0"
        />
        <FloatingElement
          xFactor={-30}
          yFactor={15}
          className="absolute bottom-[20%] left-[5%] w-48 h-48 border-2 border-black/20 -rotate-12 z-0"
        />
      </section>
    </main>
  );
}
