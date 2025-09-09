// @/app/services/ServicesPageClient.tsx - This is the client component.

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  StarIcon,
  UsersIcon,
  ShieldCheckIcon,
  TrophyIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const ServicesPageClient = () => {
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

    const element = document.getElementById('services-page')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Enhanced services data
  const services = [
    {
      id: 'event-concept-creation',
      image: '/background.jpeg',
      title: 'Event Concept Creation',
      description: 'We take a holistic approach to crafting creative event concepts that resonate with your audience and deliver unforgettable experiences.',
      features: ['Attendee Journey Mapping', 'Theme Development', 'Interactive Elements', 'Sensory Production'],
      href: '/services/event-concept-creation',
      category: 'Event Management'
    },
    {
      id: 'brand-management',
      image: '/background.jpeg',
      title: 'Brand Management',
      description: 'Strategic brand development and management services that enhance your corporate identity and market presence.',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Market Positioning'],
      href: '/services/brand-management',
      category: 'Marketing & Communication'
    },
    {
      id: 'event-marketing',
      image: '/background.jpeg',
      title: 'Event Marketing',
      description: 'Elevate your brand\'s presence through impactful event marketing strategies that engage and inspire your target audience.',
      features: ['Experiential Marketing', 'Promotional Events', 'Brand Activations', 'Digital Integration'],
      href: '/services/event-marketing',
      category: 'Marketing & Communication'
    },
    {
      id: 'b2b-meetings',
      image: '/background.jpeg',
      title: 'B2B Meetings',
      description: 'Strategic, pre-arranged appointments to connect buyers, sellers, and partners for maximum business value and ROI.',
      features: ['Strategic Matchmaking', 'Pre-qualified Connections', 'Business Development', 'ROI Optimization'],
      href: '/services/b2b-meetings',
      category: 'Business Services'
    },
    {
      id: 'pr-communication',
      image: '/background.jpeg',
      title: 'PR & Communication',
      description: 'End-to-end communication support to strengthen your public image and enhance stakeholder relationships.',
      features: ['Media Relations', 'Crisis Communication', 'Content Strategy', 'Stakeholder Engagement'],
      href: '/services/pr-communication',
      category: 'Marketing & Communication'
    },
    {
      id: 'event-design',
      image: '/background.jpeg',
      title: 'Event Design & Production',
      description: 'Bring your event vision to life with stunning design and flawless execution that creates memorable experiences.',
      features: ['Creative Design', 'Technical Production', 'Venue Transformation', 'Audio-Visual Solutions'],
      href: '/services/event-design',
      category: 'Event Management'
    },
    {
      id: 'vendor-management',
      image: '/background.jpeg',
      title: 'Vendor Management',
      description: 'Ensure every vendor meets your standards and delivers quality service through our comprehensive management approach.',
      features: ['Vendor Selection', 'Quality Assurance', 'Contract Management', 'Performance Monitoring'],
      href: '/services/vendor-management',
      category: 'Business Services'
    },
    {
      id: 'logistics-management',
      image: '/background.jpeg',
      title: 'Logistics Management',
      description: 'End-to-end logistics support to keep your event running smoothly with precise coordination and timing.',
      features: ['Timeline Management', 'Resource Coordination', 'Transportation', 'On-site Management'],
      href: '/services/logistics-management',
      category: 'Event Management'
    }
  ]

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Planning',
      description: 'We begin with a comprehensive consultation to understand your vision, objectives, and requirements. Our team works closely with you to develop a detailed project plan.',
      icon: ChatBubbleLeftRightIcon,
      duration: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Based on your requirements, we create innovative concepts and detailed proposals. We present multiple options with visual mock-ups and detailed timelines.',
      icon: LightBulbIcon,
      duration: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Execution & Management',
      description: 'Our experienced team handles every aspect of implementation, from vendor coordination to on-site management, ensuring flawless execution.',
      icon: CogIcon,
      duration: 'Event timeline'
    },
    {
      number: '04',
      title: 'Post-Event Analysis',
      description: 'We provide comprehensive post-event reporting and analysis, measuring success against objectives and identifying areas for future improvement.',
      icon: ChartBarIcon,
      duration: '1 week'
    }
  ]

  // Service categories
  const serviceCategories = [
    {
      title: 'Event Management',
      description: 'Complete event lifecycle management from initial concept to final execution.',
      services: ['Event Concept Creation', 'Event Design & Production', 'Logistics Management'],
      icon: CalendarDaysIcon,
      color: 'bg-nimak-blue'
    },
    {
      title: 'Marketing & Communication',
      description: 'Strategic marketing and communication services to amplify your brand message.',
      services: ['Event Marketing', 'PR & Communication', 'Brand Management'],
      icon: MegaphoneIcon,
      color: 'bg-nimak-navy'
    },
    {
      title: 'Business Services',
      description: 'Professional business services to enhance partnerships and operational efficiency.',
      services: ['B2B Meetings', 'Vendor Management'],
      icon: UsersIcon, // Replaced HandshakeIcon
      color: 'bg-nimak-light'
    }
  ]

  // Value propositions
  const valueProps = [
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality checks to ensure exceptional standards.'
    },
    {
      icon: TrophyIcon,
      title: 'Proven Track Record',
      description: 'Over 100+ successful events with 98% client satisfaction rate across Kenya.'
    },
    {
      icon: ClockIcon,
      title: 'Timely Delivery',
      description: 'We pride ourselves on delivering projects on time, every time, without compromise.'
    },
    {
      icon: StarIcon,
      title: 'Award-Winning Service',
      description: 'Recognition for excellence in event management and customer service delivery.'
    }
  ]

  return (
    <div id="services-page" className="min-h-screen">
      {/* Enhanced Services Grid */}
      <section id="services-grid" className="py-20 bg-white">
        <div className="container-custom mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card-nimak group p-6 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
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
                  <div className="mt-3">
                    <span className="text-xs font-semibold text-nimak-blue bg-nimak-blue/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-nimak-navy mb-4 group-hover:text-nimak-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                  {service.description}
                </p>
                
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-nimak-subtle">
        <div className="container-custom mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our proven 4-step methodology ensures every project is delivered with precision, 
              creativity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex items-start space-x-6 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${500 + index * 200}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-nimak rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-2xl font-bold text-nimak-navy">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-nimak-navy">{step.title}</h3>
                    <span className="text-sm text-nimak-blue font-semibold bg-nimak-blue/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section id="consultation" className="py-12 bg-gradient-nimak text-white mb-4">
        <div className="container-custom mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Let&apos;s Plan Your Next Event
            </h2>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
              Ready to create an unforgettable experience? Get in touch with our expert team 
              for a free consultation and detailed proposal.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <PhoneIcon className="h-8 w-8 mx-auto mb-3 text-white/90 drop-shadow-sm" />
                <h2 className="text-base font-semibold mb-1 text-white">Call Us</h2>
                <p className="text-white text-sm">+254 721 330 158</p>
              </div>
              
              <div className="text-center">
                <EnvelopeIcon className="h-8 w-8 mx-auto mb-3 text-white/90 drop-shadow-sm" />
                <h2 className="text-base font-semibold mb-1 text-white">Email Us</h2>
                <p className="text-white/90 text-sm">info@nimakevents.com</p>
              </div>
              
              <div className="text-center">
                <CalendarDaysIcon className="h-8 w-8 mx-auto mb-3 text-white/90 drop-shadow-sm" />
                <h2 className="text-base font-semibold mb-1 text-white">Book Meeting</h2>
                <p className="text-white/90 text-sm">Free consultation available</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link 
                href="/contact"
                className="btn btn-primary bg-white text-nimak-navy hover:bg-gray-100 group shadow-lg"
              >
                Get Free Consultation
                <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="tel:+254721330158"
                className="btn  border-2 border-white text-white hover:bg-white hover:text-nimak-navy group"
              >
                Call Now
                <PhoneIcon className="h-4 w-4 ml-2 transition-transform group-hover:scale-110" />
              </a>
            </div>
            
            <p className="mt-6 text-sm text-white/80">
              Join 100+ satisfied clients who trust Nimak Media & Events for their most important events.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPageClient