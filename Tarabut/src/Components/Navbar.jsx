import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <div className="log-Position">
          <img src="../../public/Logo.png" alt="" className="logo-img" />
        </div>
      </Link>

      <div className="navbar-container">
        {/* Main menu */}
        <ul className="navbar-menu">
          {/* About Us */}
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">About Us ▾</span>
            {activeDropdown === "about" && (
              <div className="dropdown">
                <Link to="/Home" className="dropdown-link">
                    <span className="icon">💡</span> About Us
                </Link>
                <Link to="/join-the-team" className="dropdown-link">
                    <span className="icon">💡</span> Join the team
                </Link>
              </div>
            )}
          </li>

          {/* Solutions */}
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">Solutions ▾</span>
            {activeDropdown === "solutions" && (
              <div className="mega-menu">
                {/* Column 1: Header + main Solutions link */}
                <div className="menu-column">
                  <p className="menu-header">
                    Learn how you can make the most of our products
                  </p>
                  <Link to="/solutions" className="mega-link">
                    <span className="icon">💡</span> Solutions
                  </Link>
                </div>

                {/* Column 2: Product Categories */}
                <div className="menu-column">
                  <p className="submenu-title">Products</p>
                  <Link to="/baas" className="mega-link">
                    <span className="icon">🔗</span> BaaS – API-led financial growth
                  </Link>
                  <Link to="/data" className="mega-link">
                    <span className="icon">📊</span> Data – Utilise data to drive insights
                  </Link>
                </div>

                {/* Column 3: Advanced Tools */}
                <div className="menu-column">
                  <p className="submenu-title">Advanced Tools</p>
                  <Link to="/embedded-finance" className="mega-link">
                    <span className="icon">🏦</span> Embedded Finance
                  </Link>
                  <Link to="/payments" className="mega-link">
                    <span className="icon">💳</span> Payments – Seamless transactions
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* Who We Serve (no dropdown) */}
          <li className="navbar-item">
            <Link to="/who-we-serve" className="navbar-link">
              Who We Serve
            </Link>
          </li>

          {/* Our Impact */}
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("impact")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">Our Impact ▾</span>
            {activeDropdown === "impact" && (
              <div className="mega-menu">
                {/* Column 1: Header + “Our Impact” link */}
                <div className="menu-column">
                  <h3 className="menu-header">
                    Browse our content to learn everything you need to know about Tarabut
                  </h3>
                  <Link to="/our-impact" className="mega-link">
                    <span className="icon">💡</span> Our Impact
                  </Link>
                </div>

                {/* Column 2: Resources */}
                <div className="menu-column">
                  <p className="submenu-title">Resources</p>
                  <Link to="/responsible-innovation" className="mega-link">
                    <span className="icon">❤️</span> Responsible Innovation
                  </Link>
                  <Link to="/news-blogs" className="mega-link">
                    <span className="icon">📰</span> News &amp; Blogs
                  </Link>
                </div>

                {/* Column 3: Our Approach to Security */}
                <div className="menu-column">
                  <p className="submenu-title">Our Approach to Security</p>
                  <Link to="/security-centre" className="mega-link">
                    <span className="icon">🔒</span> Security Centre
                  </Link>
                  <Link to="/security-by-design" className="mega-link">
                    <span className="icon">🛡️</span> Security by Design
                  </Link>
                  <Link to="/vulnerability-disclosure" className="mega-link">
                    <span className="icon">⚠️</span> Vulnerability Disclosure Programme
                  </Link>
                  <Link to="/information-security" className="mega-link">
                    <span className="icon">⚙️</span> Information Security Management System
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* Developers */}
          <li
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter("developers")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">Developers ▾</span>
            {activeDropdown === "developers" && (
              <div className="dropdown">
                <Link to="/portal-login" className="dropdown-link">
                    <span className="icon">💡</span> Portal Log In
                </Link>
                <Link to="/documentation" className="dropdown-link">
                    <span className="icon">📚</span>Documentation
                </Link>
              </div>
            )}
          </li>

          {/* Contact Us button */}
          <li className="navbar-item contact-button">
            <Link to="/Contact Us" className="navbar-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
