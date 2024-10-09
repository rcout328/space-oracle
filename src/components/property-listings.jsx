'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export function PropertyListings() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-4xl font-serif mb-4 text-[#035527]">Properties<br />Posted By</h2>
          <p className="text-gray-600 max-w-md">
            We use only the finest materials, sourced from reputable suppliers, to ensure the safety.
          </p>
          <div className="mt-8 relative">
            <img
              src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
              alt="Modern luxury house"
              className="w-64 h-64 object-cover rounded-lg" /> {/* Increased size */}
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-[#035527]">
            Choose the type Of adviser
            <span className="block text-sm font-normal text-gray-600 mt-2">
              (We use only the finest materials, sourced from reputable suppliers, to ensure the safety, sustainability, and longevity of your property.)
            </span>
          </h3>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {['Owner Listed Properties', 'Dealer Listed Properties'].map((title, index) => (
                <div
                  key={index}
                  className={`flex-none w-3/4 lg:w-1/2 rounded-3xl p-6 ${index === 0 ? 'bg-[#035527]' : 'bg-[#C7852F]'}`}>
                  <h4 className="text-2xl font-semibold mb-4 text-white">{title}</h4>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-300">3 BHK</span> {/* Updated text */}
                    <button className="bg-black text-white rounded-full p-2">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                  <img
                    src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
                    alt={title}
                    className="w-full h-64 object-cover rounded-xl" /> {/* Increased size */}
                </div>
              ))}
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}