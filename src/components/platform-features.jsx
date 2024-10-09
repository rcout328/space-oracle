'use client'

import { Home, Settings, Phone, MapPin, Shield, Clock, Users, Star } from "lucide-react"

export function PlatformFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <h2 className="text-4xl font-serif mb-4 md:mb-0 text-[#035527]">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
          {[
            { icon: Shield, text: "Secure Transactions" },
            { icon: Clock, text: "24/7 Availability" },
            { icon: Users, text: "Expert Support" },
            { icon: Star, text: "Premium Listings" },
            { icon: Home, text: "Verified Properties" },
            { icon: Settings, text: "Easy Management" }
          ].map((item, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <item.icon className="w-5 h-5 text-[#035527] mr-2" />
              <span className="text-sm font-semibold text-gray-800">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4">
        {[
          { title: "Easy Payment", icon: Home, color: "bg-green-100" },
          { title: "Full Support", icon: Settings, color: "bg-blue-100" },
          { title: "Simple Contact", icon: Phone, color: "bg-yellow-100" },
          { title: "Real Location", icon: MapPin, color: "bg-purple-100" },
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex-none w-[calc(25%-12px)] min-w-[200px] ${feature.color} rounded-3xl p-6 flex flex-col items-center text-center`}>
            <div className="bg-yellow-500 p-3 rounded-full mb-4">
              <feature.icon className="w-6 h-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">
              Our rigorous quality standards ensure the best experience for your property.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}