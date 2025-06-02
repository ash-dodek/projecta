
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, ShoppingBag, TrendingUp, Star, CheckCircle, Globe, DollarSign } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Ultimate 
                <span className="text-primary"> Affiliate</span> 
                <br />Marketing Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect vendors with top affiliates. Sell digital products worldwide. 
                Track performance in real-time and maximize your earnings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/add-product"
                  className="btn btn-primary px-8 py-4 text-lg"
                >
                  Start Selling Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/affiliates"
                  className="btn btn-outline px-8 py-4 text-lg"
                >
                  Become an Affiliate
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-blue-100">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$2M+</div>
                    <div className="text-blue-100">Paid Out</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-blue-100">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AffiliatePro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in affiliate marketing, all in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Network</h3>
              <p className="text-gray-600">
                Connect with thousands of affiliates and vendors from around the world. 
                Expand your reach and maximize your potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">
                Track your performance with detailed analytics and insights. 
                Make data-driven decisions to optimize your campaigns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Payouts</h3>
              <p className="text-gray-600">
                Get paid instantly with our secure payment system. 
                Multiple currencies and payment methods supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Total Earnings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Products Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">180+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up</h3>
              <p className="text-gray-600">
                Create your account and choose whether you want to be a vendor or affiliate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600">
                List your products or find products to promote. Build your network.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Earn</h3>
              <p className="text-gray-600">
                Start earning commissions or sales revenue with our automated system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "AffiliatePro has transformed my digital product sales. The platform is intuitive and the affiliate network is amazing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">John Smith</div>
                  <div className="text-gray-600">Digital Product Vendor</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As an affiliate, I've earned more here than any other platform. The commission rates are excellent!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MD</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Maria Davis</div>
                  <div className="text-gray-600">Top Affiliate</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The analytics and tracking tools are phenomenal. I can optimize my campaigns in real-time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RJ</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Robert Johnson</div>
                  <div className="text-gray-600">Marketing Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful vendors and affiliates who are already earning with AffiliatePro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/add-product"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Selling Today
            </Link>
            <Link 
              to="/affiliates"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Become an Affiliate
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
