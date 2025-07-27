"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Filter,
  ChevronDown,
  ExternalLink,
  Clock,
  User,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import FloatingElement from "@/components/floating-element";

// Project data
const projects = [
  {
    id: 1,
    title: "URBAN DECAY",
    slug: "urban-decay",
    category: "LOOKBOOK",
    year: "2025",
    client: "Streetwear Co.",
    tags: ["Photography", "Art Direction", "Styling"],
    description:
      "A brutalist approach to streetwear aesthetics, challenging conventional design norms through raw, unfiltered visual language. This lookbook explores the intersection of urban architecture and fashion.",
    fullDescription:
      "Urban Decay is a visual exploration of the relationship between deteriorating city structures and contemporary streetwear. The collection draws inspiration from abandoned buildings, graffiti, and the raw textures found in urban environments. Each piece in the collection tells a story of resilience and beauty found in unexpected places.\n\nThe lookbook was shot in various locations throughout New York City, capturing the essence of urban decay while showcasing the clothing in its natural environment. The photography style emphasizes contrast, gritty textures, and dramatic lighting to complement the collection's aesthetic.",
    images: [
      "/urbandecay/urban1.png",
      "/urbandecay/urban1.png",
      "/urbandecay/urban1.png",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "CONCRETE JUNGLE",
    slug: "concrete-jungle",
    category: "CAMPAIGN",
    year: "2023",
    client: "Urban Collective",
    tags: ["Branding", "Digital", "Print"],
    description:
      "A campaign that celebrates the raw energy of city life through a series of striking visuals and bold typography. Concrete Jungle merges architectural elements with streetwear aesthetics.",
    fullDescription:
      "Concrete Jungle is a comprehensive campaign that celebrates the raw energy and diversity of urban environments. The project encompassed branding, digital assets, and print materials for Urban Collective's flagship store launch.\n\nThe campaign draws inspiration from brutalist architecture, industrial materials, and the chaotic beauty of city life. We created a visual language that feels both contemporary and timeless, using a combination of bold typography, raw textures, and striking photography.\n\nThe campaign successfully positioned Urban Collective as a forward-thinking brand with strong connections to urban culture and architectural design.",
    images: [
      "/concretejungle/concrete1.png",
      "/concretejungle/concrete1.png",
      "/concretejungle/concrete1.png",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "DIGITAL DYSTOPIA",
    slug: "digital-dystopia",
    category: "EDITORIAL",
    year: "2025",
    client: "Future Magazine",
    tags: ["Digital Design", "3D", "Animation"],
    description:
      "An editorial exploring the relationship between technology and fashion in a dystopian future. Digital Dystopia blends 3D elements with photography to create a surreal visual experience.",
    fullDescription:
      "Digital Dystopia is an experimental editorial that explores the increasingly blurred lines between physical and digital fashion. Created for Future Magazine's special issue on technology, this project combines traditional photography with 3D modeling, digital manipulation, and animation.\n\nThe concept revolves around a near-future scenario where digital fashion has become as important as physical clothing. We created a series of images that depict this dystopian yet fascinating world, where garments exist simultaneously in physical and digital realms.\n\nThe editorial received critical acclaim for its innovative approach to fashion photography and its thought-provoking commentary on the future of the fashion industry.",
    images: [
      "/digitaldystopia/digital1.png?height=800&width=1200",
      "/digitaldystopia/digital1.png?height=800&width=1200",
      "/digitaldystopia/digital1.png?height=800&width=1200",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "STREET REBELLION",
    slug: "street-rebellion",
    category: "LOOKBOOK",
    year: "2023",
    client: "Rebel Apparel",
    tags: ["Photography", "Styling", "Production"],
    description:
      "A lookbook that captures the spirit of youth rebellion through raw, unfiltered photography. Street Rebellion showcases clothing as a form of personal and political expression.",
    fullDescription:
      "Street Rebellion is a lookbook that celebrates the power of clothing as a medium for personal and political expression. Created for Rebel Apparel's SS23 collection, this project captures the authentic spirit of youth culture and activism.\n\nThe lookbook features real people rather than professional models, each with their own unique story and perspective. Shot on location during actual street protests and community events, the imagery has an authentic, documentary-like quality that sets it apart from traditional fashion photography.\n\nThe styling emphasizes individuality and self-expression, showing how Rebel Apparel's pieces can be incorporated into personal style to make a statement. The result is a lookbook that feels more like a cultural artifact than a commercial product.",
    images: [
      "/streetrebellion/street1.png",
      "/streetrebellion/street1.png",
      "/streetrebellion/street1.png",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "NEON NIGHTS",
    slug: "neon-nights",
    category: "CAMPAIGN",
    year: "2025",
    client: "Glow Streetwear",
    tags: ["Photography", "Lighting Design", "Art Direction"],
    description:
      "A campaign that brings streetwear into the night, using neon lighting and urban nightscapes to create a vibrant, energetic visual narrative.",
    fullDescription:
      "Neon Nights is a campaign that explores the relationship between streetwear and nightlife culture. Created for Glow Streetwear's illuminated clothing line, this project uses innovative lighting techniques to showcase garments that literally light up the darkness.\n\nThe campaign was shot exclusively at night in various urban locations, using a combination of neon signs, LED lighting, and the garments' own illumination to create striking visual compositions. The photography emphasizes the contrast between darkness and light, creating a sense of drama and energy.\n\nIn addition to traditional campaign imagery, we created a series of short videos that capture the dynamic nature of the illuminated clothing in motion. These videos were used across social media and in-store displays, creating a cohesive multi-channel campaign.",
    images: [
      "/neonnights/neon1.png",
      "/neonnights/neon1.png",
      "/neonnights/neon1.png",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "TECH NOMADS",
    slug: "tech-nomads",
    category: "EDITORIAL",
    year: "2023",
    client: "Wired Magazine",
    tags: ["Concept Development", "Photography", "Styling"],
    description:
      "An editorial exploring the intersection of technology and nomadic lifestyles. Tech Nomads presents a vision of future fashion that adapts to changing environments and needs.",
    fullDescription:
      "Tech Nomads is a conceptual editorial created for Wired Magazine's annual fashion issue. The project explores how advances in wearable technology, sustainable materials, and adaptive design are shaping the future of clothing for increasingly mobile lifestyles.\n\nThe editorial presents a near-future scenario where clothing serves multiple functions beyond aesthetics and protection. Each featured piece incorporates elements of technology, transformability, and sustainability, creating a wardrobe suited for the modern digital nomad.\n\nThe photography style combines elements of traditional fashion photography with tech product photography, creating a unique visual language that emphasizes both the form and function of the featured garments. The locations range from urban environments to natural landscapes, highlighting the adaptability of the clothing.",
    images: [
      "/technomads/tech1.png",
      "/technomads/tech1.png",
      "/technomads/tech1.png",
    ],
    featured: false,
  },
];

// Filter categories
const categories = ["ALL", "LOOKBOOK", "CAMPAIGN", "EDITORIAL"];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Filter projects based on selected category
  useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Handle project selection
  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle back button click
  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <main className="pt-24 pb-16">
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
                PROJECTS
              </span>
              THE DRIP
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500"></span>
            </h1>
            <div className="w-full h-[1px] bg-white/20 my-8"></div>
            <p className="text-xl md:text-2xl max-w-2xl text-white/70">
              Check out our fire projects — straight heat that's giving main
              character energy. No cap.
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

      <div className="container mx-auto px-4">
        {selectedProject ? (
          // Detailed Project View
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Back button */}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleBackClick}
                className="flex items-center text-white/70 hover:text-white mb-8 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                BACK TO PROJECTS
              </motion.button>

              {/* Project header */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="md:col-span-8"
                >
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-white/70 mb-6">
                    <span className="flex items-center">
                      <Tag className="mr-2 h-4 w-4" />
                      {selectedProject.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {selectedProject.year}
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      {selectedProject.client}
                    </span>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-xl">{selectedProject.description}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="md:col-span-4 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-3">TAGS</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-sm hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="self-start mt-6 bg-white text-black hover:bg-gray-200 rounded-none py-6 px-8 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      VIEW LIVE PROJECT
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </motion.div>
              </div>

              {/* Main project image */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-16 relative"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={selectedProject.images[0] || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Project content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="md:col-span-7"
                >
                  <h3 className="text-2xl font-bold mb-6">PROJECT OVERVIEW</h3>
                  <div className="space-y-4 text-white/80">
                    {selectedProject.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="md:col-span-5"
                >
                  <h3 className="text-2xl font-bold mb-6">PROJECT DETAILS</h3>
                  <div className="space-y-4">
                    <div className="border-b border-white/20 pb-4">
                      <h4 className="text-sm text-white/50 mb-1">CLIENT</h4>
                      <p className="text-lg">{selectedProject.client}</p>
                    </div>
                    <div className="border-b border-white/20 pb-4">
                      <h4 className="text-sm text-white/50 mb-1">CATEGORY</h4>
                      <p className="text-lg">{selectedProject.category}</p>
                    </div>
                    <div className="border-b border-white/20 pb-4">
                      <h4 className="text-sm text-white/50 mb-1">YEAR</h4>
                      <p className="text-lg">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-white/50 mb-1">SERVICES</h4>
                      <p className="text-lg">
                        {selectedProject.tags.join(", ")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional project images */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                {selectedProject.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] relative overflow-hidden group"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${selectedProject.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-white text-black hover:bg-gray-200 rounded-none">
                        VIEW LARGER
                      </Button>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Related projects */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="text-2xl font-bold mb-8">MORE PROJECTS</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.id !== selectedProject.id)
                    .slice(0, 3)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="group cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden mb-4">
                          <Image
                            src={project.images[0] || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="text-xl font-bold mb-1 group-hover:text-red-500 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-white/70">{project.category}</p>
                      </div>
                    ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : (
          // Projects Grid View
          <div ref={containerRef}>
            {/* Filter */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12 sticky top-24 z-20 bg-black/90 backdrop-blur-sm py-4"
              style={{ opacity }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="relative mb-4 md:mb-0">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center space-x-2 text-white/70 hover:text-white"
                  >
                    <Filter className="h-4 w-4" />
                    <span>FILTER: {activeCategory}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isFilterOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isFilterOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-black border border-white/20 w-48 z-30">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${
                            activeCategory === category
                              ? "text-red-500"
                              : "text-white"
                          }`}
                          onClick={() => {
                            setActiveCategory(category);
                            setIsFilterOpen(false);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-white/50">
                  Showing {filteredProjects.length} projects
                </p>
              </div>
            </motion.div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
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
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70">{project.category}</p>
                    </div>
                    <span className="text-white/50">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
