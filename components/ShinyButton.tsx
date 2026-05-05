"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ShinyButton = ({ children, onClick, className = "" }: ShinyButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group px-8 py-3 rounded-full overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] ${className}`}
    >
      {/* Shining effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
      
      <span className="relative z-10 flex items-center gap-2 font-medium text-white group-hover:text-primary transition-colors">
        {children}
      </span>
      
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15)_0%,transparent_70%)]" />
    </motion.button>
  );
};

export default ShinyButton;
