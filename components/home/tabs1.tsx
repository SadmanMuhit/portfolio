"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CircleUserRound,
  FolderKanban,
  PanelsTopLeft,
  BookOpen,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const tabItems = [
  {
    value: "all",
    label: "All",
    icon: PanelsTopLeft,
  },
  {
    value: "e-commerce",
    label: "E-commerce",
    icon: ShoppingBag,
  },
  {
    value: "business",
    label: "Business",
    icon: FolderKanban,
  },
  {
    value: "education",
    label: "Education",
    icon: BookOpen,
  },
  {
    value: "others",
    label: "Others",
    icon: CircleUserRound,
  },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Store 1",
    category: "e-commerce",
    thumbnail: "/images/ecommerce-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Store 2",
    category: "e-commerce",
    thumbnail: "/images/ecommerce-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce Store 3",
    category: "e-commerce",
    thumbnail: "/images/ecommerce-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "E-commerce Store 4",
    category: "e-commerce",
    thumbnail: "/images/ecommerce-3.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Business Dashboard 1",
    category: "business",
    thumbnail: "/images/business-1.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Business Dashboard 2",
    category: "business",
    thumbnail: "/images/business-2.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Business Dashboard 3",
    category: "business",
    thumbnail: "/images/business-3.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Learning Platform 1",
    category: "education",
    thumbnail: "/images/education-1.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Learning Platform 2",
    category: "education",
    thumbnail: "/images/education-2.jpg",
    link: "#",
  },
  {
    id: 10,
    title: "Portfolio 1",
    category: "others",
    thumbnail: "/images/others-1.jpg",
    link: "#",
  },
  {
    id: 11,
    title: "Portfolio 2",
    category: "others",
    thumbnail: "/images/others-2.jpg",
    link: "#",
  },
];

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState("all");

  const getProjectsByCategory = (category: string) => {
    if (category === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === category);
  };

  const displayedProjects = getProjectsByCategory(activeTab);

  return (
    <div id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl justify-center items-center flex mb-10"
      >
        Designs That Speak for Themselves
      </motion.h2>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mx-auto w-full md:w-300"
      >
        <TabsList className="border-b w-full gap-1 rounded-b-none bg-muted/70 justify-center">
          {tabItems.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabItems.map((tab) => {
          return (
            <TabsContent key={tab.value} value={tab.value} className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {displayedProjects.map((project, index) => (
                    <motion.a
                      key={project.id}
                      href={project.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium">
                          View
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
