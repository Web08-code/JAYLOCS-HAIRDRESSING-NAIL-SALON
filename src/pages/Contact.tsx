import React, { useState } from 'react'
import { Phone, Mail, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the contact form data to your backend
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      title: 'Location',
      details: ['Nchiru, Meru County', 'Near Meru University', 'Serving Maua, Meru Town & surrounding areas'],
      color: 'pink'
    },
    {
      title: 'Phone',
      details: ['Available during working hours', 'Thursday - Sunday', '8:30 AM - 7:00 PM'],
      color: 'purple'
    },
    {
      title: 'Email',
      details: ['info@jaylocs.com', 'bookings@jaylocs.com', 'Quick response guaranteed'],
      color: 'pink'
    },
    {
      title: 'Working Hours',
      details: ['Thu-Sun: 8:30 AM - 7:00 PM', 'Mon-Wed: CLOSED', 'Appointments preferred'],
      color: 'purple'
    }
  ]

  const serviceAreas = [
    'Nchiru (Main Location)',
    'Meru Town',
    'Maua',
    'Meru University',
    'Katheri',
    'Kianjai',
    'Mitunguu',
    'Timau',
    'Nanyuki (special arrangements)'
  ]

  const faqs = [
    {
      question: 'Do I need to bring my own hair products?',
      answer: 'Yes, please bring your own braids, hair extensions, and any specific products you prefer. This ensures you get exactly what you want and helps us provide the best service.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept M-Pesa, Cash, PayPal, Payless (Kenya), and KCB Paybill. We also offer student discounts with valid university ID.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 1-2 days in advance, especially for weekend appointments. Popular services like Sisterlocks may require longer advance booking.'
    },
    {
      question: 'Do you offer group discounts for events?',
      answer: 'Yes! We offer special rates for group bookings, weddings, and university events. Contact us for custom pricing for groups of 3 or more.'
    },
    {
      question: 'Can you travel to nearby areas?',
      answer: 'We primarily operate from our Meru Town location, but we can arrange special services for events in Maua, Nchiru, and other nearby areas with advance notice.'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting JAYLOCS! We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Get in touch with our friendly team - we're here to help with all your beauty needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${
                      info.color === 'pink' 
                        ? 'from-pink-500 to-pink-600' 
                        : 'from-purple-500 to-purple-600'
                    } rounded-lg flex items-center justify-center mb-6`}>
                      {info.title === 'Location' && (
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      )}
                      {info.title === 'Phone' && (
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      )}
                      {info.title === 'Email' && (
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      )}
                      {info.title === 'Working Hours' && (
                        <Clock className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-base">{detail}</p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Areas We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.234567890123!2d37.6500000!3d0.0500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNchiru%2C%20Meru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JAYLOCS Salon Location"
                ></iframe>
                
                {/* Business info overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">J</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">JAYLOCS Salon</h4>
                      <p className="text-xs text-gray-600">Nchiru, Meru County</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="0712345678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject...</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="pricing">Pricing Questions</option>
                    <option value="group">Group Booking</option>
                    <option value="complaint">Complaint/Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Payment Info */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Methods We Accept</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">M-Pesa</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Cash</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-purple-600" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 123-.3 1.2-1 1.7-1.8 1.7-.4 0-.7-.2-1.1-.4l-39.8-13.1c-1.6-.5-2.4-2.2-1.4-3.9l67.7-119c1.2-2.1 4.2-2.4 5.8-.4 1.6 2-.3 4.5-2.3 4.9-32.6 7.3-65.2 14.8-97.8 22.2a4.79 4.79 0 0 1-2.9-9.1l128-29.7c.9-.2 1.9.1 2.3 1 .4.9.1 1.9-.6 2.5l-75.4 66.4c-1.4 1.2-3.6.8-4.4-.8-.8-1.6.3-3.5 2.1-3.5 12.7 0 25.5 0 38.2-.1 2.7 0 5.2 1.8 5.2 4.5zm21.8-208.8c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V87.1zm-82.4 64c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm164.9 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zm82.4 0c0-2.9 2.4-5.2 5.2-5.2h9.4c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2v-64zM242.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4zm-82.4 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2H160zm164.9 0c2.9 0 5.2 2.3 5.2 5.2v64c0 2.9-2.3 5.2-5.2 5.2h-9.4c-2.9 0-5.2-2.3-5.2-5.2V5.2c0-2.9 2.3-5.2 5.2-5.2h9.4z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">PayPal</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Payless</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">KCB Paybill</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact