
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  BookOpen,
  Video,
  Headphones,
  FileText,
  ShoppingCart
} from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Filter },
    { id: 'courses', name: 'Online Courses', icon: BookOpen },
    { id: 'ebooks', name: 'eBooks', icon: FileText },
    { id: 'videos', name: 'Video Content', icon: Video },
    { id: 'audio', name: 'Audio Content', icon: Headphones },
  ];

  const products = [
    {
      id: 1,
      title: 'Complete Digital Marketing Masterclass',
      description: 'Learn everything about digital marketing from beginner to expert level.',
      price: 197,
      originalPrice: 397,
      currency: 'USD',
      rating: 4.8,
      reviews: 2847,
      sales: 12450,
      category: 'courses',
      type: 'Course',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      vendor: 'Marketing Pro Academy',
      commission: 50,
      tags: ['Marketing', 'Business', 'Strategy']
    },
    {
      id: 2,
      title: 'Financial Freedom Blueprint',
      description: 'Step-by-step guide to achieving financial independence.',
      price: 89,
      originalPrice: 149,
      currency: 'USD',
      rating: 4.9,
      reviews: 1923,
      sales: 8750,
      category: 'ebooks',
      type: 'eBook',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      vendor: 'Wealth Builder Inc',
      commission: 40,
      tags: ['Finance', 'Investment', 'Planning']
    },
    {
      id: 3,
      title: 'Podcast Creation Bootcamp',
      description: 'Everything you need to start and grow a successful podcast.',
      price: 127,
      originalPrice: 227,
      currency: 'USD',
      rating: 4.7,
      reviews: 945,
      sales: 3420,
      category: 'audio',
      type: 'Audio Course',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=250&fit=crop',
      vendor: 'Podcast Masters',
      commission: 45,
      tags: ['Podcasting', 'Audio', 'Content']
    },
    {
      id: 4,
      title: 'YouTube Success Formula',
      description: 'Proven strategies to grow your YouTube channel and monetize effectively.',
      price: 167,
      originalPrice: 297,
      currency: 'USD',
      rating: 4.8,
      reviews: 1567,
      sales: 6890,
      category: 'videos',
      type: 'Video Course',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
      vendor: 'Content Creator Hub',
      commission: 55,
      tags: ['YouTube', 'Video', 'Monetization']
    },
    {
      id: 5,
      title: 'Cryptocurrency Trading Guide',
      description: 'Master the art of cryptocurrency trading with proven strategies.',
      price: 247,
      originalPrice: 497,
      currency: 'USD',
      rating: 4.6,
      reviews: 2156,
      sales: 9340,
      category: 'ebooks',
      type: 'eBook + Tools',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop',
      vendor: 'Crypto Academy',
      commission: 60,
      tags: ['Crypto', 'Trading', 'Investment']
    },
    {
      id: 6,
      title: 'Freelancing Success Masterclass',
      description: 'Build a 6-figure freelancing business from scratch.',
      price: 157,
      originalPrice: 257,
      currency: 'USD',
      rating: 4.9,
      reviews: 3421,
      sales: 15670,
      category: 'courses',
      type: 'Course',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
      vendor: 'Freelancer Pro',
      commission: 50,
      tags: ['Freelancing', 'Business', 'Remote Work']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'under-100') matchesPrice = product.price < 100;
    else if (priceRange === '100-200') matchesPrice = product.price >= 100 && product.price <= 200;
    else if (priceRange === 'over-200') matchesPrice = product.price > 200;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Digital Products
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover high-quality courses, eBooks, and digital content from top creators worldwide.
              Earn generous commissions as an affiliate or find your next learning opportunity.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm">{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'all', label: 'All Prices' },
                      { id: 'under-100', label: 'Under $100' },
                      { id: '100-200', label: '$100 - $200' },
                      { id: 'over-200', label: 'Over $200' }
                    ].map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setPriceRange(range.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          priceRange === range.id
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Quick Stats</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• {products.length} total products</p>
                    <p>• {filteredProducts.length} matching filters</p>
                    <p>• Average commission: 50%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Sort by popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest rated</option>
                  <option>Most sales</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-primary font-semibold px-3 py-1 rounded-full text-sm">
                          {product.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
                          {product.commission}% Commission
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-primary font-medium text-sm">{product.vendor}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-gray-400 text-sm">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{product.sales.toLocaleString()} sales</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <TrendingUp className="w-4 h-4" />
                          <span>Trending</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link
                            to={`/product/${product.id}`}
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            View Details
                          </Link>
                          <button className="border border-primary text-primary p-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
