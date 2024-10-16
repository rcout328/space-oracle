'use client'

import { ArrowUpRight, CheckCircle, Users, Award, Briefcase, Home, DollarSign, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AboutUsComponent() {
  return (
    <div className="bg-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 md:mb-0 text-[#035527]">About Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-auto">
            {[
              { icon: DollarSign, text: "No Brokerage" },
              { icon: Home, text: "Direct from Owner" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Users, text: "Verified Listings" },
              { icon: Award, text: "Premium Properties" },
              { icon: Briefcase, text: "Expert Guidance" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-2">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#035527] mr-2" />
                <span className="text-xs md:text-sm font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-gray-100 rounded-lg p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#035527] mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              We strive to redefine luxury living by creating homes that seamlessly blend 
              aesthetics with functionality, always prioritizing our clients&apos; dreams and 
              the environment.
            </p>
            <ul className="space-y-2">
              {['Client-Centric Approach', 'Sustainable Practices', 'Innovative Designs'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 text-sm md:text-base">
                  <CheckCircle className="mr-2 text-[#035527]" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#035527] rounded-lg p-4 md:p-6 text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Space Oracle</h3>
            <p className="mb-4 text-sm md:text-base">
              Space Oracle is our cutting-edge AI-powered platform that revolutionizes the real estate experience. 
              It combines advanced algorithms with market insights to offer:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-yellow-500 mt-1" size={16} />
                <span>Personalized property recommendations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-yellow-500 mt-1" size={16} />
                <span>Predictive market analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-yellow-500 mt-1" size={16} />
                <span>Virtual property tours</span>
              </li>
            </ul>
            <p className="text-sm md:text-base">
              Empowering you to make informed decisions and find your perfect home with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}