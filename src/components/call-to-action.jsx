'use client'

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CallToActionComponent() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-green-800 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg mb-8">
                Ready to turn your dream home into reality? Our team of experts is here to guide you through every step of the process.
              </p>
              <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600 rounded-full px-8 py-3 text-lg font-semibold">
                Start a project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2">
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