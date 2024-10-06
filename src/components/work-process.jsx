'use client'

import { ArrowUpRight, CheckSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function WorkProcess() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-8xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="relative w-full lg:w-1/2">
          <div className="bg-green-800 rounded-3xl p-4 relative">
            <img
              src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
              alt="Modern house illustration"
              className="w-full h-auto rounded-2xl object-cover" />
            <div
              className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full flex items-center">
              <span className="text-3xl font-bold mr-2">23+</span>
              <span className="text-sm">Over<br />Experience</span>
            </div>
          </div>
          <img
            src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg"
            alt="House floor plan"
            className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full border-4 border-white object-cover" />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-serif text-green-800">Our Work Process make your dream Home</h2>
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
              <div key={index} className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${index === 1 ? 'bg-green-800' : 'bg-green-800'}`}>
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600 rounded-full px-6 py-3 font-semibold">
            Let's Start With Us
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}