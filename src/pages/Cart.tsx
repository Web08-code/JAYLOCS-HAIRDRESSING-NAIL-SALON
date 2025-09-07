import React from 'react'
import { ShoppingCart, Plus, Minus, X, CreditCard, ArrowRight } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
  const { items, serviceItems, productItems, removeItem, updateQuantity, clearCart, total, serviceTotal, productTotal } = useCart()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const paymentMethods = [
    { 
      name: 'M-Pesa', 
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      ), 
      description: 'Pay via M-Pesa mobile money' 
    },
    { 
      name: 'Cash', 
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ), 
      description: 'Pay cash at the salon' 
    },
    { 
      name: 'PayPal', 
      icon: (
        <svg className="w-6 h-6 text-purple-600" viewBox="0 0 384 512" fill="currentColor">
          <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 123-.3 1.2-1 1.7-1.8 1.7-.4 0-.7-.2-1.1-.4l-39.8-13.1c-1.6-.5-2.4-2.2-1.4-3.9l67.7-119c1.2-2.1 4.2-2.4 5.8-.4 1.6 2-.3 4.5-2.3 4.9-32.6 7.3-65.2 14.8-97.8 22.2a4.79 4.79 0 0 1-2.9-9.1l128-29.7c.9-.2 1.9.1 2.3 1 .4.9.1 1.9-.6 2.5l-75.4 66.4c-1.4 1.2-3.6.8-4.4-.8-.8-1.6.3-3.5 2.1-3.5 12.7 0 25.5 0 38.2-.1 2.7 0 5.2 1.8 5.2 4.5zm21.8-208.8c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V87.1zm-82.4 64c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm164.9 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm82.4 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zM242.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4zm-82.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2H160zm164.9 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4z"/>
        </svg>
      ), 
      description: 'Secure online payment' 
    },
    { 
      name: 'Payless', 
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ), 
      description: 'Payless Kenya payment' 
    },
    { 
      name: 'KCB Paybill', 
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg>
      ), 
      description: 'KCB mobile banking' 
    }
  ]

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl opacity-90">Your beauty items are waiting for you</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Explore our services and add items to get started with your beauty journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hairdressing"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200"
              >
                Browse Hair Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/coats"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-200"
              >
                Shop Trench Coats
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl opacity-90">
              Review your selected items and proceed to booking
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Cart Items ({items.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.type === 'service' ? 'Beauty Service' : 'Fashion Item'}
                        </p>
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-pink-600">
                            KES {(item.price * item.quantity).toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500">
                            KES {item.price.toLocaleString()} each
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 text-red-400 hover:text-red-600 transition-colors duration-200"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/hairdressing"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <div className="text-pink-600 font-semibold mb-1">Hair Services</div>
                  <div className="text-sm text-gray-600">Braids, styling & more</div>
                </Link>
                <Link
                  to="/nailcare"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <div className="text-purple-600 font-semibold mb-1">Nail Care</div>
                  <div className="text-sm text-gray-600">Manicures & pedicures</div>
                </Link>
                <Link
                  to="/coats"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <div className="text-pink-600 font-semibold mb-1">Trench Coats</div>
                  <div className="text-sm text-gray-600">Fashion collection</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

              {/* Subtotal Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({items.length} items)</span>
                  <span className="font-medium">KES {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-pink-600">
                      KES {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="space-y-3 mb-6">
                {serviceItems.length > 0 && (
                  <Link
                    to="/booking"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Book Appointments (KES {serviceTotal.toLocaleString()})</span>
                  </Link>
                )}
                {productItems.length > 0 && (
                  <Link
                    to="/order"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Place Order (KES {productTotal.toLocaleString()})</span>
                  </Link>
                )}
              </div>

              {/* Payment Methods */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-800 mb-4">Payment Options</h4>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">{method.icon}</div>
                      <div>
                        <div className="font-medium text-gray-800 text-sm">{method.name}</div>
                        <div className="text-xs text-gray-600">{method.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Discount Info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">💳 Student Discounts</h4>
                <p className="text-sm text-gray-600">
                  Show your valid student ID for additional discounts on selected services!
                </p>
              </div>

              {/* Security Info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  🔒 Your information is secure and protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart