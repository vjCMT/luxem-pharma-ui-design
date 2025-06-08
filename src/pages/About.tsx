
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Target,
  Award,
  Briefcase,
  Globe,
  Heart,
  Zap,
  Aperture,
  Shield,
  Lightbulb,
  Stethoscope,
  Building,
  Clock,
  CheckCircle,
  Microscope,
  Beaker,
  Activity,
  Tablet,
  Dna,
  Star,
} from "lucide-react";

const About = () => {
  // Animation variants for smooth page transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    {
      icon: Briefcase,
      number: "10+",
      label: "Years Experience",
      description: "Decade of pharmaceutical excellence",
      color: "pharma-blue",
      delay: "0.2s",
    },
    {
      icon: Heart,
      number: "50+",
      label: "Quality Products",
      description: "Life-changing medications",
      color: "pharma-green",
      delay: "0.3s",
    },
    {
      icon: Globe,
      number: "80+",
      label: "Cities Served",
      description: "Nationwide healthcare reach",
      color: "accent-teal",
      delay: "0.4s",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Trusted Clients",
      description: "Healthcare partnerships",
      color: "accent-orange",
      delay: "0.5s",
    },
  ];

  const coreValues = [
    {
      icon: Aperture,
      title: "Unwavering Integrity",
      description:
        "We uphold the highest ethical standards, fostering transparency and trust in all our endeavors. Our commitment to honesty and ethical practices forms the foundation of every decision we make.",
      features: ["Transparent Operations", "Ethical Practices", "Trust Building", "Regulatory Compliance"],
      color: "pharma-blue",
      delay: "0.2s",
    },
    {
      icon: Zap,
      title: "Pioneering Innovation",
      description:
        "Continuously advancing pharmaceutical science through dedicated research and development for a healthier tomorrow. We invest heavily in cutting-edge technology and breakthrough research.",
      features: ["Advanced R&D", "Scientific Excellence", "Technology Integration", "Future-Focused"],
      color: "pharma-green",
      delay: "0.3s",
    },
    {
      icon: Award,
      title: "Commitment to Excellence",
      description:
        "Delivering superior quality products and services that consistently exceed expectations and set industry benchmarks. Every product undergoes rigorous quality testing.",
      features: ["Quality Assurance", "Premium Standards", "Customer Satisfaction", "Continuous Improvement"],
      color: "accent-purple",
      delay: "0.4s",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Foundation & Vision",
      description: "Madrid Pharmaceuticals was established with a vision to make quality healthcare accessible to all. Started with a small team of dedicated professionals.",
      icon: Building,
      achievements: ["Company Founded", "Initial Team Formation", "Vision Established"],
    },
    {
      year: "2016",
      title: "First Product Launch",
      description: "Successfully launched our first pharmaceutical product after rigorous testing and quality assurance. Gained initial market recognition.",
      icon: Tablet,
      achievements: ["Product Launch", "Market Entry", "Quality Certification"],
    },
    {
      year: "2018",
      title: "R&D Expansion",
      description: "Established our dedicated Research & Development center, focusing on innovative drug formulations and advanced therapeutic solutions.",
      icon: Microscope,
      achievements: ["R&D Center", "Research Team", "Innovation Focus"],
    },
    {
      year: "2020",
      title: "Market Leadership",
      description: "Achieved significant market presence with 25+ products across multiple therapeutic areas. Expanded to 50+ cities nationwide.",
      icon: Star,
      achievements: ["Market Leadership", "Product Portfolio", "Geographic Expansion"],
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Integrated advanced manufacturing technologies and AI-driven quality control systems. Enhanced production capacity significantly.",
      icon: Dna,
      achievements: ["Tech Integration", "AI Implementation", "Capacity Enhancement"],
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Leading pharmaceutical innovation with 50+ products, serving 80+ cities, and continuing our mission of accessible healthcare for all.",
      icon: Lightbulb,
      achievements: ["50+ Products", "80+ Cities", "Continued Innovation"],
    },
  ];

  const expertiseAreas = [
    {
      icon: Activity,
      title: "Cardiovascular Care",
      description: "Advanced medications for heart health and circulatory system disorders.",
      products: ["Cardiac Medications", "Blood Pressure Control", "Cholesterol Management"],
    },
    {
      icon: Beaker,
      title: "Metabolic Disorders",
      description: "Comprehensive solutions for diabetes, thyroid, and metabolic conditions.",
      products: ["Diabetes Care", "Thyroid Treatments", "Metabolic Support"],
    },
    {
      icon: Shield,
      title: "Immune System Support",
      description: "Strengthening immunity and fighting infections with proven formulations.",
      products: ["Immunity Boosters", "Anti-infectives", "Immune Modulators"],
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Essential medications for common health conditions and daily wellness.",
      products: ["Pain Management", "Cold & Flu", "General Wellness"],
    },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-slate-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <TopBar />
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-pharma-darkBlue via-slate-900 to-pharma-blue text-white py-32 md:py-40 overflow-hidden"
        variants={itemVariants}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-pharma-lightBlue rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pharma-green rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full filter blur-3xl opacity-70"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-pharma-lightBlue to-pharma-green bg-clip-text text-transparent">
              Madrid Pharmaceuticals
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-slate-200 mb-8"
            variants={itemVariants}
          >
            Pioneering healthcare solutions with over a decade of unwavering commitment to excellence, 
            innovation, and patient well-being. We are dedicated to transforming lives through 
            cutting-edge pharmaceutical research and accessible healthcare solutions.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            variants={itemVariants}
          >
            {["Excellence", "Innovation", "Trust", "Quality", "Care"].map((tag, index) => (
              <span
                key={tag}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Company Journey & Story Section */}
      <motion.section className="py-20 md:py-28 bg-white" variants={itemVariants}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Enhanced Text Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="inline-flex items-center bg-pharma-blue/10 text-pharma-blue px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Our Journey of Growth & Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Crafting a Legacy of{" "}
                <span className="text-pharma-blue">Health & Innovation</span>
              </h2>

              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p className="text-xl font-medium text-pharma-darkBlue">
                  For over a decade, Madrid Pharmaceuticals has been a beacon of innovation 
                  in the healthcare sector, transforming lives through science and compassion.
                </p>
                <p>
                  Our core mission extends beyond developing and manufacturing high-quality 
                  pharmaceutical products. We are committed to making effective healthcare 
                  accessible to all, breaking down barriers that prevent people from receiving 
                  the treatments they need.
                </p>
                <p>
                  Our story began with a profound vision: to democratize healthcare and ensure 
                  that geography, economic status, or social circumstances never stand between 
                  a patient and their treatment. Today, this vision translates into a robust 
                  portfolio of over 50 specialized products.
                </p>
                <p>
                  Driven by a dedicated team of over 35 professionals including researchers, 
                  pharmacists, quality control experts, and healthcare specialists, we 
                  relentlessly push the boundaries of pharmaceutical excellence. Our 
                  state-of-the-art manufacturing facilities ensure every product meets 
                  international standards of quality and efficacy.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: CheckCircle, text: "WHO-GMP Certified" },
                  { icon: Shield, text: "Quality Assured" },
                  { icon: Globe, text: "Nationwide Reach" },
                  { icon: Heart, text: "Patient-Centric" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <item.icon className="w-5 h-5 text-pharma-green" />
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Image with overlays */}
            <motion.div className="relative group" variants={itemVariants}>
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-pharma-blue to-pharma-green rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Dedicated Healthcare Professionals"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg text-slate-700 max-w-[280px] transform group-hover:scale-105 transition-transform duration-300">
                <Target className="w-8 h-8 text-pharma-green mb-3" />
                <h4 className="font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-sm leading-relaxed">
                  Committed to enhancing global health outcomes through innovative research, 
                  accessible healthcare, and unwavering quality standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Timeline Section */}
      <motion.section className="py-20 md:py-28 bg-gradient-to-b from-slate-100 to-sky-50" variants={itemVariants}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Growth <span className="text-pharma-blue">Timeline</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A decade-long journey of innovation, growth, and unwavering commitment to healthcare excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pharma-blue via-pharma-green to-pharma-blue rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                variants={itemVariants}
                custom={index}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <milestone.icon className="w-6 h-6 text-pharma-blue" />
                      <span className="text-2xl font-bold text-pharma-blue">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600 mb-4">{milestone.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.achievements.map((achievement, idx) => (
                        <span key={idx} className="text-xs bg-pharma-blue/10 text-pharma-blue px-2 py-1 rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10 w-4 h-4 bg-pharma-blue rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Stats Section */}
      <motion.section className="py-20 md:py-24 bg-white" variants={itemVariants}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16 md:mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Impact <span className="text-pharma-blue">by the Numbers</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Quantifiable achievements reflecting our dedication, reach, and impact 
              in the pharmaceutical landscape across India
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-3 border border-slate-100"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-24 h-24 bg-gradient-to-br from-pharma-blue/10 to-pharma-green/10 border-2 border-pharma-blue/30 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-pharma-blue/60">
                  <stat.icon className="w-12 h-12 text-pharma-blue group-hover:text-pharma-green transition-colors" />
                </div>
                <h3 className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-pharma-blue transition-colors">
                  {stat.number}
                </h3>
                <p className="text-slate-800 font-semibold text-lg mb-2">{stat.label}</p>
                <p className="text-slate-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Areas Section */}
      <motion.section className="py-20 md:py-28 bg-gradient-to-b from-slate-100 to-white" variants={itemVariants}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our <span className="text-pharma-blue">Expertise Areas</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized therapeutic solutions across multiple healthcare domains, 
              ensuring comprehensive patient care and treatment options
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pharma-blue/10 to-pharma-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-8 h-8 text-pharma-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{area.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  {area.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pharma-green" />
                      <span className="text-sm text-slate-600">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Core Values Section */}
      <motion.section className="py-20 md:py-28 bg-white" variants={itemVariants}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16 md:mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Guiding <span className="text-pharma-blue">Core Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The fundamental principles that shape our culture, guide our decisions, 
              drive our success, and define our commitment to excellence in healthcare
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-3"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-pharma-blue to-pharma-green rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="mt-14 text-2xl font-bold mb-4 text-slate-800 text-center group-hover:text-pharma-blue transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  {value.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-700 text-center">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-pharma-green flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default About;
