'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRightIcon, 
  PlayCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClipboardDocumentListIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline'

interface HeroSectionProps {
  backgroundImage?: string
  className?: string
}

const HeroSection = ({ 
  backgroundImage = '/images/hero4.jpg',
  className = '' 
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Services data for the overlay
  const services = [
    {
      icon: CalendarDaysIcon,
      name: 'Event Planning',
      description: 'Comprehensive event planning from concept to execution, ensuring every detail is perfect.',
      href: '/services/event-planning'
    },
    {
      icon: MapPinIcon,
      name: 'Venue Sourcing',
      description: 'Expert venue selection and booking services to find the perfect location for your event.',
      href: '/services/venue-sourcing'
    },
    {
      icon: ClipboardDocumentListIcon,
      name: 'Logistics Management',
      description: 'Complete logistical coordination including catering, transportation, and vendor management.',
      href: '/services/logistics'
    },
    {
      icon: SpeakerWaveIcon,
      name: 'Audiovisual Production',
      description: 'Professional AV services including sound, lighting, and multimedia production for impactful events.',
      href: '/services/audiovisual'
    }
  ]

  return (
    <section 
      className={`min-h-screen flex flex-col md:pr-48 md:pl-48 ${className}`}
      aria-label="Hero section"
    >
      {/* Main Hero Container with Image */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Next.js Image Background */}
        <Image
          src={backgroundImage}
          alt="Professional event management background"
          // fill
          width={1920}
          height={1080}
          className="object-cover hero-img"
          priority
        />
        
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <div 
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                Your Vision,
                <span className="block text-nimak-light"> Our Expertise</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow">
                Creating unforgettable experiences that leave lasting impressions. 
                Where every event becomes a masterpiece.
              </p>
              
              <div 
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <Link 
                  href="/contact"
                  className="btn btn-primary btn-lg bg-nimak-blue hover:bg-nimak-navy text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 group transition-all duration-300"
                >
                  Start Planning Your Event
                  <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link 
                  href="/services"
                  className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white hover:text-nimak-navy group transition-all duration-300"
                >
                  Explore Our Services
                  <PlayCircleIcon className="h-5 w-5 ml-2 transition-transform group-hover:scale-110" />
                </Link>
              </div>
              
              <div 
                className={`mt-12 text-white/80 transition-all duration-1000 delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  Trusted by 100+ clients • 5+ years of excellence • Kenya&apos;s premier event management company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className=" -mt-24 z-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div>

            {/* Services Grid */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={service.name}
                    className={`card-nimak groupp-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1  ${
                      isVisible ? 'animate-fade-in-up' : ''
                    }`}
                    style={{ animationDelay: `${1700 + index * 100}ms` }}
                  >
                    {/* Service Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-nimak-blue/90 group-hover:bg-nimak-blue mb-4 transition-colors duration-300 w-full">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Service Name */}
                    <h4 className="font-semibold px-4 text-lg text-gray-900 mb-2 group-hover:text-nimak-blue transition-colors duration-300">
                      {service.name}
                    </h4>
                    
                    {/* Service Description */}
                    <p className="text-gray-600 px-4 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <Link 
                      href={service.href}
                      className="inline-flex items-center px-4 text-nimak-blue hover:text-nimak-navy font-medium text-sm group/link"
                    >
                      Learn More
                      <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* View All Services CTA */}
              <div 
                className={`text-center mt-8 pt-6 border-t border-gray-100 transition-all duration-1000 delay-2100 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-3 bg-nimak-blue hover:bg-nimak-navy text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  View All Services
                  <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <p className="text-gray-500 text-sm mt-3">
                  Discover our complete range of event management solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection