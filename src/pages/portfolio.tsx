import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";

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
  images: string[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
        className="relative w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white">
          <FaTimes size={22} />
        </button>
        <img src={images[index]} alt="" className="w-full max-h-[80vh] object-contain rounded-xl" />
        <div className="absolute inset-y-0 left-0 flex items-center -ml-12">
          <button onClick={onPrev} className="text-white/60 hover:text-white p-2">
            <FaChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center -mr-12">
          <button onClick={onNext} className="text-white/60 hover:text-white p-2">
            <FaChevronRight size={28} />
          </button>
        </div>
        <p className="text-center text-white/40 text-sm mt-3">{index + 1} / {images.length}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const currentImages = activeCategory ? categoryImages[activeCategory] : [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-[#0066ff] text-sm font-semibold uppercase tracking-widest">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Graphic <span className="text-[#0066ff]">Design</span> Portfolio
            </h1>
            <p className="text-white/50 mt-3 max-w-xl mx-auto">
              Click any category to explore the full project gallery.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!activeCategory && (
              <motion.div
                key="categories"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#0066ff]/50 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src={categoryImages[cat.id]?.[0]}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[#0066ff] text-xs font-semibold uppercase tracking-wider mb-1">{cat.desc}</p>
                      <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                      <p className="text-white/50 text-xs mt-1">{categoryImages[cat.id]?.length} images</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <span className="px-5 py-2 bg-[#0066ff] text-white text-sm font-bold rounded-full">
                        View Gallery
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeCategory && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              >
                <button
                  onClick={() => { setActiveCategory(null); setLightboxIdx(null); }}
                  className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                >
                  <FaArrowLeft size={14} /> Back to Categories
                </button>
                <h2 className="text-2xl font-bold text-white mb-8">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {currentImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      onClick={() => setLightboxIdx(i)}
                      className="relative rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#0066ff]/50"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            images={currentImages}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx(i => (i! - 1 + currentImages.length) % currentImages.length)}
            onNext={() => setLightboxIdx(i => (i! + 1) % currentImages.length)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}