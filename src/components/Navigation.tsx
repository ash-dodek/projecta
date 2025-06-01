
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AffiliatePro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/products" className={`transition-colors ${isActive('/products')}`}>
              Products
            </Link>
            <Link to="/affiliates" className={`transition-colors ${isActive('/affiliates')}`}>
              Become Affiliate
            </Link>
            <Link to="/vendors" className={`transition-colors ${isActive('/vendors')}`}>
              Sell Products
            </Link>
            <Link to="/my-products" className={`transition-colors ${isActive('/my-products')}`}>
              My Products
            </Link>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-1 p-2 text-gray-600 hover:text-primary transition-colors"
              >
                <User className="w-6 h-6" />
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
                  <div className="py-1">
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Login
                    </Link>
                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Register
                    </Link>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Dashboard
                    </Link>
                    <Link to="/wallet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Wallet
                    </Link>
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Admin Panel
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/affiliates" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Become Affiliate
              </Link>
              <Link to="/vendors" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Sell Products
              </Link>
              <Link to="/my-products" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                My Products
              </Link>
              <Link to="/cart" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Cart (3)
              </Link>
              <Link to="/wallet" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Wallet
              </Link>
              <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Login
              </Link>
              <Link to="/register" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
