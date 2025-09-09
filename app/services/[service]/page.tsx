import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

interface ServiceData {
  id: string
  title: string
  subtitle: string
  description: string
  // Change the type of 'icon' to string to avoid passing a React component
  icon: string 
  heroImage: string
  processSteps: Array<{
    title: string
    description: string
    // Change the type of 'icon' to string
    icon: string
  }>
  cta: {
    title: string
    description: string
    buttonText: string
  }
  seoTitle: string
  seoDescription: string
}

// Generate static params for all service pages
export async function generateStaticParams() {
  return [
    { service: 'event-concept-creation' },
    { service: 'brand-management' },
    { service: 'event-marketing' },
    { service: 'b2b-meetings' },
    { service: 'pr-communication' },
    { service: 'event-design-production' },
    { service: 'vendor-management' },
    { service: 'logistics-management' }
  ]
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceSlug = params.service
  
  const servicesMetadata: Record<string, Metadata> = {
    'event-concept-creation': {
      title: 'Event Concept Creation Services - Nimak Media & Events | Kenya',
      description: 'Professional event concept creation services in Kenya. We craft creative, immersive event experiences that resonate with your audience.',
      keywords: 'event concept creation, event planning Kenya, creative events, event design',
      openGraph: {
        title: 'Event Concept Creation Services - Nimak Media & Events',
        description: 'Professional event concept creation services in Kenya.',
        type: 'website',
      }
    },
    'brand-management': {
      title: 'Brand Management Services - Nimak Media & Events | Kenya',
      description: 'Professional brand management and development services in Kenya. Strategic brand positioning, identity creation, and activation.',
      keywords: 'brand management Kenya, brand development, brand strategy, corporate branding',
      openGraph: {
        title: 'Brand Management Services - Nimak Media & Events',
        description: 'Professional brand management services in Kenya.',
        type: 'website',
      }
    },
    'event-marketing': {
      title: 'Event Marketing Services - Nimak Media & Events | Kenya',
      description: 'Professional event marketing services in Kenya. Experiential marketing, brand activations, and promotional event strategies.',
      keywords: 'event marketing Kenya, experiential marketing, brand activations, promotional events',
      openGraph: {
        title: 'Event Marketing Services - Nimak Media & Events',
        description: 'Professional event marketing services in Kenya.',
        type: 'website',
      }
    },
    'b2b-meetings': {
      title: 'B2B Meeting Services - Nimak Media & Events | Kenya',
      description: 'Professional B2B meeting facilitation services in Kenya. Strategic business connections for SMEs and growing companies.',
      keywords: 'B2B meetings Kenya, business networking, SME connections, business partnerships',
      openGraph: {
        title: 'B2B Meeting Services - Nimak Media & Events',
        description: 'Professional B2B meeting services in Kenya.',
        type: 'website',
      }
    },
    'pr-communication': {
      title: 'PR & Communication Services - Nimak Media & Events | Kenya',
      description: 'Professional PR and communication services in Kenya. Corporate communications, media relations, and reputation management.',
      keywords: 'PR services Kenya, public relations, corporate communications, media relations',
      openGraph: {
        title: 'PR & Communication Services - Nimak Media & Events',
        description: 'Professional PR and communication services in Kenya.',
        type: 'website',
      }
    },
    'event-design-production': {
      title: 'Event Design & Production Services - Nimak Media & Events | Kenya',
      description: 'Professional event design and production services in Kenya. 3D rendering, stage design, and full production management.',
      keywords: 'event design Kenya, event production, 3D rendering, stage design',
      openGraph: {
        title: 'Event Design & Production Services - Nimak Media & Events',
        description: 'Professional event design and production services in Kenya.',
        type: 'website',
      }
    },
    'vendor-management': {
      title: 'Vendor Management Services - Nimak Media & Events | Kenya',
      description: 'Professional vendor management services in Kenya. Quality vendor sourcing, contract management, and performance monitoring.',
      keywords: 'vendor management Kenya, vendor sourcing, contract management, event vendors',
      openGraph: {
        title: 'Vendor Management Services - Nimak Media & Events',
        description: 'Professional vendor management services in Kenya.',
        type: 'website',
      }
    },
    'logistics-management': {
      title: 'Logistics Management Services - Nimak Media & Events | Kenya',
      description: 'Professional event logistics management services in Kenya. Comprehensive coordination, transportation, and on-site execution.',
      keywords: 'event logistics Kenya, logistics management, event coordination, transportation',
      openGraph: {
        title: 'Logistics Management Services - Nimak Media & Events',
        description: 'Professional logistics management services in Kenya.',
        type: 'website',
      }
    }
  }

  return servicesMetadata[serviceSlug] || {
    title: 'Service Not Found - Nimak Media & Events',
    description: 'The requested service page could not be found.',
  }
}

// Service data configuration
const servicesData: Record<string, ServiceData> = {
  'event-concept-creation': {
    id: 'event-concept-creation',
    title: 'Event Concept Creation',
    subtitle: 'Crafting Creative Event Concepts That Resonate',
    description: 'We take a holistic approach to crafting creative event concepts that resonate with your audience. From the first touchpoint—like the invitation or registration—through to the event\'s close, we focus on designing an unforgettable attendee experience that tells your story in a way your audience not only hears—but feels.',
    // Pass the icon name as a string
    icon: 'LightBulbIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Mapping the Attendee Journey',
        description: 'We create detailed journey maps that optimize every touchpoint for maximum engagement and satisfaction, ensuring seamless flow from arrival to departure.',
        icon: 'MapIcon'
      },
      {
        title: 'Creating Immersive, Theme-Driven Experiences',
        description: 'Transform your event space into a captivating environment that tells your brand story through carefully curated themes and immersive elements.',
        icon: 'SparklesIcon'
      },
      {
        title: 'Designing Interactive Touchpoints',
        description: 'Incorporate live polls, games, and networking opportunities that foster meaningful connections and keep attendees engaged throughout the event.',
        icon: 'UserGroupIcon'
      },
      {
        title: 'Developing Striking Stage and Venue Setups',
        description: 'Create visually stunning environments that serve as the perfect backdrop for your event, ensuring every angle is Instagram-worthy.',
        icon: 'BuildingOfficeIcon'
      },
      {
        title: 'Delivering Sensory-Focused Production',
        description: 'Engage all five senses to create memorable experiences that resonate long after the event ends, from ambient lighting to signature scents.',
        icon: 'EyeIcon'
      }
    ],
    cta: {
      title: 'Tell Your Story Through Experience',
      description: 'Ready to create an event concept that your audience will never forget? Let our creative team bring your vision to life.',
      buttonText: 'Start Your Event Concept'
    },
    seoTitle: 'Event Concept Creation Services - Nimak Media & Events',
    seoDescription: 'Professional event concept creation services in Kenya. We craft creative, immersive event experiences that resonate with your audience.'
  },

  'brand-management': {
    id: 'brand-management',
    title: 'Brand Management',
    subtitle: 'Strategic Brand Development and Management Services',
    description: 'Our comprehensive brand management services help you build, maintain, and enhance your corporate identity. We develop strategic approaches to brand positioning, identity creation, and activation that strengthen your market presence and drive business growth.',
    icon: 'BuildingStorefrontIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Brand Strategy Development',
        description: 'We analyze your market position and develop comprehensive brand strategies that align with your business objectives and target audience.',
        icon: 'ChartBarIcon'
      },
      {
        title: 'Brand Identity Creation',
        description: 'Design compelling visual identities including logos, color palettes, typography, and brand guidelines that reflect your values.',
        icon: 'PaintBrushIcon'
      },
      {
        title: 'Brand Activation Strategies',
        description: 'Implement targeted activation campaigns that bring your brand to life across multiple touchpoints and channels.',
        icon: 'RocketLaunchIcon'
      },
      {
        title: 'Brand Portfolio Management',
        description: 'Manage and optimize your brand portfolio to ensure consistency and maximize impact across all brand extensions.',
        icon: 'DocumentTextIcon'
      }
    ],
    cta: {
      title: 'Elevate Your Brand Presence',
      description: 'Ready to build a powerful brand that stands out in the marketplace? Let us help you create lasting brand impact.',
      buttonText: 'Develop Your Brand'
    },
    seoTitle: 'Brand Management Services - Nimak Media & Events',
    seoDescription: 'Professional brand management and development services in Kenya. Strategic brand positioning, identity creation, and activation.'
  },

  'event-marketing': {
    id: 'event-marketing',
    title: 'Event Marketing',
    subtitle: 'Impactful Event Marketing Strategies',
    description: 'We elevate your brand\'s presence through impactful event marketing strategies that engage and inspire. Our comprehensive approach includes experiential marketing, brand-specific promotional events, and strategies that enhance visibility and audience interaction.',
    icon: 'MegaphoneIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Experiential Marketing',
        description: 'Create immersive brand activations, roadshows, and product launches that engage audiences and drive meaningful connections with your brand.',
        icon: 'SparklesIcon'
      },
      {
        title: 'Brand-Specific Promotional Events',
        description: 'Design and execute targeted promotional events that align perfectly with your brand identity and marketing objectives.',
        icon: 'BuildingStorefrontIcon'
      },
      {
        title: 'Visibility & Audience Interaction',
        description: 'Maximize your brand exposure through strategic event marketing that enhances visibility and fosters meaningful audience engagement.',
        icon: 'EyeIcon'
      },
      {
        title: 'Digital Integration',
        description: 'Seamlessly integrate digital marketing strategies with your events for amplified reach and engagement across all channels.',
        icon: 'GlobeAltIcon'
      }
    ],
    cta: {
      title: 'Amplify Your Brand Message',
      description: 'Ready to create impactful marketing experiences that drive results? Let our marketing experts elevate your brand.',
      buttonText: 'Launch Your Campaign'
    },
    seoTitle: 'Event Marketing Services - Nimak Media & Events',
    seoDescription: 'Professional event marketing services in Kenya. Experiential marketing, brand activations, and promotional event strategies.'
  },

  'b2b-meetings': {
    id: 'b2b-meetings',
    title: 'B2B Meetings',
    subtitle: 'Strategic Business Connection Facilitation',
    description: 'We organize strategic, pre-arranged appointments to connect buyers, sellers, and partners. Ideal for small to medium-sized enterprises, our B2B meetings are designed to build valuable business connections, attract potential partners or clients, and maximize your participation and ROI in any event.',
    icon: 'UserGroupIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Strategic Planning & Matchmaking',
        description: 'We analyze your business objectives and identify the most valuable connections, pre-qualifying participants for optimal match quality.',
        icon: 'ChartBarIcon'
      },
      {
        title: 'Connection Building Process',
        description: 'Facilitate structured, time-efficient meetings between relevant parties, ensuring maximum value from each interaction.',
        icon: 'HandshakeIcon'
      },
      {
        title: 'ROI Maximization Strategies',
        description: 'Implement proven strategies to maximize your return on investment through targeted networking and business development.',
        icon: 'TrophyIcon'
      },
      {
        title: 'Post-Meeting Support',
        description: 'Provide follow-up support and analytics to help nurture connections and convert meetings into business opportunities.',
        icon: 'CurrencyDollarIcon'
      }
    ],
    cta: {
      title: 'Connect with Your Ideal Business Partners',
      description: 'Ready to accelerate your business growth through strategic connections? Join our B2B meeting programs.',
      buttonText: 'Schedule Your Meetings'
    },
    seoTitle: 'B2B Meeting Services - Nimak Media & Events',
    seoDescription: 'Professional B2B meeting facilitation services in Kenya. Strategic business connections for SMEs and growing companies.'
  },

  'pr-communication': {
    id: 'pr-communication',
    title: 'PR & Communication',
    subtitle: 'End-to-End Communication Support',
    description: 'We provide comprehensive communication support to strengthen your public image and enhance stakeholder relationships. Our services include corporate communications, PR strategy, media liaison, stakeholder engagement, reputation and crisis management, and social media management.',
    icon: 'ChatBubbleLeftRightIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Corporate Communications',
        description: 'Develop and execute comprehensive communication strategies that align with your business objectives and brand values.',
        icon: 'BuildingOfficeIcon'
      },
      {
        title: 'PR Strategy & Media Liaison',
        description: 'Build and maintain relationships with key media outlets, managing press releases, interviews, and media coverage.',
        icon: 'MicrophoneIcon'
      },
      {
        title: 'Stakeholder Engagement',
        description: 'Create targeted communication plans for different stakeholder groups, ensuring consistent and effective messaging.',
        icon: 'UserGroupIcon'
      },
      {
        title: 'Reputation & Crisis Management',
        description: 'Protect and enhance your reputation through proactive strategies and rapid response crisis communication protocols.',
        icon: 'ShieldCheckIcon'
      },
      {
        title: 'Social Media Management',
        description: 'Manage your digital presence across social platforms with strategic content creation and community engagement.',
        icon: 'GlobeAltIcon'
      }
    ],
    cta: {
      title: 'Strengthen Your Public Image',
      description: 'Ready to enhance your communication strategy and build stronger stakeholder relationships?',
      buttonText: 'Improve Your Communications'
    },
    seoTitle: 'PR & Communication Services - Nimak Media & Events',
    seoDescription: 'Professional PR and communication services in Kenya. Corporate communications, media relations, and reputation management.'
  },

  'event-design-production': {
    id: 'event-design-production',
    title: 'Event Design & Production',
    subtitle: 'Stunning Design and Flawless Execution',
    description: 'Bring your event vision to life with stunning design and flawless execution. Our comprehensive design and production services include event floor plan development, 3D event rendering, stage and lighting design, décor and aesthetic coordination, and full on-site setup and production management.',
    icon: 'PaintBrushIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Event Floor Plan Development',
        description: 'Create optimized floor plans that maximize space utilization, enhance guest flow, and support your event objectives.',
        icon: 'MapIcon'
      },
      {
        title: '3D Event Rendering',
        description: 'Visualize your event with detailed 3D renderings that allow you to see and approve designs before implementation.',
        icon: 'EyeIcon'
      },
      {
        title: 'Stage and Lighting Design',
        description: 'Design impactful stage setups and lighting schemes that create the perfect ambiance and focal points for your event.',
        icon: 'SparklesIcon'
      },
      {
        title: 'Décor and Aesthetic Coordination',
        description: 'Coordinate all decorative elements to create cohesive, visually stunning environments that reflect your brand and theme.',
        icon: 'PaintBrushIcon'
      },
      {
        title: 'Full On-Site Setup and Production Management',
        description: 'Manage complete on-site setup, coordination, and production management to ensure flawless execution of your design vision.',
        icon: 'CogIcon'
      }
    ],
    cta: {
      title: 'Bring Your Vision to Life',
      description: 'Ready to create a visually stunning event that leaves lasting impressions? Let our design team work their magic.',
      buttonText: 'Start Your Design'
    },
    seoTitle: 'Event Design & Production Services - Nimak Media & Events',
    seoDescription: 'Professional event design and production services in Kenya. 3D rendering, stage design, and full production management.'
  },

  'vendor-management': {
    id: 'vendor-management',
    title: 'Vendor Management',
    subtitle: 'Quality Vendor Sourcing and Management',
    description: 'Ensure every vendor meets your standards and delivers quality service through our comprehensive vendor management approach. We handle sourcing and vetting reliable vendors, managing contracts, timelines, and deliverables, ensuring seamless integration and execution.',
    icon: 'TruckIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Sourcing and Vetting Reliable Vendors',
        description: 'Identify, evaluate, and select the best vendors for your specific needs through our rigorous vetting process and quality standards.',
        icon: 'UserGroupIcon'
      },
      {
        title: 'Contract and Timeline Management',
        description: 'Manage all vendor contracts, negotiate terms, and establish clear timelines and deliverables to ensure project success.',
        icon: 'DocumentTextIcon'
      },
      {
        title: 'Quality Assurance and Monitoring',
        description: 'Implement continuous quality monitoring and performance evaluation to ensure vendors meet your standards consistently.',
        icon: 'ShieldCheckIcon'
      },
      {
        title: 'Seamless Integration and Execution',
        description: 'Coordinate all vendors for seamless integration and flawless execution, managing logistics and communication throughout.',
        icon: 'CogIcon'
      }
    ],
    cta: {
      title: 'Streamline Your Vendor Management',
      description: 'Ready to work with reliable, quality vendors while reducing management overhead? Let us handle your vendor relationships.',
      buttonText: 'Optimize Your Vendors'
    },
    seoTitle: 'Vendor Management Services - Nimak Media & Events',
    seoDescription: 'Professional vendor management services in Kenya. Quality vendor sourcing, contract management, and performance monitoring.'
  },

  'logistics-management': {
    id: 'logistics-management',
    title: 'Logistics Management',
    subtitle: 'End-to-End Logistics Support',
    description: 'Keep your event running smoothly with our comprehensive logistics management services. We provide end-to-end logistics support including comprehensive coordination services, transportation and scheduling management, vendor coordination, and complete on-site execution.',
    icon: 'ClipboardDocumentListIcon',
    heroImage: '/background.jpeg',
    processSteps: [
      {
        title: 'Comprehensive Coordination Services',
        description: 'Coordinate all aspects of your event logistics from planning to execution, ensuring every element works together seamlessly.',
        icon: 'CogIcon'
      },
      {
        title: 'Transportation and Scheduling',
        description: 'Manage all transportation needs and create detailed schedules that keep your event running on time and within budget.',
        icon: 'TruckIcon'
      },
      {
        title: 'Vendor Coordination and Integration',
        description: 'Coordinate multiple vendors and service providers to ensure seamless integration and avoid conflicts or delays.',
        icon: 'UserGroupIcon'
      },
      {
        title: 'Complete On-Site Execution',
        description: 'Provide complete on-site logistics management with experienced coordinators ensuring smooth operations throughout your event.',
        icon: 'CheckCircleIcon'
      }
    ],
    cta: {
      title: 'Ensure Flawless Event Execution',
      description: 'Ready for seamless event logistics that keep everything running perfectly? Let our logistics experts handle the details.',
      buttonText: 'Streamline Your Logistics'
    },
    seoTitle: 'Logistics Management Services - Nimak Media & Events',
    seoDescription: 'Professional event logistics management services in Kenya. Comprehensive coordination, transportation, and on-site execution.'
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceSlug = params.service
  const service = servicesData[serviceSlug]

  if (!service) {
    notFound()
  }

  return <ServicePageTemplate service={service} />
}