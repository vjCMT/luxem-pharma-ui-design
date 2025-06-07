// src/components/Navbar.tsx (ya jahan bhi aapki file hai)

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Users,
  ShieldCheck,
  ShoppingBag,
  Pill,
  Package,
  HeartPulse,
  Edit3,
  PhoneCall,
  LucideProps,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../logo.png"; // Path check kar lein

// FIX: TypeScript Types define kiye gaye hain taaki code surakshit rahe
interface NavItem {
  href: string;
  label: string;
  subtitle?: string;
  icon?: React.ComponentType<LucideProps>;
}

interface NavLink {
  href?: string;
  label: string;
  dropdown?: boolean;
  activeCheckPaths?: string[];
  items?: NavItem[];
}

// Data ko component se bahar rakhna ek achhi practice hai
const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    dropdown: true,
    activeCheckPaths: ["/about", "/vision-mission", "/quality"],
    items: [
      { href: "/about", label: "About Company", subtitle: "Our story", icon: Briefcase },
      { href: "/vision-mission", label: "Vision & Mission", subtitle: "Our goals", icon: Users },
      { href: "/quality", label: "Quality Assurance", subtitle: "Our standards", icon: ShieldCheck },
    ],
  },
  {
    label: "Products",
    dropdown: true,
    activeCheckPaths: ["/products"], // Yeh "/products" se shuru hone wale sabhi paths ko match karega
    items: [
      { href: "/products", label: "All Products", subtitle: "Complete range", icon: ShoppingBag },
      { href: "/products/lexprate-cr", label: "Faldecort", subtitle: "Corticosteroid", icon: Pill },
      { href: "/products/calvilux", label: "Linzocast", subtitle: "Antibiotic", icon: Package },
      { href: "/products/multilux", label: "Livofolate", subtitle: "Nutritional", icon: Pill },
    ],
  },
  { href: "/therapies", label: "Our Therapies" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" }, // Yeh mobile menu aur breadcrumbs ke liye upyogi hai
];

const Navbar = () => {
  // FIX: Sabhi states aur refs ko sahi type diya gaya hai
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isDrawerActuallyVisible, setIsDrawerActuallyVisible] = useState<boolean>(false);

  const navbarRef = useRef<HTMLElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // FIX: isActive function ko saral aur surakshit banaya gaya
  const isActive = (link: NavLink) => {
    if (link.dropdown && link.activeCheckPaths) {
      return link.activeCheckPaths.some((path) => location.pathname.startsWith(path));
    }
    if (link.href) {
      return location.pathname === link.href;
    }
    return false;
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsDrawerActuallyVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // FIX: event.target ko 'as Node' se type assert kiya gaya hai
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenDesktopDropdown(null);
      }
      if (
        isMobileMenuOpen &&
        mobileDrawerRef.current && !mobileDrawerRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current && !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMobileSubmenu = (label: string) => setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
  const closeMobileMenuAndNavigate = () => setIsMobileMenuOpen(false);
  const handleDesktopDropdownEnter = (label: string) => setOpenDesktopDropdown(label);
  const handleDesktopDropdownLeave = () => setOpenDesktopDropdown(null);

  return (
    <>
      <nav ref={navbarRef} className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center" onClick={isMobileMenuOpen ? closeMobileMenuAndNavigate : undefined}>
              <img src={logoImage} alt="Madrid Pharmaceuticals Logo" className="h-10 w-auto mr-2" />
            </Link>

            <div className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" onMouseEnter={() => handleDesktopDropdownEnter(link.label)} onMouseLeave={handleDesktopDropdownLeave}>
                    <button className={`flex items-center text-sm font-medium px-3 py-2 rounded-md group transition-colors ${isActive(link) ? "text-pharma-blue" : "text-gray-700 hover:text-pharma-blue"}`}>
                      {link.label}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDesktopDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDesktopDropdown === link.label && link.items && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white border rounded-lg shadow-xl z-[41] p-3 grid grid-cols-2 gap-2">
                        {link.items.map((item) => (
                          <Link key={item.href} to={item.href} className="flex items-center p-2.5 rounded-md hover:bg-pharma-blue/10 group/item">
                            {item.icon && <item.icon className="w-5 h-5 text-pharma-blue mr-2.5 shrink-0" />}
                            <div>
                              <span className="text-sm font-medium text-gray-800 group-hover/item:text-pharma-blue">{item.label}</span>
                              {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} to={link.href!} className={`text-sm font-medium px-3 py-2 rounded-md ${isActive(link) ? "text-pharma-blue" : "text-gray-700 hover:text-pharma-blue"}`}>
                    {link.label}
                  </Link>
                )
              )}
              {/* FIX: Redundant "Contact" link hatakar sirf button rakha gaya hai */}
              <Link to="/contact" className="ml-3">
                <Button className="bg-gradient-to-r from-pharma-blue to-pharma-green hover:opacity-90 text-white px-5 py-2 text-sm">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="lg:hidden">
              <Button ref={mobileMenuButtonRef} variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-gray-700 hover:bg-pharma-blue/10 relative z-50">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isDrawerActuallyVisible && (
        <>
          <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleMobileMenu}></div>
          <div ref={mobileDrawerRef} className={`fixed top-0 right-0 h-full bg-white z-50 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} w-full max-w-sm overflow-y-auto`} onAnimationEnd={() => { if (!isMobileMenuOpen) setIsDrawerActuallyVisible(false); }}>
            <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-lg font-bold">Menu</span>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="-mr-2"><X /></Button>
            </div>
            <div className="mt-6 space-y-2">
                {navLinks.map((link) => (
                    // Logic for rendering mobile menu links remains similar
                    link.dropdown ? (
                        <div key={link.label}>
                            <button onClick={() => toggleMobileSubmenu(link.label)} className="flex justify-between items-center w-full py-2 font-semibold">
                                {link.label}
                                {openMobileSubmenu === link.label ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {openMobileSubmenu === link.label && link.items && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {link.items.map(item => (
                                        <Link key={item.href} to={item.href} onClick={closeMobileMenuAndNavigate} className="flex items-center py-1">
                                            {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link key={link.label} to={link.href!} onClick={closeMobileMenuAndNavigate} className="block py-2 font-semibold">{link.label}</Link>
                    )
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;