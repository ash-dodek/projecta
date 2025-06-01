
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Shield, 
  Download,
  ChevronLeft,
  ChevronRight,
  Play,
  FileText,
  Award,
  TrendingUp,
  ShoppingCart,
  Heart,
  Share2
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    title: 'Complete Digital Marketing Masterclass',
    description: 'Master digital marketing from beginner to expert level with this comprehensive course covering SEO, social media, PPC, email marketing, and more.',
    longDescription: `This comprehensive digital marketing masterclass is designed to take you from a complete beginner to an expert level marketer. You'll learn proven strategies and techniques used by top marketing professionals worldwide.

    The course covers all major aspects of digital marketing including search engine optimization (SEO), social media marketing, pay-per-click advertising (PPC), email marketing, content marketing, affiliate marketing, and conversion optimization.

    With over 50 hours of video content, practical exercises, and real-world case studies, you'll gain hands-on experience and learn how to create effective marketing campaigns that drive results.`,
    price: 197,
    originalPrice: 397,
    currency: 'USD',
    rating: 4.8,
    reviews: 2847,
    sales: 12450,
    category: 'courses',
    type: 'Course',
    vendor: 'Marketing Pro Academy',
    commission: 50,
    tags: ['Marketing', 'Business', 'Strategy', 'SEO', 'Social Media'],
    features: [
      '50+ hours of video content',
      'Lifetime access',
      'Certificate of completion',
      'Private community access',
      'Monthly live Q&A sessions',
      '30-day money-back guarantee'
    ],
    modules: [
      { title: 'Introduction to Digital Marketing', duration: '2h 30m', lessons: 8 },
      { title: 'Search Engine Optimization (SEO)', duration: '8h 45m', lessons: 24 },
      { title: 'Social Media Marketing', duration: '6h 20m', lessons: 18 },
      { title: 'Pay-Per-Click Advertising', duration: '7h 15m', lessons: 21 },
      { title: 'Email Marketing Mastery', duration: '5h 10m', lessons: 15 },
      { title: 'Content Marketing Strategy', duration: '4h 30m', lessons: 12 },
      { title: 'Analytics & Conversion Optimization', duration: '6h 40m', lessons: 19 }
    ],
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=500&fit=crop'
    ],
    instructor: {
      name: 'John Matthews',
      title: 'Digital Marketing Expert',
      experience: '15+ years',
      students: '50,000+',
      courses: 12,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{product.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {product.type}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.commission}% Commission
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                
                <p className="text-lg text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{product.sales.toLocaleString()} students</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>Access on all devices</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <Heart className="w-5 h-5 mr-2" />
                      Wishlist
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Meet Your Instructor</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={product.instructor.avatar}
                    alt={product.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{product.instructor.name}</h4>
                    <p className="text-gray-600">{product.instructor.title}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>{product.instructor.experience} experience</span>
                      <span>{product.instructor.students} students</span>
                      <span>{product.instructor.courses} courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'affiliate', label: 'Affiliate Info' }
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
          <div className="bg-white rounded-xl p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h3>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {product.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                <div className="space-y-4">
                  {product.modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Module {index + 1}: {module.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FileText className="w-4 h-4" />
                              <span>{module.lessons} lessons</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-primary hover:text-blue-700">
                          <Play className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                <div className="space-y-6">
                  {/* Review summary */}
                  <div className="flex items-center space-x-8 pb-6 border-b border-gray-200">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-gray-600">{product.reviews} reviews</div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-3 mb-2">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-12">
                            {stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '7%' : stars === 2 ? '2%' : '1%'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Individual reviews */}
                  <div className="space-y-6">
                    {[
                      {
                        name: 'Sarah Johnson',
                        rating: 5,
                        date: '2 weeks ago',
                        comment: 'This course exceeded my expectations! The content is well-structured and the instructor explains everything clearly. I already see improvements in my marketing campaigns.',
                        helpful: 23
                      },
                      {
                        name: 'Mike Chen',
                        rating: 5,
                        date: '1 month ago',
                        comment: 'Excellent course with practical examples. The SEO section alone was worth the price. Highly recommended for anyone serious about digital marketing.',
                        helpful: 18
                      },
                      {
                        name: 'Emily Rodriguez',
                        rating: 4,
                        date: '2 months ago',
                        comment: 'Great content overall. Some sections could be more detailed, but the course provides a solid foundation in digital marketing principles.',
                        helpful: 12
                      }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{review.name}</p>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{review.comment}</p>
                        <div className="flex items-center space-x-4">
                          <button className="text-sm text-gray-500 hover:text-gray-700">
                            Helpful ({review.helpful})
                          </button>
                          <button className="text-sm text-gray-500 hover:text-gray-700">
                            Reply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'affiliate' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Information</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Promote this product and earn generous commissions for every sale you generate.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{product.commission}%</div>
                    <p className="text-gray-700">Commission Rate</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">${(product.price * product.commission / 100).toFixed(0)}</div>
                    <p className="text-gray-700">Commission per Sale</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{product.sales}</div>
                    <p className="text-gray-700">Total Sales</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Affiliate Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span>High conversion rate sales page</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-green-600" />
                      <span>Proven marketing materials provided</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span>Dedicated affiliate support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-green-600" />
                      <span>Global audience appeal</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Link
                    to="/affiliates"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Become an Affiliate
                    <TrendingUp className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
