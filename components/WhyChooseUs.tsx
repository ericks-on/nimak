'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  CogIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

interface Benefit {
  id: string
  icon: React.ElementType
  title: string
  description: string
}

interface WhyChooseUsProps {
  className?: string
}

const WhyChooseUs = ({ className = '' }: WhyChooseUsProps) => {
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

    const element = document.getElementById('why-choose-us')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const benefits: Benefit[] = [
    {
      id: 'full-service',
      icon: CogIcon,
      title: 'Full-Service Solutions',
      description: 'Complete event management from concept to execution, ensuring seamless coordination at every stage.'
    },
    {
      id: 'professional-expertise',
      icon: AcademicCapIcon,
      title: 'Professional Expertise',
      description: 'Years of experience in event planning and PR, bringing industry knowledge and best practices to every project.'
    },
    {
      id: 'attention-to-detail',
      icon: MagnifyingGlassIcon,
      title: 'Attention to Detail',
      description: 'Meticulous planning ensures flawless execution, leaving nothing to chance in your important moments.'
    },
    {
      id: 'strategic-communication',
      icon: ChatBubbleLeftRightIcon,
      title: 'Strategic Communication',
      description: 'Expert PR and business communication services that amplify your message and strengthen your brand presence.'
    },
    {
      id: 'end-to-end-management',
      icon: ClipboardDocumentCheckIcon,
      title: 'End-to-End Management',
      description: 'We handle everything so you can focus on your guests, providing comprehensive support throughout the process.'
    },
    {
      id: 'memorable-experiences',
      icon: SparklesIcon,
      title: 'Memorable Experiences',
      description: 'Creating unforgettable moments that last, ensuring your events leave lasting impressions on all attendees.'
    }
  ]

  return (
    <section 
      id="why-choose-us"
      className={`py-20 bg-gradient-nimak-subtle relative overflow-hidden ${className}`}
      aria-label="Why Choose Nimak Media & Events"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-nimak-blue/5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-nimak-light/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nimak-blue/3 rounded-full blur-3xl"></div>

      <div className="container-custom mx-auto relative z-10">
        
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-4">
            Why Nimak Media & Events
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-nimak-navy mb-6">
            Excellence in every detail
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            When you choose Nimak Media & Events, youre partnering with a team dedicated to 
            transforming your vision into extraordinary experiences that exceed expectations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`card-nimak group p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-nimak rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h4 className="text-xl font-bold text-nimak-navy mb-4 group-hover:text-nimak-blue transition-colors duration-300">
                {benefit.title}
              </h4>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {benefit.description}
              </p>
              
              {/* Hover Effect Indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-12 h-0.5 bg-nimak-blue mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-nimak-blue mb-2">100+</div>
            <div className="text-gray-600 font-medium">Events Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-nimak-blue mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-nimak-blue mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Happy Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-nimak-blue mb-2">5+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div 
          className={`bg-white rounded-2xl shadow-xl p-12 text-center transition-all duration-1000 delay-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <HeartIcon className="h-8 w-8 text-red-500 mr-3" />
            <h3 className="text-3xl font-bold text-nimak-navy">
              Partner with us to create unforgettable moments
            </h3>
            <HeartIcon className="h-8 w-8 text-red-500 ml-3" />
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Let our experienced team bring expertise, 
            creativity, and attention to detail to your next event.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="btn btn-primary btn-lg group"
            >
              Start Your Journey
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/portfolio"
              className="btn btn-outline btn-lg group"
            >
              View Our Work
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-500 text-sm italic">
              &quot;Excellence is not a skill, it&apos;s an attitude we bring to every event.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs