import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-4 bg-primary/5">
      {text}
    </span>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "Web Development", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:elevatexdigital.co@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero Banner */}
        <section
          className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, transparent 60%)" }} />
          <div className="relative z-10 text-center px-4">
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs font-bold tracking-widest uppercase mb-3">
              Reach Out
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Get In <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-white/55 text-sm sm:text-base max-w-xl mx-auto">
              Let's build something amazing together. We respond within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left — info cards */}
              <div className="space-y-4">
                {[
                  { icon: FaWhatsapp, label: "WhatsApp", value: "03414498408", href: "https://wa.me/923414498408" },
                  { icon: FaEnvelope, label: "Email", value: "elevatexdigital.co@gmail.com", href: "mailto:elevatexdigital.co@gmail.com" },
                  { icon: FaMapMarkerAlt, label: "Location", value: "Gulberg Greens, Islamabad", href: undefined },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex items-center gap-4 hover:border-primary/30 hover:shadow-[0_0_18px_rgba(0,102,255,0.12)] transition-all"
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon className="text-primary text-lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-white/40 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-white hover:text-primary transition-colors break-all">{value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-white">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-2">
                  <p className="text-xs text-white/35 font-semibold uppercase tracking-wider mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[FaFacebook, FaInstagram, FaTiktok, FaYoutube].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_14px_rgba(0,102,255,0.4)]">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl">
                  <SectionLabel text="Send a Message" />
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-6">
                    Let's <span className="text-primary">Connect</span>
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-white/50 mb-1.5">Your Name *</label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white placeholder-white/25"
                          placeholder="Ahmad Ali"
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-white/50 mb-1.5">Email Address *</label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white placeholder-white/25"
                          placeholder="ahmad@example.com"
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-white/50 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white placeholder-white/25"
                          placeholder="+92 300 0000000"
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-white/50 mb-1.5">Service Required</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white appearance-none"
                          data-testid="select-service"
                        >
                          <option>Web Development</option>
                          <option>Social Media</option>
                          <option>Graphic Design</option>
                          <option>Video Editing</option>
                          <option>Branding</option>
                          <option>SEO</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5">Your Message *</label>
                      <textarea
                        required rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white placeholder-white/25 resize-none"
                        placeholder="Tell us about your project..."
                        data-testid="textarea-message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary/85 transition-all shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.55)] hover:-translate-y-0.5"
                      data-testid="button-submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
