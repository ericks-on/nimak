import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Event Planning Services - Nimak Media & Events | Kenya',
  description: 'Professional event planning services in Kenya. From concept creation to full production management. Get expert PR and communication services.',
  keywords: 'event planning Kenya, event management Nairobi, PR services Kenya, corporate events, conference planning',
  openGraph: {
    title: 'Event Planning Services - Nimak Media & Events',
    description: 'Professional event planning services in Kenya. From concept creation to full production management.',
    type: 'website',
  }
}

const ServicesPage = () => {
  return <ServicesPageClient />
}

export default ServicesPage