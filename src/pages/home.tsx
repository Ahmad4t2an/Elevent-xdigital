import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCode, FaHashtag, FaPaintBrush, FaVideo, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

/* ── Typewriter ─────────────────────────────────── */
function Typewriter({ text, delay = 70 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => { setDisplayed(p => p + text[idx]); setIdx(i => i + 1); }, delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setDisplayed(""); setIdx(0); }, 3200);
      return () => clearTimeout(t);
    }
  }, [idx, delay, text]);

  return <span>{displayed}<span className="animate-pulse text-primary">|</span></span>;
}

/* ── Counter ────────────────────────────────────── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return { count, ref };
}

function StatItem({ label, value, suffix = "+" }: { label: string; value: number; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{count}{suffix}</div>
      <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

/* ── Section Heading ─────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 bg-primary/5">
      {text}
    </span>
  );
}

/* ── Service card images ─────────────────────────── */
const serviceCards = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "Custom, responsive websites built to convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80",
  },
  {
    icon: FaHashtag,
    title: "Social Media",
    desc: "Strategic growth and management across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    desc: "Eye-catching visuals that communicate your brand's essence.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    icon: FaVideo,
    title: "Video Editing",
    desc: "Professional video production for marketing and engagement.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
];

/* ── Our Work preview images ─────────────────────── */
const workPreviews = [
  {
    title: "Prime Logistics",
    cat: "Web",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80",
    link: "https://prime-logistics-prime-logistics.vercel.app/",
  },
  {
    title: "HKB Consultancy",
    cat: "Web",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    link: "https://hkbtradersofficial-star.github.io/hkbconsultancy/#home",
  },
  {
    title: "Upwise Consulting",
    cat: "Web",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
    link: "https://upwise-consulting.vercel.app/",
  },
  {
    title: "HR Pharmaceuticals",
    cat: "Web",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=700&q=80",
    link: "https://hr-pharmaceuticals.vercel.app/",
  },
  {
    title: "Softzilla",
    cat: "Web",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
    link: "https://ahmadali2003an-max.github.io/softzilaa-website/",
  },
];

/* ═══════════════════════════════════════════════════ */
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Canvas particles */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();

    const count = Math.min(60, Math.floor(canvas.width / 20));
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,102,255,0.6)"; ctx.fill();
        for (let j = i + 1; j < count; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,102,255,${0.18 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ──────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* BG image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1800&q=80")' }}
          />
          <div className="absolute inset-0 z-0 bg-black/70" />
          <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />

          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto py-24">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full border border-primary/40 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-5 bg-primary/10 shadow-[0_0_15px_rgba(0,102,255,0.25)]"
            >
              Welcome to ElevateX Digital
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-5"
              style={{ minHeight: "3em" }}
            >
              <Typewriter text="Elevate Your Brand to the Next Level" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg text-white/60 mb-8 max-w-xl mx-auto"
            >
              Premium Digital Marketing &amp; Web Solutions — Islamabad, Pakistan
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
            >
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-primary text-white text-sm font-bold hover:bg-primary/85 transition-all shadow-[0_0_20px_rgba(0,102,255,0.45)] hover:shadow-[0_0_30px_rgba(0,102,255,0.65)] flex items-center justify-center gap-2"
                data-testid="link-explore-services"
              >
                Explore Services <FaArrowRight size={13} />
              </Link>
              <a
                href="https://wa.me/923414498408"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-white/8 border border-white/15 text-white text-sm font-bold hover:bg-white/15 transition-all flex items-center justify-center gap-2"
                data-testid="link-whatsapp-hero"
              >
                <FaWhatsapp className="text-green-400" size={15} /> Chat With Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex justify-center gap-4"
            >
              {[FaFacebook, FaInstagram, FaTiktok, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_14px_rgba(0,102,255,0.5)] transition-all hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* scroll arrow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-primary rounded-full" />
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────────── */}
        <section className="py-12 bg-black/50 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatItem label="Projects" value={50} />
              <StatItem label="Clients" value={30} />
              <StatItem label="Years" value={3} />
              <StatItem label="Support" value={24} suffix="/7" />
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionLabel text="What We Offer" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                What We <span className="text-primary">Do</span>
              </h2>
              <div className="h-0.5 w-14 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(0,102,255,0.5)]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {serviceCards.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] hover:-translate-y-1"
                  style={{ minHeight: 260 }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: 260 }}>
                    <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(0,102,255,0.5)]">
                      <s.icon className="text-white text-base" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-primary text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_12px_rgba(0,102,255,0.15)]"
              >
                View All Services <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── OUR WORK ──────────────────────────── */}
        <section className="py-20 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionLabel text="Portfolio" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Our <span className="text-primary">Work</span>
              </h2>
              <div className="h-0.5 w-14 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(0,102,255,0.5)]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {workPreviews.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,102,255,0.2)]"
                  style={{ aspectRatio: "16/10" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-primary text-white text-xs font-bold rounded-full">{p.cat}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px]">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-md hover:scale-105 transition-transform shadow-[0_0_18px_rgba(0,102,255,0.55)]"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-primary text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_12px_rgba(0,102,255,0.15)]"
              >
                View All Projects <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionLabel text="Testimonials" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Client <span className="text-primary">Success</span>
              </h2>
              <div className="h-0.5 w-14 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(0,102,255,0.5)]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "Usman Tariq", role: "CEO, Urban Wear", review: "ElevateX completely transformed our online presence. Sales doubled within 3 months of the new website launch." },
                { name: "Fatima Ali", role: "Founder, Bloom Bakery", review: "Their social media management is top-notch. The visuals they create perfectly capture our brand's vibe." },
                { name: "Zain Ahmed", role: "Director, TechFlow", review: "Professional, responsive, and incredibly talented. Ahmad delivered our agency site ahead of schedule." },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative hover:shadow-[0_0_20px_rgba(0,102,255,0.12)] transition-all"
                >
                  <span className="text-5xl text-primary/30 absolute top-3 right-5 font-serif leading-none">"</span>
                  <p className="text-white/60 text-sm leading-relaxed italic mb-5 relative z-10">{t.review}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────── */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")' }}
          />
          <div className="absolute inset-0 z-0 bg-black/80" />
          <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.15) 0%, transparent 60%)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <SectionLabel text="Let's Work Together" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Ready to Grow Your <span className="text-primary">Business?</span>
            </h2>
            <p className="text-white/55 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Let's build something extraordinary together. Get a free consultation from Ahmad Ali — no obligation, just results.
            </p>
            <a
              href="https://wa.me/923414498408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-md bg-primary text-white font-bold text-sm hover:bg-primary/85 transition-all shadow-[0_0_30px_rgba(0,102,255,0.45)] hover:shadow-[0_0_45px_rgba(0,102,255,0.65)] hover:-translate-y-0.5"
              data-testid="link-cta-whatsapp"
            >
              <FaWhatsapp size={18} /> Let's Talk on WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
