import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { FaCode, FaHashtag, FaPaintBrush, FaVideo, FaBullseye, FaSearch, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  image: string;
  startingFrom: string;
  packages: { label: string; price: string }[];
  features: string[];
}

const services: Service[] = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "Custom, high-performance websites and web apps built with modern technologies. From landing pages to full e-commerce stores — fast, responsive, and conversion-focused.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=700&q=80",
    startingFrom: "Rs. 15,000",
    packages: [
      { label: "Landing Page", price: "Rs. 15,000 – 25,000" },
      { label: "Business Website", price: "Rs. 25,000 – 50,000" },
      { label: "E-Commerce Store", price: "Rs. 50,000 – 1,00,000" },
    ],
    features: [
      "Fully Responsive Design",
      "SEO-Ready Structure",
      "Contact / Lead Forms",
      "Custom Animations",
      "Free Hosting Setup",
      "1 Month Free Support",
    ],
  },
  {
    icon: FaHashtag,
    title: "Social Media Management",
    desc: "Strategic content creation, scheduling, and community management across Instagram, Facebook, TikTok, and more. We grow your audience and turn followers into loyal customers.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=700&q=80",
    startingFrom: "Rs. 8,000/mo",
    packages: [
      { label: "Basic (3 posts/week)", price: "Rs. 8,000/month" },
      { label: "Standard (daily + stories)", price: "Rs. 15,000/month" },
      { label: "Premium (full + paid ads)", price: "Rs. 25,000/month" },
    ],
    features: [
      "Custom Post Designs",
      "Content Calendar",
      "Community Engagement",
      "Story / Reel Creation",
      "Monthly Analytics Report",
      "Hashtag Research",
    ],
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Designing",
    desc: "Eye-catching visuals, social media posts, flyers, banners, and branding materials that make your business stand out. Professional design that speaks before you say a word.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
    startingFrom: "Rs. 3,000",
    packages: [
      { label: "Logo Design", price: "Rs. 3,000 – 8,000" },
      { label: "Social Media Kit", price: "Rs. 5,000 – 12,000" },
      { label: "Full Branding Pack", price: "Rs. 15,000 – 30,000" },
    ],
    features: [
      "Multiple Revisions",
      "Source Files Included",
      "Print-Ready Files",
      "Social Media Sizes",
      "Fast Delivery",
      "100% Original Design",
    ],
  },
  {
    icon: FaVideo,
    title: "Video Editing",
    desc: "Cinematic edits, reels, promotional videos, and YouTube content tailored to your brand. We transform raw footage into polished, engaging video content that drives results.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=80",
    startingFrom: "Rs. 3,000",
    packages: [
      { label: "Short Reel (30–60s)", price: "Rs. 3,000 – 8,000" },
      { label: "Promo Video (1–3 min)", price: "Rs. 8,000 – 20,000" },
      { label: "YouTube Long-form", price: "Rs. 15,000 – 35,000" },
    ],
    features: [
      "Color Grading",
      "Motion Graphics & Text",
      "Background Music",
      "Subtitles / Captions",
      "Fast Turnaround",
      "Multiple Format Export",
    ],
  },
  {
    icon: FaBullseye,
    title: "Branding & Identity",
    desc: "A complete brand identity — logo, color palette, typography, and brand guidelines — that gives your business a consistent, memorable, and professional presence across all channels.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&q=80",
    startingFrom: "Rs. 10,000",
    packages: [
      { label: "Basic Branding", price: "Rs. 10,000 – 20,000" },
      { label: "Complete Identity", price: "Rs. 25,000 – 50,000" },
      { label: "Enterprise Brand", price: "Rs. 50,000+" },
    ],
    features: [
      "Logo + Variations",
      "Brand Color Palette",
      "Typography System",
      "Brand Style Guide",
      "Business Card Design",
      "Social Media Templates",
    ],
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    desc: "On-page and off-page SEO strategies that push your website to the top of Google. More visibility means more traffic, more leads, and more revenue for your business.",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=700&q=80",
    startingFrom: "Rs. 10,000/mo",
    packages: [
      { label: "Starter", price: "Rs. 10,000/month" },
      { label: "Growth", price: "Rs. 20,000/month" },
      { label: "Enterprise", price: "Rs. 35,000/month" },
    ],
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO Audit",
      "Link Building",
      "Google Analytics Setup",
      "Monthly Ranking Report",
    ],
  },
];

export default function Services() {
  const [activeQuote, setActiveQuote] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <AnimatePresence>
        {activeQuote && (
          <QuoteModal service={activeQuote} onClose={() => setActiveQuote(null)} />
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Banner */}
        <section
          className="relative py-24 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/78" />
          <div className="relative z-10 text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#0066ff] text-xs font-bold tracking-widest uppercase mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-4"
            >
              Our <span className="text-[#0066ff]">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-xl mx-auto"
            >
              Comprehensive digital solutions to elevate your brand and drive real results.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#0066ff]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.18)] flex flex-col bg-white/3"
                >
                  {/* Background image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
                    <div className="absolute bottom-4 left-5 w-12 h-12 rounded-lg bg-[#0066ff]/90 flex items-center justify-center shadow-[0_0_15px_rgba(0,102,255,0.6)]">
                      <service.icon className="text-white text-xl" />
                    </div>
                    {/* Starting from badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-[#0066ff]/30 text-[#0066ff] text-xs font-bold">
                      From {service.startingFrom}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
                    </div>

                    {/* Packages */}
                    <div className="space-y-1.5">
                      <p className="text-[#0066ff] text-xs font-bold tracking-widest uppercase">Packages</p>
                      {service.packages.map((pkg) => (
                        <div key={pkg.label} className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white/4 border border-white/6">
                          <span className="text-white/70">{pkg.label}</span>
                          <span className="text-white font-semibold">{pkg.price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-[#0066ff] text-xs font-bold tracking-widest uppercase mb-2">Includes</p>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-white/60 text-xs">
                            <FaCheck size={9} className="text-[#0066ff] flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Get Quote button */}
                    <button
                      onClick={() => setActiveQuote(service.title)}
                      className="mt-auto w-full py-2.5 rounded-xl bg-[#0066ff]/10 hover:bg-[#0066ff] border border-[#0066ff]/30 hover:border-[#0066ff] text-[#0066ff] hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Get a Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
