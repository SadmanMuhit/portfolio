"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyButton from "./ShinyButton";
import OrbitingCirclesDemo from "@/components/shadcn-space/orbiting-circles/orbiting-circles-01";

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

  const clients = [
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
    { name: "Spotify", Icon: SiSpotify },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden mesh-gradient">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 pt-32 lg:pt-24 pb-28">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full border border-primary/30 bg-white/10 backdrop-blur-md text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-6"
          >
            Expert Website Developer
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-5xl font-black leading-[0.9] tracking-tight text-primary"
          >
            BUILDING{" "}
            <span className="italic font-story text-primary">SCALABLE WEB</span>{" "}
            SOLUTIONS.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-primary/70 max-w-xl leading-relaxed"
          >
            Professional web developer specializing in high-performance
            WordPress websites and modern web applications with React and
            Next.js.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <Button className="relative w-full sm:w-auto text-sm font-medium rounded-full h-12 px-6 pr-14 group overflow-hidden">
              <span className="relative z-10">View My Work</span>

              <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </div>
            </Button>

            <ShinyButton className="w-full sm:w-auto px-6! py-3! text-sm">
              Hire Me
            </ShinyButton>
          </motion.div>

          {/* ================= SKILLS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 w-full"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-8 h-px bg-linear-to-r from-primary to-transparent" />

              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-primary">
                My Skills
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${skill.color}, transparent)`,
                    }}
                  />

                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/10">
                      <skill.Icon
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        style={{ color: skill.color }}
                      />
                    </div>

                    <span className="text-primary text-sm font-semibold">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-65 sm:max-w-85 md:max-w-105 aspect-4/5"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />

            {/* Image Card */}
            <div className="relative w-full h-full p-3 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <OrbitingCirclesDemo size={300} className="opacity-70" />
              </div>

              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/muhit.jpg"
                  alt="Muhit"
                  fill
                  priority
                  className="object-cover hover:scale-110 transition-transform duration-700 relative z-10"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 z-20">
                  <h3 className="text-white text-sm sm:text-base font-bold">
                    AVAILABLE FOR WORK
                  </h3>

                  <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-1">
                    Based in Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= CLIENT MARQUEE ================= */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/30 backdrop-blur-xl py-4 overflow-hidden z-20">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 sm:gap-16 whitespace-nowrap w-max"
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-3 px-2">
              <client.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[12px] uppercase tracking-[0.3em] text-primary/40">
          Scroll
        </span>

        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
