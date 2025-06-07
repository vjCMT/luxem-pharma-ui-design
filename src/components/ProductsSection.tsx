import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Ensure path is correct

// Import your actual product images
import Faldecort from "/assets/images/productDetails/FALDECORT3-Photoroom.png";
import Linzocast from "/assets/images/productDetails/LINZOCAST 1-Photoroom.png";
import Livofolate from "/assets/images/productDetails/LIVOFOLATE-Photoroom.png";
import Livozorbxt from "/assets/images/productDetails/LIVOZORB XT-Photoroom.png";
import Livozorbxtsup from "/assets/images/productDetails/LIVOZORB XT SUP-Photoroom.png";
import LuxboneFem from "/assets/images/productDetails/LUXBONE FEM-Photoroom.png";
import Pandoride from "/assets/images/productDetails/PANDORIDE-Photoroom.png";

// === AnimatedStat COMPONENT POORI TARAH SE RESTORE KAR DIYA GAYA HAI ===
const AnimatedStat = ({
  finalValue,
  label,
  duration = 2000,
  iconColor = "text-pharma-green",
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(String(finalValue).replace(/\D/g, ""), 10) || 0;
      if (start === end) {
        setCount(end);
        return;
      }
      const range = end - start;
      const incrementTime = Math.max(10, duration / (Math.abs(range) || 1));
      const incrementStep = range > 0 ? 1 : -1;
      const timer = setInterval(() => {
        start += incrementStep;
        setCount(start);
        if (
          (incrementStep > 0 && start >= end) ||
          (incrementStep < 0 && start <= end)
        ) {
          setCount(end);
          clearInterval(timer);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, finalValue, duration]);
  return (
    <div ref={ref} className="text-center px-2 md:px-4">
      <span className={`text-5xl md:text-6xl font-bold ${iconColor}`}>
        {count}
      </span>
      <span className="text-5xl md:text-6xl font-bold text-white ml-1">+</span>
      <p className="text-xs sm:text-sm uppercase text-slate-400 tracking-wider mt-1 md:mt-2">
        {label}
      </p>
    </div>
  );
};

const ProductsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation(
    "animate-fade-in",
    0.05
  ) as React.RefCallback<HTMLElement> | null;

  // === companyStats DATA BHI THEEK KAR DIYA GAYA HAI ===
  const companyStats = [
    { value: "35", label: "Employees", iconColor: "text-pharma-green" },
    { value: "50", label: "Products", iconColor: "text-pharma-lightBlue" },
    { value: "80", label: "City", iconColor: "text-pharma-green" },
    { value: "1", label: "R&D Centers", iconColor: "text-pharma-lightBlue" },
  ];

  const featuredProducts = [
    {
      name: "Fladecort 6",
      description:
        "A potent glucocorticoid used to treat a wide range of inflammatory and autoimmune conditions.",
      image: Faldecort,
      slug: "lexprate-cr",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Linzocast 600",
      description:
        "A last-resort antibiotic for treating serious infections caused by multi-drug resistant bacteria.",
      image: Linzocast,
      slug: "calvilux",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Livofolate",
      description:
        "A comprehensive formula with active B-vitamins and Omega-3 to support nerve, brain, and heart health.",
      image: Livofolate,
      slug: "multilux",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Livozorb XT Syp",
      description:
        "A palatable iron supplement syrup, ideal for children and adults to effectively treat iron deficiency anemia.",
      image: Livozorbxtsup,
      slug: "neurolux",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Livozorb XT",
      description:
        "A high-potency iron formulation with Zinc to support against anemia and boost immune function.",
      image: Livozorbxt,
      slug: "cardiolux",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Luxbone Fem",
      description:
        "A specialized formula expertly crafted to meet the unique bone health needs of women, especially post-menopause.",
      image: LuxboneFem,
      slug: "diabetlux",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Luxbone",
      description:
        "A premium, comprehensive formula for building and maintaining strong, healthy bones in adults.",
      image: LuxboneFem, // Placeholder
      slug: "immunolux",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Pandoride DSR",
      description:
        "A dual-action capsule for effective, sustained relief from acid reflux, heartburn, and indigestion.",
      image: Pandoride,
      slug: "gastrolux",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  const sectionBackgroundImage =
    "https://images.unsplash.com/photo-1585349150957-46d8869395ac?auto=format&fit=crop&w=1920&q=80";

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.96), rgba(23, 37, 84, 0.98)), url(${sectionBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* STATS SECTION */}
        <div className="mb-12 md:mb-16 pt-8 md:pt-0">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-x-2 gap-y-8 md:gap-x-0 md:gap-y-0 items-center">
            {companyStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <AnimatedStat
                  finalValue={stat.value}
                  label={stat.label}
                  iconColor={stat.iconColor}
                />
                {index < companyStats.length - 1 && (
                  <div className="hidden md:flex justify-center items-center h-full px-4 lg:px-6">
                    <div className="h-16 sm:h-20 w-px bg-slate-600/70"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Product Section Title & Carousel Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0 text-center md:text-left">
            Our <span className="text-pharma-lightBlue">Featured Products</span>
          </h2>
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-slate-500/50 text-slate-200 hover:text-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="w-24 md:w-32 h-px bg-slate-600/50 rounded-full"></div>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-slate-500/50 text-slate-200 hover:text-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Embla Carousel for Products */}
        <div className="embla -mx-2 sm:-mx-4" ref={emblaRef}>
          <div className="embla__container flex pb-4">
            {featuredProducts.map((product) => (
              <div
                className="embla__slide flex-[0_0_90%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 px-2 sm:px-3"
                key={product.slug}
              >
                <div className="group relative bg-slate-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/80 hover:border-pharma-blue/60 transition-all duration-300 transform hover:-translate-y-1.5 h-full flex flex-col">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-t-xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-15 transition-opacity`}
                    ></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-pharma-lightBlue transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-300/90 mb-4 leading-relaxed flex-grow min-h-[60px] line-clamp-3">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-auto text-slate-200 border-slate-600 hover:text-white hover:bg-pharma-blue/80 hover:border-pharma-blue/80 transition-all duration-300"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
