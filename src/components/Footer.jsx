import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-50 border-t border-stone-200 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mobile & Tablet: Stack vertically */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Brand & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-stone-900 mb-2">ECOFAB® 2025</h3>
            <p className="text-stone-600 text-sm mb-4">75019 Paris</p>
            <div className="flex gap-4 text-2xl text-stone-700">
              <a href="#" className="hover:text-emerald-600 transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors" aria-label="TikTok">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-center md:text-left">
            {/* French Links */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide">Français</h4>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                Mode d'emploi revêtement
              </a>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                Notre catalogue
              </a>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                Conditions générales de vente
              </a>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                Politique de confidentialité
              </a>
            </div>

            {/* English Links */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-stone-900 mb-2 text-sm uppercase tracking-wide">English</h4>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                User guide for cladding bricks
              </a>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                Our Catalog
              </a>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                General conditions of sale
              </a>
              <a href="#" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors underline">
                Privacy policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-stone-200 text-center">
          <p className="text-xs text-stone-500">
            © 2025 ECOFAB. All rights reserved. | Transforming textile waste into sustainable products.
          </p>
        </div>
      </div>
    </footer>
  );
}
