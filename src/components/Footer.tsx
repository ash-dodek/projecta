
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">AffiliatePro</span>
            </div>
            <p className="text-gray-400">
              The ultimate platform for affiliate marketing and digital product sales. 
              Connect vendors with affiliates worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Browse Products</Link></li>
              <li><Link to="/affiliates" className="text-gray-400 hover:text-white transition-colors">Become Affiliate</Link></li>
              <li><Link to="/vendors" className="text-gray-400 hover:text-white transition-colors">Sell Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">support@affiliatepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AffiliatePro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Global Payments Supported</span>
              <div className="flex space-x-2">
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">USD</div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">EUR</div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">GBP</div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">NGN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
