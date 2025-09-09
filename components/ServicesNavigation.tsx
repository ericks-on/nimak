'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  LightBulbIcon,
  BuildingStorefrontIcon,
  MegaphoneIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  TruckIcon,
  ClipboardDocumentListIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

interface ServicesNavigationProps {
  isMobile?: boolean
  onItemClick?: () => void
}

interface ServiceItem {
  id: string
  slug: string
  title: string
  shortTitle: string
  icon: React.ElementType
  category: string
}

interface ServiceCategory {
  name: string
  services: string[]
  description: string
}

const ServicesNavigation = ({ isMobile = false, onItemClick }: ServicesNavigationProps) => {
  const pathname = usePathname()
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Event Management')

  const services: ServiceItem[] = [
    {
      id: '1',
      slug: 'event-concept-creation',
      title: 'Event Concept Creation',
      shortTitle: 'Concept Creation',
      icon: LightBulbIcon,
      category: 'Event Management'
    },
    {
      id: '2',
      slug: 'event-design-production',
      title: 'Event Design & Production',
      shortTitle: 'Design & Production',
      icon: PaintBrushIcon,
      category: 'Event Management'
    },
    {
      id: '3',
      slug: 'logistics-management',
      title: 'Logistics Management',
      shortTitle: 'Logistics',
      icon: ClipboardDocumentListIcon,
      category: 'Event Management'
    },
    {
      id: '4',
      slug: 'event-marketing',
      title: 'Event Marketing',
      shortTitle: 'Event Marketing',
      icon: MegaphoneIcon,
      category: 'Marketing & Communication'
    },
    {
      id: '5',
      slug: 'pr-communication',
      title: 'PR & Communication',
      shortTitle: 'PR & Comms',
      icon: ChatBubbleLeftRightIcon,
      category: 'Marketing & Communication'
    },
    {
      id: '6',
      slug: 'brand-management',
      title: 'Brand Management',
      shortTitle: 'Brand Management',
      icon: BuildingStorefrontIcon,
      category: 'Marketing & Communication'
    },
    {
      id: '7',
      slug: 'b2b-meetings',
      title: 'B2B Meetings',
      shortTitle: 'B2B Meetings',
      icon: UserGroupIcon,
      category: 'Business Services'
    },
    {
      id: '8',
      slug: 'vendor-management',
      title: 'Vendor Management',
      shortTitle: 'Vendor Management',
      icon: TruckIcon,
      category: 'Business Services'
    }
  ]

  const categories: ServiceCategory[] = [
    {
      name: 'Event Management',
      services: ['event-concept-creation', 'event-design-production', 'logistics-management'],
      description: 'Complete event lifecycle management'
    },
    {
      name: 'Marketing & Communication',
      services: ['event-marketing', 'pr-communication', 'brand-management'],
      description: 'Strategic marketing and communication'
    },
    {
      name: 'Business Services',
      services: ['b2b-meetings', 'vendor-management'],
      description: 'Professional business support services'
    }
  ]

  const getCurrentService = () => {
    const segments = pathname.split('/')
    if (segments.length >= 3) {
      return segments[2]
    }
    return null
  }

  const currentServiceSlug = getCurrentService()

  const handleCategoryToggle = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName)
  }

  if (isMobile) {
    return (
      <nav className="space-y-2">
        {/* All Services Link */}
        <Link
          href="/services"
          onClick={onItemClick}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-300 ${
            pathname === '/services'
              ? 'bg-nimak-blue text-white'
              : 'text-gray-700 hover:bg-nimak-blue/10 hover:text-nimak-blue'
          }`}
        >
          <span className="font-medium">All Services</span>
        </Link>

        {/* All Services Listed Directly */}
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            onClick={onItemClick}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-300 ${
              currentServiceSlug === service.slug
                ? 'bg-nimak-blue text-white'
                : 'text-gray-600 hover:bg-nimak-blue/10 hover:text-nimak-blue'
            }`}
          >
            <service.icon className="h-4 w-4 mr-3 flex-shrink-0" />
            <span className="text-sm">{service.title}</span>
          </Link>
        ))}
      </nav>
    )
  }

  // Desktop Side Navigation
  return (
    <nav className="space-y-2">
      {/* All Services Link */}
      <Link
        href="/services"
        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
          pathname === '/services'
            ? 'bg-nimak-blue text-white'
            : 'text-gray-700 hover:bg-nimak-blue/10 hover:text-nimak-blue'
        }`}
      >
        <span>All Services</span>
      </Link>

      {/* All Services Listed Directly */}
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.slug}`}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-300 ${
            currentServiceSlug === service.slug
              ? 'bg-nimak-blue text-white shadow-sm'
              : 'text-gray-600 hover:bg-nimak-blue/10 hover:text-nimak-blue'
          }`}
        >
          <service.icon className="h-5 w-5 mr-3 flex-shrink-0" />
          <span className="text-sm font-medium">{service.title}</span>
        </Link>
      ))}
    </nav>
  )
}

export default ServicesNavigation