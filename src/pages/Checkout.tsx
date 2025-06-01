
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CreditCard, Shield, Lock, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    paymentMethod: 'card'
  });

  const cartItems = [
    {
      id: 1,
      title: 'Complete Digital Marketing Masterclass',
      price: 197,
      vendor: 'Marketing Pro Academy'
    },
    {
      id: 2,
      title: 'Financial Freedom Blueprint',
      price: 89,
      vendor: 'Wealth Builder Inc'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center text-primary hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Billing Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="NG">Nigeria</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="GH">Ghana</option>
                    <option value="KE">Kenya</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="text-primary"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="text-primary"
                    />
                    <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">P</div>
                    <span className="font-medium">PayPal</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Your payment information is encrypted and secure</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.vendor}</p>
                  </div>
                  <span className="font-bold text-gray-900">${item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </div>
            
            <Link
              to="/payment"
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center mb-4"
            >
              <Lock className="w-4 h-4 mr-2" />
              Complete Payment
            </Link>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Instant access after payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Lifetime access to purchased content</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <div className="flex space-x-4 justify-center">
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">VISA</div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">MASTERCARD</div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">PAYPAL</div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">STRIPE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
