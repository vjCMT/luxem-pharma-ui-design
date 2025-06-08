
// src/pages/index.tsx (If this is your main page component for the "/" route)
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import ProductsSection from "@/components/ProductsSection";
import ApproachSection from "@/components/ApproachSection";
import TherapiesSection from "@/components/TherapiesSection";
import Footer from "@/components/Footer";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

// Container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const IndexPage = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-slate-50"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Fixed header components */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TopBar />
        <Navbar />
      </motion.div>

      {/* Main content with staggered animations */}
      <motion.main
        className="flex-grow w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <InnovationSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <ProductsSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <ApproachSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <TherapiesSection />
        </motion.div>
      </motion.main>

      {/* Footer with slide-up animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>

      {/* Floating background elements for visual interest */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pharma-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pharma-green/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 left-1/3 w-32 h-32 bg-pharma-lightBlue/5 rounded-full blur-2xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default IndexPage;
