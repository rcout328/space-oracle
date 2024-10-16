'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PlatformFeatures } from '@/components/platform-features'
import { WorkProcess } from '@/components/work-process'
import { PropertyListings } from '@/components/property-listings'
import { LatestProjects } from '@/components/latest-projects'
import { CallToActionComponent } from '@/components/call-to-action'
import { Footer } from '@/components/footer'
import Header from './Header'
import { AboutUsComponent } from './aboutus'
import { supabase } from '@/lib/supabaseClient'
import { InquiryForm } from './InquiryForm'

export function HomePage() {
  const [bestProperties, setBestProperties] = useState([])
  const [showInquiryForm, setShowInquiryForm] = useState(false)

  useEffect(() => {
    fetchBestProperties()
  }, [])

  async function fetchBestProperties() {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('top3', true) // Filter to only include properties where top3 is true
        .limit(3); // Limit to the top 3 properties
      
      if (error) throw error;
      setBestProperties(data);
    } catch (error) {
      console.error('Error fetching best properties:', error);
    }
}

  return (
    <div className="min-h-screen bg-white text-[#035527]">
      <Header/>
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="font-serif mb-4 text-[#035527] text-4xl sm:text-5xl md:text-6xl leading-tight">
            We Create<br />
            Your <span className="relative">
              <span className="relative">Future</span>
            </span><br />
            House
          </h1>
          <Button 
            className="bg-yellow-500 text-black hover:bg-yellow-700"
            onClick={() => setShowInquiryForm(true)}
          >
            Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Inquiry Form Modal */}
        {showInquiryForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-bold mb-6 text-text-[#035527]">Get Started</h2>
              <InquiryForm onClose={() => setShowInquiryForm(false)} />
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

        <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4">
          {bestProperties.map((property) => (
            <div key={property.id} className="flex-none w-[calc(33.333%-16px)] min-w-[280px]">
              <div className="relative overflow-hidden rounded-3xl h-[300px]">
                <img
                  src={property.image || "https://via.placeholder.com/300x200"}
                  alt={property.property_name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{property.property_name}</h3>
                  <p className="text-white mb-4">{property.city}</p>
                  <Link href={`/properties/${property.id}`} passHref>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-yellow-500 text-black hover:bg-yellow-700 self-start"
                    >
                      Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
         <Link href="/proper" className="bg-yellow-500 text-black hover:bg-yellow-700 flex items-center">
         <Button 
            className="bg-yellow-500 text-black hover:bg-yellow-700 flex items-center"
            onClick={() => {/* Logic to show more properties */}}
          >
            Show More Properties <ArrowRight className="ml-2 h-4 w-4" />
          </Button></Link>
        </div>

        <PlatformFeatures />
     
        <WorkProcess />
        
        <PropertyListings />
        
        <LatestProjects />
        
        <section id="about" className="py-16">
          <AboutUsComponent />
        </section>
        
        <CallToActionComponent />
      </main>
      <Footer />
    </div>
  );
}
