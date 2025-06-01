
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  Users, 
  ShoppingBag,
  Download,
  Eye,
  Share2,
  Calendar,
  Filter
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userType = 'affiliate'; // This would come from authentication
  const userData = {
    name: 'John Smith',
    email: 'john@example.com',
    joinDate: '2024-01-15',
    totalEarnings: 3247.50,
    thisMonthEarnings: 856.20,
    totalSales: 127,
    clickThrough: 2.4
  };

  const recentSales = [
    {
      id: 1,
      product: 'Digital Marketing Masterclass',
      commission: 98.50,
      date: '2024-01-25',
      status: 'paid'
    },
    {
      id: 2,
      product: 'Financial Freedom Blueprint',
      commission: 44.50,
      date: '2024-01-24',
      status: 'pending'
    },
    {
      id: 3,
      product: 'YouTube Success Formula',
      commission: 83.50,
      date: '2024-01-23',
      status: 'paid'
    }
  ];

  const affiliateProducts = [
    {
      id: 1,
      title: 'Complete Digital Marketing Masterclass',
      commission: 50,
      sales: 23,
      earnings: 2261.50,
      clicks: 847,
      conversion: 2.7
    },
    {
      id: 2,
      title: 'Financial Freedom Blueprint',
      commission: 40,
      sales: 18,
      earnings: 712.20,
      clicks: 634,
      conversion: 2.8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userData.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your {userType} account today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${userData.totalEarnings.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+15%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-2xl font-bold text-gray-900">${userData.thisMonthEarnings.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+22%</span>
              <span className="text-gray-500 ml-2">from last week</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">{userData.totalSales}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+8</span>
              <span className="text-gray-500 ml-2">this week</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{userData.clickThrough}%</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+0.3%</span>
              <span className="text-gray-500 ml-2">improvement</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'products', label: 'My Products' },
              { id: 'sales', label: 'Recent Sales' },
              { id: 'analytics', label: 'Analytics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Earnings Overview</h2>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-gray-400" />
                    <span className="ml-4 text-gray-500">Earnings chart would go here</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Share2 className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-medium text-gray-900">Generate Affiliate Link</h3>
                      <p className="text-sm text-gray-600">Create links for products</p>
                    </button>
                    
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Download className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-medium text-gray-900">Download Reports</h3>
                      <p className="text-sm text-gray-600">Export your data</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">My Affiliate Products</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {affiliateProducts.map((product) => (
                      <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900">{product.title}</h3>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            {product.commission}% Commission
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Sales</span>
                            <p className="font-medium">{product.sales}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Earnings</span>
                            <p className="font-medium">${product.earnings}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Clicks</span>
                            <p className="font-medium">{product.clicks}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Conversion</span>
                            <p className="font-medium">{product.conversion}%</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex space-x-3">
                          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                            Get Link
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sales' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Recent Sales</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{sale.product}</h3>
                          <p className="text-sm text-gray-600">{sale.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${sale.commission}</p>
                          <span className={`inline-block px-2 py-1 rounded text-xs ${
                            sale.status === 'paid' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {sale.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Analytics</h2>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-gray-400" />
                  <span className="ml-4 text-gray-500">Analytics dashboard would go here</span>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Type</span>
                  <span className="font-medium capitalize">{userType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-medium">{userData.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">New sale!</p>
                  <p className="text-xs text-blue-700">You earned $98.50 commission</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Payment processed</p>
                  <p className="text-xs text-green-700">$245.00 has been transferred</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
