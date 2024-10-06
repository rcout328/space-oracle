import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { PlatformFeatures } from '@/components/platform-features'
import { WorkProcess } from '@/components/work-process'
import { PropertyListings } from '@/components/property-listings' // Import PropertyListings component
import { LatestProjects } from '@/components/latest-projects' // Import LatestProjects component
import { AboutUsComponent } from '@/components/about-us' // Import AboutUsComponent
import { CallToActionComponent } from '@/components/call-to-action' // Import CallToAction component
import { Footer } from '@/components/footer' // Import the new Footer component

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-3xl font-bold text-green-800">ʌ</div>
        <nav className="hidden md:flex space-x-8">
          <Link className="hover:text-green-800" href="#">Home</Link>
          <Link className="hover:text-green-800" href="#">Properties</Link>
          <div className="relative group">
            <button className="flex items-center hover:text-green-800">
              Buy <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center hover:text-green-800">
              Sell <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center hover:text-green-800">
              Rent <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-800 hover:text-green-800">Log In</Button>
          <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600">Get Started</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-6xl font-serif mb-4 text-green-800">
            We Create<br />
            Your <span className="relative">
              <span className="relative">Future</span>
            </span><br />
            House
          </h1>
          <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600">
            Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4">
          {['Modern Villa', 'Luxury Apartment', 'Cozy Cottage'].map((title, index) => (
            <div key={index} className="flex-none w-[calc(33.333%-16px)] min-w-[280px]">
              <div className="relative overflow-hidden rounded-3xl h-[300px]">
                <img
                  src={`https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg`}
                  alt={title}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-white mb-4">Discover your dream home</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-yellow-500 text-gray-800 hover:bg-yellow-600 self-start">
                    Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <PlatformFeatures />
        
        <WorkProcess />
        
        <PropertyListings /> {/* Add PropertyListings component here */}
        
        <LatestProjects /> {/* Add LatestProjects component here */}
        
        <AboutUsComponent /> {/* Add AboutUsComponent here */}
        
        <CallToActionComponent /> {/* Add CallToAction component here */}
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}