import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

interface QuoteModalProps {
  service: string;
  onClose: () => void;
}

const budgetOptions = [
  "Rs. 5,000 – 15,000",
  "Rs. 15,000 – 30,000",
  "Rs. 30,000 – 60,000",
  "Rs. 60,000 – 1,00,000",
  "Rs. 1,00,000+",
  "Discuss after requirements",
];

const timelineOptions = [
  "ASAP (Rush)",
  "1 – 2 weeks",
  "2 – 4 weeks",
  "1 – 2 months",
  "2 – 3 months",
  "Flexible / No deadline",
];

export default function QuoteModal({ service, onClose }: QuoteModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.requirements.trim()) e.requirements = "Please describe your project";
    if (!form.budget) e.budget = "Please select a budget range";
    if (!form.timeline) e.timeline = "Please select a timeline";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`[Quote Request] ${service} — ${form.name}`);
    const body = encodeURIComponent(
`New Quote Request — ElevateX Digital
=====================================
Service: ${service}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Budget: ${form.budget}
Timeline: ${form.timeline}

Project Requirements:
${form.requirements}

=====================================
Sent from elevatexdigital.co`
    );

    window.location.href = `mailto:elevatexdigital.co@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const Field = ({ id, label, required = false, error, children }: {
    id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
  }) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/80">
        {label}{required && <span className="text-[#0066ff] ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );

  const inputCls = (err?: string) =>
    `w-full px-4 py-2.5 rounded-lg bg-white/5 border ${err ? "border-red-500/60" : "border-white/12"} text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#0066ff]/70 focus:bg-white/8 transition-all duration-200`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(0,102,255,0.15)] overflow-hidden"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0d0d0d] border-b border-white/8 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[#0066ff] text-xs font-bold tracking-widest uppercase">Get a Quote</p>
            <h2 className="text-white font-bold text-lg leading-tight">{service}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/12 flex items-center justify-center text-white/60 hover:text-white transition-all"
          >
            <FaTimes size={13} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="p-6 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="name" label="Your Name" required error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ahmad Ali"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls(errors.name)}
                  />
                </Field>
                <Field id="phone" label="Phone Number" required error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="03XX-XXXXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputCls(errors.phone)}
                  />
                </Field>
              </div>

              <Field id="email" label="Email Address (optional)" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputCls()}
                />
              </Field>

              <Field id="requirements" label="Project Requirements" required error={errors.requirements}>
                <textarea
                  id="requirements"
                  rows={4}
                  placeholder={`Describe what you need for ${service}. Include any specific features, pages, design preferences, reference sites, or other details...`}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  className={`${inputCls(errors.requirements)} resize-none`}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="budget" label="Budget Range" required error={errors.budget}>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={`${inputCls(errors.budget)} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select budget...</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#111]">{b}</option>
                    ))}
                  </select>
                </Field>
                <Field id="timeline" label="Timeline" required error={errors.timeline}>
                  <select
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className={`${inputCls(errors.timeline)} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select timeline...</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t} className="bg-[#111]">{t}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <p className="text-white/30 text-xs -mt-1">
                * Submitting will open your email app pre-filled with your details and send it to ElevateX Digital.
              </p>

              <button
                type="submit"
                className="mt-1 w-full py-3 rounded-xl bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_28px_rgba(0,102,255,0.55)]"
              >
                <FaPaperPlane size={13} /> Submit Quote Request
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <FaCheckCircle size={30} className="text-green-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Quote Request Sent!</h3>
              <p className="text-white/55 text-sm max-w-xs">
                Your email client has opened with all the details. Once you send it, Ahmad Ali will get back to you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#0066ff] text-white font-semibold text-sm hover:bg-[#0052cc] transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
