import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Add sticky class when scrolled down more than 10px
      setIsSticky(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Header Wrapper */}
      <header
        className={`w-full flex justify-center bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
        style={{
          backgroundColor: isSticky
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: isSticky ? "blur(12px)" : "blur(8px)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between  h-16 px-6">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-serif font-light text-gray-900 tracking-wide"
            >
              FashionShop
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Desktop navigation"
          >
            <div className="relative group">
              <button
                className="text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900 transition"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Products
                <svg
                  className="inline-block ml-1 w-2.5 h-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link
              to="/men"
              className="text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900 transition"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900 transition"
            >
              Women
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button
              className="bg-gray-900 text-white px-8 py-2.5 text-sm rounded-md hover:bg-gray-800 transition-all duration-200"
              style={{
                padding: "0.625rem 2rem",
              }}
            >
              Sign In
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition"
              aria-label="Shopping cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden fixed inset-0 z-50 bg-white ${
              isSticky ? "top-0" : "top-16"
            }`}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200">
                <h2
                  id="mobile-menu-title"
                  className="text-xl font-serif font-medium text-gray-900"
                >
                  Menu
                </h2>
                <button
                  className="p-2 text-gray-600 hover:text-gray-900 transition"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-4">
                  <button
                    className="w-full text-left text-sm font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900 transition py-2"
                    onClick={closeMobileMenu}
                  >
                    Products
                  </button>
                  <Link
                    to="/men"
                    className="block text-sm font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900 transition py-2"
                    onClick={closeMobileMenu}
                  >
                    Men
                  </Link>
                  <Link
                    to="/women"
                    className="block text-sm font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900 transition py-2"
                    onClick={closeMobileMenu}
                  >
                    Women
                  </Link>
                </div>

                {/* Mobile Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <button
                    className="w-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium rounded-md hover:bg-gray-800 transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </button>
                  <button
                    className="w-full flex items-center justify-center gap-2 p-3 text-gray-600 hover:text-gray-900 transition"
                    onClick={closeMobileMenu}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span>Shopping Cart</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
