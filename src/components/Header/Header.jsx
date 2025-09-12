import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Button from "../Button";
import "./Header.css";

const Header = ({
  logo = "Monito",
  navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Category", href: "#category" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cartCount = 0,
  onSearch,
  onCartClick,
  onProfileClick,
  onJoinClick,
  className = "",
  ...props
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClasses = ["header", className].filter(Boolean).join(" ");

  return (
    <header className={headerClasses} {...props}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <a href="#home" className="logo-link">
            {logo}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <ul className="nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="header-search">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search something here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          <button
            className="action-btn"
            onClick={onCartClick}
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button
            className="action-btn"
            onClick={onProfileClick}
            aria-label="User Profile"
          >
            <User size={24} />
          </button>

          <Button
            variant="solid"
            size="medium"
            onClick={onJoinClick}
            className="join-btn"
          >
            Join the community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <nav className="mobile-nav-content">
            <ul className="mobile-nav-list">
              {navigationItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
