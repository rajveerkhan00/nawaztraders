"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "bundles" | "flexible" | "cables" | "pipes";
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  primaryImage: string;
  gallery: {
    src: string;
    title: string;
    desc: string;
  }[];
  gauges: string[];
  specs: {
    label: string;
    value: string;
  }[];
  description: string;
  applications: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "single-core-flexible",
    name: "Enwire Single-Core Flexible Building Wires",
    tagline: "Class-5 Multi-Strand 99.99% Pure Copper Coils",
    category: "flexible",
    categoryLabel: "Flexible Wires",
    badge: "Top Seller",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    primaryImage: "/images/single-core-flexible.jpg",
    gallery: [
      {
        src: "/images/single-core-flexible.jpg",
        title: "Packaged Coil Bundle",
        desc: "90-meter sealed spool with moisture-resistant shrink packaging",
      },
      {
        src: "/images/hero-wires.jpg",
        title: "Color Coded Spool Array",
        desc: "Red, Blue, Yellow & Green gauges available for phase identification",
      },
      {
        src: "/images/flat-twin-wires.jpg",
        title: "Copper Core Stripping",
        desc: "Precision annealed bare electrolytic copper multi-filaments",
      },
      {
        src: "/images/pvc-pipes-cables.jpg",
        title: "In-Conduit Routing",
        desc: "Smooth gliding insulation engineered for fast conduit pulling",
      },
    ],
    gauges: ["1.5 mm²", "2.5 mm²", "4.0 mm²", "6.0 mm²", "10.0 mm²", "16.0 mm²"],
    specs: [
      { label: "Conductor Material", value: "99.99% Electrolytic Pure Annealed Copper" },
      { label: "Insulation Type", value: "Grade-A Flame Retardant PVC (Self-Extinguishing)" },
      { label: "Voltage Rating", value: "450 / 750 Volts AC" },
      { label: "Operating Temp", value: "-15°C to +70°C (Up to 90°C Heat Resistant)" },
      { label: "Standard Length", value: "90 Meters Standard Coil / 100m Custom Spool" },
      { label: "Certifications", value: "BS 6004, IEC 60227, PSQCA Certified" },
    ],
    description:
      "Crafted specifically for residential, commercial, and solar wiring. The multi-strand flexible core bends effortlessly around tight 90-degree conduit corners without conductor fracture, ensuring minimum resistance and zero energy loss.",
    applications: ["Concealed House Wiring", "Solar Inverter Links", "Distribution DB Boxes", "UPS Battery Connections"],
  },
  {
    id: "multicore-armored-bundles",
    name: "Heavy-Duty Multi-Core Armored Cable Bundles",
    tagline: "Industrial Power Transmission Bundles & Multi-Run Feeds",
    category: "bundles",
    categoryLabel: "Wire Bundles",
    badge: "Heavy Duty",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    primaryImage: "/images/multicore-bundles.jpg",
    gallery: [
      {
        src: "/images/multicore-bundles.jpg",
        title: "Bundled Cross-Section View",
        desc: "Multi-core insulated copper conductors bound in heavy-duty straps",
      },
      {
        src: "/images/hero-wires.jpg",
        title: "Color Phase Cores",
        desc: "Clear 3-phase + neutral color identification standards",
      },
      {
        src: "/images/pvc-pipes-cables.jpg",
        title: "Industrial Duct Layout",
        desc: "Engineered for underground trenching and heavy electrical trays",
      },
      {
        src: "/images/single-core-flexible.jpg",
        title: "Multi-Wire Core Finish",
        desc: "Low-resistance stranded copper for heavy ampere throughput",
      },
    ],
    gauges: ["3-Core 16mm²", "4-Core 25mm²", "4-Core 35mm²", "4-Core 70mm²"],
    specs: [
      { label: "Conductor", value: "High-Conductivity Plain Annealed Stranded Copper" },
      { label: "Armoring / Sheath", value: "Heavy-Duty UV Resistant Outer PVC with Steel Armor" },
      { label: "Voltage Grade", value: "600 / 1000 Volts (0.6/1kV)" },
      { label: "Short Circuit Temp", value: "+160°C for 5 Seconds" },
      { label: "Packaging Form", value: "Strapped Factory Bundles / Wooden Spool Drums" },
      { label: "Quality Compliance", value: "BS 5467 / IEC 60502-1 Standards" },
    ],
    description:
      "Designed for high-load electrical feeders, industrial factories, sub-stations, and commercial high-rises. Nawaz Traders supplies these heavy-duty bundles pre-tested with 100% spark detection and high voltage endurance.",
    applications: ["Main Sub-Station Feeders", "Industrial Machinery Runs", "Underground Trench Wiring", "Generator Main Feeds"],
  },
  {
    id: "flat-twin-earth",
    name: "Enwire Flat Twin & Earth Flexible Wiring",
    tagline: "Low-Profile Domestic & Commercial Wall Wiring",
    category: "flexible",
    categoryLabel: "Flexible Wires",
    badge: "Premium Copper",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    primaryImage: "/images/flat-twin-wires.jpg",
    gallery: [
      {
        src: "/images/flat-twin-wires.jpg",
        title: "Flat Twin Rolls Overview",
        desc: "White and grey insulated low-profile coils with stripped cores",
      },
      {
        src: "/images/single-core-flexible.jpg",
        title: "Core Copper Multi-Strands",
        desc: "Pure red & blue insulated copper conductors with bare earth",
      },
      {
        src: "/images/hero-wires.jpg",
        title: "Workshop Gauge Verification",
        desc: "Certified conductor resistance meets exact Pakistani & UK specs",
      },
      {
        src: "/images/pvc-pipes-cables.jpg",
        title: "Surface & Channelling Fit",
        desc: "Lies flat in wall channels beneath plaster and skirting boards",
      },
    ],
    gauges: ["3/.029 (1.0mm²)", "7/.029 (2.5mm²)", "7/.036 (4.0mm²)", "7/.044 (6.0mm²)"],
    specs: [
      { label: "Core Layout", value: "2 Insulated Cores + 1 Central Circuit Earth Wire" },
      { label: "Insulation Profile", value: "Flat Dual Sheathed Anti-Termite White/Grey PVC" },
      { label: "Rated Voltage", value: "300 / 500 Volts" },
      { label: "Flame Characteristic", value: "Flame Retardant to IEC 60332-1" },
      { label: "Bundle Length", value: "90 Meters standard coil bundle" },
      { label: "Copper Purity", value: "99.9% Oxygen-Free Annealed Copper" },
    ],
    description:
      "The classic and most trusted solution for residential surface and concealed wiring. Features flat profile construction that stays snug inside wall groves, eliminating bulges and ensuring simple, fast plastering.",
    applications: ["Socket Outlets Wiring", "Air Conditioner Loops", "Lighting Ring Circuits", "Plaster Embedded Routing"],
  },
  {
    id: "pvc-conduit-pipes",
    name: "Enwire Heavy-Duty PVC Electrical Conduit Pipes",
    tagline: "High-Impact Flame-Retardant Pipes & Bundles",
    category: "pipes",
    categoryLabel: "Pipes & Conduits",
    badge: "Enwire Pipes",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    primaryImage: "/images/pvc-pipes-cables.jpg",
    gallery: [
      {
        src: "/images/pvc-pipes-cables.jpg",
        title: "Conduit Bundle with Cables",
        desc: "Rigid grey PVC pipes with smooth inner bore and bundled wires",
      },
      {
        src: "/images/multicore-bundles.jpg",
        title: "Underground Trunking Run",
        desc: "Heavy-wall piping withstands concrete pressure during slab pouring",
      },
      {
        src: "/images/hero-wires.jpg",
        title: "Wire Pulling Compatibility",
        desc: "Ultra-slick interior reduces wire friction during installation",
      },
      {
        src: "/images/single-core-flexible.jpg",
        title: "Bundled Wire Integration",
        desc: "Engineered to fit multiple flexible wire coils with ease",
      },
    ],
    gauges: ['1/2" (16mm)', '3/4" (20mm)', '1" (25mm)', '1-1/4" (32mm)', '1-1/2" (40mm)'],
    specs: [
      { label: "Material Composition", value: "Unplasticized Polyvinyl Chloride (uPVC)" },
      { label: "Impact Strength", value: "Heavy Mechanical Compression Class (High-Impact)" },
      { label: "Fire Performance", value: "Non-Flammable, Self-Extinguishing within 5 seconds" },
      { label: "Corrosion Resistance", value: "100% Acid, Alkali, and Moisture Proof" },
      { label: "Standard Length", value: "10 Feet Rigid Pipes / 50m Corrugated Rolls" },
      { label: "Packaging Unit", value: "Strapped Bundles of 10 & 25 Pipes" },
    ],
    description:
      "A core part of the Enwire Pipes catalog. Protect your valuable copper cables inside high-grade uPVC pipes that will not crack during concrete slab pouring or structural shifts. Heat and chemical resistant.",
    applications: ["Roof Concrete Slab Wiring", "Underground Cable Ducts", "Surface Industrial Conduits", "Wall Chasing Protection"],
  },
  {
    id: "industrial-flexible-control",
    name: "Enwire Multi-Strand High-Flex Control Wires",
    tagline: "Extra Fine Stranding for Motors, Panels & Vibrating Gear",
    category: "flexible",
    categoryLabel: "Flexible Wires",
    badge: "High Flexibility",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    primaryImage: "/images/hero-wires.jpg",
    gallery: [
      {
        src: "/images/hero-wires.jpg",
        title: "Master Coil Bench View",
        desc: "Vibrant yellow, green, red and blue flexible spools on workbench",
      },
      {
        src: "/images/single-core-flexible.jpg",
        title: "High-Strand Copper Details",
        desc: "Super-fine copper hair strands provide unmatched bend radius",
      },
      {
        src: "/images/multicore-bundles.jpg",
        title: "Control Panel Trunking",
        desc: "Neat routing inside tight industrial switchboards and enclosures",
      },
      {
        src: "/images/flat-twin-wires.jpg",
        title: "Insulation Durability",
        desc: "Oil, oil-mist, and grease resistant outer PVC compounds",
      },
    ],
    gauges: ["0.75 mm²", "1.0 mm²", "1.5 mm²", "2.5 mm²", "4.0 mm²"],
    specs: [
      { label: "Strand Type", value: "Class 6 Ultra-Fine Stranded Annealed Copper" },
      { label: "Bend Radius", value: "4x Cable Outer Diameter (Extreme Flexibility)" },
      { label: "Test Voltage", value: "2000 Volts Spark Tested" },
      { label: "Oil Resistance", value: "Special Oil & Chemical Resistant PVC Jacket" },
      { label: "Available Colors", value: "Red, Yellow, Blue, Black, Green, White, Grey" },
      { label: "Bundle Packaging", value: "Shrink-wrapped 90m & 180m Wooden Spools" },
    ],
    description:
      "Engineered for high-vibration environments, automation cabinets, CNC machinery, and electrical control panels where ordinary stiff wires break over time. Retains flexibility in cold and hot environments.",
    applications: ["Control Panels & Switchboards", "CNC & Industrial Automation", "HVAC Thermostat Wiring", "Generator Engine Wiring"],
  },
  {
    id: "submersible-flat-cables",
    name: "Enwire Submersible Pump 3-Core Waterproof Bundles",
    tagline: "Continuous Submersion Waterproof Flat Wire Bundles",
    category: "bundles",
    categoryLabel: "Wire Bundles",
    badge: "Waterproof IP68",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    primaryImage: "/images/multicore-bundles.jpg",
    gallery: [
      {
        src: "/images/multicore-bundles.jpg",
        title: "Waterproof Sheathed Bundle",
        desc: "Double-jacketed impervious insulation withstands 500m water pressure",
      },
      {
        src: "/images/pvc-pipes-cables.jpg",
        title: "Deep Well Pipe Integration",
        desc: "Clamps securely alongside delivery pipes inside boreholes",
      },
      {
        src: "/images/single-core-flexible.jpg",
        title: "Corrosion Proof Copper",
        desc: "Electrolytic copper coated to prevent moisture oxidation",
      },
      {
        src: "/images/flat-twin-wires.jpg",
        title: "Flat Alignment Configuration",
        desc: "Parallel 3-core alignment ensures compact borehole entry",
      },
    ],
    gauges: ["3-Core 2.5mm²", "3-Core 4.0mm²", "3-Core 6.0mm²", "3-Core 10.0mm²"],
    specs: [
      { label: "Water Resistance", value: "Continuous Submersion IP68 Rated (Drinking Water Safe)" },
      { label: "Conductor", value: "Grade-A Multi-Strand Electrolytic Annealed Copper" },
      { label: "Dual Sheathing", value: "High-grade Water Impermeable PVC / Nitrile Rubber" },
      { label: "Voltage Rating", value: "1100 Volts Industrial Grade" },
      { label: "Temperature", value: "-20°C to +85°C" },
      { label: "Bundle Lengths", value: "100m, 200m, 500m Continuous Lengths Available" },
    ],
    description:
      "Specially formulated for deep tube wells, agricultural turbine pumps, and underground water tanks. The impervious outer PVC jacket shields the conductors from corrosive minerals and grease.",
    applications: ["Agricultural Tube-Wells", "Deep Borehole Submersible Pumps", "Municipal Water Supply", "Fountain & Pool Electrics"],
  },
];

const WIRE_CALCULATOR_PRESETS = [
  {
    name: "1.5 Ton Inverter Air Conditioner",
    recommended: "7/.029 (2.5 mm²) Single Core / Twin",
    breaker: "20A / 32A DP",
    power: "1800W - 2400W",
    note: "Prevents voltage drops during compressor start; pure copper guarantees cool wire run.",
  },
  {
    name: "UPS / Solar Inverter (3kVA - 5kVA)",
    recommended: "10 mm² to 16 mm² Extra Flexible Wires",
    breaker: "63A DC Breaker",
    power: "3000W - 5000W",
    note: "Critical for low-voltage high-current battery banks; avoids terminal heating.",
  },
  {
    name: "General House Lighting & Ceiling Fans",
    recommended: "3/.029 (1.0 mm² / 1.5 mm²) Flexible Wires",
    breaker: "10A - 16A SP",
    power: "Up to 1000W per circuit",
    note: "Ideal for switches, chandeliers, fans and LED strip channels.",
  },
  {
    name: "Submersible Borehole Water Pump (2HP - 3HP)",
    recommended: "3-Core 4.0 mm² Flat Submersible Cable",
    breaker: "25A Heavy Duty",
    power: "2200W Continuous",
    note: "Provides watertight current supply across 200ft+ borehole depths.",
  },
  {
    name: "Electric Instant Geyser / Heavy Heater",
    recommended: "7/.036 (4.0 mm²) or 6.0 mm² Pure Copper",
    breaker: "32A DP Breaker",
    power: "3500W - 4500W",
    note: "High thermal endurance prevents jacket melting during continuous winter load.",
  },
];

interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  category: string;
  tagline: string;
  title: string;
  highlight: string;
  subtitle: string;
  specs: { label: string; value: string }[];
  accentColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "flexible-coils",
    image: "/images/hero-wires.jpg",
    badge: "Top Seller In Pakistan",
    category: "Flexible Building Wires",
    tagline: "Class-5 Multi-Strand • 99.99% Electrolytic Pure Copper",
    title: "Engineered for Extreme Flexibility & Zero Loss",
    highlight: "Pure Flexible Coils",
    subtitle:
      "Ultra-slick flame retardant insulation engineered for effortless 90° conduit bending. Guaranteed minimum electrical resistance for homes, solar inverters, and commercial distribution.",
    specs: [
      { label: "Purity", value: "99.99% Pure Copper" },
      { label: "Standard", value: "BS 6004 & IEC 60227" },
      { label: "Spark Tested", value: "2000 Volts" },
      { label: "Spool Length", value: "90 Meters Standard" },
    ],
    accentColor: "from-amber-400 to-orange-500",
  },
  {
    id: "multicore-bundles",
    image: "/images/multicore-bundles.jpg",
    badge: "Heavy Duty 1100V",
    category: "Wire Bundles & Feeders",
    tagline: "Industrial Power Transmission Bundles",
    title: "Heavy-Duty Multi-Core Armored Feeder Bundles",
    highlight: "Armored Cable Bundles",
    subtitle:
      "Engineered for sub-station feeders, manufacturing plants, and heavy generator mains. Bound with heavy steel armoring and dual-jacketed UV-resistant PVC protection.",
    specs: [
      { label: "Voltage Grade", value: "600 / 1000 Volts" },
      { label: "Armoring", value: "Steel Armored Shield" },
      { label: "Max Temp", value: "+160°C Short-Circuit" },
      { label: "Testing", value: "100% Spark Tested" },
    ],
    accentColor: "from-orange-500 to-amber-600",
  },
  {
    id: "single-core-packaged",
    image: "/images/single-core-flexible.jpg",
    badge: "Full Measure Guarantee",
    category: "Building Wires & Coils",
    tagline: "Factory Sealed 90-Meter Bundles",
    title: "Guaranteed Full 90-Meter Sealed Coils",
    highlight: "Full Length Guarantee",
    subtitle:
      "Say goodbye to deceptive short-measure coils. Every Nawaz Traders Enwire coil is shrink-wrapped with tamper-evident serials and full certified copper cross-sections.",
    specs: [
      { label: "Length", value: "Guaranteed 90m Full" },
      { label: "Gauges", value: "1.5mm² to 16mm²" },
      { label: "Insulation", value: "Flame-Retardant PVC" },
      { label: "Certification", value: "PSQCA Certified" },
    ],
    accentColor: "from-amber-500 to-yellow-500",
  },
  {
    id: "pvc-conduit-pipes",
    image: "/images/pvc-pipes-cables.jpg",
    badge: "Slab Pouring Tested",
    category: "Enwire Pipes & Conduits",
    tagline: "High-Impact Flame-Retardant uPVC",
    title: "Heavy-Impact Electrical Conduit Piping",
    highlight: "Conduit Pipes & Bundles",
    subtitle:
      "Non-collapsible rigid uPVC conduits engineered to withstand heavy wet concrete pressures during roof slab pouring and harsh underground trench burial without cracking.",
    specs: [
      { label: "Material", value: "Virgin High-Impact uPVC" },
      { label: "Fire Safety", value: "Self-Extinguishing (5s)" },
      { label: "Corrosion", value: "100% Acid & Moisture Proof" },
      { label: "Sizes", value: '1/2" up to 1-1/2"' },
    ],
    accentColor: "from-sky-400 to-blue-500",
  },
  {
    id: "flat-twin-earth",
    image: "/images/flat-twin-wires.jpg",
    badge: "Contractor Favorite",
    category: "Flexible Flat Wires",
    tagline: "Domestic & Commercial Surface Wiring",
    title: "Enwire Flat Twin & Earth Wall Groove Wires",
    highlight: "Flat Twin & Earth",
    subtitle:
      "Low-profile flat design stays perfectly flush inside wall chases beneath plaster and skirting boards. Eliminates wall bulges and cuts installation labor by half.",
    specs: [
      { label: "Profile", value: "Dual Cores + Bare Earth" },
      { label: "Sizes", value: "3/.029 to 7/.044 Gauges" },
      { label: "Sheath", value: "Anti-Termite White PVC" },
      { label: "Losses", value: "Zero Resistance Heat" },
    ],
    accentColor: "from-emerald-400 to-teal-500",
  },
];

export default function LandingPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [calcIndex, setCalcIndex] = useState<number>(0);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryWire, setInquiryWire] = useState("Enwire Single-Core Flexible Building Wires");
  const [inquiryQuantity, setInquiryQuantity] = useState("5 Bundles (Coils)");
  const [inquiryNotes, setInquiryNotes] = useState("");

  // Hero Background Slideshow State
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const phoneNumber = "03224172149";
  const displayPhone = "0322 4172149";
  const formattedPhone = "0322-4172149";
  const emailAddress = "nawaztraders7866@gmail.com";
  const brandName = "Nawaz Traders";
  const brandDomain = "Enwire Cables & Pipes";

  // Auto Slideshow Interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Filter products
  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  // Close modal with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveThumbIndex(0);
  };

  const handleWhatsAppInquiry = (productName?: string) => {
    const text = productName
      ? `Hello Nawaz Traders, I am interested in inquiring about "${productName}" from Enwire Cables & Pipes. Please share wholesale prices and bundle availability.`
      : `Hello Nawaz Traders, I am inquiring about Enwire Cables & Pipes wire bundles and flexible wires. Please provide your catalog and price list.`;
    const url = `https://wa.me/923224172149?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Order Inquiry - Nawaz Traders / Enwire Cables & Pipes*\n\n*Customer Name:* ${inquiryName || "Not provided"}\n*Phone:* ${inquiryPhone || "Not provided"}\n*Product:* ${inquiryWire}\n*Quantity:* ${inquiryQuantity}\n*Notes:* ${inquiryNotes || "None"}`;
    const url = `https://wa.me/923224172149?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070b16] text-slate-100 relative">
      {/* ============================================================ */}
      {/* 1. HEADER / NAVIGATION                                        */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 bg-[#070b16]/95 backdrop-blur-md border-b border-amber-500/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand with Round Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <Image
                    src="/images/logo.jpg"
                    alt="Nawaz Traders Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full border border-amber-400/50 animate-pulse pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1.5">
                  NAWAZ <span className="copper-text-gradient">TRADERS</span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400/90 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  {brandDomain}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Wire Bundles & Products
              </a>
              <a href="#why-us" className="hover:text-amber-400 transition-colors">
                Pure Copper Quality
              </a>
              <a href="#calculator" className="hover:text-amber-400 transition-colors">
                Wire Gauge Guide
              </a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">
                Direct Contact
              </a>
            </nav>

            {/* Desktop Contact Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/40 text-slate-200 text-xs font-semibold tracking-wide transition-all shadow-sm"
                title="Call Nawaz Traders"
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{formattedPhone}</span>
              </a>

              <button
                onClick={() => handleWhatsAppInquiry()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.455 1.583 2.197.351.23.633.327.854.398.223.072.426.062.586.038.179-.026.793-.324.908-.638.116-.314.116-.583.081-.639-.034-.056-.13-.089-.274-.162z" />
                </svg>
                <span>WhatsApp Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 active:scale-95 transition-all"
                aria-label="Call Now"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#070b16] px-4 pt-4 pb-6 space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-amber-500/20 mb-3">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={42}
                height={42}
                className="rounded-full border border-amber-400"
              />
              <div>
                <p className="font-bold text-sm text-white">Nawaz Traders</p>
                <p className="text-xs text-amber-400">{brandDomain}</p>
              </div>
            </div>

            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              📦 Wire Bundles & Catalog
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              ⚡ 99.9% Pure Copper Guarantee
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              📐 Wire Gauge Selection Guide
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              📞 Contact & Factory Location
            </a>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-md shadow-emerald-600/30"
              >
                Chat on WhatsApp ({displayPhone})
              </button>
              <a
                href={`mailto:${emailAddress}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold"
              >
                ✉️ {emailAddress}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* 2. DYNAMIC HERO SECTION WITH BACKGROUND IMAGE SLIDESHOW      */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden min-h-[720px] lg:min-h-[780px] xl:min-h-[820px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ========================================================== */}
        {/* A. BACKGROUND SLIDESHOW LAYER (FULL-BLEED FULL FORM)      */}
        {/* ========================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  className={`object-cover object-center md:object-right-center transform transition-transform duration-[8000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            );
          })}

          {/* Clean, high-clarity gradients that keep the background image in FULL FORM */}
          {/* 1. Left side reading protection gradient (soft under text, completely transparent on right so full background image shines) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b16]/95 via-[#070b16]/75 via-45% to-[#070b16]/25 lg:to-transparent z-20 pointer-events-none" />

          {/* 2. Top header fade & bottom section fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/85 via-transparent via-20% to-[#070b16] z-20 pointer-events-none" />

          {/* 3. Subtle ambient copper warmth without obscuring background */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full z-20 pointer-events-none" />
        </div>

        {/* ========================================================== */}
        {/* B. SLIDESHOW SIDE ARROWS (DESKTOP)                         */}
        {/* ========================================================== */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-slate-950/80 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-slate-300 hover:text-amber-400 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-slate-950/80 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-slate-300 hover:text-amber-400 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 group"
        >
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ========================================================== */}
        {/* C. FOREGROUND HERO CONTENT                                 */}
        {/* ========================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & Hero Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>99.99% Pure Electrolytic Copper Wires & Conduits</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-medium backdrop-blur-md">
                  <span className="text-amber-400">✦</span>
                  <span>{HERO_SLIDES[currentSlide].badge}</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
                  Engineered for <span className="copper-text-gradient">Power.</span>
                  <br />
                  Crafted for <span className="electric-text-gradient">Durability.</span>
                </h1>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase pt-1">
                  {HERO_SLIDES[currentSlide].tagline}
                </p>
              </div>

              {/* Sub-description */}
              <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-sm">
                Welcome to <strong className="text-white font-semibold">Nawaz Traders</strong>, official distributor of{" "}
                <span className="text-amber-400 font-semibold">{brandDomain}</span>. Supplying certified flexible electrical wire coils, heavy industrial multi-core cable bundles, and high-impact electrical conduit pipes across Pakistan.
              </p>

              {/* Dynamic Slide Feature Pill Bar */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/25 backdrop-blur-md max-w-xl mx-auto lg:mx-0 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span>⚡</span> Slide Highlight: {HERO_SLIDES[currentSlide].highlight}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Slide {currentSlide + 1} of {HERO_SLIDES.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {HERO_SLIDES[currentSlide].specs.map((item, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-left">
                      <p className="text-[10px] text-slate-400 font-medium">{item.label}</p>
                      <p className="text-xs font-bold text-slate-200 truncate">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
                <a
                  href="#products"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-0.5 transition-all text-center"
                >
                  Explore Wire Bundles & Catalog ↓
                </a>

                <button
                  onClick={() => handleWhatsAppInquiry(HERO_SLIDES[currentSlide].title)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-600/30 active:scale-95"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.455 1.583 2.197.351.23.633.327.854.398.223.072.426.062.586.038.179-.026.793-.324.908-.638.116-.314.116-.583.081-.639-.034-.056-.13-.089-.274-.162z" />
                  </svg>
                  <span>WhatsApp Quote: {displayPhone}</span>
                </button>
              </div>

              {/* Quick direct contact strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Orders & Wholesale: <strong className="text-white">{formattedPhone}</strong>
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  ✉️ <strong className="text-slate-300">{emailAddress}</strong>
                </span>
              </div>
            </div>

            {/* Right Column: Floating Live Badges & Clear Unobstructed Background Showcase */}
            <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center space-y-6">
              {/* Floating Certified Enwire Gold Emblem */}
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-2xl shadow-amber-500/50 animate-float backdrop-blur-md">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center border-2 border-amber-400/80">
                    <Image
                      src="/images/logo.jpg"
                      alt="Enwire Official Certified Logo"
                      width={110}
                      height={110}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-slate-950/90 border border-amber-500/50 text-[10px] font-extrabold text-amber-300 tracking-wider shadow-lg backdrop-blur-md uppercase">
                  Certified Distributor
                </div>
              </div>

              {/* Floating Glassmorphic Slide Spec Card - Translucent so full background image remains prominent */}
              <div className="w-full max-w-sm rounded-2xl p-5 bg-slate-950/60 backdrop-blur-xl border border-white/10 shadow-2xl space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/90 text-[10px] font-black text-black uppercase tracking-wider">
                    {HERO_SLIDES[currentSlide].category}
                  </span>
                  <span className="text-[11px] font-mono text-amber-400 font-bold">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>

                <div>
                  <h2 className="text-base font-bold text-white leading-snug">
                    {HERO_SLIDES[currentSlide].title}
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </p>
                </div>

                {/* Available Gauges */}
                <div className="pt-1">
                  <p className="text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Available Wire Gauges:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["1.5mm²", "2.5mm²", "4.0mm²", "6.0mm²", "10mm²"].map((gauge) => (
                      <span
                        key={gauge}
                        className="px-2 py-0.5 rounded bg-slate-900/90 border border-amber-500/30 text-[11px] font-bold text-amber-300"
                      >
                        {gauge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick WhatsApp Inquiry for this item */}
                <button
                  onClick={() => handleWhatsAppInquiry(`Inquiry about ${HERO_SLIDES[currentSlide].highlight}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500/20 hover:bg-amber-500 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Quick Inquiry for {HERO_SLIDES[currentSlide].highlight}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Slide Preview Quick Switchers */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/70 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Switch BG:</span>
                <div className="flex gap-1.5">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      className={`relative w-8 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                        currentSlide === idx
                          ? "border-amber-400 scale-110 shadow-md shadow-amber-500/50 ring-1 ring-amber-400"
                          : "border-slate-700/80 hover:border-amber-500/50 opacity-60 hover:opacity-100"
                      }`}
                      title={slide.highlight}
                      aria-label={`Switch to ${slide.highlight}`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* D. BOTTOM SLIDESHOW PROGRESS & TAB BAR                   */}
          {/* ======================================================== */}
          <div className="mt-12 pt-6 border-t border-amber-500/20">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`text-left p-2.5 sm:p-3 rounded-xl transition-all duration-300 flex items-center gap-3 backdrop-blur-md ${
                      isActive
                        ? "bg-slate-900/90 border border-amber-500/80 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/40"
                        : "bg-slate-950/60 border border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Thumbnail Preview */}
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-amber-500/30">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] font-mono font-bold text-amber-400">
                          0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        )}
                      </div>
                      <p className="text-xs font-bold text-white truncate">{slide.highlight}</p>
                      <p className="text-[10px] text-slate-400 truncate">{slide.category}</p>

                      {/* Active slide animated progress line */}
                      {isActive && (
                        <div className="w-full h-0.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-[5500ms] ease-linear w-full"
                          />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. KEY METRICS STRIP                                         */}
      {/* ============================================================ */}
      <section className="py-6 border-y border-amber-500/20 bg-[#090e1c]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black copper-text-gradient">99.99%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Pure Copper Core</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">90 Meters</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Full Bundle Guaranteed</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-sky-400">1100V</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">High Voltage Insulation</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">0322 4172149</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Fast Delivery Direct</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PRODUCT CATALOG & INTERACTIVE VIEWER (Core Feature)       */}
      {/* ============================================================ */}
      <section id="products" className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase">
              ✦ Certified Electrical Range
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Wires Bundles & <span className="copper-text-gradient">Flexible Wires</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Click on any product card below to <strong className="text-amber-400 font-medium">open the full inspection lightbox</strong> and view all 4 angle/detail views, complete copper core specifications, and get instant quotes.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
              {[
                { id: "all", label: "All Products" },
                { id: "bundles", label: "Wire Bundles" },
                { id: "flexible", label: "Flexible Wires" },
                { id: "pipes", label: "Enwire Pipes & Conduits" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    activeCategory === cat.id
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/30 scale-105"
                      : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleOpenProduct(product)}
                className="group cursor-pointer rounded-2xl glass-panel overflow-hidden border border-amber-500/20 hover:border-amber-400/60 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <Image
                      src={product.primaryImage}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Badge Top Left */}
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wide border backdrop-blur-md ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>

                    {/* "Click to View 4 Angles" Notice Top Right */}
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md border border-amber-500/30 text-[10px] font-bold text-amber-300 flex items-center gap-1 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>4 Views</span>
                    </span>

                    {/* Bottom Category Tag */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {product.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Gauge Pills */}
                    <div className="pt-1">
                      <p className="text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Available Sizes / Gauges:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.gauges.slice(0, 4).map((gauge, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] font-medium text-slate-300"
                          >
                            {gauge}
                          </span>
                        ))}
                        {product.gauges.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-[10px] font-bold text-amber-400">
                            +{product.gauges.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenProduct(product);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 font-bold text-xs tracking-wide transition-all group-hover:bg-amber-500 group-hover:text-black"
                  >
                    <span>Click to Inspect & View 4 Images</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE PRODUCT LIGHTBOX MODAL (Requested 4 Images)   */}
      {/* ============================================================ */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl glass-panel border border-amber-500/40 shadow-2xl shadow-amber-500/30 bg-[#080d1d] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-amber-500/20 bg-slate-950/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                  <Image
                    src="/images/logo.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold">{brandDomain}</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-h-[82vh] overflow-y-auto">
              {/* Left Column: Image Viewer + 4 Thumbnails at bottom */}
              <div className="lg:col-span-7 space-y-4">
                {/* Main Selected Image */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                  <Image
                    src={selectedProduct.gallery[activeThumbIndex].src}
                    alt={selectedProduct.gallery[activeThumbIndex].title}
                    fill
                    className="object-cover object-center transition-all duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Image Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-xs font-bold text-amber-300">
                      View {activeThumbIndex + 1} of 4: {selectedProduct.gallery[activeThumbIndex].title}
                    </p>
                    <p className="text-[11px] text-slate-300 line-clamp-1">
                      {selectedProduct.gallery[activeThumbIndex].desc}
                    </p>
                  </div>
                </div>

                {/* THE 4 THUMBNAIL IMAGES AT THE BOTTOM (User explicit requirement) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                      <span>📸</span> Click any of the 4 photos below to switch view:
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {activeThumbIndex + 1} / 4 views
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {selectedProduct.gallery.map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveThumbIndex(idx)}
                        className={`group/thumb relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          activeThumbIndex === idx
                            ? "border-amber-400 shadow-lg shadow-amber-500/40 scale-102"
                            : "border-slate-700/80 hover:border-amber-500/50 opacity-70 hover:opacity-100"
                        }`}
                        title={thumb.title}
                      >
                        <Image
                          src={thumb.src}
                          alt={thumb.title}
                          fill
                          className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                        />
                        <div
                          className={`absolute inset-0 ${
                            activeThumbIndex === idx
                              ? "bg-amber-500/10 ring-2 ring-amber-400 inset-0"
                              : "bg-black/30"
                          }`}
                        />
                        <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] font-bold px-1 rounded text-white">
                          #{idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Specs & Quick Order */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h4 className="text-xl font-black text-white">{selectedProduct.name}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Technical Specifications Table */}
                <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3 sm:p-4 space-y-2">
                  <p className="text-xs font-extrabold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-1.5 flex items-center justify-between">
                    <span>Technical Specifications</span>
                    <span className="text-[10px] text-emerald-400 font-bold">✓ Tested</span>
                  </p>
                  <div className="space-y-1.5 text-xs">
                    {selectedProduct.specs.map((item, i) => (
                      <div key={i} className="flex justify-between items-start gap-2 py-0.5">
                        <span className="text-slate-400 text-[11px]">{item.label}</span>
                        <span className="text-slate-200 font-semibold text-right text-[11px]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Gauges */}
                <div>
                  <p className="text-xs font-bold text-slate-300 mb-1.5">Standard Coil Sizes:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.gauges.map((g, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons inside modal */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleWhatsAppInquiry(selectedProduct.name)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.455 1.583 2.197.351.23.633.327.854.398.223.072.426.062.586.038.179-.026.793-.324.908-.638.116-.314.116-.583.081-.639-.034-.056-.13-.089-.274-.162z" />
                    </svg>
                    <span>Order / Inquire on WhatsApp</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold text-center"
                    >
                      <span>📞 Call: 0322 4172149</span>
                    </a>
                    <a
                      href={`mailto:${emailAddress}?subject=Inquiry for ${encodeURIComponent(selectedProduct.name)}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold text-center"
                    >
                      <span>✉️ Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. WHY CHOOSE NAWAZ TRADERS & ENWIRE CABLES                  */}
      {/* ============================================================ */}
      <section id="why-us" className="py-16 lg:py-24 bg-[#080d1a] border-t border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-amber-500/30 p-3">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/flat-twin-wires.jpg"
                    alt="Pure Copper Electrical Wires"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-amber-500/30">
                    <p className="text-amber-400 font-extrabold text-sm">99.99% Electrolytic Copper</p>
                    <p className="text-slate-300 text-xs">Maximum conductivity, minimum electric bill heating losses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                Industrial Purity Standard
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Why Electrical Contractors Choose{" "}
                <span className="copper-text-gradient">{brandName}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Counterfeit and adulterated wires can cause electrical fires and skyrocketing electricity bills due to resistance. At <strong className="text-white">Nawaz Traders</strong>, every meter of <strong className="text-amber-400">Enwire Cables & Pipes</strong> is manufactured using pure electrolytic copper and virgin flame-retardant PVC compounds.
              </p>

              {/* 4 Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg mb-2">
                    ⚡
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Zero Resistance Loss</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pure copper reduces current resistance to near zero, keeping inverters and heavy motors running cold.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg mb-2">
                    🔥
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Self-Extinguishing PVC</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Will never sustain an open flame. Flame-retardant coating auto-extinguishes instantly if overloaded.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-lg mb-2">
                    📏
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Full 90-Meter Guaranteed</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    No deceptive short-measure coils. Every Nawaz Traders bundle is guaranteed full standard length.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-2">
                    🚚
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Wholesale & Project Supply</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Special commercial discounts for builders, industrial plants, electrical hardware stores, and contractors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. WIRE SELECTOR / CALCULATOR FOR CONTRACTORS                */}
      {/* ============================================================ */}
      <section id="calculator" className="py-16 lg:py-24 relative bg-[#070b16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              ✦ Contractor Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Quick Wire Gauge & <span className="copper-text-gradient">Bundle Estimator</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Not sure which wire size to choose for your load? Select your equipment below for the recommended Enwire gauge:
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-panel-elevated rounded-2xl border border-amber-500/30 p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Selector Tabs */}
              <div className="md:col-span-5 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Select Appliance / Application:
                </p>
                {WIRE_CALCULATOR_PRESETS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCalcIndex(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                      calcIndex === idx
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/30 font-extrabold translate-x-1"
                        : "bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 border border-slate-800"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs opacity-75">→</span>
                  </button>
                ))}
              </div>

              {/* Result Card */}
              <div className="md:col-span-7 bg-[#090e1c] rounded-xl border border-amber-500/30 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      Recommended Spec
                    </span>
                    <h4 className="text-lg font-black text-white">
                      {WIRE_CALCULATOR_PRESETS[calcIndex].name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                    Safe Standard
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 text-[11px]">Recommended Wire Bundle:</p>
                    <p className="text-base font-black text-amber-400">
                      {WIRE_CALCULATOR_PRESETS[calcIndex].recommended}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="text-slate-400 text-[11px]">Recommended Breaker:</p>
                      <p className="font-bold text-white">{WIRE_CALCULATOR_PRESETS[calcIndex].breaker}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="text-slate-400 text-[11px]">Typical Load:</p>
                      <p className="font-bold text-white">{WIRE_CALCULATOR_PRESETS[calcIndex].power}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs italic bg-amber-500/5 p-3 rounded-lg border border-amber-500/15">
                    💡 <strong>Safety Note:</strong> {WIRE_CALCULATOR_PRESETS[calcIndex].note}
                  </p>
                </div>

                <button
                  onClick={() =>
                    handleWhatsAppInquiry(
                      `Wire for ${WIRE_CALCULATOR_PRESETS[calcIndex].name} (${WIRE_CALCULATOR_PRESETS[calcIndex].recommended})`
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/30 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.455 1.583 2.197.351.23.633.327.854.398.223.072.426.062.586.038.179-.026.793-.324.908-.638.116-.314.116-.583.081-.639-.034-.056-.13-.089-.274-.162z" />
                  </svg>
                  <span>Inquire This Exact Wire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CONTACT & BULK INQUIRY SECTION                            */}
      {/* ============================================================ */}
      <section id="contact" className="py-16 lg:py-24 bg-[#060a15] border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 shadow-lg shadow-amber-500/30">
                  <Image
                    src="/images/logo.jpg"
                    alt="Nawaz Traders Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Nawaz Traders</h3>
                  <p className="text-xs text-amber-400 font-bold">{brandDomain}</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Order Your Wire Bundles <span className="copper-text-gradient">Directly</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Contact our sales desk for wholesale discounts, retail bundles, project quotations, and nationwide dispatch.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3 pt-2">
                {/* Phone Card */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-lg group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    📞
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Direct Phone & WhatsApp</p>
                    <p className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {displayPhone}
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-lg group-hover:bg-sky-500 group-hover:text-black transition-colors">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Official Gmail</p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-sky-400 transition-colors break-all">
                      {emailAddress}
                    </p>
                  </div>
                </a>

                {/* Domain Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Brand & Product Domain</p>
                    <p className="text-sm font-bold text-amber-300">
                      {brandDomain}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Order Generator Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl glass-panel-elevated border border-amber-500/30 p-6 sm:p-8 shadow-xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Instant WhatsApp Order / Quote</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in your requirement to instantly generate a ready-to-send WhatsApp order to {displayPhone}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Name / Business</label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Tariq Electric / Contractor"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-slate-800 focus:border-amber-400 focus:outline-none text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Mobile Number</label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="e.g. 0300-1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-slate-800 focus:border-amber-400 focus:outline-none text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Wire / Cable Type</label>
                      <select
                        value={inquiryWire}
                        onChange={(e) => setInquiryWire(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-slate-800 focus:border-amber-400 focus:outline-none text-xs text-white"
                      >
                        <option>Enwire Single-Core Flexible Building Wires</option>
                        <option>Heavy-Duty Multi-Core Armored Cable Bundles</option>
                        <option>Flat Twin & Earth Flexible Wiring Rolls</option>
                        <option>Enwire PVC Conduit Pipes & Corrugated Bundles</option>
                        <option>Multi-Strand Flexible Control & Panel Wires</option>
                        <option>Submersible Pump 3-Core Waterproof Cables</option>
                        <option>Mixed Assortment / Custom Project Order</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Required Quantity / Bundles</label>
                      <input
                        type="text"
                        value={inquiryQuantity}
                        onChange={(e) => setInquiryQuantity(e.target.value)}
                        placeholder="e.g. 10 Bundles, or 500 Meters"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-slate-800 focus:border-amber-400 focus:outline-none text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Additional Notes / Delivery City</label>
                    <textarea
                      rows={3}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      placeholder="e.g. Require 5 coils of red 2.5mm and 5 coils of blue 2.5mm dispatched to Lahore..."
                      className="w-full px-3.5 py-2 rounded-lg bg-[#070b16] border border-slate-800 focus:border-amber-400 focus:outline-none text-xs text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.455 1.583 2.197.351.23.633.327.854.398.223.072.426.062.586.038.179-.026.793-.324.908-.638.116-.314.116-.583.081-.639-.034-.056-.13-.089-.274-.162z" />
                    </svg>
                    <span>Send Order Inquiry via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. FOOTER WITH ROUND LOGO                                    */}
      {/* ============================================================ */}
      <footer className="py-12 bg-[#05070e] border-t border-amber-500/20 text-slate-400 text-xs pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/80 p-0.5 shadow-md shadow-amber-500/20">
                <Image
                  src="/images/logo.jpg"
                  alt="Nawaz Traders Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-extrabold text-base text-white tracking-wide">
                  NAWAZ TRADERS
                </p>
                <p className="text-amber-400 text-[11px] font-semibold">{brandDomain}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Wire Bundles
              </a>
              <a href="#why-us" className="hover:text-amber-400 transition-colors">
                Copper Quality
              </a>
              <a href="#calculator" className="hover:text-amber-400 transition-colors">
                Gauge Guide
              </a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">
                Contact
              </a>
            </div>

            <div className="text-center sm:text-right space-y-1">
              <p className="text-slate-300">
                Phone: <strong className="text-amber-400">{formattedPhone}</strong>
              </p>
              <p className="text-slate-400 text-[11px]">{emailAddress}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© 2026 Nawaz Traders. All rights reserved. Enwire Cables & Pipes.</p>
            <p className="text-amber-400/80">99.9% Pure Copper • Certified Flexible Wires & Conduit Bundles</p>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* 10. STICKY BOTTOM ACTION BAR ON MOBILE (100% Eye Catching)   */}
      {/* ============================================================ */}
      <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b16]/95 backdrop-blur-lg border-t border-amber-500/30 p-2.5 px-3 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call {formattedPhone}</span>
        </a>

        <button
          onClick={() => handleWhatsAppInquiry()}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/30 active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 1.455 1.583 2.197.351.23.633.327.854.398.223.072.426.062.586.038.179-.026.793-.324.908-.638.116-.314.116-.583.081-.639-.034-.056-.13-.089-.274-.162z" />
          </svg>
          <span>WhatsApp Chat</span>
        </button>
      </aside>
    </div>
  );
}
