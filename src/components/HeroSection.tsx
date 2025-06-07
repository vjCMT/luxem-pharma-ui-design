import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import video from "../components/video.mp4"; // Ensure path is correct

const HeroSection = () => {
  const textShadowStyle = { textShadow: "0 3px 15px rgba(0, 0, 0, 0.5)" };

  // Framer motion variants are generally fine for animations,
  // they shouldn't cause the main content to shrink unless they are
  // incorrectly applying width or large negative margins to the section itself.
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };
  const titleWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } },
  };
  const buttonContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
  };
  const buttonItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section
      className="relative h-screen flex flex-col justify-center overflow-hidden bg-pharma-darkBlue
                 pt-16" // NAVBAR HEIGHT IS h-16 (4rem). If TopBar is also present and sticky, this needs to be sum of both.
      // Assuming TopBar is NOT sticky OR Navbar sits on top of it.
      // If TopBar IS sticky and above Navbar, and TopBar height is, say, 2.5rem (h-10),
      // then pt should be pt-[calc(4rem+2.5rem)] = pt-[6.5rem]
    >
      {/* Video and Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline // Important for iOS
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-pharma-darkBlue/75 to-pharma-blue/70 z-[1]"></div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-[2] w-full text-center text-white
                   px-4 sm:px-6
                   md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto" // Adjusted max-widths for better scaling
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          variants={titleContainerVariants}
          style={textShadowStyle} // textShadow applied directly to h1
        >
          {"Pioneering Health, ".split("").map((char, i) => (
            <motion.span
              key={char + "-" + i}
              variants={titleWordVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br className="sm:hidden" />{" "}
          {/* Optional: line break on very small screens */}
          <motion.span
            variants={titleWordVariants}
            // For the gradient text animation, ensure your tailwind.config.js has keyframes and animation for 'text-gradient-flow'
            // Example in tailwind.config.js:
            // keyframes: { 'text-gradient-flow': { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } } },
            // animation: { 'text-gradient-flow': 'text-gradient-flow 3s ease infinite' }
            className="inline-block bg-gradient-to-r from-pharma-lightBlue via-pharma-green to-accent-magenta bg-clip-text text-transparent animate-text-gradient-flow"
            style={{ backgroundSize: "200% 200%" }} // Ensure backgroundSize is adequate for animation
          >
            Inspiring Life.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-slate-200/90 leading-relaxed max-w-2xl mx-auto" // Constrained width for readability
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
          >
            <Button
              size="lg" // Tailwind default 'lg' size might be quite large, check components/ui/button variants
              className="w-full sm:w-auto bg-gradient-to-r from-pharma-green to-emerald-600 hover:from-pharma-green/90 hover:to-emerald-600/90 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-pharma-green/40 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-pharma-green/50"
            >
              Discover Innovations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            variants={buttonItemVariants}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-pharma-lightBlue text-pharma-lightBlue hover:bg-pharma-lightBlue/10 hover:text-pharma-lightBlue px-6 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-pharma-lightBlue/30 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-pharma-lightBlue/50"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
