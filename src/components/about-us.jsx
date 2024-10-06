'use client'

import { ArrowUpRight, CheckCircle, Users, Award, Briefcase, Home, DollarSign, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AboutUsComponent() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-5xl font-serif mb-4 text-green-800">About Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
            {[
              { icon: DollarSign, text: "No Brokerage" },
              { icon: Home, text: "Direct from Owner" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Users, text: "Verified Listings" },
              { icon: Award, text: "Premium Properties" },
              { icon: Briefcase, text: "Expert Guidance" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <item.icon className="w-5 h-5 text-green-800 mr-2" />
                <span className="text-sm font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              We strive to redefine luxury living by creating homes that seamlessly blend 
              aesthetics with functionality, always prioritizing our clients' dreams and 
              the environment.
            </p>
            <ul className="space-y-2">
              {['Client-Centric Approach', 'Sustainable Practices', 'Innovative Designs'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="mr-2 text-green-600" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-800 rounded-lg p-6 text-white">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="mb-4">
              To be the leading name in luxury real estate, known for our unparalleled quality, 
              innovative designs, and commitment to creating homes that stand the test of time.
            </p>
            <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600">
              Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}