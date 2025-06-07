import React from "react";
// Link component ko yahan import kiya gaya hai
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Automatic scroll ke liye sirf zaroori modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  ArrowLeft,
  CheckCircle,
  Heart,
  Brain,
  Bone,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { productName } = useParams();

  const productDetails = {
    "lexprate-cr": {
      name: "Fladecort 6",
      category: "Corticosteroid / Anti-inflammatory",
      description:
        "A potent glucocorticoid used to treat a wide range of inflammatory and autoimmune conditions by suppressing the immune response.",
      images: [
        "/assets/images/productDetails/FALDECORT3-Photoroom.png",
        "/assets/images/productDetails/FALDECORT 1-Photoroom.png",
        "/assets/images/productDetails/FALDECORT2-Photoroom.png",
        "/assets/images/productDetails/FALDECORT4-Photoroom.png",
      ],
      features: [
        "Potent anti-inflammatory action",
        "Effective immunosuppression",
        "Versatile use across multiple disorders",
      ],
      indications: [
        "Rheumatoid Arthritis & other autoimmune diseases",
        "Severe Asthma & Allergic Reactions",
        "Certain inflammatory skin conditions",
      ],
      composition: "Each tablet contains Deflazacort 6mg.",
      icon: ShieldCheck,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-100",
      additionalInfo: {
        title: "Understanding Fladecort 6",
        content:
          "Fladecort (Deflazacort) works by reducing inflammation and calming the immune system, making it crucial for managing conditions where the body's immune system attacks its own tissues.",
        tips: [
          "Take exactly as prescribed by your doctor.",
          "Do not stop taking the medication abruptly.",
          "Best taken with food to reduce stomach upset.",
        ],
      },
    },
    calvilux: {
      name: "Linzocast 600",
      category: "Antibiotic / Infectious Disease",
      description:
        "A last-resort antibiotic for treating serious, complicated infections caused by multi-drug resistant Gram-positive bacteria.",
      images: [
        "/assets/images/productDetails/LINZOCAST 1-Photoroom.png",
        "/assets/images/productDetails/LINZOCAST2-Photoroom.png",
        "/assets/images/productDetails/LINZOCAST3-Photoroom.png",
        "/assets/images/productDetails/LINZOCAST4-Photoroom.png",
      ],
      features: [
        "Effective against resistant bacteria like MRSA & VRE",
        "Excellent oral bioavailability",
        "Unique mechanism of action prevents cross-resistance",
      ],
      indications: [
        "Hospital-Acquired & Community-Acquired Pneumonia",
        "Complicated Skin and Soft Tissue Infections (cSSTI)",
        "Vancomycin-Resistant Enterococcus (VRE) infections",
      ],
      composition: "Each tablet contains Linezolid 600mg.",
      icon: ShieldCheck,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
      additionalInfo: {
        title: "About Linzocast 600 (Linezolid)",
        content:
          "Linzocast is a critical antibiotic used when other treatments have failed. Its use is strictly monitored by healthcare professionals to ensure efficacy and manage potential side effects.",
        tips: [
          "Complete the full course of treatment as prescribed.",
          "Inform your doctor about all other medications.",
          "Be aware of potential interactions with certain foods and drugs.",
        ],
      },
    },
    multilux: {
      name: "Livofolate",
      category: "Nutritional Supplement / Neurotropic",
      description:
        "A comprehensive neurotropic and cardioprotective formula with active B-vitamins and Omega-3 fatty acids to support overall nerve, brain, and heart health.",
      images: [
        "/assets/images/productDetails/LIVOFOLATE-Photoroom.png",
        "/assets/images/productDetails/LIVOFOLATE1-Photoroom.png",
        "/assets/images/productDetails/LIVOFOLATE2-Photoroom.png",
        "/assets/images/productDetails/LIVOFOLATE3-Photoroom.png",
      ],
      features: [
        "Contains active forms of B-Vitamins (B6, B9, B12)",
        "Enriched with Omega-3 (EPA & DHA) for brain and heart",
        "Supports nerve function and myelin sheath repair",
        "Helps manage cholesterol and supports cardiovascular health",
      ],
      indications: [
        "Diabetic & Peripheral Neuropathy",
        "Cardiovascular health support",
        "As an adjuvant in managing high cholesterol",
        "Cognitive and brain health support",
      ],
      composition:
        "Methylcobalamin (1.5mg), L-Methylfolate (1.0mg), Pyridoxal-5-Phosphate (0.5mg), and Omega-3 Fatty Acids (EPA 90mg, DHA 60mg).",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-100",
      additionalInfo: {
        title: "Holistic Health with Livofolate",
        content:
          "Livofolate provides a powerful combination of essential nutrients for both the nervous and cardiovascular systems. Its active ingredients ensure maximum benefit for nerve regeneration and heart protection.",
        tips: [
          "Take one softgel daily, preferably with a meal.",
          "Store in a cool, dry place.",
          "Ideal for long-term nerve and heart care.",
        ],
      },
    },
    neurolux: {
      name: "Livozorb XT Syp",
      category: "Hematology / Iron Supplement (Syrup)",
      description:
        "A palatable iron supplement syrup, ideal for children and adults who have difficulty swallowing tablets, designed to treat iron deficiency anemia.",
      images: [
        "/assets/images/productDetails/LIVOZORB XT SUP-Photoroom.png",
        "/assets/images/productDetails/LIVOZORB XT SUP1-Photoroom.png",
        "/assets/images/productDetails/LIVOZORB XT SUP2-Photoroom.png",
        "/assets/images/productDetails/LIVOZORB XT SUP3-Photoroom.png",
      ],
      features: [
        "Liquid form for easy administration",
        "Combines Iron, Folic Acid, and active Vitamin B12",
        "Gentle on the stomach",
        "Effectively improves hemoglobin levels",
      ],
      indications: [
        "Iron deficiency anemia in children and adults",
        "Nutritional anemia during growth phases",
        "General weakness and fatigue due to low iron",
      ],
      composition:
        "Each 5ml contains Ferrous Ascorbate (30mg), Folic Acid (500mcg), and Methylcobalamin (500mcg).",
      icon: Heart,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-100",
      additionalInfo: {
        title: "Easy Iron Supplementation",
        content:
          "Livozorb XT Syrup offers a convenient and effective way to combat anemia, especially for pediatric patients. Its balanced formula supports the healthy production of red blood cells.",
        tips: [
          "Shake well before use.",
          "Use the provided measuring cup for accurate dosage.",
          "Can be mixed with juice to enhance taste for children.",
        ],
      },
    },
    cardiolux: {
      name: "Livozorb XT",
      category: "Hematology / Iron Supplement",
      description:
        "A high-potency iron formulation fortified with Zinc for comprehensive support against anemia and to boost immune function.",
      images: [
        "/assets/images/productDetails/LIVOZORB XT-Photoroom.png",
        "/assets/images/productDetails/LIVOZORB XT1-Photoroom.png",
        "/assets/images/productDetails/LIVOZORB XT2-Photoroom.png",
        "/assets/images/productDetails/LIVOZORB XT3-Photoroom.png",
      ],
      features: [
        "High-dose, high-absorption Ferrous Ascorbate",
        "Enriched with Zinc for enhanced immunity",
        "Includes Folic Acid and active Vitamin B12",
        "Rapidly improves hemoglobin levels",
      ],
      indications: [
        "Moderate to severe Iron Deficiency Anemia",
        "Anemia during pregnancy & post-surgery",
        "Nutritional support for chronic illness",
      ],
      composition:
        "Ferrous Ascorbate (100mg), Methylcobalamin (500mcg), Folic Acid (1.5mg), and Zinc (22.5mg).",
      icon: Heart,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-100",
      additionalInfo: {
        title: "Powerful Anemia Correction",
        content:
          "Livozorb XT is designed for rapid and effective correction of iron deficiency. The addition of Zinc provides immune support, making it ideal for recovery and overall vitality.",
        tips: [
          "Best taken on an empty stomach for maximum absorption.",
          "Avoid taking with tea or coffee.",
          "Follow your doctor's dosage instructions.",
        ],
      },
    },
    diabetlux: {
      name: "Luxbone Fem",
      category: "Women's Health / Bone Supplement",
      description:
        "A specialized bone health formula expertly crafted to meet the unique nutritional needs of women, especially during and after menopause.",
      images: [
        "/assets/images/productDetails/LUXBONE FEM1-Photoroom.png",
        "/assets/images/productDetails/LUXBONE FEM2-Photoroom.png",
        "/assets/images/productDetails/LUXBONE FEM3-Photoroom.png",
        "/assets/images/productDetails/LUXBONE FEM4-Photoroom.png",
      ],
      features: [
        "Active form of Vitamin D (Calcitriol) for absorption",
        "Soy Isoflavones to support hormonal balance",
        "Vitamin K2-7 to direct calcium to bones",
        "Tailored for post-menopausal bone health",
      ],
      indications: [
        "Prevention and management of Post-menopausal Osteoporosis",
        "To maintain bone density in aging women",
        "As a comprehensive calcium supplement for women",
      ],
      composition:
        "Calcitriol (0.25mcg), Calcium Carbonate (500mg), Magnesium (50mg), Soya Isoflavones (50mg), and Vitamin K2-7 (45mcg).",
      icon: Bone,
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-100",
      additionalInfo: {
        title: "Supporting Women's Bone Health",
        content:
          "Luxbone Fem provides a holistic approach to women's bone health. It combines calcium with essential co-factors like Calcitriol and Vitamin K2-7 to ensure calcium is properly absorbed and utilized in the bones.",
        tips: [
          "Take with meals for better absorption.",
          "Incorporate weight-bearing exercises.",
          "Ideal for long-term support of a strong skeletal frame.",
        ],
      },
    },
    immunolux: {
      name: "Luxbone",
      category: "Bone Health Supplement",
      description:
        "A premium, comprehensive formula for building and maintaining strong, healthy bones in adults.",
      images: [
        "/assets/images/productDetails/LUXBONE1-Photoroom.png",
        "/assets/images/productDetails/LUXBONE2-Photoroom.png",
        "/assets/images/productDetails/LUXBONE3-Photoroom.png",
        "/assets/images/productDetails/LUXBONE4-Photoroom.png",
      ],
      features: [
        "Complete 7-ingredient bone formula",
        "Includes active Vitamin D (Calcitriol) & Vitamin K2-7",
        "Contains active B-Vitamins for nerve support",
        "Ensures optimal calcium deposition into bones",
      ],
      indications: [
        "Osteoporosis & Osteopenia",
        "General bone health and density maintenance",
        "Support during fracture healing",
        "As an adjuvant for bone health in chronic conditions",
      ],
      composition:
        "Calcitriol (0.25mcg), Calcium Carbonate (1250mg), Elemental Magnesium (50mg), Elemental Zinc (7.5mg), L-methylfolate (800mcg), Methylcobalamin (1500mcg), and Vitamin K2-7 (45mcg).",
      icon: Bone,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-100",
      additionalInfo: {
        title: "The Complete Bone Solution",
        content:
          "Luxbone is more than just calcium. It is a scientifically formulated product that provides all the key nutrients required for the entire bone-building cycle, from absorption to mineralization.",
        tips: [
          "Take as directed by your physician.",
          "A superior choice for comprehensive, long-term bone health.",
          "Consistent daily intake is key.",
        ],
      },
    },
    gastrolux: {
      name: "Pandoride DSR",
      category: "Gastroenterology / Anti-reflux",
      description:
        "A dual-action capsule for effective and sustained relief from acid reflux, heartburn, and indigestion by controlling stomach acid and improving gut movement.",
      images: [
        "/assets/images/productDetails/PANDORIDE-Photoroom.png",
        "/assets/images/productDetails/PANDORIDE1-Photoroom.png",
        "/assets/images/productDetails/PANDORIDE2-Photoroom.png",
        "/assets/images/productDetails/PANDORIDE3-Photoroom.png",
      ],
      features: [
        "Combines a Proton Pump Inhibitor (Pantoprazole)",
        "With a Prokinetic Agent (Domperidone)",
        "Sustained-Release (SR) form for all-day relief",
        "Reduces both heartburn and nausea symptoms",
      ],
      indications: [
        "Gastroesophageal Reflux Disease (GERD)",
        "Dyspepsia (Indigestion) with Nausea",
        "Heartburn and regurgitation",
      ],
      composition:
        "Each capsule contains Pantoprazole (40mg) and Domperidone (30mg) SR.",
      icon: Activity,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-100",
      additionalInfo: {
        title: "Advanced Relief with Pandoride DSR",
        content:
          "Pandoride DSR provides comprehensive relief by tackling acid-related issues from two angles: Pantoprazole reduces acid production, while Domperidone prevents the backward flow of stomach contents.",
        tips: [
          "Best taken on an empty stomach, 30-60 minutes before a meal.",
          "Swallow the capsule whole, do not chew or crush.",
          "Avoid triggers like spicy foods and caffeine.",
        ],
      },
    },
  };

  const product = productDetails[productName as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product not found
          </h1>
          <p className="text-gray-600 mt-2">
            The product '{productName}' does not exist or is not yet configured.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="hover:bg-blue-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="relative mb-8">
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${product.color} rounded-2xl blur opacity-30`}
                ></div>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 8080,
                    disableOnInteraction: false,
                  }}
                  className="relative w-full rounded-2xl shadow-2xl overflow-hidden"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${product.name} - view ${index + 1}`}
                        className="w-full h-auto max-h-[500px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {product.additionalInfo && (
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.additionalInfo.title ||
                      `More About ${product.name}`}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.additionalInfo.content}
                  </p>
                  {product.additionalInfo.tips && (
                    <>
                      <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                        Helpful Tips:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {product.additionalInfo.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
            <div>
              <div className="mb-6">
                <div
                  className={`inline-flex items-center bg-gradient-to-r ${product.color} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}
                >
                  <product.icon className="w-4 h-4 mr-2" />
                  {product.category}
                </div>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-6">
                {product.name}
              </h1>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                {product.description}
              </p>
              <div
                className={`bg-gradient-to-br ${product.bgColor} rounded-2xl p-8 mb-8 border border-white/50 shadow-lg`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Indications
                  </h3>
                  <ul className="space-y-2">
                    {product.indications.map((indication, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{indication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Composition
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.composition}
                  </p>
                </div>
              </div>
              {/* Button ko Link bana diya gaya hai */}
              <Button
                size="lg"
                className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                asChild
              >
                <Link to="/contact">Contact for More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
