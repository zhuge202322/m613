"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Determine text color based on scroll state
  // Scrolled -> Navy Text (on white background)
  // Unscrolled -> White Text (on transparent background over dark video/header)
  const textColorClass = scrolled ? "text-navy" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "What We Do", href: "/services" },
    { name: "Operations", href: "/operations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 py-6 px-8 flex justify-between items-center",
        scrolled && "bg-white/95 backdrop-blur-md shadow-sm py-4"
      )}
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/img/logo.jpg"
            alt="OKIEE Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className={clsx("hidden md:flex space-x-10 text-sm font-semibold tracking-wide uppercase transition-colors", textColorClass)}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className={clsx("md:hidden text-2xl transition-colors", textColorClass)}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden text-navy">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide uppercase hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
