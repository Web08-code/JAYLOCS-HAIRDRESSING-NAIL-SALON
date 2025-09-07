import React from 'react'
import { Star, Users, Award, Heart, Scissors, Palette } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '15+', label: 'Services Offered', icon: Star },
    { number: '100%', label: 'Student Friendly', icon: Heart }
  ]

  const team = [
    {
      name: 'Jay',
      role: 'Founder & Lead Stylist',
      specialties: ['Dreadlocks', 'Braiding', 'Hair Styling'],
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      bio: 'With over 3 years of experience, Jay founded JAYLOCS with a vision to provide quality beauty services to the Meru University community.'
    },
    {
      name: 'Grace',
      role: 'Nail Technician',
      specialties: ['Manicures', 'Pedicures', 'Nail Art'],
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
      bio: 'Grace specializes in nail care and art, bringing creativity and precision to every manicure and pedicure service.'
    },
    {
      name: 'Faith',
      role: 'Hair Stylist',
      specialties: ['Weaving', 'Braids', 'Styling'],
      image: 'https://images.pexels.com/photos/3384253/pexels-photo-3384253.jpeg',
      bio: 'Faith is our expert in modern hair styling techniques, ensuring every client leaves feeling beautiful and confident.'
    }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our services or products, ensuring every client receives premium care.',
      icon: Star
    },
    {
      title: 'Student Focused',
      description: 'Understanding student budgets and schedules, we offer flexible timing and affordable pricing.',
      icon: Users
    },
    {
      title: 'Professional Excellence',
      description: 'Our team continuously updates their skills to provide the latest techniques and trends in beauty.',
      icon: Award
    },
    {
      title: 'Community Care',
      description: 'We\'re not just a salon - we\'re part of the Meru community, caring for our neighbors and friends.',
      icon: Heart
    }
  ]

  const milestones = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'JAYLOCS was founded with a simple mission: to provide quality beauty services to Meru University students.'
    },
    {
      year: '2022',
      title: 'Growing Community',
      description: 'Expanded services to include nail care and dreadlock maintenance, serving over 200 regular clients.'
    },
    {
      year: '2023',
      title: 'Fashion Forward',
      description: 'Added trench coats collection, recognizing the need for stylish weather-appropriate clothing in Meru.'
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched online booking system and expanded to serve the broader Meru community beyond the university.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About JAYLOCS</h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Empowering beauty, one student at a time. We're more than a salon - we're your beauty partners in Meru.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg opacity-90">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              JAYLOCS began as a dream to create a beauty sanctuary specifically designed for the unique needs 
              of university students in Meru. What started as a small operation has grown into a beloved 
              community fixture, serving hundreds of satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why We Started JAYLOCS</h3>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  As students ourselves, we understood the challenges of finding quality, affordable beauty services 
                  that fit into a student's schedule and budget. Too often, students had to choose between quality 
                  and affordability, or travel far from campus for professional services.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  JAYLOCS was created to bridge this gap. We wanted to create a space where Meru University students 
                  could access professional beauty services without breaking the bank, right here in their community.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we're proud to serve not just students, but the entire Meru community, from Maua to Nchiru 
                  and beyond. Our commitment to quality, affordability, and community remains stronger than ever.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg"
                  alt="Hair styling"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg"
                  alt="Nail care"
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Values</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These core values guide everything we do at JAYLOCS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our passionate team of beauty professionals is dedicated to making you look and feel amazing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Journey</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              From humble beginnings to becoming Meru's favorite beauty destination
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-600 transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full transform md:-translate-x-2"></div>
                  
                  <div className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-pink-600 mr-4">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Scissors className="w-10 h-10" />
              </div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Palette className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Mission</h2>
          </div>
          
          <p className="text-2xl opacity-90 mb-12 leading-relaxed">
            To empower every client who walks through our doors with confidence, beauty, and exceptional service. 
            We believe that looking good isn't a luxury - it's a right, especially for hardworking students building their futures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="opacity-90 text-lg">Quality beauty services at student-friendly prices</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="opacity-90 text-lg">Professional standards in every service we provide</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="opacity-90 text-lg">Building lasting relationships with our Meru family</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About