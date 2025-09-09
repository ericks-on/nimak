import Link from 'next/link'
import { 
  CalendarDaysIcon, 
  UsersIcon, 
  TrophyIcon, 
  StarIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  MegaphoneIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  const services = [
    {
      icon: CalendarDaysIcon,
      title: 'Event Planning',
      description: 'Comprehensive event planning from concept to execution, ensuring every detail is perfect.',
      features: ['Venue Selection', 'Timeline Management', 'Vendor Coordination']
    },
    {
      icon: UsersIcon,
      title: 'Conference Management',
      description: 'Professional conference organization with seamless registration and attendee management.',
      features: ['Speaker Coordination', 'Registration Systems', 'Live Streaming']
    },
    {
      icon: MegaphoneIcon,
      title: 'Media Services',
      description: 'Complete media solutions including photography, videography, and live broadcasting.',
      features: ['Photography', 'Video Production', 'Live Broadcasting']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Corporate Events',
      description: 'Tailored corporate events that align with your business objectives and brand identity.',
      features: ['Team Building', 'Product Launches', 'Awards Ceremonies']
    }
  ]

  const stats = [
    { number: '500+', label: 'Events Organized' },
    { number: '50K+', label: 'Attendees Served' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      role: 'Marketing Director',
      content: 'Nimak transformed our annual conference into an unforgettable experience. Their attention to detail and professional execution exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Healthcare Solutions',
      role: 'CEO',
      content: 'Working with Nimak was seamless. They handled every aspect of our product launch event flawlessly, allowing us to focus on our message.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Design Studio',
      role: 'Event Coordinator',
      content: 'The team at Nimak brought our vision to life. Their creativity and professionalism made our charity gala a tremendous success.',
      rating: 5
    }
  ]

  const recentEvents = [
    {
      title: 'Tech Innovation Summit 2024',
      date: 'March 15, 2024',
      location: 'New York Convention Center',
      attendees: '2,500+',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Healthcare Leadership Forum',
      date: 'February 28, 2024',
      location: 'Grand Hyatt Hotel',
      attendees: '800+',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Sustainable Business Conference',
      date: 'January 20, 2024',
      location: 'Metropolitan Center',
      attendees: '1,200+',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <>
    <HeroSection />
    </>
  )
}