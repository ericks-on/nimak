'use client'

import { useEffect, useState } from 'react'
import { 
  UserGroupIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { HandshakeIcon } from 'lucide-react'

interface B2BMeetingsDetailProps {
  className?: string
}

const B2BMeetingsDetail = ({ className = '' }: B2BMeetingsDetailProps) => {
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

    const element = document.getElementById('b2b-meetings-detail')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const benefits = [
    {
      icon: HandshakeIcon,
      title: 'Build valuable business connections',
      description: 'Connect with key decision-makers, industry leaders, and potential collaborators in structured, focused environments.',
      stats: '95% connection success rate'
    },
    {
      icon: TrophyIcon,
      title: 'Attract potential partners or clients',
      description: 'Showcase your offerings to pre-qualified prospects who are actively seeking solutions like yours.',
      stats: '3x higher conversion rates'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Maximize your participation and ROI',
      description: 'Optimize your event investment with strategic matchmaking that ensures meaningful business outcomes.',
      stats: 'Average 400% ROI increase'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Strategic Planning',
      description: 'We analyze your business objectives and identify the most valuable connections for your goals.'
    },
    {
      number: '02',
      title: 'Targeted Matchmaking',
      description: 'Our team pre-qualifies and matches you with relevant buyers, sellers, and strategic partners.'
    },
    {
      number: '03',
      title: 'Structured Meetings',
      description: 'We organize time-efficient, focused meetings that maximize your networking effectiveness.'
    },
    {
      number: '04',
      title: 'Follow-up Support',
      description: 'Post-event support to help nurture the connections made and convert them into business opportunities.'
    }
  ]

  const idealFor = [
    { icon: BuildingOffice2Icon, text: 'Small to Medium Enterprises' },
    { icon: ChartBarIcon, text: 'Growth-focused businesses' },
    { icon: GlobeAltIcon, text: 'Companies seeking market expansion' },
    { icon: UserGroupIcon, text: 'Organizations looking to build partnerships' }
  ]

  return (
    <section 
      id="b2b-meetings-detail"
      className={`py-20 bg-gradient-nimak-subtle ${className}`}
      aria-label="B2B Meetings Details"
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
            <UserGroupIcon className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
            B2B Meetings
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We organize strategic, pre-arranged appointments to connect buyers, sellers, and partners. 
              Ideal for small to medium-sized enterprises, our B2B meetings are designed to create meaningful 
              business connections that drive growth.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div 
            className={`text-center mb-12 transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl font-bold text-nimak-navy mb-4">
              Key Benefits
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our B2B meeting facilitation service is strategically designed to deliver maximum value for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`card-nimak p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-nimak rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="inline-block bg-nimak-blue/10 text-nimak-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {benefit.stats}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-nimak-navy mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-3xl font-bold text-nimak-navy mb-8">
              Our Process
            </h3>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`flex items-start space-x-4 transition-all duration-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-nimak-blue text-white rounded-lg flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-nimak-navy mb-2 text-lg">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For Section */}
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="card-nimak p-8 h-full">
              <h3 className="text-2xl font-bold text-nimak-navy mb-6">
                Ideal For
              </h3>
              
              <div className="space-y-6 mb-8">
                {idealFor.map((item, index) => (
                  <div 
                    key={item.text}
                    className={`flex items-center space-x-4 transition-all duration-500 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-nimak-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-nimak-blue" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-nimak-navy">Success Guarantee</span>
                </div>
                <p className="text-sm text-gray-600">
                  We guarantee meaningful connections or provide additional meeting opportunities at no extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`bg-white rounded-2xl shadow-xl p-12 text-center transition-all duration-1000 delay-800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-nimak-navy mb-4">
            Ready to Connect with Your Ideal Partners?
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have accelerated their growth through our strategic B2B meeting facilitation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/contact" className="btn btn-primary btn-lg group">
              Schedule Your Meetings
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="/contact" className="btn btn-outline btn-lg group">
              View Success Stories
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-nimak-blue mb-1">500+</div>
              <div className="text-sm text-gray-600">Successful Meetings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-nimak-blue mb-1">85%</div>
              <div className="text-sm text-gray-600">Lead to Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-nimak-blue mb-1">48hrs</div>
              <div className="text-sm text-gray-600">Average Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default B2BMeetingsDetail