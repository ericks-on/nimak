'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
  CalendarDaysIcon,
  UsersIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageCircleIcon
} from 'lucide-react'

// Note: This would need to be moved to a separate server component for the metadata
// export const metadata: Metadata = {
//   title: 'Contact Us - Nimak Media & Events | Get Your Quote Today',
//   description: 'Contact Nimak Media & Events for professional event planning in Kenya. Call +254 721 330 158 or email us for your event consultation.',
//   keywords: 'contact Nimak Media Events, event planning Kenya, get quote, event consultation Nairobi',
//   openGraph: {
//     title: 'Contact Us - Nimak Media & Events',
//     description: 'Contact Nimak Media & Events for professional event planning in Kenya.',
//     type: 'website',
//   }
// }

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  eventType: string
  eventDate: string
  expectedGuests: string
  budgetRange: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    expectedGuests: '',
    budgetRange: '',
    message: ''
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const eventTypes = [
    'Corporate Event',
    'Wedding',
    'Conference',
    'Product Launch',
    'Workshop/Training',
    'Awards Ceremony',
    'Trade Show',
    'Other'
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'To be discussed'
  ]

  const contactInfo = [
    {
      icon: BuildingOfficeIcon,
      label: 'Company',
      value: 'Nimak Media & Events',
      description: 'Your Event Management Partner'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Karen, Nairobi, Kenya',
      description: 'Office visits by appointment',
      href: 'https://maps.google.com/?q=Karen,Nairobi,Kenya'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+254 721 330 158',
      description: 'Call us directly',
      href: 'tel:+254721330158'
    },
    {
      icon: EnvelopeIcon,
      label: 'Primary Email',
      value: 'info@nimakmediaevents.com',
      description: 'General inquiries',
      href: 'mailto:info@nimakmediaevents.com'
    },
    {
      icon: EnvelopeIcon,
      label: 'Alternative Email',
      value: 'nimakmediaevents@gmail.com',
      description: 'Backup contact',
      href: 'mailto:nimakmediaevents@gmail.com'
    },
    {
      icon: GlobeAltIcon,
      label: 'Website',
      value: 'www.nimakmediaevents.com',
      description: 'Online presence',
      href: 'https://www.nimakmediaevents.com'
    }
  ]

  const quickContacts = [
    {
      icon: PhoneIcon,
      title: 'Call Now',
      description: 'Speak directly with our team',
      action: 'Call +254 721 330 158',
      href: 'tel:+254721330158',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: EnvelopeIcon,
      title: 'Send Email',
      description: 'Email us your requirements',
      action: 'Send Email',
      href: 'mailto:info@nimakmediaevents.com',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: MessageCircleIcon,
      title: 'WhatsApp',
      description: 'Chat with us on WhatsApp',
      action: 'Chat on WhatsApp',
      href: 'https://wa.me/254721330158',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: ClockIcon,
      title: 'Office Hours',
      description: 'Monday - Saturday',
      action: '8:00 AM - 5:00 PM',
      color: 'bg-nimak-blue hover:bg-nimak-navy'
    }
  ]

  const faqs = [
    {
      id: 'booking-process',
      question: 'What is your booking process?',
      answer: 'Our booking process involves an initial consultation to understand your needs, followed by a detailed proposal, contract signing, and then event planning and execution. We work closely with you throughout the entire process.'
    },
    {
      id: 'pricing',
      question: 'How do you determine pricing?',
      answer: 'Pricing depends on various factors including event type, size, duration, location, and specific requirements. We provide customized quotes after understanding your needs and budget. Contact us for a free consultation and quote.'
    },
    {
      id: 'timeline',
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 months in advance for smaller events and 6-12 months for larger corporate events or conferences. However, we can accommodate shorter timelines depending on availability and event complexity.'
    },
    {
      id: 'services',
      question: 'What services are included in event management?',
      answer: 'Our full-service event management includes concept creation, venue selection, vendor management, logistics coordination, design and production, marketing support, and on-site management. We handle everything from A to Z.'
    },
    {
      id: 'payment',
      question: 'What are your payment terms?',
      answer: 'We typically require a deposit to secure your date, with the balance paid according to an agreed schedule. Payment terms are outlined in our contract and can be customized based on your event timeline and budget.'
    },
    {
      id: 'changes',
      question: 'Can I make changes after booking?',
      answer: 'Yes, we understand that event details may evolve. We accommodate changes whenever possible, though some modifications may affect pricing or timeline. We recommend finalizing major details early in the planning process.'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: TwitterIcon, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: InstagramIcon, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#', color: 'hover:text-blue-700' }
  ]

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      errors.message = 'Please tell us about your event requirements'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        eventType: '',
        eventDate: '',
        expectedGuests: '',
        budgetRange: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-nimak overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background.jpeg"
            alt="Contact Nimak Media & Events - Professional event planning"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="container-custom mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-white/80 mb-8">
            <Link 
              href="/"
              className="flex items-center hover:text-white transition-colors duration-300"
            >
              <HomeIcon className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-white font-medium">Contact</span>
          </nav>

          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl font-light mb-8 opacity-90">
              Let&apos;s create unforgettable moments together
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Ready to plan your next event? Our team is here to help you every step of the way. 
              Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nimak-navy mb-4">
              Contact Us Directly
            </h2>
            <p className="text-lg text-gray-700">
              Choose your preferred way to reach out to us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickContacts.map((contact, index) => (
              <div key={contact.title} className="card-nimak p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-colors duration-300`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-nimak-navy mb-2">{contact.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{contact.description}</p>
                
                {contact.href ? (
                  <a 
                    href={contact.href}
                    className="inline-block text-nimak-blue hover:text-nimak-navy font-medium text-sm transition-colors duration-300"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {contact.action}
                  </a>
                ) : (
                  <span className="text-nimak-blue font-medium text-sm">{contact.action}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Contact Info + Form */}
    <section className="py-20 bg-gradient-nimak-subtle">
      <div className="container-custom mx-auto px-4">
        {/* Main container for the content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-nimak-navy mb-12">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-nimak-navy mb-6">
                  Office Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-nimak-blue/10 rounded-full flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-nimak-blue" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-500 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-nimak-navy hover:text-nimak-blue transition-colors duration-300 font-medium break-all"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-nimak-navy font-medium">{info.value}</p>
                        )}
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-full h-64 bg-gray-200 rounded-xl mb-6">
                <MapPinIcon className="h-16 w-16 text-nimak-blue mx-auto mt-20" />
              </div>
              <h3 className="text-xl font-bold text-nimak-navy mb-2">
                Find Our Office
              </h3>
              <p className="text-gray-600 mb-4">
                Our office is located in Karen, Nairobi. Office visits are available by appointment.
              </p>
              <a 
                href="https://maps.google.com/?q=Karen,Nairobi,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <MapPinIcon className="h-4 w-4 mr-2" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-nimak mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and booking process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-nimak-blue hover:shadow-md transition-all duration-300 focus:outline-none focus:border-nimak-blue"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-nimak-navy pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDownIcon 
                      className={`h-5 w-5 text-nimak-blue transition-transform duration-300 ${
                        expandedFAQ === faq.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="bg-gray-50 border-l-4 border-nimak-blue p-6 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your question here?
            </p>
            <a 
              href="mailto:info@nimakmediaevents.com"
              className="btn btn-outline"
            >
              <QuestionMarkCircleIcon className="h-4 w-4 mr-2" />
              Ask Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-nimak-subtle">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold text-nimak-navy mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Follow us on social media for event inspiration, behind-the-scenes content, 
            and updates on our latest projects.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm">
            Stay updated with our latest events and industry insights
          </p>
        </div>
      </section>
    </div>
  )
}