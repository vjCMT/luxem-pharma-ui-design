
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

// Enhanced page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

// Enhanced container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

// Enhanced section variants with more dynamic animations
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateX: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Header animation variants
const headerVariants = {
  hidden: { 
    y: -100, 
    opacity: 0,
    scale: 0.95,
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

// Footer animation variants
const footerVariants = {
  hidden: { 
    y: 100, 
    opacity: 0,
    scale: 0.98,
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: 2, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

const IndexPage = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-slate-50 relative overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Fixed header components with enhanced animations */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-50"
      >
        <TopBar />
        <Navbar />
      </motion.div>

      {/* Main content with enhanced staggered animations */}
      <motion.main
        className="flex-grow w-full relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section with special entrance */}
        <motion.div 
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.1,
              y: 30,
            },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          <HeroSection />
        </motion.div>

        {/* Innovation Section with slide and scale animation */}
        <motion.div 
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
              scale: 0.9,
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
                damping: 20,
              },
            },
          }}
        >
          <InnovationSection />
        </motion.div>

        {/* Products Section with rotation and scale */}
        <motion.div 
          variants={{
            hidden: {
              opacity: 0,
              y: 80,
              rotateY: -15,
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateY: 0,
              scale: 1,
              transition: {
                duration: 1.1,
                ease: "easeOut",
                type: "spring",
                stiffness: 90,
                damping: 18,
              },
            },
          }}
        >
          <ProductsSection />
        </motion.div>

        {/* Approach Section with slide from right */}
        <motion.div 
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
              scale: 0.92,
              rotateZ: 2,
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              rotateZ: 0,
              transition: {
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 85,
                damping: 22,
              },
            },
          }}
        >
          <ApproachSection />
        </motion.div>

        {/* Therapies Section with bounce effect */}
        <motion.div 
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
              scale: 0.9,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 15,
                bounce: 0.3,
              },
            },
          }}
        >
          <TherapiesSection />
        </motion.div>
      </motion.main>

      {/* Footer with enhanced slide-up animation */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <Footer />
      </motion.div>

      {/* Enhanced floating background elements with more dynamic animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pharma-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pharma-green/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute top-3/4 left-1/3 w-32 h-32 bg-pharma-lightBlue/5 rounded-full blur-2xl"
          animate={{
            y: [-20, 40, -20],
            x: [-15, 25, -15],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-pharma-blue/5 to-pharma-green/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -180, -360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 15,
          }}
        />
      </div>

      {/* Animated particles for extra visual interest */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default IndexPage;
