
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Shield, 
  Globe, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                The Ultimate
                <span className="text-primary"> Affiliate</span>
                <br />
                Sales Platform
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Connect vendors with affiliates worldwide. Sell digital products, 
                manage commissions, and scale your business with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/register"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Start Selling Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/affiliates"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                >
                  Become an Affiliate
                </Link>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Multi-currency support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Instant payouts</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-gray-600">Total Earnings</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mt-1">$12,450</p>
                    <p className="text-green-600 text-sm">+15% this month</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-600">Sales</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mt-1">847</p>
                    <p className="text-green-600 text-sm">+22% this week</p>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-primary to-blue-400 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600">Active Affiliates</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">$10M+</h3>
              <p className="text-gray-600">Commissions Paid</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">150+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides all the tools and features you need to build, 
              manage, and scale your affiliate marketing business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Currency Support</h3>
              <p className="text-gray-600 mb-4">
                Accept payments in NGN, USD, GBP, EUR, GHS, KES and more. 
                Automatic currency detection and conversion.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Stripe, PayPal, Paystack, Flutterwave</li>
                <li>• Instant payment processing</li>
                <li>• Automated access delivery</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affiliate Management</h3>
              <p className="text-gray-600 mb-4">
                Complete affiliate system with unique links, commission tracking, 
                and performance analytics.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Unique affiliate links</li>
                <li>• Real-time commission tracking</li>
                <li>• Affiliate leaderboards</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Hosting</h3>
              <p className="text-gray-600 mb-4">
                All products hosted securely with anti-piracy protection 
                and encrypted delivery systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• DDoS protection</li>
                <li>• SSL encryption</li>
                <li>• Screen recording protection</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics for affiliates, vendors, and administrators 
                with detailed reporting.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Real-time sales tracking</li>
                <li>• Conversion analytics</li>
                <li>• Performance insights</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Auto-Generated Sales Pages</h3>
              <p className="text-gray-600 mb-4">
                Each affiliate gets their own version of product sales pages 
                with embedded tracking links.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Personalized affiliate pages</li>
                <li>• Dynamic tracking URLs</li>
                <li>• Bonus integration</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Commissions</h3>
              <p className="text-gray-600 mb-4">
                Set percentage or fixed amount commissions with scheduled 
                payouts every Saturday.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom commission rates</li>
                <li>• Minimum withdrawal limits</li>
                <li>• Automated payout system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied vendors and affiliates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "AffiliatePro transformed my digital product business. The multi-currency 
                support helped me reach global markets effortlessly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-500">Course Creator</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As an affiliate marketer, I love the detailed analytics and instant 
                commission tracking. The platform is incredibly user-friendly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-gray-500">Affiliate Marketer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The security features give me peace of mind. My digital products 
                are protected and the automated delivery system is flawless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-gray-500">eBook Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful vendors and affiliates who are already 
            earning with AffiliatePro. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
