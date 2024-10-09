'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "./Header"
import { Footer } from "./footer"
import { supabase } from '@/lib/supabaseClient'
import { Home } from 'lucide-react'  // Import the Home icon

export function PropertiesPageComponent() {
  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    fetchProperties()
  }, [])

  useEffect(() => {
    filterProperties()
  }, [searchTerm, propertyType, location, properties])

  async function fetchProperties() {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
      
      if (error) throw error
      setProperties(data)
      setFilteredProperties(data)
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }

  function filterProperties() {
    let filtered = properties

    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.property_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (propertyType && propertyType !== "all") {
      filtered = filtered.filter(property => property.bhk === propertyType)
    }

    if (location && location !== "all") {
      filtered = filtered.filter(property => property.city === location)
    }

    setFilteredProperties(filtered)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header/>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center text-[#035527] mb-8">
              Discover Your Dream Property
            </h1>
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <Input 
                className="flex-grow" 
                placeholder="Search properties..." 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="2BHK">2 BHK</SelectItem>
                  <SelectItem value="3BHK">3 BHK</SelectItem>
                  <SelectItem value="4BHK">4 BHK</SelectItem>
                  <SelectItem value="5BHK">5 BHK</SelectItem>
                  <SelectItem value="6BHK">6 BHK</SelectItem>
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {[...new Set(properties.map(p => p.city))].map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-[#035527] mb-12">
              Featured Properties
            </h2>
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.property_id} {...property} />
                ))}
              </div>
            ) : (
              <NoPropertiesAvailable />
            )}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

function PropertyCard({ id, property_name, property_type, location, city, bedrooms, bathrooms, size_sqft, price, image }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <img
          alt={property_name}
          className="w-full h-48 object-cover"
          height="200"
          src={image || "https://via.placeholder.com/300x200"}
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="300"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">{property_name}</CardTitle>
        <p className="text-[#035527] font-bold mb-1">${price.toLocaleString()}</p>
        <p className="text-gray-600 text-sm mb-1">{location}, {city}</p>
        <p className="text-gray-600 text-sm mb-1">{property_type}</p>
        <p className="text-gray-600 text-sm">{bedrooms} beds • {bathrooms} baths • {size_sqft} sqft</p>
      </CardContent>
      <CardFooter className="p-4">
        <Link href={`/properties/${id}`} passHref>
          <Button className="w-full bg-[#035527] text-white hover:bg-[#035527] transition-colors">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function NoPropertiesAvailable() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <Home className="w-16 h-16 text-[#035527] mb-4" />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Properties Available</h3>
      <p className="text-gray-600 max-w-md">
        We couldn&apos;t find any properties matching your criteria. Try adjusting your filters or check back later for new listings.
      </p>
    </div>
  );
}