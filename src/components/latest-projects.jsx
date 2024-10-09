'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabaseClient'

export function LatestProjects() {
  const [bestProperties, setBestProperties] = useState([])

  useEffect(() => {
    fetchBestProperties()
  }, [])

  async function fetchBestProperties() {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('price', { ascending: false })
        .limit(3)
      
      if (error) throw error
      setBestProperties(data)
    } catch (error) {
      console.error('Error fetching best properties:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif mb-8 text-green-800">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestProperties.map((property) => (
          <div key={property.id} className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
            <img
              src={property.image || "https://via.placeholder.com/300x200"}
              alt={property.property_name}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.property_name}</h3>
              <p className="text-gray-600 mb-4">{property.city} - ${property.price.toLocaleString()}</p>
              <Link href={`/properties/${property.id}`} passHref>
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-yellow-500 text-gray-800 hover:bg-yellow-600">
                  Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/proper" passHref>
          <Button
            size="lg"
            variant="outline"
            className="bg-green-800 text-white hover:bg-green-900 transition-colors">
            See More Properties <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}