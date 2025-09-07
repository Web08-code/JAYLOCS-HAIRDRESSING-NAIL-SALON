import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronUp,
  ChevronDown,
  LogOut,
  Camera
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [dropdowns, setDropdowns] = useState<{[key: string]: boolean}>({})
  const { user, logout } = useAuth()
  const { items } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDropdown = (key: string) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Hair Dressing', 
      path: '/hairdressing',
      dropdown: [
        { name: 'Braids - KES 300', path: '/hairdressing/braids' },
        { name: 'Knotless Braids - KES 500', path: '/hairdressing/knotless' },
        { name: 'Weaving - KES 500', path: '/hairdressing/weaving' },
        { name: 'Wash & Blow Dry - KES 200', path: '/hairdressing/wash-blow' },
        { name: 'Twist Out - KES 400', path: '/hairdressing/twist' },
      ]
    },
    {
      name: 'Nail Care',
      path: '/nailcare',
      dropdown: [
        { name: 'Pedicure + Polish - KES 400', path: '/nailcare/pedicure-polish' },
        { name: 'Pedicure + Gel Polish - KES 500', path: '/nailcare/pedicure-gel' },
        { name: 'Manicure + Polish - KES 250', path: '/nailcare/manicure-polish' },
        { name: 'Manicure + Gel Polish - KES 350', path: '/nailcare/manicure-gel' },
        { name: 'Polish - KES 100', path: '/nailcare/polish' },
        { name: 'Gel Polish - KES 200', path: '/nailcare/gel-polish' },
        { name: 'Tip Polish - KES 300', path: '/nailcare/tip-polish' },
        { name: 'Tip Gel - KES 500', path: '/nailcare/tip-gel' },
        { name: 'Stick-on Polish - KES 300', path: '/nailcare/stick-polish' },
        { name: 'Stick-on Gel - KES 400', path: '/nailcare/stick-gel' },
        { name: 'Eyebrows Tattoo - KES 200', path: '/nailcare/eyebrows' },
      ]
    },
    { name: 'Dreadlocks', path: '/dreadlocks' },
    { name: 'Trench Coats', path: '/coats' },
    { name: 'Book Now', path: '/booking' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Announcements Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center text-sm font-medium">
            <div className="text-center">
              🚨 IMPORTANT: Come fully equipped (buy braids/products in advance) & with washed, blow-dried hair! 🚨
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  JAYLOCS
                </h1>
                <p className="text-xs text-gray-600">HAIRDRESSING & NAIL SALON</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2 cursor-pointer">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                  
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search, Cart, User */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-48 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </form>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>

              {/* User */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200">
                    <User className="w-6 h-6" />
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute right-0 top-full w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="px-4 py-2 text-sm text-gray-600 border-b">
                      {user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                >
                  <User className="w-6 h-6" />
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-pink-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </form>
              
              {navigationItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    {item.dropdown ? (
                      <button className="block py-3 text-gray-700 hover:text-pink-600 transition-colors duration-200 flex-1 text-left">
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-3 text-gray-700 hover:text-pink-600 transition-colors duration-200 flex-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(`mobile-${item.name}`)}
                        className="p-3 text-gray-700 hover:text-pink-600"
                      >
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdowns[`mobile-${item.name}`] ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {item.dropdown && dropdowns[`mobile-${item.name}`] && (
                    <div className="pl-4 pb-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Working Hours Banner */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-purple-800 font-medium">
            📅 Open Thu-Sun: 8:30AM-7PM | Closed Mon-Wed | 📍 Meru Town
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">JAYLOCS SALON</h3>
              <p className="text-gray-300 text-sm mb-4">
                Premier hairdressing & nail salon serving Meru University students and the community with professional care.
              </p>
              <div className="text-sm text-gray-400">
                <p>📍 Meru Town</p>
                <p>📞 Available Thu-Sun</p>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-pink-400">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                    title="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 320 512">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors duration-200"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                    title="Pinterest"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                    title="TikTok"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Services</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Hair Dressing & Styling</li>
                <li>Nail Care & Polish</li>
                <li>Dreadlocks (Installation & Maintenance)</li>
                <li>Fashion Trench Coats</li>
              </ul>
            </div>

            {/* Nearby Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Service Areas</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Nchiru (Main Location)</li>
                <li>Meru Town</li>
                <li>Maua</li>
                <li>Meru University</li>
                <li>Katheri</li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Payment Options</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 448 512">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  M-Pesa
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <svg className="w-8 h-8 text-purple-600" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 123-.3 1.2-1 1.7-1.8 1.7-.4 0-.7-.2-1.1-.4l-39.8-13.1c-1.6-.5-2.4-2.2-1.4-3.9l67.7-119c1.2-2.1 4.2-2.4 5.8-.4 1.6 2-.3 4.5-2.3 4.9-32.6 7.3-65.2 14.8-97.8 22.2a4.79 4.79 0 0 1-2.9-9.1l128-29.7c.9-.2 1.9.1 2.3 1 .4.9.1 1.9-.6 2.5l-75.4 66.4c-1.4 1.2-3.6.8-4.4-.8-.8-1.6.3-3.5 2.1-3.5 12.7 0 25.5 0 38.2-.1 2.7 0 5.2 1.8 5.2 4.5zm21.8-208.8c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V87.1zm-82.4 64c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm164.9 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm82.4 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zM242.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4zm-82.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2H160zm164.9 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4z"/>
                  Cash
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 123-.3 1.2-1 1.7-1.8 1.7-.4 0-.7-.2-1.1-.4l-39.8-13.1c-1.6-.5-2.4-2.2-1.4-3.9l67.7-119c1.2-2.1 4.2-2.4 5.8-.4 1.6 2-.3 4.5-2.3 4.9-32.6 7.3-65.2 14.8-97.8 22.2a4.79 4.79 0 0 1-2.9-9.1l128-29.7c.9-.2 1.9.1 2.3 1 .4.9.1 1.9-.6 2.5l-75.4 66.4c-1.4 1.2-3.6.8-4.4-.8-.8-1.6.3-3.5 2.1-3.5 12.7 0 25.5 0 38.2-.1 2.7 0 5.2 1.8 5.2 4.5zm21.8-208.8c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V87.1zm-82.4 64c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm164.9 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm82.4 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zM242.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4zm-82.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2H160zm164.9 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4z"/>
                  </svg>
                  PayPal
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                  Payless (Kenya)
                </li>
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
                  KCB Paybill
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 JAYLOCS HAIRDRESSING & NAIL SALON. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default Layout