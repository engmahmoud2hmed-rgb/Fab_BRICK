import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import LogoutAnimation from "./LogoutAnimation";
import logoImage from "../../IMG2/logo.jpg";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogoutAnimation, setShowLogoutAnimation] = useState(false);

  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    setShowLogoutAnimation(true);
    closeMobileMenu();

    // Wait for animation before logging out
    setTimeout(async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        console.error("Error signing out:", error);
      } finally {
        setShowLogoutAnimation(false);
      }
    }, 2000);
  };

  const navLinkClass = "relative text-sm font-medium tracking-wide hover:text-emerald-700 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-emerald-600 after:transition-all hover:after:w-full";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Logout Animation */}
      <LogoutAnimation show={showLogoutAnimation} />

      {/* Spinning Animation Keyframes */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .logo-spin {
          animation: spin 3s linear infinite;
        }
        .logo-spin:hover {
          animation: spin 1s linear infinite;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white/90 backdrop-blur-sm py-4"
          }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50 relative" onClick={closeMobileMenu}>
            <img
              src={logoImage}
              alt="ECOFAB Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover logo-spin shadow-md"
            />
            <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-stone-900">
              Ecofab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 nav-font text-stone-700">
            <li><Link to="/" className={navLinkClass}>HOME</Link></li>
            <li><Link to="/projects" className={navLinkClass}>PROJECTS</Link></li>
            <li><Link to="/about-us" className={navLinkClass}>ABOUT US</Link></li>
            <li><Link to="/partner" className={navLinkClass}>PARTNER</Link></li>
            <li><Link to="/samples" className={navLinkClass}>SAMPLES</Link></li>
            <li><Link to="/shop" className={navLinkClass}>SHOP</Link></li>
            <li><Link to="/contact" className={navLinkClass}>CONTACT</Link></li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3 text-xs md:text-sm font-bold">
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="hidden lg:block text-stone-500 font-normal">Hi, {user.email?.split('@')[0]}</span>
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition-all uppercase text-xs tracking-wider"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-5 py-2 text-stone-700 hover:text-emerald-700 transition-colors"
                  >
                    LOGIN
                  </Link>
                  <Link
                    to="/signup"
                    className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200"
                  >
                    SIGNUP
                  </Link>
                </>
              )}
            </div>

            {/* Cart Icon */}
            {user && (
              <button
                onClick={() => dispatch(toggleCart())}
                className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors z-50"
                aria-label="Cart"
              >
                <i className="fa-solid fa-bag-shopping text-xl text-stone-700"></i>
                {itemsCount > 0 && (
                  <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {itemsCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-stone-700 z-50 relative"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-20">
          <ul className="flex flex-col gap-1 p-6">
            <li>
              <Link
                to="/"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/partner"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                PARTNER
              </Link>
            </li>
            <li>
              <Link
                to="/samples"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                SAMPLES
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-3 px-4 text-lg font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile Auth Section */}
          <div className="mt-auto p-6 border-t border-stone-200">
            {user ? (
              <div className="space-y-3">
                <p className="text-stone-600 text-sm">Hi, {user.email?.split('@')[0]}</p>
                <button
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                  className="w-full py-3 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition-all uppercase text-sm tracking-wider font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="block w-full py-3 text-center border border-stone-300 rounded-full text-stone-700 hover:bg-stone-100 transition-colors font-bold uppercase text-sm"
                  onClick={closeMobileMenu}
                >
                  LOGIN
                </Link>
                <Link
                  to="/signup"
                  className="block w-full py-3 text-center bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors font-bold uppercase text-sm"
                  onClick={closeMobileMenu}
                >
                  SIGNUP
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
