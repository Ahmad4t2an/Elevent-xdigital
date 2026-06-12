import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaPlay,
  FaImage,
  FaVideo,
  FaGlobe,
} from "react-icons/fa";

/* ─── WEB PROJECTS ─────────────────────────────────────── */
const webProjects = [
  {
    id: "web-1",
    title: "Prime Logistics",
    desc: "A modern logistics & transportation company website with real-time tracking UI, service showcases, and a sleek fleet presentation.",
    tag: "Logistics / Transportation",
    link: "https://prime-logistics-prime-logistics.vercel.app/",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80",
  },
  {
    id: "web-2",
    title: "HKB Consultancy",
    desc: "Professional business consultancy website highlighting services, team expertise, and client success stories.",
    tag: "Business Consultancy",
    link: "https://hkbtradersofficial-star.github.io/hkbconsultancy/#home",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
  },
  {
    id: "web-3",
    title: "Upwise Consulting",
    desc: "Business advisory & consulting platform with clean, conversion-focused design, service breakdowns, and lead generation forms.",
    tag: "Consulting / Advisory",
    link: "https://upwise-consulting.vercel.app/",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
  },
  {
    id: "web-4",
    title: "HR Pharmaceuticals",
    desc: "Full-featured pharmaceutical management & admin system with inventory, order tracking, and reporting dashboard.",
    tag: "Management System",
    link: "https://hr-pharmaceuticals.vercel.app/",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=700&q=80",
  },
  {
    id: "web-5",
    title: "Softzilla",
    desc: "Modern software & tech company website showcasing services, products, and solutions with a sleek, professional tech-forward design.",
    tag: "Software / Tech",
    link: "https://ahmadali2003an-max.github.io/softzilaa-website/",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
  },
];

/* ─── GRAPHIC DESIGN PROJECTS ──────────────────────────── */
interface DesignProject {
  id: string;
  title: string;
  desc: string;
  tag: string;
  images: string[];
}

const designProjects: DesignProject[] = [
  {
    id: "design-1",
    title: "Brand Identity Pack",
    desc: "Complete brand identity including logo, color palette, typography, and brand guidelines.",
    tag: "Branding",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=80",
    ],
  },
  {
    id: "design-2",
    title: "Social Media Kit",
    desc: "Professionally designed post templates, story covers, highlights, and profile assets for social platforms.",
    tag: "Social Media",
    images: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=80",
      "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?w=900&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
    ],
  },
  {
    id: "design-3",
    title: "Marketing Collateral",
    desc: "Brochures, flyers, banners, and print-ready marketing materials for events and campaigns.",
    tag: "Print Design",
    images: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80",
    ],
  },
  {
    id: "design-4",
    title: "Logo & Visual Identity",
    desc: "Custom logo design with multiple variations, icon set, and brand color palette for startups and businesses.",
    tag: "Logo Design",
    images: [
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=900&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=80",
    ],
  },
];

/* ─── VIDEO PLACEHOLDERS ────────────────────────────────── */
const videoPlaceholders = [
  { id: "vid-1", title: "Brand Promo Video", tag: "Promotional" },
  { id: "vid-2", title: "Social Media Reel", tag: "Short Form" },
  { id: "vid-3", title: "Product Showcase", tag: "Commercial" },
];

/* ─── LIGHTBOX ──────────────────────────────────────────── */
interface LightboxProps {
  project: DesignProject;
  onClose: () => void;
}

function Lightbox({ project, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(0);

  const prev = useCallback(() =>
    setIdx((i) => (i - 1 + project.images.length) % project.images.length), [project]);
  const next = useCallback(() =>
    setIdx((i) => (i + 1) % project.images.length), [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
        >
          <FaTimes size={22} />
        </button>

        {/* Image */}
        <div className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10"
          style={{ aspectRatio: "16/9" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={project.images[idx]}
              alt={`${project.title} ${idx + 1}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white hover:bg-[#0066ff] transition-all duration-200 hover:scale-110"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white hover:bg-[#0066ff] transition-all duration-200 hover:scale-110"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white/80 text-xs font-medium">
            {idx + 1} / {project.images.length}
          </div>
        </div>

        {/* Info + dots */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div>
            <h3 className="text-white font-bold text-lg">{project.title}</h3>
            <p className="text-white/55 text-sm">{project.desc}</p>
          </div>
          <div className="flex gap-2 ml-6 flex-shrink-0">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === idx ? "bg-[#0066ff] scale-125" : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── SECTION HEADING ───────────────────────────────────── */
function SectionHeading({ label, title, accent }: { label: string; title: string; accent: string }) {
  return (
    <div className="mb-10">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0066ff]/30 bg-[#0066ff]/8 text-[#0066ff] text-xs font-bold tracking-widest uppercase mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        {title} <span className="text-[#0066ff]">{accent}</span>
      </h2>
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxProject, setLightboxProject] = useState<DesignProject | null>(null);

  const filters = ["All", "Web", "Design", "Video"];
  const filterLabels: Record<string, string> = {
    All: "All Work",
    Web: "Web Projects",
    Design: "Graphic Design",
    Video: "Videos",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Banner */}
        <section
          className="relative py-24 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
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
              Our Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-4"
            >
              Our <span className="text-[#0066ff]">Work</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-xl mx-auto"
            >
              Real projects. Real results. A showcase of web, design & video work across Pakistan.
            </motion.p>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="bg-background/95 border-b border-white/8 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#0066ff] text-white shadow-[0_0_18px_rgba(0,102,255,0.45)]"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {f === "Web" && <FaGlobe size={11} />}
                {f === "Design" && <FaImage size={11} />}
                {f === "Video" && <FaVideo size={11} />}
                {filterLabels[f]}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* ══ WEB PROJECTS ═══════════════════════════════ */}
          {(activeFilter === "All" || activeFilter === "Web") && (
            <section>
              <SectionHeading label="Web Development" title="Web" accent="Projects" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#0066ff]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.18)] bg-white/3"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

                    {/* Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 bg-[#0066ff] text-white text-xs font-bold rounded-full shadow-[0_0_12px_rgba(0,102,255,0.5)]">
                        {project.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                        {project.desc}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-[#0066ff] text-white text-sm font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-200 hover:scale-105 shadow-[0_0_18px_rgba(0,102,255,0.4)]"
                      >
                        <FaExternalLinkAlt size={11} /> View Live Site
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* ══ GRAPHIC DESIGN ════════════════════════════ */}
          {(activeFilter === "All" || activeFilter === "Design") && (
            <section>
              <SectionHeading label="Graphic Design" title="Design" accent="Work" />
              <p className="text-white/45 text-sm mb-8 -mt-4">
                Click any card to open the full gallery. Use arrows or keyboard ← → to browse images.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {designProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    onClick={() => setLightboxProject(project)}
                    className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#0066ff]/50 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,102,255,0.2)]"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-[#0066ff]/85 text-white text-[10px] font-bold rounded-full">
                        {project.tag}
                      </span>
                    </div>

                    {/* Image count badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 bg-black/60 border border-white/15 text-white/70 text-[10px] rounded-full flex items-center gap-1">
                        <FaImage size={8} /> {project.images.length}
                      </span>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h3 className="text-sm font-bold text-white">{project.title}</h3>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/55 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-[#0066ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.6)] mb-2">
                        <FaImage size={18} className="text-white" />
                      </div>
                      <p className="text-white text-xs font-semibold">View Gallery</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* ══ VIDEO SECTION ═════════════════════════════ */}
          {(activeFilter === "All" || activeFilter === "Video") && (
            <section>
              <SectionHeading label="Video Production" title="Video" accent="Showcase" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videoPlaceholders.map((vid, i) => (
                  <motion.div
                    key={vid.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 border-dashed flex flex-col items-center justify-center text-center p-8 gap-4 bg-white/3"
                    style={{ aspectRatio: "16/9" }}
                  >
                    {/* Glow ring */}
                    <div className="w-16 h-16 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/30 flex items-center justify-center">
                      <FaPlay size={20} className="text-[#0066ff] ml-1" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 bg-[#0066ff]/15 text-[#0066ff] text-xs font-bold rounded-full mb-2 inline-block">
                        {vid.tag}
                      </span>
                      <h3 className="text-white font-bold text-base">{vid.title}</h3>
                      <p className="text-white/35 text-xs mt-1">Video coming soon</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Upload note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl border border-[#0066ff]/20 bg-[#0066ff]/5 p-6 flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#0066ff]/15 border border-[#0066ff]/30 flex items-center justify-center flex-shrink-0">
                  <FaVideo size={18} className="text-[#0066ff]" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-white font-bold text-base">Video Portfolio — Coming Soon</h4>
                  <p className="text-white/50 text-sm mt-0.5">
                    Videos will be uploaded here. Each card supports a full video embed with title & description.
                  </p>
                </div>
                <a
                  href="https://wa.me/923414498408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex-shrink-0 px-5 py-2 bg-[#0066ff] text-white text-sm font-semibold rounded-lg hover:bg-[#0052cc] transition-colors duration-200"
                >
                  Request a Video
                </a>
              </motion.div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
