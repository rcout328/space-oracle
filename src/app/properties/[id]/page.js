'use client'

import { useParams } from 'next/navigation'
import { AdvancedPropertyDetailsComponent } from '@/components/advanced-property-details'

export default function PropertyDetailsPage() {
  const params = useParams()
  const propertyId = params.id

  return <AdvancedPropertyDetailsComponent id={propertyId} />
}