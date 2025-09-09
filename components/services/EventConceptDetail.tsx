'use client'

import { useEffect, useState } from 'react'
import { 
  LightBulbIcon,
  MapIcon,
  SparklesIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  EyeIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface EventConceptDetailProps {
  className?: string
}

const EventConceptDetail = ({ className = '' }: EventConceptDetailProps) => {
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

    const element = document.getElementById('event-concept-detail')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const features = [
    {
      icon: MapIcon,
      title: 'Mapping the attendee journey',
      description: 'We create detailed journey maps that optimize every touchpoint for maximum engagement and satisfaction.'
    },
    {
      icon: SparklesIcon,
      title: 'Creating immersive, theme-driven experiences',
      description: 'Transform your event space into a captivating environment that tells your brand story.'
    },
    {
      icon: UserGroupIcon,
      title: 'Designing interactive touchpoints',
      description: 'Incorporate live polls, games, and networking opportunities that foster meaningful connections.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Developing striking stage and venue setups',
      description: 'Create visually stunning environments that serve as the perfect backdrop for your event.'
    },
    {
      icon: EyeIcon,
      title: 'Sensory-focused production',
      description: 'Engage all five senses to create memorable experiences that resonate long after the event ends.'
    }
  ]

  return (
    <section 
      id="event-concept-detail"
      className={`py-20 bg-gradient-nimak-subtle ${className}`}
      aria-label="Event Concept Creation Details"
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-nimak rounded-2xl mb-6 shadow-lg">
            <LightBulbIcon className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
            Event Concept Creation
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We take a holistic approach to crafting creative event concepts that resonate with your audience. 
              From the first touchpoint—like the invitation or registration—through to the event&apos;s close, we focus 
              on designing an unforgettable attendee experience.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <div 
              className={`transition-all duration-1000 delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="text-2xl font-bold text-nimak-navy mb-6">
                Features We Guide Through
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`flex items-start space-x-4 transition-all duration-500 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-nimak-blue/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-nimak-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-nimak-navy mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual/Stats Column */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="card-nimak p-8 h-full">
              <h3 className="text-2xl font-bold text-nimak-navy mb-6">
                Our Process Delivers
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced attendee engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Memorable brand experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Increased ROI on event investment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Stronger audience connections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Long-lasting impressions</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <blockquote className="text-nimak-blue italic text-lg font-medium">
                  &quot;Every event should be a story worth telling&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Goal Section */}
        <div 
          className={`text-center bg-white rounded-2xl shadow-xl p-12 transition-all duration-1000 delay-600 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-nimak-navy mb-6">
            Our Goal
          </h3>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            &quot;Our goal is to tell your story in a way that your audience not only hears—but <span className="text-nimak-blue font-semibold">feels</span>.&quot;
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn btn-primary btn-lg group">
              Start Your Event Concept
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="/contact" className="btn btn-outline btn-lg group">
              View Our Portfolio
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventConceptDetail