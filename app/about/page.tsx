"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import FloatingElement from "@/components/floating-element"
import ScrollSection from "@/components/scroll-section"

// Team members data
const teamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    bio: "Vibing since '95. Bringing the heat with designs that live rent-free in your head. No cap.",
    image: "/placeholder.svg?height=600&width=600",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jordan Taylor",
    role: "Lead Designer",
    bio: "Design girlboss energy. Creating fits so fire they're straight up illegal. Period.",
    image: "/placeholder.svg?height=600&width=600",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Morgan Lee",
    role: "Art Director",
    bio: "Chronically online art kid. Serving main character energy through visual storytelling.",
    image: "/placeholder.svg?height=600&width=600",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Riley Johnson",
    role: "Photographer",
    bio: "Capturing vibes since 2010. If the shot doesn't slap, we don't post it. Simple as that.",
    image: "/placeholder.svg?height=600&width=600",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

// Timeline data
const timeline = [
  {
    year: "2024",
    title: "MONOLITH CREW IS BORN",
    description: "Started with a vision to create designs that break the internet. No cap, just vibes.",
  },
  {
    year: "2024",
    title: "FIRST MAJOR CLIENT",
    description:
      "Landed our first major client and delivered a project that had everyone shook. The streets were talking.",
  },
  {
    year: "2025",
    title: "STUDIO EXPANSION",
    description: "Leveled up with a bigger studio space in downtown. More room for the creative chaos to unfold.",
  },
  {
    year: "2025",
    title: "AWARD WINNING WORK",
    description: "Our Urban Decay project won multiple design awards. The industry was not ready for this heat.",
  },
  {
    year: "2026",
    title: "GLOBAL RECOGNITION",
    description: "Started working with international clients. The Monolith Crew aesthetic went worldwide.",
  },
]

// Values data
const values = [
  {
    title: "AUTHENTICITY",
    description: "We keep it 100, always. No fake vibes or borrowed aesthetics.",
    icon: "✓",
  },
  {
    title: "DISRUPTION",
    description: "We don't follow trends, we create them. Breaking the internet is our love language.",
    icon: "✗",
  },
  {
    title: "COMMUNITY",
    description: "We're building more than a brand - we're creating a whole movement.",
    icon: "♦",
  },
  {
    title: "INNOVATION",
    description: "If it's been done before, we're not interested. Period.",
    icon: "△",
  },
]

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

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
              <span className="absolute -top-8 -left-4 text-xs border border-white/50 px-2 py-1 rotate-12">ABOUT</span>
              VIBE CHECK
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500"></span>
            </h1>
            <div className="w-full h-[1px] bg-white/20 my-8"></div>
            <p className="text-xl md:text-2xl max-w-2xl text-white/70">
              Get to know the squad behind the sauce. We're not just a design studio — we're a whole movement.
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

      {/* Our Story Section */}
      <ScrollSection className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 md:col-start-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image src="/placeholder.svg?height=1000&width=800" alt="Our Studio" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <FloatingElement
                  xFactor={10}
                  yFactor={10}
                  rotateFactor={5}
                  className="absolute top-6 right-6 w-16 h-16 border-2 border-white/50 flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-red-500"></div>
                </FloatingElement>
              </motion.div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
                  OUR STORY
                  <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500"></span>
                </h2>

                <div className="space-y-6 text-lg">
                  <p>
                    Born in 2024, Monolith Crew started as a collective of creative misfits with one mission: to create
                    visual identities that hit different. No cap.
                  </p>
                  <p>
                    We were tired of seeing the same recycled aesthetics everywhere. The internet was becoming an echo
                    chamber of borrowed ideas and safe design choices. So we decided to choose violence instead.
                  </p>
                  <p>
                    Our approach combines digital experimentation with brutalist principles to create work that demands
                    attention and lives rent-free in your head. We're not interested in blending in — we're here to
                    break the internet.
                  </p>
                  <p>
                    Today, we're a growing studio working with clients who share our vision for disruptive design and
                    authentic expression. The aesthetic is giving main character energy, and we're just getting started.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <Link href="/projects">
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-none py-6 px-8 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        OUR PROJECTS
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                      <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Values Section */}
      <ScrollSection className="py-16 md:py-24 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              OUR VALUES
              <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500"></span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-white/70">
              These aren't just words on a wall — they're the blueprint for everything we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 relative group hover:border-red-500 transition-colors"
              >
                <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-red-500 opacity-20 group-hover:opacity-100 transition-opacity">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <FloatingElement
          xFactor={40}
          yFactor={20}
          className="absolute top-[10%] right-[5%] w-32 h-32 border border-white/10 rotate-45 z-0"
        />
        <FloatingElement
          xFactor={-30}
          yFactor={15}
          className="absolute bottom-[10%] left-[5%] w-48 h-48 border border-white/10 -rotate-12 z-0"
        />
      </ScrollSection>

      {/* Team Section */}
      <ScrollSection className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              THE SQUAD
              <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500"></span>
            </h2>
            <p className="text-xl max-w-2xl text-white/70">
              Meet the creative minds behind the sauce. Each bringing their own unique flavor to the table.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.instagram}
                        className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name}'s Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-red-500 mb-2">{member.role}</p>
                <p className="text-white/70">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div style={{ y: y1 }} className="absolute -right-20 top-0 w-40 h-[120%] bg-white/2 -rotate-12" />
        <motion.div style={{ y: y2 }} className="absolute -left-20 top-0 w-20 h-[120%] bg-white/3 rotate-12" />
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">READY TO CREATE SOMETHING FIRE?</h2>
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
      </ScrollSection>
    </main>
  )
}
