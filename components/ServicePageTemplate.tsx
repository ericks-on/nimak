'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import { ServiceData } from '@/app/types/types'

interface ServicePageTemplateProps {
  service: ServiceData
}

const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      
      {/* Service Title */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl px-6 py-8">
          <div className="flex space-x-4">
            <h2 className="font-bold text-nimak-navy">
              {service.title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={`${service.title} services`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Service Content */}
      <div className="max-w-4xl px-6 py-12">
        
        {/* Description */}
        <div className="mb-12">
          <p className="text-2xl text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Process Steps */}
        {service.processSteps && service.processSteps.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-nimak-navy mb-8 text-center">Our Process</h2>
            <div className="space-y-4">
              {service.processSteps.map((step, index) => (
                <div key={step.title} className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-nimak-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Contact CTA */}
        <div className="bg-gradient-nimak-subtle rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-nimak-navy mb-4">
            {service.cta.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {service.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              href="/contact"
              className="btn btn-primary btn-lg group"
            >
              {service.cta.buttonText}
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a 
              href="tel:+254721330158"
              className="btn btn-outline btn-lg group"
            >
              Call Now
              <PhoneIcon className="h-5 w-5 ml-2 transition-transform group-hover:scale-110" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <PhoneIcon className="h-4 w-4" />
              <span>+254 721 330 158</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <EnvelopeIcon className="h-4 w-4" />
              <span>info@nimakmediaevents.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePageTemplate