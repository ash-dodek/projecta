
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Upload, 
  DollarSign, 
  Users, 
  BarChart3,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const Vendors = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell Your Digital Products
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Turn your knowledge into profit. Sell courses, eBooks, and digital content 
              while our affiliate network promotes your products worldwide.
            </p>
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Selling Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sell on AffiliatePro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle the technical details so you can focus on creating amazing content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">50K+ Affiliates</h3>
              <p className="text-gray-600">
                Instant access to our network of active affiliate marketers ready to promote your products
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Currency</h3>
              <p className="text-gray-600">
                Accept payments in NGN, USD, EUR, GBP, and more with automatic currency conversion
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Hosting</h3>
              <p className="text-gray-600">
                Your content is protected with anti-piracy measures and secure delivery systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              From upload to sale in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create Account</h3>
              <p className="text-gray-600">
                Sign up as a vendor and verify your account
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Products</h3>
              <p className="text-gray-600">
                Upload your digital products and set your pricing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Set Commissions</h3>
              <p className="text-gray-600">
                Define affiliate commission rates and promotional materials
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Earning</h3>
              <p className="text-gray-600">
                Watch affiliates promote your products and earn money
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powerful Vendor Tools
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Easy Product Upload</h3>
                    <p className="text-gray-600">Simple drag-and-drop interface for all file types</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Flexible Pricing</h3>
                    <p className="text-gray-600">Set one-time payments or recurring subscriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Affiliate Management</h3>
                    <p className="text-gray-600">Control who can promote your products and track performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Advanced Analytics</h3>
                    <p className="text-gray-600">Detailed sales reports and affiliate performance metrics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Vendor Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Revenue</span>
                    <span className="text-2xl font-bold text-purple-600">$12,450</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Products</span>
                    <span className="text-xl font-semibold text-gray-900">8</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Affiliates</span>
                    <span className="text-xl font-semibold text-gray-900">247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Monetize Your Content?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful content creators earning passive income through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Selling Today
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              See Examples
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vendors;
