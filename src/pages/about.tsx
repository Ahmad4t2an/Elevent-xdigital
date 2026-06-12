import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaEye, FaTag, FaBolt, FaHeadset } from "react-icons/fa";

const skills = [
  { name: "Web Development", level: 90 },
  { name: "Social Media Marketing", level: 85 },
  { name: "Graphic Design", level: 80 },
  { name: "Video Editing", level: 75 },
];

const reasons = [
  { icon: FaTag, label: "Affordable Pricing", desc: "Premium quality without breaking the bank." },
  { icon: FaBolt, label: "Fast Delivery", desc: "We respect your deadlines, always." },
  { icon: FaCheckCircle, label: "Quality Work", desc: "Every pixel, post, and line of code is crafted with care." },
  { icon: FaHeadset, label: "24/7 Support", desc: "We're here whenever you need us." },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 bg-primary/5">
      {text}
    </span>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero Banner */}
        <section
          className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, transparent 60%)" }} />
          <div className="relative z-10 text-center px-4">
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
              Who We Are
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              About <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-white/55 text-sm sm:text-base max-w-xl mx-auto">
              The mind and passion behind ElevateX Digital.
            </motion.p>
          </div>
        </section>

        {/* Ahmad Ali Intro + Skills */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel text="About the Founder" />
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">
                  Meet <span className="text-primary">Ahmad Ali</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Based in Gulberg Greens, Islamabad, Ahmad Ali is a passionate solo digital marketing specialist and web developer. With a keen eye for design and a deep understanding of digital trends, Ahmad founded ElevateX Digital to help businesses thrive in the modern landscape.
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  From custom web applications to engaging social media campaigns, every project is handled with precision, creativity, and a relentless drive for perfection.
                </p>

                <div className="space-y-5">
                  {skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span className="text-primary text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary shadow-[0_0_8px_rgba(0,102,255,0.7)] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all hover:shadow-[0_0_25px_rgba(0,102,255,0.15)]">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FaRocket className="text-primary text-lg" />
                      </div>
                      <h3 className="text-lg font-bold">Our Mission</h3>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">
                      To empower businesses with cutting-edge digital solutions that drive growth, engagement, and lasting success in a competitive market.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all hover:shadow-[0_0_25px_rgba(0,102,255,0.15)]">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FaEye className="text-primary text-lg" />
                      </div>
                      <h3 className="text-lg font-bold">Our Vision</h3>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">
                      To be the leading digital agency in Pakistan, recognized for innovation, quality, and transformative results that elevate brands globally.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionLabel text="Why Us" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Why <span className="text-primary">Choose Us?</span>
              </h2>
              <div className="h-0.5 w-14 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.12)] transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <r.icon className="text-primary text-xl" />
                  </div>
                  <h4 className="font-bold text-sm mb-2 text-white">{r.label}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{r.desc}</p>
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
