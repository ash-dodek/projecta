
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  DollarSign, 
  TrendingUp, 
  Download,
  Calendar,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Banknote
} from 'lucide-react';

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userType] = useState('affiliate'); // This would come from auth

  // Mock wallet data
  const walletData = {
    affiliate: {
      availableBalance: 2847.50,
      pendingEarnings: 456.25,
      totalEarnings: 12450.75,
      thisMonth: 856.20
    },
    vendor: {
      availableBalance: 8234.75,
      pendingEarnings: 1245.50,
      totalEarnings: 45672.25,
      thisMonth: 3421.80
    }
  };

  const withdrawalHistory = [
    { id: 1, amount: 500.00, currency: 'USD', status: 'completed', date: '2024-01-20', method: 'Bank Transfer' },
    { id: 2, amount: 250.00, currency: 'EUR', status: 'completed', date: '2024-01-13', method: 'PayPal' },
    { id: 3, amount: 750.00, currency: 'USD', status: 'pending', date: '2024-01-25', method: 'Bank Transfer' },
    { id: 4, amount: 300.00, currency: 'GBP', status: 'completed', date: '2024-01-06', method: 'Stripe' }
  ];

  const earningsHistory = [
    { id: 1, product: 'Digital Marketing Masterclass', amount: 98.50, type: 'commission', date: '2024-01-25' },
    { id: 2, product: 'Financial Freedom Blueprint', amount: 44.50, type: 'sale', date: '2024-01-24' },
    { id: 3, product: 'YouTube Success Formula', amount: 83.50, type: 'commission', date: '2024-01-23' },
    { id: 4, product: 'E-commerce Empire', amount: 127.00, type: 'sale', date: '2024-01-22' },
    { id: 5, product: 'Crypto Investment Guide', amount: 65.75, type: 'commission', date: '2024-01-21' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'failed': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Wallet
          </h1>
          <p className="text-gray-600">
            Manage your earnings, withdrawals, and payment methods
          </p>
        </div>

        {/* Wallet Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available Balance</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${(userType === 'affiliate' ? walletData.affiliate.availableBalance : walletData.vendor.availableBalance).toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Withdraw Funds
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Earnings</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${(userType === 'affiliate' ? walletData.affiliate.pendingEarnings : walletData.vendor.pendingEarnings).toLocaleString()}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">Pending review</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${(userType === 'affiliate' ? walletData.affiliate.totalEarnings : walletData.vendor.totalEarnings).toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">All time</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${(userType === 'affiliate' ? walletData.affiliate.thisMonth : walletData.vendor.thisMonth).toLocaleString()}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">+22%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        </div>

        {/* Withdrawal Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <h3 className="font-medium text-blue-900">Withdrawal Schedule</h3>
              <p className="text-sm text-blue-700">
                Withdrawals are processed every Saturday from 12:00 PM. Minimum withdrawal amount is $50.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'earnings', label: 'Earnings History' },
              { id: 'withdrawals', label: 'Withdrawal History' },
              { id: 'methods', label: 'Payment Methods' }
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
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Earnings Chart</h2>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-gray-400" />
                    <span className="ml-4 text-gray-500">Earnings trend chart would go here</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Download className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-medium text-gray-900">Request Withdrawal</h3>
                      <p className="text-sm text-gray-600">Withdraw available funds</p>
                    </button>
                    
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Eye className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-medium text-gray-900">View Statements</h3>
                      <p className="text-sm text-gray-600">Download tax documents</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Recent Earnings</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {earningsHistory.map((earning) => (
                      <div key={earning.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{earning.product}</h3>
                          <p className="text-sm text-gray-600">{earning.date} • {earning.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${earning.amount}</p>
                          <span className={`inline-block px-2 py-1 rounded text-xs ${
                            earning.type === 'commission' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {earning.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'withdrawals' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Withdrawal History</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {withdrawalHistory.map((withdrawal) => (
                      <div key={withdrawal.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${getStatusColor(withdrawal.status)}`}>
                            {getStatusIcon(withdrawal.status)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{withdrawal.method}</h3>
                            <p className="text-sm text-gray-600">{withdrawal.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{withdrawal.amount} {withdrawal.currency}</p>
                          <span className={`inline-block px-2 py-1 rounded text-xs ${getStatusColor(withdrawal.status)}`}>
                            {withdrawal.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'methods' && (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Bank Transfer</h3>
                          <p className="text-sm text-gray-600">•••• •••• •••• 1234</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Primary</span>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Banknote className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">PayPal</h3>
                          <p className="text-sm text-gray-600">user@example.com</p>
                        </div>
                      </div>
                      <button className="text-primary hover:underline text-sm">Edit</button>
                    </div>

                    <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                      <span className="text-gray-600">+ Add New Payment Method</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Type</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Role</span>
                  <span className="font-medium capitalize">{userType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax ID</span>
                  <span className="font-medium">Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Next Payout</h3>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">Saturday</p>
                <p className="text-sm text-gray-600">Next withdrawal window</p>
                <p className="text-xs text-gray-500 mt-2">12:00 PM - 11:59 PM</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-gray-600 hover:text-primary">
                  Withdrawal FAQ
                </button>
                <button className="w-full text-left text-sm text-gray-600 hover:text-primary">
                  Tax Information
                </button>
                <button className="w-full text-left text-sm text-gray-600 hover:text-primary">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;
