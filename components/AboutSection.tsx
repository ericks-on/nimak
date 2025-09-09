'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface AboutSectionProps {
  className?: string
}

const AboutSection = ({ className = '' }: AboutSectionProps) => {
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

    const element = document.getElementById('about-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section 
      id="about-section"
      className={`py-20 bg-gradient-nimak-subtle ${className}`}
      aria-label="About Nimak Media & Events"
    >
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Section Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak">
                Who We Are
              </h2>
              <h3 className="text-xl lg:text-2xl font-semibold text-nimak-navy">
                A complete event management Partner
              </h3>
            </div>

            {/* Main Description */}
            <p 
              className={`text-lg leading-relaxed text-gray-700 transition-all duration-1000 delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Nimak Media & Events is a full-service event planning, organizing, and management 
              company dedicated to delivering exceptional and memorable experiences. We specialize 
              in crafting unique events through meticulous attention to detail, handling all creative, 
              technical, and logistical elements to bring your vision to life.
            </p>

            {/* Additional Paragraph */}
            <p 
              className={`text-lg leading-relaxed text-gray-700 transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Beyond events, we excel in Public Relations and Strategic Business Communication, 
              developing innovative strategies that connect our clients to their audiences while 
              enhancing brand image and reputation.
            </p>

            {/* CTA Button */}
            <div 
              className={`pt-4 transition-all duration-1000 delay-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-nimak-blue hover:bg-nimak-navy text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group btn-primary"
              >
                More About Us
                <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/background.jpeg"
                  alt="Professional event management and planning services by Nimak Media & Events"
                  width={600}
                  height={400}
                  className="object-cover w-full h-80 lg:h-96 transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nimak-navy/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div 
                className={`absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100 transition-all duration-1000 delay-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-nimak rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <div>
                    <p className="font-semibold text-nimak-navy">Nimak Media</p>
                    <p className="text-sm text-gray-600">& Events</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div 
                className={`absolute -top-4 -right-4 w-24 h-24 bg-nimak-blue/10 rounded-full transition-all duration-1000 delay-600 ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-50'
                }`}
              ></div>
              <div 
                className={`absolute top-10 -left-2 w-16 h-16 bg-nimak-light/20 rounded-full transition-all duration-1000 delay-800 ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-50'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection