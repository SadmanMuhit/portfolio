"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Badge, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyButton from "./ShinyButton";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import {
  SiWordpress,
  SiReact,
  SiNextdotjs,
  SiGoogle,
  SiMeta,
  SiNetflix,
  SiSpotify,
} from "react-icons/si";

const Hero = () => {
  const skills = [
    {
      name: "WordPress",
      color: "#21759B",
      Icon: SiWordpress,
    },
    {
      name: "React",
      color: "#61DAFB",
      Icon: SiReact,
    },
    {
      name: "Next.js",
      color: "#FFFFFF",
      Icon: SiNextdotjs,
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden mesh-gradient">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl pt-40 pb-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-primary/30 bg-white/10 dark:bg-black/30 text-primary text-[12px] uppercase tracking-[0.2em] font-bold mb-6 shadow-none"
          >
            Expert Website Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl lg:text-7xl font-black tracking-tight leading-20 text-foreground mb-8"
          >
            BUILDING <span className="font-story italic">SCALABLE WEB </span>
            SOLUTIONS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-foreground/70 max-w-lg mb-10 leading-relaxed"
          >
            Professional web developer specializing in high-performance
            WordPress sites and modern web applications with React and Next.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                <span className="relative z-10 transition-all duration-500">
                  View My Work
                </span>
                <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </Button>

              <div className="flex gap-4">
                {[
                  {
                    name: "Github",
                    path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.03 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z",
                  },
                  {
                    name: "Twitter",
                    path: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z",
                  },
                  {
                    name: "Linkedin",
                    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z",
                  },
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-full border border-border bg-background/80 text-foreground hover:text-primary transition-all hover:scale-110"
                    aria-label={icon.name}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Advanced Tech Stack UI */}
            <div className="mt-4 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-linear-to-r from-primary to-transparent" />
                <span className="text-[15px] uppercase tracking-[0.4em] text-foreground font-black">
                  My Skills
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500"
                  >
                    {/* Animated Border Gradient */}
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(45deg, transparent, ${skill.color}, transparent)`,
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative bg-white/90 dark:bg-black/40 backdrop-blur-2xl rounded-2xl p-3 md:p-3 flex items-center gap-4 border border-slate-200/40 dark:border-white/10 group-hover:border-primary/30 transition-colors">
                      <div
                        className="p-2 md:p-3 rounded-xl bg-slate-950/5 dark:bg-white/10 border border-slate-200/40 dark:border-white/10 group-hover:scale-110 transition-transform duration-500"
                        style={{ boxShadow: `0 0 20px ${skill.color}10` }}
                      >
                        <skill.Icon
                          className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-foreground font-bold text-xs md:text-sm tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visuals (Photo Frame) */}
        <div className="relative w-full max-w-[320px] sm:max-w-lg aspect-4/5 flex items-center justify-center mb-20 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full glass rounded-[2rem] overflow-hidden p-3"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-border/40 dark:border-white/10">
              <Image
                src="/muhit.jpg"
                alt="User Portrait"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Name Tag */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 glass rounded-xl backdrop-blur-md">
                <div className="text-white font-bold text-sm sm:text-lg">
                  AVAILABLE FOR WORK
                </div>
                <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest mt-1">
                  Based in Bangladesh
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>

      {/* Client Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-0 w-full border-t border-border/20 bg-background/80 dark:bg-black/20 backdrop-blur-md py-4 md:py-6 overflow-hidden"
      >
        <div className="flex items-center gap-8 whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
          >
            {[
              { name: "Google", Icon: SiGoogle },
              { name: "Meta", Icon: SiMeta },
              { name: "Netflix", Icon: SiNetflix },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              // Duplicate for infinite loop
              { name: "Google", Icon: SiGoogle },
              { name: "Meta", Icon: SiMeta },
              { name: "Netflix", Icon: SiNetflix },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
              { name: "Spotify", Icon: SiSpotify },
            ].map((client, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 group">
                <client.Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors duration-500" />
                <span className="text-foreground group-hover:text-primary font-bold tracking-widest text-xs md:text-[15px] uppercase transition-colors duration-500">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator (Moved up slightly) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
