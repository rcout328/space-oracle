'use client'

import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function LatestProjects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif mb-8 text-green-800">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
            <img
              src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
              alt={`Project ${index + 1}`}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title {index + 1}</h3>
              <p className="text-gray-600 mb-4">Description of the project goes here. This is a brief overview of what the project entails.</p>
              <Button
                size="sm"
                variant="ghost"
                className="bg-yellow-500 text-gray-800 hover:bg-yellow-600">
                Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}