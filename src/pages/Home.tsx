import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Scissors, 
  Palette, 
  Clock, 
  Star, 
  ArrowRight,
  Sparkles,
  Heart,
  CheckCircle
} from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const Home: React.FC = () => {
  const { addItem } = useCart()

  const services = [
    {
      title: 'Hair Dressing',
      description: 'Braids, weaving, wash & blow dry, and twist outs',
      price: 'From KES 200',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      link: '/hairdressing'
    },
    {
      title: 'Nail Care',
      description: 'Manicures, pedicures, gel polish, and nail art',
      price: 'From KES 100',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
      link: '/nailcare'
    },
    {
      title: 'Dreadlocks',
      description: 'Installation, maintenance, styling, and consultation',
      price: 'From KES 500',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
      link: '/dreadlocks'
    },
    {
      title: 'Trench Coats',
      description: 'Stylish coats perfect for Meru weather',
      price: 'From KES 2,500',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      link: '/coats'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Amazing braiding service! My knotless braids looked perfect and lasted for weeks.',
      rating: 5
    },
    {
      name: 'Faith K.',
      text: 'The nail art is incredible. Professional service and great prices for students.',
      rating: 5
    },
    {
      name: 'Grace W.',
      text: 'Got my dreadlocks installed here - excellent work and aftercare advice.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-pink-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              JAYLOCS
              <span className="block text-2xl md:text-4xl lg:text-5xl font-light mt-4">
                HAIRDRESSING & NAIL SALON
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Premium beauty services for Meru University students and the community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Appointment
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Working Hours</h3>
              <p className="text-gray-600 text-lg">Thu-Sun: 8:30AM-7PM</p>
              <p className="text-gray-600 text-lg">Mon-Wed: CLOSED</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Location</h3>
              <p className="text-gray-600 text-lg">Nchiru, Meru</p>
              <p className="text-gray-600 text-lg">Serving Maua, Nchiru & surrounding areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Student Friendly</h3>
              <p className="text-gray-600 text-lg">Special rates for</p>
              <p className="text-gray-600 text-lg">Meru University students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us in Nchiru</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Nchiru, easily accessible from Meru University and surrounding areas
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.234567890123!2d37.6500000!3d0.0500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNchiru%2C%20Meru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JAYLOCS Location in Nchiru"
              ></iframe>
              
              {/* Overlay with business info */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">J</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">JAYLOCS Salon</h3>
                    <p className="text-sm text-gray-600">Nchiru, Meru County</p>
                    <p className="text-xs text-gray-500">Thu-Sun: 8:30AM-7PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy to Find</h3>
              <p className="text-sm text-gray-600">Located in central Nchiru, visible from main road</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Accessible</h3>
              <p className="text-sm text-gray-600">Easy access by matatu, boda boda, or private transport</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Central Location</h3>
              <p className="text-sm text-gray-600">Perfect location serving Meru University and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional beauty services with premium quality and student-friendly prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-purple-600 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Announcements */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Important Information</h2>
            <p className="text-2xl opacity-90">Please read before booking your appointment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Come Prepared</h3>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Please bring your own braids, hair products, and any materials needed for your service. 
                We want to ensure you get exactly what you want!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Hair Preparation</h3>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Come with freshly washed and blow-dried hair. This helps us provide the best 
                service and ensures optimal results for your styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our amazing clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            Book your appointment today and experience premium beauty services 
            designed for the Meru University community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-purple-600 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-xl hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home