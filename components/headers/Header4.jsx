"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header4({ links }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it on mount to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-nav-sub container">
      {/* Logo */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a href="top" className="logo">
          <img
            src="/assets/images/nirmal-lp/Logo.png"
            alt="Nirmala Logo"
            className="light-mode-logo"
          />
          <img
            src="/assets/images/nirmal-lp/Logo.png"
            alt="Logo"
            className="dark-mode-logo"
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      {/* <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div> */}

      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          {/* Conditional rendering for Call Now */}
          {isMobile ? (
            <li>
              <a
                href="tel:+91 82899 69433"
                className="btn" // Use appropriate classes for styling
                style={{ padding: "10px 20px", borderRadius: "5px" }}
              >
                <i
                  className="mi-mobile size-24 color-primary-1"
                  style={{ marginRight: "5px" }}
                />
                Call Now
              </a>
            </li>
          ) : (
            <li>
              <a
                href="tel:+91 82899 69433"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    margin: 0,
                    paddingRight: "8px",
                  }}
                >
                  Call Now
                </h2>
                <i
                  className="mi-mobile size-24 color-primary-1"
                  style={{ marginRight: "5px" }}
                />
                <span>+91 82899 69433</span>
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
