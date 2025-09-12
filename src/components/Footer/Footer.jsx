import React, { useState } from "react";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Button from "../Button";
import "./Footer.css";

const Footer = ({
  newsletterTitle = "Subscribe to our newsletter",
  newsletterDescription = "Stay updated with our latest products and offers",
  navigationSections = [
    {
      title: "About",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Features", href: "#features" },
        { label: "News & Blog", href: "#news" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "How We Work", href: "#how-we-work" },
        { label: "Capital", href: "#capital" },
        { label: "Security", href: "#security" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "#faqs" },
        { label: "Support Center", href: "#support" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ],
  socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Youtube, href: "#youtube", label: "YouTube" },
  ],
  copyrightText = "© 2024 Monito. All rights reserved.",
  legalLinks = [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
  onNewsletterSubmit,
  className = "",
  ...props
}) => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (onNewsletterSubmit) {
      onNewsletterSubmit(email);
    }
    setEmail("");
  };

  const footerClasses = ["footer", className].filter(Boolean).join(" ");

  return (
    <footer className={footerClasses} {...props}>
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3 className="newsletter-title">{newsletterTitle}</h3>
            <p className="newsletter-description">{newsletterDescription}</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <div className="newsletter-input-container">
                  <Mail size={20} className="newsletter-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                </div>
                <Button type="submit" variant="solid" size="medium">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="footer-navigation">
          {navigationSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-section-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer-link-item">
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">{copyrightText}</p>

            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            <div className="footer-legal">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-legal-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
