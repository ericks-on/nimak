// Static params generation for service pages
export const serviceParams = [
  { service: 'event-concept-creation' },
  { service: 'brand-management' },
  { service: 'event-marketing' },
  { service: 'b2b-meetings' },
  { service: 'pr-communication' },
  { service: 'event-design-production' },
  { service: 'vendor-management' },
  { service: 'logistics-management' }
]

export const generateStaticParams = async () => {
  return serviceParams
}