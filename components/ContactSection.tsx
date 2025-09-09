'use client'

import { useEffect, useState } from 'react'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from 'lucide-react'

interface ContactSectionProps {
  className?: string
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const element = document.getElementById('contact-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Primary Email',
      value: 'info@nimakmediaevents.com',
      href: 'mailto:info@nimakmediaevents.com'
    },
    {
      icon: EnvelopeIcon,
      label: 'Alternative Email',
      value: 'nimakmediaevents@gmail.com',
      href: 'mailto:nimakmediaevents@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+254 721 330 158',
      href: 'tel:+254721330158'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Karen, Nairobi',
      href: 'https://maps.google.com/?q=Karen,Nairobi'
    },
    {
      icon: GlobeAltIcon,
      label: 'Website',
      value: 'www.nimakmediaevents.com',
      href: 'https://www.nimakmediaevents.com'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: TwitterIcon, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: InstagramIcon, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#', color: 'hover:text-blue-700' }
  ]

  return (
    <section 
      id="contact-section"
      className={`py-20 bg-white ${className}`}
      aria-label="Contact Information"
    >
      <div className="container-custom mx-auto">
        
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Reach out to us through our various channels. We're here to help you bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Contact Info Card */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="card-nimak p-8 h-full">
              
              {/* Company Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-nimak rounded-2xl mb-4 shadow-lg">
                  <BuildingOfficeIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-nimak-navy mb-2">
                  Nimak Media & Events
                </h3>
                <p className="text-nimak-blue font-semibold text-lg">
                  Your Full-Service Event Management Partner
                </p>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`flex items-start space-x-4 transition-all duration-500 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-nimak-blue/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-nimak-blue" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {info.label}
                      </p>
                      <a 
                        href={info.href}
                        className="text-gray-900 hover:text-nimak-blue transition-colors duration-300 break-all"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-nimak-blue hover:text-white ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder Card */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="card-nimak p-8 h-full flex flex-col items-center justify-center text-center">
              <MapPinIcon className="h-16 w-16 text-nimak-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-nimak-navy mb-2">
                Find Us Here
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                Our office is located in Karen, Nairobi.
              </p>
              <a 
                href="https://maps.google.com/?q=Karen,Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nimak-blue hover:text-nimak-navy font-medium transition-colors duration-300 btn btn-outline btn-sm mt-4"
              >
                View on Map
                <GlobeAltIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`text-center mt-16 pt-12 border-t border-gray-100 transition-all duration-1000 delay-800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-nimak-subtle rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-nimak-navy mb-4">
              Partner with us to create unforgettable moments
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              Whether you're planning a corporate event, product launch, or special celebration, 
              our team is ready to transform your vision into an extraordinary experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+254721330158"
                className="btn btn-primary btn-lg group"
              >
                Call Us Now
                <PhoneIcon className="h-5 w-5 ml-2 transition-transform group-hover:scale-110" />
              </a>
              
              <a 
                href="mailto:info@nimakmediaevents.com"
                className="btn btn-outline btn-lg group"
              >
                Send Email
                <EnvelopeIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection