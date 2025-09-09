'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import ServicesNavigation from '@/components/ServicesNavigation'

interface ServicesLayoutProps {
  children: React.ReactNode
}

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const getPageTitle = () => {
    if (pathname === '/services') {
      return 'Our Services'
    }
    
    const serviceName = pathname.split('/services/')[1]
    if (serviceName) {
      return serviceName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    
    return 'Our Services'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-gradient-to-br from-nimak-blue via-blue-600 to-indigo-700 py-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Circles */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400/30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-400/30 rounded-full animate-bounce delay-500"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-orange-400/40 rotate-45 animate-spin"></div>
          <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-cyan-400/40 rotate-12 animate-pulse"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/40 to-orange-500/40 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/40 to-red-500/40 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white drop-shadow-2xl shadow-black/50 mb-3 animate-fade-in-up" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            {getPageTitle()}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto rounded-full shadow-lg"></div>
        </div>
        
        {/* Wave Shape at Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>
      <div className={`flex ${pathname !== '/services' ? 'px-48' : ''}`}>
        {/* Side Navigation - Desktop - Only show on individual service pages */}
        {pathname !== '/services' && (
          <aside className="hidden lg:block w-80 bg-white min-h-screen sticky top-0">
            <div className="p-6">
              <Link href="/services" className="block mb-8">
                <h3 className="text-2xl font-bold text-gradient-nimak">
                  Our Services
                </h3>
              </Link>
              <ServicesNavigation />
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 ${pathname === '/services' ? 'px-48' : ''}`}>
          {/* Mobile Header - Only show on individual service pages */}
          {pathname !== '/services' && (
            <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40">
              <div className="flex items-center justify-between p-4">
                <Link href="/services">
                  <h3 className="font-bold text-gradient-nimak">
                    Our Services
                  </h3>
                </Link>
                
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-600 hover:text-nimak-blue transition-colors duration-300"
                  aria-label="Toggle services menu"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              {isMobileMenuOpen && (
                <div className="bg-white border-t border-gray-200">
                  <div className="p-4">
                    <ServicesNavigation isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
                  </div>
                </div>
              )}
            </header>
          )}

          {/* Page Content */}
          {children}
        </main>
      </div>
    </div>
  )
}

export default ServicesLayout