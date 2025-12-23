
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Shield, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { BRAND_NAME, PHONE_NUMBER, PHONE_TEL, EMAIL_SUPPORT } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-stopzilla-live-usa-assistance' },
    { name: 'Services', path: '/services-stopzilla-tech-assistance' },
    { name: 'Blog', path: '/blog-stopzilla-tech-support-tips' },
    { name: 'Contact', path: '/contact-stopzilla-support-usa' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-security-dark text-white shadow-xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-security-green" />
          <span className="text-xl font-bold tracking-tight">{BRAND_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-security-green transition-colors ${
                  isActive ? 'text-security-green underline underline-offset-4' : 'text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={PHONE_TEL}
            className="bg-security-green hover:bg-green-600 text-white px-5 py-2 rounded-full flex items-center space-x-2 font-bold transition-all transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 p-4 space-y-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={PHONE_TEL}
            className="block bg-security-green text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-security-dark text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-white mb-6">
              <Shield className="w-6 h-6 text-security-green" />
              <span className="text-lg font-bold">{BRAND_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Expert technical assistance for STOPzilla users across the USA. We provide secure remote guidance to fix installation, login, and malware issues on your PC.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-security-green"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-security-green"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-security-green"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-security-green"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 underline decoration-security-green underline-offset-8">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-stopzilla-live-usa-assistance" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services-stopzilla-tech-assistance" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog-stopzilla-tech-support-tips" className="hover:text-white transition-colors">Support Blog</Link></li>
              <li><Link to="/contact-stopzilla-support-usa" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 underline decoration-security-green underline-offset-8">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-security-green" />
                <a href={PHONE_TEL} className="hover:text-white">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-security-green" />
                <span>{EMAIL_SUPPORT}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Shield className="w-4 h-4 text-security-green mt-1" />
                <span>Available for live calls across all USA states.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 underline decoration-security-green underline-offset-8">Newsletter</h4>
            <p className="text-xs mb-4 italic">Get STOPzilla support tips and renewal reminders directly in your inbox.</p>
            {subscribed ? (
              <p className="text-security-green font-medium animate-pulse">You’re subscribed. Expect STOPzilla support tips and renewal reminders.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-security-green text-white"
                />
                <button type="submit" className="bg-security-green hover:bg-green-600 text-white py-2 rounded font-bold transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
