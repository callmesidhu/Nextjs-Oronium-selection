'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-5">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mx-3">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">Beyond UI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Homepage
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About us
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact us
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-gray-900 transition-colors">
              Demo
            </Link>
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Homepage
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About us
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact us
              </Link>
              <Link href="/demo" className="text-gray-700 hover:text-gray-900 transition-colors">
                Demo
              </Link>
              <button className="bg-gray-900 text-white px-6 py-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
