"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white sticky top-0 z-50 font-semibold">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Beyond UI Logo" width={120} height={32} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm items-center">
          <Link href="/">Homepage</Link>
          <Link href="#">About us</Link>
          <Link href="#">Features</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#">Contact us</Link>
          <button className="px-3 py-1 rounded-lg border-2 border-gray-200">Demo</button>
          <button className="px-3 py-1 rounded-lg bg-black text-white">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-4 py-6 text-sm">
              <Link href="/" onClick={toggleMenu}>Homepage</Link>
              <Link href="#" onClick={toggleMenu}>About us</Link>
              <Link href="#" onClick={toggleMenu}>Features</Link>
              <Link href="/blog" onClick={toggleMenu}>Blog</Link>
              <Link href="#" onClick={toggleMenu}>Contact us</Link>
              <button className="px-3 py-2 rounded-lg bg-gray-100 w-full">
                Demo
              </button>
              <button className="px-3 py-2 rounded-lg bg-black text-white w-full">
                Get Started
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
