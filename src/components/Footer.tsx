import { Link } from "wouter";
import logoSrc from "/logo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <img src={logoSrc} alt="ElevateX Digital" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-white/40 text-xs leading-relaxed mb-4">
              Premium digital marketing & web solutions. Elevating brands in Islamabad, Pakistan.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaInstagram, FaTiktok, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/30 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">Pages</h3>
            <ul className="space-y-2">
              {[["Home", "/"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["About", "/about"], ["Contact", "/contact"]].map(([name, path]) => (
                <li key={name}>
                  <Link href={path} className="text-white/40 hover:text-primary transition-colors text-xs">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "Social Media", "Graphic Design", "Video Editing", "Branding & SEO"].map((s) => (
                <li key={s} className="text-white/40 text-xs">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary mt-0.5 flex-shrink-0" size={11} />
                <span className="text-white/40 text-xs">Gulberg Greens, Islamabad</span>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-primary flex-shrink-0" size={11} />
                <a href="https://wa.me/923414498408" className="text-white/40 hover:text-primary transition-colors text-xs">03414498408</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary flex-shrink-0" size={11} />
                <a href="mailto:elevatexdigital.co@gmail.com" className="text-white/40 hover:text-primary transition-colors text-xs">elevatexdigital.co@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">&copy; 2025 ElevateX Digital. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/25">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
