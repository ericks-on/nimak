import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WhyChooseUs from '@/components/WhyChooseUs'
import { 
  ChevronRightIcon,
  HomeIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  TrophyIcon,
  CalendarDaysIcon,
  StarIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UsersIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

// SEO metadata
export const metadata: Metadata = {
  title: 'About Us - Nimak Media & Events | Professional Event Planners',
  description: 'Learn about Nimak Media & Events, Kenya\'s premier event planning company. Full-service event management, PR, and strategic communication experts.',
  keywords: 'about Nimak Media Events, event planners Kenya, professional event management, Nairobi event company',
  openGraph: {
    title: 'About Us - Nimak Media & Events',
    description: 'Learn about Nimak Media & Events, Kenya\'s premier event planning company.',
    type: 'website',
  }
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring each event exceeds expectations and creates lasting memories.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'Our love for creating extraordinary experiences drives us to go above and beyond for every client and event.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly seek creative solutions and embrace new technologies to deliver cutting-edge event experiences.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and accountability in all our client relationships and partnerships.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, working closely with clients and partners to achieve shared success.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Impact',
      description: 'We aim to create events that not only entertain but also inspire, educate, and create positive change.'
    }
  ]

  const achievements = [
    { number: '100+', label: 'Successful Events', description: 'Events delivered across various industries' },
    { number: '50K+', label: 'Happy Attendees', description: 'People who experienced our events' },
    { number: '98%', label: 'Client Satisfaction', description: 'Clients who recommend our services' },
    { number: '5+', label: 'Years Experience', description: 'Years of professional event management' }
  ]

  const teamMembers = [
    {
      name: 'Leadership Team',
      role: 'Executive Leadership',
      image: '/api/placeholder/400/400',
      description: 'Our experienced leadership team brings decades of combined experience in event management and strategic communication.'
    },
    {
      name: 'Creative Team',
      role: 'Design & Concept Development',
      image: '/api/placeholder/400/400',
      description: 'Our creative professionals specialize in transforming ideas into extraordinary event experiences.'
    },
    {
      name: 'Operations Team',
      role: 'Event Production & Logistics',
      image: '/api/placeholder/400/400',
      description: 'Our operations experts ensure flawless execution and seamless coordination of every event detail.'
    },
    {
      name: 'Client Relations Team',
      role: 'Account Management & Support',
      image: '/api/placeholder/400/400',
      description: 'Our client relations team provides dedicated support and maintains strong partnerships with our clients.'
    }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-nimak overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.png"
            alt="About Nimak Media & Events - Professional event planning"
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
            <span className="text-white font-medium">About</span>
          </nav>

          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Nimak Media & Events
            </h1>
            <p className="text-xl lg:text-2xl font-light mb-8 opacity-90">
              Kenya&apos;s Premier Event Management & Strategic Communication Partner
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Dedicated to delivering exceptional and memorable experiences through meticulous attention to detail, 
              creative innovation, and professional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
                  Who We Are
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-nimak-navy mb-6">
                  A complete event management Partner
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Nimak Media & Events is a full-service event planning, organizing, and management 
                  company dedicated to delivering exceptional and memorable experiences. We specialize 
                  in crafting unique events through meticulous attention to detail, handling all creative, 
                  technical, and logistical elements to bring your vision to life.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Beyond events, we excel in Public Relations and Strategic Business Communication, 
                  developing innovative strategies that connect our clients to their audiences while 
                  enhancing brand image and reputation.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Our commitment to excellence, combined with our creative approach and professional expertise, 
                  makes us the trusted partner for organizations seeking to create impactful experiences 
                  that resonate with their audiences and achieve their objectives.
                </p>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/event1.jpg"
                  alt="Professional event management by Nimak Media & Events"
                  width={600}
                  height={400}
                  className="object-cover w-full h-80 lg:h-96"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nimak-navy/20 to-transparent"></div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-nimak-blue">100+</div>
                    <div className="text-xs text-gray-600">Events</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-nimak-blue">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-nimak-subtle">
        <div className="container-custom mx-auto">
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {/* Mission */}
            <div className="card-nimak p-8">
              <div className="w-16 h-16 bg-gradient-nimak rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-nimak-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create extraordinary experiences that exceed expectations by combining creative innovation 
                with professional excellence. We are committed to understanding our clients&apos; unique needs and 
                delivering events that not only meet their objectives but create lasting memories for all attendees.
              </p>
            </div>

            {/* Vision */}
            <div className="card-nimak p-8">
              <div className="w-16 h-16 bg-gradient-nimak rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-nimak-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be Kenya&apos;s most trusted and innovative event management company, recognized for our ability 
                to transform ideas into impactful experiences. We envision a future where every event we create 
                becomes a catalyst for connection, growth, and positive change.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-nimak-navy mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, partners, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={value.title} className="card-nimak p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-nimak-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-nimak-blue" />
                </div>
                <h4 className="text-lg font-bold text-nimak-navy mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to becoming Kenya&apos;s trusted event management partner
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-nimak-navy">Our Journey</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded with a vision to transform the event management landscape in Kenya, Nimak Media & Events 
                began as a passionate endeavor to create meaningful connections through exceptional experiences.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Over the years, we have grown from organizing intimate gatherings to managing large-scale corporate 
                events, conferences, and strategic communication campaigns. Our journey has been marked by continuous 
                learning, innovation, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Today, we stand proud as a trusted partner to organizations across various industries, having 
                successfully delivered over 100 events and touched the lives of more than 50,000 attendees.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={achievement.label} className="card-nimak p-6 text-center">
                    <div className="text-3xl font-bold text-nimak-blue mb-2">{achievement.number}</div>
                    <div className="font-semibold text-nimak-navy mb-2">{achievement.label}</div>
                    <div className="text-xs text-gray-600">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-gradient-nimak-subtle rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-nimak-navy mb-6">Awards & Recognition</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and satisfied clients alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="font-semibold text-nimak-navy">Client Excellence</h4>
                <p className="text-sm text-gray-600">98% client satisfaction rate</p>
              </div>
              
              <div className="space-y-4">
                <TrophyIcon className="h-12 w-12 text-nimak-blue mx-auto" />
                <h4 className="font-semibold text-nimak-navy">Industry Recognition</h4>
                <p className="text-sm text-gray-600">Recognized for innovation in event management</p>
              </div>
              
              <div className="space-y-4">
                <UsersIcon className="h-12 w-12 text-nimak-blue mx-auto" />
                <h4 className="font-semibold text-nimak-navy">Community Impact</h4>
                <p className="text-sm text-gray-600">Contributing to Kenya&apos;s event industry growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-nimak-subtle">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-nimak mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Meet the passionate professionals who bring your events to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="card-nimak p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-nimak rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <UsersIcon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <PlayIcon className="h-4 w-4 text-nimak-blue" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-nimak-navy mb-2">{member.name}</h3>
                <p className="text-nimak-blue font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-nimak-navy mb-4">Join Our Team</h4>
              <p className="text-gray-700 mb-6">
                We&apos;re always looking for passionate individuals who share our commitment to excellence. 
                Join us in creating extraordinary experiences.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-nimak-blue text-white rounded-lg hover:bg-nimak-navy transition-colors duration-300"
              >
                View Opportunities
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Reuse Component */}
      <WhyChooseUs />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-nimak text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Whether you&apos;re planning a corporate event, product launch, or strategic communication campaign, 
            our team is ready to bring your vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <PhoneIcon className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+254 721 330 158</p>
            </div>
            
            <div className="text-center">
              <EnvelopeIcon className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">info@nimakmediaevents.com</p>
            </div>
            
            <div className="text-center">
              <CalendarDaysIcon className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-lg font-semibold mb-2">Schedule Meeting</h3>
              <p className="opacity-90">Free consultation available</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="btn btn-primary btn-lg bg-white text-nimak-navy hover:bg-gray-100 group"
            >
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/services"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-nimak-navy group"
            >
              View Our Services
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <p className="mt-8 text-sm opacity-75">
            Join 100+ satisfied clients who trust Nimak Media & Events for their most important events.
          </p>
        </div>
      </section>
    </div>
  )
}