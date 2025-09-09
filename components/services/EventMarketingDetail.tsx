'use client'

import { useEffect, useState } from 'react'
import { 
  MegaphoneIcon,
  RocketLaunchIcon,
  BuildingStorefrontIcon,
  EyeIcon,
  ArrowRightIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

interface EventMarketingDetailProps {
  className?: string
}

const EventMarketingDetail = ({ className = '' }: EventMarketingDetailProps) => {
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

    const element = document.getElementById('event-marketing-detail')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const services = [
    {
      icon: SparklesIcon,
      title: 'Experiential Marketing',
      description: 'Create immersive brand activations, roadshows, and product launches that engage audiences and drive meaningful connections.',
      features: ['Brand Activations', 'Roadshows', 'Product Launches', 'Interactive Experiences']
    },
    {
      icon: BuildingStorefrontIcon,
      title: 'Brand-Specific Promotional Events',
      description: 'Design and execute targeted promotional events that align perfectly with your brand identity and marketing objectives.',
      features: ['Corporate Events', 'Brand Showcases', 'Customer Appreciation', 'Trade Shows']
    },
    {
      icon: EyeIcon,
      title: 'Visibility & Audience Interaction',
      description: 'Maximize your brand exposure through strategic event marketing that enhances visibility and fosters audience engagement.',
      features: ['Social Media Integration', 'Live Streaming', 'Influencer Partnerships', 'Content Creation']
    }
  ]

  const stats = [
    { icon: TrophyIcon, value: '95%', label: 'Client Satisfaction Rate' },
    { icon: UsersIcon, value: '50K+', label: 'Event Attendees Reached' },
    { icon: RocketLaunchIcon, value: '200+', label: 'Successful Campaigns' }
  ]

  return (
    <section 
      id="event-marketing-detail"
      className={`py-20 bg-white ${className}`}
      aria-label="Event Marketing Details"
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
            <MegaphoneIcon className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
            Event Marketing
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We elevate your brand&apos;s presence through impactful event marketing strategies that engage and inspire. 
              Our comprehensive approach ensures your message reaches the right audience at the right moment.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`card-nimak text-center p-8 hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'animate-fade-in-scale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-nimak-blue/10 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-nimak-blue" />
              </div>
              <h3 className="text-3xl font-bold text-nimak-navy mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div 
            className={`text-center mb-12 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl font-bold text-nimak-navy mb-4">
              Our Marketing Services Include
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive event marketing solutions designed to amplify your brand message and maximize engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`card-nimak p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${500 + index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-nimak rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-nimak-navy mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-nimak-blue rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`bg-gradient-nimak-subtle rounded-2xl p-12 text-center transition-all duration-1000 delay-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-nimak-navy mb-4">
            Ready to Amplify Your Brand?
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Let our expert marketing team create impactful event experiences that resonate with your audience 
            and drive measurable results for your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn btn-primary btn-lg group">
              Launch Your Campaign
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="/contact" className="btn btn-outline btn-lg group">
              View Case Studies
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 italic">
              &quot;Marketing is no longer about the stuff you make, but about the stories you tell and experiences you create.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventMarketingDetail