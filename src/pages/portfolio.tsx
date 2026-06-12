import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt, FaChevronLeft, FaChevronRight,
  FaTimes, FaPlay, FaVideo, FaArrowLeft,
} from "react-icons/fa";

const webProjects = [
  {
    id: "web-1", title: "Prime Logistics",
    desc: "A modern logistics & transportation company website with real-time tracking UI.",
    tag: "Logistics / Transportation",
    link: "https://prime-logistics-prime-logistics.vercel.app/",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80",
  },
  {
    id: "web-2", title: "HKB Consultancy",
    desc: "Professional business consultancy website highlighting services and team expertise.",
    tag: "Business Consultancy",
    link: "https://hkbtradersofficial-star.github.io/hkbconsultancy/#home",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
  },
  {
    id: "web-3", title: "Upwise Consulting",
    desc: "Business advisory platform with clean, conversion-focused design.",
    tag: "Consulting / Advisory",
    link: "https://upwise-consulting.vercel.app/",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
  },
  {
    id: "web-4", title: "HR Pharmaceuticals",
    desc: "Full-featured pharmaceutical management system with inventory and reporting.",
    tag: "Management System",
    link: "https://hr-pharmaceuticals.vercel.app/",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=700&q=80",
  },
  {
    id: "web-5", title: "Softzilla",
    desc: "Modern software & tech company website showcasing services and solutions.",
    tag: "Software / Tech",
    link: "https://ahmadali2003an-max.github.io/softzilaa-website/",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
  },
];

const videoPlaceholders = [
  { id: "vid-1", title: "Brand Promo Video", tag: "Promotional" },
  { id: "vid-2", title: "Social Media Reel", tag: "Short Form" },
  { id: "vid-3", title: "Product Showcase", tag: "Commercial" },
];

const categoryImages: Record<string, string[]> = {
  "elaichi-cafe": [
    "BAR bq PARATHA roll.png","Bihari botti.png","Bihari Botti-1.png","Bihari Chest Piece.png",
    "Bihari Leg Piece.png","CHeese Botti.png","Cheese Kabab.png","Cheeze Botti.png",
    "Chicken Achari.png","Chicken Anda shami Burger .png","Chicken Bar bq Burger.png",
    "CHicken Bar bq Shawarna.png","Chicken bihari botti Paratha Roll.png","Chicken Kabab Burger.png",
    "Chicken Karahi Bar BQ masala.png","Chicken Karahi Black Peper.png",
    "Chicken Karahi kaba masala bar b q.png","Chicken Karahi White Madrassi.png",
    "Chicken Karahi.png","Chicken Madrasi.png","Chicken MAlai Botti Paratha Roll.png",
    "Chicken MAlai Botti Shawarma.png","Chicken Shawarma bar bq platter .png","Chicken Shawarma.png",
    "Desi Chicken Shawarma.png","ELAICHI (6).png","Green Botti .png","Green Botti.png",
    "Grilled Fish Black Peper.png","Grilled Fish Red Pepper.png","Kasturi Botti.png",
    "Kasturi Botti-1.png","MALAI BOTI.png","Malai Botti.png","Malai Chest Piece.png",
    "Malai Kabab.png","Malai Leg.png","Rashmi Kabab.png","Special Barb q Paratha Roll.png",
    "Tikka Botti.png","Tikka Botti-1.png","Tikka Chest Piece.png","Tikka Leg Piece.png",
  ].map(f => `/portfolio/Elaichi Cafe/${f}`),
  "innovista": [
    "25 Dec.jpg","AI HAJ.jpg","Agentic Ai Hackathon.jpg","Ahmad Portfolio-DESKTOP-N2O87C9.jpg",
    "Batch 1 & 2.jpg","Big News.jpg","Black Gold and White Modern Participation.jpg",
    "Black Minimalist Eid Adha Mubarak Insta.jpg","Black White Bold Minimalist Music World T.jpg",
    "Brown Modern Course Enrollment Promo P.jpg","Building fl & dig.jpg","Chand Mubarak.jpg",
    "Capacity building for working women.jpg","Collab Softwear Houses.jpg","Courses Innovista List.jpg",
    "Courses.jpg","Create (4).jpg","Dark Blue Modern We Are Closed Notificati.jpg",
    "Digital Enterpreneurship.jpg","Dream pitch Build.jpg","Full Logo.jpg",
    "Grand Celebration.jpg","GRAPHIC DESIGNER.jpg","Green and White Modern Happy Pakistan I.jpg",
    "Hacaton.jpg","IT Tech Training Courses.jpg","IUB Startup Leagues.jpg",
    "Malaika Portfolio.jpg","National & Skill.jpg","NCBA & E.jpg","Orientation.jpg",
    "PSEB.jpg","Pseb TO Innovista cholistan.jpg","Rabi ul awal.jpg","RedVista Agency.jpg",
    "Regional Finals.jpg","Rehan Portfolio.jpg","SBP Bsc BWP.jpg","Startup League Innovista.jpg",
    "Startup Leauge 2025.jpg","Startup league IUB.jpg","Teal Green Modern Medical Service Flyer (3).jpg",
    "UCP Startup Leagues.jpg","Web Development Promotion Instagram P.jpg",
  ].map(f => `/portfolio/Innovista Cholistan/${f}`),
  "logo": [
    "ChatGPT Image May 23, 2026, 05_36_02 AM.png","logo (1).jpg","logo (1).png","logo (2).png",
    "logo (3).png","logo (4).png","logo (5).png","logo (6).png","logo (7).png","logo (8).png",
    "logo (9).png","logo (10).png","logo (11).png","logo (12).png","logo (13).png","logo (14).png",
    "logo (15).png","logo (16).png","logo (17).png","logo (18).png","logo (19).png","logo (20).png",
    "logo (21).png","logo (22).png","logo (23).png","logo (24).png","logo (25).png","logo (26).png",
    "logo (27).png","logo (28).png","logo (29).png","logo (30).png","LOGOO.png",
    "Mobile logo.png","web logos  (1).png","web logos  (2).png",
  ].map(f => `/portfolio/Logo/${f}`),
  "prime-logistics": [
    "logistic.png","prime logistic (2).png","Prime logistic.png","prime.png",
  ].map(f => `/portfolio/Prime Logistics/${f}`),
  "sbs": [
    "most luxury.png","sbs 1.png","tower with image.png",
  ].map(f => `/portfolio/SBS/${f}`),
};

const categories = [
  { id: "elaichi-cafe", name: "Elaichi Cafe", desc: "Food & Restaurant Branding" },
  { id: "innovista", name: "Innovista Cholistan", desc: "Brand Identity & Marketing" },
  { id: "logo", name: "Logo Design", desc: "Logo & Visual Identity" },
  { id: "prime-logistics", name: "Prime Logistics", desc: "Logistics & Transport Branding" },
  { id: "sbs", name: "SBS", desc: "Corporate Branding" },
];

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: string[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm px-12"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white">
          <FaTimes size={22} />
        </button>
        <img src={images[index]} alt="" className="w-full max-h-[80vh] object-contain rounded-xl" loading="lazy" />
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 text-white/60 hover:text-white p-2 bg-black/50 rounded-full">
          <FaChevronLeft size={22} />
        </button>
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 text-white/60 hover:text-white p-2 bg-black/50 rounded-full">
          <FaChevronRight size={22} />
        </button>
        <p className="text-center text-white/40 text-sm mt-3">{index + 1} / {images.length}</p>
      </motion.div>
    </motion.div>
  );
}

function SectionHeading({ label, title, accent }: { label: string; title: string; accent: string }) {
  return (
    <div className="mb-10">
      <span className="text-[#0066ff] text-xs font-bold uppercase tracking-widest">{label}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
        {title} <span className="text-[#0066ff]">{accent}</span>
      </h2>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const currentImages = activeCategory ? categoryImages[activeCategory] : [];

  const onPrev = useCallback(() =>
    setLightboxIdx((i) => (i! - 1 + currentImages.length) % currentImages.length),
    [currentImages]);
  const onNext = useCallback(() =>
    setLightboxIdx((i) => (i! + 1) % currentImages.length),
    [currentImages]);

  const filters = ["All", "Web", "Design", "Video"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pb-20">
        {/* HERO */}
        <section
          className="relative py-24 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/78" />
          <div className="relative z-10 text-center px-4">
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="text-[#0066ff] text-xs font-bold tracking-widest uppercase mb-3">
              Our Portfolio
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-extrabold mb-4">
              Our <span className="text-[#0066ff]">Work</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-xl mx-auto">
              Real projects. Real results. A showcase of web, design & video work across Pakistan.
            </motion.p>
          </div>
        </section>

        {/* FILTERS */}
        {!activeCategory && (
          <div className="flex justify-center gap-2 py-8 px-4 flex-wrap border-b border-white/8">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                  ${activeFilter === f
                    ? "bg-[#0066ff] border-[#0066ff] text-white"
                    : "border-white/20 text-white/60 hover:border-[#0066ff] hover:text-white"}`}>
                {f}
              </button>
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* WEB PROJECTS */}
          {!activeCategory && (activeFilter === "All" || activeFilter === "Web") && (
            <section>
              <SectionHeading label="Web Development" title="Web" accent="Projects" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webProjects.map((project, i) => (
                  <motion.div key={project.id}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#0066ff]/40 transition-all duration-300 bg-white/3"
                    style={{ aspectRatio: "16/9" }}>
                    <img src={project.image} alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-[#0066ff] text-white text-xs font-bold rounded-full">{project.tag}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/55 text-sm mb-4 line-clamp-2">{project.desc}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-[#0066ff] text-white text-sm font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-200">
                        <FaExternalLinkAlt size={11} /> View Live Site
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* GRAPHIC DESIGN */}
          {(activeFilter === "All" || activeFilter === "Design") && (
            <section>
              <SectionHeading label="Graphic Design" title="Design" accent="Work" />
              <AnimatePresence mode="wait">
                {!activeCategory && (
                  <motion.div key="cats"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                      <motion.div key={cat.id}
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => setActiveCategory(cat.id)}
                        className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#0066ff]/50 cursor-pointer transition-all duration-300"
                        style={{ aspectRatio: "4/3" }}>
                        <img src={categoryImages[cat.id]?.[0]} alt={cat.name} loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-[#0066ff] text-xs font-semibold uppercase tracking-wider mb-1">{cat.desc}</p>
                          <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                          <p className="text-white/50 text-xs mt-1">{categoryImages[cat.id]?.length} images</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                          <span className="px-5 py-2 bg-[#0066ff] text-white text-sm font-bold rounded-full">View Gallery</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {activeCategory && (
                  <motion.div key="gallery"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <button onClick={() => { setActiveCategory(null); setLightboxIdx(null); }}
                      className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
                      <FaArrowLeft size={14} /> Back to Categories
                    </button>
                    <h2 className="text-2xl font-bold text-white mb-8">
                      {categories.find((c) => c.id === activeCategory)?.name}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {currentImages.map((img, i) => (
                        <motion.div key={i}
                          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.02 }}
                          onClick={() => setLightboxIdx(i)}
                          className="relative rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#0066ff]/50"
                          style={{ aspectRatio: "1/1" }}>
                          <img src={img} alt="" loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          )}

          {/* VIDEO */}
          {!activeCategory && (activeFilter === "All" || activeFilter === "Video") && (
            <section>
              <SectionHeading label="Video Production" title="Video" accent="Showcase" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videoPlaceholders.map((vid, i) => (
                  <motion.div key={vid.id}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 border-dashed flex flex-col items-center justify-center text-center p-8 gap-4 bg-white/3"
                    style={{ aspectRatio: "16/9" }}>
                    <div className="w-16 h-16 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/30 flex items-center justify-center">
                      <FaPlay size={20} className="text-[#0066ff] ml-1" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 bg-[#0066ff]/15 text-[#0066ff] text-xs font-bold rounded-full mb-2 inline-block">{vid.tag}</span>
                      <h3 className="text-white font-bold text-base">{vid.title}</h3>
                      <p className="text-white/35 text-xs mt-1">Video coming soon</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="mt-8 rounded-2xl border border-[#0066ff]/20 bg-[#0066ff]/5 p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066ff]/15 border border-[#0066ff]/30 flex items-center justify-center flex-shrink-0">
                  <FaVideo size={18} className="text-[#0066ff]" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-white font-bold text-base">Video Portfolio — Coming Soon</h4>
                  <p className="text-white/50 text-sm mt-0.5">Videos will be uploaded here soon.</p>
                </div>
                <a href="https://wa.me/923414498408" target="_blank" rel="noopener noreferrer"
                  className="ml-auto flex-shrink-0 px-5 py-2 bg-[#0066ff] text-white text-sm font-semibold rounded-lg hover:bg-[#0052cc] transition-colors duration-200">
                  Request a Video
                </a>
              </motion.div>
            </section>
          )}

        </div>
      </main>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox images={currentImages} index={lightboxIdx}
            onClose={() => setLightboxIdx(null)} onPrev={onPrev} onNext={onNext} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}