'use client'

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CallToActionComponent() {
  return (
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-[#035527] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-6 md:p-12 text-white">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8">
                Ready to turn your dream home into reality? Our team of experts is here to guide you through every step of the process.
              </p>
              <Button className="bg-[#C7852F] text-gray-800 hover:bg-[#C7852F] rounded-full px-6 py-2 md:px-8 md:py-3 text-sm md:text-lg font-semibold w-full md:w-auto">
                Start a project
                <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-auto">
              <img
                src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
                alt="Modern luxury house"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}