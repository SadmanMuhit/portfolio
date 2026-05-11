import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FiClipboard, FiSend, FiGlobe } from "react-icons/fi";
import { UserRound } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
export function Navbar() {
  const links = [
    {
      title: "Services",
      icon: (
        <FiGlobe className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },

    {
      title: "About",
      icon: (
        <FiClipboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Home",
      icon: (
        <Image
          src="/muhitlogo.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/",
    },
    {
      title: "Portfolio",
      icon: (
        <UserRound className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#portfolio",
    },

    {
      title: "Contact",
      icon: (
        <FiSend className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "ThemeToggle",
      icon: <ThemeToggle />,
      href: "",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        desktopClassName="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]
      backdrop-blur-md bg-white/30 dark:bg-black/30
      border border-white/20 shadow-2xl
    "
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
