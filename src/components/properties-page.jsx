'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "./Header"
import { Footer } from "./footer"

export function PropertiesPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center text-green-800 mb-8">
              Discover Your Dream Property
            </h1>
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <Input className="flex-grow" placeholder="Search properties..." type="search" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-colors">Search</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-green-800 mb-12">
              Featured Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredProperties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        </section>
      </main>
    <Footer/>
    </div>
  );
}

const featuredProperties = [
  { title: "Modern Villa", image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg", price: "$450,000", location: "Beverly Hills, CA" },
  { title: "Luxury Apartment", image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg", price: "$350,000", location: "New York, NY" },
  { title: "Cozy Cottage", image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg", price: "$250,000", location: "Portland, OR" },
  { title: "Urban Loft", image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg", price: "$400,000", location: "Chicago, IL" },
  { title: "Seaside Bungalow", image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg", price: "$550,000", location: "Miami, FL" },
  { title: "Mountain Retreat", image: "https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/eed6fd05-ab81-463e-a743-d5870f5354a1/Leonardo_Phoenix_Create_a_hyperrealistic_HDR_image_of_a_modern_2.jpg", price: "$600,000", location: "Aspen, CO" },
];

function PropertyCard({ title, image, price, location }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <img
          alt={title}
          className="w-full h-48 object-cover"
          height="200"
          src={image}
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          width="300"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <p className="text-green-800 font-bold mb-1">{price}</p>
        <p className="text-gray-600 text-sm">{location}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full bg-green-800 text-white hover:bg-green-900 transition-colors">Learn More</Button>
      </CardFooter>
    </Card>
    
  );
}