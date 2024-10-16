'use client'

import { ArrowUpRight, CheckSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function WorkProcess() {
  return (
    <div className="bg-white text-gray-800 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#035527] rounded-3xl p-4 relative">
              <img
                src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
                alt="Modern house illustration"
                className="w-full h-auto rounded-2xl object-cover" />
              <div
                className="absolute bottom-4 left-4 bg-[#035527] text-white px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center">
                <span className="text-xl md:text-3xl font-bold mr-2">23+</span>
                <span className="text-xs md:text-sm">Over<br />Experience</span>
              </div>
            </div>
         
          </div>
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#035527]">Our Work Process makes your dream Home</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Perfection in every inch",
                  description: "Our construction process is transparent with regular updates and open communication to keep you informed at every stage."
                },
                {
                  title: "Simple Idea & Design",
                  description: "Our regular updates open communication to keep you informed at every stage."
                },
                {
                  title: "Comfortable Support",
                  description: "Our regular updates open communication to keep you informed at every stage."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  <div className={`p-2 rounded-lg ${index === 1 ? 'bg-[#035527]' : 'bg-[#035527]'}`}>
                    <CheckSquare className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-gray-800">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/proper" passHref>
              <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600 rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold w-full md:w-auto mt-4">
                Let&apos;s Start With Us
                <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
