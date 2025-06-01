
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Package, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Share2,
  BarChart3,
  DollarSign,
  Users,
  ShoppingBag,
  Download,
  Star
} from 'lucide-react';

const MyProducts = () => {
  const [userType] = useState('vendor'); // This would come from auth: 'customer', 'vendor', or 'affiliate'
  const [activeTab, setActiveTab] = useState('products');

  // Mock data for different user types
  const customerPurchases = [
    { id: 1, title: 'Digital Marketing Masterclass', purchaseDate: '2024-01-20', price: 197.00, status: 'active', progress: 45 },
    { id: 2, title: 'Financial Freedom Blueprint', purchaseDate: '2024-01-15', price: 89.50, status: 'completed', progress: 100 },
    { id: 3, title: 'YouTube Success Formula', purchaseDate: '2024-01-10', price: 167.25, status: 'active', progress: 78 }
  ];

  const vendorProducts = [
    { 
      id: 1, 
      title: 'Complete Digital Marketing Masterclass', 
      price: 197.00, 
      sales: 127, 
      revenue: 25019.00, 
      status: 'published',
      affiliates: 89,
      commission: 50
    },
    { 
      id: 2, 
      title: 'Advanced SEO Strategies', 
      price: 149.00, 
      sales: 93, 
      revenue: 13857.00, 
      status: 'published',
      affiliates: 67,
      commission: 45
    },
    { 
      id: 3, 
      title: 'Social Media Growth Hacks', 
      price: 79.00, 
      sales: 156, 
      revenue: 12324.00, 
      status: 'draft',
      affiliates: 0,
      commission: 40
    }
  ];

  const affiliateProducts = [
    { 
      id: 1, 
      title: 'Digital Marketing Masterclass', 
      vendor: 'John Smith',
      commission: 50,
      sales: 23,
      earnings: 2261.50,
      clicks: 847,
      conversion: 2.7,
      link: 'https://platform.com/product/1?ref=AFF123'
    },
    { 
      id: 2, 
      title: 'Financial Freedom Blueprint', 
      vendor: 'Jane Doe',
      commission: 40,
      sales: 18,
      earnings: 712.20,
      clicks: 634,
      conversion: 2.8,
      link: 'https://platform.com/product/2?ref=AFF123'
    }
  ];

  const renderCustomerView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">My Purchases</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {customerPurchases.map((purchase) => (
              <div key={purchase.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{purchase.title}</h3>
                    <p className="text-sm text-gray-600">Purchased on {purchase.purchaseDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">${purchase.price}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      purchase.status === 'active' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {purchase.status}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">{purchase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${purchase.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Continue Learning
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Download Resources
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Leave Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderVendorView = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{vendorProducts.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">{vendorProducts.reduce((sum, p) => sum + p.sales, 0)}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${vendorProducts.reduce((sum, p) => sum + p.revenue, 0).toLocaleString()}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Affiliates</p>
              <p className="text-2xl font-bold text-gray-900">{vendorProducts.reduce((sum, p) => sum + p.affiliates, 0)}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">My Products</h2>
          <Link 
            to="/add-product"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </Link>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {vendorProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.commission}% commission • ${product.price}</p>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded text-sm ${
                    product.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Sales</span>
                    <p className="font-medium">{product.sales}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Revenue</span>
                    <p className="font-medium">${product.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Affiliates</span>
                    <p className="font-medium">{product.affiliates}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Commission</span>
                    <p className="font-medium">{product.commission}%</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </button>
                  <button className="border border-red-300 text-red-700 px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors flex items-center space-x-1">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAffiliateView = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Products Promoting</p>
              <p className="text-2xl font-bold text-gray-900">{affiliateProducts.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">{affiliateProducts.reduce((sum, p) => sum + p.sales, 0)}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-900">${affiliateProducts.reduce((sum, p) => sum + p.earnings, 0).toLocaleString()}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Conversion</p>
              <p className="text-2xl font-bold text-gray-900">{(affiliateProducts.reduce((sum, p) => sum + p.conversion, 0) / affiliateProducts.length).toFixed(1)}%</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Products I'm Promoting</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {affiliateProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-600">by {product.vendor} • {product.commission}% commission</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                    Active
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Sales</span>
                    <p className="font-medium">{product.sales}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Earnings</span>
                    <p className="font-medium">${product.earnings.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Clicks</span>
                    <p className="font-medium">{product.clicks}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Conversion</span>
                    <p className="font-medium">{product.conversion}%</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Commission</span>
                    <p className="font-medium">{product.commission}%</p>
                  </div>
                </div>
                
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Your Affiliate Link:</p>
                  <div className="flex items-center space-x-2">
                    <code className="text-xs bg-white p-2 rounded border flex-1 overflow-hidden">{product.link}</code>
                    <button className="bg-primary text-white px-3 py-2 rounded text-xs hover:bg-blue-700 transition-colors">
                      Copy
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>Materials</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const getUserTypeTitle = () => {
    switch (userType) {
      case 'customer': return 'My Purchases';
      case 'vendor': return 'My Products';
      case 'affiliate': return 'Products I Promote';
      default: return 'My Products';
    }
  };

  const getUserTypeDescription = () => {
    switch (userType) {
      case 'customer': return 'Access your purchased products and track your learning progress';
      case 'vendor': return 'Manage your digital products and track sales performance';
      case 'affiliate': return 'View products you promote and track your earnings';
      default: return 'Manage your products and track performance';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {getUserTypeTitle()}
          </h1>
          <p className="text-gray-600">
            {getUserTypeDescription()}
          </p>
        </div>

        {userType === 'customer' && renderCustomerView()}
        {userType === 'vendor' && renderVendorView()}
        {userType === 'affiliate' && renderAffiliateView()}
      </div>

      <Footer />
    </div>
  );
};

export default MyProducts;
