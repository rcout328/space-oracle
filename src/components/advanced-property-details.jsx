'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'; // Import Link from next/link
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, Square, MapPin, Calendar, DollarSign, Clock, Home, MessageCircle, Download } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'
import Header from './Header'
import { Footer } from './footer'
import { BackButton } from './BackButton'
import { useRouter } from 'next/router'

export function AdvancedPropertyDetailsComponent({ id }) {
  const [propertyData, setPropertyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showInquiryForm, setShowInquiryForm] = useState(false)

  useEffect(() => {
    const validAccess = sessionStorage.getItem('validPropertyAccess')
    if (validAccess !== id) {
      window.location.href = '/proper' // Redirect to properties page if access is not valid
      return
    }

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

        // Clear the session storage item
        sessionStorage.removeItem('validPropertyAccess')

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
    if (action === 'contact') {
      message = `Hi, I'm interested in the property: ${propertyData.property_name}`
    } else if (action === 'brochure') {
      message = `Hi, I would like to request the brochure for the property: ${propertyData.property_name}`
    }
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const inquiryData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      proprites: id // Pass the property ID into the inquiry data
    }

    try {
      const { error } = await supabase
        .from('inquiry') // Assuming you have an inquiries table
        .insert([inquiryData])

      if (error) throw error
      alert('Inquiry submitted successfully!')
      setShowInquiryForm(false)
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      alert('Failed to submit inquiry. Please try again later.')
    }
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
          <h1 className="text-4xl font-bold text-[#035527] mb-2 mt-4">{propertyData.property_name}</h1>
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
                <h2 className="text-3xl font-bold text-[#035527] mb-4">${propertyData.price.toLocaleString()}</h2>
                <p className="text-lg text-gray-600 mb-4">{propertyData.listing_status}</p>
                <div className="space-y-4">
                  <Button className="w-full bg-[#035527] text-white hover:bg-[#035527]" onClick={() => handleWhatsAppRedirect('contact')}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                  <Button variant="outline" className="w-full border-[#035527] text-[#035527] hover:bg-[#035527]" onClick={() => handleWhatsAppRedirect('brochure')}>
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                  <Link href="/inquire" passHref>
                    <Button className="w-full bg-yellow-500 text-gray-800 hover:bg-yellow-600">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {showInquiryForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-bold mb-6 text-[#035527]">Get Started</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="pl-10 py-3 border border-gray-300 rounded"
                  />
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="pl-10 py-3 border border-gray-300 rounded"
                  />
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="pl-10 py-3 border border-gray-300 rounded"
                  />
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="pl-10 py-3 border border-gray-300 rounded min-h-[100px]"
                  />
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" size={18} />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#035527] hover:bg-[#035527] text-white py-3 text-lg font-semibold transition-colors duration-300"
                >
                  Submit Inquiry
                </Button>
              </form>
              <Button 
                variant="ghost" 
                onClick={() => setShowInquiryForm(false)}
                className="mt-4 text-[#035527] hover:bg-[#035527] transition-colors duration-300"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function PropertyDetail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center">
      <Icon className="h-5 w-5 mr-2 text-[#035527]" />
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
