
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import video from "../components/video.mp4";

const HeroSection = () => {
  const textShadowStyle = { textShadow: "0 3px 15px rgba(0, 0, 0, 0.5)" };

  // Enhanced animation variants
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.02, 
        delayChildren: 0.3,
        duration: 0.8 
      },
    },
  };

  const titleWordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.6 
      },
    },
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        delay: 1.2, 
        duration: 0.8,
        ease: "easeOut" 
      } 
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 1.8 
      } 
    },
  };

  const buttonItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 150,
        damping: 10 
      },
    },
  };

  // Floating animation for video overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-pharma-darkBlue pt-16">
      {/* Enhanced Video and Overlay with parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Animated particles overlay */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-pharma-darkBlue/75 to-pharma-blue/70 z-[1]"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Enhanced Content Wrapper */}
      <motion.div
        className="relative z-[2] w-full text-center text-white px-4 sm:px-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          variants={titleContainerVariants}
          style={textShadowStyle}
        >
          {"Pioneering Health, ".split("").map((char, i) => (
            <motion.span
              key={char + "-" + i}
              variants={titleWordVariants}
              className="inline-block"
              whileHover={{ 
                scale: 1.1, 
                color: "#3b82f6",
                transition: { duration: 0.2 } 
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br className="sm:hidden" />
          <motion.span
            variants={titleWordVariants}
            className="inline-block bg-gradient-to-r from-pharma-lightBlue via-pharma-green to-accent-magenta bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            Inspiring Life.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-slate-200/90 leading-relaxed max-w-2xl mx-auto"
          variants={paragraphVariants}
          style={textShadowStyle}
        >
          Madrid Pharmaceuticals is dedicated to advancing healthcare through
          cutting-edge research, innovative therapies, and a commitment to
          patient well-being.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          variants={buttonContainerVariants}
        >
          <motion.div
            variants={buttonItemVariants}
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-pharma-green to-emerald-600 hover:from-pharma-green/90 hover:to-emerald-600/90 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-pharma-green/40 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-pharma-green/50"
            >
              <motion.span
                className="flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Discover Innovations
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            variants={buttonItemVariants}
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-pharma-lightBlue text-pharma-lightBlue hover:bg-pharma-lightBlue/10 hover:text-pharma-lightBlue px-6 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-pharma-lightBlue/30 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-pharma-lightBlue/50"
            >
              <motion.span
                className="flex items-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
