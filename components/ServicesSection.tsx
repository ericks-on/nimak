'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Service {
  id: string
  image: string
  title: string
  description: string
  href: string
}

interface ServicesSectionProps {
  className?: string
}

const ServicesSection = ({ className = '' }: ServicesSectionProps) => {
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

    const element = document.getElementById('services-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const services: Service[] = [
    {
      id: 'event-concept',
      image: '/images/event2.jpg',
      title: 'Event Concept Creation',
      description: 'We take a holistic approach to crafting creative event concepts that resonate with your audience',
      href: '/services/event-concept'
    },
    {
      id: 'brand-management',
      image: '/images/event3.jpg',
      title: 'Brand Management',
      description: 'Strategic brand development and management services',
      href: '/services/brand-management'
    },
    {
      id: 'event-marketing',
      image: '/images/event7.jpg',
      title: 'Event Marketing',
      description: 'Elevate your brand\'s presence through impactful event marketing strategies',
      href: '/services/event-marketing'
    },
    {
      id: 'b2b-meetings',
      image: '/images/p12.jpg',
      title: 'B2B Meetings',
      description: 'Strategic, pre-arranged appointments to connect buyers, sellers, and partners',
      href: '/services/b2b-meetings'
    },
    {
      id: 'pr-communication',
      image: '/images/p15.jpg',
      title: 'PR & Communication',
      description: 'End-to-end communication support to strengthen your public image',
      href: '/services/pr-communication'
    },
    {
      id: 'event-design',
      image: '/images/event10.jpg',
      title: 'Event Design & Production',
      description: 'Bring your event vision to life with stunning design and flawless execution',
      href: '/services/event-design'
    },
    {
      id: 'vendor-management',
      image: '/images/p16.jpg',
      title: 'Vendor Management',
      description: 'Ensure every vendor meets your standards and delivers quality',
      href: '/services/vendor-management'
    },
    {
      id: 'logistics-management',
      image: '/images/event8.jpg',
      title: 'Logistics Management',
      description: 'End-to-end logistics support to keep your event running smoothly',
      href: '/services/logistics-management'
    }
  ]

  return (
    <section 
      id="services-section"
      className={`py-20 bg-white ${className}`}
      aria-label="Our Services"
    >
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-4">
            What We Offer
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-nimak-navy mb-6">
            Our Services
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From concept to execution, we provide comprehensive event management solutions 
            tailored to elevate your brand and create unforgettable experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`card-nimak group p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="mb-6">
                <div className="w-full h-50 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Service Title */}
              <h4 className="text-lg font-bold text-nimak-navy mb-4 group-hover:text-nimak-blue transition-colors duration-300">
                {service.title}
              </h4>
              
              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* Learn More Button */}
              <div className="mt-auto">
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-nimak-blue hover:text-nimak-navy font-semibold text-sm group-hover:gap-2 transition-all duration-300 group/link"
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`text-center mt-16 pt-12 border-t border-gray-100 transition-all duration-1000 delay-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h4 className="text-2xl font-bold text-nimak-navy mb-4">
            Ready to Transform Your Event?
          </h4>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let our expert team bring your vision to life with our comprehensive suite of event management services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="btn btn-primary btn-lg group"
            >
              Get Started Today
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/services"
              className="btn btn-outline btn-lg group"
            >
              View All Services
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Join hundreds of satisfied clients who trust Nimak Media & Events
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection