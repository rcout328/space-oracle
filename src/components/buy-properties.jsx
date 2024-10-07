'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search, ArrowUpRight, Bed, Bath, Square, Heart, MapPin } from 'lucide-react'
import Link from 'next/link'
import Header from './Header'
import { Footer } from './footer'

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    price: 450000,
    image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg",
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: "Villa",
    location: "Beverly Hills, CA",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: 350000,
    image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "Apartment",
    location: "New York, NY",
    featured: true,
  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: 250000,
    image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg",
    beds: 2,
    baths: 1,
    sqft: 1200,
    type: "Cottage",
    location: "Portland, OR",
    featured: false,
  },
  // Add more properties as needed
]

export function BuyPropertiesComponent() {
  const [priceRange, setPriceRange] = useState([200000, 500000])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-xl mb-6">Discover a wide range of properties tailored to your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Search locations..." className="bg-white text-black" />
            <Select>
              <SelectTrigger className="bg-white text-black">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Input type="number" placeholder="Min price" className="bg-white text-black" />
              <span>-</span>
              <Input type="number" placeholder="Max price" className="bg-white text-black" />
            </div>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Search Properties</Button>
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-1">
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold mb-4">Refine Your Search</h2>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-1 block">Price Range</label>
                <Slider
                  min={100000}
                  max={1000000}
                  step={10000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-1 block">Bedrooms</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-1 block">Bathrooms</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Show only with 3D Tour</span>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-800 text-white hover:bg-green-900">Apply Filters</Button>
            </CardFooter>
          </Card>
          
          <div className="lg:col-span-3">
            <Tabs defaultValue="grid" className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <TabsList>
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grid">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list">
                <div className="space-y-4">
                  {properties.map((property) => (
                    <PropertyListItem key={property.id} property={property} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover" />
        {property.featured && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded">
            Featured
          </span>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-gray-800 mb-2">${property.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mb-4 flex items-center">
          <MapPin className="h-4 w-4 mr-1" /> {property.location}
        </p>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span className="flex items-center"><Bed className="h-4 w-4 mr-1" /> {property.beds} beds</span>
          <span className="flex items-center"><Bath className="h-4 w-4 mr-1" /> {property.baths} baths</span>
          <span className="flex items-center"><Square className="h-4 w-4 mr-1" /> {property.sqft} sqft</span>
        </div>
        <Button className="w-full bg-green-800 text-white hover:bg-green-900">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

function PropertyListItem({ property }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex">
        <div className="w-1/3 relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover" />
          {property.featured && (
            <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded">
              Featured
            </span>
          )}
        </div>
        <CardContent className="w-2/3 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{property.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">${property.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mb-4 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> {property.location}
              </p>
            </div>
            <Button className="bg-green-800 text-white hover:bg-green-900">
              View Details
            </Button>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span className="flex items-center"><Bed className="h-4 w-4 mr-1" /> {property.beds} beds</span>
            <span className="flex items-center"><Bath className="h-4 w-4 mr-1" /> {property.baths} baths</span>
            <span className="flex items-center"><Square className="h-4 w-4 mr-1" /> {property.sqft} sqft</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}