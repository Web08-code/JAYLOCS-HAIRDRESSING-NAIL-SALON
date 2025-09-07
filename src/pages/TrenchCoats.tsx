import React, { useState } from 'react'
import { Plus, Star, ShoppingCart, Filter } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const TrenchCoats: React.FC = () => {
  const { addItem } = useCart()
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('price-low')

  const coats = [
    {
      id: 'classic-beige',
      name: 'Classic Beige Trench',
      price: 4500,
      originalPrice: 5500,
      category: 'classic',
      size: ['S', 'M', 'L', 'XL'],
      color: 'Beige',
      description: 'Timeless beige trench coat perfect for Meru\'s cool weather. Water-resistant and stylish.',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      features: ['Water-resistant', 'Double-breasted', 'Belted waist', 'Classic collar'],
      rating: 4.8
    },
    {
      id: 'modern-black',
      name: 'Modern Black Trench',
      price: 5200,
      originalPrice: 6000,
      category: 'modern',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Black',
      description: 'Contemporary black trench with modern silhouette. Perfect for university and formal occasions.',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      features: ['Modern cut', 'Breathable fabric', 'Hidden buttons', 'Adjustable cuffs'],
      rating: 4.9
    },
    {
      id: 'lightweight-navy',
      name: 'Lightweight Navy Coat',
      price: 3800,
      originalPrice: 4500,
      category: 'lightweight',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: 'Navy Blue',
      description: 'Light yet warm navy coat ideal for daily wear around Meru and university campus.',
      image: 'https://images.pexels.com/photos/1040947/pexels-photo-1040947.jpeg',
      features: ['Lightweight', 'Windproof', 'Multiple pockets', 'Casual style'],
      rating: 4.7
    },
    {
      id: 'hooded-olive',
      name: 'Hooded Olive Trench',
      price: 4800,
      originalPrice: 5700,
      category: 'casual',
      size: ['M', 'L', 'XL'],
      color: 'Olive Green',
      description: 'Stylish olive trench with hood. Great for rainy days and outdoor activities in Maua.',
      image: 'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg',
      features: ['Detachable hood', 'Storm flaps', 'Thermal lining', 'Durable fabric'],
      rating: 4.6
    },
    {
      id: 'premium-camel',
      name: 'Premium Camel Coat',
      price: 6500,
      originalPrice: 7800,
      category: 'premium',
      size: ['S', 'M', 'L', 'XL'],
      color: 'Camel',
      description: 'Luxurious camel coat with premium materials. Perfect for special occasions and professional settings.',
      image: 'https://images.pexels.com/photos/1040948/pexels-photo-1040948.jpeg',
      features: ['Premium wool blend', 'Silk lining', 'Hand-finished details', 'Luxury buttons'],
      rating: 5.0
    },
    {
      id: 'student-special-grey',
      name: 'Student Special - Grey',
      price: 2800,
      originalPrice: 3500,
      category: 'budget',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: 'Grey',
      description: 'Affordable grey trench specifically designed for students. Great quality at student-friendly prices.',
      image: 'https://images.pexels.com/photos/1040949/pexels-photo-1040949.jpeg',
      features: ['Student discount', 'Basic water resistance', 'Simple design', 'Easy care'],
      rating: 4.4
    },
    {
      id: 'winter-burgundy',
      name: 'Winter Burgundy Coat',
      price: 5800,
      originalPrice: 6800,
      category: 'winter',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: 'Burgundy',
      description: 'Heavy-duty burgundy coat for cold Meru mornings. Excellent insulation and warmth.',
      image: 'https://images.pexels.com/photos/1040950/pexels-photo-1040950.jpeg',
      features: ['Extra insulation', 'Wind resistant', 'Warm lining', 'Deep pockets'],
      rating: 4.8
    },
    {
      id: 'trendy-pink',
      name: 'Trendy Pink Trench',
      price: 4200,
      originalPrice: 5000,
      category: 'trendy',
      size: ['XS', 'S', 'M', 'L'],
      color: 'Pink',
      description: 'Fashionable pink trench for the style-conscious. Stand out on campus with this unique piece.',
      image: 'https://images.pexels.com/photos/1040951/pexels-photo-1040951.jpeg',
      features: ['Fashion-forward', 'Unique color', 'Instagram-worthy', 'Comfortable fit'],
      rating: 4.5
    }
  ]

  const categories = [
    { value: 'all', label: 'All Coats' },
    { value: 'classic', label: 'Classic' },
    { value: 'modern', label: 'Modern' },
    { value: 'casual', label: 'Casual' },
    { value: 'premium', label: 'Premium' },
    { value: 'budget', label: 'Budget-Friendly' },
    { value: 'winter', label: 'Winter Collection' },
    { value: 'trendy', label: 'Trendy Styles' }
  ]

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' }
  ]

  const filteredAndSortedCoats = coats
    .filter(coat => filter === 'all' || coat.category === filter)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleAddToCart = (coat: typeof coats[0]) => {
    addItem({
      id: coat.id,
      name: coat.name,
      price: coat.price,
      type: 'product'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trench Coats Collection</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stylish and warm trench coats perfect for Meru's weather - designed for university life
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            <div
              key={coat.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={coat.image}
                  alt={coat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Rating */}
                    <svg className="w-6 h-6 text-purple-600" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 123-.3 1.2-1 1.7-1.8 1.7-.4 0-.7-.2-1.1-.4l-39.8-13.1c-1.6-.5-2.4-2.2-1.4-3.9l67.7-119c1.2-2.1 4.2-2.4 5.8-.4 1.6 2-.3 4.5-2.3 4.9-32.6 7.3-65.2 14.8-97.8 22.2a4.79 4.79 0 0 1-2.9-9.1l128-29.7c.9-.2 1.9.1 2.3 1 .4.9.1 1.9-.6 2.5l-75.4 66.4c-1.4 1.2-3.6.8-4.4-.8-.8-1.6.3-3.5 2.1-3.5 12.7 0 25.5 0 38.2-.1 2.7 0 5.2 1.8 5.2 4.5zm21.8-208.8c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V87.1zm-82.4 64c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm164.9 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm82.4 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zM242.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4zm-82.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2H160zm164.9 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4z"/>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{coat.rating}</span>
                  </div>
                </div>

                {/* Discount Badge */}
                {coat.originalPrice > coat.price && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      Save KES {(coat.originalPrice - coat.price).toLocaleString()}
                    </div>
                  </div>
                )}

                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                    {coat.color}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {coat.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {coat.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-pink-600">
                      KES {coat.price.toLocaleString()}
                    </span>
                    {coat.originalPrice > coat.price && (
                      <span className="text-lg text-gray-400 line-through">
                        KES {coat.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600">Available sizes: </span>
                  <div className="flex space-x-2 mt-2">
                    {coat.size.map(size => (
                      <span
                        key={size}
                        className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-1">
                    {coat.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAddToCart(coat)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Plus className="w-5 h-5" />
                  <span className="group-hover:hidden">Add to Cart</span>
                  <span className="hidden group-hover:inline">Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Trench Coats?</h2>
            <p className="text-xl text-gray-600">Quality coats designed for Meru's unique climate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect for Meru Weather</h3>
              <p className="text-gray-600">
                Specially selected coats that handle Meru's cool mornings, warm afternoons, and occasional rain perfectly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Student-Friendly Prices</h3>
              <p className="text-gray-600">
                Special pricing for university students with payment plans available. Quality doesn't have to be expensive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                Durable, comfortable fabrics that last through university years and beyond. Investment pieces worth buying.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Payment Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">M-Pesa</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Cash</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h8.418c2.508 0 4.514.893 5.535 2.459 1.008 1.566 1.008 3.618 0 5.184-1.021 1.566-3.027 2.459-5.535 2.459h-4.94l-1.018 4.865h2.629c.484 0 .875.381.875.852 0 .471-.391.852-.875.852H7.076c-.484 0-.875-.381-.875-.852 0-.471.391-.852.875-.852zm1.646-7.896h3.735c1.756 0 3.045-.635 3.598-1.777.553-1.142.553-2.651 0-3.793-.553-1.142-1.842-1.777-3.598-1.777H9.34L8.722 13.441z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">PayPal</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Payless</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-6.222 6.222a.749.749 0 01-1.06 0L6.432 10.54a.75.75 0 111.061-1.061l3.323 3.323L16.507 7.1a.75.75 0 111.061 1.06z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">KCB Paybill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrenchCoats