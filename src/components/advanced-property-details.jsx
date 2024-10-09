'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, Square, MapPin, Calendar, DollarSign, Clock, Home, MessageCircle } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'
import Header from './Header'
import { Footer } from './footer'
import { BackButton } from './BackButton'  // Import the BackButton component

export function AdvancedPropertyDetailsComponent({ id }) {
  const [propertyData, setPropertyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setPropertyData(data)
        setError(null)
      } catch (error) {
        console.error('Error fetching property data:', error)
        setError('Failed to load property data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPropertyData()
  }, [id])

  const handleWhatsAppRedirect = (action) => {
    const phoneNumber = '1234567890' // Replace with your actual WhatsApp number
    let message = ''
    if (action === 'tour') {
      message = `Hi, I'm interested in scheduling a tour for the property: ${propertyData.property_name}`
    } else if (action === 'offer') {
      message = `Hi, I'm interested in making an offer for the property: ${propertyData.property_name}`
    } else if (action === 'contact') {
      message = `Hi, I'd like to get more information about the property: ${propertyData.property_name}`
    }
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>
  if (!propertyData) return <div className="flex justify-center items-center h-screen">No property data available.</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <BackButton />
          <h1 className="text-4xl font-bold text-green-800 mb-2 mt-4">{propertyData.property_name}</h1>
          <p className="text-xl text-gray-600 flex items-center">
            <MapPin className="h-5 w-5 mr-2" /> {propertyData.location}, {propertyData.city}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src={propertyData.image || "/placeholder.svg?height=500&width=800"}
                alt={propertyData.property_name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>

            <Tabs defaultValue="details" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <PropertyDetail icon={Bed} label="Bedrooms" value={propertyData.bedrooms} />
                      <PropertyDetail icon={Bath} label="Bathrooms" value={propertyData.bathrooms} />
                      <PropertyDetail icon={Square} label="Size" value={`${propertyData.size_sqft} sqft`} />
                      <PropertyDetail icon={Home} label="Type" value={propertyData.property_type} />
                      <PropertyDetail icon={DollarSign} label="Price" value={`$${propertyData.price.toLocaleString()}`} />
                      <PropertyDetail icon={Calendar} label="Available From" value={new Date(propertyData.available_from).toLocaleDateString()} />
                      <PropertyDetail icon={Clock} label="Listed" value={new Date(propertyData.created_at).toLocaleDateString()} />
                      <PropertyDetail icon={Clock} label="Updated" value={new Date(propertyData.updated_at).toLocaleDateString()} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="features">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">
                      {propertyData.description || "No description available."}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="location">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">
                      {propertyData.location}, {propertyData.city}
                    </p>
                    {/* You can add a map here if you have coordinates */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="mb-6 sticky top-20">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold text-green-800 mb-4">${propertyData.price.toLocaleString()}</h2>
                <p className="text-lg text-gray-600 mb-4">{propertyData.listing_status}</p>
                <div className="space-y-4">
                  <Button className="w-full bg-green-800 text-white hover:bg-green-900" onClick={() => handleWhatsAppRedirect('tour')}>
                    Schedule a Tour
                  </Button>
                  <Button variant="outline" className="w-full border-green-800 text-green-800 hover:bg-green-50" onClick={() => handleWhatsAppRedirect('offer')}>
                    Make an Offer
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-green-800 text-white hover:bg-green-900 flex items-center justify-center"
                  onClick={() => handleWhatsAppRedirect('contact')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PropertyDetail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center">
      <Icon className="h-5 w-5 mr-2 text-green-800" />
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}