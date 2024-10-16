'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function PropertyListings() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-4xl font-serif mb-4 text-[#035527]">Properties<br />Posted By</h2>
          <p className="text-gray-600 max-w-md">
            We use only the finest materials, sourced from reputable suppliers, to ensure the safety and quality of our properties.
          </p>
          <div className="mt-8 relative">
            <img
              src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
              alt="Modern luxury house"
              className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-[#035527]">
            Choose the type of property
            <span className="block text-sm font-normal text-gray-600 mt-2">
              (We offer a variety of property types to suit your needs and preferences.)
            </span>
          </h3>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {['2BHK', '3BHK'].map((bhk, index) => (
                <Link href={`/proper?bhk=${bhk}`} key={index} passHref>
                  <div className={`flex-none w-5/2 lg:w-2/3 aspect-square rounded-3xl p-8 transition-transform duration-300 hover:shadow-lg ${index === 0 ? 'bg-[#035527]' : 'bg-yellow-500'} cursor-pointer`}>
                    <h4 className="text-3xl font-semibold mb-6 text-white">{bhk} Properties</h4>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-semibold text-gray-300">{bhk}</span>
                      <button className="bg-black text-white rounded-full p-3 transition-transform duration-300 hover:scale-110">
                        <ArrowRight size={24} />
                      </button>
                    </div>
                    <img
                      src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
                      alt={`${bhk} property`}
                      className="w-full h-72 object-cover rounded-xl shadow-md" />
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300">
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
