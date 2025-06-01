
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
  Calendar,
  Filter,
  Award,
  Package,
  Globe
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('monthly');

  // Mock admin data
  const adminData = {
    totalRevenue: 125847.50,
    totalUsers: 12456,
    totalProducts: 847,
    totalAffiliates: 3214,
    monthlyGrowth: 15.2,
    weeklyGrowth: 8.7,
    yearlyGrowth: 145.3
  };

  const topAffiliates = [
    { id: 1, name: 'Sarah Johnson', earnings: 12450.00, sales: 89, country: 'USA' },
    { id: 2, name: 'Michael Chen', earnings: 9876.50, sales: 67, country: 'Canada' },
    { id: 3, name: 'Emma Williams', earnings: 8234.75, sales: 52, country: 'UK' },
    { id: 4, name: 'David Rodriguez', earnings: 7456.25, sales: 48, country: 'Spain' },
    { id: 5, name: 'Lisa Thompson', earnings: 6789.00, sales: 44, country: 'Australia' }
  ];

  const topProducts = [
    { id: 1, title: 'Digital Marketing Masterclass', revenue: 25400.00, sales: 127, vendor: 'John Smith' },
    { id: 2, title: 'Financial Freedom Blueprint', revenue: 18650.50, sales: 93, vendor: 'Jane Doe' },
    { id: 3, title: 'YouTube Success Formula', revenue: 15820.75, sales: 79, vendor: 'Mike Johnson' },
    { id: 4, title: 'E-commerce Empire', revenue: 12450.00, sales: 62, vendor: 'Sarah Wilson' },
    { id: 5, title: 'Crypto Investment Guide', revenue: 11230.25, sales: 56, vendor: 'Alex Brown' }
  ];

  const currencyBreakdown = [
    { currency: 'USD', amount: 67423.50, percentage: 53.6 },
    { currency: 'EUR', amount: 25186.25, percentage: 20.0 },
    { currency: 'GBP', amount: 18934.75, percentage: 15.1 },
    { currency: 'NGN', amount: 14303.00, percentage: 11.3 }
  ];

  const recentTransactions = [
    { id: 1, product: 'Digital Marketing Masterclass', amount: 197.00, currency: 'USD', affiliate: 'Sarah J.', date: '2024-01-25' },
    { id: 2, product: 'Financial Freedom Blueprint', amount: 89.50, currency: 'EUR', affiliate: 'Michael C.', date: '2024-01-25' },
    { id: 3, product: 'YouTube Success Formula', amount: 167.25, currency: 'GBP', affiliate: 'Emma W.', date: '2024-01-24' },
    { id: 4, product: 'E-commerce Empire', amount: 124.50, currency: 'USD', affiliate: 'David R.', date: '2024-01-24' },
    { id: 5, product: 'Crypto Investment Guide', amount: 112.75, currency: 'USD', affiliate: 'Lisa T.', date: '2024-01-23' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Platform-wide analytics and management overview
          </p>
        </div>

        {/* Time Filter */}
        <div className="mb-6 flex space-x-4">
          {['weekly', 'monthly', 'yearly'].map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${adminData.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+{adminData[`${timeFilter}Growth`]}%</span>
              <span className="text-gray-500 ml-2">from last {timeFilter.slice(0, -2)}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{adminData.totalUsers.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+12%</span>
              <span className="text-gray-500 ml-2">new registrations</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Products</p>
                <p className="text-2xl font-bold text-gray-900">{adminData.totalProducts}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+47</span>
              <span className="text-gray-500 ml-2">this month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Affiliates</p>
                <p className="text-2xl font-bold text-gray-900">{adminData.totalAffiliates}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+156</span>
              <span className="text-gray-500 ml-2">new affiliates</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'affiliates', label: 'Top Affiliates' },
              { id: 'products', label: 'Top Products' },
              { id: 'currency', label: 'Currency Breakdown' },
              { id: 'transactions', label: 'Recent Transactions' }
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
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Platform Analytics Overview</h2>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-gray-400" />
                  <span className="ml-4 text-gray-500">Revenue analytics chart would go here</span>
                </div>
              </div>
            )}

            {activeTab === 'affiliates' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Top Performing Affiliates</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {topAffiliates.map((affiliate, index) => (
                      <div key={affiliate.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{affiliate.name}</h3>
                            <p className="text-sm text-gray-600">{affiliate.country} • {affiliate.sales} sales</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${affiliate.earnings.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">Total Earnings</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Top Selling Products</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{product.title}</h3>
                            <p className="text-sm text-gray-600">by {product.vendor} • {product.sales} sales</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${product.revenue.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">Total Revenue</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'currency' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Revenue by Currency</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {currencyBreakdown.map((currency) => (
                      <div key={currency.currency} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white w-12 h-8 rounded flex items-center justify-center font-bold text-sm">
                            {currency.currency}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{currency.amount.toLocaleString()} {currency.currency}</h3>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${currency.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{currency.percentage}%</p>
                          <p className="text-sm text-gray-600">of total revenue</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{transaction.product}</h3>
                          <p className="text-sm text-gray-600">by {transaction.affiliate} • {transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{transaction.amount} {transaction.currency}</p>
                          <p className="text-sm text-gray-600">Commission</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-x-2">
                <button className="w-full mb-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Export Reports
                </button>
                <button className="w-full mb-3 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Manage Users
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Platform Settings
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Platform Health</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Server Status</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">API Response Time</span>
                  <span className="font-medium">142ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-medium">99.9%</span>
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

export default Admin;
