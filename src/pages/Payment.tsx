
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Download, Mail, ArrowLeft, Clock } from 'lucide-react';

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'success' | 'failed'>('processing');

  // Simulate payment processing
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPaymentStatus('success');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const orderDetails = {
    orderId: 'APro-2024-001234',
    items: [
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
    ],
    total: 286,
    email: 'customer@example.com'
  };

  if (paymentStatus === 'processing') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Processing Your Payment</h1>
            <p className="text-gray-600 mb-6">
              Please wait while we securely process your payment. Do not close this window.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>This usually takes 30-60 seconds</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Success Header */}
            <div className="bg-green-50 p-8 text-center border-b">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600 mb-4">
                Thank you for your purchase. Your order has been confirmed.
              </p>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Mail className="w-4 h-4" />
                <span>Confirmation sent to {orderDetails.email}</span>
              </div>
            </div>

            {/* Order Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="text-sm text-gray-600 mb-1">Order ID</div>
                    <div className="font-mono text-gray-900">{orderDetails.orderId}</div>
                  </div>
                  
                  <div className="space-y-4">
                    {orderDetails.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.vendor}</p>
                        </div>
                        <span className="font-bold text-gray-900">${item.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t mt-6 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Paid</span>
                      <span>${orderDetails.total}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Access Your Products</h2>
                  <div className="space-y-4">
                    {orderDetails.items.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">by {item.vendor}</p>
                        <Link
                          to="/dashboard"
                          className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Access Product
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">What's Next?</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Products are available in your dashboard</li>
                      <li>• Check your email for detailed access instructions</li>
                      <li>• Contact support if you need any help</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/products"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">❌</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-8">
            We were unable to process your payment. Please try again or contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/checkout"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Again
            </Link>
            <Link
              to="/cart"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
